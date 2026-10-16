'use strict';
const COUNTRY_LOCATIONS = {"AF":[33,65,"Afghanistan"],"AL":[41,20,"Albania"],"DZ":[28,3,"Algeria"],"AS":[-14.333,-170,"American Samoa"],"AO":[-12.5,18.5,"Angola"],"AI":[18.25,-63.167,"Anguilla"],"AG":[17.05,-61.8,"Antigua and Barbuda"],"AR":[-34,-64,"Argentina"],"AM":[40,45,"Armenia"],"AW":[12.5,-69.967,"Aruba"],"AU":[-27,133,"Australia"],"AT":[47.333,13.333,"Austria"],"AZ":[40.5,47.5,"Azerbaijan"],"BS":[24.25,-76,"The Bahamas"],"BH":[26,50.55,"Bahrain"],"BD":[24,90,"Bangladesh"],"BB":[13.167,-59.533,"Barbados"],"BY":[53,28,"Belarus"],"BE":[50.8,4.6,"Belgium"],"BZ":[17.25,-88.75,"Belize"],"BJ":[9.5,2.25,"Benin"],"BM":[32.333,-64.75,"Bermuda"],"BT":[27.5,90.5,"Bhutan"],"BO":[-17,-65,"Bolivia"],"BA":[44,18,"Bosnia and Herzegovina"],"BW":[-22,24,"Botswana"],"BR":[-10,-55,"Brazil"],"IO":[-6,71.5,"British Indian Ocean Territory"],"BN":[4.5,114.667,"Brunei"],"BG":[43,25,"Bulgaria"],"BF":[13,-2,"Burkina Faso"],"BI":[-3.5,30,"Burundi"],"KH":[13,105,"Cambodia"],"CM":[6,12,"Cameroon"],"CA":[60,-95,"Canada"],"CV":[16,-24,"Cape Verde"],"KY":[19.5,-80.5,"Cayman Islands"],"CF":[7,21,"Central African Republic"],"TD":[15,19,"Chad"],"CL":[-30,-71,"Chile"],"CN":[35,105,"China"],"CX":[-10.5,105.667,"Christmas Island"],"CC":[-12.5,96.833,"Cocos (Keeling) Islands"],"CO":[4,-72,"Colombia"],"KM":[-12.167,44.25,"Comoros"],"CG":[-1,15,"Republic of the Congo"],"CD":[0,25,"Democratic Republic of the Congo"],"CK":[-21.233,-159.767,"Cook Islands"],"CR":[10,-84,"Costa Rica"],"CI":[8,-5,"Ivory Coast"],"HR":[45.167,15.5,"Croatia"],"CU":[21.5,-80,"Cuba"],"CY":[35,33,"Cyprus"],"CZ":[49.75,15.5,"Czech Republic"],"DK":[56,10,"Denmark"],"DJ":[11.5,43,"Djibouti"],"DM":[15.417,-61.333,"Dominica"],"DO":[19,-70.667,"Dominican Republic"],"EC":[-2,-77.5,"Ecuador"],"EG":[27,30,"Egypt"],"SV":[13.833,-88.917,"El Salvador"],"GQ":[2,10,"Equatorial Guinea"],"ER":[15,39,"Eritrea"],"EE":[59,26,"Estonia"],"ET":[8,38,"Ethiopia"],"FK":[-51.75,-59,"Falkland Islands"],"FO":[62,-7,"Faroe Islands"],"FJ":[-18,175,"Fiji"],"FI":[64,26,"Finland"],"FR":[46,2,"France"],"GF":[4,-53,"French Guiana"],"PF":[-15,-140,"French Polynesia"],"TF":[-49.25,69.167,"French Southern and Antarctic Lands"],"GA":[-1,11.75,"Gabon"],"GM":[13.467,-16.567,"The Gambia"],"GE":[42,43.5,"Georgia"],"DE":[51,10,"Germany"],"GH":[8,-2,"Ghana"],"GI":[36.133,-5.35,"Gibraltar"],"GR":[39,22,"Greece"],"GL":[72,-40,"Greenland"],"GD":[12.117,-61.667,"Grenada"],"GP":[16.25,-61.583,"Guadeloupe"],"GU":[13.467,144.783,"Guam"],"GT":[15.5,-90.25,"Guatemala"],"GG":[49.467,-2.583,"Guernsey"],"GN":[11,-10,"Guinea"],"GW":[12,-15,"Guinea-Bissau"],"GY":[5,-59,"Guyana"],"HT":[19,-72.417,"Haiti"],"HM":[-53.1,72.517,"Heard Island and McDonald Islands"],"HN":[15,-86.5,"Honduras"],"HK":[22.25,114.167,"Hong Kong"],"HU":[47,20,"Hungary"],"IS":[65,-18,"Iceland"],"IN":[20,77,"India"],"ID":[-5,120,"Indonesia"],"IR":[32,53,"Iran"],"IQ":[33,44,"Iraq"],"IE":[53,-8,"Ireland"],"IL":[31.5,34.75,"Israel"],"IT":[42.833,12.833,"Italy"],"JM":[18.25,-77.5,"Jamaica"],"JP":[36,138,"Japan"],"JE":[49.25,-2.167,"Jersey"],"JO":[31,36,"Jordan"],"KZ":[48,68,"Kazakhstan"],"KE":[1,38,"Kenya"],"KI":[1.417,173,"Kiribati"],"KP":[40,127,"North Korea"],"KR":[37,127.5,"South Korea"],"KW":[29.3,47.5,"Kuwait"],"KG":[41,75,"Kyrgyzstan"],"LA":[18,105,"Laos"],"LV":[57,25,"Latvia"],"LB":[33.833,35.833,"Lebanon"],"LS":[-29.5,28.5,"Lesotho"],"LR":[6.5,-9.5,"Liberia"],"LY":[25,17,"Libya"],"LI":[47.267,9.533,"Liechtenstein"],"LT":[56,24,"Lithuania"],"LU":[49.75,6.167,"Luxembourg"],"MO":[22.167,113.55,"Macau"],"MK":[41.833,22,"Republic of Macedonia"],"MG":[-20,47,"Madagascar"],"MW":[-13.5,34,"Malawi"],"MY":[2.5,112.5,"Malaysia"],"MV":[3.25,73,"Maldives"],"ML":[17,-4,"Mali"],"MT":[35.833,14.583,"Malta"],"IM":[54.25,-4.5,"Isle of Man"],"MH":[9,168,"Marshall Islands"],"MQ":[14.667,-61,"Martinique"],"MR":[20,-12,"Mauritania"],"MU":[-20.283,57.55,"Mauritius"],"YT":[-12.833,45.167,"Mayotte"],"MX":[23,-102,"Mexico"],"FM":[6.917,158.25,"Federated States of Micronesia"],"MD":[47,29,"Moldova"],"MC":[43.733,7.4,"Monaco"],"MN":[46,105,"Mongolia"],"MS":[16.75,-62.2,"Montserrat"],"MA":[32,-5,"Morocco"],"MZ":[-18.25,35,"Mozambique"],"NA":[-22,17,"Namibia"],"NR":[-0.533,166.917,"Nauru"],"NP":[28,84,"Nepal"],"NL":[52.5,5.75,"Netherlands"],"NC":[-21.5,165.5,"New Caledonia"],"NZ":[-41,174,"New Zealand"],"NI":[13,-85,"Nicaragua"],"NE":[16,8,"Niger"],"NG":[10,8,"Nigeria"],"NU":[-19.033,-169.867,"Niue"],"NF":[-29.033,167.95,"Norfolk Island"],"MP":[15.2,145.75,"Northern Mariana Islands"],"NO":[62,10,"Norway"],"OM":[21,57,"Oman"],"PK":[30,70,"Pakistan"],"PW":[7.5,134.5,"Palau"],"PA":[9,-80,"Panama"],"PG":[-6,147,"Papua New Guinea"],"PY":[-23,-58,"Paraguay"],"PE":[-10,-76,"Peru"],"PH":[13,122,"Philippines"],"PN":[-25.067,-130.1,"Pitcairn Islands"],"PL":[52,20,"Poland"],"PT":[39.5,-8,"Portugal"],"PR":[18.25,-66.5,"Puerto Rico"],"QA":[25.5,51.25,"Qatar"],"RE":[-21.15,55.5,"Réunion"],"RO":[45.9,24.9,"Romania"],"RU":[56,38,"Russia"],"RW":[-2,30,"Rwanda"],"SH":[-15.95,-5.7,"Saint Helena"],"KN":[17.333,-62.75,"Saint Kitts and Nevis"],"LC":[13.883,-60.967,"Saint Lucia"],"PM":[46.833,-56.333,"Saint Pierre and Miquelon"],"VC":[13.25,-61.2,"Saint Vincent and the Grenadines"],"WS":[-13.583,-172.333,"Samoa"],"SM":[43.767,12.417,"San Marino"],"ST":[1,7,"São Tomé and Príncipe"],"SA":[25,45,"Saudi Arabia"],"SN":[14,-14,"Senegal"],"RS":[44.131,16.428,"Serbia"],"SC":[-4.583,55.667,"Seychelles"],"SL":[8.5,-11.5,"Sierra Leone"],"SG":[1.367,103.8,"Singapore"],"SK":[48.667,19.5,"Slovakia"],"SI":[46.117,14.817,"Slovenia"],"SB":[-8,159,"Solomon Islands"],"SO":[10,49,"Somalia"],"ZA":[-29,24,"South Africa"],"GS":[-54.5,-37,"South Georgia"],"SS":[7,30,"South Sudan"],"ES":[40,-4,"Spain"],"LK":[7,81,"Sri Lanka"],"SD":[15,30,"Sudan"],"SR":[4,-56,"Suriname"],"SJ":[78,20,"Svalbard and Jan Mayen"],"SZ":[-26.5,31.5,"Swaziland"],"SE":[62,15,"Sweden"],"CH":[47,8,"Switzerland"],"SY":[35,38,"Syria"],"TW":[23.5,121,"Taiwan"],"TJ":[39,71,"Tajikistan"],"TZ":[-6,35,"Tanzania"],"TH":[15,100,"Thailand"],"TL":[-8.833,125.917,"East Timor"],"TG":[8,1.167,"Togo"],"TK":[-9,-172,"Tokelau"],"TO":[-20,-175,"Tonga"],"TT":[11,-61,"Trinidad and Tobago"],"TN":[34,9,"Tunisia"],"TR":[39,35,"Turkey"],"TM":[40,60,"Turkmenistan"],"TV":[-8,178,"Tuvalu"],"UG":[1,32,"Uganda"],"UA":[49,32,"Ukraine"],"AE":[24,54,"United Arab Emirates"],"GB":[54,-2,"United Kingdom"],"US":[39,-98,"United States"],"UY":[-33,-56,"Uruguay"],"UZ":[41,64,"Uzbekistan"],"VU":[-16,167,"Vanuatu"],"VE":[8,-66,"Venezuela"],"VN":[16.167,107.833,"Vietnam"],"WF":[-13.3,-176.2,"Wallis and Futuna"],"EH":[24.5,-13,"Western Sahara"],"YE":[15,48,"Yemen"],"ZM":[-15,30,"Zambia"],"ZW":[-20,30,"Zimbabwe"]};
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const num = (v) => typeof v === 'number' && Number.isFinite(v) ? v.toLocaleString('en-US') : '—';
const dateText = (s) => {
  const d=new Date(s);return Number.isNaN(d.valueOf())?'—':d.toLocaleString('en-GB',{timeZone:'UTC',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})+' UTC';
};
let snapshot = null;
let range = '24h';
function renderNode(name, node){
  const el = $('#'+name); if (!el) return;
  const observed = !!node && node.online === true;
  $('.observer-status',el).textContent = observed ? (node.synchronized === true ? '● Synced at snapshot' : '● Observed') : '● No observation';
  $('.observer-status',el).classList.toggle('not-ready', !observed || node.synchronized !== true);
  $('.n-height',el).textContent = num(node?.height);
  $('.n-connections',el).textContent = num(node?.connections);
  $('.n-peers',el).textContent = num(node?.unique_peer_ids);
}
function loadChart(points, label){
 const svg=$('#trendChart'); svg.innerHTML='';
 const make=(tag,attrs)=>{let n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,String(v));return n;};
 const valid=(Array.isArray(points)?points:[]).filter(x=>Number.isFinite(Number(x.peers))&&!Number.isNaN(new Date(x.t).valueOf())).sort((a,b)=>new Date(a.t)-new Date(b.t));
 $('#chartStart').textContent=valid.length?dateText(valid[0].t):'No observations';
 $('#chartEnd').textContent=valid.length?dateText(valid.at(-1).t):'—';
 $('#trendValue').textContent=valid.length?num(Number(valid.at(-1).peers)):'—';
 $('#windowLabel').textContent=`${label} · ${valid.length} samples`;
 const W=700,H=220,L=36,R=18,T=18,B=22,chartW=W-L-R,chartH=H-T-B;
 svg.appendChild(make('defs',{}));
 const defs=$('defs',svg), gradient=make('linearGradient',{id:'fillHistory',x1:'0%',x2:'0%',y1:'0%',y2:'100%'});
 gradient.appendChild(make('stop',{offset:'0%','stop-color':'#eeb65e','stop-opacity':'.25'}));
 gradient.appendChild(make('stop',{offset:'100%','stop-color':'#eeb65e','stop-opacity':'.015'}));defs.appendChild(gradient);
 const values=valid.map(x=>Number(x.peers));
 const min=values.length?Math.min(...values):0,max=values.length?Math.max(...values):0;
 const low=Math.max(0,min-1),high=Math.max(low+2,max+1);
 for(let i=0;i<4;i++){
   const y=T+i*chartH/3;
   svg.appendChild(make('line',{x1:L,y1:y,x2:W-R,y2:y,stroke:'#3c444d','stroke-dasharray':'4 8','stroke-opacity':'.62'}));
   const tick=make('text',{x:L-13,y:y+4,fill:'#929fab','font-size':12,'text-anchor':'end'});tick.textContent=(high-i*(high-low)/3).toFixed((high-low)>6?0:1);svg.appendChild(tick);
 }
 if(!valid.length){const t=make('text',{x:W/2,y:H/2,fill:'#b0b9c3','font-size':14,'text-anchor':'middle'});t.textContent='History will appear after observations are recorded';svg.appendChild(t);$('#chartNote').textContent='History is still building. Check back as new measurements arrive.';return;}
 const start=new Date(valid[0].t).getTime(),end=new Date(valid.at(-1).t).getTime();
 const pts=valid.map((p,i)=>{const xt=end>start ? (new Date(p.t).getTime()-start)/(end-start) : .5;return [L+xt*chartW,T+(high-Number(p.peers))/(high-low)*chartH];});
 if(pts.length===1){svg.appendChild(make('circle',{cx:pts[0][0],cy:pts[0][1],r:5,fill:'#ffcc80'}));$('#chartNote').textContent='More measurements will complete this view.';return;}
 const path=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(2)+' '+p[1].toFixed(2)).join(' ');
 svg.appendChild(make('path',{d:path+` L${pts.at(-1)[0]} ${T+chartH} L${pts[0][0]} ${T+chartH} Z`,fill:'url(#fillHistory)'}));
 svg.appendChild(make('path',{d:path,fill:'none',stroke:'#fac578','stroke-width':2.8,'stroke-linecap':'round','stroke-linejoin':'round'}));
 for(const p of [pts[0],pts.at(-1)])svg.appendChild(make('circle',{cx:p[0],cy:p[1],r:4,fill:'#f5bd6c',stroke:'#0b111b','stroke-width':2}));
 const duration=Math.round((end-start)/60000);
 $('#chartNote').textContent=`${valid.length} measurements across ${duration < 60 ? duration+' minute(s)' : (duration/60).toFixed(1)+' hour(s)'}.`;
}
function render(data){
  if(!data || data.schema_version!==1 || typeof data.network!=='object' || !data.nodes)throw new Error('Unexpected public snapshot schema');
  snapshot=data;
  const sample=data.mode==='sample';
  const stamp=new Date(data.observed_at).getTime();
  const age=(Date.now()-stamp)/1000;
  const fresh=!sample && Number.isFinite(age) && age>=-60 && age<180 && data.network.observation_complete===true;
  const status=$('#dataStatus');status.classList.toggle('warning',!fresh);status.classList.remove('offline');
  status.innerHTML=`<span class="statuslight"></span>${sample?'Saved sample data':fresh?'Recent measurement':'Historical / stale snapshot'}`;
  $('#pulseLabel').textContent=sample?'Demonstration snapshot':fresh?'Observers reporting':'Last recorded observation';
  $('#observedTime').textContent=dateText(data.observed_at);
  $('#peers').textContent=num(data.network.unique_observed_peer_ids);
  const total=data.network.unique_observed_peer_ids;
  const components=[['shared_peer_ids','sharedBar','sharedCount'],['node1_only','node1Bar','n1only'],['node2_only','node2Bar','n2only']];
  for(const [field,bar,count] of components){
    const value=data.network[field];
    $('#'+count).textContent=num(value);
    $('#'+bar).style.width=Number.isInteger(value)&&total>0?`${Math.max(0,Math.min(100,100*value/total))}%`:'0%';
  }
  const nodes=Object.values(data.nodes);
  $('#connections').textContent=nodes.every(n=>typeof n.connections==='number')?num(nodes.reduce((a,b)=>a+b.connections,0)):'—';
  $('#synced').textContent=`${nodes.filter(n=>n.online===true && n.synchronized===true).length}/${nodes.length}`;
  $('#height').textContent=num(data.nodes.node1?.height ?? data.nodes.node2?.height);
  renderNode('node1',data.nodes.node1);renderNode('node2',data.nodes.node2);
  renderGeography(data.geography,sample);
  const titles={'24h':'24 hours','7d':'7 days','30d':'30 days'};
  loadChart(data.history?.[range],titles[range]);
}

