import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Image, Trophy } from "lucide-react";

export const RewardsGrid = () => {
  const mockNFTs = [
    { id: 1, name: "Crystal Shell", rarity: "Rare", image: "🐚" },
    { id: 2, name: "Ocean Guardian", rarity: "Epic", image: "🛡️" },
    { id: 3, name: "Deep Diver", rarity: "Legendary", image: "🤿" },
  ];

  return (
    <div className="space-y-6">
      <Card className="glass-card border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Droplet className="w-5 h-5" />
            Token Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
              <span className="font-medium">$DROP Tokens</span>
              <span className="text-2xl font-bold text-primary">1,234</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg">
              <span className="font-medium">HBAR Earned</span>
              <span className="text-2xl font-bold text-secondary">45.67</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Image className="w-5 h-5" />
            NFT Collection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {mockNFTs.map((nft) => (
              <div
                key={nft.id}
                className="glass-card p-4 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-4xl mb-2">{nft.image}</div>
                <p className="font-semibold text-sm">{nft.name}</p>
                <p className="text-xs text-muted-foreground">{nft.rarity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};