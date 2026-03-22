//frontend/src/components/Hero

import { useTypewriter } from "../hooks/useTypewriter.ts";

interface HeroProps {
    firstName: string;
    lastName: string;
    role: string;
}



export default function Hero({ firstName, lastName, role}: HeroProps) {
    const displayed = useTypewriter(role)
    const first = useTypewriter(firstName)
    const last = useTypewriter(lastName)


    return (
        <section className="h-[50vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-black tracking-tighter uppercase">
                {first} <span className="text-blue-500">{last}</span>
            </h1>
            <p className="text-2xl text-slate-400 mt-4 uppercase tracking-[0.2em]">
                {displayed}
            </p>
        </section> 
    )
}