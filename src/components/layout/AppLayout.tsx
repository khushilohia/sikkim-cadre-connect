import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Bell, Search, User } from "lucide-react";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div className="ml-[240px] transition-all duration-300">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-6 border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search personnel, units..."
                className="h-9 w-72 rounded-md bg-muted/50 border border-border pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-md hover:bg-accent transition-colors">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold">SP Mandeep Gurung</p>
                <p className="text-[10px] text-muted-foreground">East Sikkim</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
