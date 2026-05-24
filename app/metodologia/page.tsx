"use client";
import Link from "next/link";

// ── DATA ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    num: "01",
    title: "Ciencia antes que tendencia",
    desc: "Cada plan está respaldado por un nutriólogo certificado. No seguimos modas alimenticias — seguimos evidencia clínica. Macros, micronutrientes, índice glucémico y condiciones médicas son el punto de partida, no el precio.",
    icon: "🔬",
  },
  {
    num: "02",
    title: "Calidad visible en cada envase",
    desc: "El producto tiene que comunicar profesionalismo antes de que el cliente lo pruebe. Empaque al vacío, etiqueta nutricional completa (calorías, proteína, carbohidratos, grasa, sodio), cocina industrial certificada. No hay 'comida de tupper' en Plena.",
    icon: "📦",
  },
  {
    num: "03",
    title: "Personalización real, no de catálogo",
    desc: "Cuando Plena dice personalizado, significa que el nutriólogo revisó el expediente del cliente: análisis de sangre, condición médica, objetivos, alergias, preferencias. No es elegir entre 3 opciones de un menú.",
    icon: "🎯",
  },
  {
    num: "04",
    title: "Sistema completo, no producto suelto",
    desc: "Plena no vende loncheras. Vende un sistema: evaluación → plan → cocina → entrega → seguimiento → ajuste. La app y el perfil de cliente son parte del producto, no solo un canal de compra.",
    icon: "⚙️",
  },
  {
    num: "05",
    title: "Adriana como garantía de calidad",
    desc: "Adriana prueba cada menú antes de que salga. No es marketing — es control de calidad. El cliente debe sentir que hay una persona real que cuida lo que come, no una operación anónima.",
    icon: "✅",
  },
];

const clientJourney = [
  {
    stage: "Adquisición",
    step: "01",
    title: "Primer contacto",
    channels: ["Instagram / TikTok", "Boca a boca", "WhatsApp directo", "Sitio web"],
    action: "El cliente llega por contenido o referido. Completa el formulario de contacto o escribe directo por WhatsApp.",
    owner: "Adriana",
    time: "Día 0",
  },
  {
    stage: "Activación",
    step: "02",
    title: "Evaluación inicial",
    channels: ["WhatsApp", "Videollamada"],
    action: "Adriana revisa el perfil en menos de 24h. Si aplica plan médico, agenda consulta con el nutriólogo. Se envía propuesta y cotización personalizada.",
    owner: "Adriana + Nutriólogo",
    time: "Día 1",
  },
  {
    stage: "Conversión",
    step: "03",
    title: "Diseño del plan",
    channels: ["Nutriólogo", "Notion OS"],
    action: "Nutriólogo diseña el plan. Chef recibe la ficha nutricional. Se agenda la primera entrega. Cliente paga primera semana.",
    owner: "Nutriólogo + Chef",
    time: "Día 2-3",
  },
  {
    stage: "Retención",
    step: "04",
    title: "Producción y entrega",
    channels: ["Cocina industrial", "Logística"],
    action: "Chef prepara los alimentos según el plan. Empaque al vacío con etiqueta nutricional. Entrega coordinada con el cliente.",
    owner: "Chef + Logística",
    time: "Semana 1",
  },
  {
    stage: "Fidelización",
    step: "05",
    title: "Seguimiento semanal",
    channels: ["WhatsApp", "App (Fase 2)"],
    action: "Adriana hace check-in cada semana. El nutriólogo ajusta el plan según resultados. Se renueva automáticamente salvo cancelación.",
    owner: "Adriana + Nutriólogo",
    time: "Recurrente",
  },
];

