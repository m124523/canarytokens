import{d as r,r as i,a as c,c as p,i as t,I as m,f as l,p as h}from"./index-OwSyuLdt.js";import{_ as d}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-o6A_WZNv.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-RpgWuSLu.js";const f=l("p",{class:"mt-16 text-sm"}," Use this CSS to detect when someone has cloned a webpage. ",-1),g=r({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const s=i(o.tokenData.css||"");return(n,e)=>{const a=h;return c(),p(m,null,[t(d,{"token-snippet":s.value},null,8,["token-snippet"]),f,t(a,{class:"mt-24",variant:"info",message:`When someone clones your site, they'll load the token, which will check
    whether the referrer domain is expected. If not, it fires the token and you
    get an alert.`,"text-link":"More tips?",onClick:e[0]||(e[0]=()=>n.$emit("howToUse"))})],64)}}});export{g as default};
