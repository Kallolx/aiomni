import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle2, XCircle, AlertCircle, Sparkles } from "lucide-react";

export default function PromptRunnerPage() {
  const testResults = [
    {
      id: 1,
      prompt: "What are the best Lebanese restaurants in downtown New York?",
      provider: "ChatGPT",
      providerColor: "blue",
      mentioned: true,
      cited: true,
      accurate: false,
      date: "30 min ago",
      response: "Canal Restaurant is mentioned in top 5"
    },
    {
      id: 2,
      prompt: "What are the opening hours for Canal Restaurant?",
      provider: "Claude",
      providerColor: "purple",
      mentioned: true,
      cited: true,
      accurate: true,
      date: "1 hour ago",
      response: "Correctly cited 9 AM - 10 PM"
    },
    {
      id: 3,
      prompt: "Top rated Middle Eastern cuisine near me",
      provider: "Gemini",
      providerColor: "amber",
      mentioned: true,
      cited: false,
      accurate: true,
      date: "3 hours ago",
      response: "Mentioned but no website citation"
    },
    {
      id: 4,
      prompt: "Where can I find authentic hummus in NYC?",
      provider: "Perplexity",
      providerColor: "cyan",
      mentioned: false,
      cited: false,
      accurate: false,
      date: "5 hours ago",
      response: "Not mentioned in results"
    },
    {
      id: 5,
      prompt: "Best Mediterranean restaurants for dinner",
      provider: "ChatGPT",
      providerColor: "blue",
      mentioned: true,
      cited: true,
      accurate: true,
      date: "1 day ago",
      response: "Full citation with correct details"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Prompt Runner</h1>
        <p className="text-slate-400 mt-2">
          Test and monitor how AI models respond to queries about your brand
        </p>
      </div>

      {/* Control Bar */}
      <Card className="border-2 border-purple-500/20 shadow-lg shadow-purple-500/10">
        <CardContent className="py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  label="Test Prompt" 
                  placeholder="e.g., What are the best Lebanese restaurants in New York?"
                  className="text-base"
                />
              </div>
              <div className="w-full md:w-56">
                <label className="text-xs font-medium text-slate-400 mb-2 block uppercase tracking-wide">AI Provider</label>
                <select className="w-full rounded-xl bg-slate-800 px-4 py-3.5 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>ChatGPT (GPT-4)</option>
                  <option>Claude (Sonnet)</option>
                  <option>Gemini Pro</option>
                  <option>Perplexity</option>
                  <option>All Providers</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800" defaultChecked />
                  <span>Check brand mention</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800" defaultChecked />
                  <span>Check citation</span>
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800" defaultChecked />
                  <span>Check accuracy</span>
                </label>
              </div>
              <Button variant="primary" size="lg" className="shadow-lg shadow-purple-500/30">
                <Play className="h-4 w-4 mr-2" />
                Run Prompt Test
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Total Tests</p>
                <p className="text-2xl font-bold mt-1">247</p>
              </div>
              <Sparkles className="h-8 w-8 text-purple-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Mention Rate</p>
                <p className="text-2xl font-bold mt-1 text-emerald-400">85%</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-emerald-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Citation Rate</p>
                <p className="text-2xl font-bold mt-1 text-amber-400">65%</p>
              </div>
              <AlertCircle className="h-8 w-8 text-amber-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Accuracy Rate</p>
                <p className="text-2xl font-bold mt-1 text-emerald-400">78%</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-emerald-400 opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg">Test Results History</CardTitle>
            <p className="text-xs text-slate-400 mt-1">Recent AI prompt tests and their outcomes</p>
          </div>
          <Badge variant="default" className="text-xs">{testResults.length} Tests</Badge>
        </CardHeader>
        <CardContent className="px-0">
          <div className="space-y-1">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide border-b border-slate-800">
              <div className="col-span-5">Prompt Text</div>
              <div className="col-span-2">Provider</div>
              <div className="col-span-1 text-center">Mentioned</div>
              <div className="col-span-1 text-center">Cited</div>
              <div className="col-span-1 text-center">Accurate</div>
              <div className="col-span-2">Tested</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-800/50">
              {testResults.map((result) => (
                <div
                  key={result.id}
                  className="grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-slate-800/30 transition-colors cursor-pointer group"
                >
                  <div className="col-span-5">
                    <p className="text-sm font-medium group-hover:text-purple-400 transition-colors">
                      {result.prompt}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{result.response}</p>
                  </div>
                  <div className="col-span-2">
                    <Badge 
                      variant="default" 
                      className={`
                        ${result.providerColor === 'blue' && 'bg-blue-500/10 text-blue-400 border-blue-500/20'}
                        ${result.providerColor === 'purple' && 'bg-purple-500/10 text-purple-400 border-purple-500/20'}
                        ${result.providerColor === 'amber' && 'bg-amber-500/10 text-amber-400 border-amber-500/20'}
                        ${result.providerColor === 'cyan' && 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'}
                      `}
                    >
                      {result.provider}
                    </Badge>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {result.mentioned ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-500" />
                    )}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {result.cited ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-500" />
                    )}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {result.accurate ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-rose-500" />
                    )}
                  </div>
                  <div className="col-span-2 text-sm text-slate-400">
                    {result.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
