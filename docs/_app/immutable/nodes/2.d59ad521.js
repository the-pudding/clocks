import{s as oe,f,H as ce,g as u,h as d,A as ie,d as n,j as m,i as w,x as c,y as M,a as E,l as P,c as $,m as x,B as fe,C as F,D as ee,E as ue}from"../chunks/scheduler.75bf702b.js";import{S as _e,i as he,b as te,d as le,m as ae,a as re,t as se,e as ne}from"../chunks/index.de86b41b.js";import{w as de,M as me,e as G,v as pe,c as T}from"../chunks/version.d441c659.js";function ve(r){let e,l,t,s;return{c(){e=f("header"),l=f("div"),t=f("a"),s=new ce(!1),this.h()},l(i){e=u(i,"HEADER",{});var o=d(e);l=u(o,"DIV",{class:!0});var _=d(l);t=u(_,"A",{href:!0,"aria-label":!0,target:!0,class:!0});var p=d(t);s=ie(p,!1),p.forEach(n),_.forEach(n),o.forEach(n),this.h()},h(){s.a=null,m(t,"href","https://pudding.cool"),m(t,"aria-label","The Pudding"),m(t,"target","_self"),m(t,"class","svelte-1v3mqba"),m(l,"class","wordmark svelte-1v3mqba")},m(i,o){w(i,e,o),c(e,l),c(l,t),s.m(de,t)},p:M,i:M,o:M,d(i){i&&n(e)}}}class ge extends _e{constructor(e){super(),he(this,e,null,ve,oe,{})}}function ke(r,e,l){const t=r.slice();return t[5]=e[l].href,t[6]=e[l].text,t[8]=l,t}function be(r,e,l){const t=r.slice();return t[9]=e[l].value,t}function ye(r,e,l){const t=r.slice();t[5]=e[l].href,t[6]=e[l].text;const s=!t[5];return t[12]=s,t}function Ee(r){let e;return{c(){e=P(r[6])},l(l){e=x(l,r[6])},m(l,t){w(l,e,t)},d(l){l&&n(e)}}}function $e(r){let e,l;return{c(){e=f("a"),l=P(r[6]),this.h()},l(t){e=u(t,"A",{href:!0});var s=d(e);l=x(s,r[6]),s.forEach(n),this.h()},h(){m(e,"href",r[5])},m(t,s){w(t,e,s),c(e,l)},d(t){t&&n(e)}}}function we(r){let e,l;function t(o,_){return o[5]?$e:Ee}let i=t(r)(r);return{c(){e=f("li"),i.c(),l=E(),this.h()},l(o){e=u(o,"LI",{class:!0});var _=d(e);i.l(_),l=$(_),_.forEach(n),this.h()},h(){m(e,"class","svelte-1g5z96m"),ue(e,"disable",r[12])},m(o,_){w(o,e,_),i.m(e,null),c(e,l)},p:M,d(o){o&&n(e),i.d()}}}function He(r){let e,l;return{c(){e=f("p"),l=new ce(!1),this.h()},l(t){e=u(t,"P",{});var s=d(e);l=ie(s,!1),s.forEach(n),this.h()},h(){l.a=null},m(t,s){w(t,e,s),l.m(r[9],e)},p:M,d(t){t&&n(e)}}}function ze(r){let e;return{c(){e=P(".")},l(l){e=x(l,".")},m(l,t){w(l,e,t)},d(l){l&&n(e)}}}function Ce(r){let e;return{c(){e=P(",")},l(l){e=x(l,",")},m(l,t){w(l,e,t)},d(l){l&&n(e)}}}function Se(r){let e,l,t,s,i;function o(k,v){return k[8]<T.links2.length-1?Ce:ze}let p=o(r)(r);return{c(){e=f("span"),l=f("a"),t=P(r[6]),s=E(),p.c(),i=E(),this.h()},l(k){e=u(k,"SPAN",{});var v=d(e);l=u(v,"A",{href:!0});var H=d(l);t=x(H,r[6]),H.forEach(n),s=$(v),p.l(v),i=$(v),v.forEach(n),this.h()},h(){m(l,"href",r[5])},m(k,v){w(k,e,v),c(e,l),c(l,t),c(e,s),p.m(e,null),c(e,i)},p:M,d(k){k&&n(e),p.d()}}}function Te(r){let e,l,t,s,i,o,_,p=T.overline+"",k,v,H,L,q,b,R,A,J=T.overline2+"",V,j,B,I,K='- <a href="https://pudding.cool/author/russell-samora" target="_blank" rel="noreferrer">Russell Samora</a>',N;e=new me({props:{title:r[0],description:r[1],url:r[2],keywords:r[3],path:"landing"}}),s=new ge({});let Q=G(T.links),z=[];for(let a=0;a<Q.length;a+=1)z[a]=we(ye(r,Q,a));let U=G(T.details),C=[];for(let a=0;a<U.length;a+=1)C[a]=He(be(r,U,a));let W=G(T.links2),S=[];for(let a=0;a<W.length;a+=1)S[a]=Se(ke(r,W,a));return{c(){te(e.$$.fragment),l=E(),t=f("div"),te(s.$$.fragment),i=E(),o=f("section"),_=f("h1"),k=P(p),v=E(),H=f("section"),L=f("ol");for(let a=0;a<z.length;a+=1)z[a].c();q=E(),b=f("section");for(let a=0;a<C.length;a+=1)C[a].c();R=E(),A=f("p"),V=P(J),j=E();for(let a=0;a<S.length;a+=1)S[a].c();B=E(),I=f("p"),I.innerHTML=K,this.h()},l(a){le(e.$$.fragment,a),l=$(a),t=u(a,"DIV",{class:!0});var g=d(t);le(s.$$.fragment,g),i=$(g),o=u(g,"SECTION",{class:!0});var h=d(o);_=u(h,"H1",{class:!0});var X=d(_);k=x(X,p),X.forEach(n),h.forEach(n),v=$(g),H=u(g,"SECTION",{class:!0});var Y=d(H);L=u(Y,"OL",{});var Z=d(L);for(let y=0;y<z.length;y+=1)z[y].l(Z);Z.forEach(n),Y.forEach(n),q=$(g),b=u(g,"SECTION",{id:!0,class:!0});var D=d(b);for(let y=0;y<C.length;y+=1)C[y].l(D);R=$(D),A=u(D,"P",{});var O=d(A);V=x(O,J),j=$(O);for(let y=0;y<S.length;y+=1)S[y].l(O);O.forEach(n),B=$(D),I=u(D,"P",{class:!0,"data-svelte-h":!0}),fe(I)!=="svelte-1ka0z2"&&(I.innerHTML=K),D.forEach(n),g.forEach(n),this.h()},h(){m(_,"class","svelte-1g5z96m"),m(o,"class","intro svelte-1g5z96m"),m(H,"class","links svelte-1g5z96m"),m(I,"class","byline svelte-1g5z96m"),m(b,"id","info"),m(b,"class","svelte-1g5z96m"),m(t,"class","c")},m(a,g){ae(e,a,g),w(a,l,g),w(a,t,g),ae(s,t,null),c(t,i),c(t,o),c(o,_),c(_,k),c(t,v),c(t,H),c(H,L);for(let h=0;h<z.length;h+=1)z[h]&&z[h].m(L,null);c(t,q),c(t,b);for(let h=0;h<C.length;h+=1)C[h]&&C[h].m(b,null);c(b,R),c(b,A),c(A,V),c(A,j);for(let h=0;h<S.length;h+=1)S[h]&&S[h].m(A,null);c(b,B),c(b,I),N=!0},p:M,i(a){N||(re(e.$$.fragment,a),re(s.$$.fragment,a),N=!0)},o(a){se(e.$$.fragment,a),se(s.$$.fragment,a),N=!1},d(a){a&&(n(l),n(t)),ne(e,a),ne(s),F(z,a),F(C,a),F(S,a)}}}function Ae(r,e,l){let{data:t}=e;pe();const{title:s,description:i,url:o,keywords:_}=T;return ee("copy",T),ee("data",t.data),r.$$set=p=>{"data"in p&&l(4,t=p.data)},[s,i,o,_,t]}class xe extends _e{constructor(e){super(),he(this,e,Ae,Te,oe,{data:4})}}export{xe as component};
