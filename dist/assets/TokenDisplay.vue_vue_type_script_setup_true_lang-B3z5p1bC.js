import{d as c,a as l,c as i,f as t,E as p,i as d,j as _,h as u,I as f,q as m}from"./index-OwSyuLdt.js";import{p as g}from"./pwaIconService-CKctCUnq.js";const h={class:"flex flex-col items-center justify-center gap-8 p-16 py-24 mb-16 bg-white border border-grey-100 rounded-3xl"},x={class:"p-4 border rounded-2xl border-grey-100"},b=["src"],k={class:"mb-8 text-sm font-semibold leading-tight text-center text-grey-500"},y=t("div",{class:"flex justify-center"},null,-1),D=c({__name:"TokenDisplay",props:{tokenData:{}},setup(a){const o=a;function r(){const e=g.find(n=>n.value===o.tokenData.pwa_icon);return e?e.url:(console.error(`Icon not found for value: ${o.tokenData.pwa_icon}.`),"")}return(e,n)=>{const s=m;return l(),i(f,null,[t("div",h,[t("div",x,[t("img",{src:r(),alt:"App icon",class:"rounded-lg w-[56px] h-[56px]"},null,8,b)]),t("h3",k,p(e.tokenData.pwa_app_name),1),d(s,{class:"w-full",href:e.tokenData.url,target:"_blank",variant:"primary"},{default:_(()=>[u("Get Fake App Canarytoken")]),_:1},8,["href"])]),y],64)}}});export{D as _};
