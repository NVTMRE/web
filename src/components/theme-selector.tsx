"use client"

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

export default function ThemeSelector() {
    const {resolvedTheme} = useTheme()
    const [theme, setTheme] = useState<undefined | string>(undefined)

    useEffect(() => {
        setTheme(resolvedTheme);
    }, [resolvedTheme]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className={'hover:cursor-pointer'}>
                    {theme === "dark" ?
                        <Moon/>
                        : <Sun/>
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

    )
}