import { GHRepo } from "@/types/github"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { upperFirst } from "lodash"
import { Code, GitFork, Scale, Star, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RepoCard({ 
    name,
    description,
    url,
    homepage,
    language,
    stars,
    forks,
    updatedAt,
    licenseKey,
 }: GHRepo) {
    return (
        <Link href={homepage || url} target="_blank" className="w-full">
            <Card className="hover:ring-primary transition-all h-full flex flex-col">
                <CardHeader className="flex-1">
                    <CardTitle>{name ? upperFirst(name) : "No name"}</CardTitle>
                    <CardAction className="text-muted-foreground">{new Date(updatedAt).toLocaleDateString()}</CardAction>
                    <CardDescription>
                        {description ? description : "No description provided."}
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto flex flex-col gap-4 text-muted-foreground">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-1">
                            <Star size={14}/>
                            <p>{stars}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <GitFork size={14}/>
                            <p>{forks}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Scale size={14}/>
                            <p>{licenseKey?.toUpperCase() || "None"}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Code size={14}/>
                            <p>{language || "None"}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}