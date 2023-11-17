"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[742],{3742:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i,o,a,d,s,l,c=t(9434),x=t(2791),p=t(5705),u=t(8007),b=t(168),m=t(6487),f=m.ZP.p(r||(r=(0,b.Z)(["\n  /* padding: 10px 20px; */\n  margin-bottom: 15px;\n"]))),h=(0,m.ZP)(p.l0)(i||(i=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: center;\n"]))),g=(0,m.ZP)(p.gN)(o||(o=(0,b.Z)(["\n  padding: 10px;\n  border: 1px solid #82d47b;\n  border-radius: 5px;\n  transition: border-color 0.3s ease;\n  width: 400px;\n\n  @media screen and (max-width: 768px) {\n    width: 250px;\n  }\n\n  &:focus {\n    border-color: #00ff00;\n  }\n"]))),j=(m.ZP.label(a||(a=(0,b.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  transition: transform 0.3s, font-size 0.3s, color 0.3s;\n  pointer-events: none;\n  color: #666;\n"]))),(0,m.ZP)(p.Bc)(d||(d=(0,b.Z)(["\n  font-size: 14px;\n  color: #82d47b;\n  margin-top: 10px;\n  pointer-events: none;\n"])))),v=m.ZP.div(s||(s=(0,b.Z)(["\n  position: relative;\n"]))),w=(m.ZP.button(l||(l=(0,b.Z)(["\n  font-size: 25px;\n  padding: 10px 15px;\n  background-color: #82d47b;\n  color: white;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  width: 320px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    width: 150px;\n  }\n\n  &:active {\n    background-color: black;\n  }\n"]))),t(3634)),Z=t(6916),k=function(n){return n.contacts.items},y=function(n){return n.filter},z=function(n){return n.contacts.isLoading},P=(0,Z.P1)([k,y],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),C=t(9055),S=t(184),I=u.Ry().shape({name:u.Z_().matches(/^[a-zA-Z\s]+$/,"Please, enter only letter").min(3,"Too short!").required("This field is required!"),number:u.Z_().matches(/^\d{3}-\d{3}-\d{2}-\d{2}$/,"Format: 066-123-45-67").required("This field is required!")}),_=function(){var n=(0,c.I0)(),e=(0,c.v9)(k);return(0,S.jsx)(p.J9,{initialValues:{name:"",number:""},validationSchema:I,onSubmit:function(t,r){if(e.some((function(n){return n.name===t.name})))alert("".concat(t.name," is already in contacts"));else{var i={name:t.name,number:t.number};n((0,w.uK)(i)),r.resetForm()}},children:(0,S.jsxs)(h,{children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(f,{children:"Name"}),(0,S.jsx)(g,{type:"text",name:"name"}),(0,S.jsx)(j,{name:"name",component:"div"})]}),(0,S.jsxs)(v,{children:[(0,S.jsx)(f,{children:"Number"}),(0,S.jsx)(g,{type:"tel",name:"number"}),(0,S.jsx)(j,{name:"number",component:"div"})]}),(0,S.jsx)(C.z,{border:"1px solid #82d47b",borderRadius:"4px 8px",colorScheme:"green",_activeLink:{bg:"white",color:"#82d47b"},bgGradient:"linear(to-l, #23eb27, #82d47b)",type:"submit",children:"Add contact"})]})})},L=t(4808),G=t(824),W=t(2715),q=t(6411);var F=function(){var n=(0,c.I0)();return(0,S.jsx)(G.xu,{mb:"12px",mt:"32px",children:(0,S.jsxs)(W.x,{as:"label",fontSize:"28px",fontWeight:"semibold",paddingLeft:"40px",bgGradient:"linear(to-l, #23eb27, #82d47b)",bgClip:"text",children:["Find contacts by name",(0,S.jsx)(q.I,{fontSize:"24px",fontWeight:"semibold",width:"400px",padding:"10px",margin:"0 auto",color:"black",borderRadius:"4px",border:"1px solid #82d47b",type:"text",value:(0,c.v9)(y),onChange:function(e){n((0,L.M)(e.target.value))}})]})})},R=t(6582),N=t(5090),T=t(9696),A=function(){var n=(0,c.v9)(P),e=(0,c.I0)();return(0,S.jsx)(R.k,{as:"ul",flexDirection:"column",mt:12,w:"400px",border:"1px solid #82d47b",padding:"12px",children:n.map((function(n){var t=n.id,r=n.name,i=n.number;return(0,S.jsx)(N.Z,{as:"li",w:"100%",mb:"5px",border:"5px solid #82d47b",children:(0,S.jsxs)(T.e,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,S.jsxs)(W.x,{color:"black",fontSize:"20px",fontWeight:"semibold",children:[r,":"]}),(0,S.jsxs)(G.xu,{alignItems:"center",display:"flex",gap:7,children:[(0,S.jsx)(W.x,{fontWeight:"semibold",fontSize:"20px",children:i}),(0,S.jsx)(C.z,{bg:"#82d47b",border:"1px solid #82d47b",borderRadius:"4px 8px",type:"button",name:"delete",colorScheme:"green",_activeLink:{bg:"white",color:"#82d47b"},bgGradient:"linear(to-l, #23eb27, #82d47b)",onClick:function(){return e((0,w.GK)(t))},children:"\xd7"})]})]})},t)}))})},K=t(7371),$=function(){var n=(0,c.I0)(),e=(0,c.v9)(k);(0,x.useEffect)((function(){n((0,w.yF)())}),[n]);var t=(0,c.v9)(z);return(0,S.jsx)(G.xu,{bg:"#dffecf",alignItems:"center",justify:"center",h:"100vh",children:(0,S.jsxs)(G.xu,{width:"400px",padding:"10px",margin:"0 auto",children:[(0,S.jsx)(W.x,{bgGradient:"linear(to-l, #23eb27, #82d47b)",bgClip:"text",fontSize:"6xl",fontWeight:"extrabold",children:"Phonebook"}),(0,S.jsx)(_,{}),(0,S.jsx)(F,{}),t&&(0,S.jsx)(K.a,{}),e.length>0&&(0,S.jsx)(A,{})]})})}}}]);
//# sourceMappingURL=742.fa3eceea.chunk.js.map