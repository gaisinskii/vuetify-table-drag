(function(e){function t(t){for(var n,s,o=t[0],u=t[1],c=t[2],f=0,d=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuetify-table-drag/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"32aa":function(e,t,a){"use strict";var n=a("ce0e"),r=a.n(n);r.a},"82e7":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view")],1)},i=[],s=a("d4ec"),o=a("262e"),u=a("2caf"),c=a("9ab4"),l=a("60a3"),f=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(l["b"]);f=Object(c["a"])([Object(l["a"])({})],f);var d=f,p=d,b=a("2877"),v=a("6544"),m=a.n(v),h=a("7496"),g=Object(b["a"])(p,r,i,!1,null,null,null),_=g.exports;m()(g,{VApp:h["a"]});var y=a("8c4f"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"page page--table"},[a("v-data-table",{staticClass:"page__table",attrs:{headers:e.tableHeaders,items:e.tableItems,loading:e.loading,"item-key":"id","show-select":!1,"disable-pagination":!0,"hide-default-footer":!0},scopedSlots:e._u([{key:"body",fn:function(t){return[a("draggable",{attrs:{list:t.items,tag:"tbody"}},e._l(t.items,(function(t,n){return a("tr",{key:n},[a("td",[a("v-icon",{staticClass:"page__grab-icon",attrs:{small:""}},[e._v(" mdi-arrow-all ")])],1),a("td",[e._v(" "+e._s(n+1)+" ")]),a("td",[e._v(" "+e._s(t.id)+" ")]),a("td",[e._v(" "+e._s(t.name)+" ")]),a("td",[e._v(" "+e._s(t.username)+" ")]),a("td",[e._v(" "+e._s(t.email)+" ")]),a("td",[e._v(" "+e._s(t.website)+" ")]),a("td",[a("v-icon",{attrs:{small:""},on:{click:function(a){return e.editUser(t.id)}}},[e._v(" mdi-pencil ")])],1)])})),0)]}}])})],1)},j=[],w=(a("d81d"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),x=a("bee2"),k=a("310e"),I=a.n(k),C=a("bc3a"),E=a.n(C),P=E.a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),S=P,U=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.tableItems=[],e.loading=!1,e.tableHeaders=[{text:"",sortable:!1},{text:"#",sortable:!1},{text:"ID",value:"id",sortable:!1},{text:"NAME",value:"name",sortable:!1},{text:"USERNAME",value:"username",sortable:!1},{text:"EMAIL",value:"email",sortable:!1},{text:"WEBSITE",value:"website",sortable:!1},{text:"ACTIONS",sortable:!1}],e}return Object(x["a"])(a,[{key:"editUser",value:function(e){this.$router.push({name:"PageEdit",params:{id:"".concat(e)}})}},{key:"fetchAllUsers",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,S.get("/users").then((function(e){var a=e.data.map((function(e){return{id:e.id,name:e.name,username:e.username,email:e.email,website:e.website}}));t.tableItems=a})).catch((function(e){console.log(e)})).finally((function(){t.loading=!1}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.fetchAllUsers()}}]),a}(l["b"]);U=Object(c["a"])([Object(l["a"])({components:{Draggable:I.a}})],U);var V=U,T=V,$=(a("32aa"),a("8fea")),A=a("132d"),M=Object(b["a"])(T,O,j,!1,null,null,null),R=M.exports;m()(M,{VDataTable:$["a"],VIcon:A["a"]});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"page page--edit"},[e.loading?a("v-progress-circular",{staticClass:"page__loader",attrs:{indeterminate:"",color:"primary"}}):a("v-form",{staticClass:"page__form",on:{submit:function(t){return t.preventDefault(),e.updateUser()}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[e._l(e.user,(function(t,n,r){return a("v-text-field",{key:r,staticClass:"page__input",attrs:{label:n.toUpperCase(),outlined:""},model:{value:e.user[n],callback:function(t){e.$set(e.user,n,t)},expression:"user[key]"}})})),a("v-btn",{staticClass:"page__btn",attrs:{type:"sumbit",color:"green",dark:""}},[e._v(" Update ")])],2)],1)},N=[],B=function(e){Object(o["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.loading=!1,e.formIsValid=!0,e.user={},e}return Object(x["a"])(a,[{key:"fetchSingleUser",value:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,S.get("/users/".concat(t)).then((function(e){var t=function(e){var t=e.id,a=e.name,n=e.username,r=e.email,i=e.website;return{id:t,name:a,username:n,email:r,website:i}}(e.data);a.user=t})).catch((function(e){console.log(e)})).finally((function(){a.loading=!1}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){this.$route.params.id&&this.fetchSingleUser(this.$route.params.id)}}]),a}(l["b"]);B=Object(c["a"])([Object(l["a"])({})],B);var F=B,H=F,J=(a("f806"),a("8336")),L=a("4bd4"),W=a("490a"),q=a("8654"),z=Object(b["a"])(H,D,N,!1,null,null,null),G=z.exports;m()(z,{VBtn:J["a"],VForm:L["a"],VProgressCircular:W["a"],VTextField:q["a"]}),n["a"].use(y["a"]);var K=[{path:"/",name:"PageTable",component:R},{path:"/edit/:id",name:"PageEdit",component:G}],Q=new y["a"]({routes:K}),X=Q,Y=a("f309");n["a"].use(Y["a"]);var Z=new Y["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:X,vuetify:Z,render:function(e){return e(_)}}).$mount("#app")},ce0e:function(e,t,a){},f806:function(e,t,a){"use strict";var n=a("82e7"),r=a.n(n);r.a}});
//# sourceMappingURL=app.894e60ff.js.map