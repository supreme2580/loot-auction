import MonsterCollectionCard from "./monster-collection-card";

export default function Bids() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 w-full h-full">
            {
                Array.from({ length: 10 }).map((_, index) => (
                    <MonsterCollectionCard key={index} />
                ))
            }
        </div>
    )
}