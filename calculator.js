/* tool-caprini · Elucenia · https://github.com/Elucenia/tool-caprini
   Copyright (c) 2026 Elucenia · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"caprini","title":"Escore de Caprini","fields":[["idade","Idade","radio",{"opts":{"0":"≤ 40 anos","1":"41 a 60","2":"61 a 74","3":"≥ 75"}}],["cir_menor","Cirurgia menor planejada (1)","chk",{"pts":1}],["cir_maior_prev","Cirurgia maior há menos de 1 mês (1)","chk",{"pts":1}],["varizes","Varizes de membros inferiores (1)","chk",{"pts":1}],["dii","Doença inflamatória intestinal (1)","chk",{"pts":1}],["edema","Edema atual de membros inferiores (1)","chk",{"pts":1}],["obesidade","IMC &gt; 25 kg/m² (1)","chk",{"pts":1}],["iam","Infarto agudo do miocárdio (1)","chk",{"pts":1}],["icc","Insuficiência cardíaca há menos de 1 mês (1)","chk",{"pts":1}],["sepse","Sepse há menos de 1 mês (1)","chk",{"pts":1}],["pulmonar","Doença pulmonar grave, incluindo pneumonia, há menos de 1 mês (1)","chk",{"pts":1}],["dpoc","Função pulmonar alterada (DPOC) (1)","chk",{"pts":1}],["repouso","Paciente clínico em repouso no leito (1)","chk",{"pts":1}],["hormonio","Anticoncepcional oral ou reposição hormonal (1)","chk",{"pts":1}],["gestacao","Gestação ou pós-parto (1)","chk",{"pts":1}],["obst","Natimorto inexplicado, ≥ 3 abortos espontâneos ou parto prematuro com toxemia ou restrição de crescimento (1)","chk",{"pts":1}],["artroscopia","Cirurgia artroscópica (2)","chk",{"pts":2}],["cancer","Neoplasia maligna atual ou prévia (2)","chk",{"pts":2}],["cir_maior","Cirurgia aberta de grande porte (&gt; 45 min) (2)","chk",{"pts":2}],["laparoscopia","Cirurgia laparoscópica (&gt; 45 min) (2)","chk",{"pts":2}],["acamado","Restrito ao leito (&gt; 72 h) (2)","chk",{"pts":2}],["gesso","Imobilização gessada há menos de 1 mês (2)","chk",{"pts":2}],["cvc","Acesso venoso central (2)","chk",{"pts":2}],["tev_prev","TVP ou TEP prévio (3)","chk",{"pts":3}],["hf_trombose","História familiar de trombose (3)","chk",{"pts":3}],["fvl","Fator V de Leiden (3)","chk",{"pts":3}],["protrombina","Mutação da protrombina 20210A (3)","chk",{"pts":3}],["lupico","Anticoagulante lúpico (3)","chk",{"pts":3}],["anticardiolipina","Anticorpos anticardiolipina elevados (3)","chk",{"pts":3}],["homocisteina","Homocisteína sérica elevada (3)","chk",{"pts":3}],["hit","Trombocitopenia induzida por heparina (3)","chk",{"pts":3}],["trombofilia","Outra trombofilia congênita ou adquirida (3)","chk",{"pts":3}],["artroplastia","Artroplastia eletiva de quadril ou joelho (5)","chk",{"pts":5}],["fratura","Fratura de quadril, pelve ou perna há menos de 1 mês (5)","chk",{"pts":5}],["avc","AVC há menos de 1 mês (5)","chk",{"pts":5}],["politrauma","Politrauma há menos de 1 mês (5)","chk",{"pts":5}],["medular","Lesão medular aguda com paralisia há menos de 1 mês (5)","chk",{"pts":5}]],"config":{"unit":"","label":"Escore de Caprini","fields":[["idade","radio",0],["cir_menor","chk",1],["cir_maior_prev","chk",1],["varizes","chk",1],["dii","chk",1],["edema","chk",1],["obesidade","chk",1],["iam","chk",1],["icc","chk",1],["sepse","chk",1],["pulmonar","chk",1],["dpoc","chk",1],["repouso","chk",1],["hormonio","chk",1],["gestacao","chk",1],["obst","chk",1],["artroscopia","chk",2],["cancer","chk",2],["cir_maior","chk",2],["laparoscopia","chk",2],["acamado","chk",2],["gesso","chk",2],["cvc","chk",2],["tev_prev","chk",3],["hf_trombose","chk",3],["fvl","chk",3],["protrombina","chk",3],["lupico","chk",3],["anticardiolipina","chk",3],["homocisteina","chk",3],["hit","chk",3],["trombofilia","chk",3],["artroplastia","chk",5],["fratura","chk",5],["avc","chk",5],["politrauma","chk",5],["medular","chk",5]],"bands":[[0,"low","Risco muito baixo de TEV (&lt; 0,5%)","Deambulação precoce; sem profilaxia farmacológica ou mecânica específica."],[1,"low","Risco baixo de TEV (~1,5%)","Profilaxia mecânica, de preferência compressão pneumática intermitente."],[3,"mid","Risco moderado de TEV (~3,0%)","HBPM ou heparina não fracionada em dose baixa; profilaxia mecânica se o risco de sangramento for alto."],[5,"high","Risco alto de TEV (~6,0%)","HBPM ou heparina não fracionada em dose baixa associada a profilaxia mecânica (meias ou compressão pneumática)."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* Elucenia arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
