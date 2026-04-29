import { getGHRepos } from "@/actions/github"
import RepoCard from "@/components/repo-card"
import { TriangleAlert } from "lucide-react"

export default async function HeroRepos() {
    const {status, data: repos} = await getGHRepos({
		limit: 3,
		sortBy: "stars"
	})

    if (!status) {
        return (
            <p className="text-red-400">Failed to load GitHub repositories right now.</p>
        )
    }

    return (
        <div className="w-full grid grid-cols-3 gap-8">
            {repos?.map(repo => <RepoCard key={repo.fullName} {...repo} />)}
        </div>
    )
}