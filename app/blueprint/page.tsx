"use client";
import { useState } from "react";

const ACCESS_CODE = "plena-build";

const g = {
  night: "#1c2b1e", nightM: "#2d4030", sage: "#7a9b7e", sageL: "#a8c4a0",
  linen: "#f5f0e8", ivory: "#faf7f2", stone: "#c8bfb0", stoneD: "#9e9385",
  ink: "#1a1814", ink2: "#3d3830", ink3: "#7a736a",
  serif: "'Cormorant Garamond', serif", sans: "'DM Sans', system-ui, sans-serif",
};

const t = {
  eyebrow: { fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: g.sage, marginBottom: "8px", display: "block" },
  h1: { fontFamily: g.serif, fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 400 as const, color: g.night, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "12px" },
  h2: { fontFamily: g.serif, fontSize: "clamp(1.3rem,2.5vw,1.6rem)", fontWeight: 400 as const, color: g.night, marginBottom: "10px", lineHeight: 1.2 },
  p: { fontFamily: g.sans, fontSize: "14px", lineHeight: 1.85, color: g.ink3, marginBottom: "0" },
  label: { fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.ink3, marginBottom: "4px", display: "block" },
  value: { fontFamily: g.sans, fontSize: "14px", color: g.ink2, lineHeight: 1.6 },
};

const s = {
  sec: { padding: "2.5rem 0", borderBottom: `0.5px solid ${g.stone}` },
  card: { background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "6px", padding: "1.25rem" },
  cardD: { background: g.night, borderRadius: "6px", padding: "1.5rem" },
  row: { display: "flex" as const, gap: "8px", alignItems: "flex-start", marginBottom: "8px" },
  dash: { color: g.sage, flexShrink: 0 as const, lineHeight: "1.85", fontFamily: g.sans, fontSize: "14px" },
  grid2: { display: "grid" as const, gridTemplateColumns: "1fr 1fr", gap: "12px" },
  grid3: { display: "grid" as const, gridTemplateColumns: "repeat(3,1fr)", gap: "12px" },
};

function Dash({ children }: { children: React.ReactNode }) {
  return <div style={s.row}><span style={s.dash}>—</span><p style={t.p}>{children}</p></div>;
}

function Pill({ color="sage", children }: { color?: string; children: React.ReactNode }) {
  const colors: Record<string,string[]> = {
    sage: [g.sage, "rgba(122,155,126,0.12)"],
    red: ["#b85c3a", "rgba(196,92,58,0.1)"],
    amber: ["#9a6f1a", "rgba(185,130,28,0.1)"],
  };
  const [text, bg] = colors[color] || colors.sage;
  return <span style={{ fontFamily: g.sans, fontSize: "11px", padding: "2px 8px", borderRadius: "20px", background: bg, color: text, border: `0.5px solid ${text}30` }}>{children}</span>;
}

