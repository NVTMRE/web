import { Modules } from "@/types/modules";
import { Boxes, ChartLine, Home, Phone, User } from "lucide-react";

export const modules: Modules = [
    {
        name: "Home",
        href: "/",
        icon: Home
    },
    {
        name: "About",
        href: "/about",
        icon: User
    },
    {
        name: "Skills",
        href: "/skills",
        icon: ChartLine
    },
    {
        name: "Projects",
        href: "/projects",
        icon: Boxes
    },
    {
        name: "Contact",
        href: "/contact",
        icon: Phone
    }
];