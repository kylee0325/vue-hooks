import{_ as c,n as i,r as p,c as _,d as a,t as v,p as m,v as f,a as l,w as u,F as g,o as S,e as d}from"./app.3968e24d.js";import{u as x}from"./useStorage.4dac28d4.js";import"./useHistory.d7897cc0.js";function k(o,e){return x(o,e)}const C={setup(){const[o,e]=k("test","test"),n=i(o.value);return{state:o,value:n,update:e}}},V=a("p",null,"\u5C06\u6570\u636E\u6301\u4E45\u5316\u5230 localStorage \u4E2D",-1),j=a("p",null,"\u5237\u65B0\u9875\u9762\u80FD\u62FF\u5230\u5B58\u5728 localStorage \u4E2D\u7684\u72B6\u6001",-1),w=d("update"),B=d("remove");function N(o,e,n,t,b,y){const r=p("a-button");return S(),_(g,null,[V,a("p",null,"localStorage\u4E2D\u7684\u503C\uFF1A "+v(t.state),1),j,m(a("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s)},null,512),[[f,t.value]]),l(r,{onClick:e[1]||(e[1]=s=>t.update(t.value))},{default:u(()=>[w]),_:1}),l(r,{onClick:e[2]||(e[2]=s=>t.update())},{default:u(()=>[B]),_:1})],64)}var T=c(C,[["render",N]]);export{T as default};
