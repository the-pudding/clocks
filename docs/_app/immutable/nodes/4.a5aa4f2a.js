import{s as N,f as k,g as $,Q as j,j as z,i as h,y as b,d as p,a as w,e as V,c as g,M as q,R as K,o as Q,h as R,x as C,I as F,p as G,z as J,C as X,l as H,m as L,n as W}from"../chunks/scheduler.47e91446.js";import{S as Y,i as B,b as I,d as E,m as M,a as y,t as v,c as Z,e as S,g as ee}from"../chunks/index.39dad498.js";import{H as te,c as se,b as ie}from"../chunks/clock.eea63ee9.js";import{M as ne,v as ae,c as A}from"../chunks/version.7734f8fc.js";function oe(i){let e,a="🚧 This project is a work in progress. Please do not share the URL. 🚧";return{c(){e=k("div"),e.textContent=a,this.h()},l(o){e=$(o,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1huwx5x"&&(e.textContent=a),this.h()},h(){z(e,"class","svelte-svusjd")},m(o,c){h(o,e,c)},p:b,i:b,o:b,d(o){o&&p(e)}}}class le extends Y{constructor(e){super(),B(this,e,null,oe,N,{})}}function x(i){let e,a,o="Enable Video",c,f;return{c(){e=k("p"),a=k("button"),a.textContent=o,this.h()},l(s){e=$(s,"P",{class:!0});var n=R(e);a=$(n,"BUTTON",{"data-svelte-h":!0}),j(a)!=="svelte-17ja6a2"&&(a.textContent=o),n.forEach(p),this.h()},h(){z(e,"class","svelte-173wwg8")},m(s,n){h(s,e,n),C(e,a),c||(f=F(a,"click",i[3]),c=!0)},p:b,d(s){s&&p(e),c=!1,f()}}}function re(i){let e,a='<div id="player-yt" class="svelte-173wwg8"></div>',o,c,f,s=i[0]&&x(i);return{c(){e=k("div"),e.innerHTML=a,c=w(),s&&s.c(),f=V(),this.h()},l(n){e=$(n,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-34vwxe"&&(e.innerHTML=a),c=g(n),s&&s.l(n),f=V(),this.h()},h(){z(e,"class","player-wrapper svelte-173wwg8"),q(()=>i[8].call(e))},m(n,m){h(n,e,m),i[7](e),o=K(e,i[8].bind(e)),h(n,c,m),s&&s.m(n,m),h(n,f,m)},p(n,[m]){n[0]?s?s.p(n,m):(s=x(n),s.c(),s.m(f.parentNode,f)):s&&(s.d(1),s=null)},i:b,o:b,d(n){n&&(p(e),p(c),p(f)),i[7](null),o(),s&&s.d(n)}}}function ce(){const i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e?e.parentNode.insertBefore(i,e):document.body.appendChild(i)}function fe(i){}function me(i,e,a){let o=null,c=!1,f,s=0,{timestamp:n}=e,{id:m}=e;const r=16/9;function t(){console.log(s);const _=s,U=_/r;o.setSize(_,U)}function l({data:_}){}function d(){a(0,c=!0),console.log({ready:c})}function u(){if(console.log("load",c,m),m)o.loadVideoById({videoId:m,startSeconds:n}),o.playVideo();else return}function T(){o.playVideo()}Q(()=>{ce(),window.onYouTubeIframeAPIReady=function(){a(6,o=new YT.Player("player-yt",{playerVars:{controls:1,cc_load_policy:0,enablejsapi:1,fs:1,iv_load_policy:3,modestbranding:1,rel:0,showinfo:0,playsinline:1,color:"white"},events:{onReady:d,onStateChange:l,onError:fe}}))}});function P(_){G[_?"unshift":"push"](()=>{f=_,a(2,f)})}function O(){s=this.clientWidth,a(1,s)}return i.$$set=_=>{"timestamp"in _&&a(4,n=_.timestamp),"id"in _&&a(5,m=_.id)},i.$$.update=()=>{i.$$.dirty&33&&c&&u(),i.$$.dirty&66&&o&&t(),i.$$.dirty&16&&console.log({timestamp:n})},[c,s,f,T,n,m,o,P,O]}class ue extends Y{constructor(e){super(),B(this,e,me,re,N,{timestamp:4,id:5})}}function D(i){let e,a,o=i[0].time+"",c,f,s=i[0].period+"",n,m,r,t;return r=new ue({props:{id:i[1].vid,timestamp:+i[1].start}}),{c(){e=k("time"),a=k("mark"),c=H(o),f=w(),n=H(s),m=w(),I(r.$$.fragment),this.h()},l(l){e=$(l,"TIME",{class:!0});var d=R(e);a=$(d,"MARK",{});var u=R(a);c=L(u,o),f=g(u),n=L(u,s),u.forEach(p),d.forEach(p),m=g(l),E(r.$$.fragment,l),this.h()},h(){z(e,"class","svelte-1bcbzx8")},m(l,d){h(l,e,d),C(e,a),C(a,c),C(a,f),C(a,n),h(l,m,d),M(r,l,d),t=!0},p(l,d){(!t||d&1)&&o!==(o=l[0].time+"")&&W(c,o),(!t||d&1)&&s!==(s=l[0].period+"")&&W(n,s);const u={};d&2&&(u.id=l[1].vid),d&2&&(u.timestamp=+l[1].start),r.$set(u)},i(l){t||(y(r.$$.fragment,l),t=!0)},o(l){v(r.$$.fragment,l),t=!1},d(l){l&&(p(e),p(m)),S(r,l)}}}function de(i){let e,a,o,c,f,s,n,m;e=new ne({props:{title:i[2],description:i[3],url:i[4],keywords:i[5]}}),o=new le({}),f=new te({props:{text:"a clock where the time is said in a YouTube video"}});let r=i[1]&&D(i);return{c(){I(e.$$.fragment),a=w(),I(o.$$.fragment),c=w(),I(f.$$.fragment),s=w(),r&&r.c(),n=V()},l(t){E(e.$$.fragment,t),a=g(t),E(o.$$.fragment,t),c=g(t),E(f.$$.fragment,t),s=g(t),r&&r.l(t),n=V()},m(t,l){M(e,t,l),h(t,a,l),M(o,t,l),h(t,c,l),M(f,t,l),h(t,s,l),r&&r.m(t,l),h(t,n,l),m=!0},p(t,[l]){t[1]?r?(r.p(t,l),l&2&&y(r,1)):(r=D(t),r.c(),y(r,1),r.m(n.parentNode,n)):r&&(ee(),v(r,1,1,()=>{r=null}),Z())},i(t){m||(y(e.$$.fragment,t),y(o.$$.fragment,t),y(f.$$.fragment,t),y(r),m=!0)},o(t){v(e.$$.fragment,t),v(o.$$.fragment,t),v(f.$$.fragment,t),v(r),m=!1},d(t){t&&(p(a),p(c),p(s),p(n)),S(e,t),S(o,t),S(f,t),r&&r.d(t)}}}function pe(i,e,a){let o,c;J(i,ie,u=>a(0,c=u)),ae();let f,s;const{title:n,description:m,url:r,keywords:t}=A;X("copy",A);function l(){const u=f.filter(P=>P.time===o);a(1,s={...u[0]})}async function d(){const u=await se("../assets/videos.csv");a(6,f=u.map(T=>({...T})))}return i.$$.update=()=>{i.$$.dirty&1&&a(7,o=`${c.time}${c.period}`.toLowerCase()),i.$$.dirty&192&&f&&l()},d(),[c,s,n,m,r,t,f,o]}class be extends Y{constructor(e){super(),B(this,e,pe,de,N,{})}}export{be as component};