import Image from "next/image";

type Props = {
    size?: number
}

export default function Logo({
    size = 100
}: Props) {
    return <Image src={'/logo.png'} className="invert dark:invert-0" height={size} width={size} alt="Logo" loading="eager"/>
}