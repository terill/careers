(this["webpackJsonpcareers-react"]=this["webpackJsonpcareers-react"]||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),a=n.n(r),i=n(22),s=n.n(i),o=(n(29),n(12)),u=n.n(o),l=n(13),j=n(5),b=n(7),d=n(3);n(31);var h=function(){return Object(c.jsx)("div",{className:"loadingio-spinner-pulse-6c9ps8zcb2h",children:Object(c.jsxs)("div",{className:"ldio-25dxfh309bl",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})};var O=function(e){var t=e.careers;return t?0===t.length?Object(c.jsx)("p",{children:"No careers, sorry"}):Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/career/"+e.link,children:e.title})},e.link)})).reverse()}):Object(c.jsx)(h,{})},p="https://ximxim-careers-server.herokuapp.com/careers",f="".concat(p,"/users"),x="".concat(p,"/career"),m="6vu2qt47iepr4y9r4jp6q73zkbt3g5k8my4e5km5g9tu3cz6";function v(){var e=Object(r.useState)({careers:null}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch(p).then((function(e){return e.json()})).then((function(e){return a({careers:e})}))}),[a]),Object(c.jsx)("div",{children:Object(c.jsx)(O,{careers:n.careers})})}var g=function(e){var t=Object(r.useState)(null),n=Object(j.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("".concat(x,"/").concat(e.location.pathname.slice(8))).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[e.location.pathname]),a?a.msg?Object(c.jsx)(d.a,{to:"/"}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title domains__title",children:a.title}),Object(c.jsxs)("p",{className:"title domains__title",children:["Locations: ",a.locations]}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:a.description}})]}):Object(c.jsx)(h,{})};function k(e){return Object(c.jsxs)("div",{className:"error-notice",children:[Object(c.jsx)("span",{children:e.message}),Object(c.jsx)("button",{onClick:e.clearError,children:"X"})]})}var y=Object(r.createContext)(null);function S(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(),s=Object(j.a)(i,2),o=s[0],b=s[1],h=Object(r.useState)(),O=Object(j.a)(h,2),p=O[0],x=O[1],m=Object(r.useContext)(y),v=m.userData,g=m.setUserData,S=Object(d.g)();Object(r.useEffect)((function(){v.user&&S.push("/admin")}));var C=function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(f,"/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then((function(e){return e.json()}));case 3:if(!(c=e.sent).msg){e.next=6;break}return e.abrupt("return",x(c.msg));case 6:g({token:c.token,user:c.user}),localStorage.setItem("auth-token",c.token),S.push("/admin");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Log in"}),p&&Object(c.jsx)(k,{message:p,clearError:function(){return x(void 0)}}),Object(c.jsxs)("form",{onSubmit:C,children:[Object(c.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(c.jsx)("input",{id:"login-email",type:"email",onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(c.jsx)("input",{id:"login-password",type:"password",onChange:function(e){return b(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Log in"})]})]})}var C=function(e){var t=e.careers;return t?0===t.length?Object(c.jsx)("p",{children:"No careers, sorry"}):Object(c.jsx)("ul",{children:t.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/admin/career/"+e.link,children:e.title})},e.link)})).reverse()}):Object(c.jsx)(h,{})};var E=function(){var e=Object(r.useContext)(y),t=e.userData,n=e.setUserData,a=Object(d.g)(),i=Object(r.useState)({careers:null}),s=Object(j.a)(i,2),o=s[0],u=s[1];return Object(r.useEffect)((function(){var e=!0;return fetch(p).then((function(e){return e.json()})).then((function(t){e&&u({careers:t})})),function(){e=!1}}),[u]),Object(r.useEffect)((function(){t.user||a.push("/admin/login")})),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){n({token:void 0,user:void 0}),localStorage.setItem("auth-token","")},children:"Log out"}),Object(c.jsx)("br",{}),Object(c.jsx)(b.b,{to:"/admin/create",children:"Add a career"}),Object(c.jsx)(C,{careers:o.careers})]})},w=n(6),D=n(14);var T=function(e){var t=Object(r.useContext)(y).userData,n=Object(r.useState)(),a=Object(j.a)(n,2),i=a[0],s=a[1],o=Object(d.g)();Object(r.useEffect)((function(){t.user||o.push("/admin/login")}));var u=Object(r.useState)(),l=Object(j.a)(u,2),b=l[0],O=l[1];return Object(r.useEffect)((function(){var t=!0;return fetch("".concat(x,"/").concat(e.location.pathname.slice(14))).then((function(e){return e.json()})).then((function(e){t&&O(e)})),function(){t=!1}}),[e.location.pathname]),b?b.msg?Object(c.jsx)(d.a,{to:"/"}):Object(c.jsxs)("div",{children:[i&&Object(c.jsx)(k,{message:i,clearError:function(){return s(null)}}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("".concat(p,"/edit"),{method:"PUT",headers:{"Content-Type":"application/json","x-auth-token":t.token},body:JSON.stringify(b)}).then((function(e){return e.json()})).then((function(e){if(e.msg)return s(e.msg);o.push("/admin")}))},children:[Object(c.jsxs)("label",{children:["Job Title:",Object(c.jsx)("input",{type:"text",value:b.title,onChange:function(e){return O(Object(w.a)(Object(w.a)({},b),{},{title:e.target.value}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Locations:",Object(c.jsx)("input",{type:"text",value:b.locations,onChange:function(e){return O(Object(w.a)(Object(w.a)({},b),{},{locations:e.target.value}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Job Description:",Object(c.jsx)(D.a,{initialValue:b.description,apiKey:m,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:["undo redo | formatselect | bold italic underline forecolor","backcolor | alignleft aligncenter alignright alignjustify |","bullist numlist outdent indent | removeformat | help"]},onEditorChange:function(e){return O(Object(w.a)(Object(w.a)({},b),{},{description:e}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Link:",Object(c.jsx)("input",{type:"text",value:b.link,onChange:function(e){return O(Object(w.a)(Object(w.a)({},b),{},{link:e.target.value}))}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Save"})]}),Object(c.jsx)("button",{onClick:function(){fetch("".concat(p,"/delete"),{method:"delete",headers:{"Content-Type":"application/json","x-auth-token":t.token},body:JSON.stringify({id:b.id})}).then((function(e){return e.json()})).then((function(e){if(e.msg)return s(e.msg);o.push("/admin")}))},children:"Delete"})]}):Object(c.jsx)(h,{})};var N=function(){var e=Object(r.useContext)(y).userData,t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(d.g)();Object(r.useEffect)((function(){e.user||s.push("/admin/login")}));var o=Object(r.useState)({title:"",locations:"",description:"",link:""}),u=Object(j.a)(o,2),l=u[0],b=u[1];return Object(c.jsxs)("div",{children:[a&&Object(c.jsx)(k,{message:a,clearError:function(){return i(null)}}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat(p,"/add"),{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":e.token},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){if(e.msg)return i(e.msg);s.push("/admin")}))},children:[Object(c.jsxs)("label",{children:["Job Title:",Object(c.jsx)("input",{type:"text",value:l.title,onChange:function(e){b(Object(w.a)(Object(w.a)({},l),{},{title:e.target.value,link:e.target.value.trim().toLowerCase().split(/[\W]/).join("-")}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Locations:",Object(c.jsx)("input",{type:"text",value:l.locations,onChange:function(e){return b(Object(w.a)(Object(w.a)({},l),{},{locations:e.target.value}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Job Description:",Object(c.jsx)(D.a,{initialValue:l.description,apiKey:m,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:["undo redo | formatselect | bold italic underline forecolor","backcolor | alignleft aligncenter alignright alignjustify |","bullist numlist outdent indent | removeformat | help"]},onEditorChange:function(e){return b(Object(w.a)(Object(w.a)({},l),{},{description:e}))}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Link:",Object(c.jsx)("input",{type:"text",value:l.link,onChange:function(e){return b(Object(w.a)(Object(w.a)({},l),{},{link:e.target.value}))}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Create"})]})]})};var J=function(){var e=Object(r.useState)({token:void 0,user:void 0}),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,fetch("".concat(f,"/tokenIsValid"),{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":t}}).then((function(e){return e.json()}));case 4:if(!e.sent){e.next=10;break}return e.next=8,fetch("".concat(f,"/"),{headers:{"Content-Type":"application/json","x-auth-token":t}}).then((function(e){return e.json()}));case 8:n=e.sent,a({token:t,user:n});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)(b.a,{children:Object(c.jsx)(y.Provider,{value:{userData:n,setUserData:a},children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:v}),Object(c.jsx)(d.b,{exact:!0,path:"/admin",component:E}),Object(c.jsx)(d.b,{path:"/admin/login",component:S}),Object(c.jsx)(d.b,{path:"/admin/career",component:T}),Object(c.jsx)(d.b,{path:"/admin/create",component:N}),Object(c.jsx)(d.b,{path:"/career",component:g})]}),Object(c.jsx)(b.b,{to:"/",children:"Home"})," ",Object(c.jsx)(b.b,{to:"/admin",children:"Admin"})]})})})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e3fcd7e0.chunk.js.map