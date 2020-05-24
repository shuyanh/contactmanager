(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{42:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),l=a(10),s=a(11),i=a(14),m=a(13),u=a(17),p=a(12),d=a(4),h=a.n(d),f=a(18),v=a(16),b=a.n(v),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(e){},e.handleDeleteClick=function(t){console.log("deleting id: ",t),e.props.deleteContact(t)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.phone,o=t.email,l=this.state.showContactInfo;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:this.handleDeleteClick.bind(this,a)}),r.a.createElement(u.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},o),r.a.createElement("li",{className:"list-group-item"},c)):null)}}]),a}(n.Component),y=Object(p.b)(null,{deleteContact:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:a({type:"DELETE_CONTACT",payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(E),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this.props.contacts;return this.state.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),e.map((function(e){return r.a.createElement(y,{key:e.id,contact:e})}))):r.a.createElement("p",null,"Loading....")}}]),a}(n.Component),C=Object(p.b)((function(e){return{contacts:e.contactReducer.contacts}}),{getContacts:function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,console.log(a.data),t({type:"GET_CONTACTS",payload:a.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(g),N=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};N.defaultProps={branding:"My App"};var O=N,j=(a(70),a(20)),w=a(39),k=a.n(w),T=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:k()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};T.defaultProps={type:"text"};var S=T,x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:"",email:"",errors:{},adding:!1},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){e.setState({adding:!0}),t.preventDefault(),console.log("lets add this contact: ",e.state);var a=e.state,n=a.name,r=a.email,c=a.phone;if(""!==n)if(""!==r)if(""!==c){var o={name:n,email:r,phone:c};e.props.addContact(o),e.setState({name:"",email:"",phone:"",errors:{},adding:!1}),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is required"}});else e.setState({errors:{email:"Email is required"}});else e.setState({errors:{name:"Name is required"}})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;e.adding;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(S,{label:"Name",name:"name",value:t,placeholder:"Enter name here",onChange:this.handleChange,error:c.name}),r.a.createElement(S,{label:"Email",name:"email",type:"email",value:a,placeholder:"Enter email here",onChange:this.handleChange,error:c.email}),r.a.createElement(S,{label:"Phone",name:"phone",value:n,placeholder:"Enter phone here",onChange:this.handleChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"add contact",className:"btn btn-light btn-block"}))))}}]),a}(n.Component),A=Object(p.b)(null,{addContact:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.post("https://jsonplaceholder.typicode.com/users",e);case 2:n=t.sent,a({type:"ADD_CONTACT",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(x),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:"",email:"",errors:{}},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,r=a.phone,c=a.email;if(""!==n)if(""!==c)if(""!==r){var o={id:e.props.match.params.id,name:n,email:c,phone:r};console.log("calling udpateContact: ",o),e.props.updateContact(o),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/")}else e.setState({errors:{phone:"Phone is required"}});else e.setState({errors:{email:"Email is required"}});else e.setState({errors:{name:"Name is required"}})},e}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e,t){var a=e.contact,n=a.name,r=a.email,c=a.phone;this.setState({name:n,email:r,phone:c})}},{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params.id,this.props.getContact(t);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.phone,c=e.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement(S,{label:"Name",name:"name",value:t,placeholder:"Enter name here",onChange:this.handleChange,error:c.name}),r.a.createElement(S,{label:"Email",name:"email",type:"email",value:a,placeholder:"Enter email here",onChange:this.handleChange,error:c.email}),r.a.createElement(S,{label:"Phone",name:"phone",value:n,placeholder:"Enter phone here",onChange:this.handleChange,error:c.phone}),r.a.createElement("input",{type:"submit",value:"Edit contact",className:"btn btn-light btn-block"}))))}}]),a}(n.Component),D=Object(p.b)((function(e){return{contact:e.contactReducer.contact}}),{getContact:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://jsonplaceholder.typicode.com/users/".concat(e));case 2:n=t.sent,console.log(n.data),a({type:"GET_CONTACT",payload:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateContact:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in action, updated contact: ",e),t.next=3,b.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e);case 3:n=t.sent,a({type:"UPDATE_CONTACT",payload:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(_),q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda iure quae a dolores architecto voluptatum, cum quod voluptates qui nobis tempore modi dicta explicabo ex accusantium quia est veritatis adipisci. Maxime enim deleniti eveniet, facilis adipisci itaque. Modi, dolorem!"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},P=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, the page you look for does not exist"))},M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-danger"},"Test Component"),r.a.createElement("h1",null,t),r.a.createElement("h4",null,a))}}]),a}(n.Component),I=a(2),L=a(15),R=a(40),G=a(41),U=a(9),X={contacts:[],contact:{}},F=Object(L.c)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CONTACTS":return console.log("returning action.payload",t.payload),Object(U.a)(Object(U.a)({},e),{},{contacts:t.payload});case"GET_CONTACT":return console.log("returning action.payload",t.payload),Object(U.a)(Object(U.a)({},e),{},{contact:t.payload});case"DELETE_CONTACT":return Object(U.a)(Object(U.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(U.a)(Object(U.a)({},e),{},{contacts:[t.payload].concat(Object(G.a)(e.contacts))});case"UPDATE_CONTACT":return Object(U.a)(Object(U.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}}}),V=[R.a],W=Object(L.e)(F,{},Object(L.d)(L.a.apply(void 0,V),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var B=function(){return r.a.createElement(p.a,{store:W},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:"/",component:C}),r.a.createElement(I.a,{exact:!0,path:"/about",component:q}),r.a.createElement(I.a,{exact:!0,path:"/contact/add",component:A}),r.a.createElement(I.a,{exact:!0,path:"/contact/edit/:id",component:D}),r.a.createElement(I.a,{exact:!0,path:"/test",component:M}),r.a.createElement(I.a,{component:P}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.d7cf85bb.chunk.js.map