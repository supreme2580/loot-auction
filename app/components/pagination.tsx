export default function Pagination(){
    return(
        <div className="flex flex-row items-center justify-center space-x-4">
            <button className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:border-[rgb(50,255,52)] border border-white px-3 py-1 rounded hover:bg-transparent hover:text-[rgb(50,255,52)]">Previous</button>
            <p className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:text-[rgb(50,255,52)]">1</p>
            <p className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:text-[rgb(50,255,52)]">2</p>
            <p className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:text-[rgb(50,255,52)]">3</p>
            <p className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:text-[rgb(50,255,52)]">4</p>
            <p className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:text-[rgb(50,255,52)]">5</p>
            <button className="text-white text-sm font-orbitron tracking-wide uppercase hover:cursor-pointer hover:border-[rgb(50,255,52)] border border-white px-3 py-1 rounded hover:bg-transparent hover:text-[rgb(50,255,52)]">Next</button>
        </div>
    )
}