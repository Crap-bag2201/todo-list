(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=(n(25),n(11)),l=n(20),r=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:"Your Title Here",searchBar:!0};var j=function(){return Object(d.jsxs)("div",{children:["this is an about component",Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis quod iure deserunt totam odit corrupti, nisi vitae suscipit culpa eum facilis perspiciatis nostrum ex inventore voluptatem commodi necessitatibus exercitationem? Distinctio maxime ducimus atque, minus at quae debitis reiciendis alias."})]})},u=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(d.jsx)("hr",{})]})},m=function(e){return Object(d.jsxs)("div",{className:"container",style:{minHeight:"70vh",margin:"60px auto"},children:[Object(d.jsx)("h3",{className:"my-3",children:"Todo List"}),0===e.todos.length?"No Todos To Display":e.todos.map((function(t){return Object(d.jsx)(u,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],l=Object(a.useState)(""),r=Object(i.a)(l,2),b=r[0],j=r[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add A Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&b?(t(s,b),o(""),j("")):alert("Title or Description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodoList.com"})})},O=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("Im ondelte of todo",e),u(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};u([].concat(Object(l.a)(o),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(b,{title:"My Todo List",searchBar:!1}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:n}),Object(d.jsx)(m,{todos:o,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(j,{})})]}),Object(d.jsx)(x,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.835a3c59.chunk.js.map