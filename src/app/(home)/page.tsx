import { Metadata } from 'next';
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";

export const metadata: Metadata = {
    title: 'Chintey - Software Developer',
    description: 'Software Developer specializing in TypeScript, React, and React Native. Passionate about Anime and Open Source.',
    openGraph: {
        url: 'https://ctey.dev',
    },
    alternates: {
        canonical: 'https://ctey.dev',
    },
};

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col items-center justify-center p-4">
            <Terminal>
                <TypingAnimation>&gt; whoami</TypingAnimation>

                <AnimatedSpan delay={1200} className="text-green-500">
                    <span>✔ Name: Chintey</span>
                </AnimatedSpan>

                <AnimatedSpan delay={1800} className="text-green-500">
                    <span>✔ Role: Software Developer</span>
                </AnimatedSpan>

                <AnimatedSpan delay={2400} className="text-green-500">
                    <span>✔ Specializes in: TypeScript, React, React Native</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-500">
                    <span>✔ Passionate about: Anime, Open Sourced</span>
                </AnimatedSpan>

                <AnimatedSpan delay={3600} className="text-green-500">
                    <span>✔ Location: Earth 🌍</span>
                </AnimatedSpan>

                <AnimatedSpan delay={4200} className="text-blue-500">
                    <span>ℹ Contact: chintey@ctey.dev</span>
                </AnimatedSpan>

                <TypingAnimation delay={4800} className="text-muted-foreground">
                    Welcome! Let&apos;s build something amazing together.
                </TypingAnimation>
            </Terminal>
        </main>
    );
}