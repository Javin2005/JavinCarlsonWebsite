interface ConnectionProps {
    connected: boolean;
  }


export default function Connection({connected}:ConnectionProps) {

    return(
    <div className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm 
    rounded-full border border-slate-700 shadow-lg transition-all duration-500">
    <div className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
    connected ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]' : 'bg-red-500 animate-pulse'
    }`}>
    </div>

    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
    {connected ? 'Backend Online' : 'Söker Backend...'}
    </span>
    </div>
    )
}