"use client";

const g = {
  night: "#1c2b1e", nightM: "#2d4030", sage: "#7a9b7e", sageL: "#a8c4a0",
  linen: "#f5f0e8", ivory: "#faf7f2", stone: "#c8bfb0",
  ink: "#1a1814", ink2: "#3d3830", ink3: "#7a736a",
  serif: "'Cormorant Garamond', serif", sans: "'DM Sans', system-ui, sans-serif",
};

type Status = "done" | "active" | "next" | "blocked" | "pending";

interface Task { label: string; status: Status; note?: string; }
interface Phase {
  n: string; title: string; timing: string; state: "active" | "next" | "pending" | "milestone";
  tasks: Task[];
}

const PHASES: Phase[] = [
  {
    n: "00", title: "Fundamentos", timing: "Esta semana · en paralelo",
    state: "active",
    tasks: [
      { label: "Costeo preliminar", status: "done" },
      { label: "Deck pitch Rafael", status: "done" },
      { label: "Deck pitch Alan", status: "done" },
      { label: "Deck pitch Luis Fer", status: "done" },
      { label: "NDA template", status: "active" },
      { label: "Calculadora de costos", status: "active" },
      { label: "Blueprint (Capa 1)", status: "done" },
      { label: "Roadmap (Capa 2)", status: "active" },
    ],
  },
  {
    n: "01", title: "Socios", timing: "Semana 1–3",
    state: "next",
    tasks: [
      { label: "Reunión Rafael · El Romeral", status: "pending", note: "Requiere: deck + costeo" },
      { label: "Firmar NDA · Alan", status: "pending", note: "Antes de revelar modelo" },
      { label: "Reunión Alan · socio operativo", status: "pending", note: "Requiere: NDA firmado" },
      { label: "Reunión Luis Fer · NetLab", status: "pending", note: "Requiere: deck tech" },
      { label: "Búsqueda nutriólogo clínico", status: "blocked", note: "Gap crítico — CUCS / UAG / UdG" },
    ],
  },
  {
    n: "02", title: "Infraestructura", timing: "Semana 3–4",
    state: "pending",
    tasks: [
      { label: "Constitución legal / RFC", status: "pending" },
      { label: "Seguro responsabilidad civil", status: "pending" },
      { label: "Logística delivery GDL", status: "pending", note: "Borzo / iVoy / propio" },
      { label: "Proveedor empaque al vacío", status: "pending", note: "Con certificación COFEPRIS" },
      { label: "Sistema de cobro", status: "pending", note: "Clip / Stripe / SPEI" },
      { label: "Fotografía de producto", status: "pending" },
    ],
  },
  {
    n: "03", title: "3 clientes beta pagados", timing: "Mes 2 · Hito crítico",
    state: "milestone",
    tasks: [
      { label: "Primer cliente pagado", status: "pending" },
      { label: "Costeo real validado con Alan", status: "pending" },
      { label: "Proceso operativo definido", status: "pending" },
      { label: "Feedback loop activo", status: "pending" },
    ],
  },
];

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; dot: string }> = {
  done:    { label: "Listo",    color: "#0F6E56", bg: "rgba(15,110,86,0.08)",  dot: "#1D9E75" },
  active:  { label: "Activo",   color: "#854F0B", bg: "rgba(185,115,23,0.1)",  dot: "#EF9F27" },
  next:    { label: "Próximo",  color: "#185FA5", bg: "rgba(24,95,165,0.08)",  dot: "#378ADD" },
  blocked: { label: "Bloqueado",color: "#A32D2D", bg: "rgba(163,45,45,0.1)",   dot: "#E24B4A" },
  pending: { label: "Pendiente",color: g.ink3,    bg: "transparent",            dot: g.stone },
};

const PHASE_COLORS: Record<string, { bar: string; bg: string; badge: string; badgeText: string }> = {
  active:    { bar: "#EF9F27", bg: "rgba(239,159,39,0.06)",  badge: "#EF9F27", badgeText: "#633806" },
  next:      { bar: g.sage,    bg: "rgba(122,155,126,0.06)", badge: g.sage,    badgeText: "#085041" },
  pending:   { bar: g.stone,   bg: "transparent",             badge: g.stone,   badgeText: g.ink3   },
  milestone: { bar: "#1D9E75", bg: "rgba(29,158,117,0.06)",  badge: "#1D9E75", badgeText: "#04342C" },
};

function countDone(tasks: Task[]) {
  return tasks.filter(t => t.status === "done").length;
}

export default function Roadmap() {
  const totalTasks = PHASES.reduce((a, p) => a + p.tasks.length, 0);
  const doneTasks  = PHASES.reduce((a, p) => a + countDone(p.tasks), 0);
  const pct = Math.round((doneTasks / totalTasks) * 100);

  return (
    <div style={{ background: g.linen, minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase" as const, color: g.sage, display: "block", marginBottom: "10px" }}>
            Capa 2 · Planeación maestra
          </span>
          <h1 style={{ fontFamily: g.serif, fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 400, color: g.night, letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Roadmap del proyecto
          </h1>
          <p style={{ fontFamily: g.sans, fontSize: "14px", color: g.ink3, lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Estado actual de Plena · GDL. Actualizado manualmente conforme avanzamos.
          </p>

          {/* Progress */}
          <div style={{ background: "white", border: `0.5px solid ${g.stone}`, borderRadius: "6px", padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>Progreso general</span>
              <span style={{ fontFamily: g.sans, fontSize: "13px", color: g.night, fontWeight: 500 }}>{doneTasks} / {totalTasks} tareas</span>
            </div>
            <div style={{ height: "4px", background: g.stone, borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: g.sage, borderRadius: "2px", transition: "width 0.6s ease" }} />
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "12px", flexWrap: "wrap" as const }}>
              {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
                <div key={key} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: cfg.dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: g.sans, fontSize: "11px", color: g.ink3 }}>{cfg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phases */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "20px" }}>
          {PHASES.map((phase) => {
            const pc = PHASE_COLORS[phase.state];
            const done = countDone(phase.tasks);
            const isMilestone = phase.state === "milestone";
            return (
              <div key={phase.n} style={{
                border: `0.5px solid ${pc.bar}40`,
                borderLeft: `3px solid ${pc.bar}`,
                borderRadius: "6px",
                background: pc.bg || g.ivory,
                overflow: "hidden",
              }}>
                {/* Phase header */}
                <div style={{
                  padding: "1.25rem 1.25rem 1rem",
                  background: isMilestone ? g.night : "transparent",
                  borderBottom: `0.5px solid ${pc.bar}20`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap" as const,
                  gap: "8px",
                }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontFamily: g.sans, fontSize: "10px", letterSpacing: "0.12em", color: isMilestone ? "rgba(168,196,160,0.7)" : g.ink3 }}>FASE {phase.n}</span>
                      <span style={{
                        fontFamily: g.sans, fontSize: "10px", padding: "1px 7px", borderRadius: "20px",
                        background: `${pc.badge}18`, color: isMilestone ? pc.badge : pc.badgeText,
                        border: `0.5px solid ${pc.badge}40`,
                        textTransform: "uppercase" as const, letterSpacing: "0.1em",
                      }}>
                        {phase.state === "active" ? "Activa" : phase.state === "next" ? "Próxima" : phase.state === "milestone" ? "Hito" : "Pendiente"}
                      </span>
                    </div>
                    <h2 style={{
                      fontFamily: g.serif, fontSize: "1.25rem", fontWeight: 400,
                      color: isMilestone ? g.linen : g.night,
                      marginBottom: "2px",
                    }}>{phase.title}</h2>
                    <p style={{ fontFamily: g.sans, fontSize: "12px", color: isMilestone ? "rgba(248,250,245,0.45)" : g.ink3 }}>{phase.timing}</p>
                  </div>
                  {!isMilestone && (
                    <span style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3 }}>{done}/{phase.tasks.length}</span>
                  )}
                </div>

                {/* Tasks */}
                <div style={{ padding: "0.75rem 1.25rem 1.25rem" }}>
                  {phase.tasks.map((task, i) => {
                    const sc = STATUS_CONFIG[task.status];
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        padding: "7px 0",
                        borderBottom: i < phase.tasks.length - 1 ? `0.5px solid ${isMilestone ? "rgba(248,250,245,0.06)" : g.stone + "40"}` : "none",
                      }}>
                        <div style={{
                          width: "7px", height: "7px", borderRadius: "50%",
                          background: sc.dot, flexShrink: 0, marginTop: "5px",
                        }} />
                        <div style={{ flex: 1 }}>
                          <p style={{
                            fontFamily: g.sans, fontSize: "13px",
                            color: isMilestone ? "rgba(248,250,245,0.8)" : (task.status === "done" ? g.ink3 : g.ink2),
                            textDecoration: task.status === "done" ? "line-through" : "none",
                            marginBottom: task.note ? "2px" : "0",
                            lineHeight: 1.5,
                          }}>{task.label}</p>
                          {task.note && (
                            <p style={{ fontFamily: g.sans, fontSize: "11px", color: isMilestone ? "rgba(248,250,245,0.35)" : g.ink3, lineHeight: 1.4 }}>{task.note}</p>
                          )}
                        </div>
                        <span style={{
                          fontFamily: g.sans, fontSize: "10px", padding: "1px 6px", borderRadius: "20px",
                          background: sc.bg, color: sc.color, border: `0.5px solid ${sc.dot}30`,
                          whiteSpace: "nowrap" as const, flexShrink: 0, marginTop: "2px",
                        }}>{sc.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <p style={{ fontFamily: g.sans, fontSize: "12px", color: g.ink3, textAlign: "center" as const, marginTop: "3rem", lineHeight: 1.7 }}>
          Este roadmap se actualiza manualmente conforme avanza el proyecto.<br/>
          Fuente de verdad: Capa 2 en Notion.
        </p>

      </div>
    </div>
  );
}
