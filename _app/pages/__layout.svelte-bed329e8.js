import{S as e,i as t,s,D as n,E as a,F as o,G as u,x as c,u as r,y as l,C as p}from"../chunks/vendor-bfc84274.js";function d(e){let t;const s=e[1].default,l=n(s,e,e[0],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,[n]){l&&l.p&&(!t||1&n)&&a(l,s,e,e[0],t?u(s,e[0],n,null):o(e[0]),null)},i(e){t||(c(l,e),t=!0)},o(e){r(l,e),t=!1},d(e){l&&l.d(e)}}}function i(e,t,s){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&s(e,n.responseText)},n.open("GET",t,!0),n.send()}async function f(e,t){var s=new XMLHttpRequest;s.onreadystatechange=function(){4==s.readyState&&200==s.status&&t(s.responseText)},s.open("GET",e,!0),s.send()}function $(e,t,s){let{$$slots:n={},$$scope:a}=t,o=p("light");return l("current-theme",o),e.$$set=e=>{"$$scope"in e&&s(0,a=e.$$scope)},[a,n]}class h extends e{constructor(e){super(),t(this,e,$,d,s,{})}}export{h as default,f as httpGet,i as httpGetElement};