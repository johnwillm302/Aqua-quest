import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const TransactionHistory = () => {
  const mockTransactions = [
    { id: 1, type: "Token Reward", amount: "+10 $DROP", status: "Success", time: "2m ago" },
    { id: 2, type: "NFT Mint", amount: "Crystal Shell", status: "Success", time: "15m ago" },
    { id: 3, type: "Token Reward", amount: "+5 $DROP", status: "Success", time: "1h ago" },
    { id: 4, type: "Monster Defeat", amount: "+50 XP", status: "Success", time: "2h ago" },
  ];

  return (
    <Card className="glass-card border-primary/30 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Clock className="w-5 h-5" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors"
            >
              <div className="flex-1">
                <p className="font-medium text-sm">{tx.type}</p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-primary">{tx.amount}</p>
                <Badge variant="outline" className="text-xs border-green-500 text-green-500">
                  {tx.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};