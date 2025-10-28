import { Gamepad2, Coins, Image } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Gamepad2,
      title: "Play",
      description: "Dive into the ocean, collect clean water droplets, and defeat pollution monsters",
      step: "01"
    },
    {
      icon: Coins,
      title: "Earn",
      description: "Each action rewards you with $DROP tokens through Hedera Token Service",
      step: "02"
    },
    {
      icon: Image,
      title: "Mint NFT",
      description: "Unlock rare NFT collectibles for milestones and achievements",
      step: "03"
    }
  ];

  return (
    <section className="py-20 ocean-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How AquaQuest Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three simple steps to start earning Web3 rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl text-center relative hover:scale-105 transition-all"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-lg">
                {step.step}
              </div>
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 mx-auto mt-4">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};