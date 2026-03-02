import { useParams, useNavigate } from "react-router-dom";
import { mockPersonnel } from "@/lib/mock-data";
import { StatusBadge } from "@/components/StatusBadge";
import { ArrowLeft, Phone, MapPin, Calendar, Shield, User } from "lucide-react";

export default function PersonnelProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = mockPersonnel.find((p) => p.id === id);

  if (!person) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Personnel not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Register
      </button>

      {/* Profile Header */}
      <div className="glass-card p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
        <div className="flex items-start gap-6">
          <div className="h-20 w-20 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <User className="h-10 w-10 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold">{person.fullName}</h1>
              <StatusBadge variant={person.status === "Active" ? "active" : person.status === "On Leave" ? "onLeave" : "suspended"}>
                {person.status}
              </StatusBadge>
              <StatusBadge variant={person.recordType === "Clean" ? "clean" : "adverse"}>
                {person.recordType}
              </StatusBadge>
            </div>
            <p className="text-primary font-semibold">{person.rankTitle} — {person.badgeNumber}</p>
            <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{person.unitName}</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />{person.phone}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />Joined {person.dateOfJoining}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="glass-card p-5">
          <h3 className="section-title flex items-center gap-2"><User className="h-4 w-4 text-primary" />Personal Details</h3>
          <dl className="space-y-3 text-sm">
            {[
              ["Date of Birth", person.dateOfBirth],
              ["Gender", person.gender],
              ["Category", person.category],
              ["Home District", person.homeDistrict],
              ["Phone", person.phone],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Deployment */}
        <div className="glass-card p-5">
          <h3 className="section-title flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Current Deployment</h3>
          <dl className="space-y-3 text-sm">
            {[
              ["Unit", person.unitName],
              ["District", person.districtId.charAt(0).toUpperCase() + person.districtId.slice(1) + " Sikkim"],
              ["Posted Since", person.presentFrom],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="font-medium">{val}</dd>
              </div>
            ))}
          </dl>
          {person.previousUnit && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2">Previous Deployment</p>
              <p className="text-sm">{person.previousUnit}</p>
              <p className="text-xs text-muted-foreground">{person.previousFrom} → {person.previousTo}</p>
            </div>
          )}
        </div>
      </div>

      {person.remarks && (
        <div className="glass-card p-5 border-destructive/30">
          <h3 className="section-title text-destructive">Remarks</h3>
          <p className="text-sm text-muted-foreground">{person.remarks}</p>
        </div>
      )}
    </div>
  );
}