// Representative country coordinates; never per-peer locations.
let selectedCountry = null;
const makeGeoSvg = (tag, attrs={}) => {
  const n=document.createElementNS('http://www.w3.org/2000/svg',tag);
  for (const [k,v] of Object.entries(attrs)) n.setAttribute(k,String(v));
  return n;
};
const countryFlag = code => /^[A-Z]{2}$/.test(code) ? [...code].map(x=>String.fromCodePoint(x.charCodeAt(0)+127397)).join('') : '🌐';
const countryName = code => COUNTRY_LOCATIONS[code]?.[2] || code;
const coordinate = code => {
  const p=COUNTRY_LOCATIONS[code];
  if(!p)return null;
  const [lat,lon]=p;
  return {x:((lon+180)/360)*1120,y:((90-lat)/180)*510};
};
function selectCountry(code) {
  selectedCountry=code;
  const item=$(`.country-item[data-country="${code}"]`);
  const pin=$(`.geo-pin[data-country="${code}"]`);
  $$('.country-item, .geo-pin').forEach(el=>el.classList.toggle('selected',el.dataset.country===code));
  $$('.geo-route').forEach(edge=>{
    const connected=edge.dataset.from===code || edge.dataset.to===code;
    edge.classList.toggle('focused',connected);
    edge.classList.toggle('unfocused',!connected);
  });
  if(!item)return;
  $('#geoInspector').hidden=false;
  $('#geoSelectedCountry').textContent=countryName(code);
  $('#geoSelectedCount').textContent=item.dataset.count;
}
// Country-to-country arcs are decorative visual routes, never measured P2P links.
// They are computed only from the countries present in the observed GeoIP aggregate.
function decorativeRoutes(points){
  if(points.length<2)return [];
  const edges=[];
  const used=new Set([0]);
  const key=(a,b)=>[a,b].sort().join(':');
  const keys=new Set();
  const dist=(a,b)=>Math.hypot(a.xy.x-b.xy.x,a.xy.y-b.xy.y);
  // A minimum spanning tree connects every country without a crowded mesh.
  while(used.size<points.length){
    let winner=null;
    for(const i of used){
      for(let j=0;j<points.length;j++){
        if(used.has(j))continue;
        const d=dist(points[i],points[j]);
        if(!winner || d<winner.d)winner={i,j,d};
      }
    }
    if(!winner)break;
    used.add(winner.j);
    edges.push([points[winner.i],points[winner.j]]);
    keys.add(key(points[winner.i].code,points[winner.j].code));
  }
  // Up to two sweeping long-distance arcs add depth without overwhelming Europe.
  const extra=[];
  for(let i=0;i<points.length;i++)for(let j=i+1;j<points.length;j++){
    const a=points[i],b=points[j],d=dist(a,b);
    if(d>175 && d<710 && !keys.has(key(a.code,b.code))){
      extra.push({a,b,d,score:d+(a.count+b.count)*8});
    }
  }
  extra.sort((a,b)=>b.score-a.score);
  for(const item of extra){
    if(edges.length>=Math.min(11,points.length+2))break;
    edges.push([item.a,item.b]);
    keys.add(key(item.a.code,item.b.code));
  }
  return edges;
}
function drawVisualRoutes(svg, points){
  const located=points.map(p=>({...p,xy:coordinate(p.code)})).filter(p=>p.xy);
  if(located.length<2)return;
  const defs=makeGeoSvg('defs');
  const gradient=makeGeoSvg('linearGradient',{id:'geoRouteGold',x1:'0%',y1:'0%',x2:'100%',y2:'0%'});
  for(const [offset,color,opacity] of [['0%','#bf8b36','.20'],['46%','#f9cd78','.78'],['100%','#f5b94e','.24']]){
    gradient.appendChild(makeGeoSvg('stop',{offset,'stop-color':color,'stop-opacity':opacity}));
  }
  defs.appendChild(gradient);
  svg.appendChild(defs);
  const layer=makeGeoSvg('g',{class:'geo-route-layer','aria-hidden':'true'});
  const routes=decorativeRoutes(located);
  routes.forEach(([a,b],i)=>{
    const dx=b.xy.x-a.xy.x,dy=b.xy.y-a.xy.y;
    const distance=Math.hypot(dx,dy);
    const midx=(a.xy.x+b.xy.x)/2,midy=(a.xy.y+b.xy.y)/2;
    // Gently lifted arcs, with subtle alternating bends in dense clusters.
    const rise=Math.min(105,Math.max(15,distance*.16));
    const direction=(distance<85 && i%2)?-1:1;
    const cx=midx-(dy/(distance||1))*rise*.38*direction;
    const cy=midy-(dx/(distance||1))*rise*.38*direction-rise*.72;
    const d=`M ${a.xy.x.toFixed(1)} ${a.xy.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${b.xy.x.toFixed(1)} ${b.xy.y.toFixed(1)}`;
    const group=makeGeoSvg('g',{class:'geo-route','data-from':a.code,'data-to':b.code});
    const background=makeGeoSvg('path',{d,class:'geo-route-shadow'});
    const base=makeGeoSvg('path',{d,class:'geo-route-base'});
    const flow=makeGeoSvg('path',{d,class:'geo-route-flow',pathLength:'100'});
    flow.style.setProperty('--travel-delay',`${-(i*1.27)%8}s`);
    flow.style.setProperty('--travel-time',`${6.4+(i%4)*1.15}s`);
    group.append(background,base,flow);
    // A tiny moving signal follows the exact same curve as the luminous arc.
    // SVG motion pauses visually for reduced-motion users via CSS.
    if(i<10){
      const sparkle=makeGeoSvg('circle',{class:'geo-route-spark',r:distance>180?'2.9':'2.1'});
      const motion=makeGeoSvg('animateMotion',{dur:`${7.4+(i%4)*1.4}s`,begin:`-${(i*1.1).toFixed(1)}s`,repeatCount:'indefinite',path:d,rotate:'auto'});
      sparkle.appendChild(motion);group.appendChild(sparkle);
    }
    layer.appendChild(group);
  });
  svg.appendChild(layer);
}

