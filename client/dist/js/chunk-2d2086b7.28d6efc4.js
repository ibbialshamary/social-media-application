(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"loginForm"},[s("form",{on:{submit:function(r){return r.preventDefault(),e.loginUser(r)}}},[s("h1",[e._v("Login Here")]),s("br"),s("label",{attrs:{for:"username"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",autocomplete:"username",required:""},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),s("br"),s("label",{attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),s("br"),s("div",{staticClass:"buttonContainer"},[s("input",{staticClass:"button",attrs:{type:"submit",tag:"button",value:"Login"}}),s("br"),s("br"),s("router-link",{attrs:{to:"/Register",tag:"button",id:"signUpInsteadLink"}},[e._v("Sign up instead")]),s("br")],1),s("div",{attrs:{id:"errorMessage"}})])])},a=[],n=s("5530"),o=s("2f62"),i={data:function(){return{username:"",password:""}},mounted:function(){this.clearErrorMessage()},computed:Object(n["a"])({},Object(o["c"])(["userError"])),methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["login"])),{},{clearErrorMessage:function(){var e=document.getElementById("errorMessage");e.innerHTML=""},displaySuccessMessage:function(){var e=document.getElementById("successMessage");this.userError&&(e.innerHTML=this.userError)},displayErrorMessage:function(){var e=document.getElementById("errorMessage");this.userError&&(e.innerHTML=this.userError)},loginUser:function(){var e=this,r={username:this.username,password:this.password};this.login(r).then((function(r){r.data.success&&(e.$router.push("/Profile"),e.displaySuccessMessage())})).catch((function(r){console.log(r),e.displayErrorMessage()}))}})},u=i,c=s("2877"),l=Object(c["a"])(u,t,a,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.28d6efc4.js.map