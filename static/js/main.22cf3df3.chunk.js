(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),i=c.n(s),o=(c(12),c(6)),j=c(3),l=(c(13),c(0));var r=function(){var e=Object(n.useState)("darkTheme"),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(" "),i=Object(j.a)(s,2),r=i[0],u=i[1],b=Object(n.useState)([]),d=Object(j.a)(b,2),h=d[0],O=d[1],p=Object(n.useState)(!0),f=Object(j.a)(p,2),m=f[0];return f[1],Object(n.useEffect)((function(){return function(){}}),[r]),Object(l.jsxs)("div",{className:"app ".concat(c," "),children:[Object(l.jsxs)("div",{className:"head",children:[Object(l.jsx)("h1",{children:"To-Do list"}),Object(l.jsx)("button",{onClick:function(){a("darkTheme"===c?"lightTheme":"darkTheme")},children:"changeTheme"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=Object(o.a)(h);t=[].concat(Object(o.a)(h),[{id:h.length+1,task:r,complete:m}]),O(t),u("")},children:Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){console.log("handlechnage"),r=u(e.currentTarget.value)}})}),Object(l.jsx)("ul",{className:"list",children:h.map((function(e,t){return Object(l.jsxs)("li",{id:t,children:[Object(l.jsx)("input",{type:"checkbox",value:e.complete}),e.task," ",Object(l.jsx)("button",{onClick:function(e){!function(e){h.splice(e,1),e.target.parentNode.style.display="none",O(h)}(e)},children:"delete"})]})}))})]})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.22cf3df3.chunk.js.map