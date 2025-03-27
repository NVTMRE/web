import HeaderSections from "@/components/header/header-sections";

export default function Header() {
    return (
        <div className={'h-[3.5rem] w-screen px-[5rem] border-b-1 border-dashed border-border'}>
            <div className={'h-full w-full flex justify-between items-center px-8 border-x-1 border-dashed border-border'}>
                <div className={'flex gap-2 items-center h-full'}>
                    <p className={'text-primary font-bold align-middle'}>NVTMRE</p>
                </div>
                <HeaderSections/>
            </div>
        </div>
    )
}