(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),s=n(4),a=n(5),o=n(7),i=n(6),u=n(1),d=n(0),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={keyPress:""},e.documentCLick=function(t){var n=t.key;return e.setState({keyPress:n}),n},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.documentCLick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.documentCLick)}},{key:"render",value:function(){var e=this.state.keyPress;return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__keyPress",children:e?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})})}}]),n}(u.Component);n(13);r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.66414cc0.chunk.js.map