import{P as E,Q as b,R as P,e as O,v as H,V as M,W as $,i as B,X as T,L as C,Y as j,Z as z,_ as L,$ as w,O as A,N as K,p,a0 as Q,a1 as X,a2 as Z,a3 as F,a4 as G,a5 as J,K as U,k as x,q as tt,m as N,t as et,z as rt}from"./runtime.CIblE3ht.js";import{b as at}from"./disclose-version.8t0kJPxb.js";let D=!1;function nt(){D||(D=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function V(t){var e=P,a=O;E(null),b(null);try{return t()}finally{E(e),b(a)}}function lt(t,e,a,i=a){t.addEventListener(e,()=>V(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),nt()}const I=new Set,R=new Set;function st(t,e,a,i){function n(r){if(i.capture||y.call(e,r),!r.cancelBubble)return V(()=>a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?M(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function ct(t,e,a,i,n){var r={capture:i,passive:n},f=st(t,e,a,r);(e===document.body||e===window||e===document)&&H(()=>{e.removeEventListener(t,f,r)})}function _t(t){for(var e=0;e<t.length;e++)I.add(t[e]);for(var a of R)a(t)}function y(t){var k;var e=this,a=e.ownerDocument,i=t.type,n=((k=t.composedPath)==null?void 0:k.call(t))||[],r=n[0]||t.target,f=0,h=t.__root;if(h){var l=n.indexOf(h);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var c=n.indexOf(e);if(c===-1)return;l<=c&&(f=l)}if(r=n[f]||t.target,r!==e){$(t,"currentTarget",{configurable:!0,get(){return r||a}});var m=P,u=O;E(null),b(null);try{for(var s,o=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(B(_)){var[Y,...q]=_;Y.apply(r,[t,...q])}else _.call(r,t)}catch(g){s?o.push(g):s=g}if(t.cancelBubble||d===e||d===null)break;r=d}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{t.__root=e,delete t.currentTarget,E(m),b(u)}}}const it=["touchstart","touchmove"];function ot(t){return it.includes(t)}function ht(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a==null?"":a+"")}function ft(t,e){return W(t,e)}function vt(t,e){T(),e.intro=e.intro??!1;const a=e.target,i=N,n=p;try{for(var r=C(a);r&&(r.nodeType!==8||r.data!==j);)r=z(r);if(!r)throw L;w(!0),A(r),K();const f=W(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==Q)throw X(),L;return w(!1),f}catch(f){if(f===L)return e.recover===!1&&Z(),T(),F(a),w(!1),ft(t,e);throw f}finally{w(i),A(n)}}const v=new Map;function W(t,{target:e,anchor:a,props:i={},events:n,context:r,intro:f=!0}){T();var h=new Set,l=u=>{for(var s=0;s<u.length;s++){var o=u[s];if(!h.has(o)){h.add(o);var d=ot(o);e.addEventListener(o,y,{passive:d});var _=v.get(o);_===void 0?(document.addEventListener(o,y,{passive:d}),v.set(o,1)):v.set(o,_+1)}}};l(G(I)),R.add(l);var c=void 0,m=J(()=>{var u=a??e.appendChild(U());return x(()=>{if(r){tt({});var s=rt;s.c=r}n&&(i.$$events=n),N&&at(u,null),c=t(u,i)||{},N&&(O.nodes_end=p),r&&et()}),()=>{var d;for(var s of h){e.removeEventListener(s,y);var o=v.get(s);--o===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,o)}R.delete(l),S.delete(c),u!==a&&((d=u.parentNode)==null||d.removeChild(u))}});return S.set(c,m),c}let S=new WeakMap;function pt(t){const e=S.get(t);e&&e()}export{nt as a,_t as d,ct as e,vt as h,lt as l,ft as m,ht as s,pt as u};