
"use strict";
(() => {
  const NS="http://www.w3.org/2000/svg";
  const stage=document.querySelector(".atlas-stage");
  const markers=document.getElementById("geoMarkers");
  const world=stage?.querySelector("img.world");
  const old=stage?.querySelector("svg.topology");
  if(!stage||!markers||!world||!old)return;

  const S=(tag,attrs={})=>{
    const e=document.createElementNS(NS,tag);
    Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,String(v)));
    return e;
  };
  const xy=code=>{
    const p=COUNTRY_LOCATIONS[code];
    return p?{x:(p[1]+180)*1120/360,y:(90-p[0])*510/180}:null;
  };

  const viewport=document.createElement("div");
  viewport.className="fn-viewport";
  stage.insertBefore(viewport,world);
  viewport.append(world,old,markers);

  const graph=S("svg",{
    class:"fn-graph",viewBox:"0 0 1120 510",
    preserveAspectRatio:"xMidYMid meet",
    "aria-label":"Measured Feelcoin observer network topology"
  });
  viewport.insertBefore(graph,markers);

  let scale=1,tx=0,ty=0,topology=null,focus=null;
  const apply=()=>{
    const mx=stage.clientWidth*(scale-1)/2;
    const my=stage.clientHeight*(scale-1)/2;
    tx=Math.max(-mx,Math.min(mx,tx));
    ty=Math.max(-my,Math.min(my,ty));
    viewport.style.transform=`translate(${tx}px,${ty}px) scale(${scale})`;
  };
  const zoom=(next,x=stage.clientWidth/2,y=stage.clientHeight/2)=>{
    const before=scale;
    scale=Math.min(5,Math.max(1,next));
    const dx=x-stage.clientWidth/2,dy=y-stage.clientHeight/2;
    tx=dx-(dx-tx)*scale/before;
    ty=dy-(dy-ty)*scale/before;
    if(scale===1){tx=0;ty=0}
    apply();
  };

  const controls=document.createElement("div");
  controls.className="fn-controls";
  const control=(symbol,label,cb)=>{
    const b=document.createElement("button");
    b.type="button";b.textContent=symbol;
    b.title=label;b.setAttribute("aria-label",label);
    b.addEventListener("click",cb);
    controls.append(b);
  };
  control("+","Zoom in",()=>zoom(scale*1.3));
  control("−","Zoom out",()=>zoom(scale/1.3));
  control("⌂","Reset map",()=>zoom(1));
  stage.append(controls);
  const hint=document.createElement("div");
  hint.className="fn-hint";
  hint.textContent="Scroll / pinch to zoom · Drag to explore";
  stage.append(hint);
  stage.classList.add("fn-enabled");

  stage.addEventListener("wheel",e=>{
    if(e.target.closest(".fn-controls,.map-overlay,.geo-inspector"))return;
    e.preventDefault();
    const r=stage.getBoundingClientRect();
    zoom(scale*(e.deltaY<0?1.15:1/1.15),e.clientX-r.left,e.clientY-r.top);
  },{passive:false});

  const pointers=new Map();
  let pinch=null,dragged=false;
  const ignore=e=>!!e.target.closest(".fn-controls,.map-overlay,.geo-inspector");
  stage.addEventListener("pointerdown",e=>{
    if(ignore(e))return;
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    pinch=null;dragged=false;
    stage.setPointerCapture(e.pointerId);
    stage.classList.add("fn-dragging");
  });
  stage.addEventListener("pointermove",e=>{
    if(!pointers.has(e.pointerId))return;
    const prev=pointers.get(e.pointerId);
    pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1){
      if(scale>1){
        tx+=e.clientX-prev.x;ty+=e.clientY-prev.y;apply();
      }
    }else if(pointers.size===2){
      const [a,b]=[...pointers.values()];
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      const mid={x:(a.x+b.x)/2,y:(a.y+b.y)/2};
      if(pinch&&pinch.d>0){
        const r=stage.getBoundingClientRect();
        zoom(scale*d/pinch.d,mid.x-r.left,mid.y-r.top);
        tx+=mid.x-pinch.mid.x;ty+=mid.y-pinch.mid.y;apply();
      }
      pinch={d,mid};
    }
  });
  const release=e=>{
    pointers.delete(e.pointerId);pinch=null;
    if(!pointers.size)stage.classList.remove("fn-dragging");
  };
  stage.addEventListener("pointerup",release);
  stage.addEventListener("pointercancel",release);
  stage.addEventListener("lostpointercapture",release);
  stage.addEventListener("touchmove",e=>{
    if(e.target.closest(".fn-viewport")&&pointers.size>0)e.preventDefault();
  },{passive:false});

  const emphasize=code=>{
    focus=code;
    graph.querySelectorAll(".fn-edge").forEach(e=>{
      e.classList.toggle("fn-dim",!!code&&e.dataset.country!==code&&e.dataset.direct!=="true");
    });
  };
  markers.addEventListener("click",e=>{
    const pin=e.target.closest(".geo-pin");
    if(pin)emphasize(pin.dataset.country);
  });
  markers.addEventListener("mouseover",e=>{
    const pin=e.target.closest(".geo-pin");
    if(pin)emphasize(pin.dataset.country);
  });
  document.getElementById("countryList")?.addEventListener("click",e=>{
    const item=e.target.closest(".country-item");
    if(item)emphasize(item.dataset.country);
  });

  const path=(a,b,i)=>{
    const d=Math.hypot(b.x-a.x,b.y-a.y);
    const rise=Math.min(100,Math.max(18,d*.17));
    const cx=(a.x+b.x)/2-(b.y-a.y)/(d||1)*rise*.28;
    const cy=(a.y+b.y)/2-rise;
    return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  };

  function draw(){
    graph.replaceChildren();
    if(!topology)return;
    const nodes=new Map();
    for(const n of topology.official_nodes){
      const p=xy(n.country);
      if(p&&["node1","node2"].includes(n.id)){
        const offset=n.id==="node1"?{x:-15,y:-21}:{x:15,y:-21};
        nodes.set(n.id,{...n,p:{x:p.x+offset.x,y:p.y+offset.y}});
      }
    }
    let i=0;
    const edge=(a,b,country,direct=false)=>{
      const d=path(a,b,i++);
      const g=S("g",{
        class:"fn-edge"+(direct?" fn-direct":""),
        "data-country":country||"",
        "data-direct":String(direct)
      });
      g.append(
        S("path",{d,class:"fn-edge-shadow"}),
        S("path",{d,class:"fn-edge-line"}),
        S("path",{d,class:"fn-edge-flow",pathLength:100,style:`animation-delay:-${i%7}s`})
      );
      graph.append(g);
    };
    for(const link of topology.observed_links){
      const n=nodes.get(link.node),p=xy(link.country);
      if(n&&p&&Number.isInteger(link.count)&&link.count>0){
        edge(n.p,p,link.country);
      }
    }
    for(const l of topology.official_links){
      const a=nodes.get(l.from),b=nodes.get(l.to);
      if(a&&b)edge(a.p,b.p,"",true);
    }
    for(const n of nodes.values()){
      const g=S("g",{
        class:"fn-node",transform:`translate(${n.p.x} ${n.p.y})`,
        "data-country":n.country,role:"img",
        "aria-label":`${n.name}, official node in ${n.country}`
      });
      const t=S("title");
      t.textContent=`${n.name} · official Feelcoin observer · ${n.country}`;
      g.append(t,S("circle",{r:17,class:"fn-node-halo"}),
        S("circle",{r:13,class:"fn-node-ring"}),
        S("circle",{r:7.5,class:"fn-node-core"}));
      const label=S("text",{
        x:n.id==="node1"?-18:18,y:-19,
        "text-anchor":n.id==="node1"?"end":"start",class:"fn-node-label"
      });
      label.textContent=n.name;
      g.append(label);
      graph.append(g);
    }
    emphasize(focus);
    const note=document.getElementById("geoNote");
    if(note)note.textContent="Observed P2P links · approximate country positions";
    const legend=document.getElementById("geoLegend");
    if(legend)legend.textContent="✦ Official nodes · Gold lines: observed observer connections";
  }

  async function load(){
    try{
      const r=await fetch("./assets/live/topology.json?t="+Date.now(),{cache:"no-store"});
      if(!r.ok)throw Error("HTTP "+r.status);
      const d=await r.json();
      const age=Date.now()-Date.parse(d.observed_at);
      if(!Number.isFinite(age)||age<0||age>20*60*1000)
        throw Error("Stale topology");
      if(!Array.isArray(d.official_nodes)||!Array.isArray(d.observed_links)||
         !Array.isArray(d.official_links))throw Error("Invalid topology");
      topology=d;draw();
    }catch(e){
      topology=null;graph.replaceChildren();
      const note=document.getElementById("geoNote");
      if(note)note.textContent="Measured topology temporarily unavailable";
    }
  }
  window.addEventListener("resize",apply);
  load();
  setInterval(load,5*60*1000);
})();
