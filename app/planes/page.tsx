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

export default function Planes() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop:"9rem", paddingBottom:"5rem", paddingLeft:"2.5rem", paddingRight:"2.5rem", background:C.linen }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"1rem" }}>Todos nuestros planes</div>
          <h1 style={{ fontFamily:serif, fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:C.ink, lineHeight:1.05, maxWidth:"700px" }}>
            La nutrición correcta<br /><em style={{ fontStyle:"italic", color:C.nightL }}>para cada persona.</em>
          </h1>
        </div>
      </section>

      {/* Plan 01 — Estándar */}
      <section style={{ padding:"4.5rem 2.5rem", background:"#ede8dc", borderTop:`0.5px solid ${C.rule}` }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-block", fontFamily:sans, fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase" as const, padding:"3px 12px", border:`0.5px solid ${C.stoneD}`, borderRadius:"2px", marginBottom:"1.5rem", color:C.stoneD }}>Plan 01 · Más popular</div>
            <h2 style={{ fontFamily:serif, fontSize:"2rem", fontWeight:300, color:C.ink, marginBottom:"1rem", lineHeight:1.2 }}>Plan semanal</h2>
            <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:C.inkS, marginBottom:"1.5rem" }}>5 momentos del día, 5 días a la semana. Menú elaborado semanalmente por nuestro chef con ingredientes frescos y de temporada. Cada envase con etiqueta nutricional completa.</p>
            <div style={{ marginBottom:"1.5rem" }}>
              {["Desayuno incluido","Colación mañana","Comida completa","Colación tarde","Cena balanceada","Envase al vacío","Etiqueta nutricional","Entrega semanal"].map(f => (
                <div key={f} style={{ display:"flex", gap:"8px", alignItems:"center", marginBottom:"6px" }}>
                  <span style={{ color:C.sage, flexShrink:0, fontSize:"12px" }}>→</span>
                  <span style={{ fontFamily:sans, fontSize:"13px", color:C.inkM }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily:serif, fontSize:"2.5rem", fontWeight:300, color:C.night, marginBottom:"1.5rem" }}>$180–220 <span style={{ fontFamily:sans, fontSize:"14px", fontWeight:400, color:C.stoneD }}>MXN / comida</span></div>
            <Link href="/contacto" style={{ fontFamily:sans, fontSize:"12px", fontWeight:500, padding:"12px 28px", background:C.night, color:C.linen, borderRadius:"2px", textDecoration:"none", letterSpacing:"0.04em" }}>Quiero este plan</Link>
          </div>
          <div style={{ background:C.ivory, borderRadius:"4px", padding:"2rem", border:`0.5px solid ${C.stone}` }}>
            <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.14em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"1rem" }}>Ejemplo de menú semanal</div>
            {[["Lunes","Avena proteica · Pechuga con verduras al vapor · Salmón con camote"],["Martes","Huevos rancheros · Lomo de res con espinacas · Pollo al limón con quinoa"],["Miércoles","Bowl proteico · Tilapia con brócoli · Carne molida con berenjena"],["Jueves","Yogur con nueces · Pechuga al ajillo con ejotes · Atún con aguacate"],["Viernes","Smoothie proteico · Costilla magra · Res con champiñones y calabaza"]].map(([d,m]) => (
              <div key={d} style={{ padding:"10px 0", borderBottom:`0.5px solid ${C.rule}` }}>
                <div style={{ fontFamily:serif, fontSize:"13px", fontWeight:400, color:C.nightM, marginBottom:"3px" }}>{d}</div>
                <div style={{ fontFamily:sans, fontSize:"12px", color:C.inkS, lineHeight:1.5 }}>{m}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Plan 02 — Personalizado */}
      <section style={{ padding:"4.5rem 2.5rem", background:C.night, borderTop:`0.5px solid ${C.rule}` }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-block", fontFamily:sans, fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase" as const, padding:"3px 12px", border:`0.5px solid ${C.sage}`, borderRadius:"2px", marginBottom:"1.5rem", color:C.sage }}>Plan 02 · Mayor impacto</div>
            <h2 style={{ fontFamily:serif, fontSize:"2rem", fontWeight:300, color:C.ivory, marginBottom:"1rem", lineHeight:1.2 }}>Plan personalizado<br /><em style={{ color:C.sageL }}>+ nutriólogo</em></h2>
            <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:"rgba(245,240,232,0.5)", marginBottom:"1.5rem" }}>Consulta inicial con nutriólogo certificado incluida. Plan diseñado para tu condición exacta — pérdida de peso, diabetes, cardiovascular, rendimiento deportivo, low carb.</p>
            <div style={{ marginBottom:"1.5rem" }}>
              {["Evaluación nutricional completa","Plan 100% personalizado","Seguimiento mensual con nutriólogo","Recomendación de suplementación","Ajustes semanales según progreso"].map(f => (
                <div key={f} style={{ display:"flex", gap:"8px", alignItems:"center", marginBottom:"6px" }}>
                  <span style={{ color:C.sageL, flexShrink:0, fontSize:"12px" }}>→</span>
                  <span style={{ fontFamily:sans, fontSize:"13px", color:"rgba(245,240,232,0.6)" }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ fontFamily:serif, fontSize:"2.5rem", fontWeight:300, color:C.sageL, marginBottom:"1.5rem" }}>$250–350 <span style={{ fontFamily:sans, fontSize:"14px", fontWeight:400, color:"rgba(245,240,232,0.3)" }}>MXN / comida</span></div>
            <Link href="/contacto" style={{ fontFamily:sans, fontSize:"12px", fontWeight:500, padding:"12px 28px", background:C.sageL, color:C.night, borderRadius:"2px", textDecoration:"none", letterSpacing:"0.04em" }}>Quiero este plan</Link>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"10px" }}>
            {[{icon:"🩸",t:"Diabetes tipo 1 y 2",d:"IG controlado, sin azúcares añadidos. Coordinado con tu endocrinólogo."},{icon:"🫀",t:"Salud cardiovascular",d:"Bajo en sodio, alto en omega-3 y fibra."},{icon:"⚡",t:"Alto rendimiento",d:"Macros para entrenamientos. Proteína de calidad."},{icon:"🌿",t:"Low carb / Cetogénico",d:"Bajo en carbohidratos, alto en grasa saludable."}].map(c => (
              <div key={c.t} style={{ background:"rgba(245,240,232,0.04)", border:"0.5px solid rgba(245,240,232,0.08)", borderRadius:"4px", padding:"1.25rem", display:"flex", gap:"12px", alignItems:"flex-start" }}>
                <span style={{ fontSize:"20px", flexShrink:0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily:serif, fontSize:"14px", fontWeight:400, color:C.ivory, marginBottom:"3px" }}>{c.t}</div>
                  <div style={{ fontFamily:sans, fontSize:"12px", color:"rgba(245,240,232,0.4)", lineHeight:1.5 }}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(3)>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Plan 03 — Kids */}
      <section style={{ padding:"4.5rem 2.5rem 6rem", background:"#ede8dc" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div style={{ background:C.night, borderRadius:"4px", padding:"3rem", display:"flex", alignItems:"center", justifyContent:"center", aspectRatio:"4/3" }}>
            <div style={{ textAlign:"center" as const }}>
              <div style={{ fontSize:"4rem", marginBottom:"1rem" }}>🎒</div>
              <div style={{ fontFamily:serif, fontSize:"1.5rem", fontWeight:300, color:C.sageL }}>Lunch kids</div>
              <div style={{ fontFamily:sans, fontSize:"12px", color:"rgba(245,240,232,0.35)", marginTop:"4px", letterSpacing:"0.06em" }}>Lunes a viernes · Entrega escolar</div>
            </div>
          </div>
          <div>
            <div style={{ display:"inline-block", fontFamily:sans, fontSize:"10px", letterSpacing:"0.12em", textTransform:"uppercase" as const, padding:"3px 12px", border:`0.5px solid ${C.stoneD}`, borderRadius:"2px", marginBottom:"1.5rem", color:C.stoneD }}>Plan 03 · Para familias</div>
            <h2 style={{ fontFamily:serif, fontSize:"2rem", fontWeight:300, color:C.ink, marginBottom:"1rem", lineHeight:1.2 }}>El mejor lunch<br />sin el estrés de cocinarlo.</h2>
            <p style={{ fontFamily:sans, fontSize:"14px", lineHeight:1.8, color:C.inkS, marginBottom:"1.5rem" }}>Menús escolares sin azúcares añadidos ni ultraprocesados. Diseñados con criterio nutricional pediátrico. Los niños comen bien, tú tienes una preocupación menos.</p>
            <div style={{ fontFamily:serif, fontSize:"2.5rem", fontWeight:300, color:C.night, marginBottom:"1.5rem" }}>$120–160 <span style={{ fontFamily:sans, fontSize:"14px", fontWeight:400, color:C.stoneD }}>MXN / lunch</span></div>
            <Link href="/contacto" style={{ fontFamily:sans, fontSize:"12px", fontWeight:500, padding:"12px 28px", background:C.night, color:C.linen, borderRadius:"2px", textDecoration:"none", letterSpacing:"0.04em" }}>Pedir para mis hijos</Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(4)>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Próximamente */}
      <section style={{ padding:"4rem 2.5rem", background:C.linen, borderTop:`0.5px solid ${C.rule}` }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:sans, fontSize:"10px", letterSpacing:"0.18em", textTransform:"uppercase" as const, color:C.sage, marginBottom:"2rem" }}>Próximamente en Plena</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
            {[{icon:"💊",name:"Suplementación mensual",desc:"Recomendación basada en tu plan nutricional y análisis de sangre. Sin suplementos genéricos — cada recomendación es tuya."},{icon:"🥜",name:"Colaciones y snacks saludables",desc:"Lo saludable entre comidas. Sin excusas para el ultraprocesado. Preparados con los mismos estándares que el resto de los planes."}].map(p => (
              <div key={p.name} style={{ background:C.ivory, border:`0.5px solid ${C.stone}`, borderRadius:"4px", padding:"2rem", display:"flex", gap:"1.25rem" }}>
                <span style={{ fontSize:"28px", flexShrink:0 }}>{p.icon}</span>
                <div>
                  <div style={{ fontFamily:serif, fontSize:"1.1rem", fontWeight:400, color:C.night, marginBottom:"8px" }}>{p.name}</div>
                  <p style={{ fontFamily:sans, fontSize:"13px", lineHeight:1.7, color:C.inkS }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(5)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
