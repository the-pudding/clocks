import{v as Q,s as ne,f as P,g as O,h as S,d as m,j as N,i as A,D as ke,e as fe,l as q,m as z,u as C,n as X,a as M,c as D,F as ue,G as ce,I as Oe,J as de,K as x,L as B,M as Me,N as De,A as ve,o as Se,p as re,O as Fe,C as je,B as Ie,P as Be}from"../chunks/scheduler.a3ab7b7f.js";import{S as se,i as ie,f as Le,b as J,d as R,m as V,a as F,t as L,c as qe,e as H,g as ze}from"../chunks/index.adf03280.js";import{c as Ke,a as Ue}from"../chunks/clock.4d37f157.js";import{e as Z,M as We,W as Ge,v as Je,c as pe}from"../chunks/version.2a516e17.js";import{T as Re}from"../chunks/Title.e1c9e251.js";import{w as Ve}from"../chunks/index.f2d92702.js";const Ee=typeof window<"u";let He=Ee?()=>window.performance.now():()=>Date.now(),oe=Ee?t=>requestAnimationFrame(t):Q;const W=new Set;function Ae(t){W.forEach(e=>{e.c(t)||(W.delete(e),e.f())}),W.size!==0&&oe(Ae)}function Qe(t){let e;return W.size===0&&oe(Ae),{promise:new Promise(r=>{W.add(e={c:t,f:r})}),abort(){W.delete(e)}}}const Xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _e(t,e,r){const i=t.slice();return i[1]=e[r].text,i[2]=e[r].mark,i}function me(t,e,r){const i=t.slice();i[5]=e[r];const n=i[5]===":";return i[6]=n,i}function Ye(t){let e,r=t[1]+"",i;return{c(){e=P("span"),i=q(r),this.h()},l(n){e=O(n,"SPAN",{class:!0});var s=S(e);i=z(s,r),s.forEach(m),this.h()},h(){N(e,"class","svelte-4nvwp7")},m(n,s){A(n,e,s),C(e,i)},p(n,s){s&1&&r!==(r=n[1]+"")&&X(i,r)},d(n){n&&m(e)}}}function Ze(t){let e,r,i=Z(t[1]),n=[];for(let s=0;s<i.length;s+=1)n[s]=he(me(t,i,s));return{c(){e=P("mark");for(let s=0;s<n.length;s+=1)n[s].c();r=M(),this.h()},l(s){e=O(s,"MARK",{class:!0});var o=S(e);for(let a=0;a<n.length;a+=1)n[a].l(o);r=D(o),o.forEach(m),this.h()},h(){N(e,"class","svelte-4nvwp7")},m(s,o){A(s,e,o);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);C(e,r)},p(s,o){if(o&1){i=Z(s[1]);let a;for(a=0;a<i.length;a+=1){const u=me(s,i,a);n[a]?n[a].p(u,o):(n[a]=he(u),n[a].c(),n[a].m(e,r))}for(;a<n.length;a+=1)n[a].d(1);n.length=i.length}},d(s){s&&m(e),ke(n,s)}}}function he(t){let e,r=t[5]+"",i;return{c(){e=P("span"),i=q(r),this.h()},l(n){e=O(n,"SPAN",{class:!0});var s=S(e);i=z(s,r),s.forEach(m),this.h()},h(){N(e,"class","svelte-4nvwp7"),ue(e,"colon",t[6])},m(n,s){A(n,e,s),C(e,i)},p(n,s){s&1&&r!==(r=n[5]+"")&&X(i,r),s&1&&ue(e,"colon",n[6])},d(n){n&&m(e)}}}function ge(t){let e;function r(s,o){return s[2]?Ze:Ye}let i=r(t),n=i(t);return{c(){n.c(),e=fe()},l(s){n.l(s),e=fe()},m(s,o){n.m(s,o),A(s,e,o)},p(s,o){i===(i=r(s))&&n?n.p(s,o):(n.d(1),n=i(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){s&&m(e),n.d(s)}}}function $e(t){let e,r=Z(t[0]),i=[];for(let n=0;n<r.length;n+=1)i[n]=ge(_e(t,r,n));return{c(){e=P("p");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=O(n,"P",{class:!0});var s=S(e);for(let o=0;o<i.length;o+=1)i[o].l(s);s.forEach(m),this.h()},h(){N(e,"class","svelte-4nvwp7")},m(n,s){A(n,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(n,[s]){if(s&1){r=Z(n[0]);let o;for(o=0;o<r.length;o+=1){const a=_e(n,r,o);i[o]?i[o].p(a,s):(i[o]=ge(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=r.length}},i:Q,o:Q,d(n){n&&m(e),ke(i,n)}}}function xe(t,e,r){let{data:i}=e;return t.$$set=n=>{"data"in n&&r(0,i=n.data)},[i]}class et extends se{constructor(e){super(),ie(this,e,xe,$e,ne,{data:0})}}function ye(t){return Object.prototype.toString.call(t)==="[object Date]"}function te(t,e){if(t===e||t!==t)return()=>t;const r=typeof t;if(r!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const i=e.map((n,s)=>te(t[s],n));return n=>i.map(s=>s(n))}if(r==="object"){if(!t||!e)throw new Error("Object cannot be null");if(ye(t)&&ye(e)){t=t.getTime(),e=e.getTime();const s=e-t;return o=>new Date(t+o*s)}const i=Object.keys(e),n={};return i.forEach(s=>{n[s]=te(t[s],e[s])}),s=>{const o={};return i.forEach(a=>{o[a]=n[a](s)}),o}}if(r==="number"){const i=e-t;return n=>t+n*i}throw new Error(`Cannot interpolate ${r} values`)}function tt(t,e={}){const r=Ve(t);let i,n=t;function s(o,a){if(t==null)return r.set(t=o),Promise.resolve();n=o;let u=i,f=!1,{delay:p=0,duration:y=400,easing:h=Oe,interpolate:c=te}=ce(ce({},e),a);if(y===0)return u&&(u.abort(),u=null),r.set(t=n),Promise.resolve();const k=He()+p;let w;return i=Qe(v=>{if(v<k)return!0;f||(w=c(t,o),typeof y=="function"&&(y=y(t,o)),f=!0),u&&(u.abort(),u=null);const _=v-k;return _>y?(r.set(t=o),!1):(r.set(t=w(h(_/y))),!0)}),i.promise}return{set:s,update:(o,a)=>s(o(n,t),a),subscribe:r.subscribe}}const{isNaN:ee}=Xe;function nt(t){let e,r,i=!1,n,s=!0,o,a;function u(){cancelAnimationFrame(n),e.paused||(n=oe(u),i=!0),t[15].call(e)}return{c(){e=P("audio"),this.h()},l(f){e=O(f,"AUDIO",{src:!0,preload:!0}),S(e).forEach(m),this.h()},h(){de(e.src,r=t[7])||N(e,"src",r),N(e,"preload",""),e.autoplay=!0,(t[0]===void 0||t[1]===void 0)&&x(u),t[0]===void 0&&x(()=>t[16].call(e)),t[4]===void 0&&x(()=>t[19].call(e))},m(f,p){A(f,e,p),ee(t[3])||(e.volume=t[3]),e.muted=t[5],t[20](e),o||(a=[B(e,"timeupdate",u),B(e,"ended",t[16]),B(e,"volumechange",t[17]),B(e,"play",t[18]),B(e,"pause",t[18]),B(e,"durationchange",t[19])],o=!0)},p(f,[p]){p&128&&!de(e.src,r=f[7])&&N(e,"src",r),!i&&p&2&&!ee(f[1])&&(e.currentTime=f[1]),i=!1,p&8&&!ee(f[3])&&(e.volume=f[3]),p&32&&(e.muted=f[5]),p&64&&s!==(s=f[6])&&e[s?"pause":"play"]()},i:Q,o:Q,d(f){f&&m(e),t[20](null),o=!1,Me(a)}}}function rt(t,e,r){let i,n,s,{preview:o}=e,{ready:a}=e,u=new Date,f,p,y,h,c,k,w,v;const _=De(),g=tt(0);ve(t,g,E=>r(14,s=E));const G=()=>{f&&(r(1,h=0),f.play(),r(3,y=1),console.log("fade in"),g.set(0),g.set(1,{duration:500}))};function j(E){v=!0,console.log("fade out",E),g.set(0,{duration:500}).then(()=>{v=!1,E&&f.pause()})}function K(){v||w===!1&&n===59&&j(!0)}function l(){if(v||isNaN(c))return;const E=c-h<1;w===!1&&E&&j()}Se(()=>{setInterval(()=>{r(12,u=new Date)},500),r(9,a=!0)});function d(){p=this.ended,h=this.currentTime,r(0,p),r(1,h)}function b(){p=this.ended,r(0,p)}function T(){y=this.volume,k=this.muted,r(3,y),r(14,s),r(5,k)}function I(){w=this.paused,r(6,w)}function Y(){c=this.duration,r(4,c)}function U(E){re[E?"unshift":"push"](()=>{f=E,r(2,f)})}return t.$$set=E=>{"preview"in E&&r(10,o=E.preview),"ready"in E&&r(9,a=E.ready)},t.$$.update=()=>{t.$$.dirty&1024&&r(7,i=o),t.$$.dirty&1&&p&&_("ended"),t.$$.dirty&4096&&r(13,n=u.getSeconds()),t.$$.dirty&8192&&K(),t.$$.dirty&2&&l(),t.$$.dirty&16384&&r(3,y=s)},[p,h,f,y,c,k,w,i,g,a,o,G,u,n,s,d,b,T,I,Y,U]}class st extends se{constructor(e){super(),ie(this,e,rt,nt,ne,{preview:10,ready:9,play:11})}get play(){return this.$$.ctx[11]}}function we(t){let e,r,i,n,s,o=t[0].artist+"",a,u,f,p,y,h;return r=new et({props:{data:t[4]}}),{c(){e=P("div"),J(r.$$.fragment),i=M(),n=P("p"),s=q("By "),a=q(o),u=M(),f=P("a"),p=q("link"),this.h()},l(c){e=O(c,"DIV",{class:!0});var k=S(e);R(r.$$.fragment,k),k.forEach(m),i=D(c),n=O(c,"P",{class:!0});var w=S(n);s=z(w,"By "),a=z(w,o),u=D(w),f=O(w,"A",{href:!0,target:!0,rel:!0});var v=S(f);p=z(v,"link"),v.forEach(m),w.forEach(m),this.h()},h(){N(e,"class","clock"),N(f,"href",y=t[0].href),N(f,"target","_blank"),N(f,"rel","noreferrer"),N(n,"class","artist svelte-1f29337")},m(c,k){A(c,e,k),V(r,e,null),A(c,i,k),A(c,n,k),C(n,s),C(n,a),C(n,u),C(n,f),C(f,p),h=!0},p(c,k){const w={};k&16&&(w.data=c[4]),r.$set(w),(!h||k&1)&&o!==(o=c[0].artist+"")&&X(a,o),(!h||k&1&&y!==(y=c[0].href))&&N(f,"href",y)},i(c){h||(F(r.$$.fragment,c),h=!0)},o(c){L(r.$$.fragment,c),h=!1},d(c){c&&(m(e),m(i),m(n)),H(r)}}}function be(t){let e,r,i="Enable Audio",n,s;return{c(){e=P("p"),r=P("button"),r.textContent=i,this.h()},l(o){e=O(o,"P",{class:!0});var a=S(e);r=O(a,"BUTTON",{"data-svelte-h":!0}),Ie(r)!=="svelte-mf5j6b"&&(r.textContent=i),a.forEach(m),this.h()},h(){N(e,"class","svelte-1f29337")},m(o,a){A(o,e,a),C(e,r),n||(s=B(r,"click",function(){Be(t[3].play)&&t[3].play.apply(this,arguments)}),n=!0)},p(o,a){t=o},d(o){o&&m(e),n=!1,s()}}}function it(t){var K;let e,r,i,n,s,o,a,u,f,p,y,h,c,k,w,v;e=new We({props:{title:t[7],description:t[8],url:t[9],preloadFont:t[6],keywords:t[10]}}),i=new Ge({}),s=new Re({props:{text:"a clock where the time appears in a song title"}});let _=t[0]&&we(t),g=t[1]&&be(t);function G(l){t[14](l)}let j={preview:(K=t[0])==null?void 0:K.preview_url};return t[1]!==void 0&&(j.ready=t[1]),f=new st({props:j}),re.push(()=>Le(f,"ready",G)),t[15](f),f.$on("ended",t[16]),{c(){J(e.$$.fragment),r=M(),J(i.$$.fragment),n=M(),J(s.$$.fragment),o=M(),_&&_.c(),a=M(),g&&g.c(),u=M(),J(f.$$.fragment),y=M(),h=P("time"),c=q(t[2]),k=M(),w=q(t[5]),this.h()},l(l){R(e.$$.fragment,l),r=D(l),R(i.$$.fragment,l),n=D(l),R(s.$$.fragment,l),o=D(l),_&&_.l(l),a=D(l),g&&g.l(l),u=D(l),R(f.$$.fragment,l),y=D(l),h=O(l,"TIME",{class:!0});var d=S(h);c=z(d,t[2]),k=D(d),w=z(d,t[5]),d.forEach(m),this.h()},h(){N(h,"class","svelte-1f29337")},m(l,d){V(e,l,d),A(l,r,d),V(i,l,d),A(l,n,d),V(s,l,d),A(l,o,d),_&&_.m(l,d),A(l,a,d),g&&g.m(l,d),A(l,u,d),V(f,l,d),A(l,y,d),A(l,h,d),C(h,c),C(h,k),C(h,w),v=!0},p(l,[d]){var T;l[0]?_?(_.p(l,d),d&1&&F(_,1)):(_=we(l),_.c(),F(_,1),_.m(a.parentNode,a)):_&&(ze(),L(_,1,1,()=>{_=null}),qe()),l[1]?g?g.p(l,d):(g=be(l),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null);const b={};d&1&&(b.preview=(T=l[0])==null?void 0:T.preview_url),!p&&d&2&&(p=!0,b.ready=l[1],Fe(()=>p=!1)),f.$set(b),(!v||d&4)&&X(c,l[2]),(!v||d&32)&&X(w,l[5])},i(l){v||(F(e.$$.fragment,l),F(i.$$.fragment,l),F(s.$$.fragment,l),F(_),F(f.$$.fragment,l),v=!0)},o(l){L(e.$$.fragment,l),L(i.$$.fragment,l),L(s.$$.fragment,l),L(_),L(f.$$.fragment,l),v=!1},d(l){l&&(m(r),m(n),m(o),m(a),m(u),m(y),m(h)),H(e,l),H(i,l),H(s,l),_&&_.d(l),g&&g.d(l),t[15](null),H(f,l)}}}function ot(t,e,r){let i,n,s,o;ve(t,Ue,b=>r(13,o=b)),Je();let a,u,f,p;const y=[],{title:h,description:c,url:k,keywords:w}=pe;je("copy",pe);function v(b){if(!b)return;const T=b.toLowerCase(),I=n.toLowerCase(),E=T.indexOf(`${i} ${I}`)>-1?`${i} ${I}`:i,$=T.indexOf(E),le=$+E.length,Ne=b.slice(0,$),ae=b.slice($,le),Te=ae.split(":")[0],Ce=ae.split(":")[1],Pe=b.slice(le);return[{text:Ne},{mark:!0,text:[Te,":",Ce]},{text:Pe}]}function _(){r(0,u={name:i,artist:"No Track Found",href:""}),audioEl&&(audioEl.pause(),audioEl.currentTime=0)}function g(){const b=a.filter(T=>T.time===i);if(!b.length)_();else{const T=b.filter(U=>U.probably_time==="true").length>1,I=b.filter(U=>T?U.probably_time==="true":!0),Y=Math.floor(Math.random()*I.length);u==null||u.id,r(0,u={...I[Y]}),f.play()}}function G(){g()}async function j(){const b=await Ke("../assets/tracks.csv");r(12,a=b.map(T=>({...T,popularity:+T.popularity})))}function K(b){p=b,r(1,p)}function l(b){re[b?"unshift":"push"](()=>{f=b,r(3,f)})}const d=()=>g();return t.$$.update=()=>{t.$$.dirty&8192&&r(2,i=o.time),t.$$.dirty&8192&&r(5,n=o.period),t.$$.dirty&4102&&a&&p&&G(),t.$$.dirty&1&&r(4,s=v(u==null?void 0:u.name))},j(),[u,p,i,f,s,n,y,h,c,k,w,g,a,o,K,l,d]}class pt extends se{constructor(e){super(),ie(this,e,ot,it,ne,{})}}export{pt as component};