import { Users, Droplet, Image } from "lucide-react";

export const GlobalStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <Users className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl font-bold text-primary mb-2">1,234</div>
        <p className="text-muted-foreground">Active Players</p>
      </div>

      <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <Droplet className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl font-bold text-primary mb-2">56,789</div>
        <p className="text-muted-foreground">$DROP Tokens Earned</p>
      </div>

      <div className="glass-card p-8 rounded-2xl text-center hover:scale-105 transition-transform">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <Image className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl font-bold text-primary mb-2">5,432</div>
        <p className="text-muted-foreground">NFTs Minted</p>
      </div>
    </div>
  );
};