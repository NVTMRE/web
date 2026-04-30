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
          <h1 className="text-4xl font-semibold">Web, desktop and automation engineering with a practical edge.</h1>
          <p className="text-muted-foreground">
            I build full-stack applications, native desktop tools and automation scripts with Next.js, React, Tauri, Rust and Python. My focus is practical products that are easy to use, easy to maintain, and ready to ship.
          </p>
        </div>
      </section>

      <section className="p-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6 rounded border border-border bg-background/50 p-8">
          <div>
            <h2 className="text-2xl font-semibold">Short bio</h2>
            <p className="mt-4 text-muted-foreground">
              I’m a product-minded developer who turns ideas into interactive digital products.
              I build web applications, desktop utilities and automation workflows that work together smoothly and reliably.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What I build</h2>
            <p className="mt-4 text-muted-foreground">
              I build websites, web apps, desktop tools and automation scripts. That includes Next.js/React frontends, Tauri/Rust desktop utilities and Python automation that saves time and reduces manual work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Experience</h2>
            <p className="mt-4 text-muted-foreground">
              1 year and 3 months building commercial products with React, TypeScript, Tailwind and Node.js — plus desktop and automation tooling in Tauri, Rust and Python, backed by deployment-ready CI/CD.
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

          <div>
            <h2 className="text-2xl font-semibold">How I work</h2>
            <p className="mt-4 text-muted-foreground">
              Each project follows a clear workflow: discovery, planning, implementation, testing and deployment. I keep the process predictable so projects are delivered cleanly and consistently.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-background/75 p-6 text-sm text-muted-foreground">
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500">01</span>
                  <span>Discover requirements and define scope.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500">02</span>
                  <span>Plan the architecture and choose the right tech stack.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500">03</span>
                  <span>Build web, desktop and automation components with clean, maintainable code.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500">04</span>
                  <span>Test, deploy and monitor the solution for reliability.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-green-500">05</span>
                  <span>Optimize for performance, stability and future maintenance.</span>
                </div>
              </div>
            </div>
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
