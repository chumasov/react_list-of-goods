(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(3),o=n.n(s),i=n(4),l=n(5),c=n(7),u=n(6),p=n(1),b=n.n(p),y=a.a.memo((function(e){var t=e.goods;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},e)})))}));y.propTypes={goods:b.a.arrayOf(b.a.string).isRequired};var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isVisible:!1,isReversed:!1,sortBy:""},e.visible=function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortAlphabetically=function(){e.setState({sortBy:"alphabetically"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e.reset=function(){e.setState({isReversed:!1,sortBy:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isVisible,n=e.isReversed,r=e.sortBy,s=[].concat(h);return s.sort((function(e,t){switch(r){case"alphabetically":return e.localeCompare(t);case"length":return e[r]-t[r];default:return 0}})),n&&s.reverse(),a.a.createElement("div",{className:"App"},t?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Goods"),a.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),a.a.createElement(y,{goods:s})):a.a.createElement("button",{type:"button",onClick:this.visible},"Start"))}}]),n}(a.a.Component);o.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc14ceb9.chunk.js.map