import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplet, Skull } from "lucide-react";

interface GameCanvasProps {
  onCollectDrop: () => void;
  onDefeatMonster: () => void;
}

export const GameCanvas = ({ onCollectDrop, onDefeatMonster }: GameCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="glass-card p-8 rounded-3xl mt-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2 text-primary">Underwater Mission</h2>
        <p className="text-muted-foreground">
          Collect water droplets and defeat pollution monsters
        </p>
      </div>

      <div
        ref={canvasRef}
        className="relative w-full h-[500px] rounded-2xl ocean-gradient overflow-hidden"
      >
        {!gameStarted ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="lg"
              onClick={() => setGameStarted(true)}
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 rounded-full font-bold animate-pulse-glow"
            >
              Start Mission
            </Button>
          </div>
        ) : (
          <div className="absolute inset-0 p-8">
            {/* Simple interactive game elements */}
            <div className="absolute top-20 left-20 cursor-pointer hover:scale-110 transition-transform" onClick={onCollectDrop}>
              <Droplet className="w-12 h-12 text-white animate-float" />
            </div>
            <div className="absolute top-40 right-32 cursor-pointer hover:scale-110 transition-transform" onClick={onCollectDrop}>
              <Droplet className="w-10 h-10 text-white animate-float" style={{ animationDelay: "0.5s" }} />
            </div>
            <div className="absolute bottom-32 left-1/3 cursor-pointer hover:scale-110 transition-transform" onClick={onCollectDrop}>
              <Droplet className="w-14 h-14 text-white animate-float" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute top-1/2 right-1/4 cursor-pointer hover:scale-110 transition-transform group" onClick={onDefeatMonster}>
              <Skull className="w-16 h-16 text-destructive animate-float group-hover:text-destructive/70" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass-card px-6 py-3 rounded-full">
              <p className="text-white font-medium">Click droplets to collect, defeat monsters for NFTs!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};