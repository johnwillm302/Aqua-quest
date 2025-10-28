import { Navbar } from "@/components/Navbar";
import { LeaderboardTable } from "@/components/leaderboard/LeaderboardTable";
import { GlobalStats } from "@/components/leaderboard/GlobalStats";

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Global Leaderboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Top ocean cleaners earning rewards
          </p>
        </div>
        
        <GlobalStats />
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default Leaderboard;