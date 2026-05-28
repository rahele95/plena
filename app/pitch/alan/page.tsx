"use client";

const g = {
  night: "#1c2b1e", sage: "#7a9b7e", linen: "#f5f0e8", ivory: "#faf7f2",
  stone: "#c8bfb0", ink: "#1a1814", ink2: "#3d3830", ink3: "#7a736a",
  serif: "'Cormorant Garamond', serif", sans: "'DM Sans', system-ui, sans-serif",
};

export default function PitchAlan() {
  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4rem" }}>
        <span style={{ fontFamily: g.serif, fontSize: "1.2rem", color: g.night, letterSpacing: "-0.02em" }}>Plena</span>
        <span style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3, letterSpacing: "0.12em", textTransform: "uppercase" }}>Propuesta confidencial</span>
      </div>

      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "12px" }}>Para Alan · Chef nutricional</p>
      <h1 style={{ fontFamily: g.serif, fontSize: "clamp(2.2rem,5vw,3.2rem)", fontWeight: 400, color: g.night, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
        El chef que construye<br />el modelo contigo.
      </h1>
      <p style={{ fontFamily: g.sans, fontSize: "15px", lineHeight: 1.8, color: g.ink3, marginBottom: "3rem", maxWidth: "520px" }}>
        Plena no busca un chef de planta. Busca a alguien que entienda la nutrición médica, crea en el proyecto y quiera crecer con él desde adentro.
      </p>

      <hr style={{ border: "none", borderTop: `0.5px solid ${g.stone}`, marginBottom: "3rem" }} />

      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>Por qué este momento</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "3rem" }}>
        {[
          "GDL no tiene meal prep con respaldo nutricional real — ese es el diferenciador",
          "Los planes médicos (diabetes, cardiovascular) necesitan un chef que entienda la ciencia",
          "Entramos primero: quien desarrolle las recetas base define el estándar del mercado",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ color: g.sage, fontSize: "16px", lineHeight: "1.6", flexShrink: 0 }}>—</span>
            <p style={{ fontFamily: g.sans, fontSize: "14px", lineHeight: 1.7, color: g.ink2, margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: `0.5px solid ${g.stone}`, marginBottom: "3rem" }} />

      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>Tu rol</p>
      <div style={{ background: g.ivory, border: `0.5px solid ${g.stone}`, borderRadius: "6px", padding: "1.5rem", marginBottom: "3rem" }}>
        <p style={{ fontFamily: g.serif, fontSize: "1.3rem", color: g.night, marginBottom: "12px", lineHeight: 1.3 }}>Socio operativo · Chef Plena</p>
        <p style={{ fontFamily: g.sans, fontSize: "14px", lineHeight: 1.8, color: g.ink3, margin: 0 }}>
          Desarrollas los planes nutricionales con propósito médico. Co-diseñas recetas adaptadas por condición. Participas en el costeo real del modelo. También validas los planes de suplementación que el nutriólogo recetará — tu rol une la cocina con la ciencia. Tu expertise es el diferenciador real de Plena.
        </p>
      </div>

      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>Cómo crece tu compensación</p>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px", marginBottom: "3rem" }}>
        {[
          { fase: "Etapa 0 · Hoy", desc: "NDA firmado + costeo juntos. Sin pago fijo, contrato vigente." },
          { fase: "Etapa 1 · Primeros 50 clientes", desc: "$10 MXN por comida producida + 8% utilidad neta + mínimo $3,000/semana garantizados." },
          { fase: "Etapa 2 · Escala (50+ clientes)", desc: "$20,000 MXN/mes + 8% de utilidades. Tu ingreso crece con el volumen." },
          { fase: "Etapa 3 · Franquicia", desc: "Royalty por cada ciudad que replique el Método Plena usando tus recetas base." },
        ].map((item, i) => (
          <div key={i} style={{ background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "4px", padding: "1rem 1.25rem" }}>
            <p style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.sage, marginBottom: "4px" }}>{item.fase}</p>
            <p style={{ fontFamily: g.sans, fontSize: "14px", color: g.ink2, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ background: g.night, borderRadius: "6px", padding: "2rem", marginBottom: "3rem" }}>
        <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(168,196,160,0.7)", marginBottom: "1rem" }}>La proyección</p>
        <p style={{ fontFamily: g.serif, fontSize: "clamp(1.6rem,3vw,2rem)", color: "#f5f0e8", lineHeight: 1.2, marginBottom: "8px" }}>
          50 clientes activos = $8k–12k MXN / semana
        </p>
        <p style={{ fontFamily: g.sans, fontSize: "13px", color: "rgba(248,250,245,0.5)", margin: 0, lineHeight: 1.7 }}>
          No esperas a que la empresa crezca para empezar a ganar. Ganas desde el primer plan vendido.
        </p>
      </div>

      <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: g.sage, marginBottom: "1rem" }}>El siguiente paso</p>
      <p style={{ fontFamily: g.sans, fontSize: "15px", lineHeight: 1.8, color: g.ink2, marginBottom: "1.5rem" }}>
        Una conversación para presentarte el modelo completo, la visión y el tipo de platos que desarrollaríamos juntos. Antes de hablar números, firmamos un NDA — para que lo que construyamos juntos quede protegido desde el día uno.
      </p>
      <div style={{ padding: "1rem", background: g.ivory, border: `0.5px solid ${g.stone}`, borderRadius: "4px" }}>
        <p style={{ fontFamily: g.sans, fontSize: "13px", color: g.ink3, margin: 0, lineHeight: 1.7 }}>
          La IP de las recetas pertenece a Plena. Tu nombre y credenciales son parte visible de la marca — eres el chef que hace que la promesa nutricional sea creíble. El éxito del modelo es el éxito de tu reputación profesional.
        </p>
      </div>
    </div>
  );
}
