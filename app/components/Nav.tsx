"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const S: React.CSSProperties = {};
void S;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const nav: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    padding: "0 2rem", height: "64px", display: "flex",
    alignItems: "center", justifyContent: "space-between",
    background: scrolled ? "rgba(248,250,245,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "0.5px solid rgba(15,31,18,0.08)" : "none",
    transition: "all 0.3s",
  };

  const logoWrap: React.CSSProperties = { display: "flex", flexDirection: "column", lineHeight: 1 };
  const logoName: React.CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.3rem", fontWeight: 600, color: "#1a4a2e", letterSpacing: "-0.02em" };
  const logoTag: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a9463", marginTop: "1px" };

  const links: React.CSSProperties = { display: "flex", gap: "2rem", alignItems: "center" };
  const lk: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#2d3a2e", textDecoration: "none", transition: "color 0.2s" };
  const cta: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, padding: "9px 22px", background: "#1a4a2e", color: "#f8faf5", borderRadius: "100px", textDecoration: "none", transition: "background 0.2s" };

  return (
    <nav style={nav}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={logoWrap}>
          <span style={logoName}>plena</span>
          <span style={logoTag}>nutrición con propósito</span>
        </div>
      </Link>
      <div style={links} className="desktop-nav">
        {[{href:"/planes",label:"Planes"},{href:"/sobre-nosotros",label:"Nosotras"},{href:"/contacto",label:"¿Cómo funciona?"}].map(l=>(
          <Link key={l.href} href={l.href} style={lk}>{l.label}</Link>
        ))}
        <Link href="/contacto" style={cta}>Empezar hoy</Link>
      </div>
      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
    </nav>
  );
}
