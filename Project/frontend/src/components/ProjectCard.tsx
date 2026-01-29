interface ProjectProps {
    title: string;
    description: string;
    techStack: string[];
}

export default function ProjectCard({title, description, techStack}:ProjectProps) {
    return (
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-color">
                {title}
            </h3>
            <p className="text-slate-400 text-sm mb-4">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                    <span key={tech} className="text-[10px] bg-slate-900 px-2 py-1 rounded text-blue-300 uppercase tracking-widest">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}