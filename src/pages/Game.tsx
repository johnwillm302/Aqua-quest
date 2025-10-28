import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { GameCanvas } from "@/components/game/GameCanvas";
import { GameStats } from "@/components/game/GameStats";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Game = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);
  const [drops, setDrops] = useState(0);
  const [nfts, setNfts] = useState(0);

  useEffect(() => {
    // Check auth
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleCollectDrop = () => {
    setScore(prev => prev + 10);
    setDrops(prev => prev + 1);
    if (drops > 0 && drops % 5 === 0) {
      toast.success("💧 $DROP Token Earned!", {
        description: "Keep cleaning the ocean!"
      });
    }
  };

  const handleDefeatMonster = () => {
    setScore(prev => prev + 50);
    setNfts(prev => prev + 1);
    toast.success("🎉 NFT Reward Unlocked!", {
      description: "Crystal Shell added to your collection!"
    });
  };

  if (!user) return null;

  return (
    <div className="min-h-screen ocean-gradient">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <GameStats score={score} drops={drops} nfts={nfts} />
        <GameCanvas 
          onCollectDrop={handleCollectDrop}
          onDefeatMonster={handleDefeatMonster}
        />
      </div>
    </div>
  );
};

export default Game;