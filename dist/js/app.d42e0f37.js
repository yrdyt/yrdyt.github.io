(function(){"use strict";var t={3674:function(t,n,e){var o=e(144),r=function(){var t=this,n=t._self._c;return n("div",[n("headers"),n("sy")],1)},i=[],a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"header"},[n("div",[n("van-cell",{staticClass:"lef",attrs:{"is-link":""},on:{click:t.showPopup}}),n("van-popup",{style:{height:"100%",width:"60%","background-color":"skyblue"},attrs:{position:"left"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[n("van-collapse",{staticClass:"aaa",style:{"padding-top":"20px","background-color":"skyblue"},model:{value:t.activeNames,callback:function(n){t.activeNames=n},expression:"activeNames"}},[n("van-collapse-item",{attrs:{title:"标题1",name:"1"}},[t._v("内容")]),n("van-collapse-item",{attrs:{title:"标题2",name:"2"}},[t._v("内容")]),n("van-collapse-item",{attrs:{title:"标题3",name:"3"}},[t._v("内容")])],1)],1)],1),t._m(0)])},s=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"ti"},[n("span",[t._v("XX商城")])])}],c={name:"aa",data(){return{show:!1,activeNames:["1"]}},methods:{showPopup(){this.show=!0}}},l=c,u=e(1001),f=(0,u.Z)(l,a,s,!1,null,"3b5b324a",null),d=f.exports,p=function(){var t=this,n=t._self._c;return n("div",{staticClass:"body"},t._l(t.abc,(function(t,e){return n("kuai",{key:e})})),1)},v=[],h=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"kuai"},[n("img",{attrs:{src:e(8056),alt:""}})])}],b={},w=b,_=(0,u.Z)(w,h,m,!1,null,"084456da",null),g=_.exports,y={name:"sy",data(){return{abc:[1,2,3,4,5,6,7,8]}},methods:{Scrollbottom(){let t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight,e=document.documentElement.scrollHeight;t+n>=e&&(console.log("滚动到底部了"),this.abc=[...this.abc,...this.abc])}},components:{kuai:g},mounted(){},created(){window.addEventListener("scroll",this.Scrollbottom)},destroyed(){window.removeEventListener("scroll",this.Scrollbottom)}},k=y,x=(0,u.Z)(k,p,v,!1,null,null,null),O=x.exports,C={name:"app",components:{headers:d,sy:O}},P=C,Z=(0,u.Z)(P,r,i,!1,null,"98e68aee",null),j=Z.exports,E=e(7777);e(5110);o.ZP.config.productionTip=!1,o.ZP.use(E.ZP),new o.ZP({render:t=>t(j)}).$mount("#app")},8056:function(t,n,e){t.exports=e.p+"img/cat.a65ac913.jpeg"}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(c)var u=c(e)}for(n&&n(o);l<a.length;l++)i=a[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(u)},o=self["webpackChunksh"]=self["webpackChunksh"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(3674)}));o=e.O(o)})();
//# sourceMappingURL=app.d42e0f37.js.map