const plans = [
  {
    id: "P01",
    name: "Plan semanal estándar",
    target: "Profesionistas sin tiempo",
    price: "$180–220 MXN/comida",
    moments: 5,
    nutritionist: false,
    medical: false,
    desc: "Menú semanal diseñado por el chef con revisión nutricional general. 5 momentos del día × 5 días. Etiqueta completa. Sin consulta incluida.",
    kpis: ["Costo por comida < $80 MXN", "Margen bruto > 55%", "NPS ≥ 8"],
  },
  {
    id: "P02",
    name: "Plan personalizado + nutriólogo",
    target: "Personas con objetivos específicos o condición médica",
    price: "$250–350 MXN/comida",
    moments: 5,
    nutritionist: true,
    medical: true,
    desc: "Consulta inicial incluida. Plan 100% basado en perfil clínico del cliente. Seguimiento mensual con el nutriólogo. Ajustes semanales.",
    kpis: ["Consulta ≤ 60 min", "Margen bruto > 45%", "Retención 3 meses > 70%"],
  },
  {
    id: "P03",
    name: "Lunch kids",
    target: "Mamás trabajadoras con hijos en edad escolar",
    price: "$120–160 MXN/lunch",
    moments: 1,
    nutritionist: false,
    medical: false,
    desc: "Menú escolar lunes a viernes. Sin azúcares añadidos, sin ultraprocesados. Diseñado con nutriólogo pediátrico.",
    kpis: ["Entrega antes de 7:30am", "Margen bruto > 60%", "Tasa de cancelación < 5%"],
  },
];

const medicalCategories = [
  { icon: "🩸", name: "Diabetes tipo 1 y 2", protocol: "Carbohidratos < 45% del total calórico. IG < 55 en todos los ingredientes. Coordinación con endocrinólogo del paciente. Sin azúcares simples añadidos.", specialist: "Nutriólogo + Endocrinólogo" },
  { icon: "🫀", name: "Salud cardiovascular", protocol: "Sodio < 2,000mg/día. Grasas saturadas < 7% de calorías totales. Alto en omega-3 (salmón, chía, linaza). Fibra ≥ 25g/día.", specialist: "Nutriólogo + Cardiólogo" },
  { icon: "⚡", name: "Alto rendimiento", protocol: "Proteína 1.6–2.2g/kg de peso. Distribución de carbohidratos según entrenamiento. Timing de nutrientes (pre/post workout). Hidratación y electrolitos.", specialist: "Nutriólogo deportivo" },
  { icon: "🌿", name: "Low carb / Cetogénico", protocol: "Carbohidratos < 50g/día (strict keto) o < 100g/día (low carb). Grasas saludables ≥ 60% de calorías. Proteína moderada. Monitoreo de cetosis.", specialist: "Nutriólogo" },
  { icon: "🌾", name: "Intolerancia al gluten", protocol: "Cocina 100% libre de contaminación cruzada. Granos: arroz, quinoa, maíz, amaranto. Sin trigo, cebada, centeno. Certificación por lote.", specialist: "Nutriólogo" },
  { icon: "🥛", name: "Intolerancia a la lactosa", protocol: "Sin lácteos en ninguna preparación. Fuentes alternativas de calcio (brócoli, almendras, sardinas). Lectura de etiquetas de proveedores.", specialist: "Nutriólogo" },
];

const productionProcess = [
  { day: "Domingo", title: "Planificación semanal", tasks: ["Adriana confirma pedidos de la semana", "Chef define menú según fichas nutricionales", "Se hace la orden de compra a proveedores", "Se coordina logística de entregas"] },
  { day: "Lunes", title: "Compras y preparación", tasks: ["Compra de insumos frescos en mercado/proveedor", "Recepción y verificación de calidad", "Mise en place: cortes, marinados, bases", "Preparación de proteínas y carbohidratos base"] },
  { day: "Martes-Miércoles", title: "Producción", tasks: ["Cocción de todos los platillos del menú", "Control de temperatura y tiempos", "Empaque al vacío por porción individual", "Etiquetado: cliente, comida, macros, fecha"] },
  { day: "Jueves-Viernes", title: "Entregas", tasks: ["Clasificación por ruta de entrega", "Verificación final de pedidos", "Entrega en ventana coordinada con cada cliente", "Check-in post-entrega por WhatsApp"] },
  { day: "Sábado", title: "Retrospectiva", tasks: ["Revisión de feedback de la semana", "Ajustes de recetas según comentarios", "Seguimiento de KPIs operativos", "Adriana hace check-in con clientes activos"] },
];

