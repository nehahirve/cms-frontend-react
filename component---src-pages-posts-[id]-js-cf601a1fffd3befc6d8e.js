(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0B/O":function(e,t,a){e.exports={main:"SinglePost-module--main--2BVTx"}},"85Sb":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("syTA"),o=a.n(c);function i(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:o.a.nav},r.a.createElement("ul",null,e.pages.map((function(t){return r.a.createElement(l.a,{to:"/"+t.slug,state:{page:{title:t.title,body:t.body},pages:e.pages}},r.a.createElement("li",{key:t.id},t.title))})))),r.a.createElement(l.a,{to:"/"},r.a.createElement("button",{className:o.a.button},r.a.createElement("svg",{width:"279",viewBox:"0 0 279 189",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M1.5 169C28.3333 186.834 83.1 208 87.5 150C93 77.5002 181 37.0002 200 80.0002C219 123 291.5 168.5 275.5 115C259.5 61.5001 238 -16.4999 275.5 5.00006",stroke:"black","stroke-width":"4"})))))}},Gh6T:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("o0o1"),r=a.n(n),l=(a("ls82"),a("HaE+")),c=a("q1tI"),o=a.n(c),i=a("85Sb"),u=a("0B/O"),s=a.n(u);function m(e){var t=e.post,a=(t.id,t.title),n=t.body,r=t.createdAt,l=t.image;return o.a.createElement("main",{className:s.a.main},o.a.createElement("h1",null,r.slice(0,10)),o.a.createElement("hr",null),o.a.createElement("article",null,o.a.createElement("h2",null,a),o.a.createElement("p",null,n),o.a.createElement("img",{src:l,alt:""})))}var d=a("vDqi"),p=a.n(d),b="https://vast-fortress-99756.herokuapp.com/api";function f(e){var t=Object(c.useState)({title:"",body:"",createdAt:"",image:""}),a=t[0],n=t[1],u=Object(c.useState)([]),s=u[0],d=u[1],f=e.location.pathname.split("/")[2];function g(){return(g=Object(l.a)(r.a.mark((function t(){var a,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()({url:b+e.location.pathname,method:"GET"}).then((function(e){return e.data}));case 2:return a=t.sent,n(a?{body:a.body,title:a.title,createdAt:a.created_at,image:a.url}:null),t.next=6,p()({url:b+"/pages",method:"GET"}).then((function(e){return e.data}));case 6:l=t.sent,d(l.pages);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(e.location.state){var t=e.location.state.post,a=t.title,r=t.body,l=t.createdAt,c=t.image;n({title:a,body:r,createdAt:l,image:c})}else!function(){g.apply(this,arguments)}()}),[]),null===a?o.a.createElement("div",null,"404 resource not found"):o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{post:{id:f,title:a.title,body:a.body,createdAt:a.createdAt,image:a.image},pages:s}),o.a.createElement(i.a,{pages:s}))}},syTA:function(e,t,a){e.exports={nav:"Nav-module--nav--2gAbY",button:"Nav-module--button--3oSkU"}}}]);
//# sourceMappingURL=component---src-pages-posts-[id]-js-cf601a1fffd3befc6d8e.js.map