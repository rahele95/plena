"use client";
import { useState } from "react";
import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Section = "porq" | "que" | "como" | "quien" | "cuando" | "modelo" | "marca" | "notion" | "tech" | "social";

// ─── NAV SECTIONS ─────────────────────────────────────────────────────────────
const NAV: { id: Section; label: string; emoji: string }[] = [
  { id: "porq",   label: "El Por Qué",      emoji: "💡" },
  { id: "que",    label: "El Qué",          emoji: "🥗" },
  { id: "como",   label: "El Cómo",         emoji: "⚙️" },
  { id: "quien",  label: "El Quién",        emoji: "👥" },
  { id: "cuando", label: "El Cuándo",       emoji: "📅" },
  { id: "modelo", label: "Modelo de negocio", emoji: "💰" },
  { id: "marca",  label: "Marca",           emoji: "🎨" },
  { id: "notion", label: "Notion OS",       emoji: "🗂️" },
  { id: "tech",   label: "Stack técnico",   emoji: "🛠️" },
  { id: "social", label: "Redes sociales",  emoji: "📱" },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────
const g = {
  // colors
  green:   "#1c2b1e",
  gm:      "#2d4030",
  gl:      "#7a9b7e",
  lime:    "#a8c4a0",
  cream:   "#f5f0e8",
  light:   "#ede8dc",
  sand:    "#ede8dc",
  ink:     "#1c2b1e",
  ink2:    "#3d3830",
  ink3:    "#7a736a",
  rule:    "rgba(15,31,18,0.08)",
  ruleD:   "rgba(248,250,245,0.08)",
  // fonts
  serif:   "'Cormorant Garamond', system-ui, sans-serif",
  sans:    "'DM Sans', system-ui, sans-serif",
};

const t = {
  eyebrow: { fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: g.gl, marginBottom: "10px" },
  eyebrowL: { fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: g.lime, marginBottom: "10px" },
  h2: { fontFamily: g.serif, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400 as const, color: g.ink, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "12px" },
  h2L: { fontFamily: g.serif, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 400 as const, color: g.cream, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "12px" },
  h3: { fontFamily: g.serif, fontSize: "1.1rem", fontWeight: 400 as const, color: g.ink, marginBottom: "6px", lineHeight: 1.25 },
  h3L: { fontFamily: g.serif, fontSize: "1.1rem", fontWeight: 400 as const, color: g.cream, marginBottom: "6px", lineHeight: 1.25 },
  p: { fontFamily: g.sans, fontSize: "14px", lineHeight: 1.8, color: g.ink3 },
  pL: { fontFamily: g.sans, fontSize: "14px", lineHeight: 1.8, color: "rgba(248,250,245,0.5)" },
  label: { fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.ink3, marginBottom: "4px" },
};

const card = { background: "white", borderRadius: "4px", border: `0.5px solid rgba(15,31,18,0.08)`, padding: "1.25rem" };
const cardD = { background: "rgba(248,250,245,0.04)", border: `0.5px solid rgba(248,250,245,0.08)`, borderRadius: "4px", padding: "1.25rem" };
const sec = { padding: "4rem 2rem" };
const secD = { padding: "4rem 2rem", background: g.ink };
const secL = { padding: "4rem 2rem", background: g.light };
const secS = { padding: "4rem 2rem", background: g.sand };
const wrap = { maxWidth: "1080px", margin: "0 auto" };
const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" } as React.CSSProperties;
const grid3 = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" } as React.CSSProperties;
const grid4 = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" } as React.CSSProperties;

function Tag({ c="lime", children }: { c?: string; children: React.ReactNode }) {
  const colors: Record<string,string[]> = {
    lime: [g.lime, "rgba(168,217,74,0.12)", "rgba(168,217,74,0.3)"],
    green: [g.gm, "rgba(45,107,69,0.1)", "rgba(45,107,69,0.2)"],
    red: ["#c4703a", "rgba(196,112,58,0.1)", "rgba(196,112,58,0.2)"],
    gray: [g.ink3, "rgba(15,31,18,0.06)", g.rule],
  };
  const [col, bg, border] = colors[c] || colors.lime;
  return <span style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" as const, padding: "3px 10px", borderRadius: "2px", background: bg, border: `0.5px solid ${border}`, color: col, display: "inline-block" }}>{children}</span>;
}

function Pill({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <span style={{ fontFamily: g.sans, fontSize: "12px", padding: "4px 12px", background: dark ? "rgba(248,250,245,0.07)" : "rgba(15,31,18,0.04)", border: `0.5px solid ${dark ? "rgba(248,250,245,0.12)" : g.rule}`, borderRadius: "2px", color: dark ? "rgba(248,250,245,0.55)" : g.ink3, display: "inline-block", margin: "3px" }}>{children}</span>;
}

function Divider({ dark }: { dark?: boolean }) {
  return <div style={{ borderTop: `0.5px solid ${dark ? "rgba(248,250,245,0.08)" : g.rule}`, margin: "2rem 0" }} />;
}

function KpiRow({ name, target, freq, dark }: { name: string; target: string; freq: string; dark?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: `0.5px solid ${dark ? "rgba(248,250,245,0.06)" : g.rule}`, gap: "1rem" }}>
      <div>
        <div style={{ fontFamily: g.sans, fontSize: "13px", fontWeight: 500, color: dark ? "rgba(248,250,245,0.75)" : g.ink2 }}>{name}</div>
        <div style={{ fontFamily: g.sans, fontSize: "11px", color: dark ? "rgba(248,250,245,0.3)" : g.ink3 }}>{freq}</div>
      </div>
      <div style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 400, color: dark ? g.lime : g.green, whiteSpace: "nowrap" as const }}>{target}</div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Metodologia() {
  const [active, setActive] = useState<Section>("porq");

  return (
    <div style={{ background: g.cream, minHeight: "100vh" }}>

      {/* TOP HERO */}
      <div style={{ background: g.ink, padding: "7rem 2rem 3rem" }}>
        <div style={wrap}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(168,217,74,0.1)", border: "0.5px solid rgba(168,217,74,0.25)", borderRadius: "2px", padding: "4px 14px", marginBottom: "1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: g.lime, flexShrink: 0 }} />
            <span style={{ fontFamily: g.sans, fontSize: "11px", color: g.lime, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Documento interno · Plena · 2026</span>
          </div>
          <h1 style={{ fontFamily: g.serif, fontSize: "clamp(2.8rem,6vw,4.5rem)", fontWeight: 400, color: g.cream, letterSpacing: "-0.02em", lineHeight: 1.05, maxWidth: 760, marginBottom: "1rem" }}>
            El playbook de <span style={{ color: g.lime }}>Plena.</span>
          </h1>
          <p style={{ fontFamily: g.sans, fontSize: "15px", lineHeight: 1.8, color: "rgba(248,250,245,0.45)", maxWidth: 580, marginBottom: "2rem" }}>
            Todo lo que necesitas saber para operar, vender, escalar y presentar Plena a un socio. El por qué, el qué, el cómo, el quién y el cuándo — en un solo lugar.
          </p>
          {/* Stats bar */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" as const }}>
            {[["3","Planes de alimentación"],["5","Protocolos médicos"],["7","Secciones operativas"],["24","Meses al objetivo"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: g.serif, fontSize: "1.8rem", fontWeight: 400, color: g.lime, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: g.sans, fontSize: "11px", color: "rgba(248,250,245,0.3)", marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY NAV */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(15,31,18,0.97)", backdropFilter: "blur(12px)", borderBottom: "0.5px solid rgba(168,217,74,0.15)", overflowX: "auto" }}>
        <div style={{ display: "flex", padding: "0 1rem", minWidth: "max-content" }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => setActive(n.id)} style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.08em", padding: "12px 14px", background: "none", border: "none", cursor: "pointer", color: active === n.id ? g.lime : "rgba(248,250,245,0.4)", borderBottom: `2px solid ${active === n.id ? g.lime : "transparent"}`, whiteSpace: "nowrap" as const, transition: "all 0.2s" }}>
              {n.emoji} {n.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ POR QUÉ */}
      {active === "porq" && (
        <div>
          <div style={secD}>
            <div style={wrap}>
              <div style={t.eyebrowL}>La razón de existir</div>
              <h2 style={t.h2L}>El problema que nadie<br />resuelve bien en México.</h2>
              <div style={grid2}>
                <div>
                  <p style={{ ...t.pL, marginBottom: "1.5rem" }}>Millones de mexicanos quieren comer bien. El tiempo, el conocimiento y el acceso a algo de calidad real son las tres barreras. Existen soluciones en EUA que funcionan — NutritionByCass, ModifyHealth, TrueFare — pero nada equivalente en México.</p>
                  <p style={t.pL}>Lo que hay en Guadalajara son cocinas caseras sin estándares, sin nutriólogo, sin etiquetado real. El mercado está desatendido en el segmento que más puede pagar y más exige.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
                  {[["😤","Tiempo","Profesionistas con 12h de trabajo no tienen tiempo de cocinar bien"],["🤷","Conocimiento","Nadie les dice qué comer con evidencia real, solo Instagram"],["🏥","Condición médica","Diabéticos, hipertensos y atletas no tienen opciones curadas"]].map(([icon,t1,t2]) => (
                    <div key={t1} style={{ ...cardD, display: "flex", gap: "12px" }}>
                      <span style={{ fontSize: 24 }}>{icon}</span>
                      <div><div style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 400, color: g.cream, marginBottom: 4 }}>{t1}</div><div style={{ fontFamily: g.sans, fontSize: "12px", color: "rgba(248,250,245,0.4)", lineHeight: 1.55 }}>{t2}</div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Misión, visión y valores</div>
              <div style={grid3}>
                <div style={{ ...card, borderTop: `3px solid ${g.lime}` }}>
                  <div style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: g.gl, marginBottom: 10 }}>Misión</div>
                  <div style={{ fontFamily: g.serif, fontSize: "1.15rem", fontWeight: 400, color: g.ink, lineHeight: 1.3, marginBottom: 10 }}>Hacer que comer bien sea la opción más fácil del día.</div>
                  <p style={{ ...t.p, fontSize: "13px" }}>Chef profesional + nutriólogo certificado + entrega a domicilio. No como aspiración — como producto concreto y asequible.</p>
                </div>
                <div style={{ ...card, borderTop: `3px solid ${g.gm}` }}>
                  <div style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: g.gl, marginBottom: 10 }}>Visión</div>
                  <div style={{ fontFamily: g.serif, fontSize: "1.15rem", fontWeight: 400, color: g.ink, lineHeight: 1.3, marginBottom: 10 }}>Ser el sistema de nutrición de referencia en México para 2028.</div>
                  <p style={{ ...t.p, fontSize: "13px" }}>Primero Guadalajara. Luego CDMX y Monterrey. Marca registrada, modelo replicable, comunidad activa.</p>
                </div>
                <div style={{ ...card, borderTop: `3px solid rgba(168,217,74,0.3)` }}>
                  <div style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: g.gl, marginBottom: 10 }}>Valores</div>
                  {["Ciencia antes que tendencia","Calidad visible, no implícita","Personalización real, no de catálogo","Continuidad sobre transacción","Adriana como garantía humana"].map(v => (
                    <div key={v} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <span style={{ color: g.lime, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Divider />
              <div style={t.eyebrow}>El gap de mercado — Lo que Plena tiene que nadie más</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                {["Etiqueta nutricional completa en cada envase","Planes por condición médica (diabetes, corazón)","Nutriólogo integrado en el servicio","Empaque premium NOM-051 de calidad exportación","App de pedidos + perfil de cliente (Fase 2)","Suplementación basada en análisis de sangre","Cocina industrial certificada","Protocolo de trazabilidad por lote"].map(g2 => (
                  <div key={g2} style={{ display: "flex", gap: 6, alignItems: "center", padding: "8px 14px", background: "rgba(168,217,74,0.07)", border: "0.5px solid rgba(168,217,74,0.2)", borderRadius: 10 }}>
                    <span style={{ color: "#a8c4a0", fontSize: 12 }}>✓</span>
                    <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink2 }}>{g2}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ EL QUÉ */}
      {active === "que" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>El producto</div>
              <h2 style={t.h2}>Tres planes. Un sistema.</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                {[
                  { id:"P01", name:"Plan semanal estándar", tag:"Más popular", price:"$180–220", unit:"MXN/comida", target:"Profesionistas sin tiempo", moments:5, nutri:false, medical:false, desc:"Menú semanal elaborado por chef con revisión nutricional general. 5 momentos del día × 5 días. Etiqueta completa en cada envase. Sin consulta con nutriólogo incluida.", kpis:["Costo producción < $80 MXN","Margen bruto > 55%","NPS ≥ 8"] },
                  { id:"P02", name:"Plan personalizado + nutriólogo", tag:"Mayor impacto", price:"$250–350", unit:"MXN/comida", target:"Personas con objetivos específicos o condición médica", moments:5, nutri:true, medical:true, desc:"Consulta inicial con nutriólogo. Plan 100% clínico. Seguimiento mensual. Ajustes semanales según resultados.", kpis:["Consulta ≤ 60 min","Margen > 45%","Retención 3m > 70%"] },
                  { id:"P03", name:"Lunch kids", tag:"Nuevo", price:"$150–160", unit:"MXN/lunch", target:"Mamás trabajadoras, hijos en edad escolar", moments:1, nutri:false, medical:false, desc:"Menú escolar lunes a viernes. Sin azúcares añadidos, sin ultraprocesados. Diseñado con nutriólogo pediátrico. Entrega lunes en ventana 7am–5pm.", kpis:["Entrega lunes 7am–5pm","Margen > 30%","Cancelación < 5%"] },
                ].map((plan, i) => (
                  <div key={plan.id} style={{ ...card, display: "grid", gridTemplateColumns: "64px 1fr auto", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontFamily: g.serif, fontSize: "2rem", fontWeight: 500, color: "rgba(168,217,74,0.25)", lineHeight: 1 }}>{plan.id}</div>
                      <Tag c={i===1?"lime":"green"}>{plan.tag}</Tag>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const, marginBottom: 6, alignItems: "center" }}>
                        <div style={t.h3}>{plan.name}</div>
                        {plan.nutri && <Tag c="green">Nutriólogo</Tag>}
                        {plan.medical && <Tag c="red">Plan médico</Tag>}
                      </div>
                      <div style={{ fontFamily: g.sans, fontSize: "12px", color: g.gl, marginBottom: 8 }}>Target: {plan.target}</div>
                      <p style={{ ...t.p, marginBottom: 10 }}>{plan.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6 }}>
                        {plan.kpis.map(k => <Pill key={k}>KPI: {k}</Pill>)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" as const }}>
                      <div style={{ fontFamily: g.serif, fontSize: "1.6rem", fontWeight: 500, color: g.green }}>{plan.price}</div>
                      <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3 }}>{plan.unit}</div>
                      <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.gl, marginTop: 4 }}>{plan.moments} momentos/día</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={secD}>
            <div style={wrap}>
              <div style={t.eyebrowL}>Categorías médicas disponibles</div>
              <h2 style={t.h2L}>El diferenciador que nadie<br />más tiene en GDL.</h2>
              <div style={grid3}>
                {[
                  { icon:"🩸", name:"Diabetes tipo 1 y 2", proto:"Carbohidratos < 45% del total calórico. IG < 55 en todos los ingredientes. Sin azúcares simples.", esp:"Nutriólogo + Endocrinólogo" },
                  { icon:"🫀", name:"Salud cardiovascular", proto:"Sodio < 2,000mg/día. Grasas saturadas < 7%. Alto en omega-3 y fibra ≥ 25g/día.", esp:"Nutriólogo + Cardiólogo" },
                  { icon:"⚡", name:"Alto rendimiento", proto:"Proteína 1.6–2.2g/kg. Distribución de carbos según entrenamiento. Timing pre/post workout.", esp:"Nutriólogo deportivo" },
                  { icon:"🌿", name:"Low carb / Cetogénico", proto:"Carbohidratos < 50g/día. Grasas saludables ≥ 60%. Monitoreo de cetosis.", esp:"Nutriólogo" },
                  { icon:"🌾", name:"Sin gluten", proto:"Cocina libre de contaminación cruzada. Granos: arroz, quinoa, maíz, amaranto.", esp:"Nutriólogo" },
                  { icon:"🥛", name:"Sin lactosa", proto:"Sin lácteos. Fuentes alternativas de calcio: brócoli, almendras, sardinas.", esp:"Nutriólogo" },
                ].map(cat => (
                  <div key={cat.name} style={{ ...cardD, borderLeft: `3px solid ${g.lime}` }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{cat.icon}</div>
                    <div style={t.h3L}>{cat.name}</div>
                    <p style={{ ...t.pL, fontSize: "12px", marginBottom: 8 }}>{cat.proto}</p>
                    <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.lime }}>Especialista: {cat.esp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ EL CÓMO */}
      {active === "como" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Viaje del cliente</div>
              <h2 style={t.h2}>De extraño a recurrente<br />en 5 etapas.</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {[
                  { step:"01", stage:"Adquisición", title:"Primer contacto", time:"Día 0", owner:"Adriana", channels:["Instagram","TikTok","WhatsApp","Sitio web"], action:"Cliente llena formulario o escribe por WhatsApp. Adriana responde en < 4 horas." },
                  { step:"02", stage:"Activación", title:"Evaluación + propuesta", time:"Día 1", owner:"Adriana + Nutriólogo", channels:["WhatsApp","Videollamada"], action:"Revisión del perfil. Si aplica plan médico, consulta con nutriólogo. Envío de propuesta y cotización personalizada en 24h." },
                  { step:"03", stage:"Conversión", title:"Diseño del plan y pago", time:"Día 2-3", owner:"Nutriólogo + Chef", channels:["Notion OS","Cocina"], action:"Nutriólogo diseña el plan. Chef recibe la ficha nutricional. Cliente paga primera semana. Se agenda la entrega." },
                  { step:"04", stage:"Entrega", title:"Producción y primera semana", time:"Semana 1", owner:"Chef + Logística", channels:["Cocina industrial","Ruta de entrega"], action:"Preparación, empaque premium NOM-051, etiquetado nutricional. Entrega en ventana acordada. WhatsApp de confirmación." },
                  { step:"05", stage:"Fidelización", title:"Seguimiento recurrente", time:"Cada semana", owner:"Adriana + Nutriólogo", channels:["WhatsApp","App Fase 2"], action:"Check-in semanal de Adriana. Ajustes de plan según resultados. Renovación automática salvo cancelación." },
                ].map((s, i) => (
                  <div key={s.step} style={{ ...card, display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: g.green, border: `3px solid ${g.lime}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 500, color: g.lime }}>{s.step}</span>
                    </div>
                    <div>
                      <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap" as const }}>
                        <Tag c="green">{s.stage}</Tag>
                      </div>
                      <div style={t.h3}>{s.title}</div>
                      <p style={{ ...t.p, marginBottom: 8 }}>{s.action}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                        {s.channels.map(c => <Pill key={c}>{c}</Pill>)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" as const, minWidth: 100 }}>
                      <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3 }}>Responsable</div>
                      <div style={{ fontFamily: g.serif, fontSize: "13px", fontWeight: 400, color: g.green, lineHeight: 1.3 }}>{s.owner}</div>
                      <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.lime, marginTop: 4 }}>{s.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={secL}>
            <div style={wrap}>
              <div style={t.eyebrow}>Ciclo semanal de producción</div>
              <h2 style={t.h2}>La semana de Plena, día por día.</h2>
              <div style={grid4} className="prod-grid">
                {[
                  { day:"Dom", title:"Planificación", tasks:["Confirmar pedidos de la semana","Chef define menú por fichas nutricionales","Orden de compra a proveedores","Coordinar logística de entregas"] },
                  { day:"Lun", title:"Compras", tasks:["Compra de insumos frescos","Verificación de calidad de ingredientes","Mise en place: cortes y marinados","Preparación de bases"] },
                  { day:"Mar-Mié", title:"Producción", tasks:["Cocción de todos los platillos","Control de temperatura y tiempos","Empaque premium por porción","Etiquetado: cliente, comida, macros"] },
                  { day:"Jue-Vie", title:"Entregas", tasks:["Clasificación por ruta","Verificación de pedidos","Entrega en ventana acordada","Check-in post-entrega"] },
                  { day:"Sáb", title:"Retrospectiva", tasks:["Revisión de feedback semanal","Ajustes de recetas","Seguimiento de KPIs","Check-in con clientes activos"] },
                ].map(d => (
                  <div key={d.day} style={card}>
                    <div style={{ fontFamily: g.serif, fontSize: "1rem", fontWeight: 500, color: g.lime, marginBottom: 2 }}>{d.day}</div>
                    <div style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 400, color: g.ink, marginBottom: 10, lineHeight: 1.25 }}>{d.title}</div>
                    {d.tasks.map(tk => (
                      <div key={tk} style={{ display: "flex", gap: 6, marginBottom: 5 }}>
                        <span style={{ color: g.lime, flexShrink: 0, fontSize: 10, marginTop: 3 }}>→</span>
                        <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.5 }}>{tk}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ EL QUIÉN */}
      {active === "quien" && (
        <div style={sec}>
          <div style={wrap}>
            <div style={t.eyebrow}>El equipo fundador</div>
            <h2 style={t.h2}>Personas reales.<br />Roles claros.</h2>
            <div style={grid3}>
              {[
                { emoji:"👩‍💼", name:"Adriana Burgos", role:"Fundadora & Directora general", color: g.lime, desc:"La persona que cuida que todo funcione. Prueba cada menú antes de que salga. Coordina con el equipo. Es el primer y último punto de contacto con cada cliente.", resp:["Control de calidad del producto","Relación con clientes (onboarding y seguimiento)","Coordinación del equipo operativo","Redes sociales y contenido","Ventas y crecimiento"] },
                { emoji:"👨‍🍳", name:"Chef profesional", role:"Director de cocina", color: g.gm, desc:"Formación culinaria formal. Opera la cocina industrial. Traduce las fichas nutricionales del nutriólogo en platillos reales con sabor y presentación.", resp:["Diseño y ejecución del menú semanal","Control de porciones y macros por receta","Supervisión del empaque premium y etiquetado","Gestión de inventario de insumos","Higiene y certificación de cocina"] },
                { emoji:"👩‍⚕️", name:"Nutrióloga certificada", role:"Directora nutricional", color: g.gl, desc:"Especialista en nutrición clínica. Diseña todos los planes personalizados y supervisa los protocolos médicos. Es la garantía científica detrás de cada platillo.", resp:["Evaluación nutricional inicial de clientes","Diseño de planes personalizados por condición","Protocolos médicos (diabetes, cardiovascular, etc)","Seguimiento mensual de clientes con plan médico","Validación nutricional del menú estándar"] },
              ].map(p => (
                <div key={p.name} style={{ ...card, borderTop: `3px solid ${p.color}` }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>{p.emoji}</div>
                  <div style={t.h3}>{p.name}</div>
                  <div style={{ fontFamily: g.sans, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: g.gl, marginBottom: 10 }}>{p.role}</div>
                  <p style={{ ...t.p, fontSize: "13px", marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.ink3, marginBottom: 8 }}>Responsabilidades clave</div>
                  {p.resp.map(r => (
                    <div key={r} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                      <span style={{ color: p.color, flexShrink: 0 }}>→</span>
                      <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{r}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Divider />
            <div style={t.eyebrow}>Proveedores y partners clave</div>
            <div style={grid3}>
              {[
                { cat:"Cocina", items:["Cocina industrial rentada (dark kitchen)","Proveedor de empaque premium con capacidad NOM-051","Proveedor de etiquetas nutricionales"] },
                { cat:"Ingredientes", items:["Mercado mayorista de temporada (lunes)","Proveedor de proteínas (carnes certificadas)","Proveedor de suplementos curados"] },
                { cat:"Logística", items:["Repartidor propio o servicio de última milla","Hieleras térmicas certificadas para alimentos","App de coordinación de rutas"] },
              ].map(g3 => (
                <div key={g3.cat} style={card}>
                  <div style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 400, color: g.green, marginBottom: 10 }}>{g3.cat}</div>
                  {g3.items.map(item => (
                    <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                      <span style={{ color: g.lime, flexShrink: 0, fontSize: 10, marginTop: 3 }}>◆</span>
                      <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ EL CUÁNDO */}
      {active === "cuando" && (
        <div>
          <div style={secD}>
            <div style={wrap}>
              <div style={t.eyebrowL}>Roadmap de crecimiento</div>
              <h2 style={t.h2L}>De idea a empresa<br />en 24 meses.</h2>
              <div style={grid4} className="road-grid">
                {[
                  { phase:"Fase 1", period:"Mes 1-3", status:"active", title:"Validación", items:["Cocina industrial rentada","Chef y nutriólogo on board","10-30 clientes beta","Pedidos via WhatsApp","Redes sociales activas","Sitio web en vivo"] },
                  { phase:"Fase 2", period:"Mes 4-8", status:"planned", title:"Escala orgánica", items:["50-100 clientes activos","Pedidos online (sitio actual)","Lunch kids activo","Colaboraciones con gimnasios","Newsletter mensual","Sistema de referidos"] },
                  { phase:"Fase 3", period:"Mes 9-14", status:"planned", title:"Plataforma", items:["PWA con carrito y perfil","Pagos online Conekta/Stripe","Dashboard nutriólogo","Referidos automáticos","150+ clientes activos","$100k+ MXN/mes"] },
                  { phase:"Fase 4", period:"Mes 15-24", status:"future", title:"Expansión", items:["Segunda ciudad (CDMX/MTY)","Marca registrada","Franquicia / dark kitchens","300+ clientes activos","$200k+ MXN/mes","Posible ronda de inversión"] },
                ].map(r => (
                  <div key={r.phase} style={{ ...cardD, borderTop: `3px solid ${r.status==="active"?g.lime:r.status==="planned"?"rgba(168,217,74,0.3)":"rgba(248,250,245,0.08)"}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontFamily: g.serif, fontSize: "12px", fontWeight: 500, color: r.status==="active"?g.lime:"rgba(248,250,245,0.3)" }}>{r.phase}</span>
                      <span style={{ fontFamily: g.sans, fontSize: "9px", padding: "2px 8px", borderRadius: "2px", background: r.status==="active"?"rgba(168,217,74,0.15)":"rgba(248,250,245,0.05)", color: r.status==="active"?g.lime:"rgba(248,250,245,0.25)" }}>
                        {r.status==="active"?"En curso":r.status==="planned"?"Próximo":"Futuro"}
                      </span>
                    </div>
                    <div style={{ fontFamily: g.sans, fontSize: "11px", color: "rgba(248,250,245,0.25)", marginBottom: 4 }}>{r.period}</div>
                    <div style={{ fontFamily: g.serif, fontSize: "15px", fontWeight: 400, color: g.cream, marginBottom: 12, lineHeight: 1.25 }}>{r.title}</div>
                    {r.items.map(item => (
                      <div key={item} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                        <span style={{ color: r.status==="active"?g.lime:"rgba(248,250,245,0.2)", flexShrink: 0, fontSize: 9, marginTop: 4 }}>◆</span>
                        <span style={{ fontFamily: g.sans, fontSize: "12px", color: r.status==="active"?"rgba(248,250,245,0.65)":"rgba(248,250,245,0.3)", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>KPIs y métricas de éxito</div>
              <h2 style={t.h2}>Lo que medimos cada semana.</h2>
              <div style={grid3}>
                {[
                  { cat:"Operación", items:[
                    {n:"Costo de producción / comida",t:"< $80 MXN",f:"Semanal"},
                    {n:"Desperdicio de ingredientes",t:"< 8%",f:"Semanal"},
                    {n:"Entregas a tiempo",t:"> 95%",f:"Semanal"},
                    {n:"Incidencias de calidad",t:"0 / semana",f:"Semanal"},
                  ]},
                  { cat:"Clientes", items:[
                    {n:"NPS promedio",t:"≥ 8 / 10",f:"Mensual"},
                    {n:"Retención 3 meses",t:"> 65%",f:"Mensual"},
                    {n:"Tasa de referidos",t:"> 20%",f:"Mensual"},
                    {n:"Tiempo resp. Adriana",t:"< 4 horas",f:"Diario"},
                  ]},
                  { cat:"Financiero", items:[
                    {n:"Margen bruto promedio",t:"> 50%",f:"Mensual"},
                    {n:"Ingreso mensual recurrente",t:"+15%/mes",f:"Mensual"},
                    {n:"CAC",t:"< $500 MXN",f:"Mensual"},
                    {n:"LTV / CAC",t:"> 5x",f:"Trimestral"},
                  ]},
                ].map(group => (
                  <div key={group.cat} style={card}>
                    <div style={{ fontFamily: g.serif, fontSize: "14px", fontWeight: 500, color: g.green, marginBottom: 12, paddingBottom: 8, borderBottom: `2px solid ${g.lime}` }}>{group.cat}</div>
                    {group.items.map(k => <KpiRow key={k.n} name={k.n} target={k.t} freq={k.f} />)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ MODELO */}
      {active === "modelo" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Arquitectura del negocio</div>
              <h2 style={t.h2}>Ingresos en capas.<br />Cada capa construye sobre la anterior.</h2>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: "2rem" }}>
                {[
                  { src:"Comisiones / venta directa de planes", mec:"Precio por comida × volumen semanal", when:"Mes 1", pot:"$25k–80k MXN/mes", color: g.lime },
                  { src:"Fee de consulta con nutriólogo", mec:"$600–900 MXN por consulta inicial", when:"Mes 2", pot:"$8k–18k MXN/mes", color: g.gm },
                  { src:"Suscripción mensual VIP", mec:"$3,500–6,000 MXN / mes todo incluido", when:"Mes 3", pot:"$35k–80k MXN/mes", color: g.gl },
                  { src:"Venta de suplementación", mec:"Margen 30–40% sobre precio de costo", when:"Mes 4", pot:"$5k–15k MXN/mes", color: "#7a9b7e" },
                  { src:"Colaboraciones y B2B (oficinas)", mec:"Convenios con empresas para lunch corporativo", when:"Mes 6", pot:"Variable", color: "rgba(168,217,74,0.6)" },
                ].map((r, i) => (
                  <div key={r.src} style={{ ...card, display: "grid", gridTemplateColumns: "4px 1fr auto", gap: "1rem", alignItems: "center" }}>
                    <div style={{ width: 4, height: "100%", background: r.color, borderRadius: 2 }} />
                    <div>
                      <div style={{ fontFamily: g.serif, fontSize: "15px", fontWeight: 400, color: g.ink, marginBottom: 3 }}>{r.src}</div>
                      <div style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{r.mec}</div>
                    </div>
                    <div style={{ textAlign: "right" as const, minWidth: 130 }}>
                      <div style={{ fontFamily: g.serif, fontSize: "1.1rem", fontWeight: 500, color: g.green }}>{r.pot}</div>
                      <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3 }}>Activo desde {r.when}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Divider />
              <div style={grid2}>
                <div>
                  <div style={t.eyebrow}>Estructura de costos estimada</div>
                  {[
                    ["Insumos (ingredientes)", "35–40% del ingreso"],
                    ["Nómina (chef + nutriólogo)", "20–25%"],
                    ["Empaque y etiquetado", "5–7%"],
                    ["Logística / entrega", "5–8%"],
                    ["Cocina industrial (renta)", "5%"],
                    ["Marketing y herramientas", "3–5%"],
                    ["Margen neto estimado", "10–22%"],
                  ].map(([cat, val]) => (
                    <div key={cat} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: `0.5px solid ${g.rule}` }}>
                      <span style={{ fontFamily: g.sans, fontSize: "13px", color: g.ink2 }}>{cat}</span>
                      <span style={{ fontFamily: g.serif, fontSize: "13px", fontWeight: 400, color: cat.includes("Margen") ? g.green : g.ink3 }}>{val}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={t.eyebrow}>Proyección de ingresos</div>
                  {[
                    { fase:"Mes 3", clients:25, mrr:"$45k MXN" },
                    { fase:"Mes 6", clients:80, mrr:"$120k MXN" },
                    { fase:"Mes 9", clients:150, mrr:"$200k MXN" },
                    { fase:"Mes 12", clients:250, mrr:"$320k MXN" },
                    { fase:"Mes 18", clients:400, mrr:"$500k MXN" },
                    { fase:"Mes 24", clients:600, mrr:"$750k MXN" },
                  ].map(p => (
                    <div key={p.fase} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", padding: "9px 0", borderBottom: `0.5px solid ${g.rule}`, alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{p.fase}</span>
                      <div style={{ background: `rgba(168,217,74,0.15)`, borderRadius: 4, height: 8, flex: 1 }}>
                        <div style={{ background: g.lime, borderRadius: 4, height: 8, width: `${Math.min(100,(p.clients/600)*100)}%` }} />
                      </div>
                      <span style={{ fontFamily: g.serif, fontSize: "13px", fontWeight: 500, color: g.green, minWidth: 80, textAlign: "right" as const }}>{p.mrr}</span>
                    </div>
                  ))}
                  <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3, marginTop: 8 }}>Escenario conservador · Clientes activos promedio $1,800 MXN/semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ MARCA */}
      {active === "marca" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Identidad de marca</div>
              <h2 style={t.h2}>Una empresa con nombre propio.<br />Adriana como alma visible.</h2>
              <p style={{ ...t.p, maxWidth: 620, marginBottom: "2.5rem" }}>Plena no es la marca personal de Adriana — es una empresa. Pero Adriana es el corazón visible: la que prueba todo, habla con los nutriólogos, explica los planes y aparece en las historias. El diferenciador vs GDL: ellos se ven amateur. Plena se ve como un producto de EUA hecho en México.</p>

              <div style={grid3}>
                {[
                  { n:"01", title:"Ciencia detrás de cada plato", desc:"Cada comida tiene propósito. Las etiquetas no son decoración — son el producto. El nutriólogo no es un add-on, es la propuesta central." },
                  { n:"02", title:"Calidad visible", desc:"Empaque premium, etiquetado nutricional NOM-051, cocina certificada. El producto debe comunicar que esto no es comida de tupper casero." },
                  { n:"03", title:"Personalización real", desc:"Cuando Plena dice personalizado, significa que el nutriólogo revisó el caso. No elegir entre 3 menús de un catálogo." },
                  { n:"04", title:"Adriana como garantía", desc:"No es chef ni nutrióloga — es quien cuida que todo salga bien. Prueba todo antes de que llegue a tu puerta." },
                  { n:"05", title:"Sistema, no producto suelto", desc:"Plan + comida + suplemento + seguimiento. La app y el perfil son parte del producto, no solo canal de venta." },
                ].map(p => (
                  <div key={p.n} style={card}>
                    <div style={{ fontFamily: g.serif, fontSize: "2rem", fontWeight: 500, color: "rgba(168,217,74,0.2)", lineHeight: 1, marginBottom: 8 }}>{p.n}</div>
                    <div style={t.h3}>{p.title}</div>
                    <p style={{ ...t.p, fontSize: "13px" }}>{p.desc}</p>
                  </div>
                ))}
                <div style={{ ...card, background: g.green, border: "none" }}>
                  <div style={{ fontFamily: g.serif, fontSize: "1rem", fontStyle: "italic", color: "rgba(248,250,245,0.8)", lineHeight: 1.5, marginBottom: 8 }}>"No vendemos comida. Vendemos la versión más saludable de quien ya quieres ser, entregada en tu puerta."</div>
                  <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.lime }}>Tagline interno de Plena</div>
                </div>
              </div>

              <Divider />
              <div style={grid2}>
                <div>
                  <div style={t.eyebrow}>Identidad visual</div>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                      { label:"Paleta primaria", val:"Verde #1c2b1e · Lima #a8c4a0 · Blanco #f5f0e8" },
                      { label:"Paleta secundaria", val:"Verde oscuro #1c2b1e · Verde medio #2d4030" },
                      { label:"Tipografía display", val:"Cormorant Garamond (600) — títulos y números" },
                      { label:"Tipografía cuerpo", val:"DM Sans (400/500) — párrafos y UI" },
                      { label:"Fotografía", val:"Comida real en contenedores del producto. Sin stock, sin modelos imposibles." },
                    ].map(({label,val}) => (
                      <div key={label} style={{ padding: "10px 0", borderBottom: `0.5px solid ${g.rule}` }}>
                        <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3, marginBottom: 2 }}>{label}</div>
                        <div style={{ fontFamily: g.sans, fontSize: "13px", color: g.ink2 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={t.eyebrow}>Tono de voz</div>
                  <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                      { attr:"Cálido", desc:"Como una amiga que sabe mucho de nutrición y te lo hace fácil." },
                      { attr:"Educativo", desc:"Explica el por qué, no solo el qué. El cliente aprende con Plena." },
                      { attr:"Sin drama", desc:"Sin 'detox', sin 'clean eating' tóxico. 'Come bien, sin drama' como filosofía." },
                      { attr:"Opinionado", desc:"Plena tiene criterio. Dice cuándo algo no vale la pena. Sin miedo." },
                      { attr:"Honesto", desc:"Si algo no quedó perfecto esta semana, Adriana lo dice. La transparencia construye." },
                    ].map(({attr,desc}) => (
                      <div key={attr} style={{ ...card, display: "flex", gap: 10, padding: "10px 14px" }}>
                        <div style={{ fontFamily: g.serif, fontSize: "13px", fontWeight: 500, color: g.green, minWidth: 80 }}>{attr}</div>
                        <div style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.5 }}>{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ NOTION */}
      {active === "notion" && (
        <div style={sec}>
          <div style={wrap}>
            <div style={t.eyebrow}>Sistema operativo</div>
            <h2 style={t.h2}>8 bases de datos.<br />El cerebro de Plena en Notion.</h2>
            <p style={{ ...t.p, maxWidth: 620, marginBottom: "2.5rem" }}>Ninguna operación vive en WhatsApp o papel. Todo el ciclo — cliente entra → pedido → producción → entrega → factura → seguimiento — centralizado en Notion.</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
              {[
                { id:"DB1", name:"CRM de clientes", color: g.lime, fields:[{n:"Nombre completo",t:"Título",u:"Registro principal"},{n:"Estado",t:"Select",u:"Lead · Activo · Pausado · VIP"},{n:"Tipo de plan",t:"Multi-select",u:"Estándar · Personalizado · Kids · Medical"},{n:"Condición médica",t:"Multi-select",u:"Diabetes · Cardiovascular · Low carb · Sin restricción"},{n:"Alergias",t:"Texto",u:"Gluten, lácteos, mariscos, etc."},{n:"NPS / Satisfacción",t:"Number 1-10",u:"Seguimiento de calidad percibida"}] },
                { id:"DB2", name:"Pedidos semanales", color: g.gm, fields:[{n:"Semana / Cliente",t:"Título",u:"Ej: 'Semana 22 · Carlos R.'"},{n:"Estado del pedido",t:"Status",u:"Por confirmar → En producción → Listo → Entregado → Pagado"},{n:"Menú asignado",t:"Relación",u:"Link a base de Menús"},{n:"Total MXN",t:"Number",u:"Valor del pedido"},{n:"Repartidor",t:"Relación",u:"Link a equipo"}] },
                { id:"DB3", name:"Menús y recetas", color: g.gl, fields:[{n:"Nombre del platillo",t:"Título",u:"Nombre exacto de la receta"},{n:"Macros por porción",t:"Number",u:"Cal, proteína, carbs, grasa"},{n:"Tiempo de preparación",t:"Number",u:"Minutos"},{n:"Costo por porción",t:"Number",u:"En MXN (para calcular margen)"},{n:"Categoría",t:"Select",u:"Desayuno · Comida · Cena · Colación"}] },
                { id:"DB4", name:"Inventario e insumos", color: "#7a9b7e", fields:[{n:"Ingrediente",t:"Título",u:"Nombre del insumo"},{n:"Proveedor",t:"Relación",u:"Link a base de Proveedores"},{n:"Stock actual",t:"Number",u:"Unidades disponibles"},{n:"Stock mínimo",t:"Number",u:"Alerta cuando baja de este número"},{n:"Precio / kg o unidad",t:"Number",u:"Para calcular costo de recetas"}] },
                { id:"DB5", name:"Finanzas y flujo", color: g.lime, fields:[{n:"Semana",t:"Fecha",u:"Período de reporte"},{n:"Ingresos brutos",t:"Number",u:"Total cobrado esa semana"},{n:"Costo de producción",t:"Number",u:"Insumos + nómina + empaque"},{n:"Margen bruto",t:"Fórmula",u:"(Ingresos - Costos) / Ingresos"},{n:"Notas",t:"Texto",u:"Contexto: clientes nuevos, cancelaciones"}] },
                { id:"DB6", name:"Equipo", color: g.gm, fields:[{n:"Nombre",t:"Título",u:"Miembro del equipo"},{n:"Rol",t:"Select",u:"Adriana · Chef · Nutriólogo · Repartidor"},{n:"Contacto",t:"Texto",u:"WhatsApp / email"},{n:"Horario",t:"Texto",u:"Días y horas de trabajo"},{n:"Pedidos asignados",t:"Relación",u:"Link a base de Pedidos"}] },
                { id:"DB7", name:"Contenido editorial", color: g.gl, fields:[{n:"Título del contenido",t:"Título",u:"Nombre de la publicación"},{n:"Canal",t:"Multi-select",u:"Instagram · Stories · Reels · TikTok · Newsletter"},{n:"Pilar",t:"Select",u:"Inspiración · Educación · BTS · Testimonio · Adriana"},{n:"Estado",t:"Status",u:"Idea → Redactando → Listo → Publicado"},{n:"Fecha",t:"Fecha",u:"Fecha de publicación"}] },
                { id:"DB8", name:"Suplementos", color: "#7a9b7e", fields:[{n:"Producto",t:"Título",u:"Nombre del suplemento"},{n:"Precio de costo",t:"Number",u:"Lo que Plena paga"},{n:"Precio de venta",t:"Number",u:"Lo que cobra al cliente"},{n:"Margen",t:"Fórmula",u:"Calculado automático"},{n:"Para quién",t:"Multi-select",u:"Plan médico donde aplica"}] },
              ].map(db => (
                <div key={db.id} style={{ ...card, borderLeft: `4px solid ${db.color}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap" as const, gap: 8 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ fontFamily: g.serif, fontSize: "1.5rem", fontWeight: 500, color: `${db.color}44` }}>{db.id}</span>
                      <div style={{ fontFamily: g.serif, fontSize: "1.05rem", fontWeight: 400, color: g.ink }}>{db.name}</div>
                    </div>
                    <Tag c="green">{db.fields.length} campos</Tag>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 8 }}>
                    {db.fields.map(f => (
                      <div key={f.n} style={{ padding: "8px 10px", background: "rgba(15,31,18,0.03)", borderRadius: 8 }}>
                        <div style={{ fontFamily: g.sans, fontSize: "12px", fontWeight: 500, color: g.ink2, marginBottom: 2 }}>{f.n}</div>
                        <div style={{ fontFamily: g.sans, fontSize: "10px", color: g.gl, marginBottom: 2 }}>{f.t}</div>
                        <div style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3 }}>{f.u}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ TECH */}
      {active === "tech" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Stack tecnológico</div>
              <h2 style={t.h2}>Web + PWA desde Vercel.<br />Empieza simple, escala sin reescribir.</h2>

              <div style={grid3}>
                {[
                  { fase:"Fase 1 — Mes 1-3", status:"active", title:"Sitio informativo + pedidos", stack:["Next.js 16 en Vercel","Tailwind CSS","Google Fonts","Formulario → Notion (Tally)","WhatsApp como cierre de venta"], desc:"Landing page completa, 4 páginas, formulario de contacto que va directo al Notion OS. Sin carrito complejo todavía." },
                  { fase:"Fase 2 — Mes 4-8", status:"planned", title:"Pedidos online + pagos", stack:["Carrito de compras integrado","Conekta (tarjeta + OXXO + SPEI)","Perfil de usuario persistente","Selección de menú semanal","Historial de pedidos"], desc:"El cliente puede pedir, pagar y gestionar su plan sin hablar con nadie. Adriana administra desde el dashboard." },
                  { fase:"Fase 3 — Mes 9+", status:"future", title:"Plataforma completa", stack:["PWA instalable (sin App Store)","Dashboard del nutriólogo","Tracking de macros por cliente","Sistema de referidos automático","Agenda de consultas online"], desc:"El producto digital se convierte en parte del servicio, no solo canal de venta. Retención automática." },
                ].map(f => (
                  <div key={f.fase} style={{ ...card, borderTop: `3px solid ${f.status==="active"?g.lime:f.status==="planned"?"rgba(168,217,74,0.3)":g.rule}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: g.ink3 }}>{f.fase}</span>
                      <Tag c={f.status==="active"?"lime":f.status==="planned"?"green":"gray"}>{f.status==="active"?"En vivo":f.status==="planned"?"Próximo":"Futuro"}</Tag>
                    </div>
                    <div style={t.h3}>{f.title}</div>
                    <p style={{ ...t.p, fontSize: "13px", marginBottom: 12 }}>{f.desc}</p>
                    {f.stack.map(s => (
                      <div key={s} style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                        <span style={{ color: g.lime, flexShrink: 0, fontSize: 10, marginTop: 3 }}>→</span>
                        <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <Divider />
              <div style={t.eyebrow}>Conectores activos y recomendados</div>
              <div style={grid2}>
                {[
                  { name:"Vercel", badge:"Activo", bdgC:"lime", use:"Deploy del sitio web y PWA. Auto-deploy desde GitHub en cada cambio." },
                  { name:"Notion", badge:"Activo", bdgC:"lime", use:"Sistema operativo completo. CRM, pedidos, menús, finanzas. Ya configurado." },
                  { name:"GitHub", badge:"Activo", bdgC:"lime", use:"Repositorio del código. Cada push deploya automáticamente en Vercel." },
                  { name:"Google Drive", badge:"Activo", bdgC:"green", use:"Almacén de fotos, recetas en PDF, contratos con proveedores." },
                  { name:"Canva", badge:"Activo", bdgC:"green", use:"Diseño de etiquetas nutricionales, menús imprimibles, posts de redes." },
                  { name:"Conekta / Stripe MX", badge:"Fase 2", bdgC:"gray", use:"Pagos en línea: tarjeta, OXXO, transferencia SPEI." },
                  { name:"Tally / Typeform", badge:"Próximo", bdgC:"gray", use:"Formulario de ingreso → crea registro automático en Notion CRM." },
                  { name:"WhatsApp Business API", badge:"Próximo", bdgC:"gray", use:"Automatización de mensajes de seguimiento y confirmación de entrega." },
                ].map(c => (
                  <div key={c.name} style={{ ...card, display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                        <div style={{ fontFamily: g.serif, fontSize: "15px", fontWeight: 400, color: g.ink }}>{c.name}</div>
                        <Tag c={c.bdgC}>{c.badge}</Tag>
                      </div>
                      <div style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.5 }}>{c.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ SOCIAL */}
      {active === "social" && (
        <div>
          <div style={sec}>
            <div style={wrap}>
              <div style={t.eyebrow}>Estrategia de redes sociales</div>
              <h2 style={t.h2}>La comida vende sola.<br />Adriana la hace creíble.</h2>
              <p style={{ ...t.p, maxWidth: 620, marginBottom: "2.5rem" }}>El contenido de Plena tiene ventaja natural: el producto es visualmente atractivo. El principio central: no hay saltos bruscos. La transición de persona privada a figura pública es gradual y sin ansiedad.</p>

              <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                {[
                  { fase:"Fase 0 — Semana 1-4", title:"El silencio inteligente", icon:"🔇", items:["Registrar @plena.mx en Instagram y TikTok antes de anunciar nada","Crear banco de 20-30 fotos del proceso: cocina, chef, contenedores","Definir exactamente qué NO mostrar: precios en todos los posts, cuerpos perfectos","Preparar el primer reel de apertura","El bio apunta al sitio web. No se publica todavía."] },
                  { fase:"Fase 1 — Mes 1-3", title:"La voz, no la cara", icon:"🎙️", items:["Instagram: 3-4 posts/semana. Detrás de cámaras, ingredientes, menú de la semana","TikTok: 1 video/día. Chef cocinando, Adriana probando, el empaque. Sin producción cara","Stories de Adriana: 'Hoy cambié el pollo porque estaba muy seco'. Honestidad = confianza","WhatsApp status para la red caliente — el canal más subestimado","Meta: 500 seguidores reales antes de vender públicamente"] },
                  { fase:"Fase 2 — Mes 3-6", title:"Los primeros clientes hablan", icon:"📣", items:["Testimonios en video de los primeros 10 clientes beta. Sin guión, sin producción cara","Seguimiento semanal de un cliente con condición médica (con permiso)","Adriana aparece más: 'Esta semana en Plena pasó esto'","Primer concurso: 'Regala una semana de Plena'. Alcance orgánico masivo","Adriana en TikTok explicando los planes y el por qué de cada uno"] },
                  { fase:"Fase 3 — Mes 6-12", title:"Comunidad y educación", icon:"🌱", items:["Colaboración con nutriólogos y médicos GDL — su audiencia es el cliente de Plena","Serie educativa: '¿Qué tienen tus macros esta semana?'","Gimnasios como canal de distribución + contenido","Newsletter mensual: receta gratis + consejo nutricional + contenido exclusivo","Instagram Broadcast Channel: tips exclusivos y acceso anticipado a nuevos planes"] },
                ].map(f => (
                  <div key={f.fase} style={{ ...card, display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.25rem" }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: g.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{f.icon}</div>
                    <div>
                      <div style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: g.gl, marginBottom: 3 }}>{f.fase}</div>
                      <div style={t.h3}>{f.title}</div>
                      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginTop: 8 }}>
                        {f.items.map(item => (
                          <div key={item} style={{ display: "flex", gap: 8, width: "100%", alignItems: "flex-start" }}>
                            <span style={{ color: g.lime, flexShrink: 0, fontSize: 10, marginTop: 4 }}>→</span>
                            <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, lineHeight: 1.55 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Divider />
              <div style={t.eyebrow}>5 pilares de contenido</div>
              <div style={grid4} className="pillar-grid">
                {[
                  { p:"35%", title:"El producto en acción", desc:"Cocina, chef, contenedores, etiquetas. El proceso de producción es la mejor publicidad." },
                  { p:"25%", title:"Educación nutricional", desc:"'¿Por qué tu desayuno importa?', 'Cómo comer con diabetes sin sufrir'. Adriana o el nutriólogo." },
                  { p:"20%", title:"Historias de clientes", desc:"Transformaciones reales, seguimiento honesto. El contenido más poderoso a largo plazo." },
                  { p:"15%", title:"Adriana siendo Adriana", desc:"Sus propias decisiones de salud, libros, el café del aeropuerto. Construye conexión." },
                  { p:"5%", title:"Oferta y conversión", desc:"Solo 1 de cada 20 posts vende directamente. El resto construye confianza." },
                ].map(p => (
                  <div key={p.title} style={card}>
                    <div style={{ fontFamily: g.serif, fontSize: "1.5rem", fontWeight: 500, color: g.lime, lineHeight: 1, marginBottom: 6 }}>{p.p}</div>
                    <div style={t.h3}>{p.title}</div>
                    <p style={{ ...t.p, fontSize: "12px" }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <Divider />
              <div style={t.eyebrow}>Reglas de oro — Lo que NUNCA hacer</div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 }}>
                {["Publicar para el algoritmo, no para la gente","Imitar el estilo de otras cuentas","Prometer cosas que no puede cumplir","Publicar diario sin tener nada que decir","Foto de avión con 'rumbo a...'","Mostrar antes/después con cuerpos idealizados","Decir 'detox' o 'clean eating'","Pedir follow de manera desesperada"].map(r => (
                  <span key={r} style={{ fontFamily: g.sans, fontSize: "12px", padding: "6px 12px", background: "rgba(196,80,80,0.06)", border: "0.5px solid rgba(196,80,80,0.15)", borderRadius: 100, color: "#c45050" }}>✕ {r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM BAR */}
      <div style={{ background: g.ink, padding: "2rem", borderTop: `2px solid ${g.lime}` }}>
        <div style={{ ...wrap, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: g.serif, fontSize: "1.1rem", fontWeight: 500, color: g.lime }}>plena · Playbook interno</div>
            <div style={{ fontFamily: g.sans, fontSize: "12px", color: "rgba(248,250,245,0.25)", marginTop: 2 }}>Versión 1.0 · Mayo 2026 · Documento vivo</div>
          </div>
          <Link href="/" style={{ fontFamily: g.sans, fontSize: "13px", fontWeight: 500, padding: "10px 24px", background: g.lime, color: g.ink, borderRadius: "2px", textDecoration: "none" }}>← Volver al sitio</Link>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .prod-grid,.road-grid,.pillar-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .prod-grid,.road-grid,.pillar-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
