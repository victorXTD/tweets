(this.webpackJsonptweets=this.webpackJsonptweets||[]).push([[0],{107:function(e,t,n){e.exports=n(113)},113:function(e,t,n){"use strict";n.r(t);n(108);var a=n(0),c=n.n(a),r=n(52),o=n(5),i=n(3),l=n(1),s=function(e){var t=e.data,n=Object(a.useState)([]),r=Object(i.a)(n,2),o=r[0],s=r[1],f=Object(a.useState)([]),d=Object(i.a)(f,2),g=d[0],h=d[1],v=Object(a.useState)([]),E=Object(i.a)(v,2),w=E[0],y=E[1],x=Object(a.useState)(!1),p=Object(i.a)(x,2),b=p[0],j=p[1],N=Object(a.useState)(!0),S=Object(i.a)(N,2),_=S[0],O=S[1],z=20,D=20,k=z+20+800,M=D+70+800,C=l.j().domain(l.a(t,(function(e){return e.x}))).range([0,800]),T=l.j().domain(l.a(t,(function(e){return e.y}))).range([800,0]),P=l.g().x((function(e){return C(e.x)})).y((function(e){return T(e.y)})),B=function(e){return new Date(e.time).getTime()},F=l.k(l.f).domain(l.a(t,B));return F.ticks().length,c.a.createElement("div",{className:"container max-width"},c.a.createElement("section",{className:"section is-fullwidth"}),c.a.createElement("div",{className:"container max-width"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-two-fifths"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement("h3",{className:"title is-4"},"twi_time_coordinate_200_w8_ws20")),c.a.createElement("div",{className:"box"},c.a.createElement("svg",{viewBox:"0 0 ".concat(k," ").concat(M)},c.a.createElement("g",{transform:"translate(".concat(z,", ").concat(D,")")},c.a.createElement("g",null,c.a.createElement("path",{fill:"none",stroke:"lightgray",d:P(t)})),c.a.createElement("g",null,t.map((function(e,t){var n=new Date(e.time);return c.a.createElement("g",{key:t,transform:"translate(".concat(C(e.x),", ").concat(T(e.y),")"),onClick:function(){var t=e.time;s(t);var n=e.same_clustering;h(n),j(!0),console.log(b)},onMouseEnter:function(){if(!1===b){_&&y(-1),console.log(b);var t=e.time;s(t);var n=e.same_clustering;h(n)}},onMouseLeave:function(){if(!1===b){console.log(b);var e=new Date;s(e)}}},c.a.createElement("circle",{r:"3",opacity:"0.5",fill:"".concat(F(B(e)))},c.a.createElement("title",null,n.getFullYear(),"/",(n.getMonth()+1).toString().padStart(2,"0"),"/",n.getDate().toString().padStart(2,"0"),"-",n.getHours().toString().padStart(2,"0"))))})))),c.a.createElement("g",{transform:"translate(".concat(z,", ").concat(D+800+25,")")},F.ticks().map((function(e,t){var n=new Date(e);return c.a.createElement("g",{key:t,transform:"translate(".concat(90*t,", ",0,")")},c.a.createElement("circle",{r:"3",opacity:"0.5",fill:"".concat(F(e))}),c.a.createElement("text",{dominantBaseline:"central",fontSize:"12",x:"5"},n.getFullYear(),(n.getMonth()+1).toString().padStart(2,"0"),n.getDate().toString().padStart(2,"0")))})))))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"container max-width"},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("p",{className:"control"},c.a.createElement("span",{className:"select"},c.a.createElement("select",{className:"wordPlotPattern",onChange:function(e){console.log("e = "+e.target.value),"Clusters"===e.target.value?(O(!0),j(!1)):(O(!1),j(!0),y(5))}},c.a.createElement("option",null,"Clusters"),c.a.createElement("option",null,"Hours")))),c.a.createElement("p",{className:"control is-expanded"},c.a.createElement("input",{id:"windowSize",className:"input",type:"text",placeholder:"Window size, defult 5.",value:w,onChange:function(e){!0===_?(console.log("wordPlotPatternC = "+_),j(!1),y(-1)):(console.log("wordPlotPatternC = "+_),j(!1),y(e.target.value))}})),c.a.createElement("button",{className:"button is-rounded",onClick:function(){j(!1);var e=new Date;s(e)}},"unlock"))),c.a.createElement("div",{className:"container"},0===o.length?c.a.createElement("div",{className:"container"},c.a.createElement(u,null)):c.a.createElement("div",{className:"container"},c.a.createElement(m,{timeData:o,windowSize:w,clusterList:g})))))))},u=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch("dbscan_word_coordinate.json").then((function(e){return e.json()})).then((function(e){var t,n=l.j().domain([l.i(e,(function(e){return e.x})),l.h(e,(function(e){return e.x}))]).range([0,s]).nice(),a=l.j().domain([l.h(e,(function(e){return e.y})),l.i(e,(function(e){return e.y}))]).range([0,u]).nice(),c=Object(o.a)(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;i.x=n(i.x),i.y=a(i.y),i.size=5*Math.log(i.count)}}catch(b){c.e(b)}finally{c.f()}l.e(e).force("collide",l.c().radius((function(e){return e.size})).strength(.01).iterations(30)).force("charge",l.d().strength(1)).force("center",l.b()).tick(300).stop();var m,f=s,d=l.i(e,(function(e){return e.x-e.size})),g=l.h(e,(function(e){return e.x+e.size})),h=l.i(e,(function(e){return e.y-e.size})),v=l.h(e,(function(e){return e.y+e.size})),E=Math.max(-d+g,-h+v),w=d+E/2,y=h+E/2,x=Object(o.a)(e);try{for(x.s();!(m=x.n()).done;){var p=m.value;p.x=(p.x-w)/E*f+f/2,p.y=(p.y-y)/E*f+f/2,p.size=p.size*f/E}}catch(b){x.e(b)}finally{x.f()}r(e)}))}),[]);var s=800,u=800,m=0,f=0,d=s+m+0,g=u+f+0,h=function(e){return e.size},v=l.j().domain([l.i(n,(function(e){return e.count})),l.h(n,(function(e){return e.count}))]).range([.5,1]).nice(),E=function(e){return v(e.count)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement("h3",{className:"title is-4"},"All Time Word")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"box"},c.a.createElement("svg",{viewBox:"0 0 ".concat(d," ").concat(g)},c.a.createElement("g",{transform:"translate(".concat(m,", ").concat(f,")")},n.map((function(e,t){return c.a.createElement("g",{key:t,transform:"translate(".concat(e.x,", ").concat(e.y,")")},c.a.createElement("title",null,"".concat(e.word)),c.a.createElement("circle",{r:"".concat(h(e),"px"),fill:(n=e.color,"red"===n?"lightgray":n),opacity:E(e)}),c.a.createElement("text",{fontSize:"".concat(.6*h(e),"px"),textAnchor:"middle",dominantBaseline:"central"},e.word));var n})))))))},m=function(e){var t=e.timeData,n=e.windowSize,r=e.clusterList,s=Object(a.useState)([]),m=Object(i.a)(s,2),f=m[0],d=m[1];0===n.length&&(n=5),console.log("windowSize = "+n);var g=new Date(t);Object(a.useEffect)((function(){var e=function(e){var t=new Date("2019/12/17 10:00"),n=new Date("2020/03/31 23:00");return e.getTime()>=t.getTime()&&e.getTime()<=n.getTime()?1:0},a=function(e){var t=e.getFullYear(),n=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0"),c="".concat(t).concat(n).concat(a),r=e.getHours().toString().padStart(2,"0");return"./dbscan_word_coordinate_by_hour/".concat(c,"/").concat(c,"_").concat(r,".json")},c=function(e){var t=e.substring(0,4),n=e.substring(5,7),a=e.substring(8,10),c=e.substring(11,13),r="".concat(t).concat(n).concat(a);return"./dbscan_word_coordinate_by_hour/".concat(r,"/").concat(r,"_").concat(c,".json")},i=new Date(t),s=[];if(e(i))if(s.push(a(i)),n<0){var u,m=Object(o.a)(r);try{for(m.s();!(u=m.n()).done;){var f=u.value;s.push(c(f))}}catch(x){m.e(x)}finally{m.f()}}else for(var g=1;g<=n;++g){var E=new Date(i.getTime()+36e5*g);e(E)&&s.push(a(E));var w=new Date(i.getTime()-36e5*g);e(w)&&s.push(a(w))}var y=s.map((function(e){return fetch(e).then((function(e){return e.json()}))}));Promise.all(y).then((function(e){var t,n={},a=Object(o.a)(e);try{for(a.s();!(t=a.n()).done;){var c,r=t.value,i=Object(o.a)(r);try{for(i.s();!(c=i.n()).done;){var l=c.value;l.word in n||(n[l.word]={word:l.word,count:0,total_count:l.total_count,color:l.color,x:l.x,y:l.y}),n[l.word].count+=l.count}}catch(x){i.e(x)}finally{i.f()}}}catch(x){a.e(x)}finally{a.f()}var s=[];for(var u in n)s.push(n[u]);return s})).then((function(e){var t,n=l.j().domain([l.i(e,(function(e){return e.x})),l.h(e,(function(e){return e.x}))]).range([0,h]).nice(),a=l.j().domain([l.h(e,(function(e){return e.y})),l.i(e,(function(e){return e.y}))]).range([0,v]).nice(),c=Object(o.a)(e);try{for(c.s();!(t=c.n()).done;){var r=t.value;r.x=n(r.x),r.y=a(r.y),r.size=50*Math.log(r.count)}}catch(x){c.e(x)}finally{c.f()}l.e(e).force("collide",l.c().radius((function(e){return e.size})).strength(.01).iterations(30)).force("charge",l.d().strength(1)).force("center",l.b()).tick(300).stop();var i,s=h,u=l.i(e,(function(e){return e.x-e.size})),m=l.h(e,(function(e){return e.x+e.size})),f=l.i(e,(function(e){return e.y-e.size})),g=l.h(e,(function(e){return e.y+e.size})),E=Math.max(-u+m,-f+g),w=u+E/2,y=f+E/2,p=Object(o.a)(e);try{for(p.s();!(i=p.n()).done;){var b=i.value;b.x=(b.x-w)/E*s+s/2,b.y=(b.y-y)/E*s+s/2,b.size=b.size*s/E}}catch(x){p.e(x)}finally{p.f()}d(e)}))}),[t,n,r]);var h=800,v=800,E=0,w=0,y=h+E+0,x=v+w+0,p=function(e){return e.size},b=l.j().domain([l.i(f,(function(e){return e.count})),l.h(f,(function(e){return e.count}))]).range([.5,1]).nice(),j=function(e){return b(e.count)};return 0===f.length?c.a.createElement("div",{className:"container"},c.a.createElement(u,null)):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container has-text-centered"},c.a.createElement("h3",{className:"title is-4"},g.getFullYear(),"/",(g.getMonth()+1).toString().padStart(2,"0"),"/",g.getDate().toString().padStart(2,"0"),"-",g.getHours().toString().padStart(2,"0")," window = ",n)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"box"},c.a.createElement("svg",{viewBox:"0 0 ".concat(y," ").concat(x)},c.a.createElement("g",{transform:"translate(".concat(E,", ").concat(w,")")},f.map((function(e,t){return c.a.createElement("g",{key:t,transform:"translate(".concat(e.x,", ").concat(e.y,")")},c.a.createElement("title",null,"word:".concat(e.word)),c.a.createElement("circle",{r:"".concat(p(e),"px"),fill:(n=e.color,"red"===n?"lightgray":n),opacity:j(e)}),c.a.createElement("text",{fontSize:"".concat(.6*p(e),"px"),textAnchor:"middle",dominantBaseline:"central"},e.word));var n})))))))},f=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("twi_time_coordinate_200_w8_ws20_with_clustering.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("section",{className:"hero is-primary"},c.a.createElement("div",{className:"hero-body"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"hello"),c.a.createElement("h2",{className:"subtitle"},"hello")))),c.a.createElement(s,{data:n}),c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"content has-text-centered"},c.a.createElement("p",null,"\xa92020 xiaotiandong"))))};Object(r.render)(c.a.createElement(f,null),document.querySelector("#content"))}},[[107,1,2]]]);
//# sourceMappingURL=main.b3fd48c0.chunk.js.map