import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div id="Hero" className="flex items-center justify-around h-screen">
        <div className="flex flex-col justify-center text-left max-w-xl gap-4">
          <div>
            <h2 className="font-medium text-sm text-primary">FULL STACK DEVELOPER</h2>
            <h1 className="text-6xl font-bold"><span className="text-muted-foreground">DESIGN</span> <br/> CREATE <br/> <span className="text-primary">DEPLOY</span></h1>
            <p className="text-base font-medium text-muted-foreground mt-2">I handle the comprehensive development of web applications and websites, leading projects from the conceptual phase through to final deployment based on the React and Next.js ecosystem.</p>
          </div>
          <div className="flex gap-4 item-center">
            <Link href={'/contact'}>
              <Button>
                <span>Contact with me</span>
                <ArrowRight />
              </Button> 
            </Link>
            <Link href={'/projects'}>
              <Button variant={'outline'}>
                <span>Projects</span>
                <Boxes/>
              </Button>
            </Link>
          </div>
        </div>
        <Image src={'/logo_light.png'} alt="Hero Image" width={200} height={200} />
      </div>
      <div id="About" className="flex justify-around items-center py-8 bg-muted/50 border-y-[1px] border-border">
        About
      </div>
      <div id="Skills" className="flex justify-around items-center py-8 bg-background border-y-[1px] border-border">
        Skills
      </div>
      <div id="Projects" className="flex justify-around items-center py-8 bg-muted/50 border-y-[1px] border-border">
        Projects
      </div>
      <div id="Contact" className="flex justify-around items-center py-8 bg-background border-y-[1px] border-border">
        Contact
      </div>
    </main>
  );
}
