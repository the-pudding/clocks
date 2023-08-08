import{C as Ee,s as X,D as R,E as oe,r as ge,u as ke,v as be,w as ye,f as N,l as te,a as A,g as T,h as S,m as ne,d as h,c as I,j as b,i as E,x as $,F as U,n as ce,z as x,G as ve,e as K,y as j,H as fe,b as Xe,I as se,k as le,J as Ge,K as Ne,L as re,M as Je,N as Qe,o as We,p as we,O as Ze,B as Ye,A as xe,P as Fe,Q as Be}from"../chunks/scheduler.5cc8ee54.js";import{S as Q,i as W,b as P,d as F,m as B,a as C,t as O,e as V,n as et,l as tt,r as nt,f as st,c as Ve,g as He,h as lt}from"../chunks/index.6691fd06.js";import{e as J,M as rt,c as ie,v as ot}from"../chunks/version.bc4e181d.js";import{I as Ue,g as je,a as qe,m as ae,i as he,H as it,c as at,b as ct}from"../chunks/clock.7eadd0c5.js";import{w as ft}from"../chunks/index.8b4fcc06.js";const ut=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function dt(l){return l<.5?4*l*l*l:.5*Math.pow(2*l-2,3)+1}function _t(l){const e=l-1;return e*e*e+1}function pt(l,{delay:e=0,duration:r=400,easing:s=_t,x:t=0,y:n=0,opacity:o=0}={}){const i=getComputedStyle(l),a=+i.opacity,c=i.transform==="none"?"":i.transform,u=a*(1-o),[d,_]=Ee(t),[p,m]=Ee(n);return{delay:e,duration:r,easing:s,css:(y,g)=>`
			transform: ${c} translate(${(1-y)*d}${_}, ${(1-y)*p}${m});
			opacity: ${a-u*g}`}}function ht(l){let e;const r=l[2].default,s=ge(r,l,l[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&8)&&ke(s,r,t,t[3],e?ye(r,t[3],n,null):be(t[3]),null)},i(t){e||(C(s,t),e=!0)},o(t){O(s,t),e=!1},d(t){s&&s.d(t)}}}function mt(l){let e,r;const s=[{name:"help-circle"},l[1],{iconNode:l[0]}];let t={$$slots:{default:[ht]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)t=R(t,s[n]);return e=new Ue({props:t}),{c(){P(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){B(e,n,o),r=!0},p(n,[o]){const i=o&3?je(s,[s[0],o&2&&qe(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){O(e.$$.fragment,n),r=!1},d(n){V(e,n)}}}function gt(l,e,r){let{$$slots:s={},$$scope:t}=e;const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];return l.$$set=o=>{r(1,e=R(R({},e),oe(o))),"$$scope"in o&&r(3,t=o.$$scope)},e=oe(e),[n,e,s,t]}class kt extends Q{constructor(e){super(),W(this,e,gt,mt,X,{})}}const bt=kt;function yt(l){let e;const r=l[2].default,s=ge(r,l,l[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&8)&&ke(s,r,t,t[3],e?ye(r,t[3],n,null):be(t[3]),null)},i(t){e||(C(s,t),e=!0)},o(t){O(s,t),e=!1},d(t){s&&s.d(t)}}}function vt(l){let e,r;const s=[{name:"x-circle"},l[1],{iconNode:l[0]}];let t={$$slots:{default:[yt]},$$scope:{ctx:l}};for(let n=0;n<s.length;n+=1)t=R(t,s[n]);return e=new Ue({props:t}),{c(){P(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,o){B(e,n,o),r=!0},p(n,[o]){const i=o&3?je(s,[s[0],o&2&&qe(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){r||(C(e.$$.fragment,n),r=!0)},o(n){O(e.$$.fragment,n),r=!1},d(n){V(e,n)}}}function wt(l,e,r){let{$$slots:s={},$$scope:t}=e;const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];return l.$$set=o=>{r(1,e=R(R({},e),oe(o))),"$$scope"in o&&r(3,t=o.$$scope)},e=oe(e),[n,e,s,t]}class $t extends Q{constructor(e){super(),W(this,e,wt,vt,X,{})}}const Et=$t;function Nt(l){let e,r,s,t,n,o,i,a,c;return o=new bt({props:{size:"28"}}),{c(){e=N("footer"),r=N("h1"),s=te(l[0]),t=A(),n=N("button"),P(o.$$.fragment),this.h()},l(u){e=T(u,"FOOTER",{class:!0});var d=S(e);r=T(d,"H1",{class:!0});var _=S(r);s=ne(_,l[0]),_.forEach(h),t=I(d),n=T(d,"BUTTON",{class:!0,"aria-label":!0});var p=S(n);F(o.$$.fragment,p),p.forEach(h),d.forEach(h),this.h()},h(){b(r,"class","svelte-2pd0x1"),b(n,"class","icon svelte-2pd0x1"),b(n,"aria-label","about"),b(e,"class","svelte-2pd0x1")},m(u,d){E(u,e,d),$(e,r),$(r,s),$(e,t),$(e,n),B(o,n,null),i=!0,a||(c=U(n,"click",l[2]),a=!0)},p(u,[d]){(!i||d&1)&&ce(s,u[0])},i(u){i||(C(o.$$.fragment,u),i=!0)},o(u){O(o.$$.fragment,u),i=!1},d(u){u&&h(e),V(o),a=!1,c()}}}function Tt(l,e,r){let s;x(l,ae,o=>r(1,s=o));let{text:t}=e;const n=()=>ve(ae,s=!0,s);return l.$$set=o=>{"text"in o&&r(0,t=o.text)},[t,s,n]}class Mt extends Q{constructor(e){super(),W(this,e,Tt,Nt,X,{text:0})}}function Te(l,e,r){const s=l.slice();s[5]=e[r];const t=s[5]==="show"?s[1]:"";s[6]=t;const n=s[5]==="hide";return s[7]=n,s}function Me(l,e,r){const s=l.slice();return s[10]=e[r].text,s[11]=e[r].mark,s}function Se(l,e,r){const s=l.slice();s[14]=e[r];const t=s[14]===":";return s[15]=t,s}function St(l){let e,r=l[10]+"",s;return{c(){e=N("span"),s=te(r),this.h()},l(t){e=T(t,"SPAN",{class:!0});var n=S(e);s=ne(n,r),n.forEach(h),this.h()},h(){b(e,"class","other svelte-e62pk3")},m(t,n){E(t,e,n),$(e,s)},p(t,n){n&1&&r!==(r=t[10]+"")&&ce(s,r)},d(t){t&&h(e)}}}function Ct(l){let e,r=J(l[10]),s=[];for(let t=0;t<r.length;t+=1)s[t]=Ce(Se(l,r,t));return{c(){e=N("mark");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=T(t,"MARK",{class:!0});var n=S(e);for(let o=0;o<s.length;o+=1)s[o].l(n);n.forEach(h),this.h()},h(){b(e,"class","svelte-e62pk3")},m(t,n){E(t,e,n);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(t,n){if(n&1){r=J(t[10]);let o;for(o=0;o<r.length;o+=1){const i=Se(t,r,o);s[o]?s[o].p(i,n):(s[o]=Ce(i),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(t){t&&h(e),fe(s,t)}}}function Ce(l){let e,r=l[14]+"",s;return{c(){e=N("span"),s=te(r),this.h()},l(t){e=T(t,"SPAN",{class:!0});var n=S(e);s=ne(n,r),n.forEach(h),this.h()},h(){b(e,"class","svelte-e62pk3"),se(e,"colon",l[15])},m(t,n){E(t,e,n),$(e,s)},p(t,n){n&1&&r!==(r=t[14]+"")&&ce(s,r),n&1&&se(e,"colon",t[15])},d(t){t&&h(e)}}}function Oe(l){let e;function r(n,o){return n[11]?Ct:St}let s=r(l),t=s(l);return{c(){t.c(),e=K()},l(n){t.l(n),e=K()},m(n,o){t.m(n,o),E(n,e,o)},p(n,o){s===(s=r(n))&&t?t.p(n,o):(t.d(1),t=s(n),t&&(t.c(),t.m(e.parentNode,e)))},d(n){n&&h(e),t.d(n)}}}function ze(l){let e,r,s=J(l[0]),t=[];for(let n=0;n<s.length;n+=1)t[n]=Oe(Me(l,s,n));return{c(){e=N("p");for(let n=0;n<t.length;n+=1)t[n].c();r=A(),this.h()},l(n){e=T(n,"P",{class:!0});var o=S(e);for(let i=0;i<t.length;i+=1)t[i].l(o);r=I(o),o.forEach(h),this.h()},h(){b(e,"class","clock svelte-e62pk3"),se(e,"hide",l[7]),le(e,"transform",l[6]),le(e,"font-size",l[2])},m(n,o){E(n,e,o);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);$(e,r)},p(n,o){if(o&1){s=J(n[0]);let i;for(i=0;i<s.length;i+=1){const a=Me(n,s,i);t[i]?t[i].p(a,o):(t[i]=Oe(a),t[i].c(),t[i].m(e,r))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}o&2&&le(e,"transform",n[6]),o&4&&le(e,"font-size",n[2])},d(n){n&&h(e),fe(t,n)}}}function Ot(l){let e,r=J(["hide","show"]),s=[];for(let t=0;t<2;t+=1)s[t]=ze(Te(l,r,t));return{c(){for(let t=0;t<2;t+=1)s[t].c();e=K()},l(t){for(let n=0;n<2;n+=1)s[n].l(t);e=K()},m(t,n){for(let o=0;o<2;o+=1)s[o]&&s[o].m(t,n);E(t,e,n)},p(t,[n]){if(n&7){r=J(["hide","show"]);let o;for(o=0;o<2;o+=1){const i=Te(t,r,o);s[o]?s[o].p(i,n):(s[o]=ze(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<2;o+=1)s[o].d(1)}},i:j,o:j,d(t){t&&h(e),fe(s,t)}}}function zt(l,e,r){let{data:s}=e,{title:t}=e,n="",o="5vw";function i(){return t.length>20?8:t.length>15?10:t.length>10?12:15}return Xe(()=>{const a=document.querySelector("p.clock.hide"),c=document.querySelector("p.clock.hide mark"),u=a.clientWidth/2,{left:d,width:_}=c.getBoundingClientRect(),p=d+_/2,m=Math.round((p-u)*-1);r(1,n=`translate(${m}px, 0)`),r(2,o=`${i()}vw`)}),l.$$set=a=>{"data"in a&&r(0,s=a.data),"title"in a&&r(3,t=a.title)},[s,n,o,t]}class At extends Q{constructor(e){super(),W(this,e,zt,Ot,X,{data:0,title:3})}}function Ae(l){return Object.prototype.toString.call(l)==="[object Date]"}function me(l,e){if(l===e||l!==l)return()=>l;const r=typeof l;if(r!==typeof e||Array.isArray(l)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(l)){const s=e.map((t,n)=>me(l[n],t));return t=>s.map(n=>n(t))}if(r==="object"){if(!l||!e)throw new Error("Object cannot be null");if(Ae(l)&&Ae(e)){l=l.getTime(),e=e.getTime();const n=e-l;return o=>new Date(l+o*n)}const s=Object.keys(e),t={};return s.forEach(n=>{t[n]=me(l[n],e[n])}),n=>{const o={};return s.forEach(i=>{o[i]=t[i](n)}),o}}if(r==="number"){const s=e-l;return t=>l+t*s}throw new Error(`Cannot interpolate ${r} values`)}function It(l,e={}){const r=ft(l);let s,t=l;function n(o,i){if(l==null)return r.set(l=o),Promise.resolve();t=o;let a=s,c=!1,{delay:u=0,duration:d=400,easing:_=Ge,interpolate:p=me}=R(R({},e),i);if(d===0)return a&&(a.abort(),a=null),r.set(l=t),Promise.resolve();const m=et()+u;let y;return s=tt(g=>{if(g<m)return!0;c||(y=p(l,o),typeof d=="function"&&(d=d(l,o)),c=!0),a&&(a.abort(),a=null);const k=g-m;return k>d?(r.set(l=o),!1):(r.set(l=y(_(k/d))),!0)}),s.promise}return{set:n,update:(o,i)=>n(o(t,l),i),subscribe:r.subscribe}}const{isNaN:pe}=ut;function Dt(l){let e,r,s=!1,t,n=!0,o,i;function a(){cancelAnimationFrame(t),e.paused||(t=nt(a),s=!0),l[16].call(e)}return{c(){e=N("audio"),this.h()},l(c){e=T(c,"AUDIO",{src:!0,preload:!0}),S(e).forEach(h),this.h()},h(){Ne(e.src,r=l[2])||b(e,"src",r),b(e,"preload",""),e.autoplay=!0,(l[0]===void 0||l[1]===void 0)&&re(a),l[0]===void 0&&re(()=>l[17].call(e)),l[5]===void 0&&re(()=>l[20].call(e))},m(c,u){E(c,e,u),pe(l[4])||(e.volume=l[4]),e.muted=l[7],l[21](e),o||(i=[U(e,"timeupdate",a),U(e,"ended",l[17]),U(e,"volumechange",l[18]),U(e,"play",l[19]),U(e,"pause",l[19]),U(e,"durationchange",l[20])],o=!0)},p(c,[u]){u&4&&!Ne(e.src,r=c[2])&&b(e,"src",r),!s&&u&2&&!pe(c[1])&&(e.currentTime=c[1]),s=!1,u&16&&!pe(c[4])&&(e.volume=c[4]),u&128&&(e.muted=c[7]),u&64&&n!==(n=c[6])&&e[n?"pause":"play"]()},i:j,o:j,d(c){c&&h(e),l[21](null),o=!1,Je(i)}}}function Pt(l,e,r){let s,t,n;x(l,he,M=>r(15,n=M));let{preview:o}=e,{ready:i}=e,a=new Date,c,u,d,_,p,m,y,g,k=!0;const ee=Qe(),D=It(0);x(l,D,M=>r(14,t=M));const G=()=>{u&&!k&&(r(1,p=0),u.play(),r(4,_=0),console.log("fade in"),D.set(0),D.set(1,{duration:500}))};function f(M){g=!0,console.log("fade out",M),D.set(0,{duration:500}).then(()=>{g=!1,M&&u.pause()})}function v(){g||y===!1&&s===59&&f(!0)}function z(){if(g||isNaN(m))return;const M=m-p<1;y===!1&&M&&f()}function Z(){o&&r(2,c=`https://p.scdn.co/mp3-preview/${o}?cid=635a94c846854eb29813825c79d704a2`)}function Y(){r(7,k=n),y!==!1&&G()}We(()=>{setInterval(()=>{r(12,a=new Date)},500),r(9,i=!0)});function ue(){d=this.ended,p=this.currentTime,r(0,d),r(1,p)}function de(){d=this.ended,r(0,d)}function w(){_=this.volume,k=this.muted,r(4,_),r(14,t),r(7,k)}function H(){y=this.paused,r(6,y)}function q(){m=this.duration,r(5,m)}function L(M){we[M?"unshift":"push"](()=>{u=M,r(3,u)})}return l.$$set=M=>{"preview"in M&&r(10,o=M.preview),"ready"in M&&r(9,i=M.ready)},l.$$.update=()=>{l.$$.dirty&1024&&Z(),l.$$.dirty&32768&&Y(),l.$$.dirty&1&&d&&ee("ended"),l.$$.dirty&4096&&r(13,s=a.getSeconds()),l.$$.dirty&8192&&v(),l.$$.dirty&2&&z(),l.$$.dirty&16384&&r(4,_=t)},[d,p,c,u,_,m,y,k,D,i,o,G,a,s,t,n,ue,de,w,H,q,L]}class Ft extends Q{constructor(e){super(),W(this,e,Pt,Dt,X,{preview:10,ready:9,play:11})}get play(){return this.$$.ctx[11]}}function Bt(l){let e,r,s,t,n,o,i,a,c,u;o=new Et({props:{size:"28"}});const d=l[3].default,_=ge(d,l,l[2],null);return{c(){e=N("section"),r=N("div"),s=A(),t=N("div"),n=N("button"),P(o.$$.fragment),i=A(),_&&_.c(),this.h()},l(p){e=T(p,"SECTION",{id:!0,class:!0});var m=S(e);r=T(m,"DIV",{class:!0}),S(r).forEach(h),s=I(m),t=T(m,"DIV",{class:!0});var y=S(t);n=T(y,"BUTTON",{class:!0});var g=S(n);F(o.$$.fragment,g),g.forEach(h),i=I(y),_&&_.l(y),y.forEach(h),m.forEach(h),this.h()},h(){b(r,"class","bg svelte-h3ypoi"),b(n,"class","icon svelte-h3ypoi"),b(t,"class","fg svelte-h3ypoi"),b(e,"id","modal"),b(e,"class","svelte-h3ypoi"),se(e,"visible",l[1])},m(p,m){E(p,e,m),$(e,r),$(e,s),$(e,t),$(t,n),B(o,n,null),$(t,i),_&&_.m(t,null),a=!0,c||(u=U(n,"click",l[4]),c=!0)},p(p,[m]){_&&_.p&&(!a||m&4)&&ke(_,d,p,p[2],a?ye(d,p[2],m,null):be(p[2]),null),(!a||m&2)&&se(e,"visible",p[1])},i(p){a||(C(o.$$.fragment,p),C(_,p),a=!0)},o(p){O(o.$$.fragment,p),O(_,p),a=!1},d(p){p&&h(e),V(o),_&&_.d(p),c=!1,u()}}}function Vt(l,e,r){let s,t;x(l,ae,a=>r(0,t=a));let{$$slots:n={},$$scope:o}=e;const i=()=>ve(ae,t=!1,t);return l.$$set=a=>{"$$scope"in a&&r(2,o=a.$$scope)},l.$$.update=()=>{l.$$.dirty&1&&r(1,s=t)},[t,s,o,n,i]}class Ht extends Q{constructor(e){super(),W(this,e,Vt,Bt,X,{})}}const Ut=`
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
  <path fill="#000" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
  <path fill="#fff" d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
</svg>`;function jt(l,e,r){const s=l.slice();return s[26]=e[r].type,s[27]=e[r].value,s}function Ie(l){let e,r,s="Turn Sound On",t,n;return{c(){e=N("p"),r=N("button"),r.textContent=s,this.h()},l(o){e=T(o,"P",{class:!0});var i=S(e);r=T(i,"BUTTON",{"data-svelte-h":!0}),xe(r)!=="svelte-1umiux3"&&(r.textContent=s),i.forEach(h),this.h()},h(){b(e,"class","enable svelte-400zeh")},m(o,i){E(o,e,i),$(e,r),t||(n=U(r,"click",l[15]),t=!0)},p:j,d(o){o&&h(e),t=!1,n()}}}function De(l){let e,r,s,t=l[0].id,n,o;r=new At({props:{data:l[5],title:l[0].name}});let i=Pe(l);return{c(){e=N("div"),P(r.$$.fragment),s=A(),i.c(),n=K(),this.h()},l(a){e=T(a,"DIV",{class:!0});var c=S(e);F(r.$$.fragment,c),c.forEach(h),s=I(a),i.l(a),n=K(),this.h()},h(){b(e,"class","clock")},m(a,c){E(a,e,c),B(r,e,null),E(a,s,c),i.m(a,c),E(a,n,c),o=!0},p(a,c){const u={};c&32&&(u.data=a[5]),c&1&&(u.title=a[0].name),r.$set(u),c&1&&X(t,t=a[0].id)?(He(),O(i,1,1,j),Ve(),i=Pe(a),i.c(),C(i,1),i.m(n.parentNode,n)):i.p(a,c)},i(a){o||(C(r.$$.fragment,a),C(i),o=!0)},o(a){O(r.$$.fragment,a),O(i),o=!1},d(a){a&&(h(e),h(s),h(n)),V(r),i.d(a)}}}function Pe(l){let e,r,s,t=l[0].artist+"",n,o,i,a,c,u;return{c(){e=N("p"),r=N("a"),s=te("By "),n=te(t),o=A(),i=N("span"),a=new Fe(!1),this.h()},l(d){e=T(d,"P",{class:!0});var _=S(e);r=T(_,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var p=S(r);s=ne(p,"By "),n=ne(p,t),o=I(p),i=T(p,"SPAN",{class:!0});var m=S(i);a=Be(m,!1),m.forEach(h),p.forEach(h),_.forEach(h),this.h()},h(){a.a=null,b(i,"class","svelte-400zeh"),b(r,"href",c=`https://open.spotify.com/track/${l[0].id}`),b(r,"target","_blank"),b(r,"rel","noreferrer"),b(r,"aria-label","Spotify"),b(r,"class","svelte-400zeh"),b(e,"class","artist svelte-400zeh")},m(d,_){E(d,e,_),$(e,r),$(r,s),$(r,n),$(r,o),$(r,i),a.m(Ut,i)},p(d,_){_&1&&t!==(t=d[0].artist+"")&&ce(n,t),_&1&&c!==(c=`https://open.spotify.com/track/${d[0].id}`)&&b(r,"href",c)},i(d){d&&(u||re(()=>{u=lt(e,pt,{y:32,duration:500,delay:500,easing:dt}),u.start()}))},o:j,d(d){d&&h(e)}}}function qt(l){let e,r,s;return{c(){e=N("p"),r=new Fe(!1),s=A(),this.h()},l(t){e=T(t,"P",{});var n=S(e);r=Be(n,!1),s=I(n),n.forEach(h),this.h()},h(){r.a=s},m(t,n){E(t,e,n),r.m(l[27],e),$(e,s)},p:j,d(t){t&&h(e)}}}function Lt(l){let e,r=J(ie.songsMethod),s=[];for(let t=0;t<r.length;t+=1)s[t]=qt(jt(l,r,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=K()},l(t){for(let n=0;n<s.length;n+=1)s[n].l(t);e=K()},m(t,n){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(t,n);E(t,e,n)},p:j,d(t){t&&h(e),fe(s,t)}}}function Rt(l){var G;let e,r,s,t,n,o,i,a,c,u,d,_,p,m,y;e=new rt({props:{title:l[7],description:l[8],url:l[9],preloadFont:l[6],keywords:l[10]}}),s=new it({});let g=l[1]&&!l[4]&&Ie(l),k=l[0]&&De(l);function ee(f){l[16](f)}let D={preview:(G=l[0])==null?void 0:G.preview};return l[1]!==void 0&&(D.ready=l[1]),c=new Ft({props:D}),we.push(()=>st(c,"ready",ee)),l[17](c),c.$on("ended",l[18]),_=new Mt({props:{text:ie.songsTitle}}),m=new Ht({props:{$$slots:{default:[Lt]},$$scope:{ctx:l}}}),{c(){P(e.$$.fragment),r=A(),P(s.$$.fragment),t=A(),n=N("div"),o=N("section"),g&&g.c(),i=A(),k&&k.c(),a=A(),P(c.$$.fragment),d=A(),P(_.$$.fragment),p=A(),P(m.$$.fragment),this.h()},l(f){F(e.$$.fragment,f),r=I(f),F(s.$$.fragment,f),t=I(f),n=T(f,"DIV",{class:!0});var v=S(n);o=T(v,"SECTION",{class:!0});var z=S(o);g&&g.l(z),i=I(z),k&&k.l(z),a=I(z),F(c.$$.fragment,z),z.forEach(h),v.forEach(h),d=I(f),F(_.$$.fragment,f),p=I(f),F(m.$$.fragment,f),this.h()},h(){b(o,"class","svelte-400zeh"),b(n,"class","container svelte-400zeh")},m(f,v){B(e,f,v),E(f,r,v),B(s,f,v),E(f,t,v),E(f,n,v),$(n,o),g&&g.m(o,null),$(o,i),k&&k.m(o,null),$(o,a),B(c,o,null),E(f,d,v),B(_,f,v),E(f,p,v),B(m,f,v),y=!0},p(f,[v]){var Y;f[1]&&!f[4]?g?g.p(f,v):(g=Ie(f),g.c(),g.m(o,i)):g&&(g.d(1),g=null),f[0]?k?(k.p(f,v),v&1&&C(k,1)):(k=De(f),k.c(),C(k,1),k.m(o,a)):k&&(He(),O(k,1,1,()=>{k=null}),Ve());const z={};v&1&&(z.preview=(Y=f[0])==null?void 0:Y.preview),!u&&v&2&&(u=!0,z.ready=f[1],Ze(()=>u=!1)),c.$set(z);const Z={};v&1073741824&&(Z.$$scope={dirty:v,ctx:f}),m.$set(Z)},i(f){y||(C(e.$$.fragment,f),C(s.$$.fragment,f),C(k),C(c.$$.fragment,f),C(_.$$.fragment,f),C(m.$$.fragment,f),y=!0)},o(f){O(e.$$.fragment,f),O(s.$$.fragment,f),O(k),O(c.$$.fragment,f),O(_.$$.fragment,f),O(m.$$.fragment,f),y=!1},d(f){f&&(h(r),h(t),h(n),h(d),h(p)),V(e,f),V(s,f),g&&g.d(),k&&k.d(),l[17](null),V(c),V(_,f),V(m,f)}}}function Kt(l,e,r){let s,t,n,o,i;x(l,he,w=>r(2,o=w)),x(l,ct,w=>r(14,i=w)),ot();let a,c,u,d,_;const p=["https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-regular.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-700.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-900.woff2"],{title:m,description:y,url:g,keywords:k}=ie;Ye("copy",ie);function ee(w){if(!w)return;const H=w.toLowerCase(),q=s,L=H.indexOf(q),M=L+q.length,_e=w.slice(0,L),$e=w.slice(L,M),Le=$e.split(":")[0],Re=$e.split(":")[1],Ke=w.slice(M);return[{text:_e},{mark:!0,text:[Le,":",Re]},{text:Ke}]}function D(){r(0,c={name:s,artist:"No Track Found",href:""}),audioEl&&(audioEl.pause(),audioEl.currentTime=0)}function G(w){const q=t.toLowerCase()==="am"?"pm":"am",L=w.filter(_e=>_e.suffix!==q);return L.length?L:w}function f(){const w=a.filter(H=>H.time===s);if(!w.length)D();else{const H=G(w),q=Math.floor(Math.random()*H.length);c==null||c.id,r(0,c={...H[q]}),u.play()}}function v(){f()}async function z(){r(12,a=await at("../assets/tracks.csv"))}const Z=()=>ve(he,o=!1,o);function Y(w){d=w,r(1,d)}function ue(w){we[w?"unshift":"push"](()=>{u=w,r(3,u)})}const de=()=>f();return l.$$.update=()=>{l.$$.dirty&16384&&r(13,s=i.time),l.$$.dirty&16384&&(t=i.period),l.$$.dirty&12290&&a&&d&&v(),l.$$.dirty&1&&r(5,n=ee(c==null?void 0:c.name)),l.$$.dirty&4&&(o||r(4,_=!0))},z(),[c,d,o,u,_,n,p,m,y,g,k,f,a,s,i,Z,Y,ue,de]}class Zt extends Q{constructor(e){super(),W(this,e,Kt,Rt,X,{})}}export{Zt as component};