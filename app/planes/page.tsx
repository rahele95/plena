"use client";
import Link from "next/link";

export default function Planes() {
  return (
    <>
      <section style={{ paddingTop:"9rem", paddingBottom:"5rem", paddingLeft:"2rem", paddingRight:"2rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"1rem" }}>Todos nuestros planes</div>
          <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em", lineHeight:1.05, maxWidth:"700px" }}>La nutrición correcta<br /><span style={{ color:"#2d6b45" }}>para cada persona.</span></h1>
        </div>
      </section>

      {/* Standard plan */}
      <section style={{ padding:"4rem 2rem", background:"#f0f7ea", borderTop:"0.5px solid rgba(15,31,18,0.07)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div>
            <div style={{ display:"inline-block", background:"rgba(45,107,69,0.1)", color:"#2d6b45", fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 14px", borderRadius:"100px", marginBottom:"1.5rem" }}>Plan 01 · Más popular</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2rem", fontWeight:600, color:"#0f1f12", marginBottom:"1rem", lineHeight:1.15 }}>Plan semanal estándar</h2>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"#6b7c6d", marginBottom:"1.5rem" }}>5 momentos del día, 5 días a la semana. Menú elaborado semanalmente por nuestro chef con ingredientes frescos y de temporada. Cada envase incluye etiqueta con calorías y macronutrientes.</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", marginBottom:"2rem" }}>
              {["Desayuno incluido","Colación mañana","Comida completa","Colación tarde","Cena balanceada","Envase al vacío","Etiqueta nutricional","Entrega semanal"].map(f=>(
                <div key={f} style={{ display:"flex", gap:"8px", alignItems:"center", fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"#2d3a2e" }}>
                  <span style={{ color:"#4a9463", flexShrink:0 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"baseline", gap:"4px", marginBottom:"1.5rem" }}>
              <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2.5rem", fontWeight:600, color:"#1a4a2e" }}>$180–220</span>
              <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", color:"#6b7c6d" }}>MXN / comida</span>
            </div>
            <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"13px 32px", background:"#1a4a2e", color:"#f8faf5", borderRadius:"100px", textDecoration:"none" }}>Quiero este plan</Link>
          </div>
          <div style={{ background:"white", borderRadius:"24px", padding:"2rem", border:"0.5px solid rgba(15,31,18,0.08)" }}>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.12em", textTransform:"uppercase", color:"#4a9463", marginBottom:"1rem" }}>Ejemplo de menú semanal</div>
            {[["Lunes","Avena proteica con frutos rojos · Pechuga con verduras al vapor · Salmón con camote"],["Martes","Huevos rancheros sin tortilla · Lomo de res con espinacas · Pollo al limón con quinoa"],["Miércoles","Bowl de proteína con granola · Tilapia con brócoli · Carne molida con berenjena"],["Jueves","Yogur griego con nueces · Pechuga al ajillo con ejotes · Atún con aguacate"],["Viernes","Smoothie proteico · Costilla de cerdo magra · Res con champiñones y calabaza"]].map(([d,m])=>(
              <div key={d} style={{ padding:"10px 0", borderBottom:"0.5px solid rgba(15,31,18,0.06)" }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"12px", fontWeight:600, color:"#2d6b45", marginBottom:"3px" }}>{d}</div>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#6b7c6d", lineHeight:1.5 }}>{m}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Medical plan */}
      <section style={{ padding:"4rem 2rem", background:"#0f1f12", borderTop:"0.5px solid rgba(15,31,18,0.07)" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-block", background:"rgba(168,217,74,0.15)", color:"#a8d94a", fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 14px", borderRadius:"100px", marginBottom:"1.5rem" }}>Plan 02 · Mayor impacto</div>
              <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2rem", fontWeight:600, color:"#f8faf5", marginBottom:"1rem", lineHeight:1.15 }}>Plan personalizado<br />+ nutriólogo</h2>
              <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"rgba(248,250,245,0.5)", marginBottom:"1.5rem" }}>Consulta inicial con nuestro nutriólogo certificado. Diseñamos tu plan considerando tus análisis de sangre, condición médica, objetivos y preferencias alimenticias. Plena lo cocina con exactitud.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px", marginBottom:"2rem" }}>
                {["Evaluación nutricional completa","Plan 100% personalizado a tu condición","Seguimiento mensual con el nutriólogo","Recomendación de suplementación","Ajustes semanales según progreso","Disponible para: diabetes, cardiovascular, low carb, rendimiento"].map(f=>(
                  <div key={f} style={{ display:"flex", gap:"8px", alignItems:"flex-start", fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"rgba(248,250,245,0.65)" }}>
                    <span style={{ color:"#a8d94a", flexShrink:0, marginTop:"2px" }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", alignItems:"baseline", gap:"4px", marginBottom:"1.5rem" }}>
                <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2.5rem", fontWeight:600, color:"#a8d94a" }}>$250–350</span>
                <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", color:"rgba(248,250,245,0.4)" }}>MXN / comida</span>
              </div>
              <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"13px 32px", background:"#a8d94a", color:"#0f1f12", borderRadius:"100px", textDecoration:"none" }}>Quiero este plan</Link>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:"12px" }}>
              {[{icon:"🩸",t:"Diabetes tipo 1 y 2",d:"Carbohidratos contados, IG bajo, sin azúcares añadidos. Coordinado con endocrinólogo."},{icon:"🫀",t:"Salud cardiovascular",d:"Bajo en sodio y grasas saturadas. Alto en fibra y omega-3."},{icon:"⚡",t:"Alto rendimiento",d:"Macros para entrenamientos. Proteína de calidad, energía sostenida."},{icon:"🌿",t:"Low carb / Cetogénico",d:"Menús bajos en carbohidratos, altos en grasa saludable y proteína."}].map(c=>(
                <div key={c.t} style={{ background:"rgba(248,250,245,0.05)", border:"0.5px solid rgba(248,250,245,0.07)", borderRadius:"16px", padding:"1.25rem", display:"flex", gap:"14px", alignItems:"flex-start" }}>
                  <span style={{ fontSize:"24px", flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"14px", fontWeight:600, color:"#f8faf5", marginBottom:"4px" }}>{c.t}</div>
                    <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"rgba(248,250,245,0.4)", lineHeight:1.55 }}>{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){section:nth-of-type(3)>div>div{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* Kids plan */}
      <section style={{ padding:"4rem 2rem 6rem", background:"#f0f7ea" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div style={{ background:"#a8d94a", borderRadius:"24px", padding:"3rem", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:"5rem", marginBottom:"1rem" }}>🎒</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.5rem", fontWeight:600, color:"#0f1f12" }}>Lunch kids</div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"rgba(15,31,18,0.5)", marginTop:"4px" }}>Lunes a viernes · Entrega escolar</div>
            </div>
          </div>
          <div>
            <div style={{ display:"inline-block", background:"rgba(45,107,69,0.1)", color:"#2d6b45", fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", padding:"4px 14px", borderRadius:"100px", marginBottom:"1.5rem" }}>Plan 03 · Para mamás</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2rem", fontWeight:600, color:"#0f1f12", marginBottom:"1rem", lineHeight:1.15 }}>El mejor lunch<br />sin el estrés de cocinarlo.</h2>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"#6b7c6d", marginBottom:"1.5rem" }}>Menús escolares diseñados por nuestro nutriólogo pediátrico. Sin azúcares añadidos, sin ultraprocesados, con las proteínas y vitaminas que los niños necesitan para concentrarse y crecer.</p>
            <div style={{ display:"flex", alignItems:"baseline", gap:"4px", marginBottom:"1.5rem" }}>
              <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2.5rem", fontWeight:600, color:"#1a4a2e" }}>$120–160</span>
              <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", color:"#6b7c6d" }}>MXN / lunch</span>
            </div>
            <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"13px 32px", background:"#1a4a2e", color:"#f8faf5", borderRadius:"100px", textDecoration:"none" }}>Pedir para mis hijos</Link>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(4)>div{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}
