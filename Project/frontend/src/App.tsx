import { useState,useEffect } from "react"

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
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-4">
      
      <h1 className="text-6xl font-black tracking-tighter uppercase">
        {about ? (
          <>
          {about.name}<span className="text-blue-500">{about.last_name}</span>
          </>
        ):(
          "Loading..."
        )}
      </h1>

      <p className="text-xl text-blue-400 mt-2 font-light tracking-widest">
        {about?.role}
      </p>
      

      <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-
      slate-700">
        <div className={`w-3 h-3 rounded-full ${about ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`}>
      </div>
      
        <span className="text-xs font-mono text-slate-400">
          {about ? 'BACKEND ANSLUTEN' : 'SÖKER BACKEND...'}
        </span>
      </div>
      </div>

    );
  }

export default App