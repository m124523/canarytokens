import{d as l,a as i,c as r,i as d,j as _,h as u,a1 as f,q as p}from"./index-CgoPuGfo.js";const k={class:"flex justify-center"},h=l({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const t=s;async function c(){var e,o;const a={fmt:"kubeconfig",auth:(e=t.tokenData)==null?void 0:e.auth,token:(o=t.tokenData)==null?void 0:o.token};try{const n=await f(a);window.location.href=n.request.responseURL}catch(n){console.log(n,"File download failed")}finally{console.log("Download ready")}}return(a,e)=>{const o=p;return i(),r("div",k,[d(o,{class:"mt-16",onClick:c},{default:_(()=>[u("Download your tokened Kubeconfig file")]),_:1})])}}});export{h as _};
