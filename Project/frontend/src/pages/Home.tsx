//frontend/src/pages/Home

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

interface HomeProps {
    about: any;
}

export default function Home({ about }: HomeProps) {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error when fetching backend Projects:", err));
    }, []);

    return (
        <>
            {/* 1. Din Hero-sektion */}
            {about && (
                <Hero
                    firstName={about.first_name}
                    lastName={about.last_name}
                    role={about.role}
                />
            )}

            {/* 2. Din Projekt-sektion */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold mb-10 text-slate-200">
                    Sample Projects
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Här loopar vi igenom alla projekt och skickar med ALL data */}
                    {Array.isArray(projects) && projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.tech_stack}    // Notera: backend skickar 'tech_stack'
                            difficulty={project.difficulty}
                            featured={project.featured}
                            githubUrl={project.github_url}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}