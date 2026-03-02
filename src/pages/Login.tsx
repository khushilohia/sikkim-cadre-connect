import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, User } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-info rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md mx-4">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary mb-4 gold-glow">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Sikkim Police</h1>
          <p className="text-sm text-muted-foreground mt-1">
            e-Management System
          </p>
        </div>

        {/* Login Card */}
        <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <h2 className="text-lg font-semibold mb-6">Sign in to your account</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Service ID / Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your service ID"
                  defaultValue="SP-MANDEEP"
                  className="h-10 w-full rounded-md bg-muted/50 border border-border pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  defaultValue="password"
                  className="h-10 w-full rounded-md bg-muted/50 border border-border pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          <p className="text-center text-[10px] text-muted-foreground mt-6">
            Authorized personnel only • Government of Sikkim
          </p>
        </div>
      </div>
    </div>
  );
}
