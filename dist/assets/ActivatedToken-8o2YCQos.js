import{d as m,r,a as d,c as f,i as c,j as k,h as u,E as h,q as D,f as w,I as v}from"./index-CgoPuGfo.js";import{_ as x}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-BEA805vO.js";const $={class:"flex justify-center"},T=m({__name:"TokenDisplay",props:{tokenData:{}},setup(a){var s,_;const e=a,t=r(`${(s=e.tokenData)==null?void 0:s.file_name}`),n=r((_=e.tokenData)==null?void 0:_.file_contents);function o(){var i,l;n.value=`${(i=e.tokenData)==null?void 0:i.file_name}`,t.value=(l=e.tokenData)==null?void 0:l.file_contents}return(i,l)=>{const p=D;return d(),f("div",$,[c(p,{class:"mt-16",href:t.value,download:n.value,onClick:o},{default:k(()=>[u("Download "+h(e.tokenData.file_name),1)]),_:1},8,["href","download"])])}}}),g={class:"mt-16 text-sm"},b=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const e=a,t=r({file_name:e.tokenData.file_name||"",file_contents:e.tokenData.file_contents||""});return(n,o)=>(d(),f(v,null,[c(T,{"token-data":t.value},null,8,["token-data"]),w("p",g,[u(" Remember, this token is triggered whenever the binary file is executed. For EXEs, this means direct execution and for DLLs, it means they were loaded. "),c(x,{onHowToUse:o[0]||(o[0]=s=>n.$emit("howToUse"))})])],64))}});export{b as default};
