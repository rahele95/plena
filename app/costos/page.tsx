"use client";
import { useState } from "react";

const ACCESS_CODE = "plena-costos-24";

const g = {
  night:"#1c2b1e",sage:"#7a9b7e",sageL:"#a8c4a0",linen:"#f5f0e8",
  ivory:"#faf7f2",stone:"#c8bfb0",ink2:"#3d3830",ink3:"#7a736a",
  red:"#c4503a",amber:"#bf8a1a",green:"#1D9E75",
  serif:"'Cormorant Garamond',serif",sans:"'DM Sans',system-ui,sans-serif",
};

const label = (txt:string) => (
  <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
    textTransform:"uppercase" as const,color:g.ink3,display:"block",marginBottom:"5px"}}>{txt}</span>
);

function Slider({name,min,max,step=1,value,onChange,prefix="$",suffix=""}:{
  name:string;min:number;max:number;step?:number;value:number;
  onChange:(v:number)=>void;prefix?:string;suffix?:string;
}){
  return(
    <div style={{marginBottom:"14px"}}>
      {label(name)}
      <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e=>onChange(Number(e.target.value))}
          style={{flex:1,accentColor:g.sage,height:"3px"}}/>
        <span style={{fontFamily:g.sans,fontSize:"13px",color:g.night,
          minWidth:"64px",textAlign:"right" as const,fontWeight:500}}>
          {prefix}{value.toLocaleString()}{suffix}
        </span>
      </div>
    </div>
  );
}

function Stat({label:lbl,value,color=g.night,small=false}:{
  label:string;value:string;color?:string;small?:boolean;
}){
  return(
    <div style={{background:"white",border:`0.5px solid ${g.stone}`,
      borderRadius:"6px",padding:small?"10px 14px":"14px 16px"}}>
      <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.12em",
        textTransform:"uppercase" as const,color:g.ink3,marginBottom:"4px"}}>{lbl}</p>
      <p style={{fontFamily:g.serif,fontSize:small?"1.1rem":"1.4rem",
        color,fontWeight:400,lineHeight:1.1}}>{value}</p>
    </div>
  );
}

// ── Diagrama de flujo de costos (SVG inline) ──────────────────────────────────
function DiagramaFlujo({ing,chef,empaque,cocina,logistica,precio}:{
  ing:number;chef:number;empaque:number;cocina:number;logistica:number;precio:number;
}){
  const costo = ing+chef+empaque+cocina+logistica;
  const margen = precio - costo;
  const pct = Math.max(0,Math.round((margen/precio)*100));
  const w = 620; const h = 200;
  const items = [
    {label:"Ingredientes",val:ing,color:"#7a9b7e"},
    {label:"Chef",val:chef,color:"#a8c4a0"},
    {label:"Empaque",val:empaque,color:"#c8bfb0"},
    {label:"Cocina",val:cocina,color:"#9e9385"},
    {label:"Logística",val:logistica,color:"#7a736a"},
  ];
  // stacked bar
  let acc = 0;
  const bars = items.map(it=>{
    const x = 20 + (acc/precio)*(w-40);
    const bw = (it.val/precio)*(w-40);
    acc += it.val;
    return {...it, x, bw};
  });
  const margenX = 20+(costo/precio)*(w-40);
  const margenW = (margen/precio)*(w-40);

  return(
    <div style={{margin:"24px 0"}}>
      <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
        textTransform:"uppercase" as const,color:g.ink3,marginBottom:"10px"}}>
        Diagrama de flujo de costos · precio de venta = ${precio} MXN
      </p>
      <svg viewBox={`0 0 ${w} ${h}`} style={{width:"100%",borderRadius:"6px",overflow:"visible"}}>
        {/* Barras de costo */}
        {bars.map((b,i)=>(
          <g key={i}>
            <rect x={b.x} y={40} width={Math.max(b.bw-2,0)} height={40}
              fill={b.color} rx={i===0?4:0}/>
            {b.bw>32&&(
              <text x={b.x+b.bw/2} y={64} textAnchor="middle"
                fontFamily={g.sans} fontSize="10" fill="white">
                ${b.val}
              </text>
            )}
          </g>
        ))}
        {/* Barra de margen */}
        {margenW>0&&(
          <rect x={margenX} y={40} width={Math.max(margenW-2,0)} height={40}
            fill={margen>0?"#1D9E75":"#c4503a"} rx={0}
            style={{rx:"0 4px 4px 0"}}/>
        )}
        {margenW>40&&(
          <text x={margenX+margenW/2} y={64} textAnchor="middle"
            fontFamily={g.sans} fontSize="10" fill="white">
            {pct}%
          </text>
        )}
        {/* Etiquetas debajo */}
        {bars.map((b,i)=>(
          b.bw>24&&(
            <text key={i} x={b.x+b.bw/2} y={100} textAnchor="middle"
              fontFamily={g.sans} fontSize="9" fill={g.ink3}>
              {b.label}
            </text>
          )
        ))}
        {margenW>30&&(
          <text x={margenX+margenW/2} y={100} textAnchor="middle"
            fontFamily={g.sans} fontSize="9" fill={g.green}>Margen</text>
        )}
        {/* Línea precio total */}
        <line x1={20} y1={118} x2={w-20} y2={118} stroke={g.stone} strokeWidth="0.5"/>
        <text x={20} y={134} fontFamily={g.sans} fontSize="10" fill={g.ink3}>$0</text>
        <text x={w-20} y={134} textAnchor="end" fontFamily={g.sans} fontSize="10" fill={g.ink3}>
          ${precio} MXN
        </text>
        <text x={margenX} y={134} fontFamily={g.sans} fontSize="10" fill={g.green}>
          ${costo}
        </text>
        {/* leyenda */}
        <text x={20} y={160} fontFamily={g.sans} fontSize="10" fill={g.ink3}>
          Costo total: ${costo} MXN · Margen: ${margen} MXN ({pct}%)
        </text>
      </svg>
    </div>
  );
}

