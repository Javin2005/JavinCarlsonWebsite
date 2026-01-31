import { useState,useEffect } from "react"
import Hero from './components/Hero'
import Connection from "./components/Connection"
import ProjectCard from "./components/ProjectCard"
import Navibar from "./components/NaviBar"

function App(){

  const [about, setAbout] = useState<any>(null)

  const [projects, setProjects] = useState<any[]>([])

  useEffect(()  => {
    //About sectionen
    fetch("http://127.0.0.1:8000/about")
    .then(res => res.json())
    .then(data => {
      setAbout(data)
    })
    .catch(err => console.error("Kunde inte nå backend:", err))

    fetch("http://127.0.0.1:8000/projects")
    .then(res => res.json())
    .then(data => setProjects(data))
    
  }, [])

  return (

    <div className="min-h-screen bg-slate-900 text-white relative">

      <Navibar />

      <Connection connected={about !== null}/>

      {about && (
        <Hero
          firstName={about.first_name}
          lastName={about.last_name}
          role={about.role}
        />
      )}

      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-slate-200">Sample Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.tech_stack}
              difficulty={project.difficulty}
              featured={project.featured}
              githubUrl={project.github_url}
              />
          ))}
        </div>
      </div>
    </div>
    )
  }

export default App