import{y as Z,s as ye,f as T,a as L,l as G,g as C,h as S,d as h,c as j,m as Q,j as b,k as _e,i as V,x as _,n as ie,C as ve,e as ce,E as ae,F as Ce,I as Ue,J as he,K as $,L as Je,z as re,M as Ye,o as Ge,t as Qe,p as be,N as We,D as Xe,B as Me,O as Ze,H as $e,A as xe}from"../chunks/scheduler.75bf702b.js";import{S as ke,i as we,f as et,b as x,d as ee,m as te,a as B,t as Y,c as Ve,e as se,g as Fe}from"../chunks/index.de86b41b.js";import{e as ue,c as ne,M as tt,v as st}from"../chunks/version.d441c659.js";import{i as me,H as nt,F as rt,M as lt,V as it,c as at,a as ot,m as ut,t as ft}from"../chunks/clock.b6ab7be9.js";import{w as ct}from"../chunks/singletons.b47b96f1.js";const Le=typeof window<"u";let dt=Le?()=>window.performance.now():()=>Date.now(),Ee=Le?t=>requestAnimationFrame(t):Z;const le=new Set;function je(t){le.forEach(e=>{e.c(t)||(le.delete(e),e.f())}),le.size!==0&&Ee(je)}function ht(t){let e;return le.size===0&&Ee(je),{promise:new Promise(s=>{le.add(e={c:t,f:s})}),abort(){le.delete(e)}}}const pt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Se(t,e,s){const l=t.slice();return l[8]=e[s].text,l[9]=e[s].mark,l}function De(t,e,s){const l=t.slice();l[12]=e[s];const n=l[12]===":";return l[13]=n,l}function _t(t){let e,s=t[8]+"",l;return{c(){e=T("span"),l=G(s),this.h()},l(n){e=C(n,"SPAN",{class:!0});var r=S(e);l=Q(r,s),r.forEach(h),this.h()},h(){b(e,"class","other svelte-11u3eut")},m(n,r){V(n,e,r),_(e,l)},p(n,r){r&1&&s!==(s=n[8]+"")&&ie(l,s)},d(n){n&&h(e)}}}function mt(t){let e,s,l=ue(t[8]),n=[];for(let r=0;r<l.length;r+=1)n[r]=qe(De(t,l,r));return{c(){e=T("mark");for(let r=0;r<n.length;r+=1)n[r].c();s=L(),this.h()},l(r){e=C(r,"MARK",{class:!0});var i=S(e);for(let a=0;a<n.length;a+=1)n[a].l(i);s=j(i),i.forEach(h),this.h()},h(){b(e,"class","svelte-11u3eut")},m(r,i){V(r,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);_(e,s)},p(r,i){if(i&1){l=ue(r[8]);let a;for(a=0;a<l.length;a+=1){const o=De(r,l,a);n[a]?n[a].p(o,i):(n[a]=qe(o),n[a].c(),n[a].m(e,s))}for(;a<n.length;a+=1)n[a].d(1);n.length=l.length}},d(r){r&&h(e),ve(n,r)}}}function qe(t){let e,s=t[12]+"",l;return{c(){e=T("span"),l=G(s),this.h()},l(n){e=C(n,"SPAN",{class:!0});var r=S(e);l=Q(r,s),r.forEach(h),this.h()},h(){b(e,"class","svelte-11u3eut"),ae(e,"colon",t[13])},m(n,r){V(n,e,r),_(e,l)},p(n,r){r&1&&s!==(s=n[12]+"")&&ie(l,s),r&1&&ae(e,"colon",n[13])},d(n){n&&h(e)}}}function Pe(t){let e;function s(r,i){return r[9]?mt:_t}let l=s(t),n=l(t);return{c(){n.c(),e=ce()},l(r){n.l(r),e=ce()},m(r,i){n.m(r,i),V(r,e,i)},p(r,i){l===(l=s(r))&&n?n.p(r,i):(n.d(1),n=l(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&h(e),n.d(r)}}}function gt(t){let e,s,l,n,r,i,a=ue(t[0]),o=[];for(let u=0;u<a.length;u+=1)o[u]=Pe(Se(t,a,u));return{c(){e=T("p"),s=T("a");for(let u=0;u<o.length;u+=1)o[u].c();l=L(),n=T("span"),r=G("by "),i=G(t[1]),this.h()},l(u){e=C(u,"P",{class:!0,style:!0});var d=S(e);s=C(d,"A",{href:!0,target:!0,rel:!0,class:!0});var c=S(s);for(let A=0;A<o.length;A+=1)o[A].l(c);c.forEach(h),l=j(d),n=C(d,"SPAN",{class:!0});var k=S(n);r=Q(k,"by "),i=Q(k,t[1]),k.forEach(h),d.forEach(h),this.h()},h(){b(s,"href",t[2]),b(s,"target","_blank"),b(s,"rel","noreferrer"),b(s,"class","svelte-11u3eut"),b(n,"class","artist svelte-11u3eut"),b(e,"class","clock text-outline svelte-11u3eut"),_e(e,"--font-size",t[3])},m(u,d){V(u,e,d),_(e,s);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(s,null);_(e,l),_(e,n),_(n,r),_(n,i)},p(u,[d]){if(d&1){a=ue(u[0]);let c;for(c=0;c<a.length;c+=1){const k=Se(u,a,c);o[c]?o[c].p(k,d):(o[c]=Pe(k),o[c].c(),o[c].m(s,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}d&4&&b(s,"href",u[2]),d&2&&ie(i,u[1])},i:Z,o:Z,d(u){u&&h(e),ve(o,u)}}}function yt(t,e,s){let l,{title:n}=e,{artist:r}=e,{id:i}=e,o=`${[4,5,6][0]}vw`;return t.$$set=u=>{"title"in u&&s(0,n=u.title),"artist"in u&&s(1,r=u.artist),"id"in u&&s(4,i=u.id)},t.$$.update=()=>{t.$$.dirty&16&&s(2,l=`https://open.spotify.com/track/${i}`)},[n,r,l,o,i]}class vt extends ke{constructor(e){super(),we(this,e,yt,gt,ye,{title:0,artist:1,id:4})}}function Oe(t){return Object.prototype.toString.call(t)==="[object Date]"}function ge(t,e){if(t===e||t!==t)return()=>t;const s=typeof t;if(s!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const l=e.map((n,r)=>ge(t[r],n));return n=>l.map(r=>r(n))}if(s==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Oe(t)&&Oe(e)){t=t.getTime(),e=e.getTime();const r=e-t;return i=>new Date(t+i*r)}const l=Object.keys(e),n={};return l.forEach(r=>{n[r]=ge(t[r],e[r])}),r=>{const i={};return l.forEach(a=>{i[a]=n[a](r)}),i}}if(s==="number"){const l=e-t;return n=>t+n*l}throw new Error(`Cannot interpolate ${s} values`)}function bt(t,e={}){const s=ct(t);let l,n=t;function r(i,a){if(t==null)return s.set(t=i),Promise.resolve();n=i;let o=l,u=!1,{delay:d=0,duration:c=400,easing:k=Ue,interpolate:A=ge}=Ce(Ce({},e),a);if(c===0)return o&&(o.abort(),o=null),s.set(t=n),Promise.resolve();const D=dt()+d;let q;return l=ht(m=>{if(m<D)return!0;u||(q=A(t,i),typeof c=="function"&&(c=c(t,i)),u=!0),o&&(o.abort(),o=null);const z=m-D;return z>c?(s.set(t=i),!1):(s.set(t=q(k(z/c))),!0)}),l.promise}return{set:r,update:(i,a)=>r(i(n,t),a),subscribe:s.subscribe}}const{isNaN:pe}=pt;function kt(t){let e,s=!1,l,n=!0,r,i;function a(){cancelAnimationFrame(l),e.paused||(l=Ee(a),s=!0),t[14].call(e)}return{c(){e=T("audio"),this.h()},l(o){e=C(o,"AUDIO",{preload:!0}),S(e).forEach(h),this.h()},h(){b(e,"preload",""),(t[0]===void 0||t[1]===void 0)&&he(a),t[0]===void 0&&he(()=>t[15].call(e)),t[4]===void 0&&he(()=>t[18].call(e))},m(o,u){V(o,e,u),pe(t[3])||(e.volume=t[3]),e.muted=t[6],t[19](e),r||(i=[$(e,"timeupdate",a),$(e,"ended",t[15]),$(e,"volumechange",t[16]),$(e,"play",t[17]),$(e,"pause",t[17]),$(e,"durationchange",t[18])],r=!0)},p(o,u){!s&&u[0]&2&&!pe(o[1])&&(e.currentTime=o[1]),s=!1,u[0]&8&&!pe(o[3])&&(e.volume=o[3]),u[0]&64&&(e.muted=o[6]),u[0]&32&&n!==(n=o[5])&&e[n?"pause":"play"]()},i:Z,o:Z,d(o){o&&h(e),t[19](null),r=!1,Je(i)}}}function wt(t,e,s){let l,n,r;re(t,me,N=>s(13,r=N));let{preview:i}=e,{ready:a}=e,o=new Date,u,d,c,k,A,D,q,m,z,M=!0;const H=Ye(),P=bt(0);re(t,P,N=>s(12,n=N));function O(){d&&!M&&(s(1,A=0),d.play(),s(3,k=0),P.set(0),P.set(1,{duration:500}))}function w(){d&&q===!1&&d.pause()}function p(N){m=!0,P.set(0,{duration:500}).then(()=>{m=!1,N?d.pause():(s(2,d.currentTime=0,d),H("ended"))})}function E(){m||q===!1&&l===59&&p(!0)}function g(){if(m||isNaN(D))return;const N=D-A<1;if(q===!1&&N){const X=l>55;p(X)}}function F(){i&&(z=!1,u=`https://p.scdn.co/mp3-preview/${i}?cid=635a94c846854eb29813825c79d704a2`,s(2,d.src=u,d),d.load())}function R(){s(6,M=r),q!==!1&&O()}function U(){const N=document.hidden;N&&q===!1?w():N||O()}function f(){d.addEventListener("canplay",()=>{z||(z=!0,O())}),document.addEventListener("visibilitychange",U),s(8,a=!0)}Ge(async()=>{setInterval(()=>{s(10,o=new Date)},500),await Qe(),f()});function y(){c=this.ended,A=this.currentTime,s(0,c),s(1,A)}function K(){c=this.ended,s(0,c)}function J(){k=this.volume,M=this.muted,s(3,k),s(12,n),s(6,M)}function v(){q=this.paused,s(5,q)}function I(){D=this.duration,s(4,D)}function W(N){be[N?"unshift":"push"](()=>{d=N,s(2,d)})}return t.$$set=N=>{"preview"in N&&s(9,i=N.preview),"ready"in N&&s(8,a=N.ready)},t.$$.update=()=>{t.$$.dirty[0]&512&&F(),t.$$.dirty[0]&8192&&R(),t.$$.dirty[0]&1&&c&&H("ended"),t.$$.dirty[0]&1024&&s(11,l=o.getSeconds()),t.$$.dirty[0]&2048&&E(),t.$$.dirty[0]&2&&g(),t.$$.dirty[0]&4096&&s(3,k=n)},[c,A,d,k,D,q,M,P,a,i,o,l,n,r,y,K,J,v,I,W]}class Et extends ke{constructor(e){super(),we(this,e,wt,kt,ye,{preview:9,ready:8},null,[-1,-1])}}function Nt(t,e,s){const l=t.slice();return l[30]=e[s].type,l[31]=e[s].value,l}function Ie(t){let e,s,l,n,r,i,a,o,u,d,c,k,A="time",D,q,m,z="Now playing:",M,H,P,O,w=t[1]&&!t[5]&&ze(t);return P=new vt({props:{title:t[7],artist:t[0].artist,id:t[0].id}}),{c(){e=T("div"),s=T("div"),l=T("div"),n=L(),r=T("div"),i=T("div"),w&&w.c(),a=L(),o=T("p"),u=T("span"),d=G(t[6]),c=G(" with the "),k=T("mark"),k.textContent=A,D=G(" in the title."),q=L(),m=T("span"),m.textContent=z,M=L(),H=T("div"),x(P.$$.fragment),this.h()},l(p){e=C(p,"DIV",{class:!0});var E=S(e);s=C(E,"DIV",{class:!0});var g=S(s);l=C(g,"DIV",{class:!0,style:!0}),S(l).forEach(h),g.forEach(h),n=j(E),r=C(E,"DIV",{class:!0});var F=S(r);i=C(F,"DIV",{class:!0});var R=S(i);w&&w.l(R),a=j(R),o=C(R,"P",{class:!0});var U=S(o);u=C(U,"SPAN",{class:!0});var f=S(u);d=Q(f,t[6]),c=Q(f," with the "),k=C(f,"MARK",{class:!0,"data-svelte-h":!0}),Me(k)!=="svelte-y4uz01"&&(k.textContent=A),D=Q(f," in the title."),f.forEach(h),q=j(U),m=C(U,"SPAN",{class:!0,"data-svelte-h":!0}),Me(m)!=="svelte-1fu7dfx"&&(m.textContent=z),U.forEach(h),R.forEach(h),M=j(F),H=C(F,"DIV",{class:!0});var y=S(H);ee(P.$$.fragment,y),y.forEach(h),F.forEach(h),E.forEach(h),this.h()},h(){var p;b(l,"class","img svelte-qg8uu5"),_e(l,"background-image","url('https://i.scdn.co/image/"+((p=t[0])==null?void 0:p.artist_img)+"')"),b(s,"class","sidebar svelte-qg8uu5"),ae(s,"reveal",t[5]),b(k,"class","svelte-qg8uu5"),b(u,"class","total svelte-qg8uu5"),b(m,"class","now"),b(o,"class","playing svelte-qg8uu5"),b(i,"class","eyebrow"),b(H,"class","song"),b(r,"class","mainbar"),b(e,"class","clock svelte-qg8uu5")},m(p,E){V(p,e,E),_(e,s),_(s,l),_(e,n),_(e,r),_(r,i),w&&w.m(i,null),_(i,a),_(i,o),_(o,u),_(u,d),_(u,c),_(u,k),_(u,D),_(o,q),_(o,m),_(r,M),_(r,H),te(P,H,null),O=!0},p(p,E){var F;(!O||E[0]&1)&&_e(l,"background-image","url('https://i.scdn.co/image/"+((F=p[0])==null?void 0:F.artist_img)+"')"),(!O||E[0]&32)&&ae(s,"reveal",p[5]),p[1]&&!p[5]?w?(w.p(p,E),E[0]&34&&B(w,1)):(w=ze(p),w.c(),B(w,1),w.m(i,a)):w&&(Fe(),Y(w,1,1,()=>{w=null}),Ve()),(!O||E[0]&64)&&ie(d,p[6]);const g={};E[0]&128&&(g.title=p[7]),E[0]&1&&(g.artist=p[0].artist),E[0]&1&&(g.id=p[0].id),P.$set(g)},i(p){O||(B(w),B(P.$$.fragment,p),O=!0)},o(p){Y(w),Y(P.$$.fragment,p),O=!1},d(p){p&&h(e),w&&w.d(),se(P)}}}function ze(t){let e,s,l,n,r,i;return l=new it({props:{size:"28"}}),{c(){e=T("p"),s=T("button"),x(l.$$.fragment),this.h()},l(a){e=C(a,"P",{class:!0});var o=S(e);s=C(o,"BUTTON",{class:!0,"data-after":!0,"aria-label":!0});var u=S(s);ee(l.$$.fragment,u),u.forEach(h),o.forEach(h),this.h()},h(){b(s,"class","icon"),b(s,"data-after","play audio"),b(s,"aria-label","play audio"),b(e,"class","firstclick svelte-qg8uu5")},m(a,o){V(a,e,o),_(e,s),te(l,s,null),n=!0,r||(i=$(s,"click",t[18]),r=!0)},p:Z,i(a){n||(B(l.$$.fragment,a),n=!0)},o(a){Y(l.$$.fragment,a),n=!1},d(a){a&&h(e),se(l),r=!1,i()}}}function At(t){let e,s,l;return{c(){e=T("p"),s=new $e(!1),l=L(),this.h()},l(n){e=C(n,"P",{});var r=S(e);s=xe(r,!1),l=j(r),r.forEach(h),this.h()},h(){s.a=l},m(n,r){V(n,e,r),s.m(t[31],e),_(e,l)},p:Z,d(n){n&&h(e)}}}function Tt(t){let e,s=ue(ne.songsMethod),l=[];for(let n=0;n<s.length;n+=1)l[n]=At(Nt(t,s,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=ce()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=ce()},m(n,r){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(n,r);V(n,e,r)},p:Z,d(n){n&&h(e),ve(l,n)}}}function Ct(t){var U;let e,s,l,n,r,i=ne.songsTitle+"",a,o,u,d,c,k,A,D,q,m,z,M,H,P,O,w,p,E;e=new tt({props:{title:ne.songsTitle,description:t[11],url:t[10],keywords:t[12],path:t[13]}}),l=new nt({props:{options:["mute","turntable"]}});let g=t[0]&&Ie(t);function F(f){t[19](f)}let R={preview:(U=t[0])==null?void 0:U.preview};return t[1]!==void 0&&(R.ready=t[1]),M=new Et({props:R}),be.push(()=>et(M,"ready",F)),t[20](M),M.$on("ended",t[21]),O=new rt({props:{text:ne.songsTitle,warning:!0,tease:"check out the YouTube clock",teaseLink:"../videos"}}),p=new lt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),s=L(),x(l.$$.fragment),n=L(),r=T("h1"),a=G(i),o=L(),u=T("div"),d=T("p"),c=G(t[2]),k=L(),A=T("span"),D=G(t[8]),q=L(),m=T("section"),g&&g.c(),z=L(),x(M.$$.fragment),P=L(),x(O.$$.fragment),w=L(),x(p.$$.fragment),this.h()},l(f){ee(e.$$.fragment,f),s=j(f),ee(l.$$.fragment,f),n=j(f),r=C(f,"H1",{class:!0});var y=S(r);a=Q(y,i),y.forEach(h),o=j(f),u=C(f,"DIV",{class:!0});var K=S(u);d=C(K,"P",{class:!0,"aria-hidden":!0});var J=S(d);c=Q(J,t[2]),k=j(J),A=C(J,"SPAN",{class:!0});var v=S(A);D=Q(v,t[8]),v.forEach(h),J.forEach(h),q=j(K),m=C(K,"SECTION",{class:!0});var I=S(m);g&&g.l(I),z=j(I),ee(M.$$.fragment,I),I.forEach(h),K.forEach(h),P=j(f),ee(O.$$.fragment,f),w=j(f),ee(p.$$.fragment,f),this.h()},h(){b(r,"class","sr-only"),b(A,"class","svelte-qg8uu5"),b(d,"class","bg svelte-qg8uu5"),b(d,"aria-hidden","true"),b(m,"class","svelte-qg8uu5"),b(u,"class","container svelte-qg8uu5"),ae(u,"turntable",t[9])},m(f,y){te(e,f,y),V(f,s,y),te(l,f,y),V(f,n,y),V(f,r,y),_(r,a),V(f,o,y),V(f,u,y),_(u,d),_(d,c),_(d,k),_(d,A),_(A,D),_(u,q),_(u,m),g&&g.m(m,null),_(m,z),te(M,m,null),V(f,P,y),te(O,f,y),V(f,w,y),te(p,f,y),E=!0},p(f,y){var v;(!E||y[0]&4)&&ie(c,f[2]),(!E||y[0]&256)&&ie(D,f[8]),f[0]?g?(g.p(f,y),y[0]&1&&B(g,1)):(g=Ie(f),g.c(),B(g,1),g.m(m,z)):g&&(Fe(),Y(g,1,1,()=>{g=null}),Ve());const K={};y[0]&1&&(K.preview=(v=f[0])==null?void 0:v.preview),!H&&y[0]&2&&(H=!0,K.ready=f[1],We(()=>H=!1)),M.$set(K),(!E||y[0]&512)&&ae(u,"turntable",f[9]);const J={};y[1]&8&&(J.$$scope={dirty:y,ctx:f}),p.$set(J)},i(f){E||(B(e.$$.fragment,f),B(l.$$.fragment,f),B(g),B(M.$$.fragment,f),B(O.$$.fragment,f),B(p.$$.fragment,f),E=!0)},o(f){Y(e.$$.fragment,f),Y(l.$$.fragment,f),Y(g),Y(M.$$.fragment,f),Y(O.$$.fragment,f),Y(p.$$.fragment,f),E=!1},d(f){f&&(h(s),h(n),h(r),h(o),h(u),h(P),h(w)),se(e,f),se(l,f),g&&g.d(),t[20](null),se(M),se(O,f),se(p,f)}}}function Mt(t,e,s){let l,n,r,i,a,o,u;re(t,me,v=>s(3,i=v)),re(t,ot,v=>s(17,a=v)),re(t,ut,v=>s(23,o=v)),re(t,ft,v=>s(9,u=v)),st();let d,c,k,A,D,q,m,z;const{url:M}=ne,{title:H,description:P,keywords:O,path:w}=ne.songsMeta;Xe("copy",ne);function p(v){if(!v)return;const I=v.toLowerCase(),W=n.toLowerCase(),N=I.indexOf(`${l} ${W}`),X=I.indexOf(`${l}${W}`),fe=N>-1,oe=X>-1,Ne=fe?`${l} ${W}`:oe?`${l}${W}`:l,de=I.indexOf(Ne),Ae=de+Ne.length,He=v.slice(0,de),Te=v.slice(de,Ae),Be=Te.split(":")[0],Ke=Te.split(":")[1],Re=v.slice(Ae);return[{text:He},{mark:!0,text:[Be,":",Ke]},{text:Re}]}function E(){s(16,m=void 0),s(0,c={name:l,artist:"No Track Found",href:""}),audioEl&&(audioEl.pause(),audioEl.currentTime=0)}function g(v){const I=v.filter(oe=>o["50rem"]?!0:oe.name.length<20),N=n.toLowerCase()==="am"?"pm":"am",X=I.filter(oe=>oe.suffix!==N);return X.length>1?X:I}function F(){const v=d.filter(I=>I.time===l);if(!v.length)E();else{const I=g(v),W=I.length>1,N=I.filter(fe=>W?!k.includes(fe.id):!0);s(16,m=N.length);const X=Math.floor(Math.random()*N.length);s(0,c={...N[X]}),k.push(c.id)}}function R(){k=[],F()}async function U(){s(15,d=await at("../assets/songs.csv"))}const f=()=>Ze(me,i=!1,i);function y(v){D=v,s(1,D)}function K(v){be[v?"unshift":"push"](()=>{A=v,s(4,A)})}const J=()=>F();return t.$$.update=()=>{t.$$.dirty[0]&131072&&s(2,l=a.time),t.$$.dirty[0]&131072&&s(8,n=a.period),t.$$.dirty[0]&32774&&d&&D&&R(),t.$$.dirty[0]&1&&s(7,r=p(c==null?void 0:c.name)),t.$$.dirty[0]&8&&(i||s(5,q=!0)),t.$$.dirty[0]&65536&&s(6,z=m?`${m} song${m===1?"":"s"}`:"No songs")},U(),[c,D,l,i,A,q,z,r,n,u,M,P,O,w,F,d,m,a,f,y,K,J]}class It extends ke{constructor(e){super(),we(this,e,Mt,Ct,ye,{},null,[-1,-1])}}export{It as component};