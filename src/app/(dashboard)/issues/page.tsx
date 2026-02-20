import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function IssuesPage() {
  const issues = [
    {
      id: 1,
      title: "Conflicting Hours on Yelp",
      description: "Operating hours mismatch detected",
      severity: "critical" as const,
      source: "Yelp",
      time: "2 hours ago",
      conflict: {
        truth: "9 AM - 10 PM",
        found: "9 AM - 9 PM",
      },
    },
    {
      id: 2,
      title: "Missing Schema Markup",
      description: "No JSON-LD schema found on homepage",
      severity: "warning" as const,
      source: "Website",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Phone Format Inconsistency",
      description: "Phone number format varies across 6 directories",
      severity: "warning" as const,
      source: "Multiple Sources",
      time: "1 day ago",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Issues</h1>
          <p className="text-slate-400 mt-2">
            Data conflicts and optimization opportunities
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2">
          <Button variant="primary" size="sm">
            Critical
          </Button>
          <Button variant="secondary" size="sm">
            Warnings
          </Button>
          <Button variant="ghost" size="sm">
            Resolved
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {issues.map((issue) => (
          <Card key={issue.id} className="hover:border-slate-700 transition-all">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Severity Badge */}
                <div className="pt-1">
                  <Badge variant={issue.severity === "critical" ? "error" : "warning"}>
                    {issue.severity}
                  </Badge>
                </div>

                {/* Issue Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1">{issue.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{issue.description}</p>

                  {/* Conflict Details */}
                  {issue.conflict && (
                    <div className="rounded-xl bg-slate-800/50 p-4 mb-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Entity Truth:</span>
                        <Badge variant="success">{issue.conflict.truth}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400">Found on {issue.source}:</span>
                        <Badge variant="error">{issue.conflict.found}</Badge>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{issue.source}</span>
                      <span>•</span>
                      <span>{issue.time}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Ignore
                      </Button>
                      <Button variant="primary" size="sm">
                        Resolve
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
