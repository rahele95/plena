"use client";
import { useState, useMemo } from "react";

const ACCESS = "plena-costos-24";

const G = {
  night:"#1c2b1e", sage:"#7a9b7e", sageL:"#a8c4a0", linen:"#f5f0e8",
  ivory:"#faf7f2", stone:"#c8bfb0", ink2:"#3d3830", ink3:"#7a736a",
  red:"#c4503a", amber:"#bf8a1a", green:"#1D9E75",
  serif:"'Cormorant Garamond',serif", sans:"'DM Sans',system-ui,sans-serif",
};

// ── TIPOS ──────────────────────────────────────────────────────────────────
interface Ingrediente { id:string; nombre:string; categoria:string; precio_kg:number; }
interface ItemReceta  { ing_id:string; gramos:number; }
interface Receta      { id:string; nombre:string; plan:string; condicion:string; items:ItemReceta[]; }

// ── BASE DE INGREDIENTES (precios reales GDL Mercado de Abastos 2025) ─────
const INGREDIENTES: Ingrediente[] = [
  // Proteínas
  { id:"pol_pec",  nombre:"Pechuga de pollo (filete)", categoria:"Proteína",  precio_kg:226 },
  { id:"pol_mus",  nombre:"Muslo de pollo",             categoria:"Proteína",  precio_kg:62  },
  { id:"res_mag",  nombre:"Res magra (milanesa)",        categoria:"Proteína",  precio_kg:180 },
  { id:"sal_fil",  nombre:"Salmón filete",               categoria:"Proteína",  precio_kg:320 },
  { id:"atun_nat", nombre:"Atún en agua (lata 140g)",    categoria:"Proteína",  precio_kg:95  },
  { id:"hue_bla",  nombre:"Huevo blanco",                categoria:"Proteína",  precio_kg:42  },
  { id:"lenj",     nombre:"Lentejas",                    categoria:"Proteína",  precio_kg:38  },
  { id:"gar",      nombre:"Garbanzo",                    categoria:"Proteína",  precio_kg:42  },
  // Carbohidratos complejos
  { id:"arr_int",  nombre:"Arroz integral",              categoria:"Carbohidrato", precio_kg:28 },
  { id:"qui",      nombre:"Quinoa",                      categoria:"Carbohidrato", precio_kg:120 },
  { id:"cam_coc",  nombre:"Camote cocido",               categoria:"Carbohidrato", precio_kg:22 },
  { id:"avi_hoj",  nombre:"Avena en hojuela",            categoria:"Carbohidrato", precio_kg:26 },
  { id:"tor_mai",  nombre:"Tortilla de maíz (4 piezas)", categoria:"Carbohidrato", precio_kg:18 },
  // Verduras
  { id:"bro",      nombre:"Brócoli",                     categoria:"Verdura",   precio_kg:28 },
  { id:"esp",      nombre:"Espinaca",                    categoria:"Verdura",   precio_kg:32 },
  { id:"zar",      nombre:"Zanahoria",                   categoria:"Verdura",   precio_kg:16 },
  { id:"cal",      nombre:"Calabacita",                  categoria:"Verdura",   precio_kg:18 },
  { id:"tom",      nombre:"Tomate bola",                 categoria:"Verdura",   precio_kg:20 },
  { id:"ceb",      nombre:"Cebolla",                     categoria:"Verdura",   precio_kg:16 },
  { id:"ajo",      nombre:"Ajo (diente)",                categoria:"Verdura",   precio_kg:60 },
  { id:"pim",      nombre:"Pimiento morrón",             categoria:"Verdura",   precio_kg:45 },
  { id:"lec",      nombre:"Lechuga romana",              categoria:"Verdura",   precio_kg:22 },
  { id:"nop",      nombre:"Nopal",                       categoria:"Verdura",   precio_kg:14 },
  // Grasas saludables
  { id:"agu",      nombre:"Aguacate",                    categoria:"Grasa",     precio_kg:55 },
  { id:"ace_oli",  nombre:"Aceite de oliva extra virgen",categoria:"Grasa",     precio_kg:220 },
  { id:"alm",      nombre:"Almendras",                   categoria:"Grasa",     precio_kg:280 },
  // Condimentos y extras
  { id:"sal",      nombre:"Sal de mar (porción)",        categoria:"Condimento",precio_kg:8  },
  { id:"lim",      nombre:"Limón",                       categoria:"Condimento",precio_kg:18 },
  { id:"chi_ser",  nombre:"Chile serrano",               categoria:"Condimento",precio_kg:18 },
  { id:"cil",      nombre:"Cilantro",                    categoria:"Condimento",precio_kg:20 },
];

