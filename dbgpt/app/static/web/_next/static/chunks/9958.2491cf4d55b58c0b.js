"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{2440:function(e,l,t){var s=t(25519);l.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(s.C9))&&void 0!==e?e:"")}},88331:function(e,l,t){t.r(l),t.d(l,{default:function(){return Y}});var s=t(85893),a=t(30853),n=t(25519),r=t(24019),i=t(50888),c=t(97937),o=t(63606),d=t(89035),u=t(93967),m=t.n(u),x=t(25675),p=t.n(x),v=t(39332),f=t(67294),g=t(67421),h=t(92975),j=t(12767),y=t(76199),w=t(76212),b=t(65429),k=t(15381),N=t(57132),_=t(65654),Z=t(66309),C=t(69677),S=t(14726),P=t(45360),O=t(55241),J=t(96074),$=t(20640),I=t.n($);let M=e=>{let{list:l,loading:t,feedback:a,setFeedbackOpen:n}=e,{t:r}=(0,g.$G)(),[i,c]=(0,f.useState)([]),[o,d]=(0,f.useState)("");return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"flex flex-1 flex-wrap w-72",children:null==l?void 0:l.map(e=>{let l=i.findIndex(l=>l.reason_type===e.reason_type)>-1;return(0,s.jsx)(Z.Z,{className:"text-xs text-[#525964] mb-2 p-1 px-2 rounded-md cursor-pointer ".concat(l?"border-[#0c75fc] text-[#0c75fc]":""),onClick:()=>{c(l=>{let t=l.findIndex(l=>l.reason_type===e.reason_type);return t>-1?[...l.slice(0,t),...l.slice(t+1)]:[...l,e]})},children:e.reason},e.reason_type)})}),(0,s.jsx)(C.default.TextArea,{placeholder:r("feedback_tip"),className:"w-64 h-20 resize-none mb-2",value:o,onChange:e=>d(e.target.value.trim())}),(0,s.jsxs)("div",{className:"flex gap-2 justify-end",children:[(0,s.jsx)(S.ZP,{className:"w-16 h-8",onClick:()=>{n(!1)},children:"取消"}),(0,s.jsx)(S.ZP,{type:"primary",className:"min-w-16 h-8",onClick:async()=>{let e=i.map(e=>e.reason_type);await (null==a?void 0:a({feedback_type:"unlike",reason_types:e,remark:o}))},loading:t,children:"确认"})]})]})};var D=e=>{var l,t;let{content:a}=e,{t:n}=(0,g.$G)(),r=(0,v.useSearchParams)(),i=null!==(t=null==r?void 0:r.get("id"))&&void 0!==t?t:"",[c,o]=P.ZP.useMessage(),[d,u]=(0,f.useState)(!1),[x,p]=(0,f.useState)(null==a?void 0:null===(l=a.feedback)||void 0===l?void 0:l.feedback_type),[h,j]=(0,f.useState)(),y=async e=>{let l=null==e?void 0:e.replace(/\trelations:.*/g,""),t=I()(l);t?l?c.open({type:"success",content:n("copy_success")}):c.open({type:"warning",content:n("copy_nothing")}):c.open({type:"error",content:n("copy_failed")})},{run:Z,loading:C}=(0,_.Z)(async e=>await (0,w.Vx)((0,w.zx)({conv_uid:i,message_id:a.order+"",feedback_type:e.feedback_type,reason_types:e.reason_types,remark:e.remark})),{manual:!0,onSuccess:e=>{let[,l]=e;p(null==l?void 0:l.feedback_type),P.ZP.success("反馈成功"),u(!1)}}),{run:S}=(0,_.Z)(async()=>await (0,w.Vx)((0,w.Jr)()),{manual:!0,onSuccess:e=>{let[,l]=e;j(l||[]),l&&u(!0)}}),{run:$}=(0,_.Z)(async()=>await (0,w.Vx)((0,w.Ir)({conv_uid:i,message_id:(null==a?void 0:a.order)+""})),{manual:!0,onSuccess:e=>{let[,l]=e;l&&(p("none"),P.ZP.success("操作成功"))}});return(0,s.jsxs)(s.Fragment,{children:[o,(0,s.jsxs)("div",{className:"flex flex-1 items-center text-sm px-4",children:[(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)(b.Z,{className:m()("cursor-pointer",{"text-[#0C75FC]":"like"===x}),onClick:async()=>{if("like"===x){await $();return}await Z({feedback_type:"like"})}}),(0,s.jsx)(O.Z,{placement:"bottom",autoAdjustOverflow:!0,destroyTooltipOnHide:!0,content:(0,s.jsx)(M,{setFeedbackOpen:u,feedback:Z,list:h||[],loading:C}),trigger:"click",open:d,children:(0,s.jsx)(k.Z,{className:m()("cursor-pointer",{"text-[#0C75FC]":"unlike"===x}),onClick:async()=>{if("unlike"===x){await $();return}await S()}})})]}),(0,s.jsx)(J.Z,{type:"vertical"}),(0,s.jsx)(N.Z,{className:"cursor-pointer",onClick:()=>y(a.context)})]})]})},A=t(50228),E=t(48218),F=t(39718),T=(0,f.memo)(e=>{var l;let{model:t}=e,a=(0,v.useSearchParams)(),n=null!==(l=null==a?void 0:a.get("scene"))&&void 0!==l?l:"";return"chat_agent"===n?(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[rgba(255,255,255,0.16)]",children:(0,s.jsx)(E.Z,{scene:n})}):t?(0,s.jsx)(F.Z,{width:32,height:32,model:t}):(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-[rgba(255,255,255,0.16)]",children:(0,s.jsx)(A.Z,{})})});let V=()=>{var e;let l=JSON.parse(null!==(e=localStorage.getItem(n.C9))&&void 0!==e?e:"");return l.avatar_url?(0,s.jsx)(p(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:32,height:32,src:null==l?void 0:l.avatar_url,alt:null==l?void 0:l.nick_name}):(0,s.jsx)("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#31afff] to-[#1677ff] text-xs text-white",children:null==l?void 0:l.nick_name})},G={todo:{bgClass:"bg-gray-500",icon:(0,s.jsx)(r.Z,{className:"ml-2"})},runing:{bgClass:"bg-blue-500",icon:(0,s.jsx)(i.Z,{className:"ml-2"})},failed:{bgClass:"bg-red-500",icon:(0,s.jsx)(c.Z,{className:"ml-2"})},completed:{bgClass:"bg-green-500",icon:(0,s.jsx)(o.Z,{className:"ml-2"})}},z=e=>e.replaceAll("\\n","\n").replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>"),B=e=>null==e?void 0:e.replace(/<table(\w*=[^>]+)>/gi,"<table $1>").replace(/<tr(\w*=[^>]+)>/gi,"<tr $1>");var H=(0,f.memo)(e=>{var l;let{content:t,onLinkClick:n}=e,{t:r}=(0,g.$G)(),i=(0,v.useSearchParams)(),c=null!==(l=null==i?void 0:i.get("scene"))&&void 0!==l?l:"",{context:o,model_name:u,role:x,thinking:p}=t,w=(0,f.useMemo)(()=>"view"===x,[x]),{relations:b,value:k,cachePluginContext:N}=(0,f.useMemo)(()=>{if("string"!=typeof o)return{relations:[],value:"",cachePluginContext:[]};let[e,l]=o.split("	relations:"),t=l?l.split(","):[],s=[],a=0,n=e.replace(/<dbgpt-view[^>]*>[^<]*<\/dbgpt-view>/gi,e=>{try{var l;let t=e.replaceAll("\n","\\n").replace(/<[^>]*>|<\/[^>]*>/gm,""),n=JSON.parse(t),r="<custom-view>".concat(a,"</custom-view>");return s.push({...n,result:z(null!==(l=n.result)&&void 0!==l?l:"")}),a++,r}catch(l){return console.log(l.message,l),e}});return{relations:t,cachePluginContext:s,value:n}},[o]),_=(0,f.useMemo)(()=>({"custom-view"(e){var l;let{children:t}=e,n=+t.toString();if(!N[n])return t;let{name:r,status:i,err_msg:c,result:o}=N[n],{bgClass:d,icon:u}=null!==(l=G[i])&&void 0!==l?l:{};return(0,s.jsxs)("div",{className:"bg-white dark:bg-[#212121] rounded-lg overflow-hidden my-2 flex flex-col lg:max-w-[80%]",children:[(0,s.jsxs)("div",{className:m()("flex px-4 md:px-6 py-2 items-center text-white text-sm",d),children:[r,u]}),o?(0,s.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:(0,s.jsx)(h.D,{components:a.Z,rehypePlugins:[j.Z],remarkPlugins:[y.Z],children:null!=o?o:""})}):(0,s.jsx)("div",{className:"px-4 md:px-6 py-4 text-sm",children:c})]})}}),[N]);return(0,s.jsxs)("div",{className:"flex flex-1 gap-3 mt-6",children:[(0,s.jsx)("div",{className:"flex flex-shrink-0 items-start",children:w?(0,s.jsx)(T,{model:u}):(0,s.jsx)(V,{})}),(0,s.jsxs)("div",{className:"flex ".concat("chat_agent"!==c||p?"":"flex-1"," overflow-hidden"),children:[!w&&(0,s.jsx)("div",{className:"flex flex-1 items-center text-sm text-[#1c2533] dark:text-white",children:"string"==typeof o&&o}),w&&(0,s.jsxs)("div",{className:"flex flex-1 flex-col w-full",children:[(0,s.jsxs)("div",{className:"bg-white dark:bg-[rgba(255,255,255,0.16)] p-4 rounded-2xl rounded-tl-none mb-2",children:["object"==typeof o&&(0,s.jsxs)("div",{children:["[".concat(o.template_name,"]: "),(0,s.jsxs)("span",{className:"text-theme-primary cursor-pointer",onClick:n,children:[(0,s.jsx)(d.Z,{className:"mr-1"}),o.template_introduce||"More Details"]})]}),"string"==typeof o&&"chat_agent"===c&&(0,s.jsx)(h.D,{components:{...a.Z},rehypePlugins:[j.Z],remarkPlugins:[y.Z],children:B(k)}),"string"==typeof o&&"chat_agent"!==c&&(0,s.jsx)(h.D,{components:{...a.Z,..._},rehypePlugins:[j.Z],remarkPlugins:[y.Z],children:z(k)}),p&&!o&&(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"flex text-sm text-[#1c2533] dark:text-white",children:r("thinking")}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse1"}),(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse2"}),(0,s.jsx)("div",{className:"w-1 h-1 rounded-full mx-1 animate-pulse3"})]})]})]}),(0,s.jsx)(D,{content:t})]})]})]})}),L=t(41468),R=t(74434),U=t(69256),q=t(62418),K=t(2093),Q=t(85576),W=t(96486),X=t(25934),Y=()=>{var e;let l=(0,f.useRef)(null),t=(0,v.useSearchParams)(),a=null!==(e=null==t?void 0:t.get("id"))&&void 0!==e?e:"",{currentDialogInfo:n,model:r}=(0,f.useContext)(L.p),{history:i,handleChat:c,refreshDialogList:o,setAppInfo:d,setModelValue:u,setTemperatureValue:m,setResourceValue:x}=(0,f.useContext)(U.ChatContentContext),[p,g]=(0,f.useState)(!1),[h,j]=(0,f.useState)(""),y=(0,f.useMemo)(()=>(0,W.cloneDeep)(i).filter(e=>["view","human"].includes(e.role)).map(e=>({...e,key:(0,X.Z)()})),[i]);return(0,K.Z)(async()=>{let e=(0,q.a_)();if(e&&e.id===a){let[,a]=await (0,w.Vx)((0,w.BN)({...n}));if(a){var l,t,s,i,p,v,f;let n=(null==a?void 0:null===(l=a.param_need)||void 0===l?void 0:l.map(e=>e.type))||[],g=(null===(t=null==a?void 0:null===(s=a.param_need)||void 0===s?void 0:s.filter(e=>"model"===e.type)[0])||void 0===t?void 0:t.value)||r,h=(null===(i=null==a?void 0:null===(p=a.param_need)||void 0===p?void 0:p.filter(e=>"temperature"===e.type)[0])||void 0===i?void 0:i.value)||.5,j=null===(v=null==a?void 0:null===(f=a.param_need)||void 0===f?void 0:f.filter(e=>"resource"===e.type)[0])||void 0===v?void 0:v.bind_value;d(a||{}),m(h||.5),u(g),x(j),await c(e.message,{app_code:null==a?void 0:a.app_code,model_name:g,...(null==n?void 0:n.includes("temperature"))&&{temperature:h},...n.includes("resource")&&{select_param:"string"==typeof j?j:JSON.stringify(j)}}),await o(),localStorage.removeItem(q.rU)}}},[a,n]),(0,f.useEffect)(()=>{setTimeout(()=>{var e,t;null===(e=l.current)||void 0===e||e.scrollTo(0,null===(t=l.current)||void 0===t?void 0:t.scrollHeight)},50)},[i]),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 mx-auto",ref:l,children:[!!y.length&&y.map(e=>(0,s.jsx)(H,{content:e,onLinkClick:()=>{g(!0),j(JSON.stringify(null==e?void 0:e.context,null,2))}},e.key)),(0,s.jsx)(Q.default,{title:"JSON Editor",open:p,width:"60%",cancelButtonProps:{hidden:!0},onOk:()=>{g(!1)},onCancel:()=>{g(!1)},children:(0,s.jsx)(R.Z,{className:"w-full h-[500px]",language:"json",value:h})})]})}}}]);