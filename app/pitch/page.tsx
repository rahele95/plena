"use client";
import Link from "next/link";

const g = {
  night:"#1c2b1e", sage:"#7a9b7e", sageL:"#a8c4a0", linen:"#f5f0e8",
  ivory:"#faf7f2", stone:"#c8bfb0", ink2:"#3d3830", ink3:"#7a736a",
  serif:"'Cormorant Garamond',serif", sans:"'DM Sans',system-ui,sans-serif",
};

export default function PitchIndex() {
  return (
    <div style={{background:g.linen,minHeight:"100vh"}}>
    <div style={{maxWidth:"700px",margin:"0 auto",padding:"4rem 1.5rem 6rem"}}>

      {/* Header */}
      <div style={{marginBottom:"4rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.18em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"16px"}}>Capa 4 · Pitches y socios</p>
        <h1 style={{fontFamily:g.serif,fontSize:"clamp(2rem,5vw,3rem)",fontWeight:400,color:g.night,lineHeight:1.05,letterSpacing:"-0.02em",marginBottom:"1.5rem"}}>
          Nutrición con propósito.<br/>Hecho diferente.
        </h1>
        <p style={{fontFamily:g.sans,fontSize:"15px",lineHeight:1.85,color:g.ink3,maxWidth:"520px"}}>
          Plena es el primer servicio de meal prep médico-nutricional de Guadalajara. Comida preparada con etiqueta nutricional completa, planes por condición de salud, chef certificado y nutriólogo integrado. Empacado al vacío. Entregado a tu puerta.
        </p>
      </div>

      <hr style={{border:"none",borderTop:`0.5px solid ${g.stone}`,marginBottom:"3rem"}}/>

      {/* El problema */}
      <div style={{marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>El problema</p>
        <div style={{display:"flex",flexDirection:"column" as const,gap:"8px"}}>
          {[
            "GDL no tiene un solo servicio de meal prep con etiqueta nutricional real en cada envase.",
            "Las personas con diabetes, problemas cardiovasculares o metas de salud no tienen dónde comer bien sin cocinar.",
            "Las mamás que quieren mandar lunch saludable a sus hijos no tienen una opción de calidad verificable.",
            "Los servicios existentes son informales, sin respaldo clínico, sin trazabilidad nutricional.",
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:"12px",alignItems:"flex-start"}}>
              <span style={{color:g.sage,fontFamily:g.sans,fontSize:"14px",lineHeight:"1.8",flexShrink:0}}>—</span>
              <p style={{fontFamily:g.sans,fontSize:"14px",lineHeight:1.8,color:g.ink2,margin:0}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* La solución */}
      <div style={{marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>La solución</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
          {[
            {icon:"🥗", t:"Comida preparada",      d:"Chef profesional en cocina industrial certificada."},
            {icon:"🏷️", t:"Etiqueta nutricional",  d:"Calorías, macros e ingredientes en cada envase."},
            {icon:"🩺", t:"Planes por condición",   d:"Diabetes, cardiovascular, control de peso, bienestar general."},
            {icon:"🧴", t:"Suplementación",         d:"Plan de suplementos basado en análisis de sangre del cliente."},
            {icon:"📦", t:"Empaque al vacío",       d:"Vida útil extendida, higiene certificada, presentación premium."},
            {icon:"🚗", t:"Entrega a domicilio",    d:"GDL y zona metropolitana. Semanal o según plan."},
          ].map((item,i)=>(
            <div key={i} style={{background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"6px",padding:"1rem"}}>
              <p style={{fontSize:"18px",marginBottom:"4px"}}>{item.icon}</p>
              <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"4px"}}>{item.t}</p>
              <p style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,lineHeight:1.6,margin:0}}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Por qué ahora */}
      <div style={{background:g.night,borderRadius:"6px",padding:"2rem",marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:"rgba(168,196,160,0.6)",marginBottom:"1rem"}}>Por qué ahora · por qué GDL</p>
        <p style={{fontFamily:g.serif,fontSize:"clamp(1.3rem,2.5vw,1.7rem)",color:"#f5f0e8",lineHeight:1.3,marginBottom:"12px"}}>
          El mercado está listo. La competencia es informal. Nadie ha llegado primero con el estándar correcto.
        </p>
        <div style={{display:"flex",flexDirection:"column" as const,gap:"6px"}}>
          {[
            "5M de personas en GDL. Mercado no atendido con rigor médico.",
            "Competidores locales sin etiqueta nutricional, sin empaque al vacío, sin respaldo clínico.",
            "ModifyHealth (EUA) factura millones con este modelo. México está virgen.",
            "Nombre neutro. Visión de franquicia. Esto no se queda en GDL.",
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start"}}>
              <span style={{color:g.sageL,flexShrink:0,lineHeight:"1.7",fontSize:"14px"}}>→</span>
              <p style={{fontFamily:g.sans,fontSize:"13px",color:"rgba(248,250,245,0.6)",lineHeight:1.7,margin:0}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Planes */}
      <div style={{marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>Planes</p>
        <div style={{background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"6px",overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse" as const}}>
            <thead>
              <tr style={{borderBottom:`0.5px solid ${g.stone}`,background:g.ivory}}>
                {["Plan","Descripción","Precio/comida"].map(h=>(
                  <th key={h} style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase" as const,color:g.ink3,padding:"10px 14px",textAlign:"left" as const,fontWeight:400}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Semanal estándar","Comida semanal con etiqueta nutricional completa","$180–220 MXN"],
                ["Médico personalizado","Por condición: diabetes, cardiovascular, control de peso","$250–350 MXN"],
                ["Lunch Kids","Almuerzo escolar saludable con control nutricional","$120–160 MXN"],
                ["Suplementación","Plan mensual con análisis de sangre. Revenue stream activo desde Mes 2","$TBD con nutriólogo"],
              ].map(([plan,desc,precio],i)=>(
                <tr key={i} style={{borderBottom:`0.5px solid ${g.stone}20`}}>
                  <td style={{fontFamily:g.sans,fontSize:"13px",color:g.night,padding:"10px 14px",fontWeight:500}}>{plan}</td>
                  <td style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,padding:"10px 14px",lineHeight:1.5}}>{desc}</td>
                  <td style={{fontFamily:g.sans,fontSize:"13px",color:g.sage,padding:"10px 14px",whiteSpace:"nowrap" as const}}>{precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{fontFamily:g.sans,fontSize:"12px",color:g.ink3,marginTop:"8px"}}>
          Sin descuentos bajo ningún concepto. El precio es la promesa de calidad.
        </p>
      </div>

      {/* Socios */}
      <div style={{marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>¿Cómo participar?</p>
        <div style={{display:"flex",flexDirection:"column" as const,gap:"8px"}}>
          {[
            {rol:"Cocina certificada",  desc:"Espacio + equipo. Comisión por pedido. Sin inversión ni riesgo.", link:"/pitch/rafael"},
            {rol:"Socio operativo · Chef", desc:"Desarrolla las recetas. Gana desde el primer plan vendido. Crece con el modelo.", link:"/pitch/alan"},
            {rol:"Socio tecnológico",   desc:"Infraestructura digital + app + franquicia. IP compartida LATAM.", link:"/pitch/luisfer"},
          ].map((item,i)=>(
            <Link key={i} href={item.link} style={{textDecoration:"none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"4px",padding:"1rem 1.25rem",cursor:"pointer",gap:"12px",flexWrap:"wrap" as const}}>
                <div>
                  <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"2px"}}>{item.rol}</p>
                  <p style={{fontFamily:g.sans,fontSize:"13px",color:g.ink2,margin:0,lineHeight:1.6}}>{item.desc}</p>
                </div>
                <span style={{fontFamily:g.sans,fontSize:"12px",color:g.sage,flexShrink:0}}>Ver propuesta →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{padding:"1.5rem",background:g.ivory,border:`0.5px solid ${g.stone}`,borderRadius:"6px",textAlign:"center" as const}}>
        <p style={{fontFamily:g.serif,fontSize:"1.1rem",color:g.night,marginBottom:"6px"}}>Plena · Nutrición con propósito</p>
        <p style={{fontFamily:g.sans,fontSize:"12px",color:g.ink3,lineHeight:1.7,margin:0}}>
          Guadalajara, México · Pre-lanzamiento · Documento confidencial
        </p>
      </div>

    </div>
    </div>
  );
}