// ── Diagrama fases (SVG) ──────────────────────────────────────────────────────
function DiagramaFases({semana,mes}:{semana:number;mes:number}){
  const fases = [
    {n:"F00",label:"Fundamentos",sub:"Esta semana",color:"#EF9F27",done:true},
    {n:"F01",label:"Socios",sub:"Sem 1–3",color:g.sage,done:false},
    {n:"F02",label:"Infra",sub:"Sem 3–4",color:"#7F77DD",done:false},
    {n:"F03",label:"3 Beta",sub:`Mes 2 · Meta: $${mes.toLocaleString()}/mes`,color:g.green,done:false},
  ];
  const W=620; const cx=(i:number)=>70+i*160;
  return(
    <div style={{margin:"24px 0"}}>
      <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
        textTransform:"uppercase" as const,color:g.ink3,marginBottom:"10px"}}>
        Fases del proyecto · proyección a 3 clientes beta
      </p>
      <svg viewBox={`0 0 ${W} 120`} style={{width:"100%"}}>
        {fases.map((_,i)=>i<3&&(
          <line key={i} x1={cx(i)+36} y1={40} x2={cx(i+1)-36} y2={40}
            stroke={g.stone} strokeWidth="1" strokeDasharray="4 3"/>
        ))}
        {fases.map((f,i)=>(
          <g key={i}>
            <circle cx={cx(i)} cy={40} r={30}
              fill={f.done?"white":g.linen}
              stroke={f.color} strokeWidth={f.done?2:1}/>
            <text x={cx(i)} y={36} textAnchor="middle"
              fontFamily={g.sans} fontSize="9" fill={f.color} fontWeight="600">{f.n}</text>
            <text x={cx(i)} y={48} textAnchor="middle"
              fontFamily={g.sans} fontSize="8" fill={g.ink3}>{f.label}</text>
            <text x={cx(i)} y={82} textAnchor="middle"
              fontFamily={g.sans} fontSize="9" fill={g.ink3}>{f.sub}</text>
          </g>
        ))}
        <text x={W/2} y={110} textAnchor="middle"
          fontFamily={g.sans} fontSize="9" fill={g.ink3}>
          Proyección semanal: ${semana.toLocaleString()} MXN · Mensual: ${mes.toLocaleString()} MXN
        </text>
      </svg>
    </div>
  );
}