// ── RECETAS BASE (5 recetas, 3 planes, validadas nutricionalmente) ─────────
const RECETAS: Receta[] = [
  {
    id:"r1", nombre:"Bowl de pollo + quinoa + verduras",
    plan:"estandar", condicion:"general",
    items:[
      { ing_id:"pol_pec", gramos:160 },
      { ing_id:"qui",     gramos:80  },
      { ing_id:"bro",     gramos:100 },
      { ing_id:"zar",     gramos:60  },
      { ing_id:"ace_oli", gramos:8   },
      { ing_id:"lim",     gramos:15  },
      { ing_id:"sal",     gramos:3   },
    ],
  },
  {
    id:"r2", nombre:"Salmón + camote + espinaca",
    plan:"estandar", condicion:"general",
    items:[
      { ing_id:"sal_fil", gramos:140 },
      { ing_id:"cam_coc", gramos:120 },
      { ing_id:"esp",     gramos:80  },
      { ing_id:"ace_oli", gramos:8   },
      { ing_id:"ajo",     gramos:5   },
      { ing_id:"lim",     gramos:10  },
    ],
  },
  {
    id:"r3", nombre:"Pollo + arroz integral + nopal + aguacate",
    plan:"medico", condicion:"diabetes",
    items:[
      { ing_id:"pol_pec", gramos:170 },
      { ing_id:"arr_int", gramos:70  },
      { ing_id:"nop",     gramos:100 },
      { ing_id:"agu",     gramos:40  },
      { ing_id:"tom",     gramos:60  },
      { ing_id:"ceb",     gramos:30  },
      { ing_id:"lim",     gramos:10  },
      { ing_id:"sal",     gramos:2   },
    ],
  },
  {
    id:"r4", nombre:"Salmón + quinoa + espinaca + pimiento",
    plan:"medico", condicion:"cardiovascular",
    items:[
      { ing_id:"sal_fil", gramos:150 },
      { ing_id:"qui",     gramos:80  },
      { ing_id:"esp",     gramos:80  },
      { ing_id:"pim",     gramos:60  },
      { ing_id:"ace_oli", gramos:10  },
      { ing_id:"ajo",     gramos:4   },
    ],
  },
  {
    id:"r5", nombre:"Pechuga + tortilla + frijoles + verduras",
    plan:"kids", condicion:"general",
    items:[
      { ing_id:"pol_pec", gramos:120 },
      { ing_id:"tor_mai", gramos:60  },
      { ing_id:"gar",     gramos:60  },
      { ing_id:"lec",     gramos:40  },
      { ing_id:"tom",     gramos:40  },
      { ing_id:"zar",     gramos:40  },
    ],
  },
];

const PLANES = [
  { k:"estandar", l:"Semanal estándar",        precio_base:200, condicion:"general"       },
  { k:"medico",   l:"Médico personalizado",    precio_base:300, condicion:"diabetes"      },
  { k:"cardio",   l:"Médico cardiovascular",   precio_base:300, condicion:"cardiovascular"},
  { k:"kids",     l:"Lunch Kids",              precio_base:150, condicion:"general"       },
];

const CONDICIONES = [
  { k:"general",        l:"General / bienestar" },
  { k:"diabetes",       l:"Diabetes tipo 2"     },
  { k:"cardiovascular", l:"Cardiovascular / DASH"},
  { k:"peso",           l:"Control de peso"     },
];

// ── HELPERS ───────────────────────────────────────────────────────────────
function costoReceta(receta: Receta, ings: Ingrediente[], merma=0.12): number {
  return receta.items.reduce((acc, item) => {
    const ing = ings.find(i => i.id === item.ing_id);
    if (!ing) return acc;
    const costo_por_g = ing.precio_kg / 1000;
    return acc + item.gramos * costo_por_g * (1 + merma);
  }, 0);
}

function pesoTotal(receta: Receta): number {
  return receta.items.reduce((a, i) => a + i.gramos, 0);
}

