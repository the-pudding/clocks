import{s as ce,F as ve,O as Ie,r as xe,u as Ue,v as We,w as Ke,f as w,g as $,B as fe,j as M,I as et,k as ze,i as A,P as tt,y as K,d as h,o as nt,p as $e,a as D,h as S,c as V,E as _e,x as g,C as ye,e as pe,l as F,m as G,n as ae,z as st,D as rt,J as Xe,M as lt,H as it,A as ot}from"../chunks/scheduler.b06385fc.js";import{S as ue,i as de,b as q,d as J,m as Q,a as j,t as L,e as Z,c as qe,f as at,g as Je}from"../chunks/index.71976bfe.js";import{e as re,c as ee,M as ft,v as ct}from"../chunks/version.675f71b8.js";import{I as ut,g as dt,b as ht,H as mt,F as _t,M as pt,c as gt,a as yt}from"../chunks/clock.662e3d42.js";function vt(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function ge(t,e){if((l=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var l,s=t.slice(0,l);return[s.length>1?s[0]+s.slice(2):s,+t.slice(l+1)]}function bt(t){return t=ge(Math.abs(t)),t?t[1]:NaN}function wt(t,e){return function(l,s){for(var n=l.length,r=[],i=0,a=t[0],c=0;n>0&&a>0&&(c+a+1>s&&(a=Math.max(1,s-c)),r.push(l.substring(n-=a,n+a)),!((c+=a+1)>s));)a=t[i=(i+1)%t.length];return r.reverse().join(e)}}function $t(t){return function(e){return e.replace(/[0-9]/g,function(l){return t[+l]})}}var kt=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function be(t){if(!(e=kt.exec(t)))throw new Error("invalid format: "+t);var e;return new ke({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}be.prototype=ke.prototype;function ke(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}ke.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Mt(t){e:for(var e=t.length,l=1,s=-1,n;l<e;++l)switch(t[l]){case".":s=n=l;break;case"0":s===0&&(s=l),n=l;break;default:if(!+t[l])break e;s>0&&(s=0);break}return s>0?t.slice(0,s)+t.slice(n+1):t}var Qe;function Et(t,e){var l=ge(t,e);if(!l)return t+"";var s=l[0],n=l[1],r=n-(Qe=Math.max(-8,Math.min(8,Math.floor(n/3)))*3)+1,i=s.length;return r===i?s:r>i?s+new Array(r-i+1).join("0"):r>0?s.slice(0,r)+"."+s.slice(r):"0."+new Array(1-r).join("0")+ge(t,Math.max(0,e+r-1))[0]}function Te(t,e){var l=ge(t,e);if(!l)return t+"";var s=l[0],n=l[1];return n<0?"0."+new Array(-n).join("0")+s:s.length>n+1?s.slice(0,n+1)+"."+s.slice(n+1):s+new Array(n-s.length+2).join("0")}const De={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:vt,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Te(t*100,e),r:Te,s:Et,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ve(t){return t}var je=Array.prototype.map,Le=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function St(t){var e=t.grouping===void 0||t.thousands===void 0?Ve:wt(je.call(t.grouping,Number),t.thousands+""),l=t.currency===void 0?"":t.currency[0]+"",s=t.currency===void 0?"":t.currency[1]+"",n=t.decimal===void 0?".":t.decimal+"",r=t.numerals===void 0?Ve:$t(je.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",c=t.nan===void 0?"NaN":t.nan+"";function f(d){d=be(d);var m=d.fill,C=d.align,k=d.sign,b=d.symbol,y=d.zero,o=d.width,u=d.comma,p=d.precision,I=d.trim,E=d.type;E==="n"?(u=!0,E="g"):De[E]||(p===void 0&&(p=12),I=!0,E="g"),(y||m==="0"&&C==="=")&&(y=!0,m="0",C="=");var H=b==="$"?l:b==="#"&&/[boxX]/.test(E)?"0"+E.toLowerCase():"",te=b==="$"?s:/[%p]/.test(E)?i:"",P=De[E],W=/[defgprs%]/.test(E);p=p===void 0?6:/[gprs]/.test(E)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p));function Y(v){var O=H,z=te,U,le,x;if(E==="c")z=P(v)+z,v="";else{v=+v;var ne=v<0||1/v<0;if(v=isNaN(v)?c:P(Math.abs(v),p),I&&(v=Mt(v)),ne&&+v==0&&k!=="+"&&(ne=!1),O=(ne?k==="("?k:a:k==="-"||k==="("?"":k)+O,z=(E==="s"?Le[8+Qe/3]:"")+z+(ne&&k==="("?")":""),W){for(U=-1,le=v.length;++U<le;)if(x=v.charCodeAt(U),48>x||x>57){z=(x===46?n+v.slice(U+1):v.slice(U))+z,v=v.slice(0,U);break}}}u&&!y&&(v=e(v,1/0));var R=O.length+v.length+z.length,B=R<o?new Array(o-R+1).join(m):"";switch(u&&y&&(v=e(B+v,B.length?o-z.length:1/0),B=""),C){case"<":v=O+v+z+B;break;case"=":v=O+B+v+z;break;case"^":v=B.slice(0,R=B.length>>1)+O+v+z+B.slice(R);break;default:v=B+O+v+z;break}return r(v)}return Y.toString=function(){return d+""},Y}function _(d,m){var C=f((d=be(d),d.type="f",d)),k=Math.max(-8,Math.min(8,Math.floor(bt(m)/3)))*3,b=Math.pow(10,-k),y=Le[8+k/3];return function(o){return C(b*o)+y}}return{format:f,formatPrefix:_}}var me,we;Ct({thousands:",",grouping:[3],currency:["$",""]});function Ct(t){return me=St(t),we=me.format,me.formatPrefix,me}function Nt(t){let e;const l=t[2].default,s=xe(l,t,t[3],null);return{c(){s&&s.c()},l(n){s&&s.l(n)},m(n,r){s&&s.m(n,r),e=!0},p(n,r){s&&s.p&&(!e||r&8)&&Ue(s,l,n,n[3],e?Ke(l,n[3],r,null):We(n[3]),null)},i(n){e||(j(s,n),e=!0)},o(n){L(s,n),e=!1},d(n){s&&s.d(n)}}}function Pt(t){let e,l;const s=[{name:"youtube"},t[1],{iconNode:t[0]}];let n={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let r=0;r<s.length;r+=1)n=ve(n,s[r]);return e=new ut({props:n}),{c(){q(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,i){Q(e,r,i),l=!0},p(r,[i]){const a=i&3?dt(s,[s[0],i&2&&ht(r[1]),i&1&&{iconNode:r[0]}]):{};i&8&&(a.$$scope={dirty:i,ctx:r}),e.$set(a)},i(r){l||(j(e.$$.fragment,r),l=!0)},o(r){L(e.$$.fragment,r),l=!1},d(r){Z(e,r)}}}function At(t,e,l){let{$$slots:s={},$$scope:n}=e;const r=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]];return t.$$set=i=>{l(1,e=ve(ve({},e),Ie(i))),"$$scope"in i&&l(3,n=i.$$scope)},e=Ie(e),[r,e,s,n]}let It=class extends ue{constructor(e){super(),de(this,e,At,Pt,ce,{})}};const zt=It;function Tt(t){let e,l='<div id="player-yt" class="svelte-vwdx08"></div>',s;return{c(){e=w("div"),e.innerHTML=l,this.h()},l(n){e=$(n,"DIV",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-pt8bag"&&(e.innerHTML=l),this.h()},h(){M(e,"class","wrapper svelte-vwdx08"),et(()=>t[9].call(e)),ze(e,"height",t[2])},m(n,r){A(n,e,r),t[8](e),s=tt(e,t[9].bind(e))},p(n,[r]){r&4&&ze(e,"height",n[2])},i:K,o:K,d(n){n&&h(e),t[8](null),s()}}}function Dt(){const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e?e.parentNode.insertBefore(t,e):document.body.appendChild(t)}function Vt(t){}function jt(t,e,l){let s,n=null,r,i=0,a=0,{timestamp:c}=e,{id:f}=e,{ready:_=!1}=e;const d=16/9,m=()=>{n.playVideo()};function C(){const p=i,I=p/d;l(2,a=`${I}px`),n.setSize(p,I)}function k({data:p}){}function b(){l(3,_=!0)}function y(){if(f)n.loadVideoById({videoId:f,startSeconds:s}),n.playVideo();else return}nt(()=>{Dt(),window.onYouTubeIframeAPIReady=function(){l(7,n=new YT.Player("player-yt",{playerVars:{controls:1,cc_load_policy:0,enablejsapi:1,fs:1,iv_load_policy:3,modestbranding:1,rel:0,showinfo:0,playsinline:1,color:"white"},events:{onReady:b,onStateChange:k,onError:Vt}}))}});function o(p){$e[p?"unshift":"push"](()=>{r=p,l(1,r)})}function u(){i=this.clientWidth,l(0,i)}return t.$$set=p=>{"timestamp"in p&&l(4,c=p.timestamp),"id"in p&&l(5,f=p.id),"ready"in p&&l(3,_=p.ready)},t.$$.update=()=>{t.$$.dirty&16&&(s=isNaN(c)?void 0:c-5),t.$$.dirty&40&&_&&y(),t.$$.dirty&129&&n&&C()},[i,r,a,_,c,f,m,n,o,u]}class Lt extends ue{constructor(e){super(),de(this,e,jt,Tt,ce,{timestamp:4,id:5,ready:3,play:6})}get play(){return this.$$.ctx[6]}}function Ot(t){let e,l,s,n,r;const i=t[2].default,a=xe(i,t,t[1],null);return{c(){e=w("section"),l=w("div"),s=D(),n=w("div"),a&&a.c(),this.h()},l(c){e=$(c,"SECTION",{id:!0,class:!0});var f=S(e);l=$(f,"DIV",{class:!0}),S(l).forEach(h),s=V(f),n=$(f,"DIV",{class:!0});var _=S(n);a&&a.l(_),_.forEach(h),f.forEach(h),this.h()},h(){M(l,"class","bg svelte-1acws08"),M(n,"class","fg svelte-1acws08"),M(e,"id","gate"),M(e,"class","svelte-1acws08"),_e(e,"visible",t[0])},m(c,f){A(c,e,f),g(e,l),g(e,s),g(e,n),a&&a.m(n,null),r=!0},p(c,[f]){a&&a.p&&(!r||f&2)&&Ue(a,i,c,c[1],r?Ke(i,c[1],f,null):We(c[1]),null),(!r||f&1)&&_e(e,"visible",c[0])},i(c){r||(j(a,c),r=!0)},o(c){L(a,c),r=!1},d(c){c&&h(e),a&&a.d(c)}}}function Rt(t,e,l){let{$$slots:s={},$$scope:n}=e,{visible:r}=e;return t.$$set=i=>{"visible"in i&&l(0,r=i.visible),"$$scope"in i&&l(1,n=i.$$scope)},[r,n,s]}class Bt extends ue{constructor(e){super(),de(this,e,Rt,Ot,ce,{visible:0})}}function Oe(t,e,l){const s=t.slice();return s[2]=e[l],s}function Re(t,e,l){const s=t.slice();return s[5]=e[l].text,s[6]=e[l].mark,s}function Be(t,e,l){const s=t.slice();s[9]=e[l];const n=s[9]===":";return s[10]=n,s}function Ft(t){let e,l=t[5]+"",s;return{c(){e=w("span"),s=F(l),this.h()},l(n){e=$(n,"SPAN",{class:!0});var r=S(e);s=G(r,l),r.forEach(h),this.h()},h(){M(e,"class","other svelte-1fzpwh1")},m(n,r){A(n,e,r),g(e,s)},p(n,r){r&1&&l!==(l=n[5]+"")&&ae(s,l)},d(n){n&&h(e)}}}function Gt(t){let e,l=re(t[5]),s=[];for(let n=0;n<l.length;n+=1)s[n]=Fe(Be(t,l,n));return{c(){e=w("mark");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=$(n,"MARK",{class:!0});var r=S(e);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(h),this.h()},h(){M(e,"class","svelte-1fzpwh1")},m(n,r){A(n,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null)},p(n,r){if(r&1){l=re(n[5]);let i;for(i=0;i<l.length;i+=1){const a=Be(n,l,i);s[i]?s[i].p(a,r):(s[i]=Fe(a),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},d(n){n&&h(e),ye(s,n)}}}function Fe(t){let e,l=t[9]+"",s;return{c(){e=w("span"),s=F(l),this.h()},l(n){e=$(n,"SPAN",{class:!0});var r=S(e);s=G(r,l),r.forEach(h),this.h()},h(){M(e,"class","svelte-1fzpwh1"),_e(e,"colon",t[10])},m(n,r){A(n,e,r),g(e,s)},p(n,r){r&1&&l!==(l=n[9]+"")&&ae(s,l),r&1&&_e(e,"colon",n[10])},d(n){n&&h(e)}}}function Ge(t){let e;function l(r,i){return r[6]?Gt:Ft}let s=l(t),n=s(t);return{c(){n.c(),e=pe()},l(r){n.l(r),e=pe()},m(r,i){n.m(r,i),A(r,e,i)},p(r,i){s===(s=l(r))&&n?n.p(r,i):(n.d(1),n=s(r),n&&(n.c(),n.m(e.parentNode,e)))},d(r){r&&h(e),n.d(r)}}}function He(t){let e,l,s=re(t[2]),n=[];for(let r=0;r<s.length;r+=1)n[r]=Ge(Re(t,s,r));return{c(){e=w("p");for(let r=0;r<n.length;r+=1)n[r].c();l=D(),this.h()},l(r){e=$(r,"P",{class:!0});var i=S(e);for(let a=0;a<n.length;a+=1)n[a].l(i);l=V(i),i.forEach(h),this.h()},h(){M(e,"class","svelte-1fzpwh1")},m(r,i){A(r,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);g(e,l)},p(r,i){if(i&1){s=re(r[2]);let a;for(a=0;a<s.length;a+=1){const c=Re(r,s,a);n[a]?n[a].p(c,i):(n[a]=Ge(c),n[a].c(),n[a].m(e,l))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}},d(r){r&&h(e),ye(n,r)}}}function Ht(t){let e,l=re(t[0]),s=[];for(let n=0;n<l.length;n+=1)s[n]=He(Oe(t,l,n));return{c(){e=w("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=$(n,"DIV",{class:!0});var r=S(e);for(let i=0;i<s.length;i+=1)s[i].l(r);r.forEach(h),this.h()},h(){M(e,"class","svelte-1fzpwh1")},m(n,r){A(n,e,r);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null)},p(n,[r]){if(r&1){l=re(n[0]);let i;for(i=0;i<l.length;i+=1){const a=Oe(n,l,i);s[i]?s[i].p(a,r):(s[i]=He(a),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},i:K,o:K,d(n){n&&h(e),ye(s,n)}}}function Yt(t,e){const l=e.includes(":")?":":" ",s=e.toLowerCase(),r=t.toLowerCase().indexOf(s);if(r===-1)return[{text:t}];const i=r+s.length,a=t.slice(0,r),f=t.slice(r,i).split(l),_=f.shift(),d=f.join(" "),m=t.slice(i);return[{text:a},{mark:!0,text:[_,":",d]},{text:m}]}function xt(t,e,l){let s,{video:n}=e;return t.$$set=r=>{"video"in r&&l(1,n=r.video)},t.$$.update=()=>{t.$$.dirty&2&&l(0,s=n.lines.map(r=>Yt(r,n.token)))},[s,n]}class Ut extends ue{constructor(e){super(),de(this,e,xt,Ht,ce,{video:1})}}function Wt(t,e,l){const s=t.slice();return s[22]=e[l].type,s[23]=e[l].value,s}function Ye(t){let e,l,s,n,r,i,a,c="time",f,_,d,m,C,k,b,y,o,u,p,I,E,H,te,P,W=t[0].style+"",Y,v,O,z=we(",")(t[0].views)+"",U,le,x,ne="Another",R,B,Me;function Ze(N){t[17](N)}let Ee={id:t[7],timestamp:t[6]};return t[3]!==void 0&&(Ee.ready=t[3]),b=new Lt({props:Ee}),$e.push(()=>at(b,"ready",Ze)),t[18](b),p=new Ut({props:{video:t[0]}}),{c(){e=w("section"),l=w("div"),s=w("div"),n=w("p"),r=F(t[5]),i=F(" with the "),a=w("mark"),a.textContent=c,f=F(" mentioned"),_=D(),d=w("p"),m=w("a"),C=F("report video"),k=D(),q(b.$$.fragment),o=D(),u=w("div"),q(p.$$.fragment),I=D(),E=w("div"),H=w("p"),te=F("[debug] caption: "),P=w("strong"),Y=F(W),v=F(` | views:
				`),O=w("strong"),U=F(z),le=D(),x=w("button"),x.textContent=ne,this.h()},l(N){e=$(N,"SECTION",{class:!0});var T=S(e);l=$(T,"DIV",{class:!0});var X=S(l);s=$(X,"DIV",{class:!0});var se=S(s);n=$(se,"P",{class:!0});var ie=S(n);r=G(ie,t[5]),i=G(ie," with the "),a=$(ie,"MARK",{class:!0,"data-svelte-h":!0}),fe(a)!=="svelte-y4uz01"&&(a.textContent=c),f=G(ie," mentioned"),ie.forEach(h),_=V(se),d=$(se,"P",{class:!0});var Se=S(d);m=$(Se,"A",{href:!0,target:!0,rel:!0});var Ce=S(m);C=G(Ce,"report video"),Ce.forEach(h),Se.forEach(h),se.forEach(h),k=V(X),J(b.$$.fragment,X),X.forEach(h),o=V(T),u=$(T,"DIV",{class:!0});var Ne=S(u);J(p.$$.fragment,Ne),Ne.forEach(h),I=V(T),E=$(T,"DIV",{class:!0});var he=S(E);H=$(he,"P",{});var oe=S(H);te=G(oe,"[debug] caption: "),P=$(oe,"STRONG",{});var Pe=S(P);Y=G(Pe,W),Pe.forEach(h),v=G(oe,` | views:
				`),O=$(oe,"STRONG",{});var Ae=S(O);U=G(Ae,z),Ae.forEach(h),oe.forEach(h),le=V(he),x=$(he,"BUTTON",{"data-svelte-h":!0}),fe(x)!=="svelte-157eiw8"&&(x.textContent=ne),he.forEach(h),T.forEach(h),this.h()},h(){M(a,"class","svelte-1e4nats"),M(n,"class","playing svelte-1e4nats"),M(m,"href",t[4]),M(m,"target","_blank"),M(m,"rel","noreferrer"),M(d,"class","report svelte-1e4nats"),M(s,"class","eyebrow svelte-1e4nats"),M(l,"class","video"),M(u,"class","caption"),M(E,"class","debug"),M(e,"class","svelte-1e4nats")},m(N,T){A(N,e,T),g(e,l),g(l,s),g(s,n),g(n,r),g(n,i),g(n,a),g(n,f),g(s,_),g(s,d),g(d,m),g(m,C),g(l,k),Q(b,l,null),g(e,o),g(e,u),Q(p,u,null),g(e,I),g(e,E),g(E,H),g(H,te),g(H,P),g(P,Y),g(H,v),g(H,O),g(O,U),g(E,le),g(E,x),R=!0,B||(Me=Xe(x,"click",t[12]),B=!0)},p(N,T){(!R||T&32)&&ae(r,N[5]),(!R||T&16)&&M(m,"href",N[4]);const X={};T&128&&(X.id=N[7]),T&64&&(X.timestamp=N[6]),!y&&T&8&&(y=!0,X.ready=N[3],lt(()=>y=!1)),b.$set(X);const se={};T&1&&(se.video=N[0]),p.$set(se),(!R||T&1)&&W!==(W=N[0].style+"")&&ae(Y,W),(!R||T&1)&&z!==(z=we(",")(N[0].views)+"")&&ae(U,z)},i(N){R||(j(b.$$.fragment,N),j(p.$$.fragment,N),R=!0)},o(N){L(b.$$.fragment,N),L(p.$$.fragment,N),R=!1},d(N){N&&h(e),t[18](null),Z(b),Z(p),B=!1,Me()}}}function Kt(t){let e,l,s;return{c(){e=w("p"),l=new it(!1),s=D(),this.h()},l(n){e=$(n,"P",{});var r=S(e);l=ot(r,!1),s=V(r),r.forEach(h),this.h()},h(){l.a=s},m(n,r){A(n,e,r),l.m(t[23],e),g(e,s)},p:K,d(n){n&&h(e)}}}function Xt(t){let e,l=re(ee.videosMethod),s=[];for(let n=0;n<l.length;n+=1)s[n]=Kt(Wt(t,l,n));return{c(){for(let n=0;n<s.length;n+=1)s[n].c();e=pe()},l(n){for(let r=0;r<s.length;r+=1)s[r].l(n);e=pe()},m(n,r){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(n,r);A(n,e,r)},p:K,d(n){n&&h(e),ye(s,n)}}}function qt(t){let e,l="Loading...";return{c(){e=w("span"),e.textContent=l,this.h()},l(s){e=$(s,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-omrbt4"&&(e.textContent=l),this.h()},h(){M(e,"class","svelte-1e4nats")},m(s,n){A(s,e,n)},p:K,i:K,o:K,d(s){s&&h(e)}}}function Jt(t){let e,l,s="Watch",n,r,i,a,c;return r=new zt({}),{c(){e=w("button"),l=w("span"),l.textContent=s,n=D(),q(r.$$.fragment),this.h()},l(f){e=$(f,"BUTTON",{class:!0});var _=S(e);l=$(_,"SPAN",{class:!0,"data-svelte-h":!0}),fe(l)!=="svelte-1gohb1r"&&(l.textContent=s),n=V(_),J(r.$$.fragment,_),_.forEach(h),this.h()},h(){M(l,"class","svelte-1e4nats"),M(e,"class","svelte-1e4nats")},m(f,_){A(f,e,_),g(e,l),g(e,n),Q(r,e,null),i=!0,a||(c=Xe(e,"click",t[13]),a=!0)},p:K,i(f){i||(j(r.$$.fragment,f),i=!0)},o(f){L(r.$$.fragment,f),i=!1},d(f){f&&h(e),Z(r),a=!1,c()}}}function Qt(t){let e,l,s=ee.videosWarning+"",n,r,i,a=ee.videosIntro+"",c,f,_,d,m,C;const k=[Jt,qt],b=[];function y(o,u){return o[3]?0:1}return d=y(t),m=b[d]=k[d](t),{c(){e=w("div"),l=w("p"),n=F(s),r=D(),i=w("p"),c=F(a),f=D(),_=w("p"),m.c(),this.h()},l(o){e=$(o,"DIV",{class:!0});var u=S(e);l=$(u,"P",{class:!0});var p=S(l);n=G(p,s),p.forEach(h),r=V(u),i=$(u,"P",{class:!0});var I=S(i);c=G(I,a),I.forEach(h),f=V(u),_=$(u,"P",{class:!0});var E=S(_);m.l(E),E.forEach(h),u.forEach(h),this.h()},h(){M(l,"class","warning svelte-1e4nats"),M(i,"class","description"),M(_,"class","begin svelte-1e4nats"),M(e,"class","intro svelte-1e4nats")},m(o,u){A(o,e,u),g(e,l),g(l,n),g(e,r),g(e,i),g(i,c),g(e,f),g(e,_),b[d].m(_,null),C=!0},p(o,u){let p=d;d=y(o),d===p?b[d].p(o,u):(Je(),L(b[p],1,1,()=>{b[p]=null}),qe(),m=b[d],m?m.p(o,u):(m=b[d]=k[d](o),m.c()),j(m,1),m.m(_,null))},i(o){C||(j(m),C=!0)},o(o){L(m),C=!1},d(o){o&&h(e),b[d].d()}}}function Zt(t){let e,l,s,n,r,i=ee.videosTitle+"",a,c,f,_,d,m,C,k,b;e=new ft({props:{title:t[9],description:t[10],url:t[8],keywords:t[11]}}),s=new mt({});let y=t[0]&&Ye(t);return _=new _t({props:{text:ee.videosTitle,warning:!1}}),m=new pt({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),k=new Bt({props:{visible:!t[1],$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment),l=D(),q(s.$$.fragment),n=D(),r=w("h1"),a=F(i),c=D(),y&&y.c(),f=D(),q(_.$$.fragment),d=D(),q(m.$$.fragment),C=D(),q(k.$$.fragment),this.h()},l(o){J(e.$$.fragment,o),l=V(o),J(s.$$.fragment,o),n=V(o),r=$(o,"H1",{class:!0});var u=S(r);a=G(u,i),u.forEach(h),c=V(o),y&&y.l(o),f=V(o),J(_.$$.fragment,o),d=V(o),J(m.$$.fragment,o),C=V(o),J(k.$$.fragment,o),this.h()},h(){M(r,"class","sr-only")},m(o,u){Q(e,o,u),A(o,l,u),Q(s,o,u),A(o,n,u),A(o,r,u),g(r,a),A(o,c,u),y&&y.m(o,u),A(o,f,u),Q(_,o,u),A(o,d,u),Q(m,o,u),A(o,C,u),Q(k,o,u),b=!0},p(o,[u]){o[0]?y?(y.p(o,u),u&1&&j(y,1)):(y=Ye(o),y.c(),j(y,1),y.m(f.parentNode,f)):y&&(Je(),L(y,1,1,()=>{y=null}),qe());const p={};u&67108864&&(p.$$scope={dirty:u,ctx:o}),m.$set(p);const I={};u&2&&(I.visible=!o[1]),u&67108872&&(I.$$scope={dirty:u,ctx:o}),k.$set(I)},i(o){b||(j(e.$$.fragment,o),j(s.$$.fragment,o),j(y),j(_.$$.fragment,o),j(m.$$.fragment,o),j(k.$$.fragment,o),b=!0)},o(o){L(e.$$.fragment,o),L(s.$$.fragment,o),L(y),L(_.$$.fragment,o),L(m.$$.fragment,o),L(k.$$.fragment,o),b=!1},d(o){o&&(h(l),h(n),h(r),h(c),h(f),h(d),h(C)),Z(e,o),Z(s,o),y&&y.d(o),Z(_,o),Z(m,o),Z(k,o)}}}function en(t,e,l){let s,n,r,i,a,c;st(t,yt,P=>l(16,c=P)),ct();let f,_,d,m,C;const{url:k}=ee,{title:b,description:y,keywords:o,path:u}=ee.videosMeta;rt("copy",ee);async function p(){const P=await E();l(14,_=P.length);const W=Math.floor(Math.random()*P.length);l(0,f={...P[W]})}function I(){l(1,d=!0),m.play()}async function E(){const P=s.replace(":","-");return(await gt(`../assets/videos/10k/${P}.csv`)).map(Y=>({...Y,views:+Y.views,style:Y.manual==="true"?"manual":"auto",lines:Y.lines.split("||")}))}function H(P){C=P,l(3,C)}function te(P){$e[P?"unshift":"push"](()=>{m=P,l(2,m)})}return t.$$.update=()=>{t.$$.dirty&65536&&l(15,s=`${c.time}${c.period}`.toLowerCase()),t.$$.dirty&32768&&p(),t.$$.dirty&1&&l(7,n=f==null?void 0:f.id),t.$$.dirty&1&&l(6,r=f==null?void 0:f.timestamp),t.$$.dirty&16384&&l(5,i=_?`${_} video${_===1?"":"s"}`:"No videos"),t.$$.dirty&32769&&l(4,a=`https://docs.google.com/forms/d/e/1FAIpQLSeIbDnB265gfhnjGfw6S1zu-rOgx-2DDjrUlM_f67Fo5eS9GA/viewform?usp=pp_url&entry.2046651731=${f==null?void 0:f.id}&entry.1762409617=${s}`)},[f,d,m,C,a,i,r,n,k,b,y,o,p,I,_,s,c,H,te]}class on extends ue{constructor(e){super(),de(this,e,en,Zt,ce,{})}}export{on as component};