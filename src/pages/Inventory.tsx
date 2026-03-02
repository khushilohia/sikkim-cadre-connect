import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { mockInventoryStats, mockWeapons } from "@/lib/mock-data";
import { INVENTORY_CATEGORIES } from "@/lib/constants";
import { Package, Shield, AlertTriangle, Crosshair, Truck, Eye } from "lucide-react";

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory & Armoury</h1>
          <p className="text-sm text-muted-foreground mt-1">Weapons, ammunition & equipment management</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-accent border border-border hover:bg-accent/80 transition-colors">
            <Truck className="h-3.5 w-3.5" /> Transfer
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Package className="h-3.5 w-3.5" /> Issue / Return
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Weapons" value={mockInventoryStats.totalWeapons} subtitle="Tracked with serial no." icon={Crosshair} />
        <StatCard title="Ammo Rounds" value={mockInventoryStats.totalAmmoRounds} subtitle="Across all calibers" icon={Shield} />
        <StatCard title="Low Stock Alerts" value={mockInventoryStats.lowStockAlerts} icon={AlertTriangle} variant="danger" />
        <StatCard title="Pending Transfers" value={mockInventoryStats.pendingTransfers} icon={Truck} variant="warning" />
      </div>

      {/* Categories */}
      <div className="glass-card p-5">
        <h3 className="section-title">Inventory Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {INVENTORY_CATEGORIES.map((cat) => (
            <div
              key={cat.code}
              className="flex flex-col items-center p-4 rounded-lg bg-accent/30 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <span className="text-2xl mb-2">{cat.icon}</span>
              <span className="text-xs font-semibold text-center">{cat.name}</span>
              <span className="text-[10px] text-muted-foreground font-mono mt-1">{cat.code}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weapon Register */}
      <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="section-title mb-0">Serialized Weapon Register</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Type</th>
                <th>Unit</th>
                <th>Assigned To</th>
                <th>Condition</th>
                <th>Last Service</th>
                <th>Next Service</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mockWeapons.map((w, i) => (
                <tr key={w.serial} className="animate-fade-in" style={{ animationDelay: `${i * 30}ms` }}>
                  <td className="font-mono text-xs font-semibold text-primary">{w.serial}</td>
                  <td className="font-medium text-sm">{w.type}</td>
                  <td className="text-sm text-muted-foreground">{w.unit}</td>
                  <td className="text-sm">{w.assignedTo || <span className="text-muted-foreground">Unassigned</span>}</td>
                  <td>
                    <StatusBadge
                      variant={
                        w.condition === "Serviceable" ? "active" :
                        w.condition === "Needs Repair" ? "onLeave" : "adverse"
                      }
                    >
                      {w.condition}
                    </StatusBadge>
                  </td>
                  <td className="text-xs text-muted-foreground">{w.lastService}</td>
                  <td className="text-xs text-muted-foreground">{w.nextService || "—"}</td>
                  <td>
                    <button className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