const kpis = [
  { category: "Operación", items: [
    { name: "Costo de producción / comida", target: "< $80 MXN", freq: "Semanal" },
    { name: "Desperdicio de ingredientes", target: "< 8%", freq: "Semanal" },
    { name: "Entregas a tiempo", target: "> 95%", freq: "Semanal" },
    { name: "Incidencias de calidad", target: "0 por semana", freq: "Semanal" },
  ]},
  { category: "Clientes", items: [
    { name: "NPS promedio", target: "≥ 8 / 10", freq: "Mensual" },
    { name: "Tasa de retención 3 meses", target: "> 65%", freq: "Mensual" },
    { name: "Tasa de referidos", target: "> 20% de nuevos clientes", freq: "Mensual" },
    { name: "Tiempo de respuesta Adriana", target: "< 4 horas", freq: "Diario" },
  ]},
  { category: "Financiero", items: [
    { name: "Margen bruto promedio", target: "> 50%", freq: "Mensual" },
    { name: "Ingreso mensual recurrente", target: "Crecimiento 15%/mes", freq: "Mensual" },
    { name: "CAC (Costo de adquisición)", target: "< $500 MXN", freq: "Mensual" },
    { name: "LTV / CAC ratio", target: "> 5x", freq: "Trimestral" },
  ]},
];

