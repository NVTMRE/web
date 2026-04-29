import { getGHRepos } from "@/actions/github"
import { techStack } from "@/config/tech-stack"
import TechStackRender from "../components/tech-stack-render"

export default async function AboutPage() {
  const { status, data: repos = [] } = await getGHRepos({ limit: 100, sortBy: "stars" })

  const totalStars = repos.reduce((acc, repo) => acc + repo.stars, 0)
  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean))
  ).sort()

  return (
    <main className="grid [&>section]:border-b">
      <section className="p-8">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-green-500">About</p>
          <h1 className="text-4xl font-semibold">Modern web, backend and automation with a practical edge.</h1>
          <p className="text-muted-foreground">
            I build polished, high-performance applications that combine modern frontend UX with
            reliable backend APIs, deployment-ready infrastructure and pragmatic automation.
          </p>
        </div>
      </section>

      <section className="p-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6 rounded border border-border bg-background/50 p-8">
          <div>
            <h2 className="text-2xl font-semibold">Short bio</h2>
            <p className="mt-4 text-muted-foreground">
              I’m a product-minded developer who turns ideas into interactive digital products.
              I design clean interfaces, build responsive frontend experiences, and connect them
              with robust backend services so applications work smoothly on every device.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What I build</h2>
            <p className="mt-4 text-muted-foreground">
              My work spans landing pages, dashboards, integrations, REST APIs and developer
              tooling. I deliver solutions that are easy to maintain, fast to load and ready for
              real-world deployment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="mt-4 text-muted-foreground">
              1 year and 3 months building commercial applications with React, TypeScript,
              Tailwind and Node.js — plus infrastructure for deployment, monitoring and CI/CD.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">GitHub activity</h2>
            <p className="mt-4 text-muted-foreground">
              I maintain open source libraries, publish tools for other developers, and iterate
              on public repositories with real users in mind — from frontend components to
              API integrations and automation scripts.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded border border-border bg-background/50 p-8">
            <h3 className="text-xl font-semibold">Tech stack</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <TechStackRender key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div className="rounded border border-border bg-background/50 p-8">
            <h3 className="text-xl font-semibold">GitHub stats</h3>
            <div className="mt-6 grid gap-4">
              <div className="rounded border border-border p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Public repos</p>
                <p className="mt-2 text-3xl font-semibold">{repos.length}</p>
              </div>
              <div className="rounded border border-border p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Total stars</p>
                <p className="mt-2 text-3xl font-semibold">{totalStars}</p>
              </div>
              <div className="rounded border border-border p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Languages</p>
                <p className="mt-2 text-3xl font-semibold">{languages.length}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
