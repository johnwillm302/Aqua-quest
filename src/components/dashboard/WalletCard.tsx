import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface WalletCardProps {
  user: any;
}

export const WalletCard = ({ user }: WalletCardProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (user?.email) {
      navigator.clipboard.writeText(user.email);
      setCopied(true);
      toast.success("Address copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Card className="glass-card border-primary/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Wallet className="w-5 h-5" />
          Wallet Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Connected Account</p>
          <div className="flex items-center gap-2">
            <p className="font-mono text-sm">{user?.email || "Not connected"}</p>
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-primary/10 rounded transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <p className="font-semibold text-green-500">Connected</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Network</p>
            <p className="font-semibold">Hedera Mainnet</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};