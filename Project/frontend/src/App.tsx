import { useState,useEffect } from "react"
import Hero from './components/Hero'

function App(){

  const [about, setAbout] = useState<any>(null)

  useEffect(()  => {
    fetch("http://127.0.0.1:8000/about")
    .then(res => res.json())
    .then(data => {
      setAbout(data)
    })
    .catch(err => console.error("Kunde inte nå backend:", err))
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {about && (
        <Hero
          firstName={"about.first_name"}
          lastName={"about.last_name"}
          role={"about.role"}
        />
      )}
    </div>

    );
  }

export default App