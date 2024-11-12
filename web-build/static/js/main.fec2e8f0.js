(()=>{"use strict";var e={2056:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var r=n(4701),o=n(3701),a=n(296),l=n(6793),i=n(6283),d=n(3929),u=n(5458),s=n(6773),f=n(9574),c=n(397),p=function(e){var t=e.label,n=e.value,r=e.onChangeText,o=e.showDropdown,a=void 0!==o&&o,l=e.placeholder,u=e.operation,p=e.setOperation;return(0,c.jsxs)(d.default,{style:h.fieldContainer,children:[(0,c.jsx)(i.default,{style:h.label,children:t}),(0,c.jsxs)(d.default,{style:h.inputContainer,children:[a&&(0,c.jsxs)(f.default,{selectedValue:u,onValueChange:function(e){p(e)},style:h.picker,children:[(0,c.jsx)(f.default.Item,{label:"GET",value:"GET"}),(0,c.jsx)(f.default.Item,{label:"POST",value:"POST"}),(0,c.jsx)(f.default.Item,{label:"PUT",value:"PUT"}),(0,c.jsx)(f.default.Item,{label:"PATCH",value:"PATCH"}),(0,c.jsx)(f.default.Item,{label:"DELETE",value:"DELETE"})]}),(0,c.jsx)(s.default,{style:[h.input,a&&h.inputWithPicker],placeholder:l,placeholderTextColor:"#aaa",value:n,onChangeText:r})]})]})},h=o.default.create({fieldContainer:{marginBottom:10},label:{color:"#fff",fontSize:16,marginBottom:5},inputContainer:{flexDirection:"row",alignItems:"center"},picker:{width:100,color:"#fff",backgroundColor:"#303030",marginRight:10,borderRadius:4},input:{flex:1,backgroundColor:"#303030",color:"#fff",padding:10,borderRadius:4},inputWithPicker:{paddingLeft:10}}),x=n(2540),g=n(6665),b=function(e){var t=e.index,n=e.endpoint,r=e.removeEndpoint,o=e.onRouteChange,u=(0,g.useState)(n.operation),s=(0,a.default)(u,2),f=s[0],h=s[1];return(0,g.useEffect)((function(){n.operation=f}),[f]),(0,c.jsxs)(d.default,{style:v.endpointContainer,children:[(0,c.jsx)(p,{label:`Endpoint ${t+1}`,value:n.route,onChangeText:function(e){return o(e,t)},placeholder:"Route",showDropdown:!0,operation:f,setOperation:h},n.key),(0,c.jsx)(l.default,{style:v.deleteButton,onPress:function(){return r(n.key)},children:(0,c.jsx)(i.default,{style:v.deleteButtonText,children:"X"})})]},n.key)},v=o.default.create({endpointContainer:{marginBottom:10,paddingHorizontal:10,flexDirection:"row",height:"auto",alignItems:"center"},deleteButton:{width:"auto",height:"auto",alignItems:"center",marginLeft:10,backgroundColor:"#ff4d4d",padding:5,borderRadius:4},deleteButtonText:{color:"#fff",fontWeight:"bold"},label:{color:"#fff",fontSize:16,marginBottom:5},input:{backgroundColor:"#303030",color:"#fff",padding:10,borderRadius:4}});function y(e){var t=e.endpoints,n=e.setEndpoints,r=(0,g.useRef)(),o=function(e){n(t.filter((function(t){return t.key!==e})))},a=function(e,r){var o=(0,u.default)(t);o[r].route=e,n(o)};return(0,c.jsx)(x.default,{style:{flex:1},ref:r,onContentSizeChange:function(){r.current.scrollToEnd()},children:t.map((function(e,t){return(0,c.jsx)(b,{index:t,endpoint:e,removeEndpoint:o,onRouteChange:a},t)}))})}var m=function(e){var t=e.title,n=e.children,r=e.titlePosition,o="right"===r?"flex-end":"center"===r?"center":"flex-start",a=e.visible?"flex":"none";return(0,c.jsxs)(d.default,{style:[j.card,{display:a}],children:[(0,c.jsx)(d.default,{style:[j.cardHeader,{alignItems:o}],children:(0,c.jsx)(i.default,{style:j.cardTitle,children:t})}),(0,c.jsx)(d.default,{style:j.divider}),(0,c.jsx)(d.default,{style:j.cardBody,children:n})]})},j=o.default.create({container:{flex:1,backgroundColor:"#303030",alignItems:"center",justifyContent:"center"},card:{backgroundColor:"#4a4a4a",padding:20,marginVertical:10,width:"40%",borderRadius:8,maxHeight:"80%"},cardHeader:{paddingVertical:10,paddingHorizontal:15},cardTitle:{fontSize:20,color:"#fff",marginBottom:5},divider:{height:1,backgroundColor:"#fff",marginVertical:10,width:"90%",alignSelf:"center"},cardBody:{paddingHorizontal:15,flex:1},generateButton:{backgroundColor:"#4a4a4a",padding:15,borderRadius:8,alignItems:"center",marginTop:20,width:"90%"}}),C=function(e){var t=e.routerTitle,n=e.setRouterTitle,r=e.endpoints,o=e.setEndpoints;return(0,c.jsxs)(m,{title:t||"New Router",visible:!0,children:[(0,c.jsx)(p,{label:"Router Name",value:t,onChangeText:n,placeholder:"Router Name"}),(0,c.jsx)(y,{endpoints:r,setEndpoints:o}),(0,c.jsx)(l.default,{style:T.newEndpointButton,onPress:function(){o([].concat((0,u.default)(r),[{key:Date.now().toString(),route:"/",operation:"GET"}]))},children:(0,c.jsx)(i.default,{style:T.buttonText,children:"+ New Endpoint"})})]})},T=o.default.create({newEndpointButton:{alignSelf:"flex-start",marginBottom:10},buttonText:{color:"#fff",fontSize:16}}),w=n(467),k=o.default.create({hint:{zIndex:1e3,borderRadius:10,backgroundColor:"#303030",position:"absolute",marginTop:5,marginLeft:"40%",borderColor:"#4a4a4a",borderWidth:2},text:{flex:1,backgroundColor:"#303030",color:"#fff",padding:10,borderRadius:4}});const E=function(e){var t=e.codeShown,n=e.routerTitle,r=e.code,o=(0,g.useState)(!1),u=(0,a.default)(o,2),s=u[0],f=u[1],p=(0,g.useState)(""),h=(0,a.default)(p,2),b=h[0],v=h[1],y=function(){var e=(0,w.default)((function*(){try{yield navigator.clipboard.writeText(r),v("Copied!")}catch(e){v("Couldn't copy!")}finally{f(!0),setTimeout((function(){f(!1)}),2e3)}}));return function(){return e.apply(this,arguments)}}();return(0,c.jsx)(m,{title:(n||"New Router")+".ts",visible:t,titlePosition:"center",children:(0,c.jsxs)(x.default,{children:[(0,c.jsx)(d.default,{style:[k.hint,{display:s?"flex":"none"}],children:(0,c.jsx)(i.default,{style:[k.text,{fontWeight:"bold"}],children:b})}),(0,c.jsx)(l.default,{onPress:y,children:(0,c.jsx)(i.default,{style:k.text,children:r})})]})})};var R=function(){var e=(0,g.useState)(!1),t=(0,a.default)(e,2),n=t[0],r=t[1],o=(0,g.useState)(""),u=(0,a.default)(o,2),s=u[0],f=u[1],p=(0,g.useState)(""),h=(0,a.default)(p,2),x=h[0],b=h[1],v=(0,g.useState)([]),y=(0,a.default)(v,2),m=y[0],j=y[1];return(0,c.jsxs)(d.default,{style:S.container,children:[(0,c.jsxs)(d.default,{style:{flex:1,flexDirection:"row",width:"100%",justifyContent:"space-evenly",alignItems:"center"},children:[(0,c.jsx)(C,{routerTitle:s,setRouterTitle:f,endpoints:m,setEndpoints:j}),(0,c.jsx)(E,{codeShown:n,routerTitle:s,code:x})]}),(0,c.jsx)(l.default,{style:S.generateButton,onPress:function(){b(function(e,t){var n=`import express, { Request, Response } from 'express'\n\nconst ${e} = express.Router();\n\n`;return t.forEach((function(t){n+=`/**\n *@author:\n *@description:\n *@returns:\n */\n${e}.${t.operation.toLowerCase()}('${t.route}', async (req : Request, res : Response)=>{\n\t//TODO: Code goes here\n});`,n+="\n\n"})),n+=`export default ${e}`}(s||"router",m)),r(!0)},children:(0,c.jsx)(i.default,{style:S.buttonText,children:"GENERATE"})})]})},S=o.default.create({container:{flex:1,width:"100%",alignItems:"center"},generateButton:{backgroundColor:"#4a4a4a",padding:15,borderRadius:8,alignItems:"center",margin:20,width:"90%"},buttonText:{color:"#fff",fontSize:16}});function O(){return(0,c.jsx)(r.default,{style:P.container,children:(0,c.jsx)(R,{})})}var P=o.default.create({container:{flex:1,backgroundColor:"#303030",alignItems:"center",justifyContent:"center"}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var l=1/0;for(s=0;s<e.length;s++){for(var[r,o,a]=e[s],i=!0,d=0;d<r.length;d++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(i=!1,a<l&&(l=a));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[l,i,d]=r,u=0;if(l.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(d)var s=d(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[175],(()=>n(5036)));r=n.O(r)})();
//# sourceMappingURL=main.fec2e8f0.js.map