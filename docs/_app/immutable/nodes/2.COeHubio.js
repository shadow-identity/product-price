import{a as Z,t as oe}from"../chunks/disclose-version.8t0kJPxb.js";import{i as ie,h as K,o as ye,j as ge,m as E,N as ke,a4 as fe,a6 as be,a7 as Q,O as q,$ as P,p as D,a8 as C,a9 as ce,k as ue,aa as me,e as ee,ab as we,ac as Se,a3 as xe,ad as Ee,l as Ae,a0 as Te,R as Ne,w as Ie,s as te,ae as Oe,af as Me,ag as De,Z as Re,ah as Ce,ai as $e,aj as He,ak as Le,u as Je,al as Pe,q as Be,am as re,c as se,t as Ge,d,H as b,J as N,I as m,G as Ve,D as Ye}from"../chunks/runtime.CIblE3ht.js";import{a as je,l as Fe,d as Ke,e as ze,s as B}from"../chunks/render.DoIvpP_k.js";import{p as R}from"../chunks/proxy.siktq6NQ.js";import{a as Ue}from"../chunks/paths.1fRHRFQH.js";const We=[];function z(e,t=!1){return $(e,new Map,"",We)}function $(e,t,r,n,s=null){if(typeof e=="object"&&e!==null){const c=t.get(e);if(c!==void 0)return c;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(ie(e)){const u=[];t.set(e,u),s!==null&&t.set(s,u);for(let v=0;v<e.length;v+=1)u.push($(e[v],t,r,n));return u}if(K(e)===ye){const u={};t.set(e,u),s!==null&&t.set(s,u);for(var a in e)u[a]=$(e[a],t,r,n);return u}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function")return $(e.toJSON(),t,r,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function Xe(e,t){return t}function Ze(e,t,r,n){for(var s=[],a=t.length,c=0;c<a;c++)Se(t[c].e,s,!0);var u=a>0&&s.length===0&&r!==null;if(u){var v=r.parentNode;xe(v),v.append(r),n.clear(),I(e,t[0].prev,t[a-1].next)}Ee(s,()=>{for(var h=0;h<a;h++){var l=t[h];u||(n.delete(l.k),I(e,l.prev,l.next)),Ae(l.e,!u)}})}function Qe(e,t,r,n,s,a=null){var c=e,u={flags:t,items:new Map,first:null};E&&ke();var v=null,h=!1;ge(()=>{var l=r(),_=ie(l)?l:l==null?[]:fe(l),o=_.length;if(h&&o===0)return;h=o===0;let i=!1;if(E){var y=c.data===be;y!==(o===0)&&(c=Q(),q(c),P(!1),i=!0)}if(E){for(var w=null,k,f=0;f<o;f++){if(D.nodeType===8&&D.data===Te){c=D,i=!0,P(!1);break}var g=_[f],A=n(g,f);k=ve(D,u,w,null,g,A,f,s,t),u.items.set(A,k),w=k}o>0&&q(Q())}if(!E){var T=Ne;qe(_,u,c,s,t,(T.f&C)!==0,n)}a!==null&&(o===0?v?ce(v):v=ue(()=>a(c)):v!==null&&me(v,()=>{v=null})),i&&P(!0),r()}),E&&(c=D)}function qe(e,t,r,n,s,a,c){var u=e.length,v=t.items,h=t.first,l=h,_,o=null,i=[],y=[],w,k,f,g;for(g=0;g<u;g+=1){if(w=e[g],k=c(w,g),f=v.get(k),f===void 0){var A=l?l.e.nodes_start:r;o=ve(A,t,o,o===null?t.first:o.next,w,k,g,n,s),v.set(k,o),i=[],y=[],l=o.next;continue}if(et(f,w,g),f.e.f&C&&ce(f.e),f!==l){if(_!==void 0&&_.has(f)){if(i.length<y.length){var T=y[0],S;o=T.prev;var p=i[0],x=i[i.length-1];for(S=0;S<i.length;S+=1)ae(i[S],T,r);for(S=0;S<y.length;S+=1)_.delete(y[S]);I(t,p.prev,x.next),I(t,o,p),I(t,x,T),l=T,o=x,g-=1,i=[],y=[]}else _.delete(f),ae(f,l,r),I(t,f.prev,f.next),I(t,f,o===null?t.first:o.next),I(t,o,f),o=f;continue}for(i=[],y=[];l!==null&&l.k!==k;)(a||!(l.e.f&C))&&(_??(_=new Set)).add(l),y.push(l),l=l.next;if(l===null)continue;f=l}i.push(f),o=f,l=f.next}if(l!==null||_!==void 0){for(var O=_===void 0?[]:fe(_);l!==null;)(a||!(l.e.f&C))&&O.push(l),l=l.next;var M=O.length;if(M>0){var H=null;Ze(t,O,H,v)}}ee.first=t.first&&t.first.e,ee.last=o&&o.e}function et(e,t,r,n){we(e.v,t),e.i=r}function ve(e,t,r,n,s,a,c,u,v){var h=(v&Me)!==0,l=(v&De)===0,_=h?l?Ie(s):te(s):s,o=v&Oe?te(c):c,i={i:o,v:_,k:a,a:null,e:null,prev:r,next:n};try{return i.e=ue(()=>u(e,_,o),E),i.e.prev=r&&r.e,i.e.next=n&&n.e,r===null?t.first=i:(r.next=i,r.e.next=i.e),n!==null&&(n.prev=i,n.e.prev=i.e),i}finally{}}function ae(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,a=e.e.nodes_start;a!==n;){var c=Re(a);s.before(a),a=c}}function I(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function G(e){if(E){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;U(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var s=e.checked;U(e,"checked",null),e.checked=s}}};e.__on_r=r,$e(r),je()}}function U(e,t,r,n){var s=e.__attributes??(e.__attributes={});E&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[He]=r),r==null?e.removeAttribute(t):typeof r!="string"&&tt(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var ne=new Map;function tt(e){var t=ne.get(e.nodeName);if(t)return t;ne.set(e.nodeName,t=[]);for(var r,n=K(e),s=Element.prototype;s!==n;){r=Ce(n);for(var a in r)r[a].set&&t.push(a);n=K(n)}return t}function V(e,t,r=t){var n=Le();Fe(e,"input",s=>{var a=s?e.defaultValue:e.value;a=Y(e)?j(a):a,r(a),n&&a!==(a=t())&&(e.value=a??"")}),(E&&e.defaultValue!==e.value||Je(t)==null&&e.value)&&r(Y(e)?j(e.value):e.value),Pe(()=>{var s=t();Y(e)&&s===j(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Y(e){var t=e.type;return t==="number"||t==="range"}function j(e){return e===""?null:+e}const rt=!1,st=!0,pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:st,ssr:rt},Symbol.toStringTag,{value:"Module"}));function W(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function at(e,t){const r=indexedDB.open(e);r.onupgradeneeded=()=>r.result.createObjectStore(t);const n=W(r);return(s,a)=>n.then(c=>a(c.transaction(t,s).objectStore(t)))}let F;function de(){return F||(F=at("keyval-store","keyval")),F}function nt(e,t=de()){return t("readonly",r=>W(r.get(e)))}function le(e,t,r=de()){return r("readwrite",n=>(n.put(t,e),W(n.transaction)))}const lt=async(e,t)=>{const n=`Продукты, ${new Date().toLocaleString()}`,s=JSON.stringify(z(d(t)),null,"  "),a=[new File([s],`${n}.json`,{type:"text/plain"})];navigator.canShare({files:a})&&await navigator.share({title:n,files:a})};var ot=(e,t,r)=>t(d(r)),it=oe('<tr><td class="svelte-sk5p71"> </td><td class="svelte-sk5p71"> </td><td class="svelte-sk5p71"> </td><td class="svelte-sk5p71"><button type="button" aria-label="Удалить" class="svelte-sk5p71">🗑</button></td></tr>'),ft=oe('<table class="svelte-sk5p71"><thead class="svelte-sk5p71"><tr><th class="svelte-sk5p71">Категория</th><th class="svelte-sk5p71">Продукт</th><th class="svelte-sk5p71">Цена</th><th class="svelte-sk5p71"></th></tr></thead><tbody class="svelte-sk5p71"><tr><td class="svelte-sk5p71"><input type="text" class="svelte-sk5p71"></td><td class="svelte-sk5p71"><input type="text" class="svelte-sk5p71"></td><td class="svelte-sk5p71"><input type="number" class="svelte-sk5p71"></td><td class="svelte-sk5p71"><button type="button" class="svelte-sk5p71"><img alt="Share" class="svelte-sk5p71"></button></td></tr><!></tbody></table>');function ht(e,t){Be(t,!0);const r="products",n=()=>({category:"",name:"",price:0});let s=re(R([]));nt(r).then((p=[])=>{se(s,R(p))});let a=re(R(n()));const c=p=>{p.key==="Enter"&&(d(s).push(d(a)),se(a,R(n())),le(r,z(d(s))).then(()=>console.log("worked")).catch(()=>console.log("failed")))},u=Ye(()=>d(a).category?d(s).filter(({category:p})=>p.startsWith(d(a).category)):d(s)),v=p=>{const x=d(s).indexOf(p);d(s).splice(x,1),le(r,z(d(s)))};var h=ft(),l=N(b(h)),_=b(l),o=b(_),i=b(o);G(i),m(o);var y=N(o),w=b(y);G(w),m(y);var k=N(y),f=b(k);G(f),m(k);var g=N(k),A=b(g);A.__click=[lt,s];var T=b(A);U(T,"src",`${Ue}/share.svg`),m(A),m(g),m(_);var S=N(_);Qe(S,17,()=>d(u),Xe,(p,x)=>{var O=it(),M=b(O),H=b(M,!0);m(M);var L=N(M),_e=b(L,!0);m(L);var J=N(L),pe=b(J,!0);m(J);var X=N(J),he=b(X);he.__click=[ot,v,x],m(X),m(O),Ve(()=>{B(H,d(x).category),B(_e,d(x).name),B(pe,d(x).price)}),Z(p,O)}),m(l),m(h),ze("keypress",_,c),V(i,()=>d(a).category,p=>d(a).category=p),V(w,()=>d(a).name,p=>d(a).name=p),V(f,()=>d(a).price,p=>d(a).price=p),Z(e,h),Ge()}Ke(["click"]);export{ht as component,pt as universal};