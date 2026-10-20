import{r as b,a as en,y as lr,p as U,s as nn,d as Z,t as za,v as It,j as N,w as Ee,x as $a,z as et,A as ae,R as W,P as A,u as Da,c as cr,q as Ta,b as Fa,B as Wa,C as _a,D as Ba,E as Ya,Y as ur}from"../landbot-3.0.0.mjs";import"./landbot-vendor.js";import"./landbot-core.js";const fr=Math.min,ie=Math.max,Se=Math.round,xt=t=>({x:t,y:t});function dr(t){return t.split("-")[0]}function mr(t){return["top","bottom"].includes(dr(t))?"y":"x"}function pr(t){const{x:e,y:n,width:r,height:o}=t;return{width:r,height:o,top:n,left:e,right:e+r,bottom:n+o,x:e,y:n}}function hr(t,e,n){let{reference:r,floating:o}=t;const a=mr(e),i=function(h){return mr(h)==="x"?"y":"x"}(e),l=i==="y"?"height":"width",s=dr(e),c=a==="y",u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[l]/2-o[l]/2;let m;switch(s){case"top":m={x:u,y:r.y-o.height};break;case"bottom":m={x:u,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:d};break;case"left":m={x:r.x-o.width,y:d};break;default:m={x:r.x,y:r.y}}switch(function(h){return h.split("-")[1]}(e)){case"start":m[i]-=f*(n&&c?-1:1);break;case"end":m[i]+=f*(n&&c?-1:1)}return m}function Yt(t){return gr(t)?(t.nodeName||"").toLowerCase():"#document"}function rt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function wt(t){var e;return(e=(gr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gr(t){return t instanceof Node||t instanceof rt(t).Node}function st(t){return t instanceof Element||t instanceof rt(t).Element}function dt(t){return t instanceof HTMLElement||t instanceof rt(t).HTMLElement}function br(t){return typeof ShadowRoot<"u"&&(t instanceof ShadowRoot||t instanceof rt(t).ShadowRoot)}function se(t){const{overflow:e,overflowX:n,overflowY:r,display:o}=lt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(o)}function Ha(t){return["table","td","th"].includes(Yt(t))}function Oe(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function rn(t){const e=on(),n=st(t)?lt(t):t;return n.transform!=="none"||n.perspective!=="none"||!!n.containerType&&n.containerType!=="normal"||!e&&!!n.backdropFilter&&n.backdropFilter!=="none"||!e&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function on(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ht(t){return["html","body","#document"].includes(Yt(t))}function lt(t){return rt(t).getComputedStyle(t)}function Ae(t){return st(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function kt(t){if(Yt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||br(t)&&t.host||wt(t);return br(e)?e.host:e}function yr(t){const e=kt(t);return Ht(e)?t.ownerDocument?t.ownerDocument.body:t.body:dt(e)&&se(e)?e:yr(e)}function Ut(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const o=yr(t),a=o===((r=t.ownerDocument)==null?void 0:r.body),i=rt(o);if(a){const l=an(i);return e.concat(i,i.visualViewport||[],se(o)?o:[],l&&n?Ut(l):[])}return e.concat(o,Ut(o,[],n))}function an(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function vr(t){const e=lt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const o=dt(t),a=o?t.offsetWidth:n,i=o?t.offsetHeight:r,l=Se(n)!==a||Se(r)!==i;return l&&(n=a,r=i),{width:n,height:r,$:l}}function xr(t){return st(t)?t:t.contextElement}function qt(t){const e=xr(t);if(!dt(e))return xt(1);const n=e.getBoundingClientRect(),{width:r,height:o,$:a}=vr(e);let i=(a?Se(n.width):n.width)/r,l=(a?Se(n.height):n.height)/o;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}const Ua=xt(0);function wr(t){const e=rt(t);return on()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:Ua}function le(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const o=t.getBoundingClientRect(),a=xr(t);let i=xt(1);e&&(r?st(r)&&(i=qt(r)):i=qt(t));const l=function(f,m,h){return m===void 0&&(m=!1),!(!h||m&&h!==rt(f))&&m}(a,n,r)?wr(a):xt(0);let s=(o.left+l.x)/i.x,c=(o.top+l.y)/i.y,u=o.width/i.x,d=o.height/i.y;if(a){const f=rt(a),m=r&&st(r)?rt(r):r;let h=f,y=an(h);for(;y&&r&&m!==h;){const x=qt(y),g=y.getBoundingClientRect(),p=lt(y),R=g.left+(y.clientLeft+parseFloat(p.paddingLeft))*x.x,w=g.top+(y.clientTop+parseFloat(p.paddingTop))*x.y;s*=x.x,c*=x.y,u*=x.x,d*=x.y,s+=R,c+=w,h=rt(y),y=an(h)}}return pr({width:u,height:d,x:s,y:c})}function kr(t){return le(wt(t)).left+Ae(t).scrollLeft}function Er(t,e,n){let r;if(e==="viewport")r=function(o,a){const i=rt(o),l=wt(o),s=i.visualViewport;let c=l.clientWidth,u=l.clientHeight,d=0,f=0;if(s){c=s.width,u=s.height;const m=on();(!m||m&&a==="fixed")&&(d=s.offsetLeft,f=s.offsetTop)}return{width:c,height:u,x:d,y:f}}(t,n);else if(e==="document")r=function(o){const a=wt(o),i=Ae(o),l=o.ownerDocument.body,s=ie(a.scrollWidth,a.clientWidth,l.scrollWidth,l.clientWidth),c=ie(a.scrollHeight,a.clientHeight,l.scrollHeight,l.clientHeight);let u=-i.scrollLeft+kr(o);const d=-i.scrollTop;return lt(l).direction==="rtl"&&(u+=ie(a.clientWidth,l.clientWidth)-s),{width:s,height:c,x:u,y:d}}(wt(t));else if(st(e))r=function(o,a){const i=le(o,!0,a==="fixed"),l=i.top+o.clientTop,s=i.left+o.clientLeft,c=dt(o)?qt(o):xt(1);return{width:o.clientWidth*c.x,height:o.clientHeight*c.y,x:s*c.x,y:l*c.y}}(e,n);else{const o=wr(t);r={...e,x:e.x-o.x,y:e.y-o.y}}return pr(r)}function Sr(t,e){const n=kt(t);return!(n===e||!st(n)||Ht(n))&&(lt(n).position==="fixed"||Sr(n,e))}function qa(t,e,n){const r=dt(e),o=wt(e),a=n==="fixed",i=le(t,!0,a,e);let l={scrollLeft:0,scrollTop:0};const s=xt(0);if(r||!r&&!a)if((Yt(e)!=="body"||se(o))&&(l=Ae(e)),r){const c=le(e,!0,a,e);s.x=c.x+e.clientLeft,s.y=c.y+e.clientTop}else o&&(s.x=kr(o));return{x:i.left+l.scrollLeft-s.x,y:i.top+l.scrollTop-s.y,width:i.width,height:i.height}}function sn(t){return lt(t).position==="static"}function Or(t,e){return dt(t)&&lt(t).position!=="fixed"?e?e(t):t.offsetParent:null}function Ar(t,e){const n=rt(t);if(Oe(t))return n;if(!dt(t)){let o=kt(t);for(;o&&!Ht(o);){if(st(o)&&!sn(o))return o;o=kt(o)}return n}let r=Or(t,e);for(;r&&Ha(r)&&sn(r);)r=Or(r,e);return r&&Ht(r)&&sn(r)&&!rn(r)?n:r||function(o){let a=kt(o);for(;dt(a)&&!Ht(a);){if(rn(a))return a;if(Oe(a))return null;a=kt(a)}return null}(t)||n}const Xa={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:o}=t;const a=o==="fixed",i=wt(r),l=!!e&&Oe(e.floating);if(r===i||l&&a)return n;let s={scrollLeft:0,scrollTop:0},c=xt(1);const u=xt(0),d=dt(r);if((d||!d&&!a)&&((Yt(r)!=="body"||se(i))&&(s=Ae(r)),dt(r))){const f=le(r);c=qt(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}},getDocumentElement:wt,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:o}=t;const a=[...n==="clippingAncestors"?Oe(e)?[]:function(s,c){const u=c.get(s);if(u)return u;let d=Ut(s,[],!1).filter(y=>st(y)&&Yt(y)!=="body"),f=null;const m=lt(s).position==="fixed";let h=m?kt(s):s;for(;st(h)&&!Ht(h);){const y=lt(h),x=rn(h);x||y.position!=="fixed"||(f=null),(m?!x&&!f:!x&&y.position==="static"&&f&&["absolute","fixed"].includes(f.position)||se(h)&&!x&&Sr(s,h))?d=d.filter(g=>g!==h):f=y,h=kt(h)}return c.set(s,d),d}(e,this._c):[].concat(n),r],i=a[0],l=a.reduce((s,c)=>{const u=Er(e,c,o);return s.top=ie(u.top,s.top),s.right=fr(u.right,s.right),s.bottom=fr(u.bottom,s.bottom),s.left=ie(u.left,s.left),s},Er(e,i,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Ar,getElementRects:async function(t){const e=this.getOffsetParent||Ar,n=this.getDimensions,r=await n(t.floating);return{reference:qa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=vr(t);return{width:e,height:n}},getScale:qt,isElement:st,isRTL:function(t){return lt(t).direction==="rtl"}},Va=(t,e,n)=>{const r=new Map,o={platform:Xa,...n},a={...o.platform,_c:r};return(async(i,l,s)=>{const{placement:c="bottom",strategy:u="absolute",middleware:d=[],platform:f}=s,m=d.filter(Boolean),h=await(f.isRTL==null?void 0:f.isRTL(l));let y=await f.getElementRects({reference:i,floating:l,strategy:u}),{x,y:g}=hr(y,c,h),p=c,R={},w=0;for(let E=0;E<m.length;E++){const{name:j,fn:k}=m[E],{x:C,y:F,data:I,reset:L}=await k({x,y:g,initialPlacement:c,placement:p,strategy:u,middlewareData:R,rects:y,platform:f,elements:{reference:i,floating:l}});x=C??x,g=F??g,R={...R,[j]:{...R[j],...I}},L&&w<=50&&(w++,typeof L=="object"&&(L.placement&&(p=L.placement),L.rects&&(y=L.rects===!0?await f.getElementRects({reference:i,floating:l,strategy:u}):L.rects),{x,y:g}=hr(y,p,h)),E=-1)}return{x,y:g,placement:p,strategy:u,middlewareData:R}})(t,e,{...o,platform:a})};var Ce=typeof document<"u"?b.useLayoutEffect:b.useEffect;function je(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,o;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!=0;)if(!je(t[r],e[r]))return!1;return!0}if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!=0;)if(!{}.hasOwnProperty.call(e,o[r]))return!1;for(r=n;r--!=0;){const a=o[r];if((a!=="_owner"||!t.$$typeof)&&!je(t[a],e[a]))return!1}return!0}return t!=t&&e!=e}function Cr(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function jr(t,e){const n=Cr(t);return Math.round(e*n)/n}function Nr(t){const e=b.useRef(t);return Ce(()=>{e.current=t}),e}var Rr=function(t){return typeof document>"u"?null:(Array.isArray(t)?t[0]:t).ownerDocument.body},Xt=new WeakMap,Ne=new WeakMap,Re={},Pr=0,Lr=function(t){return t&&(t.host||Lr(t.parentNode))},Mr=function(t,e,n,r){var o=function(d,f){return f.map(function(m){if(d.contains(m))return m;var h=Lr(m);return h&&d.contains(h)?h:(console.error("aria-hidden",m,"in not contained inside",d,". Doing nothing"),null)}).filter(function(m){return!!m})}(e,Array.isArray(t)?t:[t]);Re[n]||(Re[n]=new WeakMap);var a=Re[n],i=[],l=new Set,s=new Set(o),c=function(d){d&&!l.has(d)&&(l.add(d),c(d.parentNode))};o.forEach(c);var u=function(d){d&&!s.has(d)&&Array.prototype.forEach.call(d.children,function(f){if(l.has(f))u(f);else try{var m=f.getAttribute(r),h=m!==null&&m!=="false",y=(Xt.get(f)||0)+1,x=(a.get(f)||0)+1;Xt.set(f,y),a.set(f,x),i.push(f),y===1&&h&&Ne.set(f,!0),x===1&&f.setAttribute(n,"true"),h||f.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",f,g)}})};return u(e),l.clear(),Pr++,function(){i.forEach(function(d){var f=Xt.get(d)-1,m=a.get(d)-1;Xt.set(d,f),a.set(d,m),f||(Ne.has(d)||d.removeAttribute(r),Ne.delete(d)),m||d.removeAttribute(n)}),--Pr||(Xt=new WeakMap,Xt=new WeakMap,Ne=new WeakMap,Re={})}},Ir=function(t,e,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(t)?t:[t]),o=e||Rr(t);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Mr(r,o,n,"aria-hidden")):function(){return null}},Ka=function(t,e,n){n===void 0&&(n="data-inert-ed");var r=e||Rr(t);return r?Mr(t,r,n,"inert"):function(){return null}},zr=function(){return typeof HTMLElement<"u"&&HTMLElement.prototype.hasOwnProperty("inert")},Ga=function(t,e,n){return n===void 0&&(n="data-suppressed"),(zr()?Ka:Ir)(t,e,n)},ln=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),$r=typeof Element>"u",ce=$r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Pe=!$r&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},Le=function t(e,n){var r;n===void 0&&(n=!0);var o=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert");return o===""||o==="true"||n&&e&&t(e.parentNode)},Qa=function t(e,n,r){for(var o=[],a=Array.from(e);a.length;){var i=a.shift();if(!Le(i,!1))if(i.tagName==="SLOT"){var l=i.assignedElements(),s=t(l.length?l:i.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:i,candidates:s})}else{ce.call(i,ln)&&r.filter(i)&&(n||!e.includes(i))&&o.push(i);var c=i.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(i),u=!Le(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(c&&u){var d=t(c===!0?i.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:i,candidates:d})}else a.unshift.apply(a,i.children)}}return o},Dr=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Tr=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(e){var n,r=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"contenteditable");return r===""||r==="true"}(t))&&!Dr(t)?0:t.tabIndex},Ja=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},Fr=function(t){return t.tagName==="INPUT"},Za=function(t){return function(e){return Fr(e)&&e.type==="radio"}(t)&&!function(e){if(!e.name)return!0;var n,r=e.form||Pe(e),o=function(i){return r.querySelectorAll('input[type="radio"][name="'+i+'"]')};if(typeof window<"u"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(e.name));else try{n=o(e.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var a=function(i,l){for(var s=0;s<i.length;s++)if(i[s].checked&&i[s].form===l)return i[s]}(n,e.form);return!a||a===e}(t)},Wr=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return n===0&&r===0},ti=function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=ce.call(t,"details>summary:first-of-type")?t.parentElement:t;if(ce.call(o,"details:not([open]) *"))return!0;if(n&&n!=="full"&&n!=="legacy-full"){if(n==="non-zero-area")return Wr(t)}else{if(typeof r=="function"){for(var a=t;t;){var i=t.parentElement,l=Pe(t);if(i&&!i.shadowRoot&&r(i)===!0)return Wr(t);t=t.assignedSlot?t.assignedSlot:i||l===t.ownerDocument?i:l.host}t=a}if(function(s){var c,u,d,f,m=s&&Pe(s),h=(c=m)===null||c===void 0?void 0:c.host,y=!1;if(m&&m!==s)for(y=!!((u=h)!==null&&u!==void 0&&(d=u.ownerDocument)!==null&&d!==void 0&&d.contains(h)||s!=null&&(f=s.ownerDocument)!==null&&f!==void 0&&f.contains(s));!y&&h;){var x,g,p;y=!((g=h=(x=m=Pe(h))===null||x===void 0?void 0:x.host)===null||g===void 0||(p=g.ownerDocument)===null||p===void 0||!p.contains(h))}return y}(t))return!t.getClientRects().length;if(n!=="legacy-full")return!0}return!1},ei=function(t,e){return!(e.disabled||Le(e)||function(n){return Fr(n)&&n.type==="hidden"}(e)||ti(e,t)||function(n){return n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"})}(e)||function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o=0;o<r.children.length;o++){var a=r.children.item(o);if(a.tagName==="LEGEND")return!!ce.call(r,"fieldset[disabled] *")||!a.contains(n)}return!0}r=r.parentElement}return!1}(e))},_r=function(t,e){return!(Za(e)||Tr(e)<0||!ei(t,e))},ni=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},ri=function t(e){var n=[],r=[];return e.forEach(function(o,a){var i=!!o.scopeParent,l=i?o.scopeParent:o,s=function(u,d){var f=Tr(u);return f<0&&d&&!Dr(u)?0:f}(l,i),c=i?t(o.candidates):l;s===0?i?n.push.apply(n,c):n.push(l):r.push({documentOrder:a,tabIndex:s,item:o,isScope:i,content:c})}),r.sort(Ja).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},cn=function(t,e){var n;return n=(e=e||{}).getShadowRoot?Qa([t],e.includeContainer,{filter:_r.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:ni}):function(r,o,a){if(Le(r))return[];var i=Array.prototype.slice.apply(r.querySelectorAll(ln));return o&&ce.call(r,ln)&&i.unshift(r),i.filter(a)}(t,e.includeContainer,_r.bind(null,e)),ri(n)};function ue(){return ue=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ue.apply(this,arguments)}var ct=typeof document<"u"?b.useLayoutEffect:b.useEffect;let un=!1,oi=0;const Br=()=>"floating-ui-"+oi++,fn=lr.useId||function(){const[t,e]=b.useState(()=>un?Br():void 0);return ct(()=>{t==null&&e(Br())},[]),b.useEffect(()=>{un||(un=!0)},[]),t},ai=b.createContext(null),ii=b.createContext(null),dn=()=>b.useContext(ii);function Et(t){return(t==null?void 0:t.ownerDocument)||document}function Yr(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function Me(t){return Et(t).defaultView||window}function St(t){return!!t&&(t instanceof Element||t instanceof Me(t).Element)}function fe(t){return!!t&&(t instanceof HTMLElement||t instanceof Me(t).HTMLElement)}function si(t){if(t.mozInputSource===0&&t.isTrusted)return!0;const e=/Android/i;return(e.test(Yr())||e.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:o,version:a}=r;return o+"/"+a}).join(" "):navigator.userAgent}()))&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function li(t){return t.width===0&&t.height===0||t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType!=="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0}function Hr(t,e){return["mouse","pen"].includes(t)}function ut(t,e){if(!t||!e)return!1;const n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(r=n,typeof ShadowRoot<"u"&&(r instanceof Me(r).ShadowRoot||r instanceof ShadowRoot))){let o=e;for(;o;){if(t===o)return!0;o=o.parentNode||o.host}}var r;return!1}function Vt(t){return"data-floating-ui-"+t}function mn(t){const e=b.useRef(t);return ct(()=>{e.current=t}),e}function Kt(t){let e=t.activeElement;for(;((n=e)==null||(r=n.shadowRoot)==null?void 0:r.activeElement)!=null;){var n,r;e=e.shadowRoot.activeElement}return e}let Ur=0;function zt(t,e){e===void 0&&(e={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=e;r&&cancelAnimationFrame(Ur);const a=()=>t==null?void 0:t.focus({preventScroll:n});o?a():Ur=requestAnimationFrame(a)}function de(t,e){let n=t.filter(o=>{var a;return o.parentId===e&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=t.filter(o=>{var a;return(a=r)==null?void 0:a.some(i=>{var l;return o.parentId===i.id&&((l=o.context)==null?void 0:l.open)})}),n=n.concat(r);return n}function qr(t){return"composedPath"in t?t.composedPath()[0]:t.target}function Xr(t){return fe(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}function pn(t){t.preventDefault(),t.stopPropagation()}const hn=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Vr(t,e){const n=cn(t,hn());e==="prev"&&n.reverse();const r=n.indexOf(Kt(Et(t)));return n.slice(r+1)[0]}function Kr(){return Vr(document.body,"next")}function Gr(){return Vr(document.body,"prev")}function me(t,e){const n=e||t.currentTarget,r=t.relatedTarget;return!r||!ut(n,r)}function ci(t){cn(t,hn()).forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")})}function ui(t){t.querySelectorAll("[data-tabindex]").forEach(e=>{const n=e.dataset.tabindex;delete e.dataset.tabindex,n?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")})}const gn={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Qr(t){t.key==="Tab"&&(t.target,clearTimeout(void 0))}const Ie=b.forwardRef(function(t,e){const[n,r]=b.useState();ct(()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",Qr),()=>{document.removeEventListener("keydown",Qr)}),[]);const o={ref:e,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Vt("focus-guard")]:"",style:gn};return b.createElement("span",ue({},t,o))}),Jr=b.createContext(null);function fi(t){let{children:e,id:n,root:r=null,preserveTabOrder:o=!0}=t;const a=function(m){let{id:h,root:y}=m===void 0?{}:m;const[x,g]=b.useState(null),p=fn(),R=Zr(),w=b.useMemo(()=>({id:h,root:y,portalContext:R,uniqueId:p}),[h,y,R,p]),E=b.useRef();return ct(()=>()=>{x==null||x.remove()},[x,w]),ct(()=>{if(E.current===w)return;E.current=w;const{id:j,root:k,portalContext:C,uniqueId:F}=w,I=j?document.getElementById(j):null,L=Vt("portal");if(I){const v=document.createElement("div");v.id=F,v.setAttribute(L,""),I.appendChild(v),g(v)}else{let v=k||(C==null?void 0:C.portalNode);v&&!St(v)&&(v=v.current),v=v||document.body;let M=null;j&&(M=document.createElement("div"),M.id=j,v.appendChild(M));const O=document.createElement("div");O.id=F,O.setAttribute(L,""),v=M||v,v.appendChild(O),g(O)}},[w]),x}({id:n,root:r}),[i,l]=b.useState(null),s=b.useRef(null),c=b.useRef(null),u=b.useRef(null),d=b.useRef(null),f=!!i&&!i.modal&&i.open&&o&&!(!r&&!a);return b.useEffect(()=>{if(a&&o&&(i==null||!i.modal))return a.addEventListener("focusin",m,!0),a.addEventListener("focusout",m,!0),()=>{a.removeEventListener("focusin",m,!0),a.removeEventListener("focusout",m,!0)};function m(h){a&&me(h)&&(h.type==="focusin"?ui:ci)(a)}},[a,o,i==null?void 0:i.modal]),b.createElement(Jr.Provider,{value:b.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:s,afterOutsideRef:c,beforeInsideRef:u,afterInsideRef:d,portalNode:a,setFocusManagerState:l}),[o,a])},f&&a&&b.createElement(Ie,{"data-type":"outside",ref:s,onFocus:m=>{if(me(m,a)){var h;(h=u.current)==null||h.focus()}else{const y=Gr()||(i==null?void 0:i.refs.domReference.current);y==null||y.focus()}}}),f&&a&&b.createElement("span",{"aria-owns":a.id,style:gn}),a&&en.createPortal(e,a),f&&a&&b.createElement(Ie,{"data-type":"outside",ref:c,onFocus:m=>{if(me(m,a)){var h;(h=d.current)==null||h.focus()}else{const y=Kr()||(i==null?void 0:i.refs.domReference.current);y==null||y.focus(),i!=null&&i.closeOnFocusOut&&(i==null||i.onOpenChange(!1,m.nativeEvent))}}}))}const Zr=()=>b.useContext(Jr),di=b.forwardRef(function(t,e){return b.createElement("button",ue({},t,{type:"button",ref:e,tabIndex:-1,style:gn}))});function mi(t){const{context:e,children:n,disabled:r=!1,order:o=["content"],guards:a=!0,initialFocus:i=0,returnFocus:l=!0,modal:s=!0,visuallyHiddenDismiss:c=!1,closeOnFocusOut:u=!0}=t,{open:d,refs:f,nodeId:m,onOpenChange:h,events:y,dataRef:x,elements:{domReference:g,floating:p}}=e,R=!zr()||a,w=mn(o),E=mn(i),j=mn(l),k=dn(),C=Zr(),F=typeof i=="number"&&i<0,I=b.useRef(null),L=b.useRef(null),v=b.useRef(!1),M=b.useRef(null),O=b.useRef(!1),H=C!=null,B=g&&g.getAttribute("role")==="combobox"&&Xr(g),T=b.useCallback(function($){return $===void 0&&($=p),$?cn($,hn()):[]},[p]),X=b.useCallback($=>{const z=T($);return w.current.map(P=>g&&P==="reference"?g:p&&P==="floating"?p:z).filter(Boolean).flat()},[g,p,w,T]);function nt($){return!r&&c&&s?b.createElement(di,{ref:$==="start"?I:L,onClick:z=>h(!1,z.nativeEvent)},typeof c=="string"?c:"Dismiss"):null}b.useEffect(()=>{if(r||!s)return;function $(P){if(P.key==="Tab"){ut(p,Kt(Et(p)))&&T().length===0&&!B&&pn(P);const D=X(),K=qr(P);w.current[0]==="reference"&&K===g&&(pn(P),P.shiftKey?zt(D[D.length-1]):zt(D[1])),w.current[1]==="floating"&&K===p&&P.shiftKey&&(pn(P),zt(D[0]))}}const z=Et(p);return z.addEventListener("keydown",$),()=>{z.removeEventListener("keydown",$)}},[r,g,p,s,w,f,B,T,X]),b.useEffect(()=>{if(!r&&u)return p&&fe(g)?(g.addEventListener("focusout",z),g.addEventListener("pointerdown",$),!s&&p.addEventListener("focusout",z),()=>{g.removeEventListener("focusout",z),g.removeEventListener("pointerdown",$),!s&&p.removeEventListener("focusout",z)}):void 0;function $(){O.current=!0,setTimeout(()=>{O.current=!1})}function z(P){const D=P.relatedTarget;queueMicrotask(()=>{const K=!(ut(g,D)||ut(p,D)||ut(D,p)||ut(C==null?void 0:C.portalNode,D)||D!=null&&D.hasAttribute(Vt("focus-guard"))||k&&(de(k.nodesRef.current,m).find(q=>{var V,J;return ut((V=q.context)==null?void 0:V.elements.floating,D)||ut((J=q.context)==null?void 0:J.elements.domReference,D)})||function(q,V){var J;let oe=[],Pt=(J=q.find(ft=>ft.id===V))==null?void 0:J.parentId;for(;Pt;){const ft=q.find(Lt=>Lt.id===Pt);Pt=ft==null?void 0:ft.parentId,ft&&(oe=oe.concat(ft))}return oe}(k.nodesRef.current,m).find(q=>{var V,J;return((V=q.context)==null?void 0:V.elements.floating)===D||((J=q.context)==null?void 0:J.elements.domReference)===D})));D&&K&&!O.current&&D!==M.current&&(v.current=!0,h(!1,P))})}},[r,g,p,s,m,k,C,h,u]),b.useEffect(()=>{var $;if(r)return;const z=Array.from((C==null||($=C.portalNode)==null?void 0:$.querySelectorAll("["+Vt("portal")+"]"))||[]);if(p&&s){const P=[p,...z,I.current,L.current].filter(K=>K!=null),D=(R?Ir:Ga)(w.current.includes("reference")||B?P.concat(g||[]):P,void 0,Vt("inert"));return()=>{D()}}},[r,g,p,s,w,C,B,R]),ct(()=>{if(r||!p)return;const $=Kt(Et(p));queueMicrotask(()=>{const z=X(p),P=E.current,D=(typeof P=="number"?z[P]:P.current)||p,K=ut(p,$);F||K||!d||zt(D,{preventScroll:D===p})})},[r,d,p,F,X,E]),ct(()=>{if(r||!p)return;let $=!1;const z=Et(p),P=Kt(z),D=x.current;function K(q){if(q.type==="escapeKey"&&f.domReference.current&&(M.current=f.domReference.current),["referencePress","escapeKey"].includes(q.type))return;const V=q.data.returnFocus;typeof V=="object"?(v.current=!1,$=V.preventScroll):v.current=!V}return M.current=P,y.on("dismiss",K),()=>{y.off("dismiss",K);const q=Kt(z);(ut(p,q)||k&&de(k.nodesRef.current,m).some(V=>{var J;return ut((J=V.context)==null?void 0:J.elements.floating,q)})||D.openEvent&&["click","mousedown"].includes(D.openEvent.type))&&f.domReference.current&&(M.current=f.domReference.current),j.current&&fe(M.current)&&!v.current&&zt(M.current,{cancelPrevious:!1,preventScroll:$})}},[r,p,j,x,f,y,k,m]),ct(()=>{if(!r&&C)return C.setFocusManagerState({...e,modal:s,closeOnFocusOut:u,open:d}),()=>{C.setFocusManagerState(null)}},[r,C,s,d,u,e]),ct(()=>{if(!r&&p&&typeof MutationObserver=="function"){const $=()=>{const P=p.getAttribute("tabindex");w.current.includes("floating")||Kt(Et(p))!==f.domReference.current&&T().length===0?P!=="0"&&p.setAttribute("tabindex","0"):P!=="-1"&&p.setAttribute("tabindex","-1")};$();const z=new MutationObserver($);return z.observe(p,{childList:!0,subtree:!0,attributes:!0}),()=>{z.disconnect()}}},[r,p,f,w,T]);const Rt=!r&&R&&!B&&(H||s);return b.createElement(b.Fragment,null,Rt&&b.createElement(Ie,{"data-type":"inside",ref:C==null?void 0:C.beforeInsideRef,onFocus:$=>{if(s){const P=X();zt(o[0]==="reference"?P[0]:P[P.length-1])}else if(C!=null&&C.preserveTabOrder&&C.portalNode)if(v.current=!1,me($,C.portalNode)){const P=Kr()||g;P==null||P.focus()}else{var z;(z=C.beforeOutsideRef.current)==null||z.focus()}}}),!B&&nt("start"),n,nt("end"),Rt&&b.createElement(Ie,{"data-type":"inside",ref:C==null?void 0:C.afterInsideRef,onFocus:$=>{if(s)zt(X()[0]);else if(C!=null&&C.preserveTabOrder&&C.portalNode)if(u&&(v.current=!0),me($,C.portalNode)){const P=Gr()||g;P==null||P.focus()}else{var z;(z=C.afterOutsideRef.current)==null||z.focus()}}}))}const ze=Vt("scroll-lock"),pi=b.forwardRef(function(t,e){let{lockScroll:n=!1,...r}=t;return ct(()=>{var o,a;if(!n||document.body.hasAttribute(ze))return;document.body.setAttribute(ze,"");const i=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",l=window.innerWidth-document.documentElement.clientWidth;if(!/iP(hone|ad|od)|iOS/.test(Yr()))return Object.assign(document.body.style,{overflow:"hidden",[i]:l+"px"}),()=>{document.body.removeAttribute(ze),Object.assign(document.body.style,{overflow:"",[i]:""})};const s=((o=window.visualViewport)==null?void 0:o.offsetLeft)||0,c=((a=window.visualViewport)==null?void 0:a.offsetTop)||0,u=window.pageXOffset,d=window.pageYOffset;return Object.assign(document.body.style,{position:"fixed",overflow:"hidden",top:-(d-Math.floor(c))+"px",left:-(u-Math.floor(s))+"px",right:"0",[i]:l+"px"}),()=>{Object.assign(document.body.style,{position:"",overflow:"",top:"",left:"",right:"",[i]:""}),document.body.removeAttribute(ze),window.scrollTo(u,d)}},[n]),b.createElement("div",ue({ref:e},r,{style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...r.style}}))});function to(t){return fe(t.target)&&t.target.tagName==="BUTTON"}function eo(t){return Xr(t)}const hi=lr.useInsertionEffect||(t=>t());function $e(t){const e=b.useRef(()=>{});return hi(()=>{e.current=t}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e.current==null?void 0:e.current(...r)},[])}function bn(t,e){if(e==null)return!1;if("composedPath"in t)return t.composedPath().includes(e);const n=t;return n.target!=null&&e.contains(n.target)}const gi={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},bi={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"};function yi(t,e){e===void 0&&(e={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:i,domReference:l,floating:s},dataRef:c}=t,{enabled:u=!0,escapeKey:d=!0,outsidePress:f=!0,outsidePressEvent:m="pointerdown",referencePress:h=!1,referencePressEvent:y="pointerdown",ancestorScroll:x=!1,bubbles:g}=e,p=dn(),R=(((w=b.useContext(ai))==null?void 0:w.id)||null)!=null;var w;const E=$e(typeof f=="function"?f:()=>!1),j=typeof f=="function"?E:f,k=b.useRef(!1),{escapeKeyBubbles:C,outsidePressBubbles:F}=(v=>{var M,O;return{escapeKeyBubbles:typeof v=="boolean"?v:(M=v==null?void 0:v.escapeKey)!=null&&M,outsidePressBubbles:typeof v=="boolean"?v:(O=v==null?void 0:v.outsidePress)==null||O}})(g),I=$e(v=>{if(!n||!u||!d||v.key!=="Escape")return;const M=p?de(p.nodesRef.current,a):[];if(!C&&(v.stopPropagation(),M.length>0)){let O=!0;if(M.forEach(H=>{var B;(B=H.context)==null||!B.open||H.context.dataRef.current.__escapeKeyBubbles||(O=!1)}),!O)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1,function(O){return"nativeEvent"in O}(v)?v.nativeEvent:v)}),L=$e(v=>{const M=k.current;if(k.current=!1,M||typeof j=="function"&&!j(v))return;const O=qr(v);if(fe(O)&&s){const T=O.clientWidth>0&&O.scrollWidth>O.clientWidth,X=O.clientHeight>0&&O.scrollHeight>O.clientHeight;let nt=X&&v.offsetX>O.clientWidth;if(X&&Me(s).getComputedStyle(O).direction==="rtl"&&(nt=v.offsetX<=O.offsetWidth-O.clientWidth),nt||T&&v.offsetY>O.clientHeight)return}const H=p&&de(p.nodesRef.current,a).some(T=>{var X;return bn(v,(X=T.context)==null?void 0:X.elements.floating)});if(bn(v,s)||bn(v,l)||H)return;const B=p?de(p.nodesRef.current,a):[];if(B.length>0){let T=!0;if(B.forEach(X=>{var nt;(nt=X.context)==null||!nt.open||X.context.dataRef.current.__outsidePressBubbles||(T=!1)}),!T)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:R?{preventScroll:!0}:si(v)||li(v)}}),r(!1,v)});return b.useEffect(()=>{if(!n||!u)return;function v(H){r(!1,H)}c.current.__escapeKeyBubbles=C,c.current.__outsidePressBubbles=F;const M=Et(s);d&&M.addEventListener("keydown",I),j&&M.addEventListener(m,L);let O=[];return x&&(St(l)&&(O=Ut(l)),St(s)&&(O=O.concat(Ut(s))),!St(i)&&i&&i.contextElement&&(O=O.concat(Ut(i.contextElement)))),O=O.filter(H=>{var B;return H!==((B=M.defaultView)==null?void 0:B.visualViewport)}),O.forEach(H=>{H.addEventListener("scroll",v,{passive:!0})}),()=>{d&&M.removeEventListener("keydown",I),j&&M.removeEventListener(m,L),O.forEach(H=>{H.removeEventListener("scroll",v)})}},[c,s,l,i,d,j,m,n,r,x,u,C,F,I,L]),b.useEffect(()=>{k.current=!1},[j,m]),b.useMemo(()=>u?{reference:{onKeyDown:I,[gi[y]]:v=>{h&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1,v.nativeEvent))}},floating:{onKeyDown:I,[bi[m]]:()=>{k.current=!0}}}:{},[u,o,h,m,y,r,I])}function vi(t){var e;t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:o}=t,[a,i]=b.useState(null),l=((e=t.elements)==null?void 0:e.reference)||a,s=function(w){w===void 0&&(w={});const{placement:E="bottom",strategy:j="absolute",middleware:k=[],platform:C,elements:{reference:F,floating:I}={},transform:L=!0,whileElementsMounted:v,open:M}=w,[O,H]=b.useState({x:0,y:0,strategy:j,placement:E,middlewareData:{},isPositioned:!1}),[B,T]=b.useState(k);je(B,k)||T(k);const[X,nt]=b.useState(null),[Rt,$]=b.useState(null),z=b.useCallback(tt=>{tt!==q.current&&(q.current=tt,nt(tt))},[]),P=b.useCallback(tt=>{tt!==V.current&&(V.current=tt,$(tt))},[]),D=F||X,K=I||Rt,q=b.useRef(null),V=b.useRef(null),J=b.useRef(O),oe=v!=null,Pt=Nr(v),ft=Nr(C),Lt=b.useCallback(()=>{if(!q.current||!V.current)return;const tt={placement:E,strategy:j,middleware:B};ft.current&&(tt.platform=ft.current),Va(q.current,V.current,tt).then(ke=>{const Bt={...ke,isPositioned:!0};tn.current&&!je(J.current,Bt)&&(J.current=Bt,en.flushSync(()=>{H(Bt)}))})},[B,E,j,ft]);Ce(()=>{M===!1&&J.current.isPositioned&&(J.current.isPositioned=!1,H(tt=>({...tt,isPositioned:!1})))},[M]);const tn=b.useRef(!1);Ce(()=>(tn.current=!0,()=>{tn.current=!1}),[]),Ce(()=>{if(D&&(q.current=D),K&&(V.current=K),D&&K){if(Pt.current)return Pt.current(D,K,Lt);Lt()}},[D,K,Lt,Pt,oe]);const ir=b.useMemo(()=>({reference:q,floating:V,setReference:z,setFloating:P}),[z,P]),Mt=b.useMemo(()=>({reference:D,floating:K}),[D,K]),sr=b.useMemo(()=>{const tt={position:j,left:0,top:0};if(!Mt.floating)return tt;const ke=jr(Mt.floating,O.x),Bt=jr(Mt.floating,O.y);return L?{...tt,transform:"translate("+ke+"px, "+Bt+"px)",...Cr(Mt.floating)>=1.5&&{willChange:"transform"}}:{position:j,left:ke,top:Bt}},[j,L,Mt.floating,O.x,O.y]);return b.useMemo(()=>({...O,update:Lt,refs:ir,elements:Mt,floatingStyles:sr}),[O,Lt,ir,Mt,sr])}(t),c=dn(),u=$e((w,E)=>{w&&(f.current.openEvent=E),r==null||r(w,E)}),d=b.useRef(null),f=b.useRef({}),m=b.useState(()=>function(){const w=new Map;return{emit(E,j){var k;(k=w.get(E))==null||k.forEach(C=>C(j))},on(E,j){w.set(E,[...w.get(E)||[],j])},off(E,j){var k;w.set(E,((k=w.get(E))==null?void 0:k.filter(C=>C!==j))||[])}}}())[0],h=fn(),y=b.useCallback(w=>{const E=St(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),contextElement:w}:w;s.refs.setReference(E)},[s.refs]),x=b.useCallback(w=>{(St(w)||w===null)&&(d.current=w,i(w)),(St(s.refs.reference.current)||s.refs.reference.current===null||w!==null&&!St(w))&&s.refs.setReference(w)},[s.refs]),g=b.useMemo(()=>({...s.refs,setReference:x,setPositionReference:y,domReference:d}),[s.refs,x,y]),p=b.useMemo(()=>({...s.elements,domReference:l}),[s.elements,l]),R=b.useMemo(()=>({...s,refs:g,elements:p,dataRef:f,nodeId:o,floatingId:h,events:m,open:n,onOpenChange:u}),[s,o,h,m,n,u,g,p]);return ct(()=>{const w=c==null?void 0:c.nodesRef.current.find(E=>E.id===o);w&&(w.context=R)}),b.useMemo(()=>({...s,context:R,refs:g,elements:p}),[s,g,p,R])}function yn(t,e,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...t,...e.map(o=>o?o[n]:null).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(i=>{let[l,s]=i;var c;l.indexOf("on")===0?(r.has(l)||r.set(l,[]),typeof s=="function"&&((c=r.get(l))==null||c.push(s),o[l]=function(){for(var u,d=arguments.length,f=new Array(d),m=0;m<d;m++)f[m]=arguments[m];return(u=r.get(l))==null?void 0:u.map(h=>h(...f)).find(h=>h!==void 0)})):o[l]=s}),o),{})}}const xi={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",text16:"p",text14:"p",text12:"p",text10:"p"},wi={h1:U`
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 60px;
  `,h2:U`
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    line-height: 50px;
  `,h3:U`
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 40px;
  `,h4:U`
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 34px;
  `,h5:U`
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
  `,h6:U`
    font-size: 1.375rem;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 28px;
  `,subtitle1:U`
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,subtitle2:U`
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28px;
  `,text16:U`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  `,text14:U`
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 22px;
  `,text12:U`
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20px;
  `,text10:U`
    font-size: 0.625rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18px;
  `},ki=Z(za)`
  ${({theme:t})=>U`
    font-family: ${t.typography.font.primary};
  `}

  ${({$variant:t})=>t&&wi[t]}

  ${({$color:t,theme:e})=>t&&U`
      color: ${nn(e,t)};
    `}

  ${({$fontWeight:t})=>t&&U`
      font-weight: ${t};
    `}

  ${({$ellipsize:t})=>t&&U`
      white-space: nowrap;
      text-overflow: ellipsis;
      min-width: 0;
      overflow: hidden;
    `}
`;var $t,De;(De=$t||($t={})).FIXED_WIDTH="FIXED_WIDTH",De.NONE="NONE",De.ROOMY="ROOMY",De.SQUARE="SQUARE";const Ei={"0.5x":8,"1x":16,"1.25x":20,"1.5x":24,"2x":32,"2.5x":40,"3x":48,"4x":64,"5x":80},Si={"0.5x":2,"1x":2,"1.25x":2.5,"1.5x":3,"2x":4,"2.5x":5,"3x":6,"4x":8,"5x":10},Oi=U`
  ${({$gridArea:t,$size:e})=>{const n=Ee(Si[e]);return{[$t.NONE]:0,[$t.FIXED_WIDTH]:`padding: 0 ${n}rem`,[$t.SQUARE]:`padding: ${n}rem`,[$t.ROOMY]:`padding: ${2*n}rem`}[t]}};
`,Ai=U`
  ${({$size:t})=>{const e=Ee(Ei[t]);return`height: ${e}rem; width: ${e}rem`}};
`,Ci=Z.span`
  display: inline-flex;

  svg {
    color: ${({$color:t,theme:e})=>t==="inherit"?t:nn(e,t)};
    ${Ai};
    ${Oi};
  }
`,no=t=>{var{icon:e,size:n="1x",gridArea:r=$t.NONE,color:o="inherit"}=t,a=It(t,["icon","size","gridArea","color"]);return N.jsx(Ci,Object.assign({$color:o,$gridArea:r,$size:n},a,{children:e}))},ro={XS:16,S:24,M:48,L:112,XL:192},ji=$a`
  0% {
    opacity: ${.2};
  }
  ${"12.5%"} {
    opacity: 1;
  }
  100% {
    opacity: ${.2};
  }
`,Ni=Z.figure`
  margin: 0;
  position: relative;
  color: ${({$color:t,theme:e})=>t?nn(e,t):"inherit"};
  width: ${({$size:t})=>Ee(ro[t])}rem;
  height: ${({$size:t})=>Ee(ro[t])}rem;
`,Ri=Z.div`
  height: 100%;
  width: 9.375%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(${({$nth:t})=>45*t}deg);
`,Pi=Z.div`
  background-color: currentColor;
  height: 25%;
  width: 100%;

  border-radius: 50%/20%;
  position: absolute;

  animation: ${ji} ${1}s step-end infinite;

  animation-delay: ${({$nth:t})=>1/8*t*1}s;
`,Li=Array.from({length:8},(t,e)=>e),Mi=t=>{var{size:e="M",color:n}=t,r=It(t,["size","color"]);return N.jsx(Ni,Object.assign({"aria-busy":"true","aria-live":"polite",$color:n,$size:e},r,{children:Li.map(o=>N.jsx(Ri,{$nth:o,children:N.jsx(Pi,{$nth:o})},o))}))},Ii={small:"24px",medium:"32px",large:"40px"},zi={"pink.main":et.palette.pink[300],"blue.main":et.palette.blue[300],"purple.main":et.palette.purple[300],"white.main":et.palette.neutral[300],"error.main":et.palette.error.light},vn={"pink.main":et.palette.pink[100],"blue.main":et.palette.blue[100],"purple.main":et.palette.purple[100],"white.main":et.palette.neutral[300],"error.main":et.palette.error.light},Te={"pink.main":et.palette.pink[600],"blue.main":et.palette.blue[600],"purple.main":et.palette.purple[600],"white.main":et.palette.neutral[300],"error.main":et.palette.error.light},$i={small:"text12",medium:"text14",large:"text16"},Di={contained:700,outlined:700,text:700,"menu-item":400},Ti={small:"XS",medium:"S",large:"S"},oo=(t,e,n)=>n?t.palette.white.main:e?t.palette.neutral[200]:t.palette.white.main,Gt=(t,e,n,r)=>r?t.palette.white.main:n?t.palette.neutral[300]:{"pink.main":t.palette.pink.main,"blue.main":t.palette.blue.main,"purple.main":t.palette.purple.main,"white.main":t.palette.white.main,"error.main":t.palette.error.main}[e],Fi=(t,e,n)=>n?t.palette.neutral[300]:{"pink.main":t.palette.pink.main,"blue.main":t.palette.blue.main,"purple.main":t.palette.purple.main,"white.main":t.palette.neutral[400],"error.main":t.palette.white.main}[e],Wi=(t,e,n)=>n?t.palette.neutral[300]:{"pink.main":t.palette.pink.main,"blue.main":t.palette.blue.main,"purple.main":t.palette.purple.main,"white.main":t.palette.white.main,"error.main":t.palette.white.main}[e],Fe=(t,e,n)=>n?null:{contained:zi[e],outlined:vn[e],text:vn[e],"menu-item":vn[e]}[t],ao=(t,e,n)=>n?null:{contained:Te[e],outlined:Te[e],text:Te[e],"menu-item":Te[e]}[t],io=U`
  ${({theme:t,$color:e,$variant:n,disabled:r,$isLoading:o})=>((a,i,l,s,c)=>({contained:U`
      color: ${oo(a,s,c)};
      background-color: ${Fi(a,i,s)};
      border-color: transparent;
      border-radius: 4px;
      &:hover {
        color: ${oo(a,s,c)};
        background-color: ${Fe(l,i,s)};
      }
      &:active {
        background-color: ${ao(l,i,s)};
      }
    `,outlined:U`
      color: ${Gt(a,i,s,c)};
      background-color: transparent;
      border: 1px solid ${Wi(a,i,s)};
      border-radius: 4px;
      &:hover {
        color: ${Gt(a,i,s,c)};
        background-color: ${Fe(l,i,s)};
      }
      &:active {
        border-color: ${ao(l,i,s)};
      }
    `,text:U`
      color: ${Gt(a,i,s,c)};
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      &:hover {
        color: ${Gt(a,i,s,c)};
        background-color: ${Fe(l,i,s)};
      }
    `,"menu-item":U`
      color: ${Gt(a,i,s,c)};
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      &:hover {
        color: ${Gt(a,i,s,c)};
        background-color: ${Fe(l,i,s)};
      }
    `})[l])(t,e,n,r,o)}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: ${({$fullWidth:t})=>t?"100%":void 0};
  height: ${({$size:t})=>Ii[t]};
  min-width: ${({$hasChildren:t})=>t?"80px":"auto"};
  padding: ${t=>(({$variant:e,$hasChildren:n})=>e==="menu-item"?"4px 8px":n?"0 16px":"0 8px")(t)};
  white-space: nowrap;

  &:hover {
    cursor: ${({disabled:t})=>t?"default":"pointer"};
  }
`,_i=Z.a`
  ${io}
  text-decoration: none;
`,Bi=Z.button`
  ${io}
`,Yi=Z.div`
  position: absolute;
`,Hi=Z.div`
  min-width: 0;
  flex-grow: 1;
  align-items: center;
  display: inline-flex;
  visibility: ${({$isLoading:t})=>t?"hidden":"inherit"};

  ${({$variant:t})=>t==="menu-item"&&"gap: 4px"}
`,Ui=Z(t=>{var{as:e,children:n,color:r,ellipsize:o,fontWeight:a,variant:i="text16"}=t,l=It(t,["as","children","color","ellipsize","fontWeight","variant"]);return N.jsx(ki,Object.assign({as:e||xi[i],$color:r,$ellipsize:o,$fontWeight:a,$variant:i},l,{children:n}))})`
  flex-grow: 1;
  text-align: ${({$textAlign:t})=>t};
`,so=b.forwardRef((t,e)=>{var{color:n="pink.main",size:r="medium",variant:o="contained",disabled:a=!1,fullWidth:i=!1,href:l,isLoading:s=!1,children:c,startIcon:u,endIcon:d,onClick:f,textAlign:m="center",ellipsize:h}=t,y=It(t,["color","size","variant","disabled","fullWidth","href","isLoading","children","startIcon","endIcon","onClick","textAlign","ellipsize"]);const x=l?_i:Bi,g={small:"0.5x",medium:"1x",large:"1.5x"},p=!!c;return N.jsxs(x,Object.assign({$color:n,$fullWidth:i,$size:r,$variant:o,$hasChildren:p,$isLoading:s,disabled:a||s,href:l,onClick:f},y,{ref:e,children:[s&&N.jsx(Yi,{children:N.jsx(Mi,{size:Ti[r]})}),N.jsxs(Hi,{$isLoading:s,$variant:o,children:[u&&N.jsx(ae,{display:"flex",mr:p?1:void 0,children:N.jsx(no,{icon:u,size:g[r]})}),p&&N.jsx(Ui,{$textAlign:m,forwardedAs:"span",variant:$i[r],fontWeight:Di[o],ellipsize:h,children:c}),d&&N.jsx(ae,{display:"flex",ml:p?1:void 0,children:N.jsx(no,{icon:d,size:g[r]})})]})]}))});so.displayName="Button";const qi={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},lo=()=>{};let xn={},co={},uo=null,fo={mark:lo,measure:lo};try{typeof window<"u"&&(xn=window),typeof document<"u"&&(co=document),typeof MutationObserver<"u"&&(uo=MutationObserver),typeof performance<"u"&&(fo=performance)}catch{}const{userAgent:mo=""}=xn.navigator||{},Ot=xn,_=co,po=uo,We=fo;Ot.document;const bt=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",ho=~mo.indexOf("MSIE")||~mo.indexOf("Trident/");var Y="classic",go="duotone",ot="sharp",at="sharp-duotone",Xi=[Y,go,ot,at],Vi={fak:"kit","fa-kit":"kit"},Ki={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},bo={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},yo=[1,2,3,4,5,6,7,8,9,10],Gi=yo.concat([11,12,13,14,15,16,17,18,19,20]),pe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qi=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pe.GROUP,pe.SWAP_OPACITY,pe.PRIMARY,pe.SECONDARY].concat(yo.map(t=>"".concat(t,"x"))).concat(Gi.map(t=>"w-".concat(t))),Ji={kit:"fak"},Zi={"kit-duotone":"fakd"};const yt="___FONT_AWESOME___",wn=16,vo="svg-inline--fa",Dt="data-fa-i2svg",kn="data-fa-pseudo-element",En="data-prefix",Sn="data-icon",xo="fontawesome-i2svg",ts=["HTML","HEAD","STYLE","SCRIPT"],wo=(()=>{try{return!0}catch{return!1}})(),ko=[Y,ot,at];function he(t){return new Proxy(t,{get:(e,n)=>n in e?e[n]:e[Y]})}const Eo={...bo};Eo[Y]={...bo[Y],...Vi,...Ki};const Tt=he(Eo),On={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}};On[Y]={...On[Y],...Ji,...Zi};const ge=he(On),An={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}};An[Y]={...An[Y],fak:"fa-kit"};const Ft=he(An),Cn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}};Cn[Y]={...Cn[Y],"fa-kit":"fak"};const es=he(Cn),ns=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,So="fa-layers-text",rs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;he({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}});const os=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jn=pe,Qt=new Set;Object.keys(ge[Y]).map(Qt.add.bind(Qt)),Object.keys(ge[ot]).map(Qt.add.bind(Qt)),Object.keys(ge[at]).map(Qt.add.bind(Qt));const as=["kit",...Qi],be=Ot.FontAwesomeConfig||{};_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[e,n]=t;const r=function(o){return o===""||o!=="false"&&(o==="true"||o)}(function(o){var a=_.querySelector("script["+o+"]");if(a)return a.getAttribute(o)}(e));r!=null&&(be[n]=r)});const Oo={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};be.familyPrefix&&(be.cssPrefix=be.familyPrefix);const Jt={...Oo,...be};Jt.autoReplaceSvg||(Jt.observeMutations=!1);const S={};Object.keys(Oo).forEach(t=>{Object.defineProperty(S,t,{enumerable:!0,set:function(e){Jt[t]=e,Nn.forEach(n=>n(S))},get:function(){return Jt[t]}})}),Object.defineProperty(S,"familyPrefix",{enumerable:!0,set:function(t){Jt.cssPrefix=t,Nn.forEach(e=>e(S))},get:function(){return Jt.cssPrefix}}),Ot.FontAwesomeConfig=S;const Nn=[],At=wn,mt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ye(){let t=12,e="";for(;t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function Zt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rn(t){return t.classList?Zt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ao(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _e(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Pn(t){return t.size!==mt.size||t.x!==mt.x||t.y!==mt.y||t.rotate!==mt.rotate||t.flipX||t.flipY}function Co(){const t="fa",e=vo,n=S.cssPrefix,r=S.replacementClass;let o=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;if(n!==t||r!==e){const a=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");o=o.replace(a,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(r))}return o}let jo=!1;function Ln(){S.autoAddCss&&!jo&&(function(t){if(!t||!bt)return;const e=_.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=_.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const a=n[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=a)}_.head.insertBefore(e,r)}(Co()),jo=!0)}var is={mixout:()=>({dom:{css:Co,insertCss:Ln}}),hooks:()=>({beforeDOMElementCreation(){Ln()},beforeI2svg(){Ln()}})};const vt=Ot||{};vt[yt]||(vt[yt]={}),vt[yt].styles||(vt[yt].styles={}),vt[yt].hooks||(vt[yt].hooks={}),vt[yt].shims||(vt[yt].shims=[]);var pt=vt[yt];const No=[],Ro=function(){_.removeEventListener("DOMContentLoaded",Ro),Be=1,No.map(t=>t())};let Be=!1;function ve(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Ao(t):"<".concat(e," ").concat(function(o){return Object.keys(o||{}).reduce((a,i)=>a+"".concat(i,'="').concat(Ao(o[i]),'" '),"").trim()}(n),">").concat(r.map(ve).join(""),"</").concat(e,">")}function Po(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}bt&&(Be=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),Be||_.addEventListener("DOMContentLoaded",Ro));var Mn=function(t,e,n,r){var o,a,i,l=Object.keys(t),s=l.length,c=e;for(n===void 0?(o=1,i=t[l[0]]):(o=0,i=n);o<s;o++)i=c(i,t[a=l[o]],a,t);return i};function Lo(t){const e=function(n){const r=[];let o=0;const a=n.length;for(;o<a;){const i=n.charCodeAt(o++);if(i>=55296&&i<=56319&&o<a){const l=n.charCodeAt(o++);(64512&l)==56320?r.push(((1023&i)<<10)+(1023&l)+65536):(r.push(i),o--)}else r.push(i)}return r}(t);return e.length===1?e[0].toString(16):null}function Mo(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function In(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,o=Mo(e);typeof pt.hooks.addPack!="function"||r?pt.styles[t]={...pt.styles[t]||{},...o}:pt.hooks.addPack(t,Mo(e)),t==="fas"&&In("fa",e)}const{styles:Wt,shims:ss}=pt,ls={[Y]:Object.values(Ft[Y]),[ot]:Object.values(Ft[ot]),[at]:Object.values(Ft[at])};let zn=null,Io={},zo={},$o={},Do={},To={};const cs={[Y]:Object.keys(Tt[Y]),[ot]:Object.keys(Tt[ot]),[at]:Object.keys(Tt[at])};function us(t,e){const n=e.split("-"),r=n[0],o=n.slice(1).join("-");return r!==t||o===""||(a=o,~as.indexOf(a))?null:o;var a}const Fo=()=>{const t=r=>Mn(Wt,(o,a,i)=>(o[i]=Mn(a,r,{}),o),{});Io=t((r,o,a)=>(o[3]&&(r[o[3]]=a),o[2]&&o[2].filter(i=>typeof i=="number").forEach(i=>{r[i.toString(16)]=a}),r)),zo=t((r,o,a)=>(r[a]=a,o[2]&&o[2].filter(i=>typeof i=="string").forEach(i=>{r[i]=a}),r)),To=t((r,o,a)=>{const i=o[2];return r[a]=a,i.forEach(l=>{r[l]=a}),r});const e="far"in Wt||S.autoFetchSvg,n=Mn(ss,(r,o)=>{const a=o[0];let i=o[1];const l=o[2];return i!=="far"||e||(i="fas"),typeof a=="string"&&(r.names[a]={prefix:i,iconName:l}),typeof a=="number"&&(r.unicodes[a.toString(16)]={prefix:i,iconName:l}),r},{names:{},unicodes:{}});$o=n.names,Do=n.unicodes,zn=Ye(S.styleDefault,{family:S.familyDefault})};var Wo;function $n(t,e){return(Io[t]||{})[e]}function Ct(t,e){return(To[t]||{})[e]}function _o(t){return $o[t]||{prefix:null,iconName:null}}function jt(){return zn}Wo=t=>{zn=Ye(t.styleDefault,{family:S.familyDefault})},Nn.push(Wo),Fo();function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Y}=e,r=Tt[n][t],o=ge[n][t]||ge[n][r],a=t in pt.styles?t:null;return o||a||null}const fs={[Y]:Object.keys(Ft[Y]),[ot]:Object.keys(Ft[ot]),[at]:Object.keys(Ft[at])};function He(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[Y]:"".concat(S.cssPrefix,"-").concat(Y),[ot]:"".concat(S.cssPrefix,"-").concat(ot),[at]:"".concat(S.cssPrefix,"-").concat(at)};let o=null,a=Y;const i=Xi.filter(s=>s!==go);i.forEach(s=>{(t.includes(r[s])||t.some(c=>fs[s].includes(c)))&&(a=s)});const l=t.reduce((s,c)=>{const u=us(S.cssPrefix,c);if(Wt[c]?(c=ls[a].includes(c)?es[a][c]:c,o=c,s.prefix=c):cs[a].indexOf(c)>-1?(o=c,s.prefix=Ye(c,{family:a})):u?s.iconName=u:c===S.replacementClass||i.some(d=>c===r[d])||s.rest.push(c),!n&&s.prefix&&s.iconName){const d=o==="fa"?_o(s.iconName):{},f=Ct(s.prefix,s.iconName);d.prefix&&(o=null),s.iconName=d.iconName||f||s.iconName,s.prefix=d.prefix||s.prefix,s.prefix!=="far"||Wt.far||!Wt.fas||S.autoFetchSvg||(s.prefix="fas")}return s},{prefix:null,iconName:null,rest:[]});return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),l.prefix||a!==ot||!Wt.fass&&!S.autoFetchSvg||(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),l.prefix||a!==at||!Wt.fasds&&!S.autoFetchSvg||(l.prefix="fasds",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),l.prefix!=="fa"&&o!=="fa"||(l.prefix=jt()||"fas"),l}let Bo=[],te={};const ee={},ds=Object.keys(ee);function Dn(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(te[t]||[]).forEach(a=>{e=a.apply(null,[e,...r])}),e}function _t(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(te[t]||[]).forEach(o=>{o.apply(null,n)})}function Nt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ee[t]?ee[t].apply(null,e):void 0}function Tn(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||jt();if(e)return e=Ct(n,e)||e,Po(Yo.definitions,n,e)||Po(pt.styles,n,e)}const Yo=new class{constructor(){this.definitions={}}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];const r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...r[o]},In(o,r[o]);const a=Ft[Y][o];a&&In(a,r[o]),Fo()})}reset(){this.definitions={}}_pullDefinitions(t,e){const n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(r=>{const{prefix:o,iconName:a,icon:i}=n[r],l=i[2];t[o]||(t[o]={}),l.length>0&&l.forEach(s=>{typeof s=="string"&&(t[o][s]=i)}),t[o][a]=i}),t}},ms={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(_t("beforeI2svg",t),Nt("pseudoElements2svg",t),Nt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;var n;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,n=()=>{ps({autoReplaceSvgRoot:e}),_t("watch",t)},bt&&(Be?setTimeout(n,0):No.push(n))}},Ue={noAuto:()=>{S.autoReplaceSvg=!1,S.observeMutations=!1,_t("noAuto")},config:S,dom:ms,parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ye(t[0]);return{prefix:n,iconName:Ct(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(S.cssPrefix,"-"))>-1||t.match(ns))){const e=He(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||jt(),iconName:Ct(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=jt();return{prefix:e,iconName:Ct(e,t)||t}}}},library:Yo,findIconDefinition:Tn,toHtml:ve},ps=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_}=t;(Object.keys(pt.styles).length>0||S.autoFetchSvg)&&bt&&S.autoReplaceSvg&&Ue.dom.i2svg({node:e})};function qe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ve(n))}}),Object.defineProperty(t,"node",{get:function(){if(!bt)return;const n=_.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Fn(t){const{icons:{main:e,mask:n},prefix:r,iconName:o,transform:a,symbol:i,title:l,maskId:s,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:m}=n.found?n:e,h=r==="fak",y=[S.replacementClass,o?"".concat(S.cssPrefix,"-").concat(o):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let x={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":o,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)}};const g=h&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};d&&(x.attributes[Dt]=""),l&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||ye())},children:[l]}),delete x.attributes.title);const p={...x,prefix:r,iconName:o,main:e,mask:n,maskId:s,transform:a,symbol:i,styles:{...g,...u.styles}},{children:R,attributes:w}=n.found&&e.found?Nt("generateAbstractMask",p)||{children:[],attributes:{}}:Nt("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=R,p.attributes=w,i?function(E){let{prefix:j,iconName:k,children:C,attributes:F,symbol:I}=E;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...F,id:I===!0?"".concat(j,"-").concat(S.cssPrefix,"-").concat(k):I},children:C}]}]}(p):function(E){let{children:j,main:k,mask:C,attributes:F,styles:I,transform:L}=E;if(Pn(L)&&k.found&&!C.found){const{width:v,height:M}=k,O={x:v/M/2,y:.5};F.style=_e({...I,"transform-origin":"".concat(O.x+L.x/16,"em ").concat(O.y+L.y/16,"em")})}return[{tag:"svg",attributes:F,children:j}]}(p)}function Ho(t){const{content:e,width:n,height:r,transform:o,title:a,extra:i,watchable:l=!1}=t,s={...i.attributes,...a?{title:a}:{},class:i.classes.join(" ")};l&&(s[Dt]="");const c={...i.styles};Pn(o)&&(c.transform=function(f){let{transform:m,width:h=wn,height:y=wn,startCentered:x=!1}=f,g="";return g+=x&&ho?"translate(".concat(m.x/At-h/2,"em, ").concat(m.y/At-y/2,"em) "):x?"translate(calc(-50% + ".concat(m.x/At,"em), calc(-50% + ").concat(m.y/At,"em)) "):"translate(".concat(m.x/At,"em, ").concat(m.y/At,"em) "),g+="scale(".concat(m.size/At*(m.flipX?-1:1),", ").concat(m.size/At*(m.flipY?-1:1),") "),g+="rotate(".concat(m.rotate,"deg) "),g}({transform:o,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=_e(c);u.length>0&&(s.style=u);const d=[];return d.push({tag:"span",attributes:s,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}const{styles:Wn}=pt;function _n(t){const e=t[0],n=t[1],[r]=t.slice(4);let o=null;return o=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(S.cssPrefix,"-").concat(jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(jn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(S.cssPrefix,"-").concat(jn.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}const hs={found:!1,width:512,height:512};function Bn(t,e){let n=e;return e==="fa"&&S.styleDefault!==null&&(e=jt()),new Promise((r,o)=>{if(n==="fa"){const a=_o(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Wn[e]&&Wn[e][t])return r(_n(Wn[e][t]));(function(a,i){wo||S.showMissingIcons||!a||console.error('Icon with name "'.concat(a,'" and prefix "').concat(i,'" is missing.'))})(t,e),r({...hs,icon:S.showMissingIcons&&t&&Nt("missingIconAbstract")||{}})})}const Uo=()=>{},Yn=S.measurePerformance&&We&&We.mark&&We.measure?We:{mark:Uo,measure:Uo},xe='FA "6.6.0"',gs=t=>{Yn.mark("".concat(xe," ").concat(t," ends")),Yn.measure("".concat(xe," ").concat(t),"".concat(xe," ").concat(t," begins"),"".concat(xe," ").concat(t," ends"))};var Hn=t=>(Yn.mark("".concat(xe," ").concat(t," begins")),()=>gs(t));const Xe=()=>{};function qo(t){return typeof(t.getAttribute?t.getAttribute(Dt):null)=="string"}function bs(t){return _.createElementNS("http://www.w3.org/2000/svg",t)}function ys(t){return _.createElement(t)}function Xo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?bs:ys}=e;if(typeof t=="string")return _.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Xo(o,{ceFn:n}))}),r}const Ve={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Xo(n),e)}),e.getAttribute(Dt)===null&&S.keepOriginalSource){let n=_.createComment(function(r){let o=" ".concat(r.outerHTML," ");return o="".concat(o,"Font Awesome fontawesome.com "),o}(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Rn(e).indexOf(S.replacementClass))return Ve.replace(t);const r=new RegExp("".concat(S.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const a=n[0].attributes.class.split(" ").reduce((i,l)=>(l===S.replacementClass||l.match(r)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}const o=n.map(a=>ve(a)).join(`
`);e.setAttribute(Dt,""),e.innerHTML=o}};function Vo(t){t()}function Ko(t,e){const n=typeof e=="function"?e:Xe;if(t.length===0)n();else{let r=Vo;S.mutateApproach==="async"&&(r=Ot.requestAnimationFrame||Vo),r(()=>{const o=S.autoReplaceSvg===!0?Ve.replace:Ve[S.autoReplaceSvg]||Ve.replace,a=Hn("mutate");t.map(o),a(),n()})}}let Un=!1;function Go(){Un=!0}function qn(){Un=!1}let Ke=null;function Qo(t){if(!po||!S.observeMutations)return;const{treeCallback:e=Xe,nodeCallback:n=Xe,pseudoElementsCallback:r=Xe,observeMutationsRoot:o=_}=t;Ke=new po(a=>{if(Un)return;const i=jt();Zt(a).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!qo(l.addedNodes[0])&&(S.searchPseudoElements&&r(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&S.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&qo(l.target)&&~os.indexOf(l.attributeName))if(l.attributeName==="class"&&function(c){const u=c.getAttribute?c.getAttribute(En):null,d=c.getAttribute?c.getAttribute(Sn):null;return u&&d}(l.target)){const{prefix:c,iconName:u}=He(Rn(l.target));l.target.setAttribute(En,c||i),u&&l.target.setAttribute(Sn,u)}else(s=l.target)&&s.classList&&s.classList.contains&&s.classList.contains(S.replacementClass)&&n(l.target);var s})}),bt&&Ke.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vs(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let o=He(Rn(t));return o.prefix||(o.prefix=jt()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=(a=o.prefix,i=t.innerText,(zo[a]||{})[i]||$n(o.prefix,Lo(t.innerText)))),!o.iconName&&S.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o;var a,i}function Jo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=vs(t),a=function(s){const c=Zt(s.attributes).reduce((f,m)=>(f.name!=="class"&&f.name!=="style"&&(f[m.name]=m.value),f),{}),u=s.getAttribute("title"),d=s.getAttribute("data-fa-title-id");return S.autoA11y&&(u?c["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(d||ye()):(c["aria-hidden"]="true",c.focusable="false")),c}(t),i=Dn("parseNodeAttributes",{},t);let l=e.styleParser?function(s){const c=s.getAttribute("style");let u=[];return c&&(u=c.split(";").reduce((d,f)=>{const m=f.split(":"),h=m[0],y=m.slice(1);return h&&y.length>0&&(d[h]=y.join(":").trim()),d},{})),u}(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:mt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a},...i}}const{styles:xs}=pt;function Zo(t){const e=S.autoReplaceSvg==="nest"?Jo(t,{styleParser:!1}):Jo(t);return~e.extra.classes.indexOf(So)?Nt("generateLayersText",t,e):Nt("generateSvgReplacementMutation",t,e)}let ht=new Set;function ta(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();const n=_.documentElement.classList,r=u=>n.add("".concat(xo,"-").concat(u)),o=u=>n.remove("".concat(xo,"-").concat(u)),a=S.autoFetchSvg?ht:ko.map(u=>"fa-".concat(u)).concat(Object.keys(xs));a.includes("fa")||a.push("fa");const i=[".".concat(So,":not([").concat(Dt,"])")].concat(a.map(u=>".".concat(u,":not([").concat(Dt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=Zt(t.querySelectorAll(i))}catch{}if(!(l.length>0))return Promise.resolve();r("pending"),o("complete");const s=Hn("onTree"),c=l.reduce((u,d)=>{try{const f=Zo(d);f&&u.push(f)}catch(f){wo||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{Ko(f,()=>{r("active"),r("complete"),o("pending"),typeof e=="function"&&e(),s(),u()})}).catch(f=>{s(),d(f)})})}function ws(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zo(t).then(n=>{n&&Ko([n],e)})}ko.map(t=>{ht.add("fa-".concat(t))}),Object.keys(Tt[Y]).map(ht.add.bind(ht)),Object.keys(Tt[ot]).map(ht.add.bind(ht)),Object.keys(Tt[at]).map(ht.add.bind(ht)),ht=[...ht];const ks=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=mt,symbol:r=!1,mask:o=null,maskId:a=null,title:i=null,titleId:l=null,classes:s=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:m}=t;return qe({type:"icon",...t},()=>(_t("beforeDOMElementCreation",{iconDefinition:t,params:e}),S.autoA11y&&(i?c["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(l||ye()):(c["aria-hidden"]="true",c.focusable="false")),Fn({icons:{main:_n(m),mask:o?_n(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...mt,...n},symbol:r,title:i,maskId:a,titleId:l,extra:{attributes:c,styles:u,classes:s}})))};var Es={mixout(){return{icon:(t=ks,function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Tn(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Tn(o||{})),t(r,{...n,mask:o})})};var t},hooks:()=>({mutationObserverCallbacks:t=>(t.treeCallback=ta,t.nodeCallback=ws,t)}),provides(t){t.i2svg=function(e){const{node:n=_,callback:r=()=>{}}=e;return ta(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:o,titleId:a,prefix:i,transform:l,symbol:s,mask:c,maskId:u,extra:d}=n;return new Promise((f,m)=>{Promise.all([Bn(r,i),c.iconName?Bn(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(h=>{let[y,x]=h;f([e,Fn({icons:{main:y,mask:x},prefix:i,iconName:r,transform:l,symbol:s,maskId:u,title:o,titleId:a,extra:d,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:o,transform:a,styles:i}=e;const l=_e(i);let s;return l.length>0&&(r.style=l),Pn(a)&&(s=Nt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),n.push(s||o.icon),{children:n,attributes:r}}}},Ss={mixout:()=>({layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return qe({type:"layer"},()=>{_t("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(o=>{Array.isArray(o)?o.map(a=>{r=r.concat(a.abstract)}):r=r.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(S.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}})},Os={mixout:()=>({counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:a={}}=e;return qe({type:"counter",content:t},()=>(_t("beforeDOMElementCreation",{content:t,params:e}),function(i){const{content:l,title:s,extra:c}=i,u={...c.attributes,...s?{title:s}:{},class:c.classes.join(" ")},d=_e(c.styles);d.length>0&&(u.style=d);const f=[];return f.push({tag:"span",attributes:u,children:[l]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}({content:t.toString(),title:n,extra:{attributes:o,styles:a,classes:["".concat(S.cssPrefix,"-layers-counter"),...r]}})))}})},As={mixout:()=>({text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=mt,title:r=null,classes:o=[],attributes:a={},styles:i={}}=e;return qe({type:"text",content:t},()=>(_t("beforeDOMElementCreation",{content:t,params:e}),Ho({content:t,transform:{...mt,...n},title:r,extra:{attributes:a,styles:i,classes:["".concat(S.cssPrefix,"-layers-text"),...o]}})))}}),provides(t){t.generateLayersText=function(e,n){const{title:r,transform:o,extra:a}=n;let i=null,l=null;if(ho){const s=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/s,l=c.height/s}return S.autoA11y&&!r&&(a.attributes["aria-hidden"]="true"),Promise.resolve([e,Ho({content:e.innerHTML,width:i,height:l,transform:o,title:r,extra:a,watchable:!0})])}}};const Cs=new RegExp('"',"ug"),ea=[1105920,1112319],na={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xn=Object.keys(na).reduce((t,e)=>(t[e.toLowerCase()]=na[e],t),{}),js=Object.keys(Xn).reduce((t,e)=>{const n=Xn[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ra(t,e){const n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new Promise((r,o)=>{if(t.getAttribute(n)!==null)return r();const a=Zt(t.children).filter(d=>d.getAttribute(kn)===e)[0],i=Ot.getComputedStyle(t,e),l=i.getPropertyValue("font-family"),s=l.match(rs),c=i.getPropertyValue("font-weight"),u=i.getPropertyValue("content");if(a&&!s)return t.removeChild(a),r();if(s&&u!=="none"&&u!==""){const d=i.getPropertyValue("content");let f=function(p,R){const w=p.replace(/^['"]|['"]$/g,"").toLowerCase(),E=parseInt(R),j=isNaN(E)?"normal":E;return(Xn[w]||{})[j]||js[w]}(l,c);const{value:m,isSecondary:h}=function(p){const R=p.replace(Cs,""),w=function(k,C){const F=k.length;let I,L=k.charCodeAt(C);return L>=55296&&L<=56319&&F>C+1&&(I=k.charCodeAt(C+1),I>=56320&&I<=57343)?1024*(L-55296)+I-56320+65536:L}(R,0),E=w>=ea[0]&&w<=ea[1],j=R.length===2&&R[0]===R[1];return{value:Lo(j?R[0]:R),isSecondary:E||j}}(d),y=s[0].startsWith("FontAwesome");let x=$n(f,m),g=x;if(y){const p=function(R){const w=Do[R],E=$n("fas",R);return w||(E?{prefix:"fas",iconName:E}:null)||{prefix:null,iconName:null}}(m);p.iconName&&p.prefix&&(x=p.iconName,f=p.prefix)}if(!x||h||a&&a.getAttribute(En)===f&&a.getAttribute(Sn)===g)r();else{t.setAttribute(n,g),a&&t.removeChild(a);const p={iconName:null,title:null,titleId:null,prefix:null,transform:mt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:R}=p;R.attributes[kn]=e,Bn(x,f).then(w=>{const E=Fn({...p,icons:{main:w,mask:{prefix:null,iconName:null,rest:[]}},prefix:f,iconName:g,extra:R,watchable:!0}),j=_.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=E.map(k=>ve(k)).join(`
`),t.removeAttribute(n),r()}).catch(o)}}else r()})}function Ns(t){return Promise.all([ra(t,"::before"),ra(t,"::after")])}function Rs(t){return!(t.parentNode===document.head||~ts.indexOf(t.tagName.toUpperCase())||t.getAttribute(kn)||t.parentNode&&t.parentNode.tagName==="svg")}function oa(t){if(bt)return new Promise((e,n)=>{const r=Zt(t.querySelectorAll("*")).filter(Rs).map(Ns),o=Hn("searchPseudoElements");Go(),Promise.all(r).then(()=>{o(),qn(),e()}).catch(()=>{o(),qn(),n()})})}var Ps={hooks:()=>({mutationObserverCallbacks:t=>(t.pseudoElementsCallback=oa,t)}),provides(t){t.pseudoElements2svg=function(e){const{node:n=_}=e;S.searchPseudoElements&&oa(n)}}};let aa=!1;var Ls={mixout:()=>({dom:{unwatch(){Go(),aa=!0}}}),hooks:()=>({bootstrap(){Qo(Dn("mutationObserverCallbacks",{}))},noAuto(){Ke&&Ke.disconnect()},watch(t){const{observeMutationsRoot:e}=t;aa?qn():Qo(Dn("mutationObserverCallbacks",{observeMutationsRoot:e}))}})};const ia=t=>t.toLowerCase().split(" ").reduce((e,n)=>{const r=n.toLowerCase().split("-"),o=r[0];let a=r.slice(1).join("-");if(o&&a==="h")return e.flipX=!0,e;if(o&&a==="v")return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(o){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var Ms={mixout:()=>({parse:{transform:t=>ia(t)}}),hooks:()=>({parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ia(n)),t}}),provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:o,iconWidth:a}=e;const i={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(32*r.x,", ").concat(32*r.y,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(s," ").concat(c)},d={transform:"translate(".concat(a/2*-1," -256)")};return{tag:"g",attributes:{...i},children:[{tag:"g",attributes:{...u},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d}}]}]}}}};const Vn={x:0,y:0,width:"100%",height:"100%"};function sa(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}var Is={hooks:()=>({parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?He(n.split(" ").map(o=>o.trim())):{prefix:null,iconName:null,rest:[]};return r.prefix||(r.prefix=jt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}),provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:o,mask:a,maskId:i,transform:l}=e;const{width:s,icon:c}=o,{width:u,icon:d}=a,f=function(j){let{transform:k,containerWidth:C,iconWidth:F}=j;const I={transform:"translate(".concat(C/2," 256)")},L="translate(".concat(32*k.x,", ").concat(32*k.y,") "),v="scale(".concat(k.size/16*(k.flipX?-1:1),", ").concat(k.size/16*(k.flipY?-1:1),") "),M="rotate(".concat(k.rotate," 0 0)");return{outer:I,inner:{transform:"".concat(L," ").concat(v," ").concat(M)},path:{transform:"translate(".concat(F/2*-1," -256)")}}}({transform:l,containerWidth:u,iconWidth:s}),m={tag:"rect",attributes:{...Vn,fill:"white"}},h=c.children?{children:c.children.map(sa)}:{},y={tag:"g",attributes:{...f.inner},children:[sa({tag:c.tag,attributes:{...c.attributes,...f.path},...h})]},x={tag:"g",attributes:{...f.outer},children:[y]},g="mask-".concat(i||ye()),p="clip-".concat(i||ye()),R={tag:"mask",attributes:{...Vn,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,x]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:(E=d,E.tag==="g"?E.children:[E])},R]};var E;return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(g,")"),...Vn}}),{children:n,attributes:r}}}};(function(t,e){let{mixoutsTo:n}=e;Bo=t,te={},Object.keys(ee).forEach(r=>{ds.indexOf(r)===-1&&delete ee[r]}),Bo.forEach(r=>{const o=r.mixout?r.mixout():{};if(Object.keys(o).forEach(a=>{typeof o[a]=="function"&&(n[a]=o[a]),typeof o[a]=="object"&&Object.keys(o[a]).forEach(i=>{n[a]||(n[a]={}),n[a][i]=o[a][i]})}),r.hooks){const a=r.hooks();Object.keys(a).forEach(i=>{te[i]||(te[i]=[]),te[i].push(a[i])})}r.provides&&r.provides(ee)})})([is,Es,Ss,Os,As,Ps,Ls,Ms,Is,{provides(t){let e=!1;Ot.matchMedia&&(e=Ot.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const a={...o,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...o,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...a,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...a,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...a,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},{hooks:()=>({parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n!==null&&(n===""||n);return t.symbol=r,t}})}],{mixoutsTo:Ue});const Kn=Ue.parse,zs=Ue.icon;function la(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?la(Object(n),!0).forEach(function(r){ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):la(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gn(t){return(Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $s(t,e){if(t==null)return{};var n,r,o=function(i,l){if(i==null)return{};var s,c,u={},d=Object.keys(i);for(c=0;c<d.length;c++)s=d[c],l.indexOf(s)>=0||(u[s]=i[s]);return u}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function Qn(t){return function(e){if(Array.isArray(e))return Jn(e)}(t)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||function(e,n){if(e){if(typeof e=="string")return Jn(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Jn(e,n)}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Jn(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ca(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,r){return r?r.toUpperCase():""})).substr(0,1).toLowerCase()+t.substr(1);var e}var Ds=["style"],ua=!1;try{ua=!0}catch{}function fa(t){return t&&Gn(t)==="object"&&t.prefix&&t.iconName&&t.icon?t:Kn.icon?Kn.icon(t):t===null?null:t&&Gn(t)==="object"&&t.prefix&&t.iconName?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:typeof t=="string"?{prefix:"fas",iconName:t}:void 0}function Zn(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ne({},t,e):{}}var da={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},tr=W.forwardRef(function(t,e){var n=gt(gt({},da),t),r=n.icon,o=n.mask,a=n.symbol,i=n.className,l=n.title,s=n.titleId,c=n.maskId,u=fa(r),d=Zn("classes",[].concat(Qn(function(g){var p,R=g.beat,w=g.fade,E=g.beatFade,j=g.bounce,k=g.shake,C=g.flash,F=g.spin,I=g.spinPulse,L=g.spinReverse,v=g.pulse,M=g.fixedWidth,O=g.inverse,H=g.border,B=g.listItem,T=g.flip,X=g.size,nt=g.rotation,Rt=g.pull,$=(ne(p={"fa-beat":R,"fa-fade":w,"fa-beat-fade":E,"fa-bounce":j,"fa-shake":k,"fa-flash":C,"fa-spin":F,"fa-spin-reverse":L,"fa-spin-pulse":I,"fa-pulse":v,"fa-fw":M,"fa-inverse":O,"fa-border":H,"fa-li":B,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},"fa-".concat(X),X!=null),ne(p,"fa-rotate-".concat(nt),nt!=null&&nt!==0),ne(p,"fa-pull-".concat(Rt),Rt!=null),ne(p,"fa-swap-opacity",g.swapOpacity),p);return Object.keys($).map(function(z){return $[z]?z:null}).filter(function(z){return z})}(n)),Qn((i||"").split(" ")))),f=Zn("transform",typeof n.transform=="string"?Kn.transform(n.transform):n.transform),m=Zn("mask",fa(o)),h=zs(u,gt(gt(gt(gt({},d),f),m),{},{symbol:a,title:l,titleId:s,maskId:c}));if(!h)return function(){var g;!ua&&console&&typeof console.error=="function"&&(g=console).error.apply(g,arguments)}("Could not find icon",u),null;var y=h.abstract,x={ref:e};return Object.keys(n).forEach(function(g){da.hasOwnProperty(g)||(x[g]=n[g])}),Ts(y[0],x)});tr.displayName="FontAwesomeIcon",tr.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};var Ts=(function t(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var o=(n.children||[]).map(function(c){return t(e,c)}),a=Object.keys(n.attributes||{}).reduce(function(c,u){var d=n.attributes[u];switch(u){case"class":c.attrs.className=d,delete n.attributes.class;break;case"style":c.attrs.style=d.split(";").map(function(f){return f.trim()}).filter(function(f){return f}).reduce(function(f,m){var h,y=m.indexOf(":"),x=ca(m.slice(0,y)),g=m.slice(y+1).trim();return x.startsWith("webkit")?f[h=x,h.charAt(0).toUpperCase()+h.slice(1)]=g:f[x]=g,f},{});break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=d:c.attrs[ca(u)]=d}return c},{attrs:{}}),i=r.style,l=i===void 0?{}:i,s=$s(r,Ds);return a.attrs.style=gt(gt({},a.attrs.style),l),e.apply(void 0,[n.tag,gt(gt({},a.attrs),s)].concat(Qn(o)))}).bind(null,W.createElement);const ma=b.createContext(null),pa=()=>{const t=b.useContext(ma);if(t===null)throw new Error("Dialog components must be wrapped in <Dialog />");return t},Fs=({canEscapeClose:t=!0,hasCloseButton:e=!0,width:n=500,zIndex:r=60,open:o,preventClose:a=!1,setOpen:i})=>{const l=vi({open:o,onOpenChange:i}),{context:s}=l,c=function(u){u===void 0&&(u=[]);const d=u,f=b.useCallback(y=>yn(y,u,"reference"),d),m=b.useCallback(y=>yn(y,u,"floating"),d),h=b.useCallback(y=>yn(y,u,"item"),u.map(y=>y==null?void 0:y.item));return b.useMemo(()=>({getReferenceProps:f,getFloatingProps:m,getItemProps:h}),[f,m,h])}([function(u,d){d===void 0&&(d={});const{open:f,onOpenChange:m,dataRef:h,elements:{domReference:y}}=u,{enabled:x=!0,event:g="click",toggle:p=!0,ignoreMouse:R=!1,keyboardHandlers:w=!0}=d,E=b.useRef(),j=b.useRef(!1);return b.useMemo(()=>x?{reference:{onPointerDown(k){E.current=k.pointerType},onMouseDown(k){k.button===0&&(Hr(E.current)&&R||g!=="click"&&(!f||!p||h.current.openEvent&&h.current.openEvent.type!=="mousedown"?(k.preventDefault(),m(!0,k.nativeEvent)):m(!1,k.nativeEvent)))},onClick(k){g==="mousedown"&&E.current?E.current=void 0:Hr(E.current)&&R||(!f||!p||h.current.openEvent&&h.current.openEvent.type!=="click"?m(!0,k.nativeEvent):m(!1,k.nativeEvent))},onKeyDown(k){E.current=void 0,k.defaultPrevented||!w||to(k)||(k.key!==" "||eo(y)||(k.preventDefault(),j.current=!0),k.key==="Enter"&&m(!f||!p,k.nativeEvent))},onKeyUp(k){k.defaultPrevented||!w||to(k)||eo(y)||k.key===" "&&j.current&&(j.current=!1,m(!f||!p,k.nativeEvent))}}}:{},[x,h,g,R,w,y,p,f,m])}(s),yi(s,{escapeKey:t,outsidePress:!a,outsidePressEvent:"mousedown"}),function(u,d){d===void 0&&(d={});const{open:f,floatingId:m}=u,{enabled:h=!0,role:y="dialog"}=d,x=fn();return b.useMemo(()=>{const g={id:m,role:y};return h?y==="tooltip"?{reference:{"aria-describedby":f?m:void 0},floating:g}:{reference:{"aria-expanded":f?"true":"false","aria-haspopup":y==="alertdialog"?"dialog":y,"aria-controls":f?m:void 0,...y==="listbox"&&{role:"combobox"},...y==="menu"&&{id:x}},floating:{...g,...y==="menu"&&{"aria-labelledby":x}}}:{}},[h,y,f,m,x])}(s,{role:"dialog"})]);return b.useMemo(()=>Object.assign(Object.assign({hasCloseButton:e,width:n,open:o,setOpen:i,zIndex:r},c),l),[e,n,o,i,r,c,l])},Ws=t=>{var{children:e}=t,n=It(t,["children"]);const r=Fs(n);return N.jsx(ma.Provider,{value:r,children:e})},_s=Z(pi)`
  background-color: rgba(16, 22, 26, 0.7);
  display: grid;
  place-items: center;
  z-index: ${({$zIndex:t})=>t};
`,Bs=({lockScroll:t,children:e,zIndex:n=60})=>N.jsx(_s,{lockScroll:t,$zIndex:n,children:e}),Ys=Z(ae)`
  position: relative;
  z-index: ${({$zIndex:t})=>t};
  width: ${({$width:t})=>`${t}px`};
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;
`,Hs=Z(ae)`
  position: absolute;
  top: 0;
  right: 0;
`,ha=b.forwardRef((t,e)=>{const{setOpen:n}=pa();return N.jsx(so,Object.assign({"aria-label":"dialog-close",type:"button",startIcon:N.jsx(tr,{icon:qi}),color:"blue.main",variant:"text"},t,{ref:e,onClick:()=>n(!1)}))});ha.displayName="DialogClose";const ga=b.forwardRef((t,e)=>{var{zIndex:n=1e3}=t,r=It(t,["zIndex"]);const o=pa(),{context:a}=o,i=It(o,["context"]),l=(s=[i.refs.setFloating,e],b.useMemo(()=>s.every(c=>c==null)?null:c=>{s.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})},s));var s;return a.open?N.jsx(fi,{children:N.jsx(Bs,{zIndex:n,lockScroll:!0,children:N.jsx(mi,{context:a,children:N.jsxs(Ys,Object.assign({backgroundColor:"white.main",radius:3,$width:i.width,ref:l,$zIndex:n},i.getFloatingProps(r),{children:[i.hasCloseButton&&N.jsx(Hs,{p:2,children:N.jsx(ha,{})}),r.children]}))})})}):null});function ba(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ya(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ba(Object(n),!0).forEach(function(r){va(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ba(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function er(t){return er=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},er(t)}function va(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xa(t,e){return function(n){if(Array.isArray(n))return n}(t)||function(n,r){var o=n&&(typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"]);if(o!=null){var a,i,l=[],s=!0,c=!1;try{for(o=o.call(n);!(s=(a=o.next()).done)&&(l.push(a.value),!r||l.length!==r);s=!0);}catch(u){c=!0,i=u}finally{try{s||o.return==null||o.return()}finally{if(c)throw i}}return l}}(t,e)||function(n,r){if(n){if(typeof n=="string")return wa(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return wa(n,r)}}(t,e)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function wa(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}ga.displayName="DialogContent";var it=function(t,e,n){var r=!!n,o=W.useRef(n);W.useEffect(function(){o.current=n},[n]),W.useEffect(function(){if(!r||!t)return function(){};var a=function(){o.current&&o.current.apply(o,arguments)};return t.on(e,a),function(){t.off(e,a)}},[r,e,t,o])},nr=function(t){var e=W.useRef(t);return W.useEffect(function(){e.current=t},[t]),e.current},re=function(t){return t!==null&&er(t)==="object"},ka="[object Object]",Us=function t(e,n){if(!re(e)||!re(n))return e===n;var r=Array.isArray(e);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(e)===ka;if(o!==(Object.prototype.toString.call(n)===ka))return!1;if(!o&&!r)return e===n;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(var l={},s=0;s<a.length;s+=1)l[a[s]]=!0;for(var c=0;c<i.length;c+=1)l[i[c]]=!0;var u=Object.keys(l);if(u.length!==a.length)return!1;var d=e,f=n;return u.every(function(m){return t(d[m],f[m])})},Ea=function(t,e,n){return re(t)?Object.keys(t).reduce(function(r,o){var a=!re(e)||!Us(t[o],e[o]);return n.includes(o)?(a&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),r):a?ya(ya({},r||{}),{},va({},o,t[o])):r},null):null},Sa="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Oa=function(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sa;if(t===null||re(e=t)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function")return t;throw new Error(n)},qs=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sa;if(function(r){return re(r)&&typeof r.then=="function"}(t))return{tag:"async",stripePromise:Promise.resolve(t).then(function(r){return Oa(r,e)})};var n=Oa(t,e);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},Ge=W.createContext(null);Ge.displayName="ElementsContext";var Aa=function(t,e){if(!t)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e," in an <Elements> provider."));return t},Ca=function(t){var e=t.stripe,n=t.options,r=t.children,o=W.useMemo(function(){return qs(e)},[e]),a=xa(W.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(n):null}}),2),i=a[0],l=a[1];W.useEffect(function(){var u=!0,d=function(f){l(function(m){return m.stripe?m:{stripe:f,elements:f.elements(n)}})};return o.tag!=="async"||i.stripe?o.tag!=="sync"||i.stripe||d(o.stripe):o.stripePromise.then(function(f){f&&u&&d(f)}),function(){u=!1}},[o,i,n]);var s=nr(e);W.useEffect(function(){s!==null&&s!==e&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[s,e]);var c=nr(n);return W.useEffect(function(){if(i.elements){var u=Ea(n,c,["clientSecret","fonts"]);u&&i.elements.update(u)}},[n,c,i.elements]),W.useEffect(function(){var u;(u=i.stripe)&&u._registerWrapper&&u.registerAppInfo&&(u._registerWrapper({name:"react-stripe-js",version:"2.7.3"}),u.registerAppInfo({name:"react-stripe-js",version:"2.7.3",url:"https://stripe.com/docs/stripe-js/react"}))},[i.stripe]),W.createElement(Ge.Provider,{value:i},r)};Ca.propTypes={stripe:A.any,options:A.object};var Xs=function(){var t,e;return(t="calls useElements()",e=W.useContext(Ge),Aa(e,t)).elements};A.func.isRequired;var ja=W.createContext(null);ja.displayName="CustomCheckoutSdkContext",W.createContext(null).displayName="CustomCheckoutContext",A.any,A.shape({clientSecret:A.string.isRequired,elementsOptions:A.object}).isRequired;var rr=function(t){var e=W.useContext(ja),n=W.useContext(Ge);if(e&&n)throw new Error("You cannot wrap the part of your app that ".concat(t," in both <CustomCheckoutProvider> and <Elements> providers."));return e?function(r,o){if(!r)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(o," in an <CustomCheckoutProvider> provider."));return r}(e,t):Aa(n,t)},G=function(t,e){var n,r="".concat((n=t).charAt(0).toUpperCase()+n.slice(1),"Element"),o=e?function(a){rr("mounts <".concat(r,">"));var i=a.id,l=a.className;return W.createElement("div",{id:i,className:l})}:function(a){var i,l=a.id,s=a.className,c=a.options,u=c===void 0?{}:c,d=a.onBlur,f=a.onFocus,m=a.onReady,h=a.onChange,y=a.onEscape,x=a.onClick,g=a.onLoadError,p=a.onLoaderStart,R=a.onNetworksChange,w=a.onConfirm,E=a.onCancel,j=a.onShippingAddressChange,k=a.onShippingRateChange,C=rr("mounts <".concat(r,">")),F="elements"in C?C.elements:null,I="customCheckoutSdk"in C?C.customCheckoutSdk:null,L=xa(W.useState(null),2),v=L[0],M=L[1],O=W.useRef(null),H=W.useRef(null);it(v,"blur",d),it(v,"focus",f),it(v,"escape",y),it(v,"click",x),it(v,"loaderror",g),it(v,"loaderstart",p),it(v,"networkschange",R),it(v,"confirm",w),it(v,"cancel",E),it(v,"shippingaddresschange",j),it(v,"shippingratechange",k),it(v,"change",h),m&&(i=t==="expressCheckout"?m:function(){m(v)}),it(v,"ready",i),W.useLayoutEffect(function(){if(O.current===null&&H.current!==null&&(F||I)){var T=null;I?T=I.createElement(t,u):F&&(T=F.create(t,u)),O.current=T,M(T),T&&T.mount(H.current)}},[F,I,u]);var B=nr(u);return W.useEffect(function(){if(O.current){var T=Ea(u,B,["paymentRequest"]);T&&O.current.update(T)}},[u,B]),W.useLayoutEffect(function(){return function(){if(O.current&&typeof O.current.destroy=="function")try{O.current.destroy(),O.current=null}catch{}}},[]),W.createElement("div",{id:l,className:s,ref:H})};return o.propTypes={id:A.string,className:A.string,onChange:A.func,onBlur:A.func,onFocus:A.func,onReady:A.func,onEscape:A.func,onClick:A.func,onLoadError:A.func,onLoaderStart:A.func,onNetworksChange:A.func,onConfirm:A.func,onCancel:A.func,onShippingAddressChange:A.func,onShippingRateChange:A.func,options:A.object},o.displayName=r,o.__elementType=t,o},Q=typeof window>"u";W.createContext(null).displayName="EmbeddedCheckoutProviderContext",G("auBankAccount",Q),G("card",Q);var Na=G("cardNumber",Q),Vs=G("cardExpiry",Q),Ks=G("cardCvc",Q);function or(t){return or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},or(t)}G("fpxBank",Q),G("iban",Q),G("idealBank",Q),G("p24Bank",Q),G("epsBank",Q),G("payment",Q),G("expressCheckout",Q),G("paymentRequestButton",Q),G("linkAuthentication",Q),G("address",Q),G("shippingAddress",Q),G("paymentMethodMessaging",Q),G("affirmMessage",Q),G("afterpayClearpayMessage",Q);var Qe,Ra="https://js.stripe.com/v3",Gs=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Pa="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",La=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(Ra).concat(e);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},we=null,Je=null,Ze=null,Qs=function(t){return we!==null?we:(we=new Promise(function(e,n){if(typeof window<"u"&&typeof document<"u")if(window.Stripe&&t&&console.warn(Pa),window.Stripe)e(window.Stripe);else try{var r=function(){for(var a=document.querySelectorAll('script[src^="'.concat(Ra,'"]')),i=0;i<a.length;i++){var l=a[i];if(Gs.test(l.src))return l}return null}();if(r&&t)console.warn(Pa);else if(r){if(r&&Ze!==null&&Je!==null){var o;r.removeEventListener("load",Ze),r.removeEventListener("error",Je),(o=r.parentNode)===null||o===void 0||o.removeChild(r),r=La(t)}}else r=La(t);Ze=function(a,i){return function(){window.Stripe?a(window.Stripe):i(new Error("Stripe.js not available"))}}(e,n),Je=function(a){return function(){a(new Error("Failed to load Stripe.js"))}}(n),r.addEventListener("load",Ze),r.addEventListener("error",Je)}catch(a){return void n(a)}else e(null)}),we.catch(function(e){return we=null,Promise.reject(e)}))},Ma=function(t){var e=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||or(t)!=="object")throw new Error(e);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(e)},ar=!1,Ia=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];ar=!0;var r=Date.now();return Qs(Qe).then(function(o){return function(a,i,l){if(a===null)return null;var s=a.apply(void 0,i);return function(c,u){c&&c._registerWrapper&&c._registerWrapper({name:"stripe-js",version:"4.3.0",startTime:u})}(s,l),s}(o,e,r)})};Ia.setLoadParameters=function(t){if(ar&&Qe){var e=Ma(t);if(Object.keys(e).reduce(function(n,r){var o;return n&&t[r]===((o=Qe)===null||o===void 0?void 0:o[r])},!0))return}if(ar)throw new Error("You cannot change load parameters after calling loadStripe");Qe=Ma(t)};const Js=Z.form`
  width: 300px;
  max-width: 100%;

  @media ${Fa.mobile_only} {
    margin: 0 auto;
  }

  .InputStripe__card-element {
    background-color: ${({theme:t})=>t.design.form_inputs_background_color};
  }
`,Zs=Z.div`
  position: static;
  font-size: $size-6;
`,tl=Z(({isLoading:t=!1,isDisabled:e=!1,label:n="Pay",className:r=""})=>N.jsx(Wa,{className:cr({[r]:!0,"InputStripe__pay-button button":!0,"is-loading":t}),isDisabled:e,label:n,type:"submit"}))`
  width: 100%;
  padding: 0.75rem;
  height: inherit;
`;function el({amount:t=0,currency:e="USD",email:n="",setEmail:r,errorMessage:o="",onSubmit:a,isLoading:i=!1,isDisabled:l=!1}){const s={base:{fontSize:"16px"}},{text:c}=Da(),u=c.stripe_pay_button_label.replace(/@amount/i,`${e} ${t}`);return N.jsxs(Js,{className:cr({"InputStripe ":!0}),onSubmit:a,children:[N.jsxs("div",{className:"columns is-multiline",children:[N.jsx("div",{className:"column is-full",children:N.jsx(Ta,{name:"email",onChange:r,placeholder:"Email",required:!0,type:"email",value:n})}),N.jsx("div",{className:"column is-full",children:N.jsx(Na,{className:"input is-block",options:{disabled:i,style:s},id:"cardNumber"})}),N.jsx("div",{className:"column is-half",children:N.jsx(Vs,{className:"input is-block",options:{disabled:i,style:s},id:"expiry"})}),N.jsx("div",{className:"column is-half",children:N.jsx(Ks,{id:"cvc",className:"input is-block",options:{disabled:i,style:s}})})]}),N.jsx(tl,{isDisabled:l,isLoading:i,label:u}),N.jsx(Zs,{className:"help is-danger",role:"alert",children:o})]})}function nl({amount:t=0,currency:e="",intent_secret:n="",onSubmit:r}){const[o,a]=b.useState(""),[i,l]=b.useState(!1),[s,c]=b.useState(""),u=rr("calls useStripe()").stripe,d=Xs();return u&&d?N.jsx(el,{amount:t,currency:e,email:s,errorMessage:o,isDisabled:!u,isLoading:i,onSubmit:f=>{if(f.preventDefault(),l(!0),!d||!u)return;const m=d.getElement(Na);m&&u.confirmCardPayment(n,{payment_method:{card:m,billing_details:{email:s}},receipt_email:s}).then(h=>{var y;(y=h.error)!=null&&y.message?a(h.error.message):r(),l(!1)})},setEmail:c}):null}const rl=({children:t})=>(Ya(),N.jsx(ur,{target:document==null?void 0:document.head,children:N.jsx(ur,{target:document==null?void 0:document.head,children:t})})),ol=({children:t})=>N.jsx(_a,{value:{document,iframe:null,window},children:N.jsx(rl,{children:N.jsx(Ba,{children:t})})});function al({message:{stripe_key:t,intent_secret:e,currency:n,amount:r,payment_id:o},onSubmit:a}){const[i,l]=b.useState(null);if(b.useEffect(()=>{l(Ia(t))},[]),!i)return null;const s={clientSecret:e};return N.jsx(Ca,{stripe:i,options:s,children:N.jsx(nl,{intent_secret:e,currency:n,amount:r,onSubmit:()=>{a({type:"stripe",action:"submit",message:"Payment success",payload:{payment_id:o}})}})})}function il({onSubmit:t,message:e}){const n=b.useCallback(r=>{r||t({type:"stripe",action:"submit",message:"Payment canceled",payload:{payment_id:e.payment_id}})},[t,e.payment_id]);return en.createPortal(N.jsx(ol,{children:N.jsx(Ws,{width:350,open:!0,setOpen:n,preventClose:!0,hasCloseButton:!0,children:N.jsx(ga,{zIndex:2147483e3,children:N.jsx(ae,{pt:6,pb:2,display:"flex",justifyContent:"center",alignItems:"center",children:N.jsx(al,{message:e,onSubmit:t})})})})}),document.body)}export{il as default};
