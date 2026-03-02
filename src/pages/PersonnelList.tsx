import { useState, useMemo } from "react";
import { mockPersonnel } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import { RANK_HIERARCHY, DISTRICTS, UNITS } from "@/lib/constants";
import { Search, Filter, Download, Upload, Plus, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PersonnelList() {
  const [search, setSearch] = useState("");
  const [rankFilter, setRankFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return mockPersonnel.filter((p) => {
      if (search && !p.fullName.toLowerCase().includes(search.toLowerCase()) && !p.badgeNumber.toLowerCase().includes(search.toLowerCase())) return false;
      if (rankFilter && p.rankCode.toString() !== rankFilter) return false;
      if (districtFilter && p.districtId !== districtFilter) return false;
      if (statusFilter && p.status !== statusFilter) return false;
      return true;
    });
  }, [search, rankFilter, districtFilter, statusFilter]);

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h1 className="page-title">Personnel Register</h1>
          <p className="text-sm text-muted-foreground mt-1">{filtered.length} of {mockPersonnel.length} personnel</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-accent border border-border hover:bg-accent/80 transition-colors">
            <Upload className="h-3.5 w-3.5" /> Import CSV
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-accent border border-border hover:bg-accent/80 transition-colors">
            <Download className="h-3.5 w-3.5" /> Export
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Plus className="h-3.5 w-3.5" /> Add Personnel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or badge..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 w-full rounded-md bg-muted/50 border border-border pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <select
            value={rankFilter}
            onChange={(e) => setRankFilter(e.target.value)}
            className="h-9 rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">All Ranks</option>
            {RANK_HIERARCHY.map((r) => (
              <option key={r.code} value={r.code}>{r.abbr}</option>
            ))}
          </select>
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="h-9 rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">All Districts</option>
            {DISTRICTS.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Suspended">Suspended</option>
          </select>
          <button className="flex items-center gap-1.5 h-9 px-3 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="h-3.5 w-3.5" /> More Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Badge</th>
                <th>Present Deployment</th>
                <th>Previous Deployment</th>
                <th>Status</th>
                <th>Record</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 30}ms` }}>
                  <td>
                    <span className="font-mono text-xs text-muted-foreground mr-1">{p.rankCode}.</span>
                    <span className="font-semibold text-primary">{p.rankTitle}</span>
                  </td>
                  <td className="font-medium">{p.fullName}</td>
                  <td className="font-mono text-xs text-muted-foreground">{p.badgeNumber}</td>
                  <td>
                    <div>
                      <span className="text-sm">{p.unitName}</span>
                      <p className="text-[10px] text-muted-foreground">Since {p.presentFrom}</p>
                    </div>
                  </td>
                  <td>
                    {p.previousUnit ? (
                      <div>
                        <span className="text-sm text-muted-foreground">{p.previousUnit}</span>
                        <p className="text-[10px] text-muted-foreground">
                          {p.previousFrom} → {p.previousTo}
                        </p>
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td>
                    <StatusBadge
                      variant={
                        p.status === "Active" ? "active" :
                        p.status === "On Leave" ? "onLeave" :
                        p.status === "Suspended" ? "suspended" : "default"
                      }
                    >
                      {p.status}
                    </StatusBadge>
                  </td>
                  <td>
                    <StatusBadge variant={p.recordType === "Clean" ? "clean" : "adverse"}>
                      {p.recordType}
                    </StatusBadge>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/personnel/${p.id}`)}
                      className="p-1.5 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                    >
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
