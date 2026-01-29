interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
    difficulty: number;
    featured: boolean;
    githubUrl: string | null;
}

export default function ProjectCard({title, description, techStack, difficulty, featured, githubUrl}:ProjectProps) {
    return (
        <div className={`relative bg-slate-800/50 border ${featured ? 'border-blue-500/50' : 'border-slate-700'} p-6 rounded-2xl
            hover:bg-slate-800 transition-all group shadow-xl`}>

            
            {featured && (
                <div className="absolute -top-3 left-6 bg-blue-500 text-[10px] font-black px-3 py-1 rounded-full text-white tracking-widest">
                    TOP PROJECT
                </div>
            )}


            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-color">
                {title}
            </h3>

            <p className="text-slate-400 text-sm mb-4">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map(tech => (
                    <span key={tech} className="text-[9px] bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-300 uppercase">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-1.5">
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`h-1 w-3 rounded-full ${i <= difficulty ? 'bg-blue-500' : 'bg-slate-700'}`}/>
                    ))}
                </div>

                {githubUrl && (
                    <a href={githubUrl} target="_blank" className="text-slate-400 hover:text-white transition-colors text-xs font-mono">
                        GITHUB →
                    </a>
                )}
            </div>
        </div>

    )
}