import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Serie1 from './pages/Serie1'
import Serie2 from './pages/Serie2'
import Serie3 from './pages/Serie3'
import Serie4 from './pages/Serie4'
import Serie5 from './pages/Serie5'

const C = { bg:"#080c16", s1:"#0d1425", cy:"#00d4ff", ind:"#6366f1", tx:"#e2e8f0", txm:"#94a3b8", txd:"#64748b" }

function Home() {
  const series = [
    { id: 1, name: "Alpha", path: "/serie-1" },
    { id: 2, name: "Bravo", path: "/serie-2" },
    { id: 3, name: "Charlie", path: "/serie-3" },
    { id: 4, name: "Delta", path: "/serie-4" },
    { id: 5, name: "Echo", path: "/serie-5" },
  ]

  return (
    <div style={{ fontFamily:"system-ui,sans-serif", background:C.bg, color:C.tx, minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", padding:"2rem" }}>
      <div style={{ textAlign:"center", marginBottom:"3rem", paddingTop:"3rem" }}>
        <div style={{ fontSize:".65rem", color:C.cy, letterSpacing:".15em", textTransform:"uppercase", marginBottom:"2rem", fontFamily:"monospace" }}>FLAB GAMES</div>
        <h1 style={{ fontSize:"clamp(2rem,7vw,3.5rem)", fontWeight:900, background:`linear-gradient(135deg,#fff,${C.cy},${C.ind})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", lineHeight:1, marginBottom:8 }}>ESCAPE LAB</h1>
        <p style={{ fontSize:"clamp(.75rem,2vw,1rem)", color:C.txm, letterSpacing:".15em", textTransform:"uppercase", marginBottom:"1.5rem" }}>Compr{"\u00e9"}hension {"\u00c9"}crite {"\u2014"} TCF Canada</p>
        <p style={{ fontSize:".9rem", color:C.txd, maxWidth:500, lineHeight:1.6, margin:"0 auto" }}>5 s{"\u00e9"}ries de 39 questions avec vrais pi{"\u00e8"}ges TCF. 60 minutes par s{"\u00e9"}rie. Difficult{"\u00e9"} progressive A1{"\u2192"}C2. Score NCLC estim{"\u00e9"}.</p>
        <div style={{ display:"flex", gap:"2rem", marginTop:"2rem", justifyContent:"center", flexWrap:"wrap" }}>
          {[["195","Questions"],["5","S\u00e9ries"],["60","Min/s\u00e9rie"],["NCLC","Scoring"]].map(([v,l])=>(
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontWeight:700, fontSize:"1.3rem", color:C.cy }}>{v}</div>
              <div style={{ fontSize:".6rem", color:C.txd, textTransform:"uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1rem", maxWidth:800, width:"100%" }}>
        {series.map(s => (
          <Link to={s.path} key={s.id} style={{ textDecoration:"none" }}>
            <div style={{ background:C.s1, border:"1px solid rgba(0,212,255,.1)", borderRadius:12, padding:"1.5rem", cursor:"pointer", transition:"all .3s", position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,212,255,.3)";e.currentTarget.style.transform="translateY(-3px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,212,255,.1)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{ fontWeight:800, fontSize:"1.8rem", color:"rgba(0,212,255,.1)", position:"absolute", top:8, right:12 }}>{String(s.id).padStart(2,"0")}</div>
              <div style={{ fontWeight:700, fontSize:"1rem", color:C.tx, marginBottom:6 }}>S{"\u00e9"}rie {s.name}</div>
              <div style={{ fontSize:".75rem", color:C.txd, lineHeight:1.5 }}>39 questions {"\u00b7"} 60 min<br/>A1/A2 {"\u2192"} B1/B2 {"\u2192"} C1/C2<br/>Documents visuels + pi{"\u00e8"}ges TCF</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop:"3rem", fontSize:".7rem", color:C.txd, textAlign:"center" }}>
        ESCAPE LAB {"\u00a9"} 2026 {"\u2014"} FLAB Games
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serie-1" element={<Serie1 />} />
        <Route path="/serie-2" element={<Serie2 />} />
        <Route path="/serie-3" element={<Serie3 />} />
        <Route path="/serie-4" element={<Serie4 />} />
        <Route path="/serie-5" element={<Serie5 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
