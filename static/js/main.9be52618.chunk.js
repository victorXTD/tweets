(this.webpackJsonptweets=this.webpackJsonptweets||[]).push([[0],{105:function(e,t,a){e.exports=a(111)},111:function(e,t,a){"use strict";a.r(t);a(106);var n=a(0),c=a.n(n),r=a(49),l=a(50),o=a(2),s=function(e){var t=e.data,a=20,n=20,r=a+20+400,l=n+20+400,s=o.d().domain(o.a(t,(function(e){return e.x}))).range([0,400]),i=o.d().domain(o.a(t,(function(e){return e.y}))).range([400,0]),m=o.c().x((function(e){return s(e.x)})).y((function(e){return i(e.y)})),u=function(e){return new Date(e.time).getTime()},d=o.e(o.b).domain(o.a(t,u));return c.a.createElement("svg",{viewBox:"0 0 ".concat(r," ").concat(l)},c.a.createElement("g",{transform:"translate(".concat(a,", ").concat(n,")")},c.a.createElement("g",null,c.a.createElement("path",{fill:"none",stroke:"black",d:m(t)})),c.a.createElement("g",null,t.map((function(e,t){return c.a.createElement("g",{key:t,transform:"translate(".concat(s(e.x),", ").concat(i(e.y),")")},c.a.createElement("circle",{r:"10",fill:"".concat(d(u(e))),stroke:"black"}),c.a.createElement("text",{textAnchor:"middle",dominantBaseline:"central"},t))})))))},i=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("twi_time_coordinate_200_w8_ws15.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),console.log(a),c.a.createElement("div",null,c.a.createElement("section",{className:"hero is-primary"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"hello"),c.a.createElement("h2",{className:"subtitle"},"hello")))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"columns is-centered"},c.a.createElement("div",{className:"column is-half"},c.a.createElement("div",{className:"box"},c.a.createElement(s,{data:a})))))),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",null,"\xa92020 xiaotiandong"))))};Object(r.render)(c.a.createElement(i,null),document.querySelector("#content"))}},[[105,1,2]]]);
//# sourceMappingURL=main.9be52618.chunk.js.map