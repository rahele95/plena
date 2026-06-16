"use client";
import Link from "next/link";

const g = {
  night: "#1c2b1e", sage: "#7a9b7e", linen: "#f5f0e8", ivory: "#faf7f2",
  stone: "#c8bfb0", ink: "#1a1814", ink2: "#3d3830", ink3: "#7a736a",
  serif: "'Cormorant Garamond', serif", sans: "'DM Sans', system-ui, sans-serif",
};

export default function PitchRafael() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4rem" }}>
        <span style={{ fontFamily: g.serif, fontSize: "1.2rem", color: g.night, letterSpacing: "-0.02em" }}>Plena</span>
        <span style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3, letterSpacing: "0.12em", textTransform: "uppercase" }}>Propuesta confidencial</span>
      </div>

      {/* Hero */}
      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "12px" }}>Para Rafael · El Romeral</p>
      <h1 style={{ fontFamily: g.serif, fontSize: "clamp(2.2rem,5vw,3.2rem)", fontWeight: 400, color: g.night, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
        Tu cocina. Nuestro volumen.<br />Comisión sin riesgo.
      </h1>
      <p style={{ fontFamily: g.sans, fontSize: "15px", lineHeight: 1.8, color: g.ink3, marginBottom: "3rem", maxWidth: "520px" }}>
        Plena es el primer servicio de meal prep médico-nutricional de Guadalajara. No queremos rentar tu cocina — queremos que seas el primer socio certificado del modelo.
      </p>

      <hr style={{ border: "none", borderTop: `0.5px solid ${g.stone}`, marginBottom: "3rem" }} />

      {/* Gap */}
      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>El hueco que vamos a llenar</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "3rem" }}>
        {[
          "No existe meal prep con etiqueta nutricional completa en GDL",
          "No hay planes certificados para diabetes, cardiovascular o pérdida de peso",
          "Ningún competidor local tiene empaque premium + nutriólogo integrado",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ color: g.sage, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: g.sans, fontSize: "14px", lineHeight: 1.7, color: g.ink2, margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `0.5px solid ${g.stone}`, marginBottom: "3rem" }} />

      {/* Role */}
      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>Tu rol en Plena</p>
      <div style={{ background: g.ivory, border: `0.5px solid ${g.stone}`, borderRadius: "6px", padding: "1.5rem", marginBottom: "3rem" }}>
        <p style={{ fontFamily: g.serif, fontSize: "1.3rem", color: g.night, marginBottom: "12px", lineHeight: 1.3 }}>Cocina certificada Plena</p>
        <p style={{ fontFamily: g.sans, fontSize: "14px", lineHeight: 1.8, color: g.ink3, margin: 0 }}>
          El Romeral se convierte en la primera cocina industrial certificada del modelo. Nosotros traemos el volumen, la operación y el cliente. Tú aportas el espacio y el equipo. Sin inversión de tu parte. Sin cambiar tu operación actual.
        </p>
      </div>

      {/* What you get */}
      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>Lo que ganas</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px", marginBottom: "3rem" }}>
        {[
          { n: "$30", label: "MXN por cada pedido procesado en tu cocina" },
          { n: "∞",  label: "Membresía Plena vitalicia para ti y tu equipo" },
          { n: "🔗", label: "Logo de El Romeral como cocina certificada en nuestro sitio" },
          { n: "0",  label: "Inversión requerida de tu parte" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "4px", padding: "1rem 1.25rem" }}>
            <span style={{ fontFamily: g.serif, fontSize: "1.4rem", color: g.night, minWidth: "32px" }}>{item.n}</span>
            <p style={{ fontFamily: g.sans, fontSize: "14px", color: g.ink2, margin: 0, lineHeight: 1.6 }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Projection */}
      <div style={{ background: g.night, borderRadius: "6px", padding: "2rem", marginBottom: "3rem" }}>
        <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(168,196,160,0.7)", marginBottom: "1rem" }}>La proyección</p>
        <p style={{ fontFamily: g.serif, fontSize: "clamp(1.6rem,3vw,2rem)", color: "#f5f0e8", lineHeight: 1.2, marginBottom: "8px" }}>
          150 pedidos/semana = $4,500 MXN adicionales
        </p>
        <p style={{ fontFamily: g.sans, fontSize: "13px", color: "rgba(248,250,245,0.5)", margin: 0, lineHeight: 1.7 }}>
          Sin cambiar tu operación. Sin riesgo. Escalable en la medida en que crezcamos juntos. A partir de 150 pedidos semanales renegociamos términos al alza.
        </p>
      </div>

      {/* CTA */}
      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>El siguiente paso</p>
      <p style={{ fontFamily: g.sans, fontSize: "15px", lineHeight: 1.8, color: g.ink2, marginBottom: "2rem" }}>
        Una reunión de 45 minutos para conocer la operación, validar la capacidad de la cocina y alinear los términos. Sin compromiso de tu parte hasta que firmes.
      </p>
      <p style={{ fontFamily: g.sans, fontSize: "13px", color: g.ink3, lineHeight: 1.7, padding: "1rem", background: g.ivory, border: `0.5px solid ${g.stone}`, borderRadius: "4px" }}>
        Verificaremos el estatus COFEPRIS de la cocina — requisito para operar los planes médicos — y alinearemos el proceso de etiquetado NOM-051 (etiquetado nutricional obligatorio en México). Este requisito convierte a El Romeral en la primera cocina certificada del modelo Plena, y nos diferencia de cualquier competidor local.
      </p>
    </div>
  );
}
