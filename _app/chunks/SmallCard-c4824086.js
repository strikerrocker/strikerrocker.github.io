import{S as q,i as I,s as M,O as Q,e as P,k as C,w as d,c as V,m as T,x as g,g as $,y as p,q as i,o as _,d as m,B as h,l as k,n as S,p as j,P as R,Q as A,T as E,t as w,h as N,K as H,U,V as W,W as X,a as Y,b as B,J as z,X as D,j as J,Y as F}from"./vendor-5bc27e00.js";import{currentPageTheme as G}from"../pages/__layout.svelte-d3434455.js";function K(s,t,r){const e=s.slice();return e[2]=t[r].Name,e[3]=t[r].href,e[5]=r,e}function Z(s){let t,r;return t=new A({props:{$$slots:{default:[te]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,l){const a={};l&64&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function x(s){let t,r;return t=new A({props:{$$slots:{default:[le]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,l){const a={};l&64&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function ee(s){let t=s[2]+"",r;return{c(){r=w(t)},l(e){r=N(e,t)},m(e,l){$(e,r,l)},p:H,d(e){e&&m(r)}}}function te(s){let t,r;return t=new E({props:{href:s[3],$$slots:{default:[ee]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,l){const a={};l&64&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function re(s){let t=s[2]+"",r;return{c(){r=w(t)},l(e){r=N(e,t)},m(e,l){$(e,r,l)},p:H,d(e){e&&m(r)}}}function le(s){let t,r;return t=new E({props:{href:s[3],active:!0,$$slots:{default:[re]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,l){const a={};l&64&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function L(s){let t,r,e,l;const a=[x,Z],n=[];function f(c,u){return c[0]==c[2]?0:1}return t=f(s),r=n[t]=a[t](s),{c(){r.c(),e=k()},l(c){r.l(c),e=k()},m(c,u){n[t].m(c,u),$(c,e,u),l=!0},p(c,u){let b=t;t=f(c),t===b?n[t].p(c,u):(S(),_(n[b],1,1,()=>{n[b]=null}),j(),r=n[t],r?r.p(c,u):(r=n[t]=a[t](c),r.c()),i(r,1),r.m(e.parentNode,e))},i(c){l||(i(r),l=!0)},o(c){_(r),l=!1},d(c){n[t].d(c),c&&m(e)}}}function ne(s){let t,r,e=s[1],l=[];for(let n=0;n<e.length;n+=1)l[n]=L(K(s,e,n));const a=n=>_(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=k()},l(n){for(let f=0;f<l.length;f+=1)l[f].l(n);t=k()},m(n,f){for(let c=0;c<l.length;c+=1)l[c].m(n,f);$(n,t,f),r=!0},p(n,f){if(f&3){e=n[1];let c;for(c=0;c<e.length;c+=1){const u=K(n,e,c);l[c]?(l[c].p(u,f),i(l[c],1)):(l[c]=L(u),l[c].c(),i(l[c],1),l[c].m(t.parentNode,t))}for(S(),c=e.length;c<l.length;c+=1)a(c);j()}},i(n){if(!r){for(let f=0;f<e.length;f+=1)i(l[f]);r=!0}},o(n){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)_(l[f]);r=!1},d(n){R(l,n),n&&m(t)}}}function ae(s){let t,r,e,l;return e=new Q({props:{pills:!0,class:"justify-content-center mb-5",$$slots:{default:[ne]},$$scope:{ctx:s}}}),{c(){t=P("br"),r=C(),d(e.$$.fragment)},l(a){t=V(a,"BR",{}),r=T(a),g(e.$$.fragment,a)},m(a,n){$(a,t,n),$(a,r,n),p(e,a,n),l=!0},p(a,[n]){const f={};n&65&&(f.$$scope={dirty:n,ctx:a}),e.$set(f)},i(a){l||(i(e.$$.fragment,a),l=!0)},o(a){_(e.$$.fragment,a),l=!1},d(a){a&&m(t),a&&m(r),h(e,a)}}}function se(s,t,r){let e=[{Name:"Home",href:"/"},{Name:"My Mods",href:"/mods"},{Name:"VanillaTweaks",href:"/vanillatweaks"}],{current_page:l}=t;return s.$$set=a=>{"current_page"in a&&r(0,l=a.current_page)},[l,e]}class pe extends q{constructor(t){super();I(this,t,se,ae,M,{current_page:0})}}function fe(s){let t;return{c(){t=w(s[3])},l(r){t=N(r,s[3])},m(r,e){$(r,t,e)},p(r,e){e&8&&J(t,r[3])},d(r){r&&m(t)}}}function O(s){let t,r;return t=new F({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,l){const a={};l&1040&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}function ce(s){let t;return{c(){t=w(s[4])},l(r){t=N(r,s[4])},m(r,e){$(r,t,e)},p(r,e){e&16&&J(t,r[4])},d(r){r&&m(t)}}}function oe(s){let t,r,e,l;t=new D({props:{class:"card_text",$$slots:{default:[fe]},$$scope:{ctx:s}}});let a=s[4]!=null&&O(s);return{c(){d(t.$$.fragment),r=C(),a&&a.c(),e=k()},l(n){g(t.$$.fragment,n),r=T(n),a&&a.l(n),e=k()},m(n,f){p(t,n,f),$(n,r,f),a&&a.m(n,f),$(n,e,f),l=!0},p(n,f){const c={};f&1032&&(c.$$scope={dirty:f,ctx:n}),t.$set(c),n[4]!=null?a?(a.p(n,f),f&16&&i(a,1)):(a=O(n),a.c(),i(a,1),a.m(e.parentNode,e)):a&&(S(),_(a,1,1,()=>{a=null}),j())},i(n){l||(i(t.$$.fragment,n),i(a),l=!0)},o(n){_(t.$$.fragment,n),_(a),l=!1},d(n){h(t,n),n&&m(r),a&&a.d(n),n&&m(e)}}}function ie(s){let t,r,e,l,a;return r=new W({props:{top:!0,src:s[1],alt:s[6],style:_e}}),l=new X({props:{class:s[2]===!0?"info_card center":"mod_card center",style:me,$$slots:{default:[oe]},$$scope:{ctx:s}}}),{c(){t=P("a"),d(r.$$.fragment),e=C(),d(l.$$.fragment),this.h()},l(n){t=V(n,"A",{href:!0,target:!0});var f=Y(t);g(r.$$.fragment,f),e=T(f),g(l.$$.fragment,f),f.forEach(m),this.h()},h(){B(t,"href",s[0]),B(t,"target","_blank")},m(n,f){$(n,t,f),p(r,t,null),z(t,e),p(l,t,null),a=!0},p(n,f){const c={};f&2&&(c.src=n[1]),f&64&&(c.alt=n[6]),r.$set(c);const u={};f&4&&(u.class=n[2]===!0?"info_card center":"mod_card center"),f&1048&&(u.$$scope={dirty:f,ctx:n}),l.$set(u),(!a||f&1)&&B(t,"href",n[0])},i(n){a||(i(r.$$.fragment,n),i(l.$$.fragment,n),a=!0)},o(n){_(r.$$.fragment,n),_(l.$$.fragment,n),a=!1},d(n){n&&m(t),h(r),h(l)}}}function ue(s){let t,r;return t=new U({props:{class:s[8],id:s[2]==!0?"":s[5],cf_id:s[7],style:"border-radius:20px;",$$slots:{default:[ie]},$$scope:{ctx:s}}}),{c(){d(t.$$.fragment)},l(e){g(t.$$.fragment,e)},m(e,l){p(t,e,l),r=!0},p(e,[l]){const a={};l&256&&(a.class=e[8]),l&36&&(a.id=e[2]==!0?"":e[5]),l&128&&(a.cf_id=e[7]),l&1119&&(a.$$scope={dirty:l,ctx:e}),t.$set(a)},i(e){r||(i(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){h(t,e)}}}let _e="border-top-left-radius:20px;border-top-right-radius:20px;",me="border-bottom-left-radius:20px;border-bottom-right-radius:20px;";function $e(s,t,r){let{href:e}=t,{src:l}=t,{small:a=!1}=t,{title:n}=t,{text:f=void 0}=t,{id:c}=t,{alt:u}=t,{cf_id:b=void 0}=t,y;G.subscribe(o=>y=o);let v=a===!0?"":"element ";return v=v+(y==="light"?"bg-light":"bg-dark"),v=v+" custom-card",s.$$set=o=>{"href"in o&&r(0,e=o.href),"src"in o&&r(1,l=o.src),"small"in o&&r(2,a=o.small),"title"in o&&r(3,n=o.title),"text"in o&&r(4,f=o.text),"id"in o&&r(5,c=o.id),"alt"in o&&r(6,u=o.alt),"cf_id"in o&&r(7,b=o.cf_id)},[e,l,a,n,f,c,u,b,v]}class he extends q{constructor(t){super();I(this,t,$e,ue,M,{href:0,src:1,small:2,title:3,text:4,id:5,alt:6,cf_id:7})}}export{pe as N,he as S};
