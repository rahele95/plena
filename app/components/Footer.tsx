import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1c2b1e", color: "#f5f0e8", padding: "4rem 2.5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "#a8c4a0", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
            Plena
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.45)", lineHeight: 1.75, maxWidth: "260px" }}>
            Nutrición con propósito. Chef profesional, nutriólogo certificado y entrega a domicilio en Guadalajara.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9b7e", marginBottom: "1.2rem" }}>Planes</div>
          {["Plan semanal", "Plan personalizado", "Lunch kids", "Suplementación"].map(l => (
            <Link key={l} href="/planes" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.4)", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>{l}</Link>
          ))}
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a9b7e", marginBottom: "1.2rem" }}>Contacto</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.4)", lineHeight: 2 }}>
            hola@somos-plena.com<br />Guadalajara, Jalisco<br /><br />Instagram · TikTok
          </p>
        </div>
      </div>
      <div style={{ borderTop: "0.5px solid rgba(245,240,232,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.2)" }}>© 2026 Plena. Todos los derechos reservados.</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "rgba(245,240,232,0.2)" }}>Nutrición con propósito.</span>
      </div>
      <style>{`@media(max-width:768px){footer>div:first-of-type{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
