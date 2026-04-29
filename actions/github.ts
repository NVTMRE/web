"use server"

import { ActionResponse } from "@/types/action"
import { GHRepos } from "@/types/github"

/**
 * Filtering, sorting, and pagination through action parameters.
 * @param filters - filter object: { language?: string, isFork?: boolean, topic?: string }
 * @param sortBy - sorting: "stars" | "forks" | "updated" | "name" (default: stars)
 * @param sortOrder - "desc" | "asc" (default: desc)
 * @param limit - limit of repos to return (default: 100, max: 100)
 * @param offset - offset of repos (default: 0)
 */
export async function getGHRepos({
    filters = {},
    sortBy = "updated",
    sortOrder = "desc",
    limit = 100,
    offset = 0,
}: {
    filters?: {
        language?: string
        isFork?: boolean
        topic?: string
    }
    sortBy?: "stars" | "forks" | "updated" | "name"
    sortOrder?: "desc" | "asc"
    limit?: number
    offset?: number
} = {}): Promise<ActionResponse<GHRepos>> {
    try {
        // Prepare query parameters for GitHub API
        // Prefer using the GitHub "search/repositories" endpoint for filtering, sorting, pagination in the API itself
        const queryParts: string[] = [];

        // Search only user repos
        queryParts.push(`user:nvtmre`);

        if (filters.language) {
            queryParts.push(`language:${filters.language}`);
        }
        if (filters.topic) {
            queryParts.push(`topic:${filters.topic}`);
        }
        // GitHub API cannot directly filter by isFork, so we filter afterwards if needed

        // Construct base query
        const query = queryParts.join(" ");

        // GitHub API mapping between our sort fields and their supported sort fields
        let ghSortBy = "stars";
        let ghOrder = sortOrder;
        switch (sortBy) {
            case "stars": ghSortBy = "stars"; break;
            case "forks": ghSortBy = "forks"; break;
            case "updated": ghSortBy = "updated"; break;
            case "name": 
                // API search does not support sorting by name, handle after fetch
                ghSortBy = "stars"; // fallback, sort by name later
                break;
            default: ghSortBy = "stars";
        }
        
        // per_page limited to 100 by GitHub
        const safeLimit = Math.max(1, Math.min(100, limit ?? 100));
        const safePage = Math.floor((offset ?? 0) / safeLimit) + 1;

        // Build URL
        let apiUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=${safeLimit}&page=${safePage}`;
        if (sortBy !== "name") {
            apiUrl += `&sort=${ghSortBy}&order=${ghOrder}`;
        }

        const res = await fetch(
            apiUrl,
            {
                headers: { Accept: "application/vnd.github+json" },
                next: { revalidate: 3600 }
            }
        );

        if (!res.ok) {
            return {
                status: false,
                error: `GitHub API error: ${res.status} ${res.statusText}`,
                data: []
            };
        }

        const json = await res.json();

        let items: any[] = [];
        // The search/repositories endpoint wraps repos in .items
        if (Array.isArray(json.items)) {
            items = json.items;
        } else if (Array.isArray(json)) {
            items = json;
        } else {
            items = [];
        }

        let data: GHRepos = items.map((item: any) => ({
            fullName: item.full_name,
            name: item.name,
            description: item.description,
            url: item.html_url,
            homepage: item.homepage ?? null,
            language: item.language,
            topics: item.topics ?? [],
            stars: item.stargazers_count,
            forks: item.forks_count,
            updatedAt: item.updated_at,
            licenseKey: item.license?.key,
            isFork: item.fork
        }));

        // Filter by fork if requested
        if (filters.isFork !== undefined) {
            data = data.filter(repo => repo.isFork === filters.isFork);
        }

        // If sortBy is "name" (not supported by API), sort here
        if (sortBy === "name") {
            data = data.sort((a, b) => {
                const cmp = a.name.localeCompare(b.name);
                return sortOrder === "asc" ? cmp : -cmp;
            });
        }

        // Slice in case the user asks for offset/limit not aligned with per_page/page
        // (e.g. offset: 2, limit: 7 in page size batches of 5)
        const start = (offset ?? 0) % safeLimit;
        const end = start + safeLimit > start + (limit ?? 100) ? start + (limit ?? 100) : start + safeLimit;
        data = data.slice(start, end);

        return {
            status: true,
            data,
        };
    } catch (error: any) {
        return {
            status: false,
            error: error?.message || "Unknown fetch error",
        };
    }
}