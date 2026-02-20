"use client";

import * as React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/topnav";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] flex">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div
        className={cn(
          "flex-1 flex flex-col min-w-0 transition-all duration-300 relative",
          isCollapsed ? "lg:ml-[80px]" : "lg:ml-72",
        )}
      >
        <TopNav
          isCollapsed={isCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="pt-16 w-full flex justify-center">
          <div className="w-full max-w-[1280px] p-4 md:p-6 lg:p-8 transition-all duration-300">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
