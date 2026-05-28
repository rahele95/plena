"use client";

const g = {
  night:"#1c2b1e", sage:"#7a9b7e", linen:"#f5f0e8", ivory:"#faf7f2",
  stone:"#c8bfb0", ink2:"#3d3830", ink3:"#7a736a",
  serif:"'Cormorant Garamond',serif", sans:"'DM Sans',system-ui,sans-serif",
};

export default function PitchLuisFer() {
  return (
    <div style={{maxWidth:"680px",margin:"0 auto",padding:"3rem 1.5rem 6rem",background:g.linen,minHeight:"100vh"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4rem"}}>
        <span style={{fontFamily:g.serif,fontSize:"1.2rem",color:g.night,letterSpacing:"-0.02em"}}>Plena</span>
        <span style={{fontFamily:g.sans,fontSize:"11px",color:g.ink3,letterSpacing:"0.12em",textTransform:"uppercase" as const}}>Propuesta confidencial</span>
      </div>

      <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"12px"}}>Para Luis Fernando · NetLab</p>
      <h1 style={{fontFamily:g.serif,fontSize:"clamp(2.2rem,5vw,3.2rem)",fontWeight:400,color:g.night,lineHeight:1.1,letterSpacing:"-0.02em",marginBottom:"1.5rem"}}>
        No un cliente.<br/>El socio tecnológico<br/>del modelo que escala.
      </h1>
      <p style={{fontFamily:g.sans,fontSize:"15px",lineHeight:1.8,color:g.ink3,marginBottom:"3rem",maxWidth:"520px"}}>
        Plena nace en GDL como el primer meal prep médico-nutricional serio de México. La tecnología no es infraestructura — es el canal de ventas y la llave de la replicabilidad.
      </p>

      <hr style={{border:"none",borderTop:`0.5px solid ${g.stone}`,marginBottom:"3rem"}}/>

      <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>El modelo en 3 fases</p>
      <div style={{display:"flex",flexDirection:"column" as const,gap:"10px",marginBottom:"3rem"}}>
        {[
          {n:"01",t:"GDL · Validación",d:"Plataforma de pedidos, CRM, automatizaciones, pagos. El sistema que hace funcionar la operación. Sitio + canal de ventas directo."},
          {n:"02",t:"App propia · Escala",d:"Canal digital nativo. Los clientes ordenan, personalizan y recompran desde la app. Aquí es donde Luis Fer captura el 4% por pedido digital."},
          {n:"03",t:"Franquicia LATAM",d:"El modelo empaquetado como franquicia tecnológica. Monterrey, CDMX, Puebla y más allá. Tú tienes el 50% de la IP food-tech."},
        ].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:"16px",background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"4px",padding:"1.25rem"}}>
            <span style={{fontFamily:g.serif,fontSize:"1.4rem",color:g.stone,minWidth:"28px",lineHeight:1}}>{item.n}</span>
            <div>
              <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"4px"}}>{item.t}</p>
              <p style={{fontFamily:g.sans,fontSize:"14px",color:g.ink2,margin:0,lineHeight:1.6}}>{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <hr style={{border:"none",borderTop:`0.5px solid ${g.stone}`,marginBottom:"3rem"}}/>

      <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>Tu compensación</p>
      <div style={{display:"flex",flexDirection:"column" as const,gap:"10px",marginBottom:"3rem"}}>
        {[
          {label:"Setup plataforma inicial",      value:"$30,000 MXN · al firmar"},
          {label:"Retainer mensual",              value:"$10,000 MXN / mes · desde mes 3"},
          {label:"Fee pedidos canal digital",     value:"4% por pedido · desde app (Fase 2)"},
          {label:"Setup por ciudad franquiciada", value:"$30,000 + $5,000/mes por ciudad"},
          {label:"Copropiedad IP food-tech LATAM",value:"50/50 · exclusividad de categoría"},
        ].map((item,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"4px",padding:"1rem 1.25rem",gap:"16px",flexWrap:"wrap" as const}}>
            <p style={{fontFamily:g.sans,fontSize:"14px",color:g.ink2,margin:0}}>{item.label}</p>
            <p style={{fontFamily:g.sans,fontSize:"13px",color:g.sage,margin:0,whiteSpace:"nowrap" as const}}>{item.value}</p>
          </div>
        ))}
      </div>

      <div style={{background:g.night,borderRadius:"6px",padding:"2rem",marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:"rgba(168,196,160,0.7)",marginBottom:"1rem"}}>La proyección real</p>
        <p style={{fontFamily:g.serif,fontSize:"clamp(1.4rem,2.5vw,1.8rem)",color:"#f5f0e8",lineHeight:1.3,marginBottom:"8px"}}>
          App activa + 5 ciudades = $200k–350k MXN / mes en royalties
        </p>
        <p style={{fontFamily:g.sans,fontSize:"13px",color:"rgba(248,250,245,0.5)",margin:0,lineHeight:1.7}}>
          El retainer no es el negocio. El negocio es la app que vende sola y el sistema que se replica. Cada ciudad que abre es ingreso recurrente para NetLab sin trabajo marginal adicional.
        </p>
      </div>

      <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>El referente que seguimos</p>
      <div style={{background:"white",border:`0.5px solid ${g.stone}`,borderRadius:"6px",padding:"1.25rem",marginBottom:"3rem"}}>
        <p style={{fontFamily:g.sans,fontSize:"13px",color:g.ink2,lineHeight:1.7,margin:0}}>
          NutritionByCass en EUA vende a través de app propia, con etiquetas por porción y una comunidad de clientes recurrentes. Ese es el modelo. Luis Fer construye el equivalente mexicano con exclusividad de categoría food-tech LATAM.
        </p>
      </div>

      <p style={{fontFamily:g.sans,fontSize:"11px",letterSpacing:"0.16em",textTransform:"uppercase" as const,color:g.sage,marginBottom:"1rem"}}>El siguiente paso</p>
      <p style={{fontFamily:g.sans,fontSize:"15px",lineHeight:1.8,color:g.ink2,marginBottom:"1.5rem"}}>
        Una sesión de scoping técnico para mapear el stack, las integraciones necesarias y el roadmap de desarrollo. Sin propuesta formal hasta que los dos tengamos claro el alcance.
      </p>
      <div style={{padding:"1rem",background:g.ivory,border:`0.5px solid ${g.stone}`,borderRadius:"4px"}}>
        <p style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,margin:0,lineHeight:1.7}}>
          El acuerdo de copropiedad IP y la exclusividad food-tech LATAM se formaliza en contrato antes de revelar arquitectura o datos de operación.
        </p>
      </div>
    </div>
  );
}
