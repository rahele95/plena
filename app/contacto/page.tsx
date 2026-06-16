"use client";
import { useState } from "react";

const C = {
  linen:"#f5f0e8", ivory:"#faf7f2", stone:"#c8bfb0", stoneD:"#9e9385",
  night:"#1c2b1e", nightM:"#2d4030", nightL:"#4a6350",
  sage:"#7a9b7e", sageL:"#a8c4a0",
  ink:"#1a1814", inkM:"#3d3830", inkS:"#7a736a",
  rule:"rgba(26,24,20,0.1)",
};
const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'DM Sans', system-ui, sans-serif";

export default function Contacto() {
  const [form, setForm] = useState({ nombre:"", email:"", tel:"", plan:"", objetivo:"", condicion:"", mensaje:"" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = { width:"100%", padding:"11px 14px", background:C.ivory, border:`0.5px solid ${C.stone}`, borderRadius:"2px", fontFamily:sans, fontSize:"14px", color:C.ink, outline:"none" };
  const lbl: React.CSSProperties = { fontFamily:sans, fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase", color:C.stoneD, display:"block", marginBottom:"6px" };

  const chips = (opts: string[], key: keyof typeof form, multi = false) => (
    <div style={{ display:"flex", flexWrap:"wrap" as const, gap:"8px", marginTop:"8px" }}>
      {opts.map(o => (
        <button key={o} onClick={() => {
          if (multi) {
            const arr = (form[key] as string).split(",").filter(Boolean);
            const next = arr.includes(o) ? arr.filter(v=>v!==o) : [...arr, o];
            setForm({...form, [key]: next.join(",")});
          } else setForm({...form, [key]: o});
        }} style={{
          fontFamily:sans, fontSize:"12px", padding:"7px 14px",
          border:`0.5px solid ${(form[key] as string).includes(o) ? C.nightM : C.stone}`,
          background:(form[key] as string).includes(o) ? C.night : "transparent",
          color:(form[key] as string).includes(o) ? C.linen : C.inkS,
          borderRadius:"2px", cursor:"pointer", transition:"all 0.15s",
          letterSpacing:"0.02em",
        }}>{o}</button>
      ))}
    </div>
  );

  return (
    <>
      <section style={{ paddingTop:"9rem", paddingBottom:"4rem", paddingLeft:"2.5rem", paddingRight:"2.5rem", background:C.linen }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"1rem" }}>Empieza hoy</div>
          <h1 style={{ fontFamily:serif, fontSize:"clamp(2.2rem,5vw,3.8rem)", fontWeight:300, color:C.ink, lineHeight:1.05, maxWidth:"600px", marginBottom:"1rem" }}>
            Cuéntanos tu objetivo.<br /><em style={{ fontStyle:"italic", color:C.nightL }}>Nosotras cocinamos el resto.</em>
          </h1>
          <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.75, color:C.inkS, maxWidth:"480px" }}>
            Sin compromisos. Respondemos en menos de 24 horas con tu propuesta personalizada.
          </p>
        </div>
      </section>

      <section style={{ padding:"2rem 2.5rem 7rem", background:C.linen }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6rem" }}>
          {/* Form */}
          <div>
            {sent ? (
              <div style={{ background:C.ivory, borderRadius:"4px", padding:"3rem", textAlign:"center" as const, border:`0.5px solid ${C.stone}` }}>
                <div style={{ fontFamily:serif, fontSize:"2rem", fontWeight:300, color:C.night, marginBottom:"1rem" }}>Recibido.</div>
                <p style={{ fontFamily:sans, fontSize:"14px", color:C.inkS, lineHeight:1.7 }}>Revisamos tu información y te contactamos en menos de 24 horas con tu plan recomendado.</p>
              </div>
            ) : (
              <div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"1.25rem" }}>
                  <div><label style={lbl}>Tu nombre</label><input style={inp} placeholder="María García" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})} /></div>
                  <div><label style={lbl}>Tu correo</label><input style={inp} type="email" placeholder="maria@ejemplo.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                </div>
                <div style={{ marginBottom:"1.25rem" }}><label style={lbl}>WhatsApp</label><input style={inp} placeholder="+52 33 1234 5678" value={form.tel} onChange={e=>setForm({...form,tel:e.target.value})} /></div>

                <div style={{ marginBottom:"1.5rem" }}>
                  <label style={{ ...lbl, marginBottom:"10px" }}>¿Qué plan te interesa?</label>
                  {chips(["Plan semanal","Plan personalizado + nutriólogo","Lunch kids","Aún no sé"], "plan")}
                </div>
                <div style={{ marginBottom:"1.5rem" }}>
                  <label style={{ ...lbl, marginBottom:"10px" }}>Objetivo principal</label>
                  {chips(["Bajar de peso","Ganar músculo","Comer más sano","Control médico","Más energía"], "objetivo")}
                </div>
                <div style={{ marginBottom:"1.5rem" }}>
                  <label style={{ ...lbl, marginBottom:"10px" }}>¿Condición médica?</label>
                  {chips(["Ninguna","Diabetes tipo 2","Cardiovascular","Hipotiroidismo","Otra"], "condicion")}
                </div>
                <div style={{ marginBottom:"1.5rem" }}>
                  <label style={lbl}>¿Algo más que quieras contarnos?</label>
                  <textarea style={{ ...inp, resize:"none", paddingTop:"10px" }} rows={4} placeholder="Alergias, colonia de entrega, horario preferido..." value={form.mensaje} onChange={e=>setForm({...form,mensaje:e.target.value})} />
                </div>

                <button onClick={() => setSent(true)} style={{ width:"100%", fontFamily:sans, fontSize:"13px", fontWeight:500, padding:"14px 0", background:C.night, color:C.linen, border:"none", borderRadius:"2px", cursor:"pointer", letterSpacing:"0.05em" }}>
                  Enviar y recibir mi propuesta
                </button>
                <p style={{ fontFamily:sans, fontSize:"12px", color:C.stoneD, textAlign:"center" as const, marginTop:"12px" }}>Sin compromisos · Respuesta en menos de 24 horas</p>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div style={{ position:"sticky", top:"6rem" }}>
              <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.15em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"1.5rem" }}>Lo que pasa después</div>
              {[
                ["01 · Recibes tu propuesta","En menos de 24 horas: plan recomendado y cotización personalizada."],
                ["02 · Personalizamos juntas","Si hay condición médica o meta específica, entra el nutriólogo."],
                ["03 · Lo cocinamos","Cocina industrial, empaque premium, etiqueta nutricional NOM-051. Sin atajos."],
                ["04 · Llega a tu puerta","Entrega semanal coordinada contigo. Listo para calentar y comer."],
                ["05 · Seguimiento real","Check-in semanal. Ajustamos lo que sea necesario."],
              ].map(([t, b]) => (
                <div key={t} style={{ marginBottom:"1.5rem", paddingBottom:"1.5rem", borderBottom:`0.5px solid ${C.rule}` }}>
                  <div style={{ fontFamily:serif, fontSize:"1rem", fontWeight:400, color:C.night, marginBottom:"5px" }}>{t}</div>
                  <p style={{ fontFamily:sans, fontSize:"13px", lineHeight:1.7, color:C.inkS }}>{b}</p>
                </div>
              ))}
              <div style={{ background:C.night, borderRadius:"4px", padding:"1.5rem" }}>
                <div style={{ fontFamily:serif, fontSize:"1rem", fontStyle:"italic", color:"rgba(245,240,232,0.75)", lineHeight:1.5, marginBottom:"10px" }}>
                  "Disciplina, buenos hábitos y calidad visible. Eso es lo que Plena trae a tu puerta cada semana."
                </div>
                <div style={{ fontFamily:sans, fontSize:"11px", color:C.sage }}>— Plena</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
