var W=Object.defineProperty;var O=(t,e,n)=>e in t?W(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(O(t,typeof e!="symbol"?e+"":e,n),n);function F(){}const ut=t=>t;function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function ft(){return Object.create(null)}function J(t){t.forEach(I)}function dt(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ht(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function mt(t){return Object.keys(t).length===0}function K(t,...e){if(t==null){for(const i of e)i(void 0);return F}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(K(e,n))}function yt(t,e,n,i){if(t){const s=L(t,e,n,i);return t[0](s)}}function L(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)c[l]=e.dirty[l]|s[l];return c}return e.dirty|s}return e.dirty}function bt(t,e,n,i,s,c){if(s){const r=L(e,n,i,c);t.p(r,s)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function wt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Et(t,e,n){return t.set(n),e}function Nt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let b=!1;function Tt(){b=!0}function At(){b=!1}function Q(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&o.push(u)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:Q(1,s,R=>e[n[R]].claim_order,a))-1;i[o]=n[u]+1;const k=u+1;n[k]=o,s=Math.max(k,s)}const c=[],r=[];let l=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<r.length;o++){for(;a<c.length&&r[o].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[o],u)}}function D(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=x("style");return e.textContent="/* empty */",X(V(t),e),e.sheet}function X(t,e){return D(t.head||t,e),e.sheet}function Y(t,e){if(b){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){b&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function Mt(){return A(" ")}function St(){return A("")}function C(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t,e){for(const n in e)tt(t,n,e[n])}function Lt(t){return t.dataset.svelteH}function Dt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){P(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const o=n(l);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function q(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function jt(t,e,n){return q(t,e,n,x)}function Pt(t,e,n){return q(t,e,n,j)}function et(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function zt(t){return et(t," ")}function M(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function qt(t,e){const n=M(t,"HTML_TAG_START",0),i=M(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new S(e);P(t);const s=t.splice(n,i-n+1);y(s[0]),y(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new S(e,c)}function Bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Rt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let p;function nt(){if(p===void 0){p=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{p=!0}}return p}function Wt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=x("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=nt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=C(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=C(i.contentWindow,"resize",e),e()}),D(t,i),()=>{(s||c&&i.contentWindow)&&c(),y(i)}}function Ot(t,e,n){t.classList.toggle(e,!!n)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class st{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=x(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class S extends st{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Gt(t,e){return new t(e)}let g;function v(t){g=t}function w(){if(!g)throw new Error("Function called outside component initialization");return g}function It(t){w().$$.on_mount.push(t)}function Jt(t){w().$$.after_update.push(t)}function Kt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=it(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Qt(t,e){return w().$$.context.set(t,e),e}const h=[],H=[];let _=[];const N=[],B=Promise.resolve();let T=!1;function rt(){T||(T=!0,B.then(ot))}function Ut(){return rt(),B}function ct(t){_.push(t)}function Vt(t){N.push(t)}const E=new Set;let d=0;function ot(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,v(e),lt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(v(null),h.length=0,d=0;H.length;)H.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];E.has(n)||(E.add(n),n())}_.length=0}while(h.length);for(;N.length;)N.pop()();T=!1,E.clear(),v(t)}function lt(t){if(t.fragment!==null){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function Xt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{ft as $,Lt as A,Qt as B,Nt as C,G as D,wt as E,C as F,Et as G,Ct as H,Ot as I,ut as J,ht as K,ct as L,J as M,Kt as N,Vt as O,S as P,qt as Q,Wt as R,j as S,Pt as T,Ht as U,vt as V,Ft as W,V as X,kt as Y,dt as Z,it as _,Mt as a,ot as a0,mt as a1,Xt as a2,g as a3,v as a4,I as a5,h as a6,rt as a7,Tt as a8,At as a9,Jt as b,zt as c,y as d,St as e,x as f,jt as g,Dt as h,$ as i,tt as j,Rt as k,A as l,et as m,Bt as n,It as o,H as p,Gt as q,yt as r,_t as s,Ut as t,bt as u,xt as v,gt as w,Y as x,F as y,pt as z};