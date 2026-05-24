"use client";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <>
      <section style={{ paddingTop:"9rem", paddingBottom:"5rem", paddingLeft:"2rem", paddingRight:"2rem", background:"#0f1f12" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"end" }}>
          <div>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#a8d94a", marginBottom:"1.5rem" }}>Quiénes somos</div>
            <h1 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(2.8rem,6vw,4.5rem)", fontWeight:600, color:"#f8faf5", letterSpacing:"-0.02em", lineHeight:1.05, marginBottom:"1.5rem" }}>Plena nació de<br />una frustración real.</h1>
            <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"rgba(248,250,245,0.5)", maxWidth:"440px" }}>Vi a diario cómo la gente que quería cuidarse no podía porque no tenía tiempo, conocimiento o acceso a algo de verdad bueno. Quise hacer algo al respecto.</p>
          </div>
          <div style={{ aspectRatio:"4/5", background:"rgba(168,217,74,0.06)", border:"0.5px solid rgba(168,217,74,0.12)", borderRadius:"24px", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"5rem", fontWeight:600, color:"rgba(168,217,74,0.2)", lineHeight:1 }}>AB</div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(248,250,245,0.15)", marginTop:"12px" }}>Foto próximamente</div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section:first-of-type>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      <section style={{ padding:"7rem 2rem", background:"#f8faf5" }}>
        <div style={{ maxWidth:"720px", margin:"0 auto" }}>
          <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"2rem" }}>La historia</div>
          <p style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"1.25rem", fontStyle:"italic", color:"#2d3a2e", lineHeight:1.7, marginBottom:"1.5rem" }}>"En México hay miles de personas que quieren comer bien. El problema no es la voluntad — es el acceso a algo que de verdad funcione."</p>
          {["Trabajo, compromisos, familia, gym. El tiempo siempre es poco y la comida siempre termina siendo una decisión de emergencia. Vi ese ciclo repetirse en personas que yo conozco, que sí quieren cambiar, pero no tienen un sistema que lo haga fácil.", "Lo que existe en EUA — NutritionByCass, ModifyHealth, TrueFare — resuelve exactamente eso: comida de calidad real, preparada por profesionales, entregada a domicilio, con etiquetado nutricional completo. Nada así existe en Guadalajara.", "Plena es esa respuesta. Chef profesional, cocina industrial certificada, nutriólogo integrado para quienes lo necesitan, y empaque que da orgullo mostrar. No es comida de tupper. Es un sistema de nutrición."].map((p,i)=>(
            <p key={i} style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.8, color:"#6b7c6d", marginBottom:"1.25rem" }}>{p}</p>
          ))}
        </div>
      </section>

      <section style={{ padding:"6rem 2rem", background:"#f0f7ea" }}>
        <div style={{ maxWidth:"1100px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.18em", textTransform:"uppercase", color:"#4a9463", marginBottom:"0.75rem" }}>El equipo</div>
            <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em" }}>Personas reales detrás<br />de cada plato.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1.5rem" }}>
            {[{emoji:"👩‍💼",name:"Adriana Burgos",role:"Fundadora & Directora",desc:"La persona que cuida que todo funcione. Prueba cada menú, coordina con el equipo y está en contacto directo con los clientes."},{emoji:"👨‍🍳",name:"Chef Profesional",role:"Director de cocina",desc:"Cocina industrial certificada. Formación culinaria formal. Cada receta diseñada con criterio nutricional y sabor real."},{emoji:"👩‍⚕️",name:"Nutrióloga Certificada",role:"Directora nutricional",desc:"Especialista en nutrición clínica. Diseña los planes personalizados y supervisa las categorías médicas."}].map(p=>(
              <div key={p.name} style={{ background:"white", borderRadius:"20px", padding:"2rem", border:"0.5px solid rgba(15,31,18,0.08)" }}>
                <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>{p.emoji}</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"15px", fontWeight:600, color:"#0f1f12", marginBottom:"3px" }}>{p.name}</div>
                <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"11px", letterSpacing:"0.08em", textTransform:"uppercase", color:"#4a9463", marginBottom:"0.75rem" }}>{p.role}</div>
                <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"13px", lineHeight:1.65, color:"#6b7c6d" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:768px){section:nth-of-type(3)>div>div:nth-of-type(2){grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <section style={{ padding:"6rem 2rem", background:"#f8faf5", textAlign:"center" }}>
        <div style={{ maxWidth:"540px", margin:"0 auto" }}>
          <h2 style={{ fontFamily:"'Plus Jakarta Sans', sans-serif", fontSize:"2.2rem", fontWeight:600, color:"#0f1f12", letterSpacing:"-0.02em", marginBottom:"1.2rem" }}>¿Empezamos esta semana?</h2>
          <p style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", lineHeight:1.75, color:"#6b7c6d", marginBottom:"2rem" }}>Cuéntanos tu objetivo. En menos de 24 horas tienes tu plan y cotización personalizados.</p>
          <Link href="/contacto" style={{ fontFamily:"'DM Sans', sans-serif", fontSize:"14px", fontWeight:500, padding:"14px 36px", background:"#1a4a2e", color:"#f8faf5", borderRadius:"100px", textDecoration:"none" }}>Quiero empezar →</Link>
        </div>
      </section>
    </>
  );
}
