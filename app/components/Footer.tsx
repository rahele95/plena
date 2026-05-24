import Link from "next/link";

export default function Footer() {
  const ft: React.CSSProperties = { background: "#0f1f12", color: "#f8faf5", padding: "4rem 2rem 2rem" };
  const grid: React.CSSProperties = { maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" };
  const name: React.CSSProperties = { fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 600, color: "#a8d94a", letterSpacing: "-0.02em", marginBottom: "0.75rem" };
  const sub: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6b7c6d", lineHeight: 1.7, maxWidth: "260px" };
  const colLabel: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a9463", marginBottom: "1rem" };
  const colLink: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#6b7c6d", textDecoration: "none", display: "block", marginBottom: "0.5rem" };
  const bar: React.CSSProperties = { maxWidth: "1100px", margin: "0 auto", borderTop: "0.5px solid rgba(248,250,245,0.08)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" };
  const sm: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#2d3a2e" };

  return (
    <footer style={ft}>
      <div style={grid}>
        <div>
          <div style={name}>plena</div>
          <p style={sub}>Nutrición diseñada para tu vida. Chef profesional + nutriólogo certificado + entrega a domicilio en Guadalajara.</p>
        </div>
        <div>
          <div style={colLabel}>Planes</div>
          {["Plan semanal estándar","Plan personalizado","Lunch kids","Plan médico"].map(l=>(
            <Link key={l} href="/planes" style={colLink}>{l}</Link>
          ))}
        </div>
        <div>
          <div style={colLabel}>Contacto</div>
          <p style={{...colLink, cursor:"default"}}>hola@plena.mx</p>
          <p style={{...colLink, cursor:"default"}}>Guadalajara, Jalisco</p>
          <p style={{...colLink, cursor:"default", marginTop:"0.5rem"}}>Instagram · TikTok</p>
        </div>
      </div>
      <div style={bar}>
        <span style={sm}>© 2026 Plena. Todos los derechos reservados.</span>
        <span style={{...sm, color:"#4a9463"}}>Hecho en Guadalajara · Con nutrición real.</span>
      </div>
      <style>{`@media(max-width:768px){footer>div:first-of-type{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
