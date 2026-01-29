interface HeroProps {
    firstName: string;
    lastName: string;
    role: string;
}

export default function Hero({ firstName, lastName, role}: HeroProps) {
    return (
        <section className="h-[50vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-black tracking-tighter uppercase">
                {firstName} <span className="text-blue-500">{lastName}</span>
            </h1>
            <p className="text-2xl text-slate-400 mt-4 uppercase tracking-[0.2em]">
                {role}
            </p>
        </section> 
    )
}