import{u as w,p as z,o as _}from"./index-lYYcvhZ6.js";import{L as A}from"./Log-C6vVHP05.js";import{c as L,t as f}from"./useLogType-XPjktOVy.js";import{f as $,a as D,r as S,g as B,h as s,x as n,i as m,o as N,L as g,A as i,B as h}from"./vendor-DwjfiTos.js";const P=[{align:"center",label:"操作id",width:"80",prop:"operate_id"},{align:"center",label:"操作人",width:"120",prop:"email"},{align:"center",label:"操作类别",width:"100",prop:"type",slot:"type"},{align:"left",label:"操作内容",width:"200",prop:"operate_cont"},{align:"center",label:"操作时间",width:"100",prop:"createdAt"},{align:"left",label:"访问来源",width:"100",prop:"client_info",slot:"address"},{align:"center",label:"访问ip",width:"100",prop:"client_info",slot:"ip"}],V={class:"backstage-account-log"},W=$({__name:"index",setup(E){const c=new A,d=w(),o=D({page:1,size:10,total:0,config:P,filters:{name:""},data:[]}),r=S([]),l=()=>{c.all({page:o.page,size:o.size,...o.filters}).then(t=>{o.total=t.total,o.data=t.items.map(a=>(a.createdAt=z(a.createdAt),a))})};l();const b=t=>{_().then(a=>{c.delete(t.id).then(p=>{d.$message({message:"删除成功",duration:1e3,type:"success"}),l()})})},y=t=>{c.reLocate(t.id).then(a=>{d.$message({message:"重新定位成功",duration:1e3,type:"success"}),l()})},C=()=>{_().then(()=>{const t=r.value.map(async a=>await c.delete(a));Promise.all(t).then(a=>{r.value=[],d.$message({message:"删除成功",duration:1e3,type:"success"}),l()})})},x=t=>{r.value=t.map(a=>a.id)};return(t,a)=>{const p=m("el-button"),u=m("el-tooltip"),k=m("table-page");return N(),B("div",V,[s(k,{"table-data":o,"is-index":!0,selection:!0,border:!0,actionWidth:150,onPageChange:l,onSelectChange:x},{type:n(e=>[s(L,{type:g(f)[e.type].status,text:g(f)[e.type].text},null,8,["type","text"])]),address:n(e=>[i(h(e.client_info?e.client_info.province+e.client_info.city:"-"),1)]),ip:n(e=>[i(h(e.client_info?e.client_info.ip:"-"),1)]),action:n(()=>[s(u,{effect:"dark",content:"删除日志数据将直接影响使用分析里的数据",placement:"left-start"},{default:n(()=>[s(p,{type:"danger",disabled:r.value.length===0,onClick:C},{default:n(()=>[i("删除")]),_:1},8,["disabled"])]),_:1})]),tableAction:n(({row:e})=>[s(u,{effect:"dark",content:"删除日志数据将直接影响使用分析里的数据",placement:"left-start"},{default:n(()=>[s(p,{type:"danger",size:"small",onClick:v=>b(e)},{default:n(()=>[i("删除")]),_:2},1032,["onClick"])]),_:2},1024),s(p,{type:"primary",size:"small",onClick:v=>y(e)},{default:n(()=>[i("定位")]),_:2},1032,["onClick"])]),_:1},8,["table-data"])])}}});export{W as default};