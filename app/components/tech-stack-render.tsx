import { TechItem } from "@/types/tech-stack";
import Image from "next/image";
import Link from "next/link";


export default function TechStackRender({ tech }: { tech: TechItem }) {
    return (
        <Link
            href={tech.url}
            target="_blank"
            className="group/item inline-flex items-center gap-1.5 px-1.5 rounded cursor-pointer hover:scale-105 transition-all duration-200"
        >
            <Image
                src={tech.image}
                alt={tech.name}
                width={20}
                height={20}
            />
            <span className="text-[20px] font-bold text-gray-400 transition-colors duration-200 group-hover/item:text-gray-600">{tech.name}</span>
        </Link>
    );
}