import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, CheckCircle2, AlertTriangle, Phone, Clock, MapPin, ExternalLink } from "lucide-react";

export default function SourcesPage() {
  const sources = [
    {
      name: "Your Website",
      url: "canalrestaurant.com",
      logo: <Globe className="h-6 w-6" />,
      status: "healthy" as const,
      citationRate: 92,
      lastCrawled: "2 hours ago",
      hours: "9 AM - 10 PM",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, New York, NY",
      issues: [],
      schemaPresent: true,
    },
    {
      name: "Google Business",
      url: "google.com/business",
      logo: <Globe className="h-6 w-6" />,
      status: "issues" as const,
      citationRate: 78,
      lastCrawled: "1 hour ago",
      hours: "10 AM - 10 PM",
      phone: "+1 555-123-4567",
      address: "123 Main Street, New York, NY",
      issues: ["Hours mismatch", "Phone format inconsistent"],
      schemaPresent: true,
    },
    {
      name: "Yelp",
      url: "yelp.com",
      logo: <Globe className="h-6 w-6" />,
      status: "issues" as const,
      citationRate: 65,
      lastCrawled: "30 min ago",
      hours: "9 AM - 9 PM",
      phone: "(555) 123-4567",
      address: "123 Main St, NYC",
      issues: ["Hours mismatch", "Address abbreviated"],
      schemaPresent: false,
    },
    {
      name: "TripAdvisor",
      url: "tripadvisor.com",
      logo: <Globe className="h-6 w-6" />,
      status: "healthy" as const,
      citationRate: 88,
      lastCrawled: "45 min ago",
      hours: "9 AM - 10 PM",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, New York, NY",
      issues: [],
      schemaPresent: true,
    },
    {
      name: "OpenTable",
      url: "opentable.com",
      logo: <Globe className="h-6 w-6" />,
      status: "healthy" as const,
      citationRate: 95,
      lastCrawled: "3 hours ago",
      hours: "9 AM - 10 PM",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, New York, NY 10001",
      issues: [],
      schemaPresent: true,
    },
    {
      name: "Facebook",
      url: "facebook.com/canalrestaurant",
      logo: <Globe className="h-6 w-6" />,
      status: "issues" as const,
      citationRate: 70,
      lastCrawled: "6 hours ago",
      hours: "9:00 AM - 10:00 PM",
      phone: "555-123-4567",
      address: "123 Main, NY",
      issues: ["Phone missing country code", "Address incomplete"],
      schemaPresent: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sources</h1>
          <p className="text-slate-400 mt-2">
            Monitor data consistency across your website and third-party directories
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="success" className="text-xs">3 In Sync</Badge>
          <Badge variant="warning" className="text-xs">3 Need Attention</Badge>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Total Sources</p>
                <p className="text-2xl font-bold mt-1">{sources.length}</p>
              </div>
              <Globe className="h-8 w-8 text-purple-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Avg. Citation Rate</p>
                <p className="text-2xl font-bold mt-1 text-emerald-400">81%</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-emerald-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Active Issues</p>
                <p className="text-2xl font-bold mt-1 text-amber-400">6</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Source Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sources.map((source) => (
          <Card 
            key={source.name}
            className={`
              relative overflow-hidden transition-all hover:shadow-lg
              ${source.status === 'healthy' 
                ? 'border-emerald-500/20 hover:border-emerald-500/40' 
                : 'border-amber-500/20 hover:border-amber-500/40'
              }
            `}
          >
            {/* Status indicator line */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              source.status === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'
            }`}></div>
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`
                    flex h-10 w-10 items-center justify-center rounded-xl
                    ${source.status === 'healthy' ? 'bg-emerald-500/10' : 'bg-amber-500/10'}
                  `}>
                    {source.logo}
                  </div>
                  <div>
                    <CardTitle className="text-base">{source.name}</CardTitle>
                    <a 
                      href={`https://${source.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-purple-400 flex items-center gap-1 mt-0.5"
                    >
                      {source.url}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <Badge variant={source.status === "healthy" ? "success" : "warning"} className="text-xs shrink-0">
                  {source.status === "healthy" ? "In Sync" : "Action Needed"}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Citation Rate */}
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-400 font-medium">Citation Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{source.citationRate}%</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-500">Updated {source.lastCrawled}</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      source.citationRate >= 85
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-lg shadow-emerald-500/20"
                        : source.citationRate >= 70
                        ? "bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/20"
                        : "bg-gradient-to-r from-rose-600 to-rose-500 shadow-lg shadow-rose-500/20"
                    }`}
                    style={{ width: `${source.citationRate}%` }}
                  ></div>
                </div>
              </div>

              {/* Issues List */}
              {source.issues.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Detected Issues</p>
                  <div className="flex flex-wrap gap-2">
                    {source.issues.map((issue, idx) => (
                      <Badge key={idx} variant="warning" className="text-xs">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Extracted Data */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Extracted Data</p>
                <div className="space-y-2">
                  <div className="flex items-start justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      <span className="text-xs">Hours</span>
                    </div>
                    <Badge 
                      variant={source.hours === "9 AM - 10 PM" ? "success" : "warning"}
                      className="text-xs font-mono"
                    >
                      {source.hours}
                    </Badge>
                  </div>
                  <div className="flex items-start justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Phone className="h-3.5 w-3.5" />
                      <span className="text-xs">Phone</span>
                    </div>
                    <Badge 
                      variant={source.phone === "+1 (555) 123-4567" ? "success" : "warning"}
                      className="text-xs font-mono"
                    >
                      {source.phone}
                    </Badge>
                  </div>
                  <div className="flex items-start justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-xs">Address</span>
                    </div>
                    <Badge 
                      variant={source.address === "123 Main St, New York, NY" ? "success" : "warning"}
                      className="text-xs max-w-[60%] truncate"
                      title={source.address}
                    >
                      {source.address}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Schema Status */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400">JSON-LD Schema</span>
                {source.schemaPresent ? (
                  <Badge variant="success" className="text-xs">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Present
                  </Badge>
                ) : (
                  <Badge variant="error" className="text-xs">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Missing
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
