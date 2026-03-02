import { useState } from "react";
import { mockLeaveRequests } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import { LEAVE_TYPES } from "@/lib/constants";
import { CalendarDays, Check, X, Clock, Plus } from "lucide-react";

const statusVariant = (s: string) => {
  if (s.includes("Approved") || s === "Final_Approved") return "approved" as const;
  if (s.includes("Rejected")) return "rejected" as const;
  if (s === "Submitted") return "submitted" as const;
  return "pending" as const;
};

export default function LeaveManagement() {
  const [tab, setTab] = useState<"inbox" | "all" | "apply">("inbox");

  const pendingLeaves = mockLeaveRequests.filter(
    (l) => l.status === "Submitted" || l.status === "L1_Approved" || l.status === "L2_Approved"
  );

  return (
    <div className="space-y-6">
      <div className="page-header">
        <div>
          <h1 className="page-title">Leave Management</h1>
          <p className="text-sm text-muted-foreground mt-1">{pendingLeaves.length} pending approvals</p>
        </div>
        <button
          onClick={() => setTab("apply")}
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-3.5 w-3.5" /> Apply Leave
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-lg bg-muted/50 w-fit">
        {(["inbox", "all", "apply"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${
              tab === t
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t === "inbox" ? `Approval Inbox (${pendingLeaves.length})` : t === "all" ? "All Requests" : "Apply Leave"}
          </button>
        ))}
      </div>

      {tab === "apply" ? (
        <div className="glass-card p-6 max-w-2xl">
          <h3 className="section-title">New Leave Application</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Leave Type</label>
                <select className="h-9 w-full rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  {LEAVE_TYPES.map((lt) => (
                    <option key={lt.code} value={lt.code}>{lt.code} — {lt.name}</option>
                  ))}
                </select>
              </div>
              <div />
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">From Date</label>
                <input type="date" className="h-9 w-full rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">To Date</label>
                <input type="date" className="h-9 w-full rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Reason</label>
              <textarea rows={3} className="w-full rounded-md bg-muted/50 border border-border px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Contact During Leave</label>
              <input type="text" className="h-9 w-full rounded-md bg-muted/50 border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <button type="button" className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      ) : (
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Officer</th>
                  <th>Type</th>
                  <th>Period</th>
                  <th>Days</th>
                  <th>Unit</th>
                  <th>Status</th>
                  {tab === "inbox" && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {(tab === "inbox" ? pendingLeaves : mockLeaveRequests).map((l, i) => (
                  <tr key={l.id} className="animate-fade-in" style={{ animationDelay: `${i * 30}ms` }}>
                    <td>
                      <div>
                        <p className="font-medium text-sm">{l.personnelName}</p>
                        <p className="text-[10px] text-muted-foreground">{l.personnelRank}</p>
                      </div>
                    </td>
                    <td>
                      <span className="font-mono text-xs font-semibold text-primary">{l.leaveType}</span>
                    </td>
                    <td className="text-sm">
                      {l.dateFrom} → {l.dateTo}
                    </td>
                    <td className="font-semibold">{l.totalDays}</td>
                    <td className="text-sm text-muted-foreground">{l.unitName}</td>
                    <td>
                      <StatusBadge variant={statusVariant(l.status)}>
                        {l.status.replace(/_/g, " ")}
                      </StatusBadge>
                    </td>
                    {tab === "inbox" && (
                      <td>
                        <div className="flex gap-1">
                          <button className="p-1.5 rounded-md bg-success/10 text-success hover:bg-success/20 transition-colors">
                            <Check className="h-4 w-4" />
                          </button>
                          <button className="p-1.5 rounded-md bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
