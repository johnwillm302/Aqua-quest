import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Droplet, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AquaQuest
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/game" className="text-foreground hover:text-primary transition-colors font-medium">
              Play
            </Link>
            <Link to="/leaderboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Leaderboard
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-card border-primary/30 hover:border-primary/50"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connected
                </Button>
                <Button
                  onClick={handleSignOut}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                onClick={() => navigate("/auth")}
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};