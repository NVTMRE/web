"use client"

import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default async function Header() {
    const [extanded, setExtanded] = useState<boolean>(false)
    const pathname = usePathname()

    return (
        <header className="flex justify-between items-center px-4 fixed top-0 w-screen h-[3rem] border-b-[1px] border-border bg-background/50 backdrop-blur-sm">
            <Link href={'/'}>
                <Image src={'/logo_light.png'} alt="Logo" width={28} height={28}/>
            </Link>
            <Button variant={'ghost'} size={'sm'}>
                <AlignJustify/>
            </Button>
        </header>
    )
}