import { Shield, Zap, Globe, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Powered by Hedera",
      description: "Built on Hedera Hashgraph for fast, secure, and eco-friendly transactions"
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Earn $DROP tokens and NFTs instantly with every action you take"
    },
    {
      icon: Globe,
      title: "Verified Transactions",
      description: "All rewards and NFTs verified through Mirror Node API for transparency"
    },
    {
      icon: Award,
      title: "Play to Earn",
      description: "Complete missions, defeat monsters, and climb the global leaderboard"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Why AquaQuest?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The first underwater Web3 gaming platform combining fun, sustainability, and real rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};