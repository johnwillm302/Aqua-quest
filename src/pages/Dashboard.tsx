import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { RewardsGrid } from "@/components/dashboard/RewardsGrid";
import { TransactionHistory } from "@/components/dashboard/TransactionHistory";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
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

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Player Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WalletCard user={user} />
            <RewardsGrid />
          </div>
          <div>
            <TransactionHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;