function renderGeography(g, sample=false) {
  const stage=$('.atlas-stage'), svg=$('#geoMarkers'), section=$('#countrySection');
  const valid=!!g && g.available===true && Array.isArray(g.countries) &&
    Number.isInteger(g.unique_public_ips) && Number.isInteger(g.countries_count) &&
    g.countries.length===g.countries_count &&
    g.countries.every(c=>/^[A-Z]{2}$/.test(c.code) && Number.isInteger(c.count) && c.count>0) &&
    g.countries.reduce((n,c)=>n+c.count,Number(g.unknown_country)||0)===g.unique_public_ips;
  stage.classList.toggle('has-geo',valid);
  svg.replaceChildren();section.hidden=!valid;
  if(!valid){
    $('#mapStatus').textContent='Global visualization';
    $('#atlasHeadline').textContent='One connected network.';
    $('#atlasSubhead').textContent='Powered by independent participants.';
    $('#geoNote').textContent='Illustrative topology';
    $('#geoInspector').hidden=true;
    return;
  }
  const points=[...g.countries].sort((a,b)=>b.count-a.count||a.code.localeCompare(b.code));
  $('#mapStatus').textContent=`${g.countries_count} countries observed`;
  $('#atlasHeadline').textContent=sample?'Example network geography.':`${g.countries_count} countries observed.`;
  $('#atlasSubhead').textContent=`${g.unique_public_ips} public IPs · ${sample?'saved measurement':'local GeoIP'}`;
  $('#countryStats').textContent=`${g.unique_public_ips} public IPs`;
  $('#geoLegend').innerHTML='<span class="legend-mark gold"></span> Country markers <span class="legend-mark muted"></span> Animated visual routes';
  const list=$('#countryList');list.replaceChildren();
  // v1.5: real topology rendered by feelnet-v15.js
  for(const item of points){
    const code=item.code, name=countryName(code), count=item.count, xy=coordinate(code);
    const button=document.createElement('button');button.type='button';
    button.className='country-item';button.dataset.country=code;button.dataset.count=String(count);
    const left=document.createElement('span');left.className='country-name';
    const flag=document.createElement('span');flag.className='country-flag';flag.textContent=countryFlag(code);flag.setAttribute('aria-hidden','true');
    left.append(flag,document.createTextNode(name));
    const right=document.createElement('span');right.className='country-value';right.textContent=String(count);
    button.append(left,right);button.setAttribute('aria-label',`${name}: ${count} observed public IPs`);
    button.addEventListener('click',()=>selectCountry(code));
    list.appendChild(button);
    if(!xy)continue;
    const pin=makeGeoSvg('g',{class:'geo-pin','data-country':code,tabindex:'0',role:'button',
      'aria-label':`${name}, ${count} observed public IP addresses`,transform:`translate(${xy.x.toFixed(1)} ${xy.y.toFixed(1)})`});
    pin.dataset.country=code;
    const title=makeGeoSvg('title');title.textContent=`${name}: ${count} public IP${count===1?'':'s'}`;pin.append(title);
    const r=7.5+Math.min(3.5,Math.sqrt(count)*1.5);
    for(const cls of ['geo-ring','geo-ring delay'])pin.appendChild(makeGeoSvg('circle',{r:r+7,class:cls}));
    pin.appendChild(makeGeoSvg('circle',{r:r+4,class:'geo-halo'}));
    pin.appendChild(makeGeoSvg('circle',{r:r,class:'geo-core'}));
    pin.appendChild(makeGeoSvg('circle',{r:r-3.5,class:'geo-inner'}));
    if(count>1){const label=makeGeoSvg('text',{x:0,y:1,class:'geo-count'});label.textContent=String(count);pin.append(label);}
    pin.addEventListener('click',()=>selectCountry(code));
    pin.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCountry(code);}});
    pin.addEventListener('mouseenter',()=>selectCountry(code));
    svg.appendChild(pin);
  }
  const chosen=points.find(x=>x.code===selectedCountry)?.code || points[0]?.code;
  if(chosen)selectCountry(chosen);
}

async function refresh(){
 const button=$('#refresh');button.disabled=true;
 try{
   const r=await fetch('./data/network.json?ts='+Date.now(),{cache:'no-store'});
   if(!r.ok)throw new Error('HTTP '+r.status);
   render(await r.json());
 }catch(e){
   const status=$('#dataStatus');status.classList.add('offline');status.innerHTML='<span class="statuslight"></span> Data unavailable';
   $('#pulseLabel').textContent='Public data could not be loaded';
   $('#observedTime').textContent='Inspect the static data file or exporter';
   if(!snapshot)loadChart([],'24 hours');
   console.error('FeelNet snapshot:',e);
 }finally{button.disabled=false;}
}
$$('.period').forEach(b=>b.addEventListener('click',()=>{
  range=b.dataset.range;$$('.period').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});
  if(snapshot)loadChart(snapshot.history?.[range],{'24h':'24 hours','7d':'7 days','30d':'30 days'}[range]);
}));
$('#refresh').addEventListener('click',refresh);
refresh();setInterval(refresh,60000);
