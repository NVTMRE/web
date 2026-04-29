import { getGHRepos } from "@/actions/github"
import RepoCard from "@/components/repo-card"
import WorkFilters from "@/components/work-filters"

export const dynamic = "force-dynamic"

export default async function WorkPage({
  searchParams,
}: {
  searchParams?: { lang?: string; sort?: string }
}) {
  const selectedLang = searchParams?.lang
  const selectedSort = (searchParams?.sort as "stars" | "forks" | "updated" | "name") || "stars"
  const [{ status, data: repos }, { data: allRepos }] = await Promise.all([
    getGHRepos({
      filters: selectedLang ? { language: selectedLang } : {},
      limit: 50,
      sortBy: selectedSort,
    }),
    getGHRepos({
      limit: 100,
      sortBy: "stars",
    }),
  ])

  const languages = Array.from(
    new Set(allRepos?.map((repo) => repo.language).filter(Boolean) ?? [])
  ).sort() as string[]

  const sortOptions: { value: "stars" | "forks" | "updated" | "name"; label: string }[] = [
    { value: "stars", label: "Most stars" },
    { value: "forks", label: "Most forks" },
    { value: "updated", label: "Recently updated" },
    { value: "name", label: "Name" },
  ]

  return (
    <main className="grid [&>section]:border-b">
      <section className="p-8">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-green-500">Work</p>
          <h1 className="text-4xl font-semibold">Public GitHub projects</h1>
          <p className="text-muted-foreground">
            This page loads public repositories from GitHub and lets you filter them by language.
          </p>
        </div>
      </section>

      {/* <section className="py-4 px-8 border-b ">
        <WorkFilters
          selectedLang={selectedLang}
          selectedSort={selectedSort}
          languages={languages}
          sortOptions={sortOptions}
        />
      </section> */}

      <section className="p-8">
        {status ? (
          repos?.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {repos.map((repo) => (
                <RepoCard key={repo.fullName} {...repo} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No repositories found for this language.</p>
          )
        ) : (
          <p className="text-red-400">Failed to load GitHub repositories right now.</p>
        )}
      </section>
    </main>
  )
}
