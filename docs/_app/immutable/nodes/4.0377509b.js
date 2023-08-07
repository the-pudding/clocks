import{E as we,s as L,F as R,G as ie,r as me,u as ge,v as be,w as ye,f as E,l as ne,a as j,g as N,h as S,m as se,d as p,c as I,j as y,i as w,x as $,H as U,n as fe,z as ee,I as ke,e as K,y as V,C as ue,b as Ke,J as le,k as re,K as Le,L as $e,M as oe,N as Xe,O as Ge,o as Je,p as ve,P as Qe,B as We,A as Ze,Q as Ie,R as ze}from"../chunks/scheduler.709e9ffa.js";import{S as W,i as Z,b as F,d as B,m as D,a as C,t as O,e as H,n as Ye,l as xe,r as et,f as tt,c as Fe,g as Be,h as nt}from"../chunks/index.c0a1f920.js";import{e as Q,M as st,c as ae,v as lt}from"../chunks/version.ac3675be.js";import{c as rt,a as ot}from"../chunks/clock.495e8d01.js";import{I as De,g as He,a as Ue,m as ce,i as pe,H as it}from"../chunks/Header.0d257bcd.js";import{w as at}from"../chunks/index.c5222909.js";const ct=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ft(r){return r<.5?4*r*r*r:.5*Math.pow(2*r-2,3)+1}function ut(r){const e=r-1;return e*e*e+1}function dt(r,{delay:e=0,duration:l=400,easing:s=ut,x:t=0,y:n=0,opacity:o=0}={}){const i=getComputedStyle(r),a=+i.opacity,c=i.transform==="none"?"":i.transform,u=a*(1-o),[f,_]=we(t),[h,g]=we(n);return{delay:e,duration:l,easing:s,css:(T,b)=>`
			transform: ${c} translate(${(1-T)*f}${_}, ${(1-T)*h}${g});
			opacity: ${a-u*b}`}}function _t(r){let e;const l=r[2].default,s=me(l,r,r[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&8)&&ge(s,l,t,t[3],e?ye(l,t[3],n,null):be(t[3]),null)},i(t){e||(C(s,t),e=!0)},o(t){O(s,t),e=!1},d(t){s&&s.d(t)}}}function pt(r){let e,l;const s=[{name:"help-circle"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[_t]},$$scope:{ctx:r}};for(let n=0;n<s.length;n+=1)t=R(t,s[n]);return e=new De({props:t}),{c(){F(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){D(e,n,o),l=!0},p(n,[o]){const i=o&3?He(s,[s[0],o&2&&Ue(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){O(e.$$.fragment,n),l=!1},d(n){H(e,n)}}}function ht(r,e,l){let{$$slots:s={},$$scope:t}=e;const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];return r.$$set=o=>{l(1,e=R(R({},e),ie(o))),"$$scope"in o&&l(3,t=o.$$scope)},e=ie(e),[n,e,s,t]}class mt extends W{constructor(e){super(),Z(this,e,ht,pt,L,{})}}const gt=mt;function bt(r){let e;const l=r[2].default,s=me(l,r,r[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),e=!0},p(t,n){s&&s.p&&(!e||n&8)&&ge(s,l,t,t[3],e?ye(l,t[3],n,null):be(t[3]),null)},i(t){e||(C(s,t),e=!0)},o(t){O(s,t),e=!1},d(t){s&&s.d(t)}}}function yt(r){let e,l;const s=[{name:"x-circle"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[bt]},$$scope:{ctx:r}};for(let n=0;n<s.length;n+=1)t=R(t,s[n]);return e=new De({props:t}),{c(){F(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,o){D(e,n,o),l=!0},p(n,[o]){const i=o&3?He(s,[s[0],o&2&&Ue(n[1]),o&1&&{iconNode:n[0]}]):{};o&8&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){O(e.$$.fragment,n),l=!1},d(n){H(e,n)}}}function kt(r,e,l){let{$$slots:s={},$$scope:t}=e;const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];return r.$$set=o=>{l(1,e=R(R({},e),ie(o))),"$$scope"in o&&l(3,t=o.$$scope)},e=ie(e),[n,e,s,t]}class vt extends W{constructor(e){super(),Z(this,e,kt,yt,L,{})}}const wt=vt;function $t(r){let e,l,s,t,n,o,i,a,c;return o=new gt({props:{size:"28"}}),{c(){e=E("footer"),l=E("h1"),s=ne(r[0]),t=j(),n=E("button"),F(o.$$.fragment),this.h()},l(u){e=N(u,"FOOTER",{class:!0});var f=S(e);l=N(f,"H1",{class:!0});var _=S(l);s=se(_,r[0]),_.forEach(p),t=I(f),n=N(f,"BUTTON",{class:!0,"aria-label":!0});var h=S(n);B(o.$$.fragment,h),h.forEach(p),f.forEach(p),this.h()},h(){y(l,"class","svelte-2pd0x1"),y(n,"class","icon svelte-2pd0x1"),y(n,"aria-label","about"),y(e,"class","svelte-2pd0x1")},m(u,f){w(u,e,f),$(e,l),$(l,s),$(e,t),$(e,n),D(o,n,null),i=!0,a||(c=U(n,"click",r[2]),a=!0)},p(u,[f]){(!i||f&1)&&fe(s,u[0])},i(u){i||(C(o.$$.fragment,u),i=!0)},o(u){O(o.$$.fragment,u),i=!1},d(u){u&&p(e),H(o),a=!1,c()}}}function Et(r,e,l){let s;ee(r,ce,o=>l(1,s=o));let{text:t}=e;const n=()=>ke(ce,s=!0,s);return r.$$set=o=>{"text"in o&&l(0,t=o.text)},[t,s,n]}class Nt extends W{constructor(e){super(),Z(this,e,Et,$t,L,{text:0})}}function Ee(r,e,l){const s=r.slice();s[5]=e[l];const t=s[5]==="show"?s[1]:"";s[6]=t;const n=s[5]==="hide";return s[7]=n,s}function Ne(r,e,l){const s=r.slice();return s[10]=e[l].text,s[11]=e[l].mark,s}function Te(r,e,l){const s=r.slice();s[14]=e[l];const t=s[14]===":";return s[15]=t,s}function Tt(r){let e,l=r[10]+"",s;return{c(){e=E("span"),s=ne(l),this.h()},l(t){e=N(t,"SPAN",{class:!0});var n=S(e);s=se(n,l),n.forEach(p),this.h()},h(){y(e,"class","svelte-88vdj5")},m(t,n){w(t,e,n),$(e,s)},p(t,n){n&1&&l!==(l=t[10]+"")&&fe(s,l)},d(t){t&&p(e)}}}function Mt(r){let e,l=Q(r[10]),s=[];for(let t=0;t<l.length;t+=1)s[t]=Me(Te(r,l,t));return{c(){e=E("mark");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=N(t,"MARK",{class:!0});var n=S(e);for(let o=0;o<s.length;o+=1)s[o].l(n);n.forEach(p),this.h()},h(){y(e,"class","svelte-88vdj5")},m(t,n){w(t,e,n);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(t,n){if(n&1){l=Q(t[10]);let o;for(o=0;o<l.length;o+=1){const i=Te(t,l,o);s[o]?s[o].p(i,n):(s[o]=Me(i),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},d(t){t&&p(e),ue(s,t)}}}function Me(r){let e,l=r[14]+"",s;return{c(){e=E("span"),s=ne(l),this.h()},l(t){e=N(t,"SPAN",{class:!0});var n=S(e);s=se(n,l),n.forEach(p),this.h()},h(){y(e,"class","svelte-88vdj5"),le(e,"colon",r[15])},m(t,n){w(t,e,n),$(e,s)},p(t,n){n&1&&l!==(l=t[14]+"")&&fe(s,l),n&1&&le(e,"colon",t[15])},d(t){t&&p(e)}}}function Se(r){let e;function l(n,o){return n[11]?Mt:Tt}let s=l(r),t=s(r);return{c(){t.c(),e=K()},l(n){t.l(n),e=K()},m(n,o){t.m(n,o),w(n,e,o)},p(n,o){s===(s=l(n))&&t?t.p(n,o):(t.d(1),t=s(n),t&&(t.c(),t.m(e.parentNode,e)))},d(n){n&&p(e),t.d(n)}}}function Ce(r){let e,l,s=Q(r[0]),t=[];for(let n=0;n<s.length;n+=1)t[n]=Se(Ne(r,s,n));return{c(){e=E("p");for(let n=0;n<t.length;n+=1)t[n].c();l=j(),this.h()},l(n){e=N(n,"P",{class:!0});var o=S(e);for(let i=0;i<t.length;i+=1)t[i].l(o);l=I(o),o.forEach(p),this.h()},h(){y(e,"class","clock svelte-88vdj5"),le(e,"hide",r[7]),re(e,"transform",r[6]),re(e,"font-size",r[2])},m(n,o){w(n,e,o);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);$(e,l)},p(n,o){if(o&1){s=Q(n[0]);let i;for(i=0;i<s.length;i+=1){const a=Ne(n,s,i);t[i]?t[i].p(a,o):(t[i]=Se(a),t[i].c(),t[i].m(e,l))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}o&2&&re(e,"transform",n[6]),o&4&&re(e,"font-size",n[2])},d(n){n&&p(e),ue(t,n)}}}function St(r){let e,l=Q(["hide","show"]),s=[];for(let t=0;t<2;t+=1)s[t]=Ce(Ee(r,l,t));return{c(){for(let t=0;t<2;t+=1)s[t].c();e=K()},l(t){for(let n=0;n<2;n+=1)s[n].l(t);e=K()},m(t,n){for(let o=0;o<2;o+=1)s[o]&&s[o].m(t,n);w(t,e,n)},p(t,[n]){if(n&7){l=Q(["hide","show"]);let o;for(o=0;o<2;o+=1){const i=Ee(t,l,o);s[o]?s[o].p(i,n):(s[o]=Ce(i),s[o].c(),s[o].m(e.parentNode,e))}for(;o<2;o+=1)s[o].d(1)}},i:V,o:V,d(t){t&&p(e),ue(s,t)}}}function Ct(r,e,l){let{data:s}=e,{title:t}=e,n="",o="1.5vw";function i(){return t.length>20?1.5:t.length>15?2:t.length>10?2.5:3.5}return Ke(()=>{const a=document.querySelector("p.clock.hide"),c=document.querySelector("p.clock.hide mark"),u=a.clientWidth/2,{left:f,width:_}=c.getBoundingClientRect(),h=f+_/2,g=Math.round((h-u)*-1);l(1,n=`translate(${g}px, 0)`),console.log({left:f,width:_,center:h,mid:u,diff:g}),l(2,o=`${i()}vw`)}),r.$$set=a=>{"data"in a&&l(0,s=a.data),"title"in a&&l(3,t=a.title)},[s,n,o,t]}class Ot extends W{constructor(e){super(),Z(this,e,Ct,St,L,{data:0,title:3})}}function Oe(r){return Object.prototype.toString.call(r)==="[object Date]"}function he(r,e){if(r===e||r!==r)return()=>r;const l=typeof r;if(l!==typeof e||Array.isArray(r)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(r)){const s=e.map((t,n)=>he(r[n],t));return t=>s.map(n=>n(t))}if(l==="object"){if(!r||!e)throw new Error("Object cannot be null");if(Oe(r)&&Oe(e)){r=r.getTime(),e=e.getTime();const n=e-r;return o=>new Date(r+o*n)}const s=Object.keys(e),t={};return s.forEach(n=>{t[n]=he(r[n],e[n])}),n=>{const o={};return s.forEach(i=>{o[i]=t[i](n)}),o}}if(l==="number"){const s=e-r;return t=>r+t*s}throw new Error(`Cannot interpolate ${l} values`)}function At(r,e={}){const l=at(r);let s,t=r;function n(o,i){if(r==null)return l.set(r=o),Promise.resolve();t=o;let a=s,c=!1,{delay:u=0,duration:f=400,easing:_=Le,interpolate:h=he}=R(R({},e),i);if(f===0)return a&&(a.abort(),a=null),l.set(r=t),Promise.resolve();const g=Ye()+u;let T;return s=xe(b=>{if(b<g)return!0;c||(T=h(r,o),typeof f=="function"&&(f=f(r,o)),c=!0),a&&(a.abort(),a=null);const m=b-g;return m>f?(l.set(r=o),!1):(l.set(r=T(_(m/f))),!0)}),s.promise}return{set:n,update:(o,i)=>n(o(t,r),i),subscribe:l.subscribe}}const{isNaN:_e}=ct;function Pt(r){let e,l,s=!1,t,n=!0,o,i;function a(){cancelAnimationFrame(t),e.paused||(t=et(a),s=!0),r[16].call(e)}return{c(){e=E("audio"),this.h()},l(c){e=N(c,"AUDIO",{src:!0,preload:!0}),S(e).forEach(p),this.h()},h(){$e(e.src,l=r[2])||y(e,"src",l),y(e,"preload",""),e.autoplay=!0,(r[0]===void 0||r[1]===void 0)&&oe(a),r[0]===void 0&&oe(()=>r[17].call(e)),r[5]===void 0&&oe(()=>r[20].call(e))},m(c,u){w(c,e,u),_e(r[4])||(e.volume=r[4]),e.muted=r[7],r[21](e),o||(i=[U(e,"timeupdate",a),U(e,"ended",r[17]),U(e,"volumechange",r[18]),U(e,"play",r[19]),U(e,"pause",r[19]),U(e,"durationchange",r[20])],o=!0)},p(c,[u]){u&4&&!$e(e.src,l=c[2])&&y(e,"src",l),!s&&u&2&&!_e(c[1])&&(e.currentTime=c[1]),s=!1,u&16&&!_e(c[4])&&(e.volume=c[4]),u&128&&(e.muted=c[7]),u&64&&n!==(n=c[6])&&e[n?"pause":"play"]()},i:V,o:V,d(c){c&&p(e),r[21](null),o=!1,Xe(i)}}}function jt(r,e,l){let s,t,n;ee(r,pe,M=>l(15,n=M));let{preview:o}=e,{ready:i}=e,a=new Date,c,u,f,_,h,g,T,b,m=!0;const te=Ge(),P=At(0);ee(r,P,M=>l(14,t=M));const X=()=>{u&&!m&&(l(1,h=0),u.play(),l(4,_=0),console.log("fade in"),P.set(0),P.set(1,{duration:500}))};function d(M){b=!0,console.log("fade out",M),P.set(0,{duration:500}).then(()=>{b=!1,M&&u.pause()})}function k(){b||T===!1&&s===59&&d(!0)}function A(){if(b||isNaN(g))return;const M=g-h<1;T===!1&&M&&d()}function Y(){o&&l(2,c=`https://p.scdn.co/mp3-preview/${o}?cid=635a94c846854eb29813825c79d704a2`)}function x(){l(7,m=n),T!==!1&&X()}Je(()=>{setInterval(()=>{l(12,a=new Date)},500),l(9,i=!0)});function v(){f=this.ended,h=this.currentTime,l(0,f),l(1,h)}function z(){f=this.ended,l(0,f)}function G(){_=this.volume,m=this.muted,l(4,_),l(14,t),l(7,m)}function J(){T=this.paused,l(6,T)}function q(){g=this.duration,l(5,g)}function de(M){ve[M?"unshift":"push"](()=>{u=M,l(3,u)})}return r.$$set=M=>{"preview"in M&&l(10,o=M.preview),"ready"in M&&l(9,i=M.ready)},r.$$.update=()=>{r.$$.dirty&1024&&Y(),r.$$.dirty&32768&&x(),r.$$.dirty&1&&f&&te("ended"),r.$$.dirty&4096&&l(13,s=a.getSeconds()),r.$$.dirty&8192&&k(),r.$$.dirty&2&&A(),r.$$.dirty&16384&&l(4,_=t)},[f,h,c,u,_,g,T,m,P,i,o,X,a,s,t,n,v,z,G,J,q,de]}class It extends W{constructor(e){super(),Z(this,e,jt,Pt,L,{preview:10,ready:9,play:11})}get play(){return this.$$.ctx[11]}}function zt(r){let e,l,s,t,n,o,i,a;t=new wt({props:{size:"28"}});const c=r[3].default,u=me(c,r,r[2],null);return{c(){e=E("section"),l=E("div"),s=E("button"),F(t.$$.fragment),n=j(),u&&u.c(),this.h()},l(f){e=N(f,"SECTION",{id:!0,class:!0});var _=S(e);l=N(_,"DIV",{class:!0});var h=S(l);s=N(h,"BUTTON",{class:!0});var g=S(s);B(t.$$.fragment,g),g.forEach(p),n=I(h),u&&u.l(h),h.forEach(p),_.forEach(p),this.h()},h(){y(s,"class","icon svelte-15p34rr"),y(l,"class","svelte-15p34rr"),y(e,"id","modal"),y(e,"class","svelte-15p34rr"),le(e,"visible",r[1])},m(f,_){w(f,e,_),$(e,l),$(l,s),D(t,s,null),$(l,n),u&&u.m(l,null),o=!0,i||(a=U(s,"click",r[4]),i=!0)},p(f,[_]){u&&u.p&&(!o||_&4)&&ge(u,c,f,f[2],o?ye(c,f[2],_,null):be(f[2]),null),(!o||_&2)&&le(e,"visible",f[1])},i(f){o||(C(t.$$.fragment,f),C(u,f),o=!0)},o(f){O(t.$$.fragment,f),O(u,f),o=!1},d(f){f&&p(e),H(t),u&&u.d(f),i=!1,a()}}}function Ft(r,e,l){let s,t;ee(r,ce,a=>l(0,t=a));let{$$slots:n={},$$scope:o}=e;const i=()=>ke(ce,t=!1,t);return r.$$set=a=>{"$$scope"in a&&l(2,o=a.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&l(1,s=t)},[t,s,o,n,i]}class Bt extends W{constructor(e){super(),Z(this,e,Ft,zt,L,{})}}const Dt=`
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
  <path fill="#000" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"/>
  <path fill="#fff" d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"/>
</svg>`;function Ht(r,e,l){const s=r.slice();return s[25]=e[l].type,s[26]=e[l].value,s}function Ae(r){let e,l,s="Turn Sound On",t,n;return{c(){e=E("p"),l=E("button"),l.textContent=s,this.h()},l(o){e=N(o,"P",{class:!0});var i=S(e);l=N(i,"BUTTON",{"data-svelte-h":!0}),Ze(l)!=="svelte-1umiux3"&&(l.textContent=s),i.forEach(p),this.h()},h(){y(e,"class","enable svelte-ygtd0t")},m(o,i){w(o,e,i),$(e,l),t||(n=U(l,"click",r[15]),t=!0)},p:V,d(o){o&&p(e),t=!1,n()}}}function Pe(r){let e,l,s,t=r[0].id,n,o;l=new Ot({props:{data:r[5],title:r[0].name}});let i=je(r);return{c(){e=E("div"),F(l.$$.fragment),s=j(),i.c(),n=K(),this.h()},l(a){e=N(a,"DIV",{class:!0});var c=S(e);B(l.$$.fragment,c),c.forEach(p),s=I(a),i.l(a),n=K(),this.h()},h(){y(e,"class","clock")},m(a,c){w(a,e,c),D(l,e,null),w(a,s,c),i.m(a,c),w(a,n,c),o=!0},p(a,c){const u={};c&32&&(u.data=a[5]),c&1&&(u.title=a[0].name),l.$set(u),c&1&&L(t,t=a[0].id)?(Be(),O(i,1,1,V),Fe(),i=je(a),i.c(),C(i,1),i.m(n.parentNode,n)):i.p(a,c)},i(a){o||(C(l.$$.fragment,a),C(i),o=!0)},o(a){O(l.$$.fragment,a),O(i),o=!1},d(a){a&&(p(e),p(s),p(n)),H(l),i.d(a)}}}function je(r){let e,l,s,t=r[0].artist+"",n,o,i,a,c,u;return{c(){e=E("p"),l=E("a"),s=ne("By "),n=ne(t),o=j(),i=E("span"),a=new Ie(!1),this.h()},l(f){e=N(f,"P",{class:!0});var _=S(e);l=N(_,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var h=S(l);s=se(h,"By "),n=se(h,t),o=I(h),i=N(h,"SPAN",{class:!0});var g=S(i);a=ze(g,!1),g.forEach(p),h.forEach(p),_.forEach(p),this.h()},h(){a.a=null,y(i,"class","svelte-ygtd0t"),y(l,"href",c=`https://open.spotify.com/track/${r[0].id}`),y(l,"target","_blank"),y(l,"rel","noreferrer"),y(l,"aria-label","Spotify"),y(l,"class","svelte-ygtd0t"),y(e,"class","artist svelte-ygtd0t")},m(f,_){w(f,e,_),$(e,l),$(l,s),$(l,n),$(l,o),$(l,i),a.m(Dt,i)},p(f,_){_&1&&t!==(t=f[0].artist+"")&&fe(n,t),_&1&&c!==(c=`https://open.spotify.com/track/${f[0].id}`)&&y(l,"href",c)},i(f){f&&(u||oe(()=>{u=nt(e,dt,{y:32,duration:500,delay:500,easing:ft}),u.start()}))},o:V,d(f){f&&p(e)}}}function Ut(r){let e,l,s;return{c(){e=E("p"),l=new Ie(!1),s=j(),this.h()},l(t){e=N(t,"P",{class:!0});var n=S(e);l=ze(n,!1),s=I(n),n.forEach(p),this.h()},h(){l.a=s,y(e,"class","text-outline")},m(t,n){w(t,e,n),l.m(r[26],e),$(e,s)},p:V,d(t){t&&p(e)}}}function Vt(r){let e,l=Q(ae.songsMethod),s=[];for(let t=0;t<l.length;t+=1)s[t]=Ut(Ht(r,l,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=K()},l(t){for(let n=0;n<s.length;n+=1)s[n].l(t);e=K()},m(t,n){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(t,n);w(t,e,n)},p:V,d(t){t&&p(e),ue(s,t)}}}function qt(r){var X;let e,l,s,t,n,o,i,a,c,u,f,_,h,g,T;e=new st({props:{title:r[7],description:r[8],url:r[9],preloadFont:r[6],keywords:r[10]}}),s=new it({});let b=r[1]&&!r[4]&&Ae(r),m=r[0]&&Pe(r);function te(d){r[16](d)}let P={preview:(X=r[0])==null?void 0:X.preview};return r[1]!==void 0&&(P.ready=r[1]),c=new It({props:P}),ve.push(()=>tt(c,"ready",te)),r[17](c),c.$on("ended",r[18]),_=new Nt({props:{text:ae.songsTitle}}),g=new Bt({props:{$$slots:{default:[Vt]},$$scope:{ctx:r}}}),{c(){F(e.$$.fragment),l=j(),F(s.$$.fragment),t=j(),n=E("div"),o=E("section"),b&&b.c(),i=j(),m&&m.c(),a=j(),F(c.$$.fragment),f=j(),F(_.$$.fragment),h=j(),F(g.$$.fragment),this.h()},l(d){B(e.$$.fragment,d),l=I(d),B(s.$$.fragment,d),t=I(d),n=N(d,"DIV",{class:!0});var k=S(n);o=N(k,"SECTION",{class:!0});var A=S(o);b&&b.l(A),i=I(A),m&&m.l(A),a=I(A),B(c.$$.fragment,A),A.forEach(p),k.forEach(p),f=I(d),B(_.$$.fragment,d),h=I(d),B(g.$$.fragment,d),this.h()},h(){y(o,"class","svelte-ygtd0t"),y(n,"class","container svelte-ygtd0t")},m(d,k){D(e,d,k),w(d,l,k),D(s,d,k),w(d,t,k),w(d,n,k),$(n,o),b&&b.m(o,null),$(o,i),m&&m.m(o,null),$(o,a),D(c,o,null),w(d,f,k),D(_,d,k),w(d,h,k),D(g,d,k),T=!0},p(d,[k]){var x;d[1]&&!d[4]?b?b.p(d,k):(b=Ae(d),b.c(),b.m(o,i)):b&&(b.d(1),b=null),d[0]?m?(m.p(d,k),k&1&&C(m,1)):(m=Pe(d),m.c(),C(m,1),m.m(o,a)):m&&(Be(),O(m,1,1,()=>{m=null}),Fe());const A={};k&1&&(A.preview=(x=d[0])==null?void 0:x.preview),!u&&k&2&&(u=!0,A.ready=d[1],Qe(()=>u=!1)),c.$set(A);const Y={};k&536870912&&(Y.$$scope={dirty:k,ctx:d}),g.$set(Y)},i(d){T||(C(e.$$.fragment,d),C(s.$$.fragment,d),C(m),C(c.$$.fragment,d),C(_.$$.fragment,d),C(g.$$.fragment,d),T=!0)},o(d){O(e.$$.fragment,d),O(s.$$.fragment,d),O(m),O(c.$$.fragment,d),O(_.$$.fragment,d),O(g.$$.fragment,d),T=!1},d(d){d&&(p(l),p(t),p(n),p(f),p(h)),H(e,d),H(s,d),b&&b.d(),m&&m.d(),r[17](null),H(c),H(_,d),H(g,d)}}}function Rt(r,e,l){let s,t,n,o;ee(r,pe,v=>l(2,n=v)),ee(r,ot,v=>l(14,o=v)),lt();let i,a,c,u,f;const _=["https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-regular.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-700.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-900.woff2"],{title:h,description:g,url:T,keywords:b}=ae;We("copy",ae);function m(v){if(!v)return;const z=v.toLowerCase(),G=s,J=z.indexOf(G),q=J+G.length,de=v.slice(0,J),M=v.slice(J,q),Ve=M.split(":")[0],qe=M.split(":")[1],Re=v.slice(q);return[{text:de},{mark:!0,text:[Ve,":",qe]},{text:Re}]}function te(){l(0,a={name:s,artist:"No Track Found",href:""}),audioEl&&(audioEl.pause(),audioEl.currentTime=0)}function P(){const v=i.filter(z=>z.time===s);if(!v.length)te();else{const z=v.filter(q=>q.probably_time==="true").length>1,G=v.filter(q=>z?q.probably_time==="true":!0),J=Math.floor(Math.random()*G.length);a==null||a.id,l(0,a={...G[J]}),c.play()}}function X(){P()}async function d(){const v=await rt("../assets/tracks.csv");l(12,i=v.map(z=>({...z,popularity:+z.popularity})))}const k=()=>ke(pe,n=!1,n);function A(v){u=v,l(1,u)}function Y(v){ve[v?"unshift":"push"](()=>{c=v,l(3,c)})}const x=()=>P();return r.$$.update=()=>{r.$$.dirty&16384&&l(13,s=o.time),r.$$.dirty&16384&&o.period,r.$$.dirty&12290&&i&&u&&X(),r.$$.dirty&1&&l(5,t=m(a==null?void 0:a.name)),r.$$.dirty&4&&(n||l(4,f=!0))},d(),[a,u,n,c,f,t,_,h,g,T,b,P,i,s,o,k,A,Y,x]}class Wt extends W{constructor(e){super(),Z(this,e,Rt,qt,L,{})}}export{Wt as component};
