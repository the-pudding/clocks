import{s as H,f as l,e as L,X as q,g as c,d as r,j as e,x as i,y as D,C as G,i as B}from"./scheduler.d2971820.js";import{S as F,i as J}from"./index.ca79f6f8.js";function K(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function P(o,a,s){const d=o.slice();return d[7]=a[s],d}function R(o){let a;return{c(){a=l("link"),this.h()},l(s){a=c(s,"LINK",{rel:!0,href:!0,as:!0,type:!0,crossorigin:!0}),this.h()},h(){e(a,"rel","preload"),e(a,"href",o[7]),e(a,"as","font"),e(a,"type","font/woff2"),e(a,"crossorigin","")},m(s,d){B(s,a,d)},p:D,d(s){s&&r(a)}}}function Q(o){let a,s,d,f,g,v,w,p,k,u,y,j,A,E,z,C,S,V,M,b,T,U,x,_,W,I;document.title=a=o[0];let Y=K(o[6]),m=[];for(let n=0;n<Y.length;n+=1)m[n]=R(P(o,Y,n));return{c(){s=l("meta"),d=l("meta"),f=l("meta"),g=l("meta"),v=l("meta"),w=l("meta"),p=l("meta"),k=l("meta"),u=l("meta"),y=l("meta"),A=l("meta"),E=l("meta"),z=l("meta"),C=l("meta"),S=l("meta"),V=l("meta"),M=l("meta"),b=l("meta"),T=l("meta"),x=l("meta"),_=l("link");for(let n=0;n<m.length;n+=1)m[n].c();I=L(),this.h()},l(n){const t=q("svelte-7zqfa7",document.head);s=c(t,"META",{name:!0,content:!0}),d=c(t,"META",{name:!0,content:!0}),f=c(t,"META",{name:!0,content:!0}),g=c(t,"META",{property:!0,content:!0}),v=c(t,"META",{property:!0,content:!0}),w=c(t,"META",{property:!0,content:!0}),p=c(t,"META",{property:!0,content:!0}),k=c(t,"META",{property:!0,content:!0}),u=c(t,"META",{property:!0,content:!0}),y=c(t,"META",{property:!0,content:!0}),A=c(t,"META",{property:!0,content:!0}),E=c(t,"META",{property:!0,content:!0}),z=c(t,"META",{property:!0,content:!0}),C=c(t,"META",{name:!0,content:!0}),S=c(t,"META",{name:!0,content:!0}),V=c(t,"META",{name:!0,content:!0}),M=c(t,"META",{name:!0,content:!0}),b=c(t,"META",{name:!0,content:!0}),T=c(t,"META",{name:!0,content:!0}),x=c(t,"META",{name:!0,content:!0}),_=c(t,"LINK",{rel:!0,href:!0});for(let h=0;h<m.length;h+=1)m[h].l(t);I=L(),t.forEach(r),this.h()},h(){e(s,"name","description"),e(s,"content",o[1]),e(d,"name","author"),e(d,"content","The Pudding"),e(f,"name","news_keywords"),e(f,"content",o[3]),e(g,"property","og:title"),e(g,"content",o[0]),e(v,"property","og:site_name"),e(v,"content","The Pudding"),e(w,"property","og:url"),e(w,"content",o[5]),e(p,"property","og:description"),e(p,"content",o[1]),e(k,"property","og:type"),e(k,"content","article"),e(u,"property","og:locale"),e(u,"content","en_US"),e(y,"property","og:image"),e(y,"content",j=o[2]+"/assets/facebook-"+o[4]+".jpg"),e(A,"property","og:image:type"),e(A,"content","image/jpeg"),e(E,"property","og:image:width"),e(E,"content","1200"),e(z,"property","og:image:height"),e(z,"content","600"),e(C,"name","twitter:card"),e(C,"content","summary_large_image"),e(S,"name","twitter:site"),e(S,"content","https://pudding.cool"),e(V,"name","twitter:creator"),e(V,"content","@puddingviz"),e(M,"name","twitter:title"),e(M,"content",o[0]),e(b,"name","twitter:description"),e(b,"content",o[1]),e(T,"name","twitter:image:src"),e(T,"content",U=o[2]+"/assets/twitter-"+o[4]+".jpg"),e(x,"name","robots"),e(x,"content","max-image-preview:large"),e(_,"rel","canonical"),e(_,"href",W=o[2]+"/")},m(n,t){i(document.head,s),i(document.head,d),i(document.head,f),i(document.head,g),i(document.head,v),i(document.head,w),i(document.head,p),i(document.head,k),i(document.head,u),i(document.head,y),i(document.head,A),i(document.head,E),i(document.head,z),i(document.head,C),i(document.head,S),i(document.head,V),i(document.head,M),i(document.head,b),i(document.head,T),i(document.head,x),i(document.head,_);for(let h=0;h<m.length;h+=1)m[h]&&m[h].m(document.head,null);i(document.head,I)},p(n,[t]){if(t&1&&a!==(a=n[0])&&(document.title=a),t&2&&e(s,"content",n[1]),t&8&&e(f,"content",n[3]),t&1&&e(g,"content",n[0]),t&32&&e(w,"content",n[5]),t&2&&e(p,"content",n[1]),t&20&&j!==(j=n[2]+"/assets/facebook-"+n[4]+".jpg")&&e(y,"content",j),t&1&&e(M,"content",n[0]),t&2&&e(b,"content",n[1]),t&20&&U!==(U=n[2]+"/assets/twitter-"+n[4]+".jpg")&&e(T,"content",U),t&4&&W!==(W=n[2]+"/")&&e(_,"href",W),t&64){Y=K(n[6]);let h;for(h=0;h<Y.length;h+=1){const N=P(n,Y,h);m[h]?m[h].p(N,t):(m[h]=R(N),m[h].c(),m[h].m(I.parentNode,I))}for(;h<m.length;h+=1)m[h].d(1);m.length=Y.length}},i:D,o:D,d(n){r(s),r(d),r(f),r(g),r(v),r(w),r(p),r(k),r(u),r(y),r(A),r(E),r(z),r(C),r(S),r(V),r(M),r(b),r(T),r(x),r(_),G(m,n),r(I)}}}function X(o,a,s){let d,{title:f="Title TK"}=a,{description:g="Description TK"}=a,{url:v="https://pudding.cool"}=a,{keywords:w=""}=a,{path:p=""}=a;const k=["https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-900.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-700.woff2","https://pudding.cool/assets/fonts/rubik/rubik-v14-latin-regular.woff2"];return o.$$set=u=>{"title"in u&&s(0,f=u.title),"description"in u&&s(1,g=u.description),"url"in u&&s(2,v=u.url),"keywords"in u&&s(3,w=u.keywords),"path"in u&&s(4,p=u.path)},o.$$.update=()=>{o.$$.dirty&20&&s(5,d=`${v}${p!=="landing"?`/${p}`:""}`)},[f,g,v,w,p,d,k]}class be extends F{constructor(a){super(),J(this,a,X,Q,H,{title:0,description:1,url:2,keywords:3,path:4})}}const Te='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.6 50"><path class="st0" d="M150.1 9.5c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8-2.8-1.3-2.8-2.8 1.3-2.8 2.8-2.8zM147.2 17.3h5.6v18.2h-5.6V17.3zM77.1 9.5h-8.9v26h5.6v-8.1h3.3c4.9 0 8.9-4 8.9-8.9s-3.9-9-8.9-9zm0 12.3h-3.3v-6.6h3.3c1.8 0 3.3 1.5 3.3 3.3s-1.4 3.3-3.3 3.3zM105.7 17.6h-5.6v8.9c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3v-8.9h-5.6v8.9c0 4.9 4 8.9 8.9 8.9s8.9-4 8.9-8.9v-8.9zM164.1 17.6c-4.9 0-8.9 4-8.9 8.9v8.9h5.6v-8.9c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v8.9h5.6v-8.9c0-4.9-4-8.9-8.9-8.9zM119.7 16.2v1.4h-3.3c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h8.9V9.5l-5.6 3.3v3.4zm.1 8.4V29.8h-3.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3v1.4zM139.3 16.2v1.4H136c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h8.9V9.5l-5.6 3.3v3.4zm.1 8.4V29.8H136c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3v1.4h.1zM183.7 17.6c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9h3.3v5.1c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3V38l-5.6 3.3c.4 4.5 4.2 8.1 8.9 8.1 4.9 0 8.9-4 8.9-8.9V17.6h-8.9zm3.3 5.8V30h-3.3c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h3.3zM28.6 17.6c-1.2 0-2.3.2-3.3.6V9.5l-5.6 3.3v22.6h5.6v-8.9c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v8.9h5.6v-8.9c0-4.9-4-8.9-8.9-8.9zM17.8 9.5H0v5.6h6.1v20.3h5.6V15.1h6.1V9.5zM48.3 30.2c-.4 0-1.2-.1-1.8-.4l5.2-2.1 5.6-2.3-1-2.3-.1-.2c-.1-.3-.3-.6-.5-1-.1-.1-.1-.2-.2-.3 0 0 0-.1-.1-.1l-.1-.1-.1-.1c-1.6-2.2-4-3.5-6.7-3.7h-.6c-4.9 0-8.9 4-8.9 8.9 0 .4 0 .9.1 1.4V28.2c0 .3.1.5.2.8v.2c.1.3.2.7.4 1v.2c.1.3.3.5.4.8 0 .1.1.1.1.2.1.2.3.4.4.6v.1s0 .1.1.1l.1.1c1.7 2.1 4.4 3.4 7.2 3.4h6.1v-5.2c.4-.3-3.5-.3-5.8-.3zm7.9-7.3zm-11.6 2.8l-.2.1c.2-1.9 1.8-3.5 3.7-3.5.9 0 1.8.4 2.4.9L46.2 25l-1.6.7z"/></svg>',O="https://pudding.cool/projects/clocks",Z="Data Clocks",$="Clocks that connect data to time",ee="Data Clocks",te="A clock where the time is…",oe=[{href:"songs",text:"in a song title"},{href:"videos",text:"mentioned on YouTube"},{href:"news",text:"made of news headlines"},{href:"",text:"coming soon…",next:"the population of a US place"}],ne="This series is inspired by similar experiments that came before it, like",ae=[{href:"https://en.wikipedia.org/wiki/The_Clock_(2010_film)",text:"The Clock (2010)"},{href:"http://earthclock.cwandt.com/",text:"Earth Clock"},{href:"https://literature-clock.jenevoldsen.com/",text:"Literature Clock"},{href:"http://thecolourclock.com/",text:"The Colour Clock"}],re=[{type:"text",value:"A common exercise in the creative computation classes I've taught involves giving students a simple input to see how they can transform it into some visual output. Although I no longer teach, I thought it would be fun to challenge myself with a similar prompt. My input is the current time, and my output needs to incorporate data."}],se="a clock where the time is in a song title",ie=[{type:"text",value:"Created by <a href=https://pudding.cool/author/russell-samora target=_blank rel=noreferrer>Russell Samora</a>. Data from the Spotify API. There are 8,968 songs, so be sure to come back!"},{type:"text",value:"Every minute, random songs are played that contain the time in the title (e.g., <a href=https://open.spotify.com/track/2iAzfR2Yd7IdGN30mESgSj target=_blank rel=noreferrer>6:47</a> or <a href=https://open.spotify.com/track/0YdMW1cyCJx5tbNaDWy1KQ target=_blank rel=noreferrer>6:47 from Central Station</a>). If there are at least two songs with the correct am/pm (or it is absent), then the incorrect ones will be excluded."},{type:"text",value:"<a href=../>Why did you make a clock?</a>"}],le={title:"a clock where the time is in a song title",description:"a music listening experience",path:"songs",keywords:"clock, time, data, song"},ce="a clock where the time is mentioned on YouTube",he="Viewer discretion advised",ue="This experience contains over 58,000 YouTube videos. They are all public with over 20k views, but we have not watched them all, so view at your own risk. You can report a video with the link above it.",me=[{type:"text",value:"Created by <a href=https://pudding.cool/author/russell-samora target=_blank rel=noreferrer>Russell Samora</a>. Data from <a href=https://filmot.com/ target=_blank rel=noreferrer>filmot.com</a> and the YouTube API."},{type:"text",value:"Every minute, a YouTube video is played that contains the exact time (including am/pm) in the captions. Language and caption data is far from perfect, so there may occasionally be incorrect results or languages."},{type:"text",value:"<a href=../>Why did you make a clock?</a>"}],de={title:"a clock where the time is mentioned on YouTube",description:"a video discovery experience",path:"songs",keywords:"clock, time, data, video, YouTube"},pe="a clock where the time is made of news headlines",fe=[{type:"text",value:"Created by <a href=https://pudding.cool/author/russell-samora target=_blank rel=noreferrer>Russell Samora</a>. Data from <a href=https://newsapi.org/ target=_blank rel=noreferrer>News API</a> and <a href=https://gnews.io/ target=_blank rel=noreferrer>GNews</a>."},{type:"text",value:"A daily update matches hours and minutes on both words and numerals from recent headlines from English-language news sources."},{type:"text",value:"<a href=../>Why did you make a clock?</a>"}],ge={title:"a clock where the time is made of news headlines",description:"a recent news experience",path:"news",keywords:"news, headlines, time, data"},ve="a clock where the time is the population of US place",we=[{type:"text",value:"Created by <a href=https://pudding.cool/author/russell-samora target=_blank rel=noreferrer>Russell Samora</a>. Data from <a href=https://www.uscitieslist.org/ target=_blank rel=noreferrer>US Cities List</a> and <a href=https://en.wikipedia.org/wiki/Category:Unincorporated_communities_in_the_United_States_by_county target=_blank rel=noreferrer>Wikipedia</a>."},{type:"text",value:"<a href=../>Why did you make a clock?</a>"}],ke={title:"a clock where the time is the population of US place",description:"a small town USA experience",path:"populations",keywords:"population, us, cities, towns, time, data"},_e={url:O,title:Z,description:$,hed:ee,overline:te,links:oe,overline2:ne,links2:ae,details:re,songsTitle:se,songsMethod:ie,songsMeta:le,videosTitle:ce,videosWarning:he,videosIntro:ue,videosMethod:me,videosMeta:de,newsTitle:pe,newsMethod:fe,newsMeta:ge,populationsTitle:ve,populationsMethod:we,populationsMeta:ke};function Ae(){console.log("--- --- --- --- --- ---"),console.log("svelte-starter: 5.12.0"),console.log("build: 2023-09-06-13:23"),console.log("--- --- --- --- --- ---")}export{be as M,_e as c,K as e,Ae as v,Te as w};
