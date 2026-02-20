import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function ClientsPage() {
  const clients = [
    {
      id: 1,
      name: "Cornus Restaurant",
      score: 78,
      trend: "up" as const,
      sparkline: [65, 68, 70, 72, 75, 78],
    },
    {
      id: 2,
      name: "Tech Startup Inc",
      score: 85,
      trend: "up" as const,
      sparkline: [78, 80, 82, 83, 84, 85],
    },
    {
      id: 3,
      name: "Local Cafe",
      score: 62,
      trend: "down" as const,
      sparkline: [70, 68, 66, 65, 63, 62],
    },
    {
      id: 4,
      name: "Law Office",
      score: 91,
      trend: "stable" as const,
      sparkline: [90, 91, 90, 91, 91, 91],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Clients</h1>
        <p className="text-slate-400 mt-2">
          Manage multiple client accounts and their AI visibility
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card
            key={client.id}
            className="hover:-translate-y-1 hover:shadow-2xl transition-all cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
                  <Badge variant="default" className="text-xs">
                    Active
                  </Badge>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-lg font-bold">
                  {client.name.charAt(0)}
                </div>
              </div>

              {/* Score Display */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">AI Visibility Score</p>
                  <p className="text-3xl font-bold">{client.score}</p>
                </div>
                <div className="flex items-center gap-2">
                  {client.trend === "up" && (
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  )}
                  {client.trend === "down" && (
                    <TrendingDown className="h-5 w-5 text-rose-500" />
                  )}
                  {client.trend === "stable" && (
                    <Minus className="h-5 w-5 text-slate-500" />
                  )}
                </div>
              </div>

              {/* Simple Sparkline */}
              <div className="h-12 flex items-end gap-1">
                {client.sparkline.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] rounded-t"
                    style={{ height: `${value}%` }}
                  ></div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
