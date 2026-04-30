import Link from "next/link";
import Logo from "../logo";
import HeaderNav from "./header-nav";

export default function Header() {
    return (
        <div className="sticky top-0 left-0 right-0 h-12 w-full px-4 md:px-24 flex justify-between items-center border-b bg-background/75 backdrop-blur-md z-50">
            <Link href={"/"}><Logo size={28}/></Link>
            <HeaderNav />
        </div>
    )
}