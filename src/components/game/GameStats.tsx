import { Trophy, Droplet, Image } from "lucide-react";

interface GameStatsProps {
  score: number;
  drops: number;
  nfts: number;
}

export const GameStats = ({ score, drops, nfts }: GameStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Score</p>
            <p className="text-2xl font-bold text-primary">{score}</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Droplet className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">$DROP Tokens</p>
            <p className="text-2xl font-bold text-primary">{drops}</p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Image className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">NFTs Earned</p>
            <p className="text-2xl font-bold text-primary">{nfts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};