import{d as i,r as m,a as l,c,i as s,I as p,f as t,p as _}from"./index-OwSyuLdt.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BdKbbWwa.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-RpgWuSLu.js";const f=t("p",{class:"mt-16 text-sm"}," Remember, it gets triggered whenever someone requests the URL. ",-1),g=t("p",{class:"mt-24 text-sm"},null,-1),x=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const n=m(a.tokenData.token_url);return(o,e)=>{const r=_;return l(),c(p,null,[s(u,{"token-url":n.value},null,8,["token-url"]),f,s(r,{class:"mt-24",variant:"info",message:"If the URL is requested as an image (e.g. <img src=''>) then a 1x1 image is served. If the URL is surfed in a browser then a blank page is served with fingerprinting Javascript.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>o.$emit("howToUse"))},null,8,["message"]),g],64)}}});export{x as default};
