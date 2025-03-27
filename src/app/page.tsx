import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <section id={'Hero'} className={'h-[calc(100vh-7rem)] flex flex-col gap-8 justify-center items-center'}>
        <Image src={'/logo.png'} alt={'logo'} height={250} width={250}/>
        <p className={'text-4xl tracking-tight'}>
            Hi, <span className={'text-muted-foreground'}>embracing challenges to build a </span>
            <b className={'text-primary'}>BETTER WORLD</b>
        </p>
      </section>
    </div>
  );
}
