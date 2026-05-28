"use client";
export default function PitchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      {children}
    </div>
  );
}
