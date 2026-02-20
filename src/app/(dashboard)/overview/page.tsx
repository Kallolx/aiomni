import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Badge } from "@/components/ui/badge";
import { LineChart } from "@/components/ui/line-chart";
import {
  TrendingUp,
  CheckCircle2,
  Eye,
  ThumbsUp,
  BookOpen,
  Activity,
  Clock,
  FileCode,
  FileWarning,
  Search,
  ArrowRight,
  ShieldAlert,
  Utensils,
  MapPin,
  Star,
  ExternalLink,
  Play,
  Download,
  Building2,
  Globe,
  AlertTriangle,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function OverviewPage() {
const trendData = [
  { week: "W1", visibility: 30, accuracy: 65 },
  { week: "W2", visibility: 55, accuracy: 72 },
  { week: "W3", visibility: 78, accuracy: 80 },   
  { week: "W4", visibility: 52, accuracy: 68 },  
  { week: "W5", visibility: 60, accuracy: 74 },   
  { week: "W6", visibility: 85, accuracy: 82 },   
  { week: "W7", visibility: 98, accuracy: 88 },   
  { week: "W8", visibility: 72, accuracy: 76 },   
  { week: "W9", visibility: 90, accuracy: 85 },   
  { week: "W10", visibility: 100, accuracy: 92 }, 
];

  const chartSeries = [
    {
      label: "Visibility",
      data: trendData.map((d) => ({ week: d.week, value: d.visibility })),
      color: "#10b981", // emerald-500
    },
    {
      label: "Accuracy",
      data: trendData.map((d) => ({ week: d.week, value: d.accuracy })),
      color: "#3b82f6", // blue-500
    },
  ];

  const scoreBreakdown = [
    {
      title: "Visibility",
      value: 68,
      variant: "warning" as const,
      points: "+8 pts",
      pointsColor: "text-emerald-400",
      description: "mention + recommendation rates across AI providers",
    },
    {
      title: "Citations",
      value: 42,
      variant: "error" as const,
      points: "+3 pts",
      pointsColor: "text-rose-400",
      description: "% of prompts where your domain is cited",
    },
    {
      title: "Accuracy",
      value: 82,
      variant: "success" as const,
      points: "+6 pts",
      pointsColor: "text-emerald-400",
      description: "do AI facts match your entity truth?",
    },
    {
      title: "Consistency",
      value: 71,
      variant: "warning" as const,
      points: "-2 pts",
      pointsColor: "text-rose-400",
      description: "data consistency across sources",
    },
  ];

  const SOURCE_DATA = [
    {
      id: "canal",
      name: "canalrestaurant.co.uk",
      type: "Website",
      status: "Issues",
      citationRate: 42,
      crawled: "18 Feb 2026",
      metrics: [
        { label: "Hours:", value: "Mon–Sat 12–11pm" },
        { label: "Phone:", value: "+44 20 7289 4321" },
        { label: "Schema:", value: "None", error: true },
        { label: "Menu:", value: "PDF only", error: true },
      ],
    },
    {
      id: "google",
      name: "Google Business Profile",
      type: "Directory",
      status: "Issues",
      citationRate: 28,
      crawled: "18 Feb 2026",
      metrics: [
        { label: "Hours:", value: "Mon–Sun 12–10pm", error: true },
        { label: "Phone:", value: "020 7289 4321" },
        { label: "Rating:", value: "4.3 ★ (312)" },
        { label: "Category:", value: "Lebanese restaurant" },
      ],
    },
    {
      id: "tripadvisor",
      name: "TripAdvisor",
      type: "Review Site",
      status: "Healthy",
      citationRate: 18,
      crawled: "17 Feb 2026",
      metrics: [
        { label: "Hours:", value: "Mon–Sat 12–11pm" },
        { label: "Phone:", value: "+44 20 7289 4321" },
        { label: "Rating:", value: "4.5 / 5 (189)" },
        { label: "Cuisine:", value: "Lebanese, Mediterranean" },
      ],
    },
    {
      id: "yelp",
      name: "Yelp",
      type: "Review Site",
      status: "Healthy",
      citationRate: 8,
      crawled: "17 Feb 2026",
      metrics: [
        { label: "Phone:", value: "020 7289 4321" },
        { label: "Rating:", value: "4.2 / 5 (67)" },
        { label: "Price:", value: "££" },
      ],
    },
    {
      id: "instagram",
      name: "Instagram",
      type: "Social",
      status: "Healthy",
      citationRate: 4,
      crawled: "18 Feb 2026",
      metrics: [
        { label: "Followers:", value: "3,241" },
        { label: "Posts:", value: "147" },
        { label: "Last Post:", value: "3 days ago" },
      ],
    },
  ];

  const PROMPT_RESULTS_DATA = [
    {
      id: 1,
      type: "brand",
      prompt: "What are the opening hours of Canal Restaurant London?",
      provider: "ChatGPT",
      providerColor: "emerald",
      mentioned: true,
      cited: true,
      rec: "62%",
      accuracy: "-",
      date: "18 Feb 2026",
    },
    {
      id: 2,
      type: "discovery",
      prompt: "Best Lebanese restaurant near Westbourne Park",
      provider: "Perplexity",
      providerColor: "cyan",
      mentioned: true,
      cited: true,
      rec: "-",
      accuracy: "88%",
      date: "18 Feb 2026",
    },
    {
      id: 3,
      type: "brand",
      prompt: "Canal Restaurant London phone number",
      provider: "ChatGPT",
      providerColor: "emerald",
      mentioned: true,
      cited: true,
      rec: "-",
      accuracy: "40%",
      date: "18 Feb 2026",
    },
    {
      id: 4,
      type: "discovery",
      prompt: "Best brunch spots in W9 London",
      provider: "Gemini",
      providerColor: "blue",
      mentioned: false,
      cited: false,
      rec: "-",
      accuracy: "-",
      date: "18 Feb 2026",
    },
    {
      id: 5,
      type: "brand",
      prompt: "Does Canal Restaurant have a menu online?",
      provider: "Perplexity",
      providerColor: "cyan",
      mentioned: true,
      cited: true,
      rec: "-",
      accuracy: "30%",
      date: "17 Feb 2026",
    },
    {
      id: 6,
      type: "discovery",
      prompt: "Romantic restaurants in Little Venice London",
      provider: "Claude",
      providerColor: "purple",
      mentioned: true,
      cited: true,
      rec: "-",
      accuracy: "90%",
      date: "17 Feb 2026",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Profile Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Entity Image */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500/20 shrink-0 shadow-lg shadow-blue-500/10">
            <Image
              src="/restaurant_profile.png"
              alt="Restaurant Profile"
              fill
              className="object-cover"
            />
          </div>

          {/* Business Details */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight text-white ">
                Cornus Restaurant
              </h1>
              <Badge
                variant="default"
                className="bg-blue-500/10 text-blue-400 border-blue-500/20 flex items-center gap-1 text-[10px] font-bold uppercase py-0.5"
              >
                <Building2 className="h-3 w-3" />
                Verified Entity
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4">
              <div className="flex items-center gap-1.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-blue-500/70" />
                <span>London, England</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-amber-400">
                <Star className="h-4 w-4 fill-amber-400" />
                <span>4.8 Rating</span>
              </div>
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                <span>https://cornusrestaurant.co.uk/</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <button className="flex justify-center flex-1 w-full sm:w-auto items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap">
            <Play className="h-4 w-4 fill-white shrink-0" />
            Run Audit Now
          </button>
          <button className="flex justify-center flex-1 w-full sm:w-auto items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all border border-slate-700 active:scale-95 whitespace-nowrap">
            <Download className="h-4 w-4 shrink-0" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Main Stats Section */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {/* Large AI Visibility Score Card */}
        <Card className="lg:col-span-2 relative overflow-hidden border-2 border-blue-500/20 flex flex-col items-center justify-center min-h-[220px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -ml-20 -mb-20"></div>
          <CardContent className="p-6 lg:pl-4 xl:pl-6 flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-6 w-full">
            {/* Title for Mobile */}
            <h2 className="lg:hidden text-lg font-bold text-slate-200 uppercase tracking-wide text-center">
              AI Visibility Score
            </h2>

            {/* Circle */}
            <div className="shrink-0 flex items-center justify-center">
              <CircularProgress
                value={78}
                variant="success"
                size={160}
                strokeWidth={14}
                valueClassName="text-5xl"
                className="w-[110px] h-[110px] lg:w-[125px] lg:h-[125px]"
                showMax={true}
              />
            </div>

            {/* Text blocks */}
            <div className="flex flex-col justify-center w-full min-w-[140px] text-center lg:text-left">
              <h2 className="hidden lg:block text-sm lg:text-base font-bold text-slate-400 uppercase tracking-wide mb-1 lg:mb-2 whitespace-nowrap">
                AI Visibility Score
              </h2>
              <div>
                <span className="text-base lg:text-lg font-bold text-emerald-500 whitespace-nowrap">
                  +7 pts this week
                </span>
                <p className="text-sm text-slate-500 mt-1 whitespace-nowrap">
                  Above industry avg (61)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Breakdown - Compact Cards */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {scoreBreakdown.map((stat, index) => (
            <Card
              key={index}
              className="cursor-pointer flex flex-col hover:border-blue-500 transition-colors border border-blue-500/20 bg-slate-900/10"
            >
              <CardContent className="pt-2 flex flex-col items-center text-center space-y-2">
                <CircularProgress
                  value={stat.value}
                  variant={stat.variant}
                  size={85}
                  strokeWidth={6}
                  valueClassName="text-2xl lg:text-3xl"
                  className="w-[65px] h-[65px] lg:w-[85px] lg:h-[85px]"
                />
                <div>
                  <p className={cn("text-sm font-bold", stat.pointsColor)}>
                    {stat.points}
                  </p>
                  <p className="text-sm font-bold text-slate-300 uppercase tracking-wide mt-1">
                    {stat.title}
                  </p>
                </div>
                <p className="text-xs text-slate-500">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Visibility Trend + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Hero Chart */}
        <Card className="lg:col-span-2 border border-blue-500/20 bg-slate-900/10">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-lg">Performance Trends</CardTitle>
              <p className="text-xs text-slate-400 mt-1">
                Visibility vs. Accuracy over the last 10 weeks
              </p>
            </div>
            <Badge
              variant="default"
              className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-xs"
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              Real-time Analysis
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <LineChart series={chartSeries} height={280} />
          </CardContent>
        </Card>

        {/* Quick Stats 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 h-full">
          <Card className="border border-purple-500/20 flex flex-col justify-center relative overflow-hidden">
            <Activity className="absolute right-4 top-2 h-12 w-12 text-purple-400 opacity-10" />
            <CardContent className="p-4 relative z-10">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-bold mb-1">
                Prompts
              </p>
              <div className="flex items-baseline gap-1">
                <AnimatedNumber value={247} className="text-5xl font-bold" />
              </div>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card className="border border-blue-500/20 flex flex-col justify-center relative overflow-hidden">
            <Eye className="absolute right-4 top-2 h-12 w-12 text-blue-400 opacity-10" />
            <CardContent className="p-4 relative z-10">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-bold mb-1">
                Mention Rate
              </p>
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={85}
                  className="text-5xl font-bold text-emerald-400"
                />
                <span className="text-5xl font-bold text-emerald-400">%</span>
              </div>
              <div className="flex items-center gap-1 mt-1 font-bold">
                <span className="text-xs text-emerald-500">
                  +8% vs last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-blue-500/20 flex flex-col justify-center relative overflow-hidden">
            <ThumbsUp className="absolute right-4 top-2 h-12 w-12 text-blue-400 opacity-10" />
            <CardContent className="p-4 relative z-10">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-bold mb-1">
                Rec. Rate
              </p>
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={42}
                  className="text-5xl font-bold text-amber-400"
                />
                <span className="text-5xl font-bold text-amber-400">%</span>
              </div>
              <div className="flex items-center gap-1 mt-1 font-bold">
                <span className="text-xs text-emerald-500">
                  +5% vs last week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-cyan-500/20 flex flex-col justify-center relative overflow-hidden">
            <BookOpen className="absolute right-4 top-2 h-12 w-12 text-cyan-400 opacity-10" />
            <CardContent className="p-4 relative z-10">
              <p className="text-xs text-slate-400 uppercase tracking-wide font-bold mb-1">
                Citation Share
              </p>
              <div className="flex items-baseline gap-1">
                <AnimatedNumber
                  value={65}
                  className="text-5xl font-bold text-cyan-400"
                />
                <span className="text-5xl font-bold text-cyan-400">%</span>
              </div>
              <div className="flex items-center gap-1 mt-1 font-bold">
                <span className="text-xs text-rose-500">-3% vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Plan - Simplified & Edge-to-Edge */}
      <Card className="border border-blue-500/20 overflow-hidden bg-slate-900/10">
        <CardHeader className="border-b border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex flex-col">
                <CardTitle className="text-base font-bold text-slate-100 uppercase tracking-tight">
                  Action Plan
                </CardTitle>
                <p className="text-xs text-slate-400 mt-1">
                  Ranked by impact on AI visibility score
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-rose-500/90 font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />2
                critical
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-amber-500/90">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />2 high
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-slate-800/60 bg-slate-900/40">
                <th className="pl-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-[45%]">
                  Issue & Fix
                </th>
                <th className="px-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-[40%]">
                  Discovery
                </th>
                <th className="pr-4 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {/* Issue #1 */}
              <tr className="group transition-colors hover:bg-slate-800/30">
                <td className="pl-4 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 w-6 shrink-0 text-sm font-black italic text-slate-600">
                      01.
                    </span>
                    <div className="shrink-0 rounded-lg border border-rose-500/10 bg-rose-500/5 p-2.5 transition-all group-hover:bg-rose-500/10">
                      <Clock className="h-4 w-4 text-rose-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-200">
                        Hours inconsistent across platforms
                      </h4>
                      <p className="max-w-md text-xs leading-relaxed text-slate-400">
                        Conflicting operation times found between your website
                        and major GMB listings.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 align-top">
                  <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-slate-800 pl-3 py-1">
                    GMB (12-10pm) vs Website (12-11pm). High hallucination risk
                    for LLM responders.
                  </p>
                </td>
                <td className="pr-4 py-5 text-right align-top">
                  <span className="inline-block rounded border border-rose-500/20 bg-rose-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-rose-400">
                    Action Required
                  </span>
                </td>
              </tr>

              {/* Issue #2 */}
              <tr className="group transition-colors hover:bg-slate-800/30">
                <td className="pl-4 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 w-6 shrink-0 text-sm font-black italic text-slate-600">
                      02.
                    </span>
                    <div className="shrink-0 rounded-lg border border-rose-500/10 bg-rose-500/5 p-2.5 transition-all group-hover:bg-rose-500/10">
                      <FileCode className="h-4 w-4 text-rose-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-200">
                        Missing Restaurant JSON-LD Schema
                      </h4>
                      <p className="max-w-md text-xs leading-relaxed text-slate-400">
                        Absence of structured data forces AI to "guess" your
                        menu and core facts.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 align-top">
                  <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-slate-800 pl-3 py-1">
                    Crawled homepage + contact page — 0 JSON-LD schema fragments
                    found.
                  </p>
                </td>
                <td className="pr-4 py-5 text-right align-top">
                  <span className="inline-block rounded border border-rose-500/20 bg-rose-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-rose-400">
                    Critical
                  </span>
                </td>
              </tr>

              {/* Issue #3 */}
              <tr className="group transition-colors hover:bg-slate-800/30">
                <td className="pl-4 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 w-6 shrink-0 text-sm font-black italic text-slate-600">
                      03.
                    </span>
                    <div className="shrink-0 rounded-lg border border-amber-500/10 bg-amber-500/5 p-2.5 transition-all group-hover:bg-amber-500/10">
                      <Utensils className="h-4 w-4 text-amber-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-200">
                        Inaccessible Menu (PDF format only)
                      </h4>
                      <p className="max-w-md text-xs leading-relaxed text-slate-400">
                        Menu residing on external CDN via PDF is invisible to
                        most LLM crawlers.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 align-top">
                  <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-slate-800 pl-3 py-1">
                    Detected 4 PDF menu links — Content blocked by external CDN
                    'cdn.menus.io'.
                  </p>
                </td>
                <td className="pr-4 py-5 text-right align-top">
                  <span className="inline-block rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-400">
                    High Impact
                  </span>
                </td>
              </tr>

              {/* Issue #4 */}
              <tr className="group transition-colors hover:bg-slate-800/30">
                <td className="pl-4 py-5">
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 w-6 shrink-0 text-sm font-black italic text-slate-600">
                      04.
                    </span>
                    <div className="shrink-0 rounded-lg border border-amber-500/10 bg-amber-500/5 p-2.5 transition-all group-hover:bg-amber-500/10">
                      <Search className="h-4 w-4 text-amber-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-200">
                        Weak Location Entity Clarity
                      </h4>
                      <p className="max-w-md text-xs leading-relaxed text-slate-400">
                        Low semantic density on location page makes address
                        verification difficult.
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 align-top">
                  <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-slate-800 pl-3 py-1">
                    Location page size &lt; 200 chars — No neighborhood or
                    coordinates detected.
                  </p>
                </td>
                <td className="pr-4 py-5 text-right align-top">
                  <span className="inline-block rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-400">
                    Moderate
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between border-t border-slate-800/80 bg-slate-950/20 px-4 py-3">
            <p className="text-[10px] font-medium text-slate-500">
              Daily Audit • Updated 4h ago
            </p>
            <button className="group flex items-center gap-1.5 text-xs font-bold text-slate-400 transition-colors hover:text-white">
              View Detailed Audit
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row - Source Graph & Prompt Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        <Card className="border border-blue-500/20 overflow-hidden bg-slate-900/10">
          <CardHeader className="border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <CardTitle className="text-base font-bold text-slate-100 uppercase tracking-tight">
                  Source Graph
                </CardTitle>
                <p className="text-xs text-slate-400">
                  Where AI systems pull information about your business
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />5
                  active sources
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <div className="divide-y divide-slate-800/80 min-w-[500px]">
              {SOURCE_DATA.map((source) => (
                <div
                  key={source.id}
                  className="p-4 px-0 flex items-start gap-4"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-[#1e293b]/50 border border-slate-700/50 pt-0.5">
                    {source.id === "canal" && (
                      <Globe className="h-[22px] w-[22px] text-slate-400 stroke-[1.5]" />
                    )}
                    {source.id === "google" && (
                      <Search className="h-[22px] w-[22px] text-slate-400 stroke-[1.5]" />
                    )}
                    {source.id === "tripadvisor" && (
                      <ThumbsUp className="h-[22px] w-[22px] text-slate-400 stroke-[1.5]" />
                    )}
                    {source.id === "yelp" && (
                      <Utensils className="h-[22px] w-[22px] text-slate-400 stroke-[1.5]" />
                    )}
                    {source.id === "instagram" && (
                      <Instagram className="h-[22px] w-[22px] text-slate-400 stroke-[1.5]" />
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 w-full mt-0.5">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className="text-[15px] font-bold text-slate-100 tracking-tight">
                          {source.name}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700/50 text-[11px] font-medium text-slate-300">
                          {source.type}
                        </span>
                      </div>

                      <Badge
                        className={cn(
                          "text-[10px] font-bold uppercase px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-none mt-0.5 shrink-0",
                          source.status === "Issues"
                            ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                        )}
                      >
                        {source.status === "Issues" ? (
                          <AlertTriangle className="h-[14px] w-[14px]" />
                        ) : (
                          <CheckCircle2 className="h-[14px] w-[14px]" />
                        )}
                        <span className="tracking-wide">{source.status}</span>
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-[60px] h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 rounded-full"
                          style={{ width: `${source.citationRate}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-cyan-400">
                        {source.citationRate}%
                      </span>
                      <span className="text-[13px] text-slate-400">
                        citation rate
                      </span>
                      <span className="text-[13px] text-slate-400 font-medium ml-2">
                        Crawled {source.crawled}
                      </span>
                    </div>

                    {/* Horizontal Metrics Rows */}
                    <div className="flex flex-wrap gap-2 mt-1.5 -ml-1">
                      {source.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "px-3 py-1.5 rounded-lg border flex items-center gap-1.5",
                            metric.error
                              ? "bg-amber-500/5 border-amber-500/30"
                              : "bg-[#141a27] border-slate-800",
                          )}
                        >
                          <span
                            className={cn(
                              "text-[13px] tracking-tight",
                              metric.error
                                ? "text-amber-500 font-medium"
                                : "text-slate-500",
                            )}
                          >
                            {metric.label}
                          </span>
                          <span
                            className={cn(
                              "text-[13px] tracking-tight",
                              metric.error
                                ? "text-amber-500 font-medium"
                                : "text-slate-200 font-medium",
                            )}
                          >
                            {metric.value}
                          </span>
                          {metric.error && (
                            <AlertTriangle className="w-[14px] h-[14px] text-amber-500 ml-0.5" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prompt Runner Results */}
        <Card className="border border-blue-500/20 bg-slate-900/10 overflow-hidden flex flex-col">
          <CardHeader className="border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-bold text-slate-100 uppercase tracking-tight flex items-center">
                  Prompt Runner Results
                </CardTitle>
                <p className="text-xs text-slate-400 mt-1">
                  Latest run: 18 Feb 2026 • 4 providers • 30 prompts
                </p>
              </div>
              <div className="flex gap-2">
                <Badge
                  variant="success"
                  className="text-[10px] font-bold uppercase py-0.5 px-2"
                >
                  18 mentioned
                </Badge>
                <Badge
                  variant="error"
                  className="text-[10px] font-bold uppercase py-0.5 px-2"
                >
                  12 absent
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800/60 bg-slate-900/40">
                    <th className="pl-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-[35%]">
                      Prompt
                    </th>
                    <th className="px-3 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest w-[12%]">
                      Provider
                    </th>
                    <th className="px-3 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center w-[12%]">
                      Mentioned
                    </th>
                    <th className="px-3 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center w-[10%]">
                      Cited
                    </th>
                    <th className="px-3 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center w-[10%]">
                      Rec.
                    </th>
                    <th className="px-3 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center w-[10%]">
                      Accuracy
                    </th>
                    <th className="pr-5 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right w-[11%]">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {PROMPT_RESULTS_DATA.map((result) => (
                    <tr
                      key={result.id}
                      className="hover:bg-slate-800/30 transition-colors group"
                    >
                      <td className="pl-5 py-4">
                        <div className="flex flex-col gap-1.5 items-start">
                          <Badge
                            className={cn(
                              "text-[9px] uppercase font-bold tracking-wider px-1.5 py-0 shadow-none border",
                              result.type === "brand"
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                                : "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
                            )}
                          >
                            {result.type}
                          </Badge>
                          <span className="text-sm font-medium text-slate-200">
                            {result.prompt}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-4">
                        <Badge
                          className={cn(
                            "text-[10px] font-bold shadow-none border",
                            result.providerColor === "emerald"
                              ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                              : "",
                            result.providerColor === "cyan"
                              ? "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
                              : "",
                            result.providerColor === "blue"
                              ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                              : "",
                            result.providerColor === "purple"
                              ? "bg-purple-500/10 text-purple-500 border-purple-500/20"
                              : "",
                          )}
                        >
                          {result.provider}
                        </Badge>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <div className="flex justify-center">
                          {result.mentioned ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          ) : (
                            <svg
                              className="h-4 w-4 text-rose-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <div className="flex justify-center">
                          {result.cited ? (
                            <svg
                              className="h-4 w-4 text-slate-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <span className="text-slate-600 font-bold">—</span>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span
                          className={cn(
                            "text-xs font-bold",
                            result.rec !== "-"
                              ? "text-amber-400"
                              : "text-slate-600",
                          )}
                        >
                          {result.rec}
                        </span>
                      </td>
                      <td className="px-3 py-4 text-center">
                        <span
                          className={cn(
                            "text-xs font-bold",
                            result.accuracy !== "-" &&
                              parseInt(result.accuracy) >= 80
                              ? "text-emerald-400"
                              : "",
                            result.accuracy !== "-" &&
                              parseInt(result.accuracy) < 80
                              ? "text-rose-400"
                              : "",
                            result.accuracy === "-" ? "text-slate-600" : "",
                          )}
                        >
                          {result.accuracy}
                        </span>
                      </td>
                      <td className="pr-5 py-4 text-right">
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                          {result.date}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
