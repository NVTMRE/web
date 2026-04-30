"use client"

import { navItems } from "@/config/nav-items";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
    const pathname = usePathname()

    const [show, setShow] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return (
        <>
            <MenuIcon
              size={20}
              onClick={() => setShow(prev => !prev)}
              className="md:hidden"
            />
            {mounted &&
              createPortal(
                <div
                  className={cn(
                    "fixed left-0 right-0 top-12 bottom-0 z-[60] backdrop-blur-xl transition-opacity bg-background/5 overflow-x-hidden",
                    show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
                  )}
                  onClick={() => setShow(false)}
                >
                  {navItems.map(item => (
                    <Link href={item.href} key={item.name}>
                        <Button variant={"ghost"} 
                            className={cn(
                                "flex justify-start p-8 w-full max-w-full rounded-none text-sm border-b-border",
                                pathname === item.href && "bg-green-500 text-background",
                            )}
                        >
                            {item.name}
                        </Button>
                    </Link>
                  ))}
                </div>,
                document.body
              )}
              <div className="hidden md:flex gap-2.5">
                {navItems.map(item => (
                      <Link href={item.href} key={item.name} 
                        className={cn(
                          "text-muted-foreground hover:text-foreground transition-color duration-300 text-sm",
                          pathname === item.href && "text-green-500 hover:text-green-500"
                        )}
                      >
                          {item.name}
                      </Link>
                    ))}
              </div>
        </>
    )
}