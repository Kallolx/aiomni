import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, File } from "lucide-react";

export default function ExportsPage() {
  const exports = [
    {
      id: 1,
      name: "Monthly Visibility Report - January 2026",
      type: "PDF",
      date: "2026-02-01",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Source Data Export",
      type: "CSV",
      date: "2026-01-28",
      size: "156 KB",
    },
    {
      id: 3,
      name: "Issue Log - Q4 2025",
      type: "PDF",
      date: "2025-12-31",
      size: "1.8 MB",
    },
    {
      id: 4,
      name: "Prompt Results Export",
      type: "CSV",
      date: "2025-12-15",
      size: "89 KB",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Exports</h1>
        <p className="text-slate-400 mt-2">
          Download and manage your exported reports
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-4 pb-3 border-b border-slate-800 text-sm font-medium text-slate-400">
              <div className="col-span-6">Report Name</div>
              <div className="col-span-2">Format</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1">Size</div>
              <div className="col-span-1"></div>
            </div>

            {/* Export Items */}
            {exports.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-4 items-center px-4 py-4 rounded-xl hover:bg-slate-800/30 transition-colors"
              >
                <div className="col-span-6 flex items-center gap-3">
                  {item.type === "PDF" ? (
                    <FileText className="h-5 w-5 text-rose-500" />
                  ) : (
                    <File className="h-5 w-5 text-emerald-500" />
                  )}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="col-span-2">
                  <Badge variant={item.type === "PDF" ? "error" : "success"}>
                    {item.type}
                  </Badge>
                </div>
                <div className="col-span-2 text-sm text-slate-400">
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <div className="col-span-1 text-sm text-slate-400">{item.size}</div>
                <div className="col-span-1 flex justify-end">
                  <button className="p-2 rounded-lg hover:bg-slate-800 transition-colors">
                    <Download className="h-4 w-4 text-slate-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
