(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{134:function(t,e,r){"use strict";r.r(e);r(11);var o=r(2),n=(r(18),r(9),r(28)),m=r.n(n),l=r(21),c={scrollToTop:!1,head:function(){return{title:this.$t("settings")}},data:function(){return{form:new m.a({name:"",email:""})}},computed:Object(l.b)({user:"auth/user"}),created:function(){var t=this;this.form.keys().forEach((function(e){t.form[e]=t.user[e]}))},methods:{update:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.patch("/settings/profile");case 2:r=e.sent,data=r.data,t.$store.dispatch("auth/updateUser",{user:data});case 5:case"end":return e.stop()}}),e)})))()}}},f=r(3),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{attrs:{title:t.$t("your_info")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("alert-success",{attrs:{form:t.form,message:t.$t("info_updated")}}),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:t.form.busy,type:"success"}},[t._v("\n          "+t._s(t.$t("update"))+"\n        ")])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);