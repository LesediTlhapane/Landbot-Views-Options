const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["chunks/VNud9nuV-index.js","landbot-3.0.0.mjs","chunks/landbot-vendor.js","chunks/landbot-core.js"])))=>i.map(i=>d[i]);
import{o as $,d as C,r as o,j as l,_ as R,__tla as E}from"../landbot-3.0.0.mjs";let k,f,d,P=Promise.all([(()=>{try{return E}catch{}})()]).then(async()=>{let D,y,x;f=e=>e instanceof Date&&!isNaN(e.getTime()),d=(e,u)=>{const p=u.toUpperCase().split("/"),s=e.split("/"),n=new Date;return n.setMonth(0,1),n.setHours(0,0,0,0),p.forEach((h,r)=>{switch(h){case"DD":n.setDate(parseInt(s[r],10));break;case"MM":n.setMonth(parseInt(s[r],10)-1);break;case"YYYY":n.setFullYear(parseInt(s[r],10));break;case"YY":parseInt(s[r],10)>=new Date().getFullYear()-1950?n.setFullYear(parseInt("19"+s[r],10)):n.setFullYear(parseInt("20"+s[r],10))}}),n},D=C.div`
  ${({$isOutTop:e})=>e?`
    top: -100%;
  `:`
    bottom: 100%;
  `}
  position: absolute;
  z-index: 100;
  background-color: ${({theme:e})=>e.palette.white.main};
  padding: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  color: ${({theme:e})=>e.palette.neutral[700]};
`,y=$`
  .rdp-root {
    --rdp-accent-color: ${({theme:e})=>e.palette.neutral[400]};
    --rdp-today-color: ${({theme:e})=>e.palette.neutral[400]};
  }


  .rdp-selected .rdp-day_button {
    font-family: var(--font_family), BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
  }

  .rdp-day_button:hover {
    background-color: ${({theme:e})=>e.palette.neutral[100]}!important;
  }
`,x=o.lazy(()=>R(()=>import("./VNud9nuV-index.js"),__vite__mapDeps([0,1,2,3])).then(e=>({default:e.DayPicker})));function w(e,u){return p=e,Number.isNaN(Date.parse(p))?d(e,u):new Date(e);var p}k=({formatDate:e,startMonthDate:u,endMonthDate:p,initialMonth:s,showDatePicker:n,required:h,value:r,name:I,inputRef:j,messageIsValidDate:b,onChange:i,onKeyDown:Y})=>{const[F,v]=o.useState(""),c=typeof r=="string"&&r?w(r,e):r,[g,S]=o.useState(!1),[N,_]=o.useState(!1),M=o.useRef(j||null),m=o.useRef(null);return o.useEffect(()=>{c&&v(((t,a)=>a.toUpperCase().replace("DD",t.getDate().toString().padStart(2,"0")).replace("MM",(t.getMonth()+1).toString().padStart(2,"0")).replace("YYYY",t.getFullYear().toString()).replace("YY",t.getFullYear().toString().slice(-2)))(c,e))},[e,c]),o.useEffect(()=>{g&&setTimeout(()=>{_(!!(m.current&&m.current.getBoundingClientRect().top<0))},200)},[g,_]),l.jsx("div",{onKeyDown:Y,children:l.jsxs("div",{className:"DayPickerInput",children:[l.jsx("input",{type:"text",placeholder:e,className:"input",value:F,onChange:t=>{if(v(t.target.value),e.split("").filter(a=>a!=="/").length<=t.target.value.split("").filter(a=>a!=="/").length){const a=d(t.target.value,e);f(a)&&b(a)&&(i==null||i(a))}},onClick:()=>{n&&S(!0)},ref:M,name:I}),g&&l.jsxs(o.Suspense,{fallback:l.jsx("div",{}),children:[l.jsx(y,{}),l.jsx(D,{ref:m,$isOutTop:N,children:l.jsx(x,{mode:"single",required:h,selected:c,onSelect:t=>{var a;t?i&&i(t):i&&i(void 0),S(!1),(a=M.current)==null||a.focus()},modifiers:{disabled:t=>!b(t)},captionLayout:"dropdown",startMonth:u,endMonth:p,defaultMonth:new Date(s.year,s.month)})})]})]})})}});export{k as I,P as __tla,f as i,d as p};
