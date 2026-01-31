

export default function Navibar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between 
        px-10 py-6 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">


            <div className="text-xl font-bold tracking-tighter cursor-pointer">
            JAVIN<span className="text-blue-500">.</span>
            </div>

            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                <li className="hover:text-white transition-colors cursor-pointer text-white">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Education</li>
                <li className="hover:text-white transition-colors cursor-pointer">Career</li>
                <li className="hover:text-white transition-colors cursor-pointer">Portfolio</li>
            </ul>


            <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Contact me
            </button>
        </nav>
    )
}