import{f as Z,P as j,K as G,r as h,w as z,i as r,o as c,g as p,v as U,z as K,I as e,D as $,h as i,x as n,A as _,aa as N,n as T,L as k,ao as ee,B as s,F as J,C as q}from"./vendor-DwjfiTos.js";import{u as X,d as te,e as H,_ as le,l as P,f as ae}from"./index-i1BX2IYC.js";import{d as Ae}from"./dragBox-IuJoHC_i.js";import{A as oe}from"./Album-EKv3rLQX.js";import{I as se}from"./Image-aUM8NL0j.js";import{u as x}from"./date-time-ZUNy4mC1.js";const ne={key:0,class:"gallery-item-top"},ie=["src"],ce=["title"],de={class:"gallery-item-action"},ue=Z({__name:"gallery-item",props:{data:{default:()=>({img_name:"",img_preview_url:"",checked:!1})},fit:{default:"scale-down"},images:{},remove:{type:Boolean,default:!1},editable:{type:Boolean,default:!1}},emits:["update:data","reload","submit","view"],setup(Y,{emit:V}){j(l=>({c61a91da:t.value}));const m=Y,g=V,b=X(),D=te(),F=new URL("data:image/gif;base64,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",import.meta.url).href,B=G(()=>D.user_habits.data),t=G(()=>D.user_habits.data.gallery_img_fit||"cover"),o=G({get(){return m.data},set(l){g("update:data",l)}}),Q=[{icon:"CopyDocument",type:"primary",title:"复制图片地址",action:"copy"},{icon:"Select",type:"success",title:"选择图片",action:"select"},{icon:"InfoFilled",type:"info",title:"图片详情",action:"detail"},{icon:"Delete",type:"danger",title:"删除图片",action:"delete"}],R=h([...Q]),w=h(!1),I=h(!1);function W(){w.value=!0}function O(){I.value=!0}function L(){g("view")}z(()=>m.data,()=>{m.remove&&(R.value=[...Q.filter(l=>l.action!=="delete"),{icon:"PriceTag",type:"success",title:"标签管理",action:"tag"}])},{deep:!0,immediate:!0});const f={copy(){const l=o.value.preview_url;H(b,l)},select(){o.value.checked=!o.value.checked},crop(){},detail(){g("submit",{type:"detail",data:o.value})},delete(){g("submit",{type:"delete",data:o.value})},remove(){g("submit",{type:"remove",data:o.value})},topping(){g("submit",{type:"top",data:o.value})},unTopping(){g("submit",{type:"unTop",data:o.value})},update(){g("submit",{type:"update",data:o.value})},tag(){g("submit",{type:"tag",data:o.value})}};return(l,y)=>{const d=r("Flag"),a=r("el-icon"),v=r("Sunset"),E=r("el-tooltip"),C=r("el-button");return c(),p("div",{class:T(["gallery-item",l.data.checked?"gallery-item-active":""])},[l.editable?(c(),U(Ae,{key:0})):K("",!0),e("div",{class:"gallery-item-cover",onClick:L},[$(l.$slots,"tags",{},void 0,!0),l.remove&&l.data.sort>0?(c(),p("span",ne,[i(a,null,{default:n(()=>[i(d)]),_:1}),_("置顶")])):K("",!0),i(E,{effect:"dark",content:"重新上传，覆盖图片",placement:"top-end"},{default:n(()=>[e("span",{class:"gallery-item-edit",onClick:y[0]||(y[0]=N((...u)=>f.update&&f.update(...u),["stop"]))},[i(a,{size:16},{default:n(()=>[i(v)]),_:1})])]),_:1}),w.value?(c(),p("img",{key:1,src:"/error.png"},null,8,ie)):(c(),U(k(ee),{class:T(I.value?"loaded-cover":"loading-cover"),src:l.data.preview_url,"src-placeholder":k(F),key:l.data.id,onError:W,onLoad:O},null,8,["class","src","src-placeholder"]))]),e("div",{class:"gallery-item-name",title:l.data[B.value.gallery_img_name||"origin_name"]},[e("span",null,s(l.data[B.value.gallery_img_name||"origin_name"]),1)],8,ce),e("div",de,[(c(!0),p(J,null,q(R.value,(u,S)=>(c(),U(E,{key:S,effect:"dark",content:u.title,placement:"bottom"},{default:n(()=>[i(C,{type:u.type,icon:u.icon,size:"small",disabled:u.disabled,onClick:N(f[u.action],["stop"])},null,8,["type","icon","disabled","onClick"])]),_:2},1032,["content"]))),128))])],2)}}}),Ne=le(ue,[["__scopeId","data-v-a29a5cde"]]),ge=e("p",{style:{color:"red"}},'修改值后请点击"保存"按钮',-1),re={key:0,class:"c-list"},Ce={class:"c-list-item"},pe=e("span",{class:"item-label"},"原名称：",-1),me={class:"c-list-item"},Qe=e("span",{class:"item-label"},"文件名：",-1),Ee={class:"c-list-item"},he=e("span",{class:"item-label"},"链 接：",-1),Be={style:{width:"100%"}},we={class:"c-list-item"},ve=e("span",{class:"item-label"},"位 置：",-1),ke={class:"c-list-item"},Ue=e("span",{class:"item-label"},"存储桶：",-1),Re={class:"c-list-item"},Ie=e("span",{class:"item-label"},"哈希值：",-1),fe={class:"c-list-item"},_e=e("span",{class:"item-label"},"尺 寸：",-1),be={class:"c-list-item"},De=e("span",{class:"item-label"},"大 小：",-1),Fe={class:"c-list-item"},ye=e("span",{class:"item-label"},"类 型：",-1),Ge={class:"c-list-item"},Ke=e("span",{class:"item-label"},"时 间：",-1),Ye={key:0,class:"c-list-item"},Ve=e("span",{class:"item-label"},"所属相册：",-1),We={class:"title"},Oe={class:"desc"},Te=Z({__name:"DetailDialog",props:{modelValue:{type:Boolean,default:!1},id:{default:0},showAlbum:{type:Boolean,default:!0}},emits:["update:modelValue","submit"],setup(Y,{emit:V}){const m=Y,g=V,b=X(),D=new oe,F=new se,B=G({get(){return m.modelValue},set(d){g("update:modelValue",d)}}),t=h({id:0,name:""}),o=h("url"),Q=h(""),R=h([]);function w(){B.value=!1}function I(){const d=P.value.find(C=>C.id===o.value),{preview_url:a="",name:v=""}=t.value,E={url:a,filename:v};Q.value=d.value.replace(/\$\{(.*?)\}/g,(C,u)=>E[u])}function W(){F.detail(m.id).then(d=>{t.value=d,t.value.preview_url=t.value.baseurl+t.value.url,I()})}W();function O(){H(b,Q.value)}function L(){H(b,Q.value),w()}function f(){window.open(t.value.preview_url,"_blank")}function l(){D.find({}).then(d=>{R.value=[{label:"图库",value:null,desc:"不放进任何相册中"},...d.items.map(a=>({label:a.name,value:a.id,desc:a.desc}))]})}l();function y(){F.update({id:m.id,album_id:t.value.album_id}).then(d=>{})}return(d,a)=>{const v=r("el-option"),E=r("el-select"),C=r("el-button"),u=r("el-input"),S=r("com-dialog");return c(),U(S,{modelValue:B.value,"onUpdate:modelValue":a[3]||(a[3]=A=>B.value=A),title:"图片ID:"+d.id,width:"600px","before-close":w},{action:n(()=>[i(C,{type:"default",onClick:w},{default:n(()=>[_("取消")]),_:1}),i(C,{type:"primary",onClick:L},{default:n(()=>[_("复制")]),_:1}),i(C,{type:"success",onClick:f},{default:n(()=>[_("打开链接")]),_:1})]),default:n(()=>[ge,t.value.url?(c(),p("div",re,[e("div",Ce,[pe,e("div",null,s(t.value.origin_name),1)]),e("div",me,[Qe,e("div",null,s(t.value.name),1)]),e("div",Ee,[he,e("div",Be,[i(E,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=A=>o.value=A),onChange:I,placeholder:"Select",style:{width:"110px"},class:"link-type-select"},{default:n(()=>[(c(!0),p(J,null,q(k(P),(A,M)=>(c(),U(v,{key:M,label:A.label,value:A.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),i(u,{value:Q.value,readonly:"",class:"special-input"},{append:n(()=>[i(C,{onClick:O},{default:n(()=>[_("复制")]),_:1})]),_:1},8,["value"])])]),e("div",we,[ve,i(u,{modelValue:t.value.url,"onUpdate:modelValue":a[1]||(a[1]=A=>t.value.url=A),readonly:""},null,8,["modelValue"])]),e("div",ke,[Ue,e("div",null,s(t.value.bucket_id)+"("+s(t.value.bucket_id)+")",1)]),e("div",Re,[Ie,e("div",null,s(t.value.hash),1)]),e("div",fe,[_e,e("div",null,"宽 * 高 = "+s(t.value.width)+" * "+s(t.value.height),1)]),e("div",be,[De,e("div",null,s(k(ae)(t.value.size)),1)]),e("div",Fe,[ye,e("div",null,s(t.value.mime_type),1)]),e("div",Ge,[Ke,e("div",null,s(k(x)(t.value.createdAt))+"(创建)  "+s(k(x)(t.value.updatedAt))+"(更新)",1)]),d.showAlbum?(c(),p("div",Ye,[Ve,i(E,{modelValue:t.value.album_id,"onUpdate:modelValue":a[2]||(a[2]=A=>t.value.album_id=A),style:{width:"100%"},filterable:"","popper-class":"album-select-popper",onChange:y},{default:n(()=>[(c(!0),p(J,null,q(R.value,(A,M)=>(c(),U(v,{key:M,label:A.label,value:A.value},{default:n(()=>[e("p",We,s(A.label),1),e("p",Oe,s(A.desc),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])])):K("",!0)])):K("",!0)]),_:1},8,["modelValue","title"])}}});export{Ne as G,Te as _};