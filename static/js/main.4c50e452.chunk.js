(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),i=t(7),c=t.n(i),a=(t(12),t(2)),s=t(3),l=t(5),h=t(4),d=t(0),u=function(e){var n=e.name,t=e.email,o=e.id;return Object(d.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:t})]})]})},f=function(e){var n=e.robots;return Object(d.jsx)("div",{children:n.map((function(e,t){return Object(d.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},b=function(e){e.searchfield;var n=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},j=function(e){return Object(d.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"385px"},children:e.children})},v=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(s.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Error Overflow!!!!!  Fixing ASAP"}):this.props.children}}]),t}(r.a.Component),g=(t(14),function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(b,{searchChange:this.onSearchChange}),Object(d.jsx)(j,{children:Object(d.jsx)(v,{children:Object(d.jsx)(f,{robots:o})})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),t}(o.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(15);c.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Robofriends","/service-worker.js");p?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.4c50e452.chunk.js.map