export default function Blueprint() {
  const [auth, setAuth] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", background: g.linen, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ maxWidth: "380px", width: "100%", textAlign: "center" as const }}>
          <p style={{ ...t.eyebrow, textAlign: "center" as const, marginBottom: "24px" }}>Acceso restringido</p>
          <p style={{ fontFamily: g.serif, fontSize: "1.8rem", color: g.night, marginBottom: "8px", fontWeight: 400 }}>Plena · Blueprint</p>
          <p style={{ ...t.p, textAlign: "center" as const, marginBottom: "32px" }}>Documento interno. Ingresa el código de acceso para continuar.</p>
          <input
            type="password"
            placeholder="Código de acceso"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            onKeyDown={e => {
              if (e.key === "Enter") {
                if (input === ACCESS_CODE) setAuth(true);
                else setError(true);
              }
            }}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: "4px", fontFamily: g.sans,
              fontSize: "14px", border: `0.5px solid ${error ? "#c4703a" : g.stone}`,
              background: g.ivory, outline: "none", marginBottom: "8px", boxSizing: "border-box" as const,
            }}
          />
          {error && <p style={{ fontFamily: g.sans, fontSize: "12px", color: "#c4703a", marginBottom: "12px" }}>Código incorrecto</p>}
          <button
            onClick={() => { if (input === ACCESS_CODE) setAuth(true); else setError(true); }}
            style={{
              width: "100%", padding: "12px", background: g.night, color: g.linen, border: "none",
              borderRadius: "4px", fontFamily: g.sans, fontSize: "13px", cursor: "pointer",
              letterSpacing: "0.06em",
            }}
          >Ingresar</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: g.linen, minHeight: "100vh" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: `0.5px solid ${g.stone}` }}>
          <div>
            <span style={t.eyebrow}>Blueprint · Capa 1 · Confidencial</span>
            <h1 style={t.h1}>Plena</h1>
            <p style={{ ...t.p, fontSize: "16px" }}>Primer servicio de meal prep médico-nutricional de México</p>
          </div>
          <div style={{ textAlign: "right" as const, flexShrink: 0 }}>
            <p style={{ ...t.label, marginBottom: "2px" }}>Estado</p>
            <Pill color="amber">Pre-lanzamiento</Pill>
            <p style={{ ...t.label, marginTop: "8px", marginBottom: "2px" }}>Ciudad</p>
            <p style={{ ...t.value }}>Guadalajara, MX</p>
          </div>
        </div>

        {/* 01 Visión */}
        <div style={s.sec}>
          <span style={t.eyebrow}>01 · Visión y propósito</span>
          <h2 style={t.h2}>Por qué existe Plena</h2>
          <div style={{ ...s.grid2, marginBottom: "20px" }}>
            <div style={s.card}>
              <p style={t.label}>Tagline</p>
              <p style={{ fontFamily: g.serif, fontSize: "1.1rem", color: g.night }}>"Nutrición con propósito"</p>
            </div>
            <div style={s.card}>
              <p style={t.label}>Nombre</p>
              <p style={t.value}>Neutro. Sin GDL ni MX. Visión de franquicia internacional.</p>
            </div>
          </div>
          <div style={s.card}>
            <p style={t.label}>Misión</p>
            <p style={t.value}>Hacer accesible la nutrición médica de calidad a través de comidas preparadas con etiqueta nutricional completa, adaptadas por condición de salud y entregadas a domicilio.</p>
          </div>
          <div style={{ ...s.card, marginTop: "12px" }}>
            <p style={t.label}>Visión</p>
            <p style={t.value}>Ser el primer sistema de meal prep médico-nutricional replicable de México. Validar en GDL. Escalar como franquicia LATAM.</p>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const, marginTop: "16px" }}>
            {["Disciplina", "Buenos hábitos", "Healthy", "Calidad visible"].map(v => (
              <Pill key={v}>{v}</Pill>
            ))}
          </div>
        </div>

        {/* 02 El problema */}
        <div style={s.sec}>
          <span style={t.eyebrow}>02 · El problema que resolvemos</span>
          <h2 style={t.h2}>Lo que no existe en GDL</h2>
          <div style={{ ...s.grid2 }}>
            {[
              ["Etiqueta nutricional real", "Ningún servicio local incluye etiqueta nutricional completa en cada envase."],
              ["Planes por condición médica", "Diabetes, cardiovascular, pérdida de peso supervisada: nadie lo tiene."],
              ["Nutriólogo integrado", "Los servicios existentes no cuentan con respaldo clínico verificable."],
              ["Empaque al vacío certificado", "La vida útil y seguridad alimentaria real no existen en el mercado local."],
            ].map(([title, desc]) => (
              <div key={title} style={s.card}>
                <p style={t.label}>{title}</p>
                <p style={t.value}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 03 La solución */}
        <div style={s.sec}>
          <span style={t.eyebrow}>03 · La solución</span>
          <h2 style={t.h2}>Qué es Plena</h2>
          <div style={s.grid3}>
            {[
              { n: "Plan semanal", d: "Comidas preparadas con etiqueta nutricional completa. Chef + nutriólogo." },
              { n: "Plan médico", d: "Adaptado por condición: diabetes, cardiovascular, control de peso." },
              { n: "Lunch Kids", d: "Almuerzos escolares saludables con control nutricional visible." },
            ].map(item => (
              <div key={item.n} style={s.card}>
                <p style={t.label}>{item.n}</p>
                <p style={t.value}>{item.d}</p>
              </div>
            ))}
          </div>
          <p style={{ ...t.p, marginTop: "16px" }}>Suplementación con análisis de sangre: plan personalizado por condición. Sin descuentos bajo ningún concepto — la estrategia de precio es la propuesta de valor.</p>
        </div>

        {/* 04 Modelo de negocio */}
        <div style={s.sec}>
          <span style={t.eyebrow}>04 · Modelo de negocio</span>
          <h2 style={t.h2}>Cómo genera ingresos Plena</h2>
          <div style={{ ...s.card, marginBottom: "12px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
              <thead>
                <tr style={{ borderBottom: `0.5px solid ${g.stone}` }}>
                  {["Plan", "Precio por comida", "Margen objetivo"].map(h => (
                    <th key={h} style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.ink3, padding: "8px 12px", textAlign: "left" as const, fontWeight: 400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Semanal estándar", "$180–220 MXN", "~45–55%"],
                  ["Personalizado + nutriólogo", "$250–350 MXN", "~50–60%"],
                  ["Lunch Kids", "$120–160 MXN", "~40–50%"],
                ].map(([plan, precio, margen]) => (
                  <tr key={plan} style={{ borderBottom: `0.5px solid ${g.stone}30` }}>
                    <td style={{ fontFamily: g.sans, fontSize: "14px", color: g.ink2, padding: "10px 12px" }}>{plan}</td>
                    <td style={{ fontFamily: g.sans, fontSize: "14px", color: g.night, padding: "10px 12px", fontWeight: 500 }}>{precio}</td>
                    <td style={{ fontFamily: g.sans, fontSize: "14px", color: g.ink3, padding: "10px 12px" }}>{margen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={s.cardD}>
            <p style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(168,196,160,0.7)", marginBottom: "6px" }}>Regla de oro</p>
            <p style={{ fontFamily: g.serif, fontSize: "1.15rem", color: g.linen, lineHeight: 1.4 }}>Sin descuentos bajo ningún concepto. El precio es la promesa de calidad.</p>
          </div>
        </div>

        {/* 05 Socios */}
        <div style={s.sec}>
          <span style={t.eyebrow}>05 · Estructura de socios</span>
          <h2 style={t.h2}>Quiénes construyen Plena</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {[
              {
                nombre: "Rafael · El Romeral (cocina)",
                rol: "Cocina industrial certificada",
                modelo: "Comisión $25–35 MXN/pedido + membresía Plena vitalicia + logo en sitio",
                estado: "Por contactar",
                nota: "Verificar COFEPRIS en reunión. No renta fija. A 150+ pedidos/sem renegociar."
              },
              {
                nombre: "Alan · Chef nutricional",
                rol: "Socio operativo",
                modelo: "E0: NDA+costeo sin pago · E1: $10/comida + 8% utilidad + mín $3k/sem · E2: $20k/mes + 8%",
                estado: "Por contactar",
                nota: "NDA firmado ANTES de revelar modelo. IP de recetas pertenece a Plena."
              },
              {
                nombre: "Luis Fer · NetLab (tech)",
                rol: "Socio tecnológico",
                modelo: "Setup $30k + retainer $10k/mes (mes 3+) + 4% digital + franquicia $30k+$5k/mes/ciudad",
                estado: "Por contactar",
                nota: "Copropiedad IP tech 50/50 · exclusividad categoría food-tech LATAM."
              },
              {
                nombre: "Nutriólogo clínico",
                rol: "Validación médica",
                modelo: "Mismo esquema equity que Alan. Sin candidato aún.",
                estado: "Gap crítico",
                nota: "Sin nutriólogo los planes médicos son ilegalmente riesgosos. CUCS, UAG, UdG."
              },
            ].map(s2 => (
              <div key={s2.nombre} style={{ background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "6px", padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", flexWrap: "wrap" as const, gap: "8px" }}>
                  <div>
                    <p style={{ fontFamily: g.sans, fontSize: "13px", fontWeight: 500, color: g.night, marginBottom: "2px" }}>{s2.nombre}</p>
                    <p style={{ fontFamily: g.sans, fontSize: "11px", color: g.sage }}>{s2.rol}</p>
                  </div>
                  <Pill color={s2.estado === "Gap crítico" ? "red" : "amber"}>{s2.estado}</Pill>
                </div>
                <p style={{ fontFamily: g.sans, fontSize: "13px", color: g.ink2, marginBottom: "8px", lineHeight: 1.6 }}>{s2.modelo}</p>
                <p style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.6, padding: "8px 10px", background: g.linen, borderRadius: "3px" }}>{s2.nota}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 06 Gaps */}
        <div style={s.sec}>
          <span style={t.eyebrow}>06 · Gaps críticos</span>
          <h2 style={t.h2}>Lo que falta resolver</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {[
              { p: "🔴", g: "Nutriólogo clínico", d: "Prioridad esta semana. Bloquea planes médicos Y suplementación. Riesgo legal sin él." },
              { p: "🔴", g: "Constitución legal / RFC", d: "Persona física o SA de CV. Antes del primer cliente." },
              { p: "🔴", g: "Seguro de responsabilidad civil", d: "Alimentos + condiciones médicas = riesgo real." },
              { p: "🟡", g: "Logística de entrega", d: "Borzo / iVoy / repartidor propio. Definir antes del beta." },
              { p: "🟡", g: "Proveedor empaque al vacío GDL", d: "Con certificación COFEPRIS." },
              { p: "🟡", g: "Sistema de cobro", d: "Clip, Stripe o transferencia. Antes del beta." },
              { p: "🟡", g: "Fotografía de producto", d: "Sin foto de envases no hay conversión." },
              { p: "🟡", g: "NOM-051", d: "Etiquetado nutricional obligatorio en México. Rafael y Alan deben conocerlo." },
            ].map(item => (
              <div key={item.g} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 14px", background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "4px" }}>
                <span style={{ fontSize: "14px", flexShrink: 0, lineHeight: "1.6" }}>{item.p}</span>
                <div>
                  <p style={{ fontFamily: g.sans, fontSize: "13px", fontWeight: 500, color: g.ink2, marginBottom: "2px" }}>{item.g}</p>
                  <p style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.5 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 07 Hito */}
        <div style={{ padding: "2.5rem 0" }}>
          <span style={t.eyebrow}>07 · Hito que lo desbloquea todo</span>
          <div style={s.cardD}>
            <p style={{ fontFamily: g.serif, fontSize: "clamp(1.5rem,3vw,2rem)", color: g.linen, lineHeight: 1.2, marginBottom: "8px" }}>3 clientes beta pagados · Mes 2</p>
            <p style={{ fontFamily: g.sans, fontSize: "13px", color: "rgba(248,250,245,0.5)", lineHeight: 1.7 }}>
              Este hito valida el modelo, define el costeo real, y es el argumento para el pitch de inversión y para la replicabilidad del sistema.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "3rem", padding: "1rem", background: g.ivory, border: `0.5px solid ${g.stone}`, borderRadius: "4px" }}>
          <p style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3, textAlign: "center" as const, lineHeight: 1.7 }}>
            Documento confidencial · Plena · No compartir sin autorización<br/>
            Cambios y actualizaciones → Anexo de cambios Capa 1 en Notion
          </p>
        </div>

      </div>
    </div>
  );
}
