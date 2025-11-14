import { useCallback, useMemo, useState } from "react";
import MonsterCard from "./monster-card";

export default function Auction() {
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [startingPrice, setStartingPrice] = useState<string>("");

    const toggleCardSelection = useCallback((index: number) => {
        setSelectedCards((previouslySelected) => {
            if (previouslySelected.includes(index)) {
                return previouslySelected.filter((cardIndex) => cardIndex !== index);
            }

            return [...previouslySelected, index];
        });
    }, []);

    const hasSelection = useMemo(() => selectedCards.length > 0, [selectedCards.length]);

    return (
        <div className="flex w-full flex-col gap-6">
            <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
                {Array.from({ length: 10 }).map((_, index) => (
                    <MonsterCard
                        key={index}
                        selected={selectedCards.includes(index)}
                        onToggle={() => toggleCardSelection(index)}
                    />
                ))}
            </div>
            <div className="flex w-full flex-col gap-4 rounded-2xl border border-[rgb(50,255,52)]/40 bg-black/30 p-6 shadow-[0_0_30px_rgba(50,255,52,0.15)] backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-orbitron tracking-[0.2em] text-[rgb(186,255,188)]/70">Selected</p>
                        <p className="text-3xl font-orbitron uppercase tracking-[0.3em] text-white">
                            {selectedCards.length.toString().padStart(2, "0")}
                        </p>
                    </div>
                    <div className="flex w-full max-w-xs flex-col gap-2">
                        <label htmlFor="starting-price" className="text-xs font-orbitron uppercase tracking-[0.2em] text-[rgb(186,255,188)]/70">
                            Starting Price (ETH)
                        </label>
                        <input
                            id="starting-price"
                            type="number"
                            min="0"
                            step="0.01"
                            value={startingPrice}
                            onChange={(event) => setStartingPrice(event.target.value)}
                            placeholder="0.00"
                            className="w-full rounded-lg border border-[rgb(50,255,52)]/60 bg-black/60 px-3 py-2 text-sm font-orbitron uppercase tracking-wide text-white outline-none transition focus:border-[rgb(50,255,52)] focus:ring-2 focus:ring-[rgb(50,255,52)]/40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-orbitron uppercase tracking-[0.2em] text-[rgb(186,255,188)]/70 max-w-xl">
                        Tip: Starting Price is the minimum price you are willing to sell your collection for.
                    </p>
                    <button
                        type="button"
                        disabled={!hasSelection || !startingPrice}
                        className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[rgb(50,255,52)] px-6 py-2 text-sm font-orbitron hover:cursor-pointer uppercase tracking-[0.3em] transition ${
                            hasSelection && startingPrice
                                ? "bg-[rgb(50,255,52)]/10 text-[rgb(50,255,52)] hover:bg-[rgb(50,255,52)] hover:text-black"
                                : "cursor-not-allowed text-[rgb(186,255,188)]/50"
                        }`}
                    >
                        List Collection
                    </button>
                </div>
            </div>
        </div>
    );
}