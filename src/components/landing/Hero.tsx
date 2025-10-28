import { Button } from "@/components/ui/button";
import { Waves, Droplet, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center ocean-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Droplet className="absolute top-20 left-10 w-12 h-12 text-white/20 animate-float" />
        <Droplet className="absolute top-40 right-20 w-8 h-8 text-white/30 animate-float" style={{ animationDelay: "1s" }} />
        <Droplet className="absolute bottom-40 left-1/4 w-16 h-16 text-white/20 animate-float" style={{ animationDelay: "2s" }} />
        <Trophy className="absolute top-1/3 right-1/4 w-10 h-10 text-white/20 animate-float" style={{ animationDelay: "1.5s" }} />
        <Waves className="absolute bottom-0 left-0 w-full h-48 text-white/10" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Dive into Web3
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-medium">
            Clean the Ocean. Earn Rewards.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Join AquaQuest and explore a virtual ocean world where your actions matter. 
            Collect clean water droplets, battle pollution monsters, and earn real Web3 rewards 
            powered by Hedera Hashgraph.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => navigate("/game")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
            >
              <Droplet className="w-5 h-5 mr-2" />
              Play Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/auth")}
              className="glass-card border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold"
            >
              Connect Wallet
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
              <Droplet className="w-12 h-12 text-white mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-white font-bold text-xl mb-2">Earn $DROP Tokens</h3>
              <p className="text-white/80 text-sm">Collect water droplets and earn HTS tokens</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
              <Trophy className="w-12 h-12 text-white mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-white font-bold text-xl mb-2">Win NFT Rewards</h3>
              <p className="text-white/80 text-sm">Unlock rare collectibles and achievements</p>
            </div>
            <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
              <Waves className="w-12 h-12 text-white mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-white font-bold text-xl mb-2">Clean the Ocean</h3>
              <p className="text-white/80 text-sm">Fight pollution and make an impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};