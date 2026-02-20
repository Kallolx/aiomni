import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, TrendingUp, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon } from "lucide-react";

export default function ReportsPage() {
  const aiPlatforms = [
    { name: "ChatGPT", mentions: 45, citations: 38, accuracy: 85, color: "bg-blue-500" },
    { name: "Claude", mentions: 42, citations: 40, accuracy: 92, color: "bg-purple-500" },
    { name: "Gemini", mentions: 38, citations: 30, accuracy: 78, color: "bg-amber-500" },
    { name: "Perplexity", mentions: 35, citations: 28, accuracy: 75, color: "bg-cyan-500" },
  ];

  const issueCategories = [
    { category: "Hours Mismatch", count: 6, percentage: 35, color: "bg-rose-500" },
    { category: "Phone Format", count: 4, percentage: 24, color: "bg-amber-500" },
    { category: "Missing Schema", count: 3, percentage: 18, color: "bg-orange-500" },
    { category: "Address Inconsistent", count: 2, percentage: 12, color: "bg-yellow-500" },
    { category: "Other", count: 2, percentage: 11, color: "bg-slate-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-slate-400 mt-2">
            Comprehensive insights across AI platforms and data sources
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700">
            <Calendar className="h-4 w-4 text-slate-400" />
            <input
              type="date"
              className="bg-transparent text-sm focus:outline-none text-slate-300"
              defaultValue="2026-01-01"
            />
            <span className="text-slate-500">to</span>
            <input
              type="date"
              className="bg-transparent text-sm focus:outline-none text-slate-300"
              defaultValue="2026-02-21"
            />
          </div>
          <Button variant="primary" className="shadow-lg shadow-purple-500/30">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Total Tests</p>
                <p className="text-2xl font-bold mt-1">247</p>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% vs last period
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Avg. Visibility</p>
                <p className="text-2xl font-bold mt-1">78%</p>
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5% vs last period
                </p>
              </div>
              <LineChartIcon className="h-8 w-8 text-emerald-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Issues Resolved</p>
                <p className="text-2xl font-bold mt-1">14</p>
                <p className="text-xs text-slate-400 mt-1">3 still open</p>
              </div>
              <PieChartIcon className="h-8 w-8 text-amber-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Data Sources</p>
                <p className="text-2xl font-bold mt-1">6</p>
                <p className="text-xs text-emerald-400 mt-1">4 in sync</p>
              </div>
              <BarChart3 className="h-8 w-8 text-cyan-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* AI Platform Performance */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  AI Platform Performance
                </CardTitle>
                <p className="text-xs text-slate-400 mt-1">Comparison across all AI providers</p>
              </div>
              <Badge variant="default" className="text-xs">Last 30 days</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiPlatforms.map((platform) => (
                <div key={platform.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{platform.name}</span>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>Mentions: {platform.mentions}</span>
                      <span>Citations: {platform.citations}</span>
                      <span className="font-semibold text-slate-300">{platform.accuracy}%</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full ${platform.color} rounded-full`}
                        style={{ width: `${platform.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Average Performance</span>
                <span className="font-bold text-emerald-400">82.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issue Categories */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-purple-400" />
                  Issue Breakdown
                </CardTitle>
                <p className="text-xs text-slate-400 mt-1">Distribution of current issues</p>
              </div>
              <Badge variant="warning" className="text-xs">17 Total</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {issueCategories.map((issue) => (
                <div key={issue.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded ${issue.color}`}></div>
                      <span className="font-medium">{issue.category}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs">{issue.count} issues</span>
                      <span className="font-semibold text-xs">{issue.percentage}%</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pl-5">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full ${issue.color} rounded-full`}
                        style={{ width: `${issue.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Critical Issues</span>
                <Badge variant="error" className="text-xs">1</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Warnings</span>
                <Badge variant="warning" className="text-xs">16</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visibility Score Timeline */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-purple-400" />
                  Visibility Score Timeline
                </CardTitle>
                <p className="text-xs text-slate-400 mt-1">Weekly trend analysis over time</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="default" className="text-xs bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending Up
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/50">
              <div className="text-center space-y-2">
                <LineChartIcon className="h-12 w-12 text-slate-600 mx-auto" />
                <p className="text-sm text-slate-500 font-medium">Interactive Timeline Chart</p>
                <p className="text-xs text-slate-600">Showing 10-week rolling average with gradient visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Citation Sources Breakdown */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Citation Sources</CardTitle>
                <p className="text-xs text-slate-400 mt-1">Where AI models cite your business</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { source: "Website", count: 142, percentage: 45 },
                { source: "Google Business", count: 98, percentage: 31 },
                { source: "Yelp", count: 52, percentage: 16 },
                { source: "TripAdvisor", count: 25, percentage: 8 },
              ].map((item) => (
                <div key={item.source} className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">{item.source}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-semibold w-12 text-right">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Month-over-Month Comparison */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Monthly Trends</CardTitle>
                <p className="text-xs text-slate-400 mt-1">Comparing last two months</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { metric: "Visibility Score", last: 73, current: 78, change: "+5" },
                { metric: "Citation Rate", last: 67, current: 65, change: "-2" },
                { metric: "Mention Rate", last: 82, current: 88, change: "+6" },
                { metric: "Accuracy Rate", last: 75, current: 78, change: "+3" },
              ].map((item) => (
                <div key={item.metric} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.metric}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500">{item.last}%</span>
                      <span className="text-xs text-slate-500">→</span>
                      <span className="text-xs font-semibold">{item.current}%</span>
                      <Badge 
                        variant={item.change.startsWith('+') ? 'success' : 'error'}
                        className="text-xs"
                      >
                        {item.change}%
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          item.change.startsWith('+') 
                            ? 'bg-gradient-to-r from-emerald-600 to-emerald-500'
                            : 'bg-gradient-to-r from-rose-600 to-rose-500'
                        }`}
                        style={{ width: `${item.current}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Options */}
      <Card className="border-2 border-purple-500/20">
        <CardContent className="py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Ready to export your report?</h3>
              <p className="text-sm text-slate-400 mt-1">Generate a comprehensive PDF or CSV export with all analytics</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="primary" size="lg" className="shadow-lg shadow-purple-500/30">
                <Download className="h-4 w-4 mr-2" />
                Export PDF Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