const roadmap = [
  { phase: "Fase 1", period: "Mes 1-3", status: "active", title: "Validación y primeros clientes", items: ["Cocina industrial rentada", "Chef y nutriólogo contratados", "10-30 clientes beta", "Formulario de pedidos manual (WhatsApp)", "Redes sociales activas"] },
  { phase: "Fase 2", period: "Mes 4-8", status: "planned", title: "Escala orgánica", items: ["50-100 clientes activos", "Sistema de pedidos online (este sitio)", "Lunch kids activo", "Primeras colaboraciones con gimnasios", "Newsletter mensual"] },
  { phase: "Fase 3", period: "Mes 9-14", status: "planned", title: "PWA y automatización", items: ["App progresiva (PWA) con carrito y perfil", "Pagos online (Conekta/Stripe MX)", "Dashboard de nutriólogo", "Sistema de referidos automático", "100+ clientes activos"] },
  { phase: "Fase 4", period: "Mes 15-24", status: "future", title: "Expansión", items: ["Segunda ciudad (CDMX o Monterrey)", "Marca registrada", "Modelo de franquicia o dark kitchens", "300+ clientes activos", "$150k+ MXN/mes"] },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Metodologia() {
  const S = {
    page: { background: "#f8faf5", minHeight: "100vh" } as React.CSSProperties,
    wrap: { maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" } as React.CSSProperties,
    section: { padding: "5rem 2rem" } as React.CSSProperties,
    sectionDark: { padding: "5rem 2rem", background: "#0f1f12" } as React.CSSProperties,
    sectionLight: { padding: "5rem 2rem", background: "#f0f7ea" } as React.CSSProperties,
    sectionSand: { padding: "5rem 2rem", background: "#ede8dc" } as React.CSSProperties,
    eyebrow: { fontFamily: "'DM Sans',sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#4a9463", marginBottom: "0.75rem" },
    h1: { fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(2.5rem,5vw,3.8rem)", fontWeight: 600, color: "#0f1f12", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "1.25rem" } as React.CSSProperties,
    h2: { fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 600, color: "#0f1f12", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1rem" } as React.CSSProperties,
    h2d: { fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", fontWeight: 600, color: "#f8faf5", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1rem" } as React.CSSProperties,
    h3: { fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "#0f1f12", marginBottom: "6px" } as React.CSSProperties,
    p: { fontFamily: "'DM Sans',sans-serif", fontSize: "14px", lineHeight: 1.8, color: "#6b7c6d" } as React.CSSProperties,
    card: { background: "white", borderRadius: "16px", border: "0.5px solid rgba(15,31,18,0.08)", padding: "1.5rem" } as React.CSSProperties,
    cardDark: { background: "rgba(248,250,245,0.05)", border: "0.5px solid rgba(248,250,245,0.08)", borderRadius: "16px", padding: "1.5rem" } as React.CSSProperties,
    tag: (color = "#4a9463", bg = "rgba(74,148,99,0.1)") => ({ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, padding: "3px 10px", borderRadius: "100px", background: bg, color, display: "inline-block" }),
  };

  return (
    <div style={S.page}>

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: "8rem", background: "#0f1f12" }}>
        <div style={S.wrap}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(168,217,74,0.12)", border: "0.5px solid rgba(168,217,74,0.3)", borderRadius: "100px", padding: "4px 14px", marginBottom: "1.5rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a8d94a", flexShrink: 0 }} />
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#a8d94a", letterSpacing: "0.1em", textTransform: "uppercase" as const }}>Documento interno · Uso operativo</span>
          </div>
          <h1 style={{ ...S.h1, color: "#f8faf5", maxWidth: "760px" }}>
            Metodología Plena
            <span style={{ color: "#a8d94a" }}>.</span>
          </h1>
          <p style={{ ...S.p, color: "rgba(248,250,245,0.5)", maxWidth: "600px", marginBottom: "2rem" }}>
            Este documento define cómo opera Plena: desde la filosofía de producto hasta los KPIs semanales, el proceso de producción, los protocolos médicos y el roadmap de crecimiento. Es la guía de referencia para el equipo.
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
            {["Filosofía","Planes","Viaje del cliente","Producción","Médico","KPIs","Roadmap"].map((s,i) => (
              <a key={s} href={`#sec-${i}`} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", padding: "6px 14px", background: "rgba(248,250,245,0.06)", border: "0.5px solid rgba(248,250,245,0.12)", borderRadius: "100px", color: "rgba(248,250,245,0.6)", textDecoration: "none" }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 01 FILOSOFÍA */}
      <section id="sec-0" style={S.section}>
        <div style={S.wrap}>
          <div style={S.eyebrow}>01 · Filosofía de producto</div>
          <h2 style={S.h2}>Los 5 pilares que no negociamos.</h2>
          <p style={{ ...S.p, maxWidth: "620px", marginBottom: "3rem" }}>Plena existe porque lo que hay en México no es suficientemente bueno. Estos pilares definen qué somos y qué no somos, en ese orden.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "16px" }}>
            {pillars.map(p => (
              <div key={p.num} style={S.card}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{p.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#4a9463", marginBottom: "3px" }}>Pilar {p.num}</div>
                    <div style={S.h3}>{p.title}</div>
                  </div>
                </div>
                <p style={S.p}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 PLANES */}
      <section id="sec-1" style={S.sectionLight}>
        <div style={S.wrap}>
          <div style={S.eyebrow}>02 · Catálogo de planes</div>
          <h2 style={S.h2}>Tres productos, un sistema.</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px" }}>
            {plans.map(plan => (
              <div key={plan.id} style={{ ...S.card, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ minWidth: "60px" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "rgba(168,217,74,0.3)", lineHeight: 1 }}>{plan.id}</div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" as const }}>
                    <div style={S.h3}>{plan.name}</div>
                    {plan.nutritionist && <span style={S.tag("#2d6b45","rgba(45,107,69,0.1)")}>Nutriólogo incluido</span>}
                    {plan.medical && <span style={S.tag("#c4703a","rgba(196,112,58,0.1)")}>Plan médico</span>}
                  </div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#4a9463", marginBottom: "8px" }}>Target: {plan.target}</div>
                  <p style={S.p}>{plan.desc}</p>
                  <div style={{ marginTop: "12px", display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                    {plan.kpis.map(k => (
                      <span key={k} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", padding: "3px 10px", background: "rgba(15,31,18,0.04)", border: "0.5px solid rgba(15,31,18,0.1)", borderRadius: "6px", color: "#6b7c6d" }}>KPI: {k}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right" as const, minWidth: "120px" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.3rem", fontWeight: 600, color: "#1a4a2e" }}>{plan.price}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#6b7c6d", marginTop: "4px" }}>{plan.moments} momentos/día</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 VIAJE DEL CLIENTE */}
      <section id="sec-2" style={S.section}>
        <div style={S.wrap}>
          <div style={S.eyebrow}>03 · Viaje del cliente</div>
          <h2 style={S.h2}>De extraño a cliente recurrente.</h2>
          <p style={{ ...S.p, maxWidth: "580px", marginBottom: "3rem" }}>Cada etapa tiene un dueño, una acción esperada y un tiempo máximo. Nada queda al azar.</p>
          <div style={{ position: "relative" as const }}>
            <div style={{ position: "absolute", left: "28px", top: "16px", bottom: "16px", width: "1px", background: "rgba(168,217,74,0.2)" }} />
            {clientJourney.map((stage, i) => (
              <div key={stage.step} style={{ display: "flex", gap: "1.5rem", marginBottom: "20px", position: "relative" as const }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1a4a2e", border: "3px solid #a8d94a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 1 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", fontWeight: 700, color: "#a8d94a" }}>{stage.step}</span>
                </div>
                <div style={{ ...S.card, flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap" as const, gap: "8px" }}>
                    <div>
                      <span style={S.tag("#4a9463","rgba(74,148,99,0.1)")}>{stage.stage}</span>
                      <div style={{ ...S.h3, marginTop: "8px" }}>{stage.title}</div>
                    </div>
                    <div style={{ textAlign: "right" as const }}>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#6b7c6d" }}>Responsable</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a4a2e" }}>{stage.owner}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#a8d94a", marginTop: "2px" }}>{stage.time}</div>
                    </div>
                  </div>
                  <p style={S.p}>{stage.action}</p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const, marginTop: "10px" }}>
                    {stage.channels.map(c => (
                      <span key={c} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", padding: "3px 10px", background: "rgba(168,217,74,0.08)", border: "0.5px solid rgba(168,217,74,0.2)", borderRadius: "6px", color: "#2d6b45" }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 PRODUCCIÓN */}
      <section id="sec-3" style={S.sectionDark}>
        <div style={S.wrap}>
          <div style={{ ...S.eyebrow, color: "#a8d94a" }}>04 · Proceso de producción</div>
          <h2 style={S.h2d}>La semana de Plena,<br />día por día.</h2>
          <p style={{ ...S.p, color: "rgba(248,250,245,0.45)", maxWidth: "580px", marginBottom: "3rem" }}>La operación sigue un ciclo semanal estricto. La consistencia es la base de la calidad.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {productionProcess.map(day => (
              <div key={day.day} style={S.cardDark}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", fontWeight: 700, color: "#a8d94a", marginBottom: "2px" }}>{day.day}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", fontWeight: 600, color: "#f8faf5", marginBottom: "12px", lineHeight: 1.25 }}>{day.title}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {day.tasks.map(t => (
                    <li key={t} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <span style={{ color: "#a8d94a", flexShrink: 0, marginTop: "2px", fontSize: "10px" }}>→</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "rgba(248,250,245,0.5)", lineHeight: 1.5 }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 MÉDICO */}
      <section id="sec-4" style={S.section}>
        <div style={S.wrap}>
          <div style={S.eyebrow}>05 · Protocolos médico-nutricionales</div>
          <h2 style={S.h2}>El diferenciador que nadie más<br />tiene en Guadalajara.</h2>
          <p style={{ ...S.p, maxWidth: "620px", marginBottom: "3rem" }}>Cada categoría médica tiene un protocolo específico diseñado con especialistas. No es interpretación libre — es evidencia clínica aplicada a la cocina.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "16px" }}>
            {medicalCategories.map(cat => (
              <div key={cat.name} style={{ ...S.card, borderLeft: "3px solid #a8d94a" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "24px" }}>{cat.icon}</span>
                  <div style={S.h3}>{cat.name}</div>
                </div>
                <p style={{ ...S.p, marginBottom: "10px", fontSize: "13px" }}>{cat.protocol}</p>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#4a9463" }}>Especialista: {cat.specialist}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 KPIs */}
      <section id="sec-5" style={S.sectionLight}>
        <div style={S.wrap}>
          <div style={S.eyebrow}>06 · KPIs y métricas de éxito</div>
          <h2 style={S.h2}>Lo que medimos cada semana.</h2>
          <p style={{ ...S.p, maxWidth: "580px", marginBottom: "3rem" }}>Si no lo mides, no lo puedes mejorar. Estas métricas se revisan en la retrospectiva semanal del sábado.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "20px" }}>
            {kpis.map(group => (
              <div key={group.category}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", fontWeight: 700, color: "#1a4a2e", marginBottom: "12px", padding: "8px 0", borderBottom: "2px solid #a8d94a" }}>{group.category}</div>
                {group.items.map(kpi => (
                  <div key={kpi.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "0.5px solid rgba(15,31,18,0.07)", gap: "1rem" }}>
                    <div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "#2d3a2e", fontWeight: 500 }}>{kpi.name}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "#6b7c6d" }}>{kpi.freq}</div>
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: "#1a4a2e", whiteSpace: "nowrap" as const }}>{kpi.target}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 ROADMAP */}
      <section id="sec-6" style={S.sectionDark}>
        <div style={S.wrap}>
          <div style={{ ...S.eyebrow, color: "#a8d94a" }}>07 · Roadmap de crecimiento</div>
          <h2 style={S.h2d}>De idea a empresa en 24 meses.</h2>
          <p style={{ ...S.p, color: "rgba(248,250,245,0.45)", maxWidth: "580px", marginBottom: "3rem" }}>Cada fase construye sobre la anterior. No saltamos fases — las ejecutamos.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "16px" }}>
            {roadmap.map(r => (
              <div key={r.phase} style={{ ...S.cardDark, borderTop: r.status === "active" ? "3px solid #a8d94a" : r.status === "planned" ? "3px solid rgba(168,217,74,0.3)" : "3px solid rgba(248,250,245,0.08)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "12px", fontWeight: 700, color: r.status === "active" ? "#a8d94a" : "rgba(248,250,245,0.3)" }}>{r.phase}</div>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", padding: "2px 8px", borderRadius: "100px", background: r.status === "active" ? "rgba(168,217,74,0.15)" : "rgba(248,250,245,0.05)", color: r.status === "active" ? "#a8d94a" : "rgba(248,250,245,0.25)" }}>
                    {r.status === "active" ? "En curso" : r.status === "planned" ? "Próximo" : "Futuro"}
                  </span>
                </div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", color: "rgba(248,250,245,0.3)", marginBottom: "8px" }}>{r.period}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "14px", fontWeight: 600, color: "#f8faf5", marginBottom: "12px", lineHeight: 1.3 }}>{r.title}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {r.items.map(item => (
                    <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "5px" }}>
                      <span style={{ color: r.status === "active" ? "#a8d94a" : "rgba(248,250,245,0.2)", flexShrink: 0, fontSize: "10px", marginTop: "3px" }}>◆</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: r.status === "active" ? "rgba(248,250,245,0.65)" : "rgba(248,250,245,0.3)", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER INTERNO */}
      <section style={{ padding: "3rem 2rem", background: "#f8faf5", borderTop: "2px solid #a8d94a" }}>
        <div style={{ ...S.wrap, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a4a2e" }}>plena · Metodología interna</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#6b7c6d", marginTop: "3px" }}>Versión 1.0 · Mayo 2026 · Documento vivo — se actualiza con cada iteración</div>
          </div>
          <Link href="/" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 500, padding: "10px 24px", background: "#1a4a2e", color: "#f8faf5", borderRadius: "100px", textDecoration: "none" }}>
            ← Volver al sitio
          </Link>
        </div>
      </section>

    </div>
  );
}
