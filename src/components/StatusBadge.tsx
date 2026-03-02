import { cn } from "@/lib/utils";

type BadgeVariant = "active" | "onLeave" | "suspended" | "clean" | "adverse" | "submitted" | "approved" | "rejected" | "pending" | "default";

const badgeStyles: Record<BadgeVariant, string> = {
  active: "bg-success/15 text-success border border-success/20",
  onLeave: "bg-warning/15 text-warning border border-warning/20",
  suspended: "bg-destructive/15 text-destructive border border-destructive/20",
  clean: "bg-success/15 text-success border border-success/20",
  adverse: "bg-destructive/15 text-destructive border border-destructive/20",
  submitted: "bg-info/15 text-info border border-info/20",
  approved: "bg-success/15 text-success border border-success/20",
  rejected: "bg-destructive/15 text-destructive border border-destructive/20",
  pending: "bg-warning/15 text-warning border border-warning/20",
  default: "bg-muted text-muted-foreground border border-border",
};

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  return (
    <span className={cn("status-badge", badgeStyles[variant], className)}>
      {children}
    </span>
  );
}
