import{C as b,X as w,Y as m}from"./runtime.Bfoy81my.js";function q(e,r,t){if(e==null)return r(void 0),t&&t(void 0),b;const n=e.subscribe(r,t);return n.unsubscribe?()=>n.unsubscribe():n}const f=[];function x(e,r){return{subscribe:z(e,r).subscribe}}function z(e,r=b){let t=null;const n=new Set;function i(u){if(m(e,u)&&(e=u,t)){const o=!f.length;for(const s of n)s[1](),f.push(s,e);if(o){for(let s=0;s<f.length;s+=2)f[s][0](f[s+1]);f.length=0}}}function l(u){i(u(e))}function a(u,o=b){const s=[u,o];return n.add(s),n.size===1&&(t=r(i,l)||b),u(e),()=>{n.delete(s),n.size===0&&t&&(t(),t=null)}}return{set:i,update:l,subscribe:a}}function B(e,r,t){const n=!Array.isArray(e),i=n?[e]:e;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=r.length<2;return x(t,(a,u)=>{let o=!1;const s=[];let d=0,p=b;const y=()=>{if(d)return;p();const c=r(n?s[0]:s,a,u);l?a(c):p=typeof c=="function"?c:b},_=i.map((c,g)=>q(c,h=>{s[g]=h,d&=~(1<<g),o&&y()},()=>{d|=1<<g}));return o=!0,y(),function(){w(_),p(),o=!1}})}export{B as d,q as s,z as w};
