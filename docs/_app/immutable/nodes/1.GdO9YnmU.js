import{a as d,t as v}from"../chunks/disclose-version.8t0kJPxb.js";import{x as h,y as p,z as x,u as $,A as y,B as u,d as _,C as k,D as q,F as z,q as A,r as B,G as C,t as D,H as l,I as g,J as E}from"../chunks/runtime.CIblE3ht.js";import{s as m}from"../chunks/render.DoIvpP_k.js";import{s as F,a as G}from"../chunks/store.4hcxDdJV.js";import{s as H}from"../chunks/entry.jqc4T3cB.js";function I(s=!1){const e=x,t=e.l.u;if(!t)return;let n=()=>k(e.s);if(s){let a=0,r={};const f=q(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(f)}t.b.length&&h(()=>{b(e,n),u(t.b)}),p(()=>{const a=$(()=>t.m.map(y));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&p(()=>{b(e,n),u(t.a)})}function b(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}z();const J=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},S={subscribe(s){return J().page.subscribe(s)}};var j=v("<h1> </h1> <p> </p>",1);function O(s,e){A(e,!1);const t=F(),n=()=>G(S,"$page",t);I();var a=j(),r=B(a),f=l(r,!0);g(r);var i=E(r,2),c=l(i,!0);g(i),C(()=>{var o;m(f,n().status),m(c,(o=n().error)==null?void 0:o.message)}),d(s,a),D()}export{O as component};