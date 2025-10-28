import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Droplet, ArrowRight } from "lucide-react";

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="glass-card p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto ocean-gradient">
          <Droplet className="w-20 h-20 text-white mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Dive In?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of ocean guardians earning real Web3 rewards. 
            Connect your wallet and start your adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/leaderboard")}
              className="glass-card border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold"
            >
              View Leaderboard
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Active Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-white/80">$DROP Tokens Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-white/80">NFTs Minted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};