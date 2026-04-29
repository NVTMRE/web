export type GHRepo = {
    fullName: string
    name: string
    description: string | null
    url: string
    homepage?: string | null
    language: string | null
    topics: string[]
    stars: number
    forks: number
    updatedAt: string
    licenseKey?: string
    isFork: boolean
}

export type GHRepos = GHRepo[]