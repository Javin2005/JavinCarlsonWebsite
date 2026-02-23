import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navibar from "./components/Navibar";
import Connection from "./components/Connection";
import Home from "./pages/Home";
import Education from "./pages/Education";


function App() {
  const [about, setAbout] = useState<any>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Kunde inte nå backend:", err));
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white relative">
        <Navibar />
        <Connection connected={about !== null} />

        <main className="pt-20"> 
          <Routes>
            {/* Startsidan skickar med 'about' data */}
            <Route path="/" element={<Home about={about} />} />
            
            <Route path="/education" element={<Education />} />
            <Route path="/career" element={<Education />} />
            <Route path="/Contact" element={<Education />} /> 

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;