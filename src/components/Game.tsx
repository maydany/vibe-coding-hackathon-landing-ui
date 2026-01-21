import PhaserGame from './PhaserGame';

export const Game = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-black pt-20">
            {/* Added pt-20 to account for navbar if it's fixed, or just to give some spacing */}
            <div className="relative overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                <PhaserGame />
            </div>
        </div>
    );
};
