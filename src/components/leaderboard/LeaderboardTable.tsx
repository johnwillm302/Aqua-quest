import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal } from "lucide-react";

export const LeaderboardTable = () => {
  const mockLeaderboard = [
    { rank: 1, player: "OceanMaster", drops: 5420, nfts: 12, score: 54200 },
    { rank: 2, player: "WaveRider", drops: 4850, nfts: 10, score: 48500 },
    { rank: 3, player: "DeepDiver", drops: 4320, nfts: 9, score: 43200 },
    { rank: 4, player: "CoralKeeper", drops: 3890, nfts: 8, score: 38900 },
    { rank: 5, player: "TideGuardian", drops: 3540, nfts: 7, score: 35400 },
    { rank: 6, player: "SeaProtector", drops: 3210, nfts: 6, score: 32100 },
    { rank: 7, player: "AquaHero", drops: 2980, nfts: 5, score: 29800 },
    { rank: 8, player: "OceanSaver", drops: 2650, nfts: 5, score: 26500 },
  ];

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="font-bold text-muted-foreground">#{rank}</span>;
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden mt-8">
      <Table>
        <TableHeader>
          <TableRow className="border-primary/20 hover:bg-primary/5">
            <TableHead className="w-20">Rank</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">$DROP Tokens</TableHead>
            <TableHead className="text-right">NFTs</TableHead>
            <TableHead className="text-right">Total Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLeaderboard.map((player) => (
            <TableRow
              key={player.rank}
              className="border-primary/10 hover:bg-primary/5 transition-colors"
            >
              <TableCell className="font-medium">
                <div className="flex items-center justify-center">
                  {getRankBadge(player.rank)}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {player.player[0]}
                  </div>
                  <span className="font-medium">{player.player}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-semibold text-primary">
                {player.drops.toLocaleString()}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline" className="border-primary/30">
                  {player.nfts}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-bold text-lg">
                {player.score.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};