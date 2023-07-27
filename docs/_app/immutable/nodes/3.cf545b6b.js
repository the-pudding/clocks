import{n as ue,s as fe,e as _e,f as ve,h as K,i as $,r as ke,b as ge}from"../chunks/scheduler.b5ae7a1c.js";import{S as ye,i as Ce,r as be,s as M,g as S,e as q,u as we,c as O,h as R,z as ce,k as A,v as Te,a as N,d as Ee,t as Ae,f as v,w as Ne,m as B,j as I,n as D,y as E,o as X,A as je,B as Q,C as Ue}from"../chunks/index.927ad61c.js";import{M as Fe,v as Se,e as x,c as ee}from"../chunks/version.4c95573b.js";import{r as Re}from"../chunks/index.c7c77810.js";const Ie=typeof window<"u";let Me=Ie?e=>requestAnimationFrame(e):ue;var te={},z={},H=34,L=10,V=13;function he(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Oe(e,t){var n=he(e);return function(r,s){return t(n(r),s,e)}}function ne(e){var t=Object.create(null),n=[];return e.forEach(function(r){for(var s in r)s in t||n.push(t[s]=s)}),n}function T(e,t){var n=e+"",r=n.length;return r<t?new Array(t-r+1).join(0)+n:n}function Be(e){return e<0?"-"+T(-e,6):e>9999?"+"+T(e,6):T(e,4)}function De(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),r=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Be(e.getUTCFullYear())+"-"+T(e.getUTCMonth()+1,2)+"-"+T(e.getUTCDate(),2)+(s?"T"+T(t,2)+":"+T(n,2)+":"+T(r,2)+"."+T(s,3)+"Z":r?"T"+T(t,2)+":"+T(n,2)+":"+T(r,2)+"Z":n||t?"T"+T(t,2)+":"+T(n,2)+"Z":"")}function Le(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function r(o,l){var C,i,a=s(o,function(w,b){if(C)return C(w,b-1);i=w,C=l?Oe(w,l):he(w)});return a.columns=i||[],a}function s(o,l){var C=[],i=o.length,a=0,w=0,b,d=i<=0,f=!1;o.charCodeAt(i-1)===L&&--i,o.charCodeAt(i-1)===V&&--i;function y(){if(d)return z;if(f)return f=!1,te;var j,U=a,_;if(o.charCodeAt(U)===H){for(;a++<i&&o.charCodeAt(a)!==H||o.charCodeAt(++a)===H;);return(j=a)>=i?d=!0:(_=o.charCodeAt(a++))===L?f=!0:_===V&&(f=!0,o.charCodeAt(a)===L&&++a),o.slice(U+1,j-1).replace(/""/g,'"')}for(;a<i;){if((_=o.charCodeAt(j=a++))===L)f=!0;else if(_===V)f=!0,o.charCodeAt(a)===L&&++a;else if(_!==n)continue;return o.slice(U,j)}return d=!0,o.slice(U,i)}for(;(b=y())!==z;){for(var m=[];b!==te&&b!==z;)m.push(b),b=y();l&&(m=l(m,w++))==null||C.push(m)}return C}function u(o,l){return o.map(function(C){return l.map(function(i){return p(C[i])}).join(e)})}function h(o,l){return l==null&&(l=ne(o)),[l.map(p).join(e)].concat(u(o,l)).join(`
`)}function c(o,l){return l==null&&(l=ne(o)),u(o,l).join(`
`)}function k(o){return o.map(g).join(`
`)}function g(o){return o.map(p).join(e)}function p(o){return o==null?"":o instanceof Date?De(o):t.test(o+="")?'"'+o.replace(/"/g,'""')+'"':o}return{parse:r,parseRows:s,format:h,formatBody:c,formatRows:k,formatRow:g,formatValue:p}}var Pe=Le(","),Ye=Pe.parse;function Xe(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function qe(e,t){return fetch(e,t).then(Xe)}function Ze(e){return function(t,n,r){return arguments.length===2&&typeof n=="function"&&(r=n,n=void 0),qe(t,n).then(function(s){return e(s,r)})}}var ze=Ze(Ye);function P(e,t,n){this.k=e,this.x=t,this.y=n}P.prototype={constructor:P,scale:function(e){return e===1?this:new P(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new P(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};P.prototype;function re(){const t=new Date().toLocaleTimeString("en-US"),n=t.substring(0,t.length-6),r=t.substring(t.length-2);return{time:n,period:r}}const He=Re(re(),e=>{const n=setInterval(()=>e(re()),1e3);return()=>clearInterval(n)});function ie(e,t,n){const r=e.slice();r[22]=t[n].text,r[23]=t[n].highlight;const s=r[23]?"mark":"span";return r[24]=s,r}function se(e){let t,n,r,s,u,h,c,k,g,p,o=e[3].artist+"",l,C,i,a,w,b=x(e[4]),d=[];for(let f=0;f<b.length;f+=1)d[f]=oe(ie(e,b,f));return{c(){t=S("time"),n=B(e[1]),r=M(),s=B(e[5]),u=M(),h=S("h1"),c=S("span");for(let f=0;f<d.length;f+=1)d[f].c();k=M(),g=S("span"),p=B("By "),l=B(o),C=M(),i=S("a"),a=B("link"),this.h()},l(f){t=R(f,"TIME",{class:!0});var y=I(t);n=D(y,e[1]),r=O(y),s=D(y,e[5]),y.forEach(v),u=O(f),h=R(f,"H1",{class:!0});var m=I(h);c=R(m,"SPAN",{class:!0});var j=I(c);for(let F=0;F<d.length;F+=1)d[F].l(j);j.forEach(v),k=O(m),g=R(m,"SPAN",{class:!0});var U=I(g);p=D(U,"By "),l=D(U,o),C=O(U),i=R(U,"A",{href:!0,target:!0,rel:!0});var _=I(i);a=D(_,"link"),_.forEach(v),U.forEach(v),m.forEach(v),this.h()},h(){A(t,"class","svelte-rvsehe"),A(c,"class","title svelte-rvsehe"),A(i,"href",w=e[3].href),A(i,"target","_blank"),A(i,"rel","noreferrer"),A(g,"class","artist svelte-rvsehe"),A(h,"class","svelte-rvsehe")},m(f,y){N(f,t,y),E(t,n),E(t,r),E(t,s),N(f,u,y),N(f,h,y),E(h,c);for(let m=0;m<d.length;m+=1)d[m]&&d[m].m(c,null);E(h,k),E(h,g),E(g,p),E(g,l),E(g,C),E(g,i),E(i,a)},p(f,y){if(y&2&&X(n,f[1]),y&32&&X(s,f[5]),y&16){b=x(f[4]);let m;for(m=0;m<b.length;m+=1){const j=ie(f,b,m);d[m]?d[m].p(j,y):(d[m]=oe(j),d[m].c(),d[m].m(c,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=b.length}y&8&&o!==(o=f[3].artist+"")&&X(l,o),y&8&&w!==(w=f[3].href)&&A(i,"href",w)},d(f){f&&(v(t),v(u),v(h)),je(d,f)}}}function J(e){let t,n=e[22]+"",r;return{c(){t=S(e[24]),r=B(n),this.h()},l(s){t=R(s,(e[24]||"null").toUpperCase(),{class:!0});var u=I(t);r=D(u,n),u.forEach(v),this.h()},h(){Ue(e[24])(t,{class:"svelte-rvsehe"})},m(s,u){N(s,t,u),E(t,r)},p(s,u){u&16&&n!==(n=s[22]+"")&&X(r,n)},d(s){s&&v(t)}}}function oe(e){let t=e[24],n,r=e[24]&&J(e);return{c(){r&&r.c(),n=q()},l(s){r&&r.l(s),n=q()},m(s,u){r&&r.m(s,u),N(s,n,u)},p(s,u){s[24]?t?fe(t,s[24])?(r.d(1),r=J(s),t=s[24],r.c(),r.m(n.parentNode,n)):r.p(s,u):(r=J(s),t=s[24],r.c(),r.m(n.parentNode,n)):t&&(r.d(1),r=null,t=s[24])},d(s){s&&v(n),r&&r.d(s)}}}function le(e){let t,n,r="Enable Audio",s,u;return{c(){t=S("p"),n=S("button"),n.textContent=r,this.h()},l(h){t=R(h,"P",{class:!0});var c=I(t);n=R(c,"BUTTON",{"data-svelte-h":!0}),ce(n)!=="svelte-1sl3zi7"&&(n.textContent=r),c.forEach(v),this.h()},h(){A(t,"class","svelte-rvsehe")},m(h,c){N(h,t,c),E(t,n),s||(u=Q(n,"click",e[11]),s=!0)},p:ue,d(h){h&&v(t),s=!1,u()}}}function ae(e){let t,n,r,s,u;function h(){cancelAnimationFrame(r),t.paused||(r=Me(h)),e[14].call(t)}return{c(){t=S("audio"),this.h()},l(c){t=R(c,"AUDIO",{src:!0,preload:!0}),I(t).forEach(v),this.h()},h(){K(t.src,n=e[3].preview_url)||A(t,"src",n),A(t,"preload",""),t.autoplay=!0,e[0]===void 0&&$(h),e[0]===void 0&&$(()=>e[15].call(t))},m(c,k){N(c,t,k),e[16](t),s||(u=[Q(t,"timeupdate",h),Q(t,"ended",e[15])],s=!0)},p(c,k){k&8&&!K(t.src,n=c[3].preview_url)&&A(t,"src",n)},d(c){c&&v(t),e[16](null),s=!1,ke(u)}}}function Ve(e){var C;let t,n,r,s="This is a clock where the time is in the title of a song.",u,h,c,k,g;t=new Fe({props:{title:e[7],description:e[8],url:e[9],preloadFont:e[6],keywords:e[10]}});let p=e[3]&&se(e),o=e[2]&&le(e),l=((C=e[3])==null?void 0:C.preview_url)&&ae(e);return{c(){be(t.$$.fragment),n=M(),r=S("p"),r.textContent=s,u=M(),p&&p.c(),h=M(),o&&o.c(),c=M(),l&&l.c(),k=q(),this.h()},l(i){we(t.$$.fragment,i),n=O(i),r=R(i,"P",{class:!0,"data-svelte-h":!0}),ce(r)!=="svelte-1rtwy5v"&&(r.textContent=s),u=O(i),p&&p.l(i),h=O(i),o&&o.l(i),c=O(i),l&&l.l(i),k=q(),this.h()},h(){A(r,"class","svelte-rvsehe")},m(i,a){Te(t,i,a),N(i,n,a),N(i,r,a),N(i,u,a),p&&p.m(i,a),N(i,h,a),o&&o.m(i,a),N(i,c,a),l&&l.m(i,a),N(i,k,a),g=!0},p(i,[a]){var w;i[3]?p?p.p(i,a):(p=se(i),p.c(),p.m(h.parentNode,h)):p&&(p.d(1),p=null),i[2]?o?o.p(i,a):(o=le(i),o.c(),o.m(c.parentNode,c)):o&&(o.d(1),o=null),(w=i[3])!=null&&w.preview_url?l?l.p(i,a):(l=ae(i),l.c(),l.m(k.parentNode,k)):l&&(l.d(1),l=null)},i(i){g||(Ee(t.$$.fragment,i),g=!0)},o(i){Ae(t.$$.fragment,i),g=!1},d(i){i&&(v(n),v(r),v(u),v(h),v(c),v(k)),Ne(t,i),p&&p.d(i),o&&o.d(i),l&&l.d(i)}}}function Je(e,t,n){let r,s,u;_e(e,He,_=>n(13,u=_)),Se();let h,c,k,g,p;const o=[],{title:l,description:C,url:i,keywords:a}=ee;ve("copy",ee);function w(_){const F=_.toLowerCase(),Y=s.toLowerCase(),W=F.indexOf(`${r} ${Y}`)>-1?`${r} ${Y}`:r,Z=F.indexOf(W),G=Z+W.length,pe=_.slice(0,Z),me=_.slice(Z,G),de=_.slice(G);return[{text:pe},{text:me,highlight:!0},{text:de}]}function b(){const _=c.filter(Y=>Y.time===r),F=Math.floor(Math.random()*_.length);n(3,k={..._[F]}),n(4,g=w(k.name))}function d(){b()}async function f(){const _=await ze("../assets/tracks.csv");n(12,c=_.map(F=>({...F,popularity:+F.popularity})))}function y(){h.play()}function m(){p=this.ended,n(0,p)}function j(){p=this.ended,n(0,p)}function U(_){ge[_?"unshift":"push"](()=>{h=_,n(2,h)})}return e.$$.update=()=>{e.$$.dirty&8192&&n(1,r=u.time),e.$$.dirty&8192&&n(5,s=u.period),e.$$.dirty&4098&&c&&d(),e.$$.dirty&1&&p&&b()},f(),[p,r,h,k,g,s,o,l,C,i,a,y,c,u,m,j,U]}class et extends ye{constructor(t){super(),Ce(this,t,Je,Ve,fe,{})}}export{et as component};
