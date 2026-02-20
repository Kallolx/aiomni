"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  User,
  Zap,
  Globe,
  AlertCircle,
  FileText,
  Users,
  Download,
  Settings,
  Bell,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

const navigationItems: NavItem[] = [
  {
    label: "Overview",
    href: "/overview",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    label: "Entity Profile",
    href: "/entity-profile",
    icon: <User className="h-5 w-5" />,
  },
  {
    label: "Prompt Runner",
    href: "/prompt-runner",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    label: "Sources",
    href: "/sources",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    label: "Issues",
    href: "/issues",
    icon: <AlertCircle className="h-5 w-5" />,
    badge: 3,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Exports",
    href: "/exports",
    icon: <Download className="h-5 w-5" />,
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export function Sidebar({
  isCollapsed,
  setIsCollapsed,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0B1120]/80 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen border-r border-slate-800/50 bg-[#0B1120] transition-all duration-300",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
          isCollapsed ? "lg:w-[80px] w-72" : "w-72",
        )}
      >
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-[#0B1120] text-slate-400 shadow-sm shadow-black/20 transition-colors hover:text-white hover:bg-slate-800"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>

        <div className="flex h-full flex-col">
          {/* Logo & Workspace Switcher */}
          <div
            className={cn(
              "flex items-center relative transition-all duration-300 h-[88px]",
              isCollapsed ? "justify-center" : "px-6 justify-between",
            )}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]">
                <Zap className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && (
                <div className="overflow-hidden whitespace-nowrap">
                  <h1 className="text-xl font-bold">Wonder AI</h1>
                  <p className="text-xs text-slate-400">AI Visibility Monitor</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-xl text-sm font-medium transition-all relative group",
                    isCollapsed
                      ? "justify-center h-10 w-10 mx-auto"
                      : "gap-3 px-3 py-2.5",
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:bg-slate-800/50 hover:text-white",
                  )}
                >
                  {isActive && !isCollapsed && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] rounded-r-full" />
                  )}
                  {isActive && isCollapsed && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] rounded-r-full" />
                  )}
                  <span className={cn(isActive && !isCollapsed && "ml-2")}>
                    {item.icon}
                  </span>
                  {!isCollapsed && (
                    <span className="flex-1 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                  {!isCollapsed && item.badge && (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs text-white">
                      {item.badge}
                    </span>
                  )}
                  {isCollapsed && item.badge && (
                    <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-rose-600"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div
            className={cn(
              "border-t border-slate-800/50 space-y-1",
              isCollapsed ? "p-3 pb-4" : "p-3",
            )}
          >
            <Link
              href="/alerts"
              className={cn(
                "flex items-center rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all",
                isCollapsed
                  ? "justify-center h-10 w-10 mx-auto"
                  : "gap-3 px-3 py-2.5",
              )}
            >
              <Bell className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>Alerts</span>}
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-800/50 hover:text-white transition-all",
                isCollapsed
                  ? "justify-center h-10 w-10 mx-auto"
                  : "gap-3 px-3 py-2.5",
              )}
            >
              <Settings className="h-5 w-5 shrink-0" />
              {!isCollapsed && <span>Settings</span>}
            </Link>

            {/* User Profile */}
            <div
              className={cn(
                "mt-2 flex items-center rounded-xl bg-slate-800/50 transition-all",
                isCollapsed
                  ? "justify-center h-10 w-10 mx-auto p-0"
                  : "gap-3 px-3 py-3",
              )}
            >
              <div
                className={cn(
                  "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-sm font-semibold text-white",
                  isCollapsed ? "h-8 w-8 text-xs" : "h-10 w-10",
                )}
              >
                JD
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0 overflow-hidden">
                  <p className="text-sm font-medium truncate">Jamil Ifat</p>
                  <p className="text-xs text-slate-400">Premium Plan</p>
                </div>
              )}
            </div>
              <p className="text-xs text-white pl-4">A Wonder Lab Production</p>
          </div>
        </div>
      </aside>
    </>
  );
}
