import {sections} from "@/config/sections";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {headers} from "next/headers";
import ThemeSelector from "@/components/theme-selector";

export default async function HeaderSections() {
    const currentPath = (await headers()).get('x-invoke-path') || '/'

    return (
        <div className={'flex justify-center items-center gap-2'}>
            {sections.map(section =>
                <Link href={section.href} key={section.name} className={cn('hover:text-primary transition', currentPath === section.href && 'text-primary')}>
                    {section.name}
                </Link>
            )}
            <ThemeSelector/>
        </div>
    )
}