import{P as j,Q as S,S as r,ad as P,ae as h,Z as T,s as b,z as p,n as c,j as g,g as _,K as M,i as w,aa as z}from"./runtime.Bfoy81my.js";import{U as d}from"./disclose-version.CEbLymSa.js";function y(e,t=null,s){if(typeof e=="object"&&e!=null&&!j(e)&&!(S in e)){if(r in e){const n=e[r];if(n.t===e||n.p===e)return n.p}const o=z(e);if(o===P||o===h){const n=new Proxy(e,v);return T(e,r,{value:{s:new Map,v:b(0),a:p(e),p:n,t:e},writable:!0,enumerable:!1}),n}}return e}function m(e,t=1){c(e,e.v+t)}const v={defineProperty(e,t,s){if(s.value){const o=e[r],n=o.s.get(t);n!==void 0&&c(n,y(s.value,o))}return Reflect.defineProperty(e,t,s)},deleteProperty(e,t){const s=e[r],o=s.s.get(t),n=s.a,i=delete e[t];if(n&&i){const f=s.s.get("length"),u=e.length-1;f!==void 0&&f.v!==u&&c(f,u)}return o!==void 0&&c(o,d),i&&m(s.v),i},get(e,t,s){var i;if(t===r)return Reflect.get(e,r);const o=e[r];let n=o.s.get(t);if(n===void 0&&(!(t in e)||(i=g(e,t))!=null&&i.writable)&&(n=b(y(e[t],o)),o.s.set(t,n)),n!==void 0){const f=_(n);return f===d?void 0:f}return Reflect.get(e,t,s)},getOwnPropertyDescriptor(e,t){const s=Reflect.getOwnPropertyDescriptor(e,t);if(s&&"value"in s){const n=e[r].s.get(t);n&&(s.value=_(n))}return s},has(e,t){var i;if(t===r)return!0;const s=e[r],o=Reflect.has(e,t);let n=s.s.get(t);return(n!==void 0||M!==null&&(!o||(i=g(e,t))!=null&&i.writable))&&(n===void 0&&(n=b(o?y(e[t],s):d),s.s.set(t,n)),_(n)===d)?!1:o},set(e,t,s,o){const n=e[r];let i=n.s.get(t);i===void 0&&(w(()=>o[t]),i=n.s.get(t)),i!==void 0&&c(i,y(s,n));const f=n.a,u=!(t in e);if(f&&t==="length")for(let a=s;a<e.length;a+=1){const l=n.s.get(a+"");l!==void 0&&c(l,d)}if(e[t]=s,u){if(f){const a=n.s.get("length"),l=e.length;a!==void 0&&a.v!==l&&c(a,l)}m(n.v)}return!0},ownKeys(e){const t=e[r];return _(t.v),Reflect.ownKeys(e)}};function O(e){if(e!==null&&typeof e=="object"&&r in e){var t=e[r];if(t)return t.p}return e}function E(e,t){return Object.is(O(e),O(t))}const I=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),A=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),D=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),K=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),L=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),N=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Z=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{I as _,A as a,D as b,K as c,L as d,N as e,Z as f,O as g,E as i,y as p};