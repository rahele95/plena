"use client";
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({ nombre:"", email:"", tel:"", plan:"", objetivo:"", condicion:"", hijos:"", mensaje:"" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = { width:"100%", padding:"11px 14px", background:"white", border:"0.5px solid rgba(15,31,18,0.15)", borderRadius:"10px", fontFamily:"'DM Sans', sans-serif", fontSize:"14px", color:"#0f1f12", outline:"none" };
  const lbl: React.CSSProperties = { fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b7c6d", display:"block", marginBottom:"6px" };
  const field: React.CSSProperties = { marginBottom:"1.25rem" };

  const chips = (opts: string[], val: string, key: keyof typeof form) => (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginTop:"8px" }}>
      {opts.map(o=>(
        <button key={o} onClick={()=>setForm({...form,[key]:o})} style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", padding:"7px 14px", border:`0.5px solid ${form[key]===o?"#2d6b45":"rgba(15,31,18,0.15)"}`, background: form[key]===o ? "#1a4a2e" : "white", color: form[key]===o ? "#f8faf5" : "#6b7c6d", borderRadius:"100px", cursor:"pointer", transition:"all 0.15s" }}>
          {o}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <section style={{ paddingTop:"9rem", paddingBottom:"4rem", paddingLeft:"2rem", paddingRight:"2rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"1rem" }}>Empieza hoy</div>
          <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em", lineHeight:1.05, maxWidth:"600px", marginBottom:"1rem" }}>Cuéntanos tu objetivo.<br /><span style={{ color:"#2d6b45" }}>Nosotras cocinamos el resto.</span></h1>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.75, color:"#6b7c6d", maxWidth:"480px" }}>Responde en menos de 3 minutos. Te contactamos en 24 horas con tu plan recomendado y una cotización sin compromisos.</p>
        </div>
      </section>

      <section style={{ padding:"2rem 2rem 7rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem" }}>
          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background:"#f0f7ea", borderRadius:"20px", padding:"3rem", textAlign:"center" }}>
                <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>🌿</div>
                <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.8rem", fontWeight:600, color:"#1a4a2e", marginBottom:"0.75rem" }}>¡Recibido!</h2>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", color:"#6b7c6d", lineHeight:1.7 }}>Adriana revisa tu información y te contacta en menos de 24 horas con tu plan recomendado y cotización personalizada.</p>
              </div>
            ) : (
              <div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"1.25rem" }}>
                  <div><label style={lbl}>Nombre completo</label><input style={inp} placeholder="María García" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})} /></div>
                  <div><label style={lbl}>Tu correo</label><input style={inp} type="email" placeholder="maria@ejemplo.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                </div>
                <div style={field}><label style={lbl}>WhatsApp (para coordinar entrega)</label><input style={inp} placeholder="+52 33 1234 5678" value={form.tel} onChange={e=>setForm({...form,tel:e.target.value})} /></div>
                <div style={field}>
                  <label style={lbl}>¿Qué plan te interesa?</label>
                  {chips(["Plan semanal estándar","Plan personalizado + nutriólogo","Lunch kids","Aún no sé, quiero orientación"],"plan","plan")}
                </div>
                <div style={field}>
                  <label style={lbl}>¿Cuál es tu objetivo principal?</label>
                  {chips(["Bajar de peso","Ganar músculo","Comer más saludable","Control de enfermedad","Más energía y rendimiento","No tener que cocinar"],"objetivo","objetivo")}
                </div>
                <div style={field}>
                  <label style={lbl}>¿Tienes alguna condición médica?</label>
                  {chips(["Ninguna","Diabetes tipo 2","Enfermedad cardiovascular","Hipotiroidismo","Otra"],"condicion","condicion")}
                </div>
                <div style={field}>
                  <label style={lbl}>¿Tienes hijos que necesiten lunch?</label>
                  {chips(["No","1 hijo","2 hijos","3 o más"],"hijos","hijos")}
                </div>
                <div style={field}><label style={lbl}>¿Algo más que quieras contarnos?</label><textarea style={{...inp, resize:"none", paddingTop:"10px"}} rows={4} placeholder="Alergias, horario preferido de entrega, colonia..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})} /></div>
                <button onClick={()=>setSent(true)} style={{ width:"100%", fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"14px 0", background:"#1a4a2e", color:"#f8faf5", border:"none", borderRadius:"100px", cursor:"pointer" }}>Enviar y recibir mi propuesta →</button>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#6b7c6d", textAlign:"center", marginTop:"12px" }}>Sin compromisos · Respuesta en menos de 24 horas</p>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ position:"sticky", top:"6rem" }}>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"#4a9463", marginBottom:"1.5rem" }}>Lo que pasa después</div>
              {[["01 · Recibes tu plan","Adriana revisa tu perfil y te envía la recomendación de plan + cotización en menos de 24 horas."],["02 · Lo personalizamos","Si tienes condición médica o quieres plan personalizado, agendamos consulta con el nutriólogo."],["03 · Tu menú se cocina","Nuestro chef prepara tu semana. Empaque al vacío, etiquetado completo, listo para entregar."],["04 · Te lo llevamos","Entrega semanal a tu domicilio en Guadalajara. Horario coordinado contigo."],["05 · Seguimiento real","Adriana hace check-in semanal. Ajustamos lo que sea necesario para que el plan funcione."]].map(([t,b])=>(
                <div key={t} style={{ marginBottom:"1.5rem", paddingBottom:"1.5rem", borderBottom:"0.5px solid rgba(15,31,18,0.07)" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"15px", fontWeight:600, color:"#0f1f12", marginBottom:"6px" }}>{t}</div>
                  <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", lineHeight:1.7, color:"#6b7c6d" }}>{b}</p>
                </div>
              ))}
              <div style={{ background:"#1a4a2e", borderRadius:"16px", padding:"1.5rem" }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"15px", fontStyle:"italic", color:"#f8faf5", marginBottom:"10px", lineHeight:1.4 }}>"Cada semana reviso personalmente el menú antes de que salga al cliente. No hay plan que llegue a tu puerta sin mi aprobación."</div>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#a8d94a" }}>— Adriana Burgos, fundadora de Plena</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
