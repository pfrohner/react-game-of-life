(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),u=n.n(o),c=n(1);var i=function(){return Math.round(Math.random())};function l(e,t){var n=Object(r.useState)([]),a=Object(c.a)(n,2),o=a[0],u=a[1],l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o[e];return n&&n[t]||0},f=function(e,t){return l(e-1,t-1)+l(e-1,t)+l(e-1,t+1)+l(e,t-1)+l(e,t+1)+l(e+1,t-1)+l(e+1,t)+l(e+1,t+1)},s=Object(r.useCallback)((function(){u(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return Array.from({length:e},(function(){return Array.from({length:t},n)}))}(e,t))}),[e,t]);return Object(r.useEffect)((function(){s()}),[s]),{reset:s,grid:o,step:function(){for(var n=[],r=0;r<e;r++){for(var a=[],o=0;o<t;o++){var c=f(r,o);l(r,o)?c<2?a.push(0):c<4?a.push(1):a.push(0):3===c?a.push(1):a.push(0)}n.push(a)}u(n)}}}var f=function(){var e=l(25,25),t=e.grid,n=e.reset,o=function(e,t){var n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],u=a[1],i=Object(r.useRef)(e);return i.current=e,Object(r.useEffect)((function(){if(o){var e=setInterval((function(){return i.current()}),t);return function(){clearInterval(e)}}}),[o,t]),{running:o,toggle:function(){u((function(e){return!e}))}}}(e.step,100),u=o.running,i=o.toggle,f={display:"inline-block",backgroundColor:"#007BFF",borderColor:"#007BFF",color:"#FFF",padding:".375rem .75rem",margin:".5rem .5rem",fontFize:"1rem",lineHeight:"1.5",fontWeight:500};return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{style:{textAlign:"center",padding:"2rem"}},a.a.createElement("button",{onClick:function(){i()},style:f},u?"Stop":"Start"),a.a.createElement("button",{onClick:function(){n()},style:f},"Reset")),a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(25,", 20px)"),justifyContent:"center"}},t.map((function(e,n){return e.map((function(e,r){return a.a.createElement("div",{key:"".concat(n,"-").concat(r),style:{width:20,height:20,backgroundColor:t[n][r]?"lightblue":"transparent",border:"solid 1px black"}})}))}))))};u.a.render(a.a.createElement(f,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.e24b9b84.chunk.js.map