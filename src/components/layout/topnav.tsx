"use client";

import * as React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TopNavProps {
  isCollapsed: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopNav({ isCollapsed, setIsMobileMenuOpen }: TopNavProps) {
  return (
    <header
      className={cn(
        "fixed top-0 right-0 z-30 border-b border-slate-800/50 bg-[#0B1120]/80 backdrop-blur-xl transition-all duration-300 flex justify-center left-0",
        isCollapsed ? "lg:left-[80px]" : "lg:left-72",
      )}
    >
      <div className="flex h-16 w-full max-w-[1280px] items-center justify-between px-4 lg:px-8 gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-2 -ml-2 text-slate-400 hover:text-white transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden sm:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search prompts, issues, sources..."
              className="w-full rounded-full bg-slate-800 py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* System Status */}
          <Badge variant="success" className="gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            All systems operational
          </Badge>

          {/* Notifications */}
          <button className="relative rounded-full p-2 hover:bg-slate-800 transition-colors">
            <Bell className="h-5 w-5 text-slate-400" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-rose-600"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
