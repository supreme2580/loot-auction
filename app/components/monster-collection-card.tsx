import Image from "next/image";

export default function MonsterCollectionCard() {
    return (
        <div className="w-full h-full bg-transparent border border-[rgb(50,255,52)] rounded-lg p-4 space-y-2 hover:cursor-pointer hover:scale-105 transition-all duration-300">
            <Image src="/logo.png" alt="logo" width={500} height={100} draggable={false} className="bg-[rgb(50,255,52)] rounded-lg p-1" />
            <h1>Collection Name</h1>
            <p>Latest Bid: 100 ETH</p>
        </div>
    )
}