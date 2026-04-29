import { AnimatedSpan, Terminal, TypingAnimation } from "./ui/terminal";

type RenderAnimatedSpansProps = {
    values: string[]
}

function RenderAnimatedSpans({ values = [] }: RenderAnimatedSpansProps) {
    return values.map(item => <AnimatedSpan className="text-green-500">{item}</AnimatedSpan>)
}

export default function HeroTerminal() {
    return (
        <Terminal className="h-[61%]">
            <TypingAnimation>bun nvtmre@latest init</TypingAnimation>
            <RenderAnimatedSpans values={[
                "✔ Planning UI/UX and choosing the right tech stack...",
                "✔ Selecting libraries and solutions...",
                "✔ Building responsive and modern interfaces...",
                "✔ Implementing robust backend functionality...",
                "✔ Testing and fixing bugs for reliability...",
                "✔ Optimizing performance and user experience..."
            ]}/>
            <TypingAnimation>Deploying the app to the production server...</TypingAnimation>
            <TypingAnimation>🚀 The application is live and ready to use!</TypingAnimation>
          </Terminal>
    )
}