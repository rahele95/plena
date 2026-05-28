"use client";
import Link from "next/link";

const C = {
  linen:"#f5f0e8", ivory:"#faf7f2", stone:"#c8bfb0", stoneD:"#9e9385",
  night:"#1c2b1e", nightM:"#2d4030", nightL:"#4a6350",
  sage:"#7a9b7e", sageL:"#a8c4a0",
  ink:"#1a1814", inkM:"#3d3830", inkS:"#7a736a",
  rule:"rgba(26,24,20,0.1)",
};
const serif = "'Cormorant Garamond', Georgia, serif";
const sans  = "'DM Sans', system-ui, sans-serif";

export default function SobreNosotros() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop:"9rem", paddingBottom:"5rem", paddingLeft:"2.5rem", paddingRight:"2.5rem", background:C.night }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"end" }}>
          <div>
            <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"1.5rem" }}>Quiénes somos</div>
            <h1 style={{ fontFamily:serif, fontSize:"clamp(2.8rem,6vw,4.5rem)", fontWeight:300, color:C.ivory, lineHeight:1.05, marginBottom:"1.5rem" }}>
              Plena nació de<br />una frustración <em style={{ color:C.sageL, fontStyle:"italic" }}>real.</em>
            </h1>
            <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:"rgba(245,240,232,0.45)", maxWidth:"420px" }}>
              Lo que funciona en EUA — nutrición clínica + cocina profesional + entrega a domicilio — no existe con ese nivel en Guadalajara. Eso es lo que Plena viene a cambiar.
            </p>
          </div>
          <div style={{ aspectRatio:"4/5", background:"rgba(245,240,232,0.04)", border:"0.5px solid rgba(245,240,232,0.08)", borderRadius:"4px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ textAlign:"center" as const }}>
              <div style={{ fontFamily:serif, fontSize:"5rem", fontWeight:300, color:"rgba(168,196,160,0.2)", lineHeight:1 }}>P</div>
              <div style={{ fontFamily:sans, fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase" as const, color:"rgba(245,240,232,0.15)", marginTop:"10px" }}>Foto del equipo próximamente</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:first-of-type>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Historia */}
      <section style={{ padding:"7rem 2.5rem", background:C.linen }}>
        <div style={{ maxWidth:"680px", margin:"0 auto" }}>
          <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"2rem" }}>La historia</div>
          <p style={{ fontFamily:serif, fontSize:"1.3rem", fontWeight:300, fontStyle:"italic", color:C.inkM, lineHeight:1.7, marginBottom:"1.5rem" }}>
            "En México hay miles de personas con disciplina y con ganas de cuidarse. El problema no es la voluntad — es que no tienen acceso a algo que de verdad funcione."
          </p>
          <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:C.inkS, marginBottom:"1.25rem" }}>
            Plena nace de observar ese ciclo de cerca: personas inteligentes, ocupadas, comprometidas con su salud, que terminan comiendo de emergencia porque no hay una solución que combine calidad real, criterio nutricional y conveniencia.
          </p>
          <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:C.inkS }}>
            Chef profesional + cocina industrial certificada + nutriólogo integrado + empaque que da orgullo. No es comida de tupper. Es un sistema de nutrición diseñado para personas que se toman en serio sus hábitos.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding:"6rem 2.5rem", background:"#ede8dc" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"3rem", textAlign:"center" as const }}>En qué creemos</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0", borderTop:`0.5px solid ${C.rule}` }}>
            {[
              ["Disciplina","No vendemos dietas de 30 días. Construimos el hábito de comer bien, semana a semana, sin atajos."],
              ["Buenos hábitos","Cada plan está diseñado para que el cliente desarrolle una relación diferente con lo que come — no solo que cumpla un objetivo."],
              ["Ciencia aplicada","Detrás de cada platillo hay un nutriólogo, no una tendencia. La evidencia clínica es el punto de partida, no el marketing."],
              ["Calidad visible","El producto debe comunicar lo que promete antes de abrirse: empaque al vacío, etiqueta completa, presentación impecable."],
            ].map(([t, b], i) => (
              <div key={t} style={{ padding:"2.5rem", borderBottom:`0.5px solid ${C.rule}`, borderRight:i%2===0?`0.5px solid ${C.rule}`:"none" }}>
                <div style={{ fontFamily:serif, fontSize:"1.3rem", fontWeight:400, color:C.night, marginBottom:"0.75rem" }}>{t}</div>
                <p style={{ fontFamily:sans, fontSize:"13px", lineHeight:1.75, color:C.inkS }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(3)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Equipo */}
      <section style={{ padding:"6rem 2.5rem", background:C.linen }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center" as const, marginBottom:"3rem" }}>
            <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"0.75rem" }}>El equipo</div>
            <h2 style={{ fontFamily:serif, fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:300, color:C.ink }}>Personas reales detrás<br />de cada platillo.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
            {[
              { emoji:"👩‍💼", name:"Adriana Burgos", role:"Fundadora & Dirección general", desc:"Cuida que todo funcione. Prueba cada menú antes de que salga. Primer y último punto de contacto con cada cliente." },
              { emoji:"👨‍🍳", name:"Chef profesional", role:"Dirección de cocina", desc:"Formación culinaria formal. Cocina industrial certificada. Traduce las fichas nutricionales en platillos que saben bien." },
              { emoji:"👩‍⚕️", name:"Nutrióloga certificada", role:"Dirección nutricional", desc:"Especialista en nutrición clínica. Diseña los planes personalizados y supervisa todos los protocolos médicos." },
            ].map(p => (
              <div key={p.name} style={{ background:C.ivory, borderRadius:"4px", padding:"2rem", border:`0.5px solid ${C.stone}` }}>
                <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{p.emoji}</div>
                <div style={{ fontFamily:serif, fontSize:"1rem", fontWeight:400, color:C.night, marginBottom:"3px" }}>{p.name}</div>
                <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.1em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"0.75rem" }}>{p.role}</div>
                <p style={{ fontFamily:sans, fontSize:"13px", lineHeight:1.65, color:C.inkS }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(4)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding:"6rem 2.5rem", background:"#ede8dc", textAlign:"center" as const }}>
        <div style={{ maxWidth:"480px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:serif, fontSize:"2.5rem", fontWeight:300, color:C.ink, marginBottom:"1.25rem" }}>¿Empezamos?</h2>
          <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.75, color:C.inkS, marginBottom:"2rem" }}>Cuéntanos tu objetivo. En menos de 24 horas tienes tu plan y cotización personalizados.</p>
          <Link href="/contacto" style={{ fontFamily:sans, fontSize:"12px", fontWeight:500, padding:"13px 36px", background:C.night, color:C.linen, borderRadius:"2px", textDecoration:"none", letterSpacing:"0.04em" }}>Quiero empezar</Link>
        </div>
      </section>
    </>
  );
}
