import{S as e,i as t,s as r,j as n,m as o,o as a,x as s,u as l,v as c,e as i,c as f,a as m,d,b as u,f as h,r as $,w as g,M as p,T as v,Q as w,V as y,k as E,n as b,R as k,l as x,t as I,_ as T,g as V,$ as j,H as M,h as H,a0 as R,a1 as B,Z as D,a2 as L,J as N,A as S,K as F,N as A,P as q}from"../chunks/vendor-0e3828d2.js";import{T as z}from"../chunks/ThemeSlider-85b26c78.js";import{httpGet as C}from"./__layout.svelte-17d039dd.js";function _(e,t,r){const n=e.slice();return n[4]=t[r],n}function G(e,t,r){const n=e.slice();return n[7]=t[r],n[9]=r,n}function O(e,t,r){const n=e.slice();return n[7]=t[r],n[9]=r,n}function P(e){let t,r,n,o,a,s;return{c(){t=i("video"),r=I("Your browser does not support HTML5 video."),n=i("source"),this.h()},l(e){t=f(e,"VIDEO",{class:!0,width:!0});var o=m(t);r=V(o,"Your browser does not support HTML5 video."),n=f(o,"SOURCE",{src:!0,type:!0}),o.forEach(d),this.h()},h(){B(n.src,o="/assets/vanillatweaks/"+e[0]+"/"+e[4].id+".webm")||u(n,"src",o),u(n,"type","video/webm"),u(t,"class","m-sm-2"),t.loop="",u(t,"width","267")},m(e,o){h(e,t,o),M(t,r),M(t,n),a||(s=[D(t,"error",ne),D(t,"mouseover",ae),D(t,"mouseout",oe)],a=!0)},p(e,t){3&t&&!B(n.src,o="/assets/vanillatweaks/"+e[0]+"/"+e[4].id+".webm")&&u(n,"src",o)},d(e){e&&d(t),a=!1,L(s)}}}function U(e){let t,r,n,o,a;return{c(){t=i("img"),this.h()},l(e){t=f(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){B(t.src,r="/assets/vanillatweaks/"+e[0]+"/"+e[4].id+".png")||u(t,"src",r),u(t,"alt",n="Represents"+e[4].name),u(t,"class","m-sm-2")},m(e,r){h(e,t,r),o||(a=D(t,"error",ne),o=!0)},p(e,o){3&o&&!B(t.src,r="/assets/vanillatweaks/"+e[0]+"/"+e[4].id+".png")&&u(t,"src",r),2&o&&n!==(n="Represents"+e[4].name)&&u(t,"alt",n)},d(e){e&&d(t),o=!1,a()}}}function J(e){let t,r=e[4].advDesc+"";return{c(){t=i("h6")},l(e){t=f(e,"H6",{}),m(t).forEach(d)},m(e,n){h(e,t,n),t.innerHTML=r},p(e,n){2&n&&r!==(r=e[4].advDesc+"")&&(t.innerHTML=r)},d(e){e&&d(t)}}}function Y(e){let t,r=e[7]+"";return{c(){t=I(r)},l(e){t=V(e,r)},m(e,r){h(e,t,r)},p(e,n){2&n&&r!==(r=e[7]+"")&&H(t,r)},d(e){e&&d(t)}}}function K(e){let t,r,i,f,m=0==e[9]&&function(e){let t;return{c(){t=I("Supported Forge Versions :\r\n                ")},l(e){t=V(e,"Supported Forge Versions :\r\n                ")},m(e,r){h(e,t,r)},d(e){e&&d(t)}}}();return r=new R({props:{color:"primary",$$slots:{default:[Y]},$$scope:{ctx:e}}}),{c(){m&&m.c(),t=x(),n(r.$$.fragment),i=E()},l(e){m&&m.l(e),t=x(),o(r.$$.fragment,e),i=b(e)},m(e,n){m&&m.m(e,n),h(e,t,n),a(r,e,n),h(e,i,n),f=!0},p(e,t){const n={};2050&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){f||(s(r.$$.fragment,e),f=!0)},o(e){l(r.$$.fragment,e),f=!1},d(e){m&&m.d(e),e&&d(t),c(r,e),e&&d(i)}}}function Q(e){let t,r=e[7]+"";return{c(){t=I(r)},l(e){t=V(e,r)},m(e,r){h(e,t,r)},p(e,n){2&n&&r!==(r=e[7]+"")&&H(t,r)},d(e){e&&d(t)}}}function Z(e){let t,r,i,f,m=0==e[9]&&function(e){let t;return{c(){t=I("Supported Fabric Versions :\r\n                ")},l(e){t=V(e,"Supported Fabric Versions :\r\n                ")},m(e,r){h(e,t,r)},d(e){e&&d(t)}}}();return r=new R({props:{color:"primary",$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){m&&m.c(),t=x(),n(r.$$.fragment),i=E()},l(e){m&&m.l(e),t=x(),o(r.$$.fragment,e),i=b(e)},m(e,n){m&&m.m(e,n),h(e,t,n),a(r,e,n),h(e,i,n),f=!0},p(e,t){const n={};2050&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){f||(s(r.$$.fragment,e),f=!0)},o(e){l(r.$$.fragment,e),f=!1},d(e){m&&m.d(e),e&&d(t),c(r,e),e&&d(i)}}}function W(e){let t,r,n,o,a,c,v,w,y,k,x,R,B,D,L,N,S,F=e[4].name+"",A=e[4].desc+"";function q(e,t){return null==e[4].video||0==e[4].video?U:P}let z=q(e),C=z(e),_=null!=e[4].advDesc&&J(e),Y=e[4].versions,Q=[];for(let s=0;s<Y.length;s+=1)Q[s]=K(O(e,Y,s));const W=e=>l(Q[e],1,1,(()=>{Q[e]=null}));let X=e[4].fabric_versions,ee=[];for(let s=0;s<X.length;s+=1)ee[s]=Z(G(e,X,s));const te=e=>l(ee[e],1,1,(()=>{ee[e]=null}));return{c(){t=i("div"),C.c(),r=E(),n=i("div"),o=i("h3"),a=i("b"),c=I(F),v=E(),w=i("div"),y=i("h6"),k=new T,x=i("br"),R=E(),_&&_.c(),B=E(),D=i("h6");for(let e=0;e<Q.length;e+=1)Q[e].c();L=E(),N=i("h6");for(let e=0;e<ee.length;e+=1)ee[e].c();this.h()},l(e){t=f(e,"DIV",{class:!0});var s=m(t);C.l(s),s.forEach(d),r=b(e),n=f(e,"DIV",{class:!0});var l=m(n);o=f(l,"H3",{});var i=m(o);a=f(i,"B",{});var u=m(a);c=V(u,F),u.forEach(d),i.forEach(d),v=b(l),w=f(l,"DIV",{name:!0});var h=m(w);y=f(h,"H6",{});var $=m(y);k=j($),x=f($,"BR",{}),$.forEach(d),h.forEach(d),R=b(l),_&&_.l(l),B=b(l),D=f(l,"H6",{});var g=m(D);for(let t=0;t<Q.length;t+=1)Q[t].l(g);g.forEach(d),L=b(l),N=f(l,"H6",{});var p=m(N);for(let t=0;t<ee.length;t+=1)ee[t].l(p);p.forEach(d),l.forEach(d),this.h()},h(){u(t,"class","image-region col-md-3"),k.a=x,u(w,"name","description"),u(n,"class","text-region col-md-9 p-4")},m(e,s){h(e,t,s),C.m(t,null),h(e,r,s),h(e,n,s),M(n,o),M(o,a),M(a,c),M(n,v),M(n,w),M(w,y),k.m(A,y),M(y,x),M(n,R),_&&_.m(n,null),M(n,B),M(n,D);for(let t=0;t<Q.length;t+=1)Q[t].m(D,null);M(n,L),M(n,N);for(let t=0;t<ee.length;t+=1)ee[t].m(N,null);S=!0},p(e,r){if(z===(z=q(e))&&C?C.p(e,r):(C.d(1),C=z(e),C&&(C.c(),C.m(t,null))),(!S||2&r)&&F!==(F=e[4].name+"")&&H(c,F),(!S||2&r)&&A!==(A=e[4].desc+"")&&k.p(A),null!=e[4].advDesc?_?_.p(e,r):(_=J(e),_.c(),_.m(n,B)):_&&(_.d(1),_=null),2&r){let t;for(Y=e[4].versions,t=0;t<Y.length;t+=1){const n=O(e,Y,t);Q[t]?(Q[t].p(n,r),s(Q[t],1)):(Q[t]=K(n),Q[t].c(),s(Q[t],1),Q[t].m(D,null))}for($(),t=Y.length;t<Q.length;t+=1)W(t);g()}if(2&r){let t;for(X=e[4].fabric_versions,t=0;t<X.length;t+=1){const n=G(e,X,t);ee[t]?(ee[t].p(n,r),s(ee[t],1)):(ee[t]=Z(n),ee[t].c(),s(ee[t],1),ee[t].m(N,null))}for($(),t=X.length;t<ee.length;t+=1)te(t);g()}},i(e){if(!S){for(let e=0;e<Y.length;e+=1)s(Q[e]);for(let e=0;e<X.length;e+=1)s(ee[e]);S=!0}},o(e){Q=Q.filter(Boolean);for(let t=0;t<Q.length;t+=1)l(Q[t]);ee=ee.filter(Boolean);for(let t=0;t<ee.length;t+=1)l(ee[t]);S=!1},d(e){e&&d(t),C.d(),e&&d(r),e&&d(n),_&&_.d(),p(Q,e),p(ee,e)}}}function X(e){let t,r;return t=new k({props:{noGutters:!0,$$slots:{default:[W]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};2051&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function ee(e){let t,r,i;return t=new y({props:{class:"p-0",$$slots:{default:[X]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment),r=E()},l(e){o(t.$$.fragment,e),r=b(e)},m(e,n){a(t,e,n),h(e,r,n),i=!0},p(e,r){const n={};2051&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){i||(s(t.$$.fragment,e),i=!0)},o(e){l(t.$$.fragment,e),i=!1},d(e){c(t,e),e&&d(r)}}}function te(e){let t,r;return t=new w({props:{class:e[2],$$slots:{default:[ee]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};2051&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function re(e){let t,r,n,o=e[1],a=[];for(let s=0;s<o.length;s+=1)a[s]=te(_(e,o,s));const c=e=>l(a[e],1,1,(()=>{a[e]=null}));return{c(){t=i("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=f(e,"DIV",{id:!0});var r=m(t);for(let t=0;t<a.length;t+=1)a[t].l(r);r.forEach(d),this.h()},h(){u(t,"id",r=e[0]+"-module"),t.hidden=!0},m(e,r){h(e,t,r);for(let n=0;n<a.length;n+=1)a[n].m(t,null);n=!0},p(e,[l]){if(7&l){let r;for(o=e[1],r=0;r<o.length;r+=1){const n=_(e,o,r);a[r]?(a[r].p(n,l),s(a[r],1)):(a[r]=te(n),a[r].c(),s(a[r],1),a[r].m(t,null))}for($(),r=o.length;r<a.length;r+=1)c(r);g()}(!n||1&l&&r!==(r=e[0]+"-module"))&&u(t,"id",r)},i(e){if(!n){for(let e=0;e<o.length;e+=1)s(a[e]);n=!0}},o(e){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)l(a[t]);n=!1},d(e){e&&d(t),p(a,e)}}}function ne(e){var t=e.srcElement;t.onerror=null;var r=t.parentElement;r.parentElement.removeChild(r),console.log("Removed image region because image src="+t.getAttribute("src")+" was not found.")}function oe(e){e.target.pause()}function ae(e){e.target.paused&&e.target.play()}function se(e,t,r){let{moduleName:n}=t,{json:o}=t,a="light"===v("currentTheme")?"bg-light wiki-card":"bg-dark wiki-card";return e.$$set=e=>{"moduleName"in e&&r(0,n=e.moduleName),"json"in e&&r(1,o=e.json)},[n,o,a]}class le extends e{constructor(e){super(),t(this,e,se,re,r,{moduleName:0,json:1})}}function ce(e,t,r){const n=e.slice();return n[3]=t[r],n}function ie(e,t,r){const n=e.slice();return n[3]=t[r],n}function fe(e){let t,r,n;return{c(){t=i("div"),r=i("h3"),n=I("VanillaTweaks"),this.h()},l(e){t=f(e,"DIV",{class:!0});var o=m(t);r=f(o,"H3",{class:!0,id:!0});var a=m(r);n=V(a,"VanillaTweaks"),a.forEach(d),o.forEach(d),this.h()},h(){u(r,"class","display-1"),u(r,"id","title"),u(t,"class","col-12 mt-4 mb-5 text-center")},m(e,o){h(e,t,o),M(t,r),M(r,n)},d(e){e&&d(t)}}}function me(e){let t,r;return t=new k({props:{$$slots:{default:[fe]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};256&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function de(e){let t;return{c(){t=I("Home")},l(e){t=V(e,"Home")},m(e,r){h(e,t,r)},d(e){e&&d(t)}}}function ue(e){let t,r,n=e[1],o=[];for(let s=0;s<n.length;s+=1)o[s]=$e(ie(e,n,s));const a=e=>l(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=x()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=x()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);h(e,t,n),r=!0},p(e,r){if(6&r){let l;for(n=e[1],l=0;l<n.length;l+=1){const a=ie(e,n,l);o[l]?(o[l].p(a,r),s(o[l],1)):(o[l]=$e(a),o[l].c(),s(o[l],1),o[l].m(t.parentNode,t))}for($(),l=n.length;l<o.length;l+=1)a(l);g()}},i(e){if(!r){for(let e=0;e<n.length;e+=1)s(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)l(o[t]);r=!1},d(e){p(o,e),e&&d(t)}}}function he(e){let t,r=ke(e[3])+"";return{c(){t=I(r)},l(e){t=V(e,r)},m(e,r){h(e,t,r)},p(e,n){2&n&&r!==(r=ke(e[3])+"")&&H(t,r)},d(e){e&&d(t)}}}function $e(e){let t,r;return t=new q({props:{id:e[3],$$slots:{default:[he]},$$scope:{ctx:e}}}),t.$on("click",e[2]),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};2&r&&(n.id=e[3]),258&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function ge(e){let t,r,i,f;t=new q({props:{active:!0,id:"home",$$slots:{default:[de]},$$scope:{ctx:e}}}),t.$on("click",e[2]);let m=null!=e[1]&&ue(e);return{c(){n(t.$$.fragment),r=E(),m&&m.c(),i=x()},l(e){o(t.$$.fragment,e),r=b(e),m&&m.l(e),i=x()},m(e,n){a(t,e,n),h(e,r,n),m&&m.m(e,n),h(e,i,n),f=!0},p(e,r){const n={};256&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n),null!=e[1]?m?(m.p(e,r),2&r&&s(m,1)):(m=ue(e),m.c(),s(m,1),m.m(i.parentNode,i)):m&&($(),l(m,1,1,(()=>{m=null})),g())},i(e){f||(s(t.$$.fragment,e),s(m),f=!0)},o(e){l(t.$$.fragment,e),l(m),f=!1},d(e){c(t,e),e&&d(r),m&&m.d(e),e&&d(i)}}}function pe(e){let t,r,n=e[1],o=[];for(let s=0;s<n.length;s+=1)o[s]=ve(ce(e,n,s));const a=e=>l(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=x()},l(e){for(let t=0;t<o.length;t+=1)o[t].l(e);t=x()},m(e,n){for(let t=0;t<o.length;t+=1)o[t].m(e,n);h(e,t,n),r=!0},p(e,r){if(3&r){let l;for(n=e[1],l=0;l<n.length;l+=1){const a=ce(e,n,l);o[l]?(o[l].p(a,r),s(o[l],1)):(o[l]=ve(a),o[l].c(),s(o[l],1),o[l].m(t.parentNode,t))}for($(),l=n.length;l<o.length;l+=1)a(l);g()}},i(e){if(!r){for(let e=0;e<n.length;e+=1)s(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)l(o[t]);r=!1},d(e){p(o,e),e&&d(t)}}}function ve(e){let t,r;return t=new le({props:{moduleName:e[3],json:e[0][e[3]]}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};2&r&&(n.moduleName=e[3]),3&r&&(n.json=e[0][e[3]]),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function we(e){let t,r,p,v,w,y,k,x,T,j,H,R,B,D,L,N,S,F,q,C,_,G,O,P,U,J,Y,K,Q,Z,W,X,ee,te,re,ne,oe,ae,se,le,ce,ie,fe,me,de,ue,he,$e,ve,we,ye,Ee,be,ke,xe,Ie,Te,Ve,je,Me,He,Re,Be,De,Le,Ne,Se;t=new A({props:{class:"nav-pills nav-fill justify-content-center mb-5 vt-nav",$$slots:{default:[ge]},$$scope:{ctx:e}}});let Fe=null!=e[1]&&null!=e[0]&&pe(e);return Ne=new z({}),{c(){n(t.$$.fragment),r=E(),p=i("div"),v=i("p"),w=i("strong"),y=I("VanillaTweaks"),k=I(" is a mod for Minecraft ported from\r\n          "),x=i("a"),T=I("Craft++"),j=I(" mod. Many more feautures were added. This mod aims to enhance Minecraft\r\n          without going overboard."),H=E(),R=i("p"),B=I("VanillaTweaks is extremely configurable. Everything from enabling and\r\n          disabling enchantments to hoe as sickle can be configured straight\r\n          from the config GUI, accessible from the mods menu or the game menu.\r\n          It is advised to delete your config file every time you update Vanilla\r\n          Tweaks, for the configuration options may have changed."),D=E(),L=i("p"),N=I("I hope you enjoy playing this mod as much as I have enjoyed learning\r\n          about modding and building it!"),S=E(),F=i("p"),q=i("em"),C=I("-- StrikerRocker"),_=E(),G=i("br"),O=E(),P=i("h3"),U=I("How to install"),J=E(),Y=i("ol"),K=i("li"),Q=I("VanillaTweaks requires Minecraft with forge. Download the forge\r\n            install from "),Z=i("a"),W=I("here"),X=I(" and\r\n            run it."),ee=E(),te=i("li"),re=I("Download the latest version of VanillaTweaks from curseforge.com and\r\n            put the .jar file in your mods folder. This normally lives in the\r\n            same folder as your resourcepacks folder."),ne=E(),oe=i("li"),ae=I("Run the game from your Minecraft launcher using your "),se=i("strong"),le=I("new Forge"),ce=I(" profile."),ie=I("\r\n        (There are tutorials on how to set up Forge"),fe=i("a"),me=I("here"),de=I("\r\n        and "),ue=i("a"),he=I("here"),$e=I("\r\n        if you're stuck.)\r\n        "),ve=i("br"),we=i("br"),ye=i("br"),Ee=E(),be=i("h3"),ke=I("Links"),xe=E(),Ie=i("ul"),Te=i("li"),Ve=i("a"),je=I("CurseForge"),Me=E(),He=i("li"),Re=i("a"),Be=I("Source code on github"),De=E(),Fe&&Fe.c(),Le=E(),n(Ne.$$.fragment),this.h()},l(e){o(t.$$.fragment,e),r=b(e),p=f(e,"DIV",{id:!0});var n=m(p);v=f(n,"P",{});var a=m(v);w=f(a,"STRONG",{});var s=m(w);y=V(s,"VanillaTweaks"),s.forEach(d),k=V(a," is a mod for Minecraft ported from\r\n          "),x=f(a,"A",{href:!0,class:!0});var l=m(x);T=V(l,"Craft++"),l.forEach(d),j=V(a," mod. Many more feautures were added. This mod aims to enhance Minecraft\r\n          without going overboard."),a.forEach(d),H=b(n),R=f(n,"P",{});var c=m(R);B=V(c,"VanillaTweaks is extremely configurable. Everything from enabling and\r\n          disabling enchantments to hoe as sickle can be configured straight\r\n          from the config GUI, accessible from the mods menu or the game menu.\r\n          It is advised to delete your config file every time you update Vanilla\r\n          Tweaks, for the configuration options may have changed."),c.forEach(d),D=b(n),L=f(n,"P",{});var i=m(L);N=V(i,"I hope you enjoy playing this mod as much as I have enjoyed learning\r\n          about modding and building it!"),i.forEach(d),S=b(n),F=f(n,"P",{});var u=m(F);q=f(u,"EM",{});var h=m(q);C=V(h,"-- StrikerRocker"),h.forEach(d),u.forEach(d),_=b(n),G=f(n,"BR",{}),O=b(n),P=f(n,"H3",{});var $=m(P);U=V($,"How to install"),$.forEach(d),J=b(n),Y=f(n,"OL",{});var g=m(Y);K=f(g,"LI",{});var E=m(K);Q=V(E,"VanillaTweaks requires Minecraft with forge. Download the forge\r\n            install from "),Z=f(E,"A",{href:!0,class:!0});var I=m(Z);W=V(I,"here"),I.forEach(d),X=V(E," and\r\n            run it."),E.forEach(d),ee=b(g),te=f(g,"LI",{});var M=m(te);re=V(M,"Download the latest version of VanillaTweaks from curseforge.com and\r\n            put the .jar file in your mods folder. This normally lives in the\r\n            same folder as your resourcepacks folder."),M.forEach(d),ne=b(g),oe=f(g,"LI",{});var A=m(oe);ae=V(A,"Run the game from your Minecraft launcher using your "),se=f(A,"STRONG",{});var z=m(se);le=V(z,"new Forge"),z.forEach(d),ce=V(A," profile."),A.forEach(d),g.forEach(d),ie=V(n,"\r\n        (There are tutorials on how to set up Forge"),fe=f(n,"A",{href:!0,class:!0});var ge=m(fe);me=V(ge,"here"),ge.forEach(d),de=V(n,"\r\n        and "),ue=f(n,"A",{href:!0,class:!0});var pe=m(ue);he=V(pe,"here"),pe.forEach(d),$e=V(n,"\r\n        if you're stuck.)\r\n        "),ve=f(n,"BR",{}),we=f(n,"BR",{}),ye=f(n,"BR",{}),Ee=b(n),be=f(n,"H3",{});var Se=m(be);ke=V(Se,"Links"),Se.forEach(d),xe=b(n),Ie=f(n,"UL",{});var Ae=m(Ie);Te=f(Ae,"LI",{});var qe=m(Te);Ve=f(qe,"A",{href:!0,class:!0});var ze=m(Ve);je=V(ze,"CurseForge"),ze.forEach(d),qe.forEach(d),Me=b(Ae),He=f(Ae,"LI",{});var Ce=m(He);Re=f(Ce,"A",{href:!0,class:!0});var _e=m(Re);Be=V(_e,"Source code on github"),_e.forEach(d),Ce.forEach(d),Ae.forEach(d),n.forEach(d),De=b(e),Fe&&Fe.l(e),Le=b(e),o(Ne.$$.fragment,e),this.h()},h(){u(x,"href","https://minecraft.curseforge.com/projects/craft-by-anon10w1z"),u(x,"class","svelte-gq7fzv"),u(Z,"href","http://files.minecraftforge.net/"),u(Z,"class","svelte-gq7fzv"),u(fe,"href","https://minecraft.gamepedia.com/Mods/Installing_Forge_mods"),u(fe,"class","svelte-gq7fzv"),u(ue,"href","https://www.wikihow.com/Install-Minecraft-Forge"),u(ue,"class","svelte-gq7fzv"),u(Ve,"href","https://minecraft.curseforge.com/projects/vanillatweaks"),u(Ve,"class","svelte-gq7fzv"),u(Re,"href","https://github.com/StrikerRockers-Mods/VanillaTweaks/"),u(Re,"class","svelte-gq7fzv"),u(p,"id","home-module")},m(e,n){a(t,e,n),h(e,r,n),h(e,p,n),M(p,v),M(v,w),M(w,y),M(v,k),M(v,x),M(x,T),M(v,j),M(p,H),M(p,R),M(R,B),M(p,D),M(p,L),M(L,N),M(p,S),M(p,F),M(F,q),M(q,C),M(p,_),M(p,G),M(p,O),M(p,P),M(P,U),M(p,J),M(p,Y),M(Y,K),M(K,Q),M(K,Z),M(Z,W),M(K,X),M(Y,ee),M(Y,te),M(te,re),M(Y,ne),M(Y,oe),M(oe,ae),M(oe,se),M(se,le),M(oe,ce),M(p,ie),M(p,fe),M(fe,me),M(p,de),M(p,ue),M(ue,he),M(p,$e),M(p,ve),M(p,we),M(p,ye),M(p,Ee),M(p,be),M(be,ke),M(p,xe),M(p,Ie),M(Ie,Te),M(Te,Ve),M(Ve,je),M(Ie,Me),M(Ie,He),M(He,Re),M(Re,Be),h(e,De,n),Fe&&Fe.m(e,n),h(e,Le,n),a(Ne,e,n),Se=!0},p(e,r){const n={};258&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n),null!=e[1]&&null!=e[0]?Fe?(Fe.p(e,r),3&r&&s(Fe,1)):(Fe=pe(e),Fe.c(),s(Fe,1),Fe.m(Le.parentNode,Le)):Fe&&($(),l(Fe,1,1,(()=>{Fe=null})),g())},i(e){Se||(s(t.$$.fragment,e),s(Fe),s(Ne.$$.fragment,e),Se=!0)},o(e){l(t.$$.fragment,e),l(Fe),l(Ne.$$.fragment,e),Se=!1},d(e){c(t,e),e&&d(r),e&&d(p),e&&d(De),Fe&&Fe.d(e),e&&d(Le),c(Ne,e)}}}function ye(e){let t,r;return t=new F({props:{$$slots:{default:[we]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};259&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function Ee(e){let t,r;return t=new k({props:{$$slots:{default:[ye]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){o(t.$$.fragment,e)},m(e,n){a(t,e,n),r=!0},p(e,r){const n={};259&r&&(n.$$scope={dirty:r,ctx:e}),t.$set(n)},i(e){r||(s(t.$$.fragment,e),r=!0)},o(e){l(t.$$.fragment,e),r=!1},d(e){c(t,e)}}}function be(e){let t,r,$,g,p,v,w;return g=new N({props:{fluid:!0,$$slots:{default:[me]},$$scope:{ctx:e}}}),v=new N({props:{$$slots:{default:[Ee]},$$scope:{ctx:e}}}),{c(){t=i("div"),r=i("header"),$=E(),n(g.$$.fragment),p=E(),n(v.$$.fragment),this.h()},l(e){t=f(e,"DIV",{id:!0});var n=m(t);r=f(n,"HEADER",{class:!0}),m(r).forEach(d),$=b(n),o(g.$$.fragment,n),n.forEach(d),p=b(e),o(v.$$.fragment,e),this.h()},h(){u(r,"class","container-fluid splash svelte-gq7fzv"),u(t,"id","header")},m(e,n){h(e,t,n),M(t,r),M(t,$),a(g,t,null),h(e,p,n),a(v,e,n),w=!0},p(e,[t]){const r={};256&t&&(r.$$scope={dirty:t,ctx:e}),g.$set(r);const n={};259&t&&(n.$$scope={dirty:t,ctx:e}),v.$set(n)},i(e){w||(s(g.$$.fragment,e),s(v.$$.fragment,e),w=!0)},o(e){l(g.$$.fragment,e),l(v.$$.fragment,e),w=!1},d(e){e&&d(t),c(g),e&&d(p),c(v,e)}}}function ke(e){return e.charAt(0).toUpperCase()+e.slice(1)}function xe(e,t,r){var n,o=null;return S((()=>{C("/assets/vanillatweaks/features.json",(e=>{for(var t in r(0,n=JSON.parse(e)),r(1,o=[]),n)o.push(t)}))})),[n,o,function(e){var t=e.target;Array.from(document.getElementsByClassName("nav-link")).forEach((e=>{e.classList.remove("active")})),t.classList.add("active"),document.getElementById("home-module").hidden=!0,o.forEach((e=>document.getElementById(e+"-module").hidden=!0)),document.getElementById(t.id+"-module").hidden=!1,"home"==t.id?document.getElementById("header").hidden=!1:document.getElementById("header").hidden=!0}]}class Ie extends e{constructor(e){super(),t(this,e,xe,be,r,{})}}export{Ie as default};
