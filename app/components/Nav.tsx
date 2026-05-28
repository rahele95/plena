"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2.5rem", height: "68px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(245,240,232,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "0.5px solid rgba(26,24,20,0.08)" : "none",
      transition: "all 0.4s",
    }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 400, color: "#1c2b1e", letterSpacing: "0.04em" }}>
            Plena
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a9b7e", marginTop: "1px" }}>
            Nutrición con propósito
          </div>
        </div>
      </Link>

      <div className="desktop-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {[{ href: "/planes", label: "Planes" }, { href: "/sobre-nosotros", label: "Nosotras" }, { href: "/contacto", label: "¿Cómo funciona?" }].map(l => (
          <Link key={l.href} href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#3d3830", textDecoration: "none", letterSpacing: "0.02em" }}>
            {l.label}
          </Link>
        ))}
        <Link href="/contacto" style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500,
          padding: "9px 22px", background: "#1c2b1e", color: "#f5f0e8",
          borderRadius: "2px", textDecoration: "none", letterSpacing: "0.04em",
        }}>
          Empezar
        </Link>
      </div>
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
    </nav>
  );
}
