import{_ as m}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-CImj_I3u.js";import{_ as i}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-CPIXN4Sa.js";import{d as l,r as c,a as d,c as p,i as s,f as n,h as k,I as u}from"./index-OwSyuLdt.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-RpgWuSLu.js";const f=n("p",{class:"mt-16 text-sm"}," When the actions are run, your Canarytoken will be triggered. ",-1),v={class:"mt-16 text-sm"},b=l({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){var t;const e=o,r=c({hostname:e.tokenData.hostname||"",sql_table_name:e.tokenData.sql_server_table_name||"",sql_trigger_name:e.tokenData.sql_server_trigger_name||"",sql_function_name:((t=e.tokenData)==null?void 0:t.sql_server_function_name)||"",sql_server_view_name:e.tokenData.sql_server_view_name||"",sql_action:e.tokenData.sql_server_sql_action||""});return(_,a)=>(d(),p(u,null,[s(m,{"token-data":r.value},null,8,["token-data"]),f,n("p",v,[k(" Since DNS is used as the underlying transport, the Source IP will be that of a DNS server, not the database server. "),s(i,{onHowToUse:a[0]||(a[0]=h=>_.$emit("howToUse"))})])],64))}});export{b as default};
