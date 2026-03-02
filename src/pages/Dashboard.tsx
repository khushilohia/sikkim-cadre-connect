import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Users, CalendarDays, AlertTriangle, Package, Shield, MapPin } from "lucide-react";
import { districtStrength, rankDistribution, mockLeaveRequests, mockInventoryStats } from "@/lib/mock-data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const chartColors = [
  "hsl(38 92% 50%)",
  "hsl(199 89% 48%)",
  "hsl(142 71% 45%)",
  "hsl(262 83% 58%)",
  "hsl(0 72% 51%)",
  "hsl(38 92% 60%)",
  "hsl(199 89% 60%)",
];

export default function Dashboard() {
  const totalStrength = districtStrength.reduce((s, d) => s + d.total, 0);
  const totalActive = districtStrength.reduce((s, d) => s + d.active, 0);
  const totalOnLeave = districtStrength.reduce((s, d) => s + d.onLeave, 0);
  const pendingLeaves = mockLeaveRequests.filter(
    (l) => l.status === "Submitted" || l.status === "L1_Approved" || l.status === "L2_Approved"
  ).length;

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h1 className="page-title">Command Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            State-wide overview — Sikkim Police Department
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          Live • Last updated just now
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Strength"
          value={totalStrength}
          subtitle={`${totalActive} active personnel`}
          icon={Users}
        />
        <StatCard
          title="On Leave Today"
          value={totalOnLeave}
          subtitle={`${pendingLeaves} approvals pending`}
          icon={CalendarDays}
          variant="warning"
        />
        <StatCard
          title="Low Stock Alerts"
          value={mockInventoryStats.lowStockAlerts}
          subtitle={`${mockInventoryStats.expiringAmmo} ammo batches expiring`}
          icon={AlertTriangle}
          variant="danger"
        />
        <StatCard
          title="Weapons Tracked"
          value={mockInventoryStats.totalWeapons}
          subtitle={`${mockInventoryStats.totalAmmoRounds.toLocaleString()} rounds`}
          icon={Package}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rank Distribution Chart */}
        <div className="lg:col-span-2 glass-card p-5">
          <h3 className="section-title">Rank Distribution</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={rankDistribution} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 25% 18%)" />
              <XAxis dataKey="rank" tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} axisLine={false} />
              <YAxis tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222 47% 9%)",
                  border: "1px solid hsl(215 25% 18%)",
                  borderRadius: "8px",
                  color: "hsl(210 40% 96%)",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {rankDistribution.map((_, i) => (
                  <Cell key={i} fill={chartColors[i % chartColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* District Strength */}
        <div className="glass-card p-5">
          <h3 className="section-title flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            District Strength
          </h3>
          <div className="space-y-4">
            {districtStrength.map((d) => (
              <div key={d.district} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{d.district}</span>
                  <span className="text-sm font-bold text-primary">{d.total}</span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
                  <div
                    className="bg-success rounded-full transition-all"
                    style={{ width: `${(d.active / d.total) * 100}%` }}
                  />
                  <div
                    className="bg-warning rounded-full transition-all"
                    style={{ width: `${(d.onLeave / d.total) * 100}%` }}
                  />
                  <div
                    className="bg-destructive rounded-full transition-all"
                    style={{ width: `${(d.suspended / d.total) * 100}%` }}
                  />
                </div>
                <div className="flex gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-success" /> Active {d.active}
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-warning" /> Leave {d.onLeave}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Leave Approvals */}
        <div className="glass-card p-5">
          <h3 className="section-title flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            Pending Leave Approvals
          </h3>
          <div className="space-y-3">
            {mockLeaveRequests
              .filter((l) => l.status === "Submitted" || l.status === "L1_Approved" || l.status === "L2_Approved")
              .map((leave) => (
                <div
                  key={leave.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-accent/30 border border-border/50"
                >
                  <div>
                    <p className="text-sm font-semibold">{leave.personnelName}</p>
                    <p className="text-xs text-muted-foreground">
                      {leave.personnelRank} • {leave.leaveType} • {leave.totalDays} days
                    </p>
                  </div>
                  <StatusBadge variant="pending">{leave.status.replace("_", " ")}</StatusBadge>
                </div>
              ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-5">
          <h3 className="section-title flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Add Personnel", icon: Users, href: "/personnel" },
              { label: "Apply Leave", icon: CalendarDays, href: "/leave" },
              { label: "Issue Weapon", icon: Package, href: "/inventory" },
              { label: "Transfer Unit", icon: MapPin, href: "/personnel" },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-accent/30 border border-border/50 hover:border-primary/30 hover:bg-accent transition-all group"
              >
                <action.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {action.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
