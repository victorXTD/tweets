(this.webpackJsonptweets=this.webpackJsonptweets||[]).push([[0],{105:function(e,t,a){e.exports=a(111)},111:function(e,t,a){"use strict";a.r(t);a(106);var n=a(0),c=a.n(n),r=a(50),o=a(16),l=a(2),i=function(e){var t=e.data,a=20,n=20,r=a+20+800,o=n+70+600,i=l.d().domain(l.a(t,(function(e){return e.x}))).range([0,800]),s=l.d().domain(l.a(t,(function(e){return e.y}))).range([600,0]),m=l.c().x((function(e){return i(e.x)})).y((function(e){return s(e.y)})),u=function(e){return new Date(e.time).getTime()},f=l.e(l.b).domain(l.a(t,u));return console.log(f.ticks()),c.a.createElement("svg",{viewBox:"0 0 ".concat(r," ").concat(o)},c.a.createElement("g",{transform:"translate(".concat(a,", ").concat(n,")")},c.a.createElement("g",null,c.a.createElement("path",{fill:"none",stroke:"lightgray",d:m(t)})),c.a.createElement("g",null,t.map((function(e,t){var a=new Date(e.time);return c.a.createElement("g",{key:t,transform:"translate(".concat(i(e.x),", ").concat(s(e.y),")")},c.a.createElement("circle",{r:"3",opacity:"0.5",fill:"".concat(f(u(e)))},c.a.createElement("title",null,a.getFullYear(),"/",(a.getMonth()+1).toString().padStart(2,"0"),"/",a.getDate().toString().padStart(2,"0"),"-",a.getHours().toString().padStart(2,"0"))))})))),c.a.createElement("g",{transform:"translate(".concat(a,", ").concat(n+600+25,")")},f.ticks().map((function(e,t){var a=new Date(e);return c.a.createElement("g",{key:t,transform:"translate(".concat(80*t,", ",0,")")},c.a.createElement("circle",{r:"2",opacity:"0.5",fill:"".concat(f(e))}),c.a.createElement("text",{dominantBaseline:"central",fontSize:"8",x:"5"},a.getFullYear(),(a.getMonth()+1).toString().padStart(2,"0"),a.getDate().toString().padStart(2,"0")))}))))},s=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){fetch("twi_time_coordinate_200_w8_ws10.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){fetch("twi_time_coordinate_200_w8_ws20.json").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]),console.log(a),c.a.createElement("div",null,c.a.createElement("section",{className:"hero is-primary"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"hello"),c.a.createElement("h2",{className:"subtitle"},"hello")))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"container"},c.a.createElement("h3",{className:"title is-4"},"twi_time_coordinate_200_w8_ws20")),c.a.createElement("div",{className:"box"},c.a.createElement(i,{data:m}))))),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",null,"\xa92020 xiaotiandong"))))};Object(r.render)(c.a.createElement(s,null),document.querySelector("#content"))}},[[105,1,2]]]);
//# sourceMappingURL=main.f6cb34fc.chunk.js.map