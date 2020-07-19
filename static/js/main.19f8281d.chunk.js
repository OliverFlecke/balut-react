(this["webpackJsonpbalut-react"]=this["webpackJsonpbalut-react"]||[]).push([[0],{21:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(16),c=n.n(u),l=n(2),o=n(7),i=n(1),s=n(6),f=n.n(s),d="#CCC",m="#CCC",v="#000",b="#222",p="#09F",h=f()("mode",{dark:d});function j(){var e=Object(l.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\tpadding: 10px;\n\tmargin: 6px;\n\tborder: none;\n\tborder-radius: 6px;\n\tfont-size: 1.2em;\n"]);return j=function(){return e},e}var O=f.a.variants("mode","variant",{disabled:{dark:"darkgray"},primary:{dark:"darkblue"}}),g=f.a.variants("mode","variant",{disabled:{dark:m},primary:{dark:m}}),E=i.d.button(j(),O,g),k=n(8),x=function(e){var t=e.dice,n=e.locked,u=e.index,c=e.toggleLock,l=Object(r.useCallback)((function(){return c(u)}),[c,u]),o=n?"red":"white";switch(t){case 1:return a.a.createElement(k.FaDiceOne,Object.assign({},y,{color:o,onClick:l}));case 2:return a.a.createElement(k.FaDiceTwo,Object.assign({},y,{color:o,onClick:l}));case 3:return a.a.createElement(k.FaDiceThree,Object.assign({},y,{color:o,onClick:l}));case 4:return a.a.createElement(k.FaDiceFour,Object.assign({},y,{color:o,onClick:l}));case 5:return a.a.createElement(k.FaDiceFive,Object.assign({},y,{color:o,onClick:l}));case 6:return a.a.createElement(k.FaDiceSix,Object.assign({},y,{color:o,onClick:l}))}return null},y={size:60},w=n(5),C=n(3),F=n(4),S=n(13);function N(e,t){return(null!==t&&void 0!==t?t:Object(S.a)(Array(5))).map((function(t,n){return e[n]?t:Math.floor(6*Math.random())+1}))}function I(){return Object(S.a)(Array(5)).map((function(){return!1}))}function B(e){return e.reduce((function(e,t){return e+t}),0)}var H=function(){function e(){Object(C.a)(this,e)}return Object(F.a)(e,[{key:"reduce",value:function(e){return Object(w.a)({},e,{roll:N(e.locked,e.roll),rollNumber:e.rollNumber+1})}}]),e}();function T(e,t){return t.reduce(e)}a.a.createContext({});var D,W={rollNumber:0,locked:I()},X=function(){function e(t){Object(C.a)(this,e),this.index=void 0,this.index=t}return Object(F.a)(e,[{key:"reduce",value:function(e){var t=this;return Object(w.a)({},e,{locked:e.locked.map((function(e,n){return t.index===n?!e:e}))})}}]),e}(),z=function(){function e(){Object(C.a)(this,e)}return Object(F.a)(e,[{key:"reduce",value:function(e){return Object(w.a)({},e,{locked:I(),roll:void 0,rollNumber:0})}}]),e}();function A(e){return e===D.FullHouse?"Full house":D[e]}function M(){var e=Object(l.a)(["\n\tborder: 1px solid ",";\n\tpadding: 4px;\n\ttext-align: center;\n\tmin-width: 20px;\n"]);return M=function(){return e},e}function R(){var e=Object(l.a)(["\n\ttext-align: left;\n\tborder: 1px solid ",";\n\tpadding: 4px;\n"]);return R=function(){return e},e}function J(){var e=Object(l.a)([""]);return J=function(){return e},e}function P(){var e=Object(l.a)(["\n\tborder-collapse: collapse;\n\twidth: 100%;\n\tmax-width: ",";\n"]);return P=function(){return e},e}!function(e){e[e.Fours=0]="Fours",e[e.Fives=1]="Fives",e[e.Sixes=2]="Sixes",e[e.Straight=3]="Straight",e[e.FullHouse=4]="FullHouse",e[e.Chance=5]="Chance",e[e.Balut=6]="Balut"}(D||(D={}));var V=i.d.table(P(),"760px"),L=i.d.tr(J()),_=i.d.th(R(),h),$=i.d.td(M(),h);function q(e){return Object.keys(e).filter((function(t){return"number"!==typeof e[t]})).map((function(e){return parseInt(e)}))}var G=function(){function e(t,n,r){Object(C.a)(this,e),this.category=void 0,this.index=void 0,this.value=void 0,this.category=t,this.index=n,this.value=r}return Object(F.a)(e,[{key:"reduce",value:function(e){var t={};return Object.assign(t,e.values),t[D[this.category]][this.index]=this.value,Object(w.a)({},e,{values:t})}}]),e}();var K=function(){var e=localStorage.getItem("state");if(null!==e)return JSON.parse(e);return{values:U()}}(),Q=a.a.createContext({state:K,dispatch:function(){}});function U(){return(e=D,Object.keys(e).filter((function(t){return"number"===typeof e[t]}))).reduce((function(e,t){return e[t]=[null,null,null,null],e}),{});var e}var Y=function(){function e(){Object(C.a)(this,e)}return Object(F.a)(e,[{key:"reduce",value:function(e){return localStorage.removeItem("state"),Object(w.a)({},e,{values:U()})}}]),e}();function Z(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: right;\n\tmargin: 0 -6px -6px;\n"]);return Z=function(){return e},e}var ee=function(){var e=Object(r.useContext)(Q).dispatch,t=Object(r.useCallback)((function(){e(new Y)}),[e]);return a.a.createElement(te,null,a.a.createElement(E,{variant:"primary",onClick:t},"New game"))},te=i.d.div(Z());function ne(){var e=Object(l.a)(["\n\tfont-size: 1.4em;\n\tborder-bottom: 1px solid white;\n"]);return ne=function(){return e},e}function re(){var e=Object(l.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: flex-end;\n\tmargin: 6px 0;\n\tmax-width: ",";\n"]);return re=function(){return e},e}var ae=function(e){var t=e.points;return a.a.createElement(ue,null,a.a.createElement(ce,null,a.a.createElement("span",null,"Final score: "),a.a.createElement("span",null,t)))},ue=i.d.div(re(),"760px"),ce=i.d.div(ne()),le=function(e){var t=e.total,n=e.extraPoints;return a.a.createElement("tfoot",null,a.a.createElement(L,null,a.a.createElement("td",{colSpan:5}),a.a.createElement($,null,t),a.a.createElement($,null,n)))},oe=function(){function e(t){Object(C.a)(this,e),this.name=void 0,this.name=t}return Object(F.a)(e,[{key:"reduce",value:function(e){return console.log("Changing name ".concat(this.name)),Object(w.a)({},e,{name:this.name})}}]),e}();function ie(){var e=Object(l.a)(["\n\twidth: 100%;\n\tflex-grow: 1;\n\tmargin: 0 6px;\n"]);return ie=function(){return e},e}function se(){var e=Object(l.a)(["\n\tdisplay: flex;\n"]);return se=function(){return e},e}function fe(){var e=Object(l.a)(["\n\ttext-align: left;\n\tborder: none;\n"]);return fe=function(){return e},e}var de=function(){var e,t=Object(r.useContext)(Q),n=t.state,u=t.dispatch,c=Object(r.useCallback)((function(e){var t;u(new oe(null!==(t=e.currentTarget.innerText)&&void 0!==t?t:void 0))}),[u]);return a.a.createElement("thead",null,a.a.createElement(L,null,a.a.createElement(me,{colSpan:5},a.a.createElement(ve,null,"Name:",a.a.createElement(be,{contentEditable:!0,onBlur:c,dangerouslySetInnerHTML:{__html:null!==(e=n.name)&&void 0!==e?e:""}}))),a.a.createElement($,null,"Total"),a.a.createElement($,null,"Points")))},me=Object(i.d)($)(fe()),ve=i.d.div(se()),be=i.d.span(ie());function pe(){var e=Object(l.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n\tuser-select: none;\n"]);return pe=function(){return e},e}var he=function(e){var t=e.category,n=e.value,u=e.index,c=e.suggestion,l=Object(r.useContext)(Q).dispatch,o=Object(r.useCallback)((function(){c&&l(new G(t,u,c))}),[l,u,c,t]);return a.a.createElement(ge,{onClick:o,variant:c?"suggestion":"default"},function(e){return void 0===e||null===e||0===e?"":"X"===e?"X":e.toString()}(null!==n?n:c))};var je=f()("mode",{dark:b}),Oe=f.a.variants("mode","variant",{default:{dark:m},suggestion:{dark:p}}),ge=Object(i.d)($)(pe(),je,Oe),Ee=n(20);function ke(e,t){switch(e){case D.Balut:return 2*t.filter((function(e){return"number"===typeof e&&0!==e})).length;case D.Chance:return xe(t)>=100?2:0;case D.FullHouse:return 4===t.filter((function(e){return"number"===typeof e})).length?3:0;case D.Straight:return 4===t.filter((function(e){return"number"===typeof e})).length?4:0;case D.Sixes:return xe(t)>=78?2:0;case D.Fives:return xe(t)>=65?2:0;case D.Fours:return xe(t)>=52?2:0}}function xe(e){return e.filter((function(e){return"number"===typeof e})).map((function(e){return e})).reduce((function(e,t){return e+t}),0)}var ye=[300,350,400,450,500,550,600,650];function we(e,t){if(!t)return null;switch(e){case D.Fours:return B(t.filter((function(e){return 4===e})));case D.Fives:return B(t.filter((function(e){return 5===e})));case D.Sixes:return B(t.filter((function(e){return 6===e})));case D.Straight:return function(e){return e.some((function(e){return 1===e||6===e}))&&[2,3,4,5].every((function(t){return e.includes(t)}))}(t)?B(t):"X";case D.FullHouse:return function(e){var t=new Set(e);if(2!==t.size)return!1;return Array.from(t).every((function(t){var n=e.filter((function(e){return e===t})).length;return 3===n||2===n}))}(t)?B(t):"X";case D.Chance:return B(t);case D.Balut:return t.every((function(e){return e===t[0]}))?B(t)+20:"X"}}var Ce=function(e){var t=e.category,n=e.values,u=e.roll,c=Object(r.useMemo)((function(){return A(t)}),[t]),l=xe(n),o=ke(t,n),i=we(t,u),s=!0;return a.a.createElement(L,null,a.a.createElement(_,null,c),n.map((function(e,n){var r=s&&null===e;return r&&(s=!1),a.a.createElement(he,{key:n,index:n,value:e,category:t,suggestion:r?0===i?"X":i:void 0})})),a.a.createElement($,null,l),a.a.createElement($,null,o))},Fe=q(D),Se=function(e){var t=e.roll,n=e.onValueWritten,u=Object(r.useCallback)(function(e){var t=e.onValueWritten;return function(e,n){var r=n.reduce(e);return localStorage.setItem("state",JSON.stringify(r)),n instanceof G&&t&&t(),r}}({onValueWritten:n}),[]),c=Object(r.useReducer)(u,K),l=Object(o.a)(c,2),i=l[0],s=l[1],f=Object.keys(i.values).map((function(e){return xe(i.values[e])})).reduce((function(e,t){return e+t})),d=function(e){var t,n=-2,r=Object(Ee.a)(ye);try{for(r.s();!(t=r.n()).done;){if(e<t.value)break;n++}}catch(a){r.e(a)}finally{r.f()}return n}(f),m=d+q(D).map((function(e){return ke(e,i.values[D[e]])})).reduce((function(e,t){return e+t}),0);return a.a.createElement(Q.Provider,{value:{state:i,dispatch:s}},a.a.createElement(V,null,a.a.createElement(de,null),a.a.createElement("tbody",null,Fe.map((function(e){return a.a.createElement(Ce,{key:e,category:e,values:i.values[D[e]],roll:t})}))),a.a.createElement(le,{extraPoints:d,total:f})),a.a.createElement(ae,{points:m}),a.a.createElement(ee,null))};function Ne(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tmargin: 6px -6px;\n"]);return Ne=function(){return e},e}function Ie(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n"]);return Ie=function(){return e},e}function Be(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n"]);return Be=function(){return e},e}var He=function(){var e=Object(r.useReducer)(T,W),t=Object(o.a)(e,2),n=t[0],u=t[1],c=Object(r.useState)(n.roll),l=Object(o.a)(c,2),i=l[0],s=l[1];Object(r.useEffect)((function(){return s(n.roll)}),[n.roll]);var f=Object(r.useCallback)((function(){var e=setInterval((function(){s(N(n.locked,n.roll))}),50);setTimeout((function(){clearInterval(e),u(new H)}),1e3)}),[u,n]),d=Object(r.useCallback)((function(e){return u(new X(e))}),[u]),m=Object(r.useCallback)((function(){u(new z)}),[u]),v=Object(r.useCallback)((function(){return m()}),[m]);return a.a.createElement(Te,null,a.a.createElement(Se,{roll:n.roll,onValueWritten:v}),a.a.createElement("h3",null,0===n.rollNumber?"Roll your dice!":"Roll #".concat(n.rollNumber," of 3")),a.a.createElement(De,null,null===i||void 0===i?void 0:i.map((function(e,t){return a.a.createElement(x,{key:t,dice:e,index:t,toggleLock:d,locked:n.locked[t]})}))),a.a.createElement(We,null,a.a.createElement(E,{variant:3===n.rollNumber?"disabled":"primary",onClick:f,disabled:3===n.rollNumber},"Roll")))},Te=i.d.div(Be()),De=i.d.div(Ie()),We=i.d.div(Ne());function Xe(){var e=Object(l.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return Xe=function(){return e},e}function ze(){var e=Object(l.a)(["\n\tdisplay: inline;\n\tlist-style-type: none;\n\tpadding: 0;\n\tmargin: 0;\n"]);return ze=function(){return e},e}function Ae(){var e=Object(l.a)(["\n\twidth: 100%;\n\tmax-width: 350px;\n"]);return Ae=function(){return e},e}function Me(){var e=Object(l.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n"]);return Me=function(){return e},e}var Re=[[D.Fours,"52 or more",2],[D.Fives,"65 or more",2],[D.Sixes,"78 or more",2],[D.Straight,"All straights",4],[D.FullHouse,"All full house",3],[D.Chance,"100 or more",2],[D.Balut,"Each balut",2]],Je=[[0,299,-2],[300,349,-1],[350,399,0],[400,449,1],[450,499,2],[500,549,3],[549,599,4],[600,649,5],[650,"or above",6]],Pe=function(){return a.a.createElement(Ve,null,a.a.createElement(Le,null,a.a.createElement("h3",null,"How to calculate points"),a.a.createElement(_e,null,Re.map((function(e){var t=Object(o.a)(e,3),n=t[0],r=t[1],u=t[2];return a.a.createElement($e,{key:n},a.a.createElement("span",null,A(n)," - ",r),a.a.createElement("strong",null,u," points"))}))),a.a.createElement("h4",null,"Extra points from total score"),a.a.createElement(_e,null,Je.map((function(e){var t=Object(o.a)(e,3),n=t[0],r=t[1],u=t[2];return a.a.createElement($e,{key:u},a.a.createElement("span",null,n," - ",r),a.a.createElement("strong",null,u," points"))})))))},Ve=i.d.div(Me()),Le=i.d.div(Ae()),_e=i.d.ul(ze()),$e=i.d.li(Xe());function qe(){var e=Object(l.a)(["\n\tmargin: 0;\n\tfont-size: 3em;\n"]);return qe=function(){return e},e}function Ge(){var e=Object(l.a)(["\n\tbody {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tfont-family: Futura;\n\t\t","\n\t}\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(l.a)(["\n\t","\n\tpadding: 12px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(l.a)(["\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t"]);return Qe=function(){return e},e}var Ue=function(){var e,t=Object(r.useState)(null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:"dark"),n=Object(o.a)(t,2),u=n[0],c=n[1];return Object(r.useCallback)((function(e){localStorage.setItem("theme",e),c(e)}),[c]),a.a.createElement(i.a,{theme:{mode:u}},a.a.createElement(et,null),a.a.createElement(Ze,null,a.a.createElement("header",null,a.a.createElement(tt,null,"Balut")),a.a.createElement("section",null,a.a.createElement(He,null)),a.a.createElement(Pe,null)))},Ye=f()("mode",{dark:Object(i.c)(Qe(),v,m)}),Ze=i.d.main(Ke(),Ye),et=Object(i.b)(Ge(),Ye),tt=i.d.h1(qe());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.19f8281d.chunk.js.map