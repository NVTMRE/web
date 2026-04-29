import HeroTerminal from "@/components/hero-terminal";
import HoverCard from "@/components/hover-card";
import Logo from "@/components/logo";
import HeroRepos from "./components/hero-repos";
import { Suspense } from "react";
import Loader from "@/components/loader";
import { Marquee } from "@/components/ui/marquee";
import { techStack } from "@/config/tech-stack";
import TechStackRender from "./components/tech-stack-render";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {

	return (
		<main className="grid grid-cols-1 [&>div]:border-b">
			<div className="grid md:grid-cols-2 px-[5%]">
				<div className="h-[50vh] flex items-center justify-center md:justify-start">
				<Logo size={150} />
				<div>
					<h1>Hi I'm <b>NVTMRE</b></h1>
					<p>Software Developer</p>
				</div>
				</div>
				<div className="hidden md:flex items-center justify-end">
				<HeroTerminal />    
				</div>
			</div>
			<div className="grid md:grid-cols-3 divide-x divide-border [&>div]:p-8">
				<HoverCard className="flex flex-col">
				<div className="flex flex-col">
					<h3 className="font-medium">Web Development</h3>
					<p className="text-muted-foreground text-sm">Full-stack web apps with Next.js and React — from database to polished UI, built to scale.</p>
				</div>
				</HoverCard>
				<HoverCard className="flex flex-col">
				<h3 className="font-medium">Desktop & Automation</h3>
				<p className="text-muted-foreground text-sm">Native desktop apps with Tauri and Rust, plus Python scripts that eliminate repetitive work.</p>
				</HoverCard>
				<HoverCard className="flex flex-col">
				<h3 className="font-medium">Infrastructure</h3>
				<p className="text-muted-foreground text-sm">Server setup, Docker, CI/CD pipelines — code that ships reliably and stays running.</p>
				</HoverCard>
			</div>
			<div className="p-8 flex flex-col items-center gap-8">
				<h3 className="font-medium">Best OpenSource Projects</h3>
				<div className="w-full flex justify-center items-center">
					<Suspense fallback={<Loader />}>
						<HeroRepos />
					</Suspense>
				</div>
			</div>
			<div className="grid md:grid-cols-3 divide-x divide-border">
				<div className="flex justify-center items-center p-8"><h3 className="font-medium">Tech Stack</h3></div>
				<Marquee pauseOnHover className="[--duration:30s] md:col-span-2">
					{techStack.map((tech) => <TechStackRender key={tech.name} tech={tech} />)}
				</Marquee>
			</div>
			<div className="px-[5%] py-12 flex flex-col items-center justify-center gap-4 text-center">
				<p className="text-sm uppercase tracking-[0.33em] text-green-500">Have a project in mind?</p>
				<h2 className="text-3xl font-semibold">Let's talk.</h2>
				<Link href="/contact">
					<Button size="lg">Contact me</Button>
				</Link>
			</div>
		</main>
	)
}