// ── COMPONENTES ──────────────────────────────────────────────────────────
function EyeBrow({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily:G.sans, fontSize:"10px", letterSpacing:"0.16em",
    textTransform:"uppercase" as const, color:G.sage, display:"block", marginBottom:"8px" }}>{children}</span>;
}

function Pct({ v }: { v: number }) {
  const color = v >= 45 ? G.green : v >= 32 ? G.amber : G.red;
  const label = v >= 45 ? "✅ Saludable" : v >= 32 ? "⚠ Ajustado" : "🔴 Riesgo";
  return <span style={{ fontFamily:G.sans, fontSize:"11px", color, fontWeight:500 }}>{label} ({v}%)</span>;
}

// ── PANTALLA PRINCIPAL ────────────────────────────────────────────────────
export default function CostosV2() {
  const [auth, setAuth]         = useState(false);
  const [pwd, setPwd]           = useState("");
  const [err, setErr]           = useState(false);

  // Selección
  const [recetaId, setRecetaId] = useState("r1");
  const [planK,    setPlanK]    = useState("estandar");
  const [merma,    setMerma]    = useState(0.12);
  const [precio,   setPrecio]   = useState(200);
  const [clientes, setClientes] = useState(10);
  const [comidas,  setComidas]  = useState(10);

  // Modificaciones de ingredientes (gramos custom por item)
  const [overrides, setOverrides] = useState<Record<string,number>>({});

  // Comisiones
  const [comRafael,  setComRafael]  = useState(30);
  const [comAlan,    setComAlan]    = useState(10);
  const [comEmpaque, setComEmpaque] = useState(10);
  const [comLogist,  setComLogist]  = useState(15);

  const receta = useMemo(() => RECETAS.find(r => r.id === recetaId)!, [recetaId]);

  const itemsEfectivos = useMemo(() =>
    receta.items.map(i => ({
      ...i,
      gramos: overrides[i.id] !== undefined ? overrides[i.id] : i.gramos,
    })), [receta, overrides]);

  const costoIng = useMemo(() => {
    return itemsEfectivos.reduce((acc, item) => {
      const ing = INGREDIENTES.find(i => i.id === item.ing_id);
      if (!ing) return acc;
      return acc + (ing.precio_kg / 1000) * item.gramos * (1 + merma);
    }, 0);
  }, [itemsEfectivos, merma]);

  const costoTotal = costoIng + comRafael + comAlan + comEmpaque + comLogist;
  const margen     = precio - costoTotal;
  const pct        = precio > 0 ? Math.round((margen / precio) * 100) : 0;
  const alan8      = Math.max(0, Math.round(margen * 0.08));

  const ingresoSem  = precio    * comidas * clientes;
  const costoSem    = costoTotal * comidas * clientes;
  const utilidadSem = margen    * comidas * clientes;
  const utilidadMes = utilidadSem * 4;

  const pesoP = pesoTotal({ ...receta, items: itemsEfectivos });

  if (!auth) return (
    <div style={{ minHeight:"100vh", background:G.linen, display:"flex",
      alignItems:"center", justifyContent:"center", padding:"2rem" }}>
      <div style={{ maxWidth:"360px", width:"100%", textAlign:"center" as const }}>
        <EyeBrow>Acceso restringido · Solo equipo Plena</EyeBrow>
        <p style={{ fontFamily:G.serif, fontSize:"1.8rem", color:G.night, marginBottom:"8px", fontWeight:400 }}>
          Plena · Costeo por ingrediente
        </p>
        <p style={{ fontFamily:G.sans, fontSize:"13px", color:G.ink3, marginBottom:"28px", lineHeight:1.7 }}>
          Herramienta de costeo real. Precios Mercado de Abastos GDL 2025.
        </p>
        <input type="password" value={pwd} placeholder="Código de acceso"
          onChange={e => { setPwd(e.target.value); setErr(false); }}
          onKeyDown={e => { if (e.key === "Enter") { if (pwd === ACCESS) setAuth(true); else setErr(true); }}}
          style={{ width:"100%", padding:"12px 14px", borderRadius:"4px", fontFamily:G.sans,
            fontSize:"14px", border:`0.5px solid ${err ? G.red : G.stone}`, background:G.ivory,
            outline:"none", marginBottom:"8px", boxSizing:"border-box" as const }} />
        {err && <p style={{ fontFamily:G.sans, fontSize:"11px", color:G.red, marginBottom:"8px" }}>Código incorrecto</p>}
        <button onClick={() => { if (pwd === ACCESS) setAuth(true); else setErr(true); }}
          style={{ width:"100%", padding:"11px", background:G.night, color:G.linen, border:"none",
            borderRadius:"4px", fontFamily:G.sans, fontSize:"13px", cursor:"pointer" }}>
          Ingresar
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ background:G.linen, minHeight:"100vh" }}>
    <div style={{ maxWidth:"1000px", margin:"0 auto", padding:"2.5rem 1.5rem 6rem" }}>

      {/* Header */}
      <div style={{ marginBottom:"2rem", paddingBottom:"1.5rem", borderBottom:`0.5px solid ${G.stone}` }}>
        <EyeBrow>Capa 3 · Costeo por ingrediente · Confidencial</EyeBrow>
        <h1 style={{ fontFamily:G.serif, fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:400,
          color:G.night, marginBottom:"6px", letterSpacing:"-0.02em" }}>Calculadora de costos Plena</h1>
        <p style={{ fontFamily:G.sans, fontSize:"13px", color:G.ink3, lineHeight:1.7, maxWidth:"580px" }}>
          Precios reales del Mercado de Abastos GDL (jul 2025). Cada ingrediente es editable.
          Los resultados son el insumo para la sesión de costeo con Alan.
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }}>

        {/* ── COL IZQUIERDA ── */}
        <div style={{ display:"flex", flexDirection:"column" as const, gap:"16px" }}>

          {/* Selección de receta */}
          <div>
            <EyeBrow>01 · Selecciona la receta base</EyeBrow>
            <div style={{ display:"flex", flexDirection:"column" as const, gap:"6px" }}>
              {RECETAS.map(r => (
                <button key={r.id} onClick={() => { setRecetaId(r.id); setOverrides({}); }}
                  style={{ padding:"10px 14px", borderRadius:"4px", fontFamily:G.sans, fontSize:"13px",
                    cursor:"pointer", textAlign:"left" as const,
                    border:`0.5px solid ${recetaId === r.id ? G.night : G.stone}`,
                    background: recetaId === r.id ? G.night : G.ivory,
                    color: recetaId === r.id ? G.linen : G.ink2 }}>
                  <span style={{ fontSize:"11px", color: recetaId === r.id ? G.sageL : G.sage,
                    display:"block", marginBottom:"2px" }}>
                    {PLANES.find(p=>p.k===r.plan)?.l} · {r.condicion}
                  </span>
                  {r.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Ingredientes editables */}
          <div>
            <EyeBrow>02 · Ingredientes · edita gramos por porción</EyeBrow>
            <div style={{ background:"white", border:`0.5px solid ${G.stone}`, borderRadius:"6px",
              overflow:"hidden" }}>
              <div style={{ padding:"10px 14px", background:G.ivory, borderBottom:`0.5px solid ${G.stone}`,
                display:"grid", gridTemplateColumns:"1fr 70px 70px 70px", gap:"8px" }}>
                {["Ingrediente","Gramos","$/kg","Costo"].map(h=>(
                  <span key={h} style={{ fontFamily:G.sans, fontSize:"10px", letterSpacing:"0.1em",
                    textTransform:"uppercase" as const, color:G.ink3 }}>{h}</span>
                ))}
              </div>
              {itemsEfectivos.map((item) => {
                const ing = INGREDIENTES.find(i => i.id === item.ing_id);
                if (!ing) return null;
                const costoItem = (ing.precio_kg / 1000) * item.gramos * (1 + merma);
                return (
                  <div key={item.ing_id} style={{ padding:"8px 14px",
                    borderBottom:`0.5px solid ${G.stone}30`,
                    display:"grid", gridTemplateColumns:"1fr 70px 70px 70px", gap:"8px",
                    alignItems:"center" }}>
                    <div>
                      <p style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2, marginBottom:"1px" }}>
                        {ing.nombre}
                      </p>
                      <p style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3 }}>{ing.categoria}</p>
                    </div>
                    <input type="number" value={item.gramos} min={0} max={500}
                      onChange={e => setOverrides(prev => ({ ...prev, [item.ing_id]: Number(e.target.value) }))}
                      style={{ width:"60px", padding:"4px 6px", border:`0.5px solid ${G.stone}`,
                        borderRadius:"3px", fontFamily:G.sans, fontSize:"12px",
                        background:overrides[item.ing_id]!==undefined ? `${G.sage}15` : G.ivory,
                        outline:"none", textAlign:"center" as const }} />
                    <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink3 }}>
                      ${ing.precio_kg}
                    </span>
                    <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2, fontWeight:500 }}>
                      ${costoItem.toFixed(1)}
                    </span>
                  </div>
                );
              })}
              <div style={{ padding:"10px 14px", background:G.ivory, display:"grid",
                gridTemplateColumns:"1fr 70px 70px 70px", gap:"8px" }}>
                <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2, fontWeight:500 }}>
                  Total ingredientes ({pesoP}g · merma {Math.round(merma*100)}%)
                </span>
                <span/>
                <span/>
                <span style={{ fontFamily:G.sans, fontSize:"13px", color:G.night, fontWeight:600 }}>
                  ${costoIng.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Merma */}
            <div style={{ marginTop:"8px", display:"flex", alignItems:"center", gap:"8px" }}>
              <span style={{ fontFamily:G.sans, fontSize:"11px", color:G.ink3 }}>Merma / desperdicio:</span>
              {[0.08, 0.12, 0.15, 0.20].map(v => (
                <button key={v} onClick={() => setMerma(v)}
                  style={{ padding:"3px 8px", borderRadius:"3px", fontFamily:G.sans, fontSize:"11px",
                    cursor:"pointer", border:`0.5px solid ${merma===v?G.night:G.stone}`,
                    background: merma===v ? G.night : G.ivory,
                    color: merma===v ? G.linen : G.ink3 }}>
                  {Math.round(v*100)}%
                </button>
              ))}
            </div>
          </div>

          {/* Comisiones */}
          <div>
            <EyeBrow>03 · Comisiones y costos operativos · por comida</EyeBrow>
            <div style={{ background:"white", border:`0.5px solid ${G.stone}`, borderRadius:"6px",
              padding:"1rem 1.25rem" }}>
              {[
                { label:"Cocina Rafael (comisión)", val:comRafael, set:setComRafael, min:20, max:50,
                  nota:"$25–35 F1, renegociar a 150+/sem" },
                { label:"Chef Alan (por comida)",   val:comAlan,   set:setComAlan,   min:5,  max:30,
                  nota:"$10 Etapa 1, +8% utilidad aparte" },
                { label:"Empaque al vacío",         val:comEmpaque,set:setComEmpaque,min:6,  max:20,
                  nota:"Pendiente proveedor GDL" },
                { label:"Logística / delivery",     val:comLogist, set:setComLogist, min:8,  max:45,
                  nota:"Promedio ZMG. Varía por zona" },
              ].map(c => (
                <div key={c.label} style={{ marginBottom:"12px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"3px" }}>
                    <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2 }}>{c.label}</span>
                    <span style={{ fontFamily:G.sans, fontSize:"13px", color:G.night, fontWeight:500 }}>
                      ${c.val} MXN
                    </span>
                  </div>
                  <input type="range" min={c.min} max={c.max} value={c.val}
                    onChange={e => c.set(Number(e.target.value))}
                    style={{ width:"100%", accentColor:G.sage, height:"3px" }} />
                  <p style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3, marginTop:"2px" }}>
                    {c.nota}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── COL DERECHA ── */}
        <div style={{ display:"flex", flexDirection:"column" as const, gap:"16px" }}>

          {/* Precio de venta */}
          <div>
            <EyeBrow>04 · Precio de venta y volumen</EyeBrow>
            <div style={{ background:"white", border:`0.5px solid ${G.stone}`, borderRadius:"6px",
              padding:"1rem 1.25rem" }}>
              <div style={{ marginBottom:"14px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                  <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2 }}>Precio de venta</span>
                  <span style={{ fontFamily:G.sans, fontSize:"14px", color:G.night, fontWeight:600 }}>
                    ${precio} MXN
                  </span>
                </div>
                <input type="range" min={100} max={450} step={5} value={precio}
                  onChange={e => setPrecio(Number(e.target.value))}
                  style={{ width:"100%", accentColor:G.sage, height:"3px" }} />
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:"3px" }}>
                  <span style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3 }}>Mín: $100</span>
                  <span style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3 }}>Competencia GDL: $99–150</span>
                  <span style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3 }}>Máx: $450</span>
                </div>
              </div>
              <div style={{ marginBottom:"14px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                  <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2 }}>Comidas / cliente / semana</span>
                  <span style={{ fontFamily:G.sans, fontSize:"13px", color:G.night }}>{comidas}</span>
                </div>
                <input type="range" min={3} max={21} value={comidas} onChange={e => setComidas(Number(e.target.value))}
                  style={{ width:"100%", accentColor:G.sage, height:"3px" }} />
              </div>
              <div>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
                  <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2 }}>Clientes activos</span>
                  <span style={{ fontFamily:G.sans, fontSize:"13px", color:G.night }}>{clientes}</span>
                </div>
                <input type="range" min={1} max={150} value={clientes} onChange={e => setClientes(Number(e.target.value))}
                  style={{ width:"100%", accentColor:G.sage, height:"3px" }} />
              </div>
            </div>
          </div>

          {/* Resultado por comida */}
          <div style={{ background:G.night, borderRadius:"6px", padding:"1.5rem" }}>
            <EyeBrow>05 · Resultado por comida</EyeBrow>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"12px" }}>
              {[
                { l:"Ingredientes",  v:`$${costoIng.toFixed(1)}`,     c:"rgba(248,250,245,0.7)" },
                { l:"Comisiones",    v:`$${(costoTotal-costoIng).toFixed(1)}`, c:"rgba(248,250,245,0.7)" },
                { l:"Costo total",   v:`$${costoTotal.toFixed(1)}`,   c:G.linen },
                { l:"Precio venta",  v:`$${precio}`,                  c:G.linen },
              ].map(s => (
                <div key={s.l} style={{ padding:"10px", background:"rgba(255,255,255,0.05)",
                  borderRadius:"4px" }}>
                  <p style={{ fontFamily:G.sans, fontSize:"10px", color:"rgba(248,250,245,0.4)",
                    marginBottom:"3px" }}>{s.l}</p>
                  <p style={{ fontFamily:G.serif, fontSize:"1.1rem", color:s.c }}>{s.v}</p>
                </div>
              ))}
            </div>
            <div style={{ borderTop:"0.5px solid rgba(248,250,245,0.1)", paddingTop:"12px" }}>
              <p style={{ fontFamily:G.sans, fontSize:"10px", color:"rgba(168,196,160,0.6)", marginBottom:"4px" }}>
                Margen bruto
              </p>
              <p style={{ fontFamily:G.serif, fontSize:"2rem",
                color: pct>=45 ? G.sageL : pct>=32 ? "#EF9F27" : "#E24B4A",
                lineHeight:1, marginBottom:"4px" }}>
                {pct}% · ${margen.toFixed(1)} MXN
              </p>
              <Pct v={pct} />
              <p style={{ fontFamily:G.sans, fontSize:"11px", color:"rgba(248,250,245,0.35)",
                marginTop:"6px" }}>
                Alan 8% utilidad = ${alan8} MXN extra por comida
              </p>
            </div>
          </div>

          {/* Proyección semanal/mensual */}
          <div style={{ background:"white", border:`0.5px solid ${G.stone}`, borderRadius:"6px",
            padding:"1.25rem" }}>
            <EyeBrow>06 · Proyección de negocio</EyeBrow>
            {[
              { l:"Ingreso semanal",   v:ingresoSem,   c:G.ink2  },
              { l:"Costo semanal",     v:costoSem,     c:G.ink3  },
              { l:"Utilidad semanal",  v:utilidadSem,  c:utilidadSem>0?G.green:G.red },
              { l:"Utilidad mensual",  v:utilidadMes,  c:utilidadSem>0?G.green:G.red },
            ].map(s => (
              <div key={s.l} style={{ display:"flex", justifyContent:"space-between",
                padding:"7px 0", borderBottom:`0.5px solid ${G.stone}30` }}>
                <span style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink3 }}>{s.l}</span>
                <span style={{ fontFamily:G.sans, fontSize:"13px", color:s.c, fontWeight:500 }}>
                  ${s.v.toLocaleString()} MXN
                </span>
              </div>
            ))}
          </div>

          {/* Tabla escenarios */}
          <div style={{ background:"white", border:`0.5px solid ${G.stone}`, borderRadius:"6px",
            padding:"1.25rem" }}>
            <EyeBrow>07 · Escenarios de escala</EyeBrow>
            <table style={{ width:"100%", borderCollapse:"collapse" as const }}>
              <thead>
                <tr style={{ borderBottom:`0.5px solid ${G.stone}` }}>
                  {["Clientes","Ingreso/sem","Utilidad/sem","Estado"].map(h=>(
                    <th key={h} style={{ fontFamily:G.sans, fontSize:"9px", letterSpacing:"0.08em",
                      textTransform:"uppercase" as const, color:G.ink3, padding:"6px 4px",
                      textAlign:"left" as const, fontWeight:400 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[3,10,25,50,100,150].map(cl => {
                  const u = margen * comidas * cl;
                  const i = precio * comidas * cl;
                  const isActive = cl === clientes;
                  const margenPct = pct;
                  return (
                    <tr key={cl} style={{ background: isActive?`${G.sage}12`:"transparent",
                      borderBottom:`0.5px solid ${G.stone}20` }}>
                      <td style={{ fontFamily:G.sans, fontSize:"12px", color:isActive?G.night:G.ink2,
                        padding:"6px 4px", fontWeight:isActive?600:400 }}>{cl}</td>
                      <td style={{ fontFamily:G.sans, fontSize:"11px", color:G.ink3, padding:"6px 4px" }}>
                        ${i.toLocaleString()}
                      </td>
                      <td style={{ fontFamily:G.sans, fontSize:"12px",
                        color:u>0?G.green:G.red, padding:"6px 4px", fontWeight:500 }}>
                        ${u.toLocaleString()}
                      </td>
                      <td style={{ padding:"6px 4px" }}>
                        <span style={{ fontFamily:G.sans, fontSize:"10px",
                          color: margenPct>=45?G.green:margenPct>=32?G.amber:G.red }}>
                          {margenPct>=45?"✅":margenPct>=32?"⚠":"🔴"} {margenPct}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Proyección socios */}
          <div style={{ background:G.ivory, border:`0.5px solid ${G.stone}`, borderRadius:"6px",
            padding:"1.25rem" }}>
            <EyeBrow>08 · Proyección de ingresos por socio · semanal</EyeBrow>
            <p style={{ fontFamily:G.sans, fontSize:"11px", color:G.ink3, marginBottom:"12px", lineHeight:1.6 }}>
              Base: {clientes} clientes × {comidas} comidas/sem
            </p>
            {[
              { nombre:"Rafael · El Romeral",     ingreso: comRafael  * comidas * clientes, nota:"Comisión por pedido" },
              { nombre:"Alan · Chef (fijo)",       ingreso: comAlan    * comidas * clientes, nota:"$"+comAlan+"/comida" },
              { nombre:"Alan · 8% utilidad neta",  ingreso: alan8      * comidas * clientes, nota:"Sobre utilidad" },
              { nombre:"Luis Fer · 4% digital",    ingreso: Math.round(ingresoSem*0.04),      nota:"% sobre ingreso total" },
            ].map(s => (
              <div key={s.nombre} style={{ display:"flex", justifyContent:"space-between",
                alignItems:"center", padding:"8px 0", borderBottom:`0.5px solid ${G.stone}30` }}>
                <div>
                  <p style={{ fontFamily:G.sans, fontSize:"12px", color:G.ink2 }}>{s.nombre}</p>
                  <p style={{ fontFamily:G.sans, fontSize:"10px", color:G.ink3 }}>{s.nota}</p>
                </div>
                <span style={{ fontFamily:G.sans, fontSize:"13px", color:G.night, fontWeight:500 }}>
                  ${s.ingreso.toLocaleString()} MXN
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontFamily:G.sans, fontSize:"11px", color:G.ink3, lineHeight:1.7, padding:"10px 12px",
            background:G.ivory, border:`0.5px solid ${G.stone}`, borderRadius:"4px" }}>
            ⚠ Precios Mercado de Abastos GDL jul 2025. Validar con Alan en sesión de costeo.
            Merma actual: {Math.round(merma*100)}%. Logística es promedio ZMG — varía por zona y volumen.
            Estos datos son confidenciales y no deben compartirse antes de firmar NDA.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
