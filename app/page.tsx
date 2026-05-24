"use client";
import Link from "next/link";

const plans = [
  { num:"01", name:"Plan semanal estándar", price:"$180–220", unit:"/ comida", tag:"Más popular", color:"#1a4a2e", desc:"Desayuno, colaciones, comida y cena. Menú semanal elaborado por nuestro chef con ingredientes frescos. Etiqueta nutricional completa en cada envase.", ideal:"Profesionistas que quieren comer bien sin pensar." },
  { num:"02", name:"Plan personalizado + nutriólogo", price:"$250–350", unit:"/ comida", tag:"Mayor impacto", color:"#a8d94a", desc:"Consulta con nutriólogo certificado incluida. Dieta diseñada específicamente para ti: pérdida de peso, aumento de masa muscular, control glucémico, salud cardiovascular.", ideal:"Quienes tienen objetivos específicos o condiciones médicas." },
  { num:"03", name:"Lunch kids", price:"$120–160", unit:"/ comida", tag:"Nuevo", color:"#4a9463", desc:"Menús escolares diseñados para niños. Nutritivos, balanceados y con presentaciones que los niños quieren comer. Sin azúcares añadidos, sin ultraprocesados.", ideal:"Mamás que trabajan y quieren lo mejor para sus hijos." },
];

const medical = [
  { icon:"🩸", title:"Control de diabetes", desc:"Carbohidratos contados, índice glucémico controlado, sin azúcares añadidos. Diseñado con endocrinólogo." },
  { icon:"🫀", title:"Salud cardiovascular", desc:"Bajo en sodio, grasas saturadas reducidas, alto en omega-3 y fibra. Para quienes cuidan su corazón." },
  { icon:"⚡", title:"Alto rendimiento", desc:"Macros optimizados para atletas y personas que entrenan. Proteína de calidad, carbos estratégicos." },
  { icon:"🌿", title:"Low carb / Cetogénico", desc:"Menús bajos en carbohidratos con grasas saludables y proteína suficiente. Sin sacrificar el sabor." },
];

const steps = [
  { n:"01", t:"Elige tu plan", b:"Selecciona el tipo de plan que mejor se adapta a tus objetivos y necesidades en nuestro sitio o por WhatsApp." },
  { n:"02", t:"Hablamos contigo", b:"Un asesor revisa tu perfil. Si tienes condición médica, te conectamos con nuestro nutriólogo para una consulta inicial." },
  { n:"03", t:"Tu menú se cocina", b:"Nuestro chef prepara tu semana en cocina industrial certificada. Empacado al vacío con etiqueta nutricional completa." },
  { n:"04", t:"Llega a tu puerta", b:"Entrega semanal en Guadalajara. Todos tus alimentos listos para calentar y comer — sin drama, sin estrés." },
];

