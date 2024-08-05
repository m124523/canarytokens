import{d as r,r as _,a as m,c as k,i as s,I as l,f as a,p}from"./index-BZAQadHc.js";import{_ as d}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-P0FJIXm5.js";import{_ as h}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-B64Cn_RI.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-D0t6_50w.js";const u=a("p",{class:"mt-16 text-sm"}," This token is triggered when someone uses this credential pair to access AWS programmatically (through the API). The key is unique. i.e. There is no chance of somebody guessing these credentials. ",-1),f=a("p",{class:"mt-24 text-sm"},null,-1),$=r({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const e=o,n=_({aws_access_key_id:e.tokenData.aws_access_key_id||"",aws_secret_access_key:e.tokenData.aws_secret_access_key||"",output:e.tokenData.output||"",region:e.tokenData.region||""});return(i,t)=>{const c=p;return m(),k(l,null,[s(d,{"token-data":n.value},null,8,["token-data"]),u,s(h,{onHowToUse:t[0]||(t[0]=g=>i.$emit("howToUse"))}),s(c,{class:"mt-24",variant:"info",message:"If this token fires, it is a clear indication that this set of keys has 'leaked'"}),f],64)}}});export{$ as default};