export default function Costos(){
  const [auth,setAuth]=useState(false);
  const [input,setInput]=useState("");
  const [error,setError]=useState(false);
  const [plan,setPlan]=useState<"estandar"|"medico"|"kids">("estandar");

  const defaults:{[k:string]:{ing:number;chef:number;empaque:number;cocina:number;logistica:number;precio:number}}={
    estandar:{ing:55,chef:10,empaque:10,cocina:30,logistica:12,precio:200},
    medico:  {ing:75,chef:14,empaque:12,cocina:30,logistica:12,precio:300},
    kids:    {ing:40,chef:8, empaque:8, cocina:30,logistica:12,precio:140},
  };

  const [ing,    setIng]    = useState(defaults.estandar.ing);
  const [chef,   setChef]   = useState(defaults.estandar.chef);
  const [empaque,setEmpaque]= useState(defaults.estandar.empaque);
  const [cocina, setCocina] = useState(defaults.estandar.cocina);
  const [logistica,setLogistica]=useState(defaults.estandar.logistica);
  const [precio, setPrecio] = useState(defaults.estandar.precio);
  const [comidas,setComidas]= useState(10);
  const [clientes,setClientes]=useState(3);

  const costo = ing+chef+empaque+cocina+logistica;
  const margen = precio - costo;
  const pct = precio>0 ? Math.round((margen/precio)*100) : 0;
  const ingresoSem = precio * comidas * clientes;
  const costoSem   = costo  * comidas * clientes;
  const utilidadSem= margen * comidas * clientes;
  const utilidadMes= utilidadSem * 4;

  const cambiarPlan = (p:"estandar"|"medico"|"kids")=>{
    setPlan(p);
    const d=defaults[p];
    setIng(d.ing); setChef(d.chef); setEmpaque(d.empaque);
    setCocina(d.cocina); setLogistica(d.logistica); setPrecio(d.precio);
  };

  const estadoMargen = pct>=50?"✅ Saludable":pct>=35?"⚠️ Ajustado":"🔴 Riesgo";
  const colorMargen  = pct>=50?g.green:pct>=35?g.amber:g.red;

  if(!auth){
    return(
      <div style={{minHeight:"100vh",background:g.linen,display:"flex",
        alignItems:"center",justifyContent:"center",padding:"2rem"}}>
        <div style={{maxWidth:"380px",width:"100%",textAlign:"center" as const}}>
          <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.18em",
            textTransform:"uppercase" as const,color:g.sage,marginBottom:"24px"}}>
            Acceso restringido
          </p>
          <p style={{fontFamily:g.serif,fontSize:"1.8rem",color:g.night,
            marginBottom:"8px",fontWeight:400}}>Plena · Costos</p>
          <p style={{fontFamily:g.sans,fontSize:"14px",color:g.ink3,
            marginBottom:"32px",lineHeight:1.7}}>
            Herramienta interna de costeo. Solo para equipo Plena.
          </p>
          <input type="password" placeholder="Código de acceso" value={input}
            onChange={e=>{setInput(e.target.value);setError(false);}}
            onKeyDown={e=>{if(e.key==="Enter"){if(input===ACCESS_CODE)setAuth(true);else setError(true);}}}
            style={{width:"100%",padding:"12px 16px",borderRadius:"4px",fontFamily:g.sans,
              fontSize:"14px",border:`0.5px solid ${error?"#c4503a":g.stone}`,
              background:g.ivory,outline:"none",marginBottom:"8px",boxSizing:"border-box" as const}}/>
          {error&&<p style={{fontFamily:g.sans,fontSize:"12px",color:g.red,marginBottom:"12px"}}>
            Código incorrecto
          </p>}
          <button onClick={()=>{if(input===ACCESS_CODE)setAuth(true);else setError(true);}}
            style={{width:"100%",padding:"12px",background:g.night,color:g.linen,
              border:"none",borderRadius:"4px",fontFamily:g.sans,fontSize:"13px",
              cursor:"pointer",letterSpacing:"0.06em"}}>
            Ingresar
          </button>
        </div>
      </div>
    );
  }

  return(
    <div style={{background:g.linen,minHeight:"100vh"}}>
      <div style={{maxWidth:"860px",margin:"0 auto",padding:"3rem 1.5rem 6rem"}}>

        {/* Header */}
        <div style={{marginBottom:"2.5rem",paddingBottom:"2rem",
          borderBottom:`0.5px solid ${g.stone}`}}>
          <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.18em",
            textTransform:"uppercase" as const,color:g.sage,display:"block",marginBottom:"8px"}}>
            Capa 3 · Operativa · Confidencial
          </span>
          <h1 style={{fontFamily:g.serif,fontSize:"clamp(1.8rem,4vw,2.4rem)",
            fontWeight:400,color:g.night,letterSpacing:"-0.02em",marginBottom:"8px"}}>
            Calculadora de costos
          </h1>
          <p style={{fontFamily:g.sans,fontSize:"14px",color:g.ink3,lineHeight:1.7,maxWidth:"520px"}}>
            Herramienta para costear recetas y validar márgenes por plan. 
            Los valores por defecto son estimados — ajustar con Alan en la sesión de costeo real.
          </p>
        </div>

        {/* Selector de plan */}
        <div style={{marginBottom:"2rem"}}>
          <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
            textTransform:"uppercase" as const,color:g.ink3,display:"block",marginBottom:"10px"}}>
            Selecciona el plan a costear
          </span>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap" as const}}>
            {([
              {k:"estandar",l:"Semanal estándar","precio":"$180–220 MXN"},
              {k:"medico",  l:"Médico personalizado","precio":"$250–350 MXN"},
              {k:"kids",    l:"Lunch Kids","precio":"$120–160 MXN"},
            ] as const).map(p=>(
              <button key={p.k} onClick={()=>cambiarPlan(p.k)}
                style={{padding:"8px 16px",borderRadius:"4px",fontFamily:g.sans,fontSize:"13px",
                  cursor:"pointer",border:`0.5px solid ${plan===p.k?g.night:g.stone}`,
                  background:plan===p.k?g.night:g.ivory,
                  color:plan===p.k?g.linen:g.ink3}}>
                {p.l} · {p.precio}
              </button>
            ))}
          </div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"2rem"}}>

          {/* Columna izquierda: sliders */}
          <div>
            <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
              textTransform:"uppercase" as const,color:g.sage,display:"block",marginBottom:"14px"}}>
              Estructura de costos · por comida
            </span>
            <div style={{background:"white",border:`0.5px solid ${g.stone}`,
              borderRadius:"6px",padding:"1.25rem"}}>
              <Slider name="Ingredientes" min={20} max={120} value={ing} onChange={setIng}/>
              <Slider name="Chef (Alan)" min={5} max={40} value={chef} onChange={setChef}/>
              <Slider name="Empaque al vacío" min={5} max={25} value={empaque} onChange={setEmpaque}/>
              <Slider name="Cocina (Rafael / comisión)" min={20} max={50} value={cocina} onChange={setCocina}/>
              <Slider name="Logística / delivery" min={5} max={40} value={logistica} onChange={setLogistica}/>
              <div style={{borderTop:`0.5px solid ${g.stone}`,paddingTop:"12px",marginTop:"4px"}}>
                <Slider name="Precio de venta" min={100} max={400} step={5} value={precio} onChange={setPrecio}/>
              </div>
            </div>

            <div style={{marginTop:"16px"}}>
              <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
                textTransform:"uppercase" as const,color:g.sage,display:"block",marginBottom:"14px"}}>
                Proyección de volumen
              </span>
              <div style={{background:"white",border:`0.5px solid ${g.stone}`,
                borderRadius:"6px",padding:"1.25rem"}}>
                <Slider name="Comidas por cliente / semana" min={3} max={21} value={comidas} onChange={setComidas} prefix=""/>
                <Slider name="Clientes activos" min={1} max={150} value={clientes} onChange={setClientes} prefix=""/>
              </div>
            </div>
          </div>

          {/* Columna derecha: resultados */}
          <div>
            <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
              textTransform:"uppercase" as const,color:g.sage,display:"block",marginBottom:"14px"}}>
              Resultados
            </span>

            {/* Margen hero */}
            <div style={{background:g.night,borderRadius:"6px",padding:"1.5rem",marginBottom:"12px"}}>
              <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
                textTransform:"uppercase" as const,color:"rgba(168,196,160,0.7)",marginBottom:"6px"}}>
                Margen por comida
              </p>
              <p style={{fontFamily:g.serif,fontSize:"2.4rem",
                color:pct>=50?g.sageL:pct>=35?"#EF9F27":"#E24B4A",
                lineHeight:1,marginBottom:"4px"}}>
                {pct}%
              </p>
              <p style={{fontFamily:g.sans,fontSize:"12px",
                color:"rgba(248,250,245,0.45)",lineHeight:1.5}}>
                ${margen} MXN por comida · {estadoMargen}
              </p>
            </div>

            {/* Stats grid */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"8px",marginBottom:"12px"}}>
              <Stat label="Costo total / comida" value={`$${costo} MXN`}/>
              <Stat label="Precio de venta" value={`$${precio} MXN`} color={g.night}/>
              <Stat label="Ingreso semanal" value={`$${ingresoSem.toLocaleString()}`} small/>
              <Stat label="Costo semanal" value={`$${costoSem.toLocaleString()}`} small/>
            </div>

            {/* Utilidad */}
            <div style={{background:"white",border:`1px solid ${colorMargen}40`,
              borderRadius:"6px",padding:"1.25rem"}}>
              <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.12em",
                textTransform:"uppercase" as const,color:g.ink3,marginBottom:"8px"}}>
                Utilidad neta proyectada
              </p>
              <div style={{display:"flex",justifyContent:"space-between",
                padding:"8px 0",borderBottom:`0.5px solid ${g.stone}`}}>
                <span style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3}}>Semanal ({clientes} clientes)</span>
                <span style={{fontFamily:g.sans,fontSize:"14px",color:colorMargen,fontWeight:500}}>
                  ${utilidadSem.toLocaleString()} MXN
                </span>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"8px 0"}}>
                <span style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3}}>Mensual estimado</span>
                <span style={{fontFamily:g.serif,fontSize:"1.3rem",color:colorMargen}}>
                  ${utilidadMes.toLocaleString()} MXN
                </span>
              </div>
            </div>

            {/* Desglose comisiones */}
            <div style={{background:g.ivory,border:`0.5px solid ${g.stone}`,
              borderRadius:"6px",padding:"1.25rem",marginTop:"12px"}}>
              <p style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.12em",
                textTransform:"uppercase" as const,color:g.ink3,marginBottom:"8px"}}>
                Desglose por socio · semanal
              </p>
              {[
                {nombre:"Rafael (cocina)",val:cocina*comidas*clientes},
                {nombre:"Alan (chef)",    val:chef*comidas*clientes},
                {nombre:"Logística",      val:logistica*comidas*clientes},
              ].map(s=>(
                <div key={s.nombre} style={{display:"flex",justifyContent:"space-between",
                  padding:"5px 0",borderBottom:`0.5px solid ${g.stone}30`}}>
                  <span style={{fontFamily:g.sans,fontSize:"12px",color:g.ink3}}>{s.nombre}</span>
                  <span style={{fontFamily:g.sans,fontSize:"12px",color:g.ink2,fontWeight:500}}>
                    ${s.val.toLocaleString()} MXN
                  </span>
                </div>
              ))}
              <div style={{display:"flex",justifyContent:"space-between",paddingTop:"8px"}}>
                <span style={{fontFamily:g.sans,fontSize:"11px",color:g.ink3}}>
                  Alan · 8% utilidad neta
                </span>
                <span style={{fontFamily:g.sans,fontSize:"12px",color:g.green,fontWeight:500}}>
                  ${Math.round(utilidadSem*0.08).toLocaleString()} MXN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Diagrama de flujo */}
        <div style={{background:"white",border:`0.5px solid ${g.stone}`,
          borderRadius:"6px",padding:"1.5rem",marginBottom:"2rem"}}>
          <DiagramaFlujo ing={ing} chef={chef} empaque={empaque}
            cocina={cocina} logistica={logistica} precio={precio}/>
        </div>

        {/* Diagrama de fases */}
        <div style={{background:"white",border:`0.5px solid ${g.stone}`,
          borderRadius:"6px",padding:"1.5rem",marginBottom:"2rem"}}>
          <DiagramaFases semana={ingresoSem} mes={ingresoSem*4}/>
        </div>

        {/* Tabla de escenarios */}
        <div style={{background:"white",border:`0.5px solid ${g.stone}`,
          borderRadius:"6px",padding:"1.5rem",marginBottom:"2rem"}}>
          <span style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.14em",
            textTransform:"uppercase" as const,color:g.sage,display:"block",marginBottom:"14px"}}>
            Tabla de escenarios · plan {plan}
          </span>
          <table style={{width:"100%",borderCollapse:"collapse" as const}}>
            <thead>
              <tr style={{borderBottom:`0.5px solid ${g.stone}`}}>
                {["Clientes","Comidas/sem","Ingreso","Costo","Utilidad","Margen"].map(h=>(
                  <th key={h} style={{fontFamily:g.sans,fontSize:"10px",letterSpacing:"0.1em",
                    textTransform:"uppercase" as const,color:g.ink3,padding:"8px",
                    textAlign:"left" as const,fontWeight:400}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[3,10,25,50,100,150].map(cl=>{
                const ing_s = precio*comidas*cl;
                const cost_s = costo*comidas*cl;
                const util_s = margen*comidas*cl;
                const isActive = cl===clientes;
                return(
                  <tr key={cl} style={{background:isActive?`${g.sage}12`:"transparent",
                    borderBottom:`0.5px solid ${g.stone}30`}}>
                    <td style={{fontFamily:g.sans,fontSize:"13px",color:isActive?g.night:g.ink2,
                      padding:"8px",fontWeight:isActive?500:400}}>{cl}</td>
                    <td style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,padding:"8px"}}>
                      {comidas*cl}
                    </td>
                    <td style={{fontFamily:g.sans,fontSize:"13px",color:g.ink2,padding:"8px"}}>
                      ${ing_s.toLocaleString()}
                    </td>
                    <td style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,padding:"8px"}}>
                      ${cost_s.toLocaleString()}
                    </td>
                    <td style={{fontFamily:g.sans,fontSize:"13px",
                      color:util_s>0?g.green:g.red,padding:"8px",fontWeight:500}}>
                      ${util_s.toLocaleString()}
                    </td>
                    <td style={{fontFamily:g.sans,fontSize:"13px",color:g.ink3,padding:"8px"}}>
                      {pct}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Notas de validación */}
        <div style={{padding:"1rem 1.25rem",background:g.ivory,
          border:`0.5px solid ${g.stone}`,borderRadius:"4px"}}>
          <p style={{fontFamily:g.sans,fontSize:"11px",color:g.ink3,lineHeight:1.8}}>
            ⚠️ <strong>Importante:</strong> Los valores por defecto son estimados preliminares. 
            Deben validarse con Alan en la sesión de costeo real (Etapa 0) y con el proveedor 
            de empaque al vacío. Los costos de logística son un promedio — varían por zona y volumen.<br/>
            Los costos de Rafael (cocina) asumen $30 MXN/pedido en Fase 1. 
            A 150+ pedidos/semana se renegocia. El % de utilidad de Alan (8%) se aplica sobre 
            utilidad neta después de todos los costos.
          </p>
        </div>

        <p style={{fontFamily:g.sans,fontSize:"11px",color:g.ink3,
          textAlign:"center" as const,marginTop:"3rem",lineHeight:1.7}}>
          Herramienta confidencial · Plena · Capa 3<br/>
          Cambios → Anexo de cambios Capa 3 en Notion
        </p>
      </div>
    </div>
  );
}