const testimonials = [
  { q:"Tengo diabetes tipo 2 y por fin encontré algo que funciona de verdad. Las etiquetas en cada envase me cambiaron la vida.", name:"Claudia M.", detail:"Plan médico · Control glucémico" },
  { q:"Trabajo 12 horas al día. Antes comía porquería. Ahora como bien y hasta perdí 6 kilos en 2 meses.", name:"Ricardo B.", detail:"Plan estándar · Guadalajara" },
  { q:"Les mando lunch a mis dos hijos desde hace 3 meses. La maestra me preguntó qué les doy de comer.", name:"Sofía L.", detail:"Lunch kids · 2 hijos" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"#f8faf5", display:"flex", alignItems:"center", padding:"0 2rem", position:"relative", overflow:"hidden" }}>
        {/* BG decoration */}
        <div style={{ position:"absolute", top:"-10%", right:"-5%", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(168,217,74,0.08)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-15%", left:"-8%", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(26,74,46,0.04)", pointerEvents:"none" }} />

        <div style={{ maxWidth:"1100px", margin:"0 auto", width:"100%", paddingTop:"80px", paddingBottom:"80px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(168,217,74,0.15)", border:"0.5px solid rgba(168,217,74,0.4)", borderRadius:"100px", padding:"5px 14px", marginBottom:"2rem" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#a8d94a", flexShrink:0 }} />
                <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#2d6b45", fontWeight:500 }}>Guadalajara, Jalisco · Entregas activas</span>
              </div>
              <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2.8rem,5vw,4.2rem)", fontWeight:600, lineHeight:1.05, color:"#0f1f12", marginBottom:"1.5rem", letterSpacing:"-0.02em" }}>
                Come bien.<br />
                <span style={{ color:"#2d6b45" }}>Vívela plena.</span>
              </h1>
              <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"16px", lineHeight:1.75, color:"#6b7c6d", marginBottom:"2rem", maxWidth:"440px" }}>
                Planes de alimentación preparados por chef profesional y nutriólogo certificado. Empacados al vacío con etiqueta nutricional. Entregados en tu puerta cada semana.
              </p>
              <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
                <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"14px 32px", background:"#1a4a2e", color:"#f8faf5", borderRadius:"100px", textDecoration:"none" }}>
                  Ver mis opciones →
                </Link>
                <Link href="/planes" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", padding:"14px 32px", border:"0.5px solid rgba(15,31,18,0.2)", color:"#0f1f12", borderRadius:"100px", textDecoration:"none" }}>
                  Ver planes
                </Link>
              </div>
            </div>

            {/* Visual card stack */}
            <div style={{ position:"relative", height:"420px", display:"flex", alignItems:"center", justifyContent:"center" }}>
              {/* Main card */}
              <div style={{ background:"white", borderRadius:"20px", border:"0.5px solid rgba(15,31,18,0.08)", padding:"1.5rem", width:"300px", boxShadow:"0 20px 60px rgba(15,31,18,0.08)", position:"relative", zIndex:2 }}>
                <div style={{ background:"#f8faf5", borderRadius:"12px", padding:"1rem", marginBottom:"1rem", display:"flex", gap:"12px", alignItems:"center" }}>
                  <div style={{ width:"48px", height:"48px", borderRadius:"12px", background:"linear-gradient(135deg,#2d6b45,#a8d94a)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px" }}>🥗</div>
                  <div>
                    <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"14px", fontWeight:600, color:"#0f1f12" }}>Tu menú esta semana</div>
                    <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#6b7c6d" }}>5 momentos del día · Plan personalizado</div>
                  </div>
                </div>
                {[{m:"Desayuno",cal:"380 kcal",p:"28g",c:"32g",g:"12g"},{m:"Colación AM",cal:"180 kcal",p:"15g",c:"16g",g:"6g"},{m:"Comida",cal:"520 kcal",p:"42g",c:"44g",g:"16g"},{m:"Colación PM",cal:"150 kcal",p:"12g",c:"14g",g:"5g"},{m:"Cena",cal:"420 kcal",p:"35g",c:"28g",g:"14g"}].map(r=>(
                  <div key={r.m} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"0.5px solid rgba(15,31,18,0.06)" }}>
                    <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"#2d3a2e", fontWeight:500 }}>{r.m}</span>
                    <div style={{ display:"flex", gap:"8px" }}>
                      <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#4a9463", background:"rgba(74,148,99,0.1)", padding:"2px 6px", borderRadius:"6px" }}>{r.cal}</span>
                      <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#6b7c6d" }}>P{r.p}</span>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop:"1rem", padding:"10px", background:"#1a4a2e", borderRadius:"10px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"rgba(248,250,245,0.7)" }}>Total del día</span>
                  <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"14px", fontWeight:600, color:"#a8d94a" }}>1,650 kcal</span>
                </div>
              </div>

              {/* Floating badge */}
              <div style={{ position:"absolute", top:"30px", right:"10px", background:"#a8d94a", borderRadius:"12px", padding:"10px 14px", zIndex:3 }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"13px", fontWeight:600, color:"#0f1f12" }}>Chef certificado</div>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#1a4a2e" }}>Cocina industrial</div>
              </div>

              {/* Bottom badge */}
              <div style={{ position:"absolute", bottom:"30px", left:"10px", background:"white", borderRadius:"12px", padding:"10px 14px", border:"0.5px solid rgba(15,31,18,0.08)", zIndex:3 }}>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#6b7c6d", marginBottom:"2px" }}>Próxima entrega</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"13px", fontWeight:600, color:"#1a4a2e" }}>Lunes 7AM 🚴</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:first-of-type>div>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* STATS */}
      <section style={{ background:"#1a4a2e", padding:"3rem 2rem" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"2rem", textAlign:"center" }}>
          {[["Chef profesional","Cocina industrial certificada"],["Nutriólogo","Certificado y disponible"],["5 momentos","Desayuno a cena incluidos"],["100% etiquetado","Macros en cada envase"]].map(([n,s])=>(
            <div key={n}>
              <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.5rem", fontWeight:600, color:"#a8d94a", marginBottom:"4px" }}>{n}</div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"rgba(248,250,245,0.5)", lineHeight:1.5 }}>{s}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(2)>div{grid-template-columns:1fr 1fr!important}}`}</style>
      </section>

      {/* PLANS */}
      <section style={{ padding:"7rem 2rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"0.75rem" }}>Elige tu plan</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em" }}>Nutrición que se adapta<br />a tu vida.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
            {plans.map((p,i)=>(
              <div key={p.num} style={{ background:"white", borderRadius:"20px", border: i===1 ? "2px solid #a8d94a" : "0.5px solid rgba(15,31,18,0.08)", padding:"2rem", position:"relative", display:"flex", flexDirection:"column" }}>
                {i===1 && <div style={{ position:"absolute", top:"-14px", left:"50%", transform:"translateX(-50%)", background:"#a8d94a", color:"#0f1f12", fontFamily:"'DM Sans', sans-serif", fontSize:"11px", fontWeight:500, letterSpacing:"0.08em", padding:"4px 16px", borderRadius:"100px" }}>{p.tag}</div>}
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.12em", textTransform:"uppercase", color:"#6b7c6d", marginBottom:"0.5rem" }}>Plan {p.num}</div>
                <h3 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.15rem", fontWeight:600, color:"#0f1f12", marginBottom:"1rem", lineHeight:1.25 }}>{p.name}</h3>
                <div style={{ display:"flex", alignItems:"baseline", gap:"4px", marginBottom:"1rem" }}>
                  <span style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.8rem", fontWeight:600, color:p.color }}>{p.price}</span>
                  <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"#6b7c6d" }}>{p.unit}</span>
                </div>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", lineHeight:1.7, color:"#6b7c6d", marginBottom:"1rem", flex:1 }}>{p.desc}</p>
                <div style={{ background:"rgba(26,74,46,0.04)", borderRadius:"10px", padding:"10px 14px", marginBottom:"1.5rem" }}>
                  <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#4a9463", marginBottom:"2px" }}>Ideal para</div>
                  <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"#2d3a2e" }}>{p.ideal}</div>
                </div>
                <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", fontWeight:500, padding:"12px 0", background: i===1 ? "#1a4a2e" : "transparent", color: i===1 ? "#f8faf5" : "#1a4a2e", border: i===1 ? "none" : "0.5px solid #1a4a2e", borderRadius:"100px", textDecoration:"none", textAlign:"center" }}>Quiero este plan</Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(3)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* MEDICAL DIETS */}
      <section style={{ padding:"7rem 2rem", background:"#0f1f12" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
            <div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#a8d94a", marginBottom:"1rem" }}>Lo que no existe en GDL</div>
              <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:600, color:"#f8faf5", letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:"1.5rem" }}>Planes diseñados para<br />condiciones médicas reales.</h2>
              <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"rgba(248,250,245,0.5)", marginBottom:"2rem" }}>No es "comida saludable" genérica. Nuestro nutriólogo diseña planes específicos para diabetes, enfermedades cardiovasculares, pérdida de peso médicamente supervisada y alto rendimiento deportivo. Plena lo cocina. Tú lo comes.</p>
              <Link href="/planes" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", fontWeight:500, padding:"12px 28px", background:"#a8d94a", color:"#0f1f12", borderRadius:"100px", textDecoration:"none" }}>Ver planes médicos →</Link>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              {medical.map(m=>(
                <div key={m.title} style={{ background:"rgba(248,250,245,0.04)", border:"0.5px solid rgba(248,250,245,0.08)", borderRadius:"16px", padding:"1.25rem" }}>
                  <div style={{ fontSize:"28px", marginBottom:"0.75rem" }}>{m.icon}</div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"14px", fontWeight:600, color:"#f8faf5", marginBottom:"0.5rem", lineHeight:1.25 }}>{m.title}</div>
                  <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"12px", color:"rgba(248,250,245,0.45)", lineHeight:1.6 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(4)>div>div{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding:"7rem 2rem", background:"#f0f7ea" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"0.75rem" }}>El proceso</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2rem,4vw,2.8rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em" }}>Cuatro pasos para comer<br />bien toda la semana.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0", borderTop:"0.5px solid rgba(15,31,18,0.1)" }}>
            {steps.map((s,i)=>(
              <div key={s.n} style={{ padding:"2rem 1.5rem", borderRight: i<steps.length-1 ? "0.5px solid rgba(15,31,18,0.1)" : "none" }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2.5rem", fontWeight:600, color:"rgba(45,107,69,0.15)", lineHeight:1, marginBottom:"1rem" }}>{s.n}</div>
                <h3 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"15px", fontWeight:600, color:"#0f1f12", marginBottom:"0.75rem" }}>{s.t}</h3>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", lineHeight:1.65, color:"#6b7c6d" }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(5)>div>div:nth-of-type(2){grid-template-columns:1fr 1fr!important}}`}</style>
      </section>

      {/* ADRIANA */}
      <section style={{ padding:"7rem 2rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
          <div style={{ aspectRatio:"4/5", background:"linear-gradient(135deg,#2d6b45,#1a4a2e)", borderRadius:"24px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"5rem", fontWeight:600, color:"rgba(168,217,74,0.3)", lineHeight:1 }}>AB</div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(248,250,245,0.25)", marginTop:"10px" }}>Foto próximamente</div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"1rem" }}>La persona detrás de plena</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2rem,3.5vw,2.8rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em", marginBottom:"1.5rem", lineHeight:1.15 }}>Adriana Burgos</h2>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"#6b7c6d", marginBottom:"1.5rem" }}>Vi el problema todos los días: gente inteligente, ocupada y con ganas de cuidarse, sin tiempo para cocinar ni orientación para hacerlo bien. Plena nació de esa frustración.</p>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"#6b7c6d", marginBottom:"2rem" }}>Cada menú pasa por mi revisión antes de salir. Trabajo directamente con nuestro chef y nutriólogo para que lo que llega a tu puerta sea exactamente lo que prometemos.</p>
            {["Pruebo cada menú antes de que salga al cliente","Coordino personalmente con el equipo de nutriólogos","Estoy disponible para resolver dudas de tu plan"].map(b=>(
              <div key={b} style={{ display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"10px" }}>
                <span style={{ width:"20px", height:"20px", borderRadius:"50%", background:"#a8d94a", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", flexShrink:0, marginTop:"1px" }}>✓</span>
                <span style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", color:"#2d3a2e" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(6)>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding:"7rem 2rem", background:"#f0f7ea" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"3rem", textAlign:"center" }}>Lo que dicen nuestros clientes</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
            {testimonials.map((t,i)=>(
              <div key={i} style={{ background: i===1 ? "#1a4a2e" : "white", borderRadius:"20px", padding:"2rem", border: i===1 ? "none" : "0.5px solid rgba(15,31,18,0.08)" }}>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"4rem", lineHeight:0.75, color: i===1 ? "rgba(168,217,74,0.3)" : "rgba(45,107,69,0.15)", marginBottom:"1rem" }}>"</div>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.7, color: i===1 ? "rgba(248,250,245,0.8)" : "#2d3a2e", marginBottom:"1.5rem" }}>{t.q}</p>
                <div>
                  <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"13px", fontWeight:600, color: i===1 ? "#a8d94a" : "#0f1f12" }}>{t.name}</div>
                  <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", color:"#6b7c6d", marginTop:"2px" }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section:nth-of-type(7)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding:"8rem 2rem", background:"#a8d94a", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(circle at 30% 50%, rgba(15,31,18,0.06),transparent 60%),radial-gradient(circle at 70% 50%, rgba(26,74,46,0.08),transparent 60%)", pointerEvents:"none" }} />
        <div style={{ position:"relative", maxWidth:"600px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(15,31,18,0.5)", marginBottom:"1.5rem" }}>¿Lista para empezar?</div>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2.2rem,5vw,3.5rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"1.2rem" }}>Tu primer semana<br />comienza el lunes.</h2>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"15px", lineHeight:1.75, color:"rgba(15,31,18,0.6)", marginBottom:"2.5rem" }}>Cuéntanos tu objetivo. En menos de 24 horas tienes tu plan listo y tu primer menú cocinándose.</p>
          <Link href="/contacto" style={{ display:"inline-block", fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"16px 44px", background:"#0f1f12", color:"#a8d94a", borderRadius:"100px", textDecoration:"none" }}>
            Quiero empezar esta semana →
          </Link>
        </div>
      </section>
    </>
  );
}
