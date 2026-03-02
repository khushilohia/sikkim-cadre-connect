import { Shield, Users, Database, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="page-header">
        <h1 className="page-title">System Settings</h1>
      </div>

      <div className="space-y-4">
        {[
          { icon: Users, title: "User Roles & Permissions", desc: "Manage system roles, assign access levels to personnel" },
          { icon: Shield, title: "Rank Configuration", desc: "Configure rank hierarchy and code mappings" },
          { icon: Database, title: "Units & Districts", desc: "Manage police stations, battalions, and wings" },
          { icon: Bell, title: "Notification Settings", desc: "Configure alerts for low stock, leave approvals, audits" },
        ].map((item) => (
          <div key={item.title} className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer">
            <div className="p-2.5 rounded-lg bg-accent">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
