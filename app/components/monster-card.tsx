import Image from "next/image";

type MonsterCardProps = {
    selected: boolean;
    onToggle: () => void;
};

export default function MonsterCard({ selected, onToggle }: MonsterCardProps) {
    return (
        <div className="relative w-full h-full">
            {selected && (
                <div className="absolute bottom-0 -right-3.5 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[rgb(50,255,52)] bg-black text-[rgb(50,255,52)]">
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>
            )}
            <div
                role="button"
                tabIndex={0}
                onClick={onToggle}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onToggle();
                    }
                }}
                className={`w-full h-full bg-transparent border border-[rgb(50,255,52)] rounded-lg p-4 space-y-2 transition-all duration-300 hover:cursor-pointer hover:scale-105 ${selected ? "ring-2 ring-[rgb(50,255,52)]" : ""}`}
            >
                <Image src="/logo.png" alt="logo" width={500} height={100} draggable={false} className="bg-[rgb(50,255,52)] rounded-lg p-1" />
                <h1>Monster Name</h1>
                <p>#3312</p>
            </div>
        </div>
    );
}