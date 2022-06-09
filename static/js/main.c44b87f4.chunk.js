(this["webpackJsonppipefy-clone"]=this["webpackJsonppipefy-clone"]||[]).push([[0],{46:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(0),o=t.n(a),i=t(23),c=t.n(i),s=t(48),d=t(29),l=t(4),u=t(5);function p(){var n=Object(l.a)(["\n  \n  //Importando fonte\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');\n  \n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    font: 14px 'Roboto', sans-serif;\n    background: #ecf1f8;\n    color: #333;\n    -webkit-font-smoothing: antialiased !important;\n  }\n  \n  ul {\n    list-style: none;\n  }\n"]);return p=function(){return n},n}var b=Object(u.a)(p());function g(){var n=Object(l.a)(["\n  height: 80px;\n  padding: 0 30px;\n  background: #7159c1;\n  color: #FFF;\n  display: flex;\n  align-items: center;\n"]);return g=function(){return n},n}var x=u.c.div(g());function f(){return Object(r.jsx)(x,{children:Object(r.jsx)("h1",{children:"Pipefy"})})}var h=t(10),j=t(28);var m=Object(a.createContext)({}),O=t(30),V=t(49),w=t(50);function v(){var n=Object(l.a)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: ",";\n"]);return v=function(){return n},n}function E(){var n=Object(l.a)(["\n    border: 2px dashed rgba(0, 0, 0, 0.2);\n    padding-top: 31px;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n    cursor: grabbing;\n    p, img, header {\n      opacity: 0;\n    }\n  "]);return E=function(){return n},n}function B(){var n=Object(l.a)(["\n  position: relative;\n  background: #FFF;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  padding: 15px;\n  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);\n  border-top: 20px solid rgba(230, 236, 245, 0.4);\n  cursor: grab;\n  \n  header {\n    position: absolute;\n    top: -22px;\n    left: 15px;\n  }\n\n  p {\n    font-weight: 500;\n    line-height: 20px;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n    border-radius: 2px;\n    margin-top: 5px;\n  }\n  \n  //Se ele tiver a propriedade de isDragging, adiciona esse css a mais\n  //\xe9 p fazer aquele efeito de ficar os tracinho atr\xe1s do card\n  ","\n"]);return B=function(){return n},n}var F=u.c.div(B(),(function(n){return n.isDragging&&Object(u.b)(E())})),M=u.c.span(v(),(function(n){return n.color}));function C(n){var e=n.data,t=n.index,o=n.listIndex,i=Object(a.useRef)(),c=Object(a.useContext)(m).move,s=Object(V.a)({item:{type:"CARD",index:t,listIndex:o},collect:function(n){return{isDragging:n.isDragging()}}}),d=Object(h.a)(s,2),l=d[0].isDragging,u=d[1],p=Object(w.a)({accept:"CARD",hover:function(n,e){var r=n.listIndex,a=o,s=n.index,d=t;if(s!==d||r!==a){var l=i.current.getBoundingClientRect(),u=(l.bottom-l.top)/2,p=e.getClientOffset().y-l.top;s<d&&p<u||s>d&&p>u||(c(r,a,s,d),n.index=d,n.listIndex=a)}}});return u((0,Object(h.a)(p,2)[1])(i)),Object(r.jsxs)(F,{ref:i,isDragging:l,children:[Object(r.jsx)("header",{children:e.labels.map((function(n){return Object(r.jsx)(M,{color:n},n)}))}),Object(r.jsx)("p",{children:e.content}),e.user&&Object(r.jsx)("img",{src:e.user,alt:""})]})}function K(){var n=Object(l.a)(["\n  padding: 0 15px;\n  height: 100%;\n  flex: 0 0 320px;\n \n //Olha se passou a propriedade done, se for true coloca a opacidade como 0.6 \n //caso contratio como 1\n  opacity: ",";\n  \n  //Dizendo que ira estilizar pos a primeira div\n  & + div {\n    border-left: 1px solid rgba(0, 0, 0, 0.05);\n  }\n \n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 42px;\n    h2 {\n      font-weight: 500;\n      font-size: 16px;\n      padding: 0 10px;\n    }\n    button {\n      width: 42px;\n      height: 42px;\n      border-radius: 18px;\n      background: #3b5bfd;\n      border: 0;\n      cursor: pointer;\n    }\n  }\n\n  ul {\n    margin-top: 30px;\n  }\n"]);return K=function(){return n},n}var N=u.c.div(K(),(function(n){return n.done?.6:1}));function J(n){var e=n.data,t=n.index;return Object(r.jsxs)(N,{done:e.done,children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:e.title}),e.creatable&&Object(r.jsx)("button",{type:"button",children:Object(r.jsx)(O.a,{size:24,color:"#FFF"})})]}),Object(r.jsx)("ul",{children:e.cards.map((function(n,e){return Object(r.jsx)(C,{listIndex:t,index:e,data:n},n.id)}))})]})}function y(){var n=Object(l.a)(["\n  display: flex;\n  padding: 30px 0;\n  height: calc(100% - 80px);\n"]);return y=function(){return n},n}var S=u.c.div(y()),G=[{title:"Tarefas",creatable:!0,cards:[{id:1,content:"Estudar Web",labels:["#7159c1"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:2,content:"Estudar algebra",labels:["#7159c1"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:3,content:"Estudar geometria",labels:["#7159c1"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:4,content:"Estudar",labels:["#54e1f7"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:5,content:"Programar",labels:["#54e1f7"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}]},{title:"Fazendo",creatable:!1,cards:[{id:6,content:"Chorando p\xf3s provas do wallace",labels:[],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"}]},{title:"Pausado",creatable:!1,cards:[{id:7,content:"Jogar dota",labels:["#7159c1"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:8,content:"Youtube",labels:["#54e1f7"],user:"https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"},{id:9,content:"Ler",labels:[]}]},{title:"Conclu\xeddo",creatable:!1,done:!0,cards:[{id:10,content:"Programar",labels:[]},{id:12,content:"Jogar",labels:["#54e1f7"]},{id:13,content:"Jogar",labels:["#7159c1"]}]}];function z(){var n=Object(a.useState)(G),e=Object(h.a)(n,2),t=e[0],o=e[1];return Object(r.jsx)(m.Provider,{value:{lists:t,move:function(n,e,r,a){o(Object(j.a)(t,(function(t){var o=t[n].cards[r];t[n].cards.splice(r,1),t[e].cards.splice(a,0,o)})))}},children:Object(r.jsx)(S,{children:t.map((function(n,e){return Object(r.jsx)(J,{index:e,data:n},n.title)}))})})}var k=function(){return Object(r.jsxs)(s.a,{backend:d.a,children:[Object(r.jsx)(f,{}),Object(r.jsx)(z,{}),Object(r.jsx)(b,{})]})};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c44b87f4.chunk.js.map