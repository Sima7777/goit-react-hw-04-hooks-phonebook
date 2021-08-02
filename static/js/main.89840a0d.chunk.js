(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var r,a,i=t(1),o=t.n(i),c=t(9),l=t.n(c),u=(t(16),t(8)),b=t(4),s=t(2),d=t(3),j=d.a.form(r||(r=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 2px solid black;\n  width: 400px;\n  padding: 20px;\n  margin-bottom: 20px;\n"]))),m=t(0),p={input:{display:"block",marginBottom:"10px",marginTop:"5px"},label:{marginBottom:"10px"},button:{width:"100px",fontSize:"12px",backgroundColor:"white",borderRadius:"5px",border:"1px solid gray",cursor:"pointer"}};function x(e){var n=e.onSubmit,t=Object(i.useState)(""),r=Object(b.a)(t,2),a=r[0],o=r[1],c=Object(i.useState)(""),l=Object(b.a)(c,2),u=l[0],s=l[1],d=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":o(r);break;case"number":s(r);break;default:return}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(j,{onSubmit:function(e){e.preventDefault(),n(a,u),o(""),s("")},children:[Object(m.jsxs)("label",{style:p.label,children:["Name",Object(m.jsx)("input",{style:p.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:d})]}),Object(m.jsxs)("label",{style:p.label,children:["Number",Object(m.jsx)("input",{style:p.input,type:"tel",name:"number",required:!0,value:u,onChange:d})]}),Object(m.jsx)("button",{type:"submit",style:p.button,children:"Add Contact"})]})})}var h=d.a.li(a||(a=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n"]))),f={button:{width:"50px",fontSize:"12px",backgroundColor:"white",borderRadius:"5px",border:"1px solid gray",cursor:"pointer",marginLeft:"30px"}};function O(e){var n=e.name,t=e.number,r=e.onDelBtnClick;return Object(m.jsxs)(h,{children:[n,": ",t,Object(m.jsx)("button",{type:"submit",name:n,onClick:r,style:f.button,children:"Delete"})]})}O.defaultProps={name:null,number:null,onDelBtnClick:function(){return null}};var g,v=O,y=d.a.ul(g||(g=Object(s.a)(["\n  padding: 0;\n  list-style: none;\n  width: 400px;\n  margin: 0px;\n"])));var C,k=function(e){var n=e.children;return Object(m.jsx)(y,{children:n})},w=d.a.div(C||(C=Object(s.a)(["\n  margin-bottom: 20px;\n"]))),S={input:{display:"block",marginTop:"5px"}};function A(e){var n=e.filter,t=e.handleFilterChange;return Object(m.jsx)(w,{children:Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{style:S.input,type:"text",name:"filter",value:n,onChange:t})]})})}A.defaultProps={filter:null,handleFilterChange:null};var B=A,z=t(24);function F(){var e=Object(i.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(b.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)(""),o=Object(b.a)(a,2),c=o[0],l=o[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(x,{onSubmit:function(e,n){t.find((function(n){return n.name===e}))?alert("".concat(e," is already in contacts")):r((function(t){return[].concat(Object(u.a)(t),[{id:Object(z.a)(),name:e,number:n}])}))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(B,{filter:c,handleFilterChange:function(e){var n=e.target.value;l(n)}}),Object(m.jsx)(k,{children:function(){var e=c.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}().map((function(e){var n=e.id,t=e.name,a=e.number;return Object(m.jsx)(v,{name:t,number:a,onDelBtnClick:function(){return e=n,void r((function(n){return Object(u.a)(n).filter((function(n){return n.id!==e}))}));var e}},n)}))})]})}t(21);l.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(F,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.89840a0d.chunk.js.map