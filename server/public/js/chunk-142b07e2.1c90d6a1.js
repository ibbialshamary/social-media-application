(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142b07e2"],{"2adc":function(e,t,r){"use strict";r.d(t,"a",(function(){return Ar}));var n=r("9ab4"),o=r("a8e9"),i=function(){function e(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e}(),a="[DEFAULT]",s=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map}return e.prototype.get=function(e){void 0===e&&(e=a);var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new o["a"];this.instancesDeferred.set(t,r);try{var n=this.getOrInitializeService(t);n&&r.resolve(n)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t=Object(n["a"])({identifier:a,optional:!1},e),r=t.identifier,o=t.optional,i=this.normalizeInstanceIdentifier(r);try{var s=this.getOrInitializeService(i);if(!s){if(o)return null;throw Error("Service "+this.name+" is not available")}return s}catch(u){if(o)return null;throw u}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,c(e))try{this.getOrInitializeService(a)}catch(p){}try{for(var o=Object(n["h"])(this.instancesDeferred.entries()),i=o.next();!i.done;i=o.next()){var s=Object(n["e"])(i.value,2),u=s[0],l=s[1],f=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService(f);l.resolve(h)}catch(p){}}}catch(d){t={error:d}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e.prototype.clearInstance=function(e){void 0===e&&(e=a),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e;return Object(n["d"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(n["f"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})),e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()}))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.getOrInitializeService=function(e){var t=this.instances.get(e);return!t&&this.component&&(t=this.component.instanceFactory(this.container,u(e)),this.instances.set(e,t)),t||null},e.prototype.normalizeInstanceIdentifier=function(e){return this.component?this.component.multipleInstances?e:a:e},e}();function u(e){return e===a?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l,f=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new s(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function h(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p,d=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(p||(p={}));var v,_={debug:p.DEBUG,verbose:p.VERBOSE,info:p.INFO,warn:p.WARN,error:p.ERROR,silent:p.SILENT},g=p.INFO,b=(l={},l[p.DEBUG]="log",l[p.VERBOSE]="log",l[p.INFO]="info",l[p.WARN]="warn",l[p.ERROR]="error",l),m=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];if(!(t<e.logLevel)){var o=(new Date).toISOString(),i=b[t];if(!i)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[i].apply(console,h(["["+o+"]  "+e.name+":"],r))}},y=function(){function e(e){this.name=e,this._logLevel=g,this._logHandler=m,this._userLogHandler=null,d.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in p))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?_[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,h([this,p.DEBUG],e)),this._logHandler.apply(this,h([this,p.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,h([this,p.VERBOSE],e)),this._logHandler.apply(this,h([this,p.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,h([this,p.INFO],e)),this._logHandler.apply(this,h([this,p.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,h([this,p.WARN],e)),this._logHandler.apply(this,h([this,p.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,h([this,p.ERROR],e)),this._logHandler.apply(this,h([this,p.ERROR],e))},e}();function w(e){d.forEach((function(t){t.setLogLevel(e)}))}function R(e,t){for(var r=function(r){var n=null;t&&t.level&&(n=_[t.level]),r.userLogHandler=null===e?null:function(t,r){for(var o=[],i=2;i<arguments.length;i++)o[i-2]=arguments[i];var a=o.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");r>=(null!==n&&void 0!==n?n:t.logLevel)&&e({level:p[r].toLowerCase(),message:a,args:o,type:t.name})}},n=0,o=d;n<o.length;n++){var i=o[n];r(i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,E=(v={},v["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",v["bad-app-name"]="Illegal App name: '{$appName}",v["duplicate-app"]="Firebase App named '{$appName}' already exists",v["app-deleted"]="Firebase App named '{$appName}' already deleted",v["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",v["invalid-log-argument"]="First argument to `onLog` must be null or a function.",v),N=new o["b"]("app","Firebase",E),T="@firebase/app",S="0.6.13",I="@firebase/analytics",C="@firebase/auth",A="@firebase/database",k="@firebase/functions",U="@firebase/installations",P="@firebase/messaging",L="@firebase/performance",x="@firebase/remote-config",D="@firebase/storage",j="@firebase/firestore",F="firebase-wrapper",B="[DEFAULT]",H=(O={},O[T]="fire-core",O[I]="fire-analytics",O[C]="fire-auth",O[A]="fire-rtdb",O[k]="fire-fn",O[U]="fire-iid",O[P]="fire-fcm",O[L]="fire-perf",O[x]="fire-rc",O[D]="fire-gcs",O[j]="fire-fst",O["fire-js"]="fire-js",O[F]="fire-js-all",O),z=new y("@firebase/app"),G=function(){function e(e,t,r){var a,s,u=this;this.firebase_=r,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=Object(o["f"])(e),this.container=new f(t.name),this._addComponent(new i("app",(function(){return u}),"PUBLIC"));try{for(var c=Object(n["h"])(this.firebase_.INTERNAL.components.values()),l=c.next();!l.done;l=c.next()){var h=l.value;this._addComponent(h)}}catch(p){a={error:p}}finally{try{l&&!l.done&&(s=c.return)&&s.call(c)}finally{if(a)throw a.error}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){return void 0===t&&(t=B),this.checkDestroyed_(),this.container.getProvider(e).getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=B),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){z.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw N.create("app-deleted",{appName:this.name_})},e}();G.prototype.name&&G.prototype.options||G.prototype.delete||console.log("dc");var M="8.0.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){var t={},r=new Map,a={__esModule:!0,initializeApp:c,app:u,registerVersion:h,setLogLevel:w,onLog:p,apps:null,SDK_VERSION:M,INTERNAL:{registerComponent:f,removeApp:s,components:r,useAsService:d}};function s(e){delete t[e]}function u(e){if(e=e||B,!Object(o["d"])(t,e))throw N.create("no-app",{appName:e});return t[e]}function c(r,n){if(void 0===n&&(n={}),"object"!==typeof n||null===n){var i=n;n={name:i}}var s=n;void 0===s.name&&(s.name=B);var u=s.name;if("string"!==typeof u||!u)throw N.create("bad-app-name",{appName:String(u)});if(Object(o["d"])(t,u))throw N.create("duplicate-app",{appName:u});var c=new e(r,s,a);return t[u]=c,c}function l(){return Object.keys(t).map((function(e){return t[e]}))}function f(i){var s,c,l=i.name;if(r.has(l))return z.debug("There were multiple attempts to register component "+l+"."),"PUBLIC"===i.type?a[l]:null;if(r.set(l,i),"PUBLIC"===i.type){var f=function(e){if(void 0===e&&(e=u()),"function"!==typeof e[l])throw N.create("invalid-app-argument",{appName:l});return e[l]()};void 0!==i.serviceProps&&Object(o["g"])(f,i.serviceProps),a[l]=f,e.prototype[l]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,l);return r.apply(this,i.multipleInstances?e:[])}}try{for(var h=Object(n["h"])(Object.keys(t)),p=h.next();!p.done;p=h.next()){var d=p.value;t[d]._addComponent(i)}}catch(v){s={error:v}}finally{try{p&&!p.done&&(c=h.return)&&c.call(h)}finally{if(s)throw s.error}}return"PUBLIC"===i.type?a[l]:null}function h(e,t,r){var n,o=null!==(n=H[e])&&void 0!==n?n:e;r&&(o+="-"+r);var a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){var u=['Unable to register library "'+o+'" with version "'+t+'":'];return a&&u.push('library name "'+o+'" contains illegal characters (whitespace or "/")'),a&&s&&u.push("and"),s&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void z.warn(u.join(" "))}f(new i(o+"-version",(function(){return{library:o,version:t}}),"VERSION"))}function p(e,t){if(null!==e&&"function"!==typeof e)throw N.create("invalid-log-argument",{appName:name});R(e,t)}function d(e,t){if("serverAuth"===t)return null;var r=t;return r}return a["default"]=a,Object.defineProperty(a,"apps",{get:l}),u["App"]=e,a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){var e=q(G);function t(t){Object(o["g"])(e,t)}return e.INTERNAL=Object(n["a"])(Object(n["a"])({},e.INTERNAL),{createFirebaseNamespace:V,extendNamespace:t,createSubscribe:o["e"],ErrorFactory:o["b"],deepExtend:o["g"]}),e}var W=V(),X=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){var e=this.container.getProviders();return e.map((function(e){if(K(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){var t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t){e.INTERNAL.registerComponent(new i("platform-logger",(function(e){return new X(e)}),"PRIVATE")),e.registerVersion(T,S,t),e.registerVersion("fire-js","")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(o["h"])()&&void 0!==self.firebase){z.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var $=self.firebase.SDK_VERSION;$&&$.indexOf("LITE")>=0&&z.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var J=W.initializeApp;W.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Object(o["i"])()&&z.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),J.apply(void 0,e)};var Y=W;Z(Y);var Q=Y,ee="firebase",te="8.2.4";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Q.registerVersion(ee,te,"app");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var re="firebasestorage.googleapis.com",ne="storageBucket",oe=12e4,ie=6e5,ae=function(e){function t(r,n){var o=e.call(this,ue(r),"Firebase Storage: "+n+" ("+ue(r)+")")||this;return o.customData={serverResponse:null},Object.setPrototypeOf(o,t.prototype),o}return Object(n["c"])(t,e),t.prototype.codeEquals=function(e){return ue(e)===this.code},Object.defineProperty(t.prototype,"message",{get:function(){return this.customData.serverResponse?this.message+"\n"+this.customData.serverResponse:this.message},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e},enumerable:!1,configurable:!0}),t}(o["c"]),se={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error",UNSUPPORTED_ENVIRONMENT:"unsupported-environment"};function ue(e){return"storage/"+e}function ce(){var e="An unknown error occurred, please check the error payload for server response.";return new ae(se.UNKNOWN,e)}function le(e){return new ae(se.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function fe(e){return new ae(se.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function he(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(se.UNAUTHENTICATED,e)}function pe(e){return new ae(se.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function de(){return new ae(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ve(){return new ae(se.CANCELED,"User canceled the upload/download.")}function _e(e){return new ae(se.INVALID_URL,"Invalid URL '"+e+"'.")}function ge(e){return new ae(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function be(){return new ae(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ne+"' property when initializing the app?")}function me(){return new ae(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ye(){return new ae(se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function we(){return new ae(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Re(e){return new ae(se.INVALID_ARGUMENT,e)}function Oe(){return new ae(se.APP_DELETED,"The Firebase app was deleted.")}function Ee(e){return new ae(se.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ne(e,t){return new ae(se.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Te(e){throw new ae(se.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},Ie=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function Ce(e,t){switch(e){case Se.RAW:return new Ie(Ae(t));case Se.BASE64:case Se.BASE64URL:return new Ie(Ue(e,t));case Se.DATA_URL:return new Ie(Le(t),xe(t))}throw ce()}function Ae(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function ke(e){var t;try{t=decodeURIComponent(e)}catch(r){throw Ne(Se.DATA_URL,"Malformed data URL.")}return Ae(t)}function Ue(e,t){switch(e){case Se.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw Ne(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case Se.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw Ne(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw Ne(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var Pe=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw Ne(Se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=De(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function Le(e){var t=new Pe(e);return t.base64?Ue(Se.BASE64,t.rest):ke(t.rest)}function xe(e){var t=new Pe(e);return t.contentType}function De(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,Fe={STATE_CHANGED:"state_changed"},Be={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},He={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ze(e){switch(e){case Be.RUNNING:case Be.PAUSING:case Be.CANCELING:return He.RUNNING;case Be.PAUSED:return He.PAUSED;case Be.SUCCESS:return He.SUCCESS;case Be.CANCELED:return He.CANCELED;case Be.ERROR:return He.ERROR;default:return He.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(je||(je={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ge=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=je.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=je.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=je.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw Te("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw Te("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw Te("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw Te("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),Me=function(){function e(){}return e.prototype.createXhrIo=function(){return new Ge},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e){return void 0!==e}function Ve(e){return"function"===typeof e}function We(e){return"object"===typeof e&&!Array.isArray(e)}function Xe(e){return"string"===typeof e||e instanceof String}function Ke(e){return Ze()&&e instanceof Blob}function Ze(){return"undefined"!==typeof Blob}function $e(e,t,r,n){if(n<t)throw new ae(se.INVALID_ARGUMENT,"Invalid value for '"+e+"'. Expected "+t+" or greater.");if(n>r)throw new ae(se.INVALID_ARGUMENT,"Invalid value for '"+e+"'. Expected "+r+" or less.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Ye(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Je();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(Ze())return new Blob(e);throw new ae(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function Qe(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et=function(){function e(e,t){var r=0,n="";Ke(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(Ke(this.data_)){var n=this.data_,o=Qe(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(Ze()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(Ye.apply(null,n))}var o=t.map((function(e){return Xe(e)?Ce(Se.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),tt=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw ge(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),s={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}for(var c="v[A-Za-z0-9_]+",l=re.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp("^https?://"+l+"/"+c+"/b/"+n+"/o"+f,"i"),p={bucket:1,path:3},d="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",_=new RegExp("^https?://"+d+"/"+n+"/"+v,"i"),g={bucket:1,path:2},b=[{regex:a,indices:s,postModify:o},{regex:h,indices:p,postModify:u},{regex:_,indices:g,postModify:u}],m=0;m<b.length;m++){var y=b[m],w=y.regex.exec(t);if(w){var R=w[y.indices.bucket],O=w[y.indices.path];O||(O=""),r=new e(R,O),y.postModify(r);break}}if(null==r)throw _e(t);return r},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rt(e){var t;try{t=JSON.parse(e)}catch(r){return null}return We(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function ot(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function it(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return"https://"+re+"/v0"+e}function st(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t){return t}var ct=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ut}return e}(),lt=null;function ft(e){return!Xe(e)||e.length<2?e:it(e)}function ht(){if(lt)return lt;var e=[];function t(e,t){return ft(t)}e.push(new ct("bucket")),e.push(new ct("generation")),e.push(new ct("metageneration")),e.push(new ct("name","fullPath",!0));var r=new ct("name");function n(e,t){return void 0!==t?Number(t):t}r.xform=t,e.push(r);var o=new ct("size");return o.xform=n,e.push(o),e.push(new ct("timeCreated")),e.push(new ct("updated")),e.push(new ct("md5Hash",null,!0)),e.push(new ct("cacheControl",null,!0)),e.push(new ct("contentDisposition",null,!0)),e.push(new ct("contentEncoding",null,!0)),e.push(new ct("contentLanguage",null,!0)),e.push(new ct("contentType",null,!0)),e.push(new ct("metadata","customMetadata",!0)),lt=e,lt}function pt(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new tt(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function dt(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return pt(n,e),n}function vt(e,t,r){var n=rt(t);if(null===n)return null;var o=n;return dt(e,o,r)}function _t(e,t){var r=rt(t);if(null===r)return null;if(!Xe(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=at(i),s=st({alt:"media",token:t});return a+s}));return a[0]}function gt(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt="prefixes",mt="items";function yt(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[bt])for(var o=0,i=r[bt];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new tt(t,s));n.prefixes.push(u)}if(r[mt])for(var c=0,l=r[mt];c<l.length;c++){var f=l[c];u=e.makeStorageReference(new tt(t,f["name"]));n.items.push(u)}return n}function wt(e,t,r){var n=rt(r);if(null===n)return null;var o=n;return yt(e,t,o)}var Rt=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){if(!e)throw ce()}function Et(e,t){function r(r,n){var o=vt(e,n,t);return Ot(null!==o),o}return r}function Nt(e,t){function r(r,n){var o=wt(e,t,n);return Ot(null!==o),o}return r}function Tt(e,t){function r(r,n){var o=vt(e,n,t);return Ot(null!==o),_t(o,n)}return r}function St(e){function t(t,r){var n;return n=401===t.getStatus()?he():402===t.getStatus()?fe(e.bucket):403===t.getStatus()?pe(e.path):r,n.serverResponse=r.serverResponse,n}return t}function It(e){var t=St(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=le(e.path)),o.serverResponse=n.serverResponse,o}return r}function Ct(e,t,r){var n=t.fullServerUrl(),o=at(n),i="GET",a=e.maxOperationRetryTime,s=new Rt(o,i,Et(e,r),a);return s.errorHandler=It(t),s}function At(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=at(a),u="GET",c=e.maxOperationRetryTime,l=new Rt(s,u,Nt(e,t.bucket),c);return l.urlParams=i,l.errorHandler=St(t),l}function kt(e,t,r){var n=t.fullServerUrl(),o=at(n),i="GET",a=e.maxOperationRetryTime,s=new Rt(o,i,Tt(e,r),a);return s.errorHandler=It(t),s}function Ut(e,t,r,n){var o=t.fullServerUrl(),i=at(o),a="PATCH",s=gt(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,l=new Rt(i,a,Et(e,n),c);return l.headers=u,l.body=s,l.errorHandler=It(t),l}function Pt(e,t){var r=t.fullServerUrl(),n=at(r),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}var s=new Rt(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=It(t),s}function Lt(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function xt(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=Lt(null,t)),n}function Dt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=xt(t,n,o),l=gt(c,r),f="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",h="\r\n--"+u+"--",p=et.getBlob(f,n,h);if(null===p)throw me();var d={name:c["fullPath"]},v=at(i),_="POST",g=e.maxUploadRetryTime,b=new Rt(v,_,Et(e,r),g);return b.urlParams=d,b.headers=a,b.body=p.uploadData(),b.errorHandler=St(t),b}var jt=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function Ft(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){Ot(!1)}var n=t||["active"];return Ot(!!r&&-1!==n.indexOf(r)),r}function Bt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=xt(t,n,o),s={name:a["fullPath"]},u=at(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},f=gt(a,r),h=e.maxUploadRetryTime;function p(e){var t;Ft(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Ot(!1)}return Ot(Xe(t)),t}var d=new Rt(u,c,p,h);return d.urlParams=s,d.headers=l,d.body=f,d.errorHandler=St(t),d}function Ht(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=Ft(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Ot(!1)}r||Ot(!1);var o=Number(r);return Ot(!isNaN(o)),new jt(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime,u=new Rt(r,a,i,s);return u.headers=o,u.errorHandler=St(t),u}var zt=262144;function Gt(e,t,r,n,o,i,a,s){var u=new jt(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw ye();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var f=u.current,h=f+l,p=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":u.current},v=n.slice(f,h);if(null===v)throw me();function _(e,r){var o,a=Ft(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?Et(t,i)(e,r):null,new jt(s,c,"final"===a,o)}var g="POST",b=t.maxUploadRetryTime,m=new Rt(r,g,_,b);return m.headers=d,m.body=v.uploadData(),m.progressCallback=s||null,m.errorHandler=St(e),m}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt=function(){function e(e,t,r){var n=Ve(e)||null!=t||null!=r;if(n)this.next=e,this.error=t,this.complete=r;else{var o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}return e}(),qt=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=function(){function e(e,t,r){var n=this;void 0===r&&(r=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=ht(),this._resumable=this._shouldDoResumable(this._blob),this._state=Be.RUNNING,this._errorHandler=function(e){n._request=void 0,n._chunkMultiplier=1,e.codeEquals(se.CANCELED)?(n._needToFetchStatus=!0,n.completeTransitions_()):(n._error=e,n._transition(Be.ERROR))},this._metadataErrorHandler=function(e){n._request=void 0,e.codeEquals(se.CANCELED)?n.completeTransitions_():(n._error=e,n._transition(Be.ERROR))},this._promise=new Promise((function(e,t){n._resolve=e,n._reject=t,n._start()})),this._promise.then(null,(function(){}))}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(r){return e._updateProgress(t+r)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){this._state===Be.RUNNING&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;this._ref.storage.getAuthToken().then((function(r){switch(t._state){case Be.RUNNING:e(r);break;case Be.CANCELING:t._transition(Be.CANCELED);break;case Be.PAUSING:t._transition(Be.PAUSED);break}}))},e.prototype._createResumable=function(){var e=this;this._resolveToken((function(t){var r=Bt(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken((function(r){var n=Ht(e._ref.storage,e._ref._location,t,e._blob),o=e._ref.storage.makeRequest(n,r);e._request=o,o.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))},e.prototype._continueUpload=function(){var e=this,t=zt*this._chunkMultiplier,r=new jt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((function(o){var i;try{i=Gt(e._ref._location,e._ref.storage,n,e._blob,t,e._mappings,r,e._makeProgressCallback())}catch(s){return e._error=s,void e._transition(Be.ERROR)}var a=e._ref.storage.makeRequest(i,o);e._request=a,a.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition(Be.SUCCESS)):e.completeTransitions_()}),e._errorHandler)}))},e.prototype._increaseMultiplier=function(){var e=zt*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken((function(t){var r=Ct(e._ref.storage,e._ref._location,e._mappings),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition(Be.SUCCESS)}),e._metadataErrorHandler)}))},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken((function(t){var r=Dt(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),n=e._ref.storage.makeRequest(r,t);e._request=n,n.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition(Be.SUCCESS)}),e._errorHandler)}))},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case Be.CANCELING:this._state=e,void 0!==this._request&&this._request.cancel();break;case Be.PAUSING:this._state=e,void 0!==this._request&&this._request.cancel();break;case Be.RUNNING:var t=this._state===Be.PAUSED;this._state=e,t&&(this._notifyObservers(),this._start());break;case Be.PAUSED:this._state=e,this._notifyObservers();break;case Be.CANCELED:this._error=ve(),this._state=e,this._notifyObservers();break;case Be.ERROR:this._state=e,this._notifyObservers();break;case Be.SUCCESS:this._state=e,this._notifyObservers();break}},e.prototype.completeTransitions_=function(){switch(this._state){case Be.PAUSING:this._transition(Be.PAUSED);break;case Be.CANCELING:this._transition(Be.CANCELED);break;case Be.RUNNING:this._start();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=ze(this._state);return new qt(this._transferred,this._blob.size(),e,this._metadata,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){var o=this,i=new Mt(t,r,n);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise();var t=this._observers.slice();t.forEach((function(t){e._notifyObserver(t)}))},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(ze(this._state)){case He.SUCCESS:Vt(this._resolve.bind(null,this.snapshot))();break;case He.CANCELED:case He.ERROR:var t=this._reject;Vt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){var t=ze(this._state);switch(t){case He.RUNNING:case He.PAUSED:e.next&&Vt(e.next.bind(e,this.snapshot))();break;case He.SUCCESS:e.complete&&Vt(e.complete.bind(e))();break;case He.CANCELED:case He.ERROR:e.error&&Vt(e.error.bind(e,this._error))();break;default:e.error&&Vt(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e=this._state===Be.PAUSED||this._state===Be.PAUSING;return e&&this._transition(Be.RUNNING),e},e.prototype.pause=function(){var e=this._state===Be.RUNNING;return e&&this._transition(Be.PAUSING),e},e.prototype.cancel=function(){var e=this._state===Be.RUNNING||this._state===Be.PAUSING;return e&&this._transition(Be.CANCELING),e},e}(),Xt=function(){function e(e,t){this._service=e,this._location=t instanceof tt?t:tt.makeFromUrl(t)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype.newRef=function(t,r){return new e(t,r)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new tt(this._location.bucket,"");return this.newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return it(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=nt(this._location.path);if(null===t)return null;var r=new tt(this._location.bucket,t);return new e(this._service,r)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw Ee(e)},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t,r){return void 0===r&&(r=null),e._throwIfRoot("uploadBytesResumable"),new Wt(e,new et(t),r)}function Zt(e,t,r,o){void 0===r&&(r=Se.RAW),e._throwIfRoot("putString");var i=Ce(r,t),a=Object(n["a"])({},o);return null==a["contentType"]&&null!=i.contentType&&(a["contentType"]=i.contentType),new Wt(e,new et(i.data,!0),a)}function $t(e){var t={prefixes:[],items:[]};return Jt(e,t).then((function(){return t}))}function Jt(e,t,r){return Object(n["b"])(this,void 0,void 0,(function(){var o,i,a,s;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return o={pageToken:r},[4,Yt(e,o)];case 1:return i=n.sent(),(a=t.prefixes).push.apply(a,i.prefixes),(s=t.items).push.apply(s,i.items),null==i.nextPageToken?[3,3]:[4,Jt(e,t,i.nextPageToken)];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function Yt(e,t){return Object(n["b"])(this,void 0,void 0,(function(){var r,o,i;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return null!=t&&"number"===typeof t.maxResults&&$e("options.maxResults",1,1e3,t.maxResults),[4,e.storage.getAuthToken()];case 1:return r=n.sent(),o=t||{},i=At(e.storage,e._location,"/",o.pageToken,o.maxResults),[2,e.storage.makeRequest(i,r).getPromise()]}}))}))}function Qt(e){return Object(n["b"])(this,void 0,void 0,(function(){var t,r;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getMetadata"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=Ct(e.storage,e._location,ht()),[2,e.storage.makeRequest(r,t).getPromise()]}}))}))}function er(e,t){return Object(n["b"])(this,void 0,void 0,(function(){var r,o;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("updateMetadata"),[4,e.storage.getAuthToken()];case 1:return r=n.sent(),o=Ut(e.storage,e._location,t,ht()),[2,e.storage.makeRequest(o,r).getPromise()]}}))}))}function tr(e){return Object(n["b"])(this,void 0,void 0,(function(){var t,r;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("getDownloadURL"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=kt(e.storage,e._location,ht()),[2,e.storage.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw we();return e}))]}}))}))}function rr(e){return Object(n["b"])(this,void 0,void 0,(function(){var t,r;return Object(n["d"])(this,(function(n){switch(n.label){case 0:return e._throwIfRoot("deleteObject"),[4,e.storage.getAuthToken()];case 1:return t=n.sent(),r=Pt(e.storage,e._location),[2,e.storage.makeRequest(r,t).getPromise()]}}))}))}function nr(e,t){var r=ot(e._location.path,t),n=new tt(e._location.bucket,r);return new Xt(e.storage,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var or=function(){function e(e,t,r){this._delegate=e,this.task=t,this.ref=r}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),ir=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate),this._snapshot=new or(this._delegate.snapshot,this,this._ref)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return this._snapshot},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var r=this;return this._delegate.then((function(t){if(e)return e(new or(t,r,r._ref))}),t)},e.prototype.on=function(e,t,r,n){var o=this,i=void 0;return t&&(i="function"===typeof t?function(e){return t(new or(e,o,o._ref))}:{next:t.next?function(e){return t.next(new or(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)},e}(),ar=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map((function(t){return new sr(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map((function(t){return new sr(t,e._service)}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),sr=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){var r=nr(this._delegate,t);return new e(r,this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return this._throwIfRoot("put"),new ir(Kt(this._delegate,e,t),this)},e.prototype.putString=function(e,t,r){return void 0===t&&(t=Se.RAW),this._throwIfRoot("putString"),new ir(Zt(this._delegate,e,t,r),this)},e.prototype.listAll=function(){var e=this;return $t(this._delegate).then((function(t){return new ar(t,e.storage)}))},e.prototype.list=function(e){var t=this;return Yt(this._delegate,e).then((function(e){return new ar(e,t.storage)}))},e.prototype.getMetadata=function(){return Qt(this._delegate)},e.prototype.updateMetadata=function(e){return er(this._delegate,e)},e.prototype.getDownloadURL=function(){return tr(this._delegate)},e.prototype.delete=function(){return this._throwIfRoot("delete"),rr(this._delegate)},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw Ee(e)},e}(),ur=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cr(e,t,r){var o=1,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function f(t){i=setTimeout((function(){i=null,e(h,u())}),t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,Object(n["g"])([null,e],t));else{var i,h=u()||a;if(h)l.call.apply(l,Object(n["g"])([null,e],t));else o<64&&(o*=2),1===s?(s=2,i=0):i=1e3*(o+Math.random()),f(i)}}var p=!1;function d(e){p||(p=!0,c||(null!==i?(e||(s=2),clearTimeout(i),f(0)):e||(s=1)))}return f(0),setTimeout((function(){a=!0,d(!0)}),r),d}function lr(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var f=this;this.pendingXhr_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){f.resolve_=e,f.reject_=t,f.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new hr(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===je.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new hr(a,r))}else{var s=r.getErrorCode()===je.ABORT;t(!1,new hr(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());qe(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=ce();s.serverResponse=i.getResponseText(),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?Oe():ve();o(s)}else{s=de();o(s)}}this.canceled_?r(!1,new hr(!1,null,!0)):this.backoffId_=cr(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&lr(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),hr=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function pr(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function dr(e){var t="undefined"!==typeof Q?Q.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function vr(e,t){t&&(e["X-Firebase-GMPID"]=t)}function _r(e,t,r,n){var o=st(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return vr(a,t),pr(a,r),dr(a),new fr(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e){return/^[A-Za-z]+:\/\//.test(e)}function br(e,t){return new Xt(e,t)}function mr(e,t){if(e instanceof Rr){var r=e;if(null==r._bucket)throw be();var n=new Xt(r,r._bucket);return null!=t?mr(n,t):n}if(void 0!==t){if(t.includes(".."))throw Re('`path` param cannot contain ".."');return nr(e,t)}return e}function yr(e,t){if(t&&gr(t)){if(e instanceof Rr)return br(e,t);throw Re("To use ref(service, url), the first argument must be a Storage instance.")}return mr(e,t)}function wr(e){var t=null===e||void 0===e?void 0:e[ne];return null==t?null:tt.makeFromBucketSpec(t)}var Rr=function(){function e(e,t,r,n){this.app=e,this._authProvider=t,this._pool=r,this._url=n,this._bucket=null,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oe,this._maxUploadRetryTime=ie,this._requests=new Set,this._bucket=null!=n?tt.makeFromBucketSpec(n):wr(this.app.options)}return Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){$e("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){$e("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype.getAuthToken=function(){return Object(n["b"])(this,void 0,void 0,(function(){var e,t;return Object(n["d"])(this,(function(r){switch(r.label){case 0:return e=this._authProvider.getImmediate({optional:!0}),e?[4,e.getToken()]:[3,2];case 1:if(t=r.sent(),null!==t)return[2,t.accessToken];r.label=2;case 2:return[2,null]}}))}))},e.prototype._delete=function(){return this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear(),Promise.resolve()},e.prototype.makeStorageReference=function(e){return new Xt(this,e)},e.prototype.makeRequest=function(e,t){var r=this;if(this._deleted)return new ur(Oe());var n=_r(e,this._appId,t,this._pool);return this._requests.add(n),n.getPromise().then((function(){return r._requests.delete(n)}),(function(){return r._requests.delete(n)})),n},e}(),Or=function(){function e(e,t){var r=this;this.app=e,this._delegate=t,this.INTERNAL={delete:function(){return r._delegate._delete()}}}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(gr(e))throw Re("ref() expected a child path but got a URL, use refFromURL instead.");return new sr(yr(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!gr(e))throw Re("refFromURL() expected a full URL but got a child path, use ref() instead.");try{tt.makeFromUrl(e)}catch(t){throw Re("refFromUrl() expected a valid full URL but got an invalid one.")}return new sr(yr(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e}(),Er="@firebase/storage",Nr="0.4.2",Tr="storage";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=new Or(r,new Rr(r,n,new Me,t));return o}function Ir(e){var t={TaskState:He,TaskEvent:Fe,StringFormat:Se,Storage:Rr,Reference:sr};e.INTERNAL.registerComponent(new i(Tr,Sr,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Er,Nr)}Ir(Q);var Cr={apiKey:"AIzaSyBDIhspeuzq3lvFZkpr4vH8g8qI18ElS7Y",authDomain:"socialmediaapplication-c5759.firebaseapp.com",projectId:"socialmediaapplication-c5759",storageBucket:"socialmediaapplication-c5759.appspot.com",messagingSenderId:"606022679926",appId:"1:606022679926:web:520bab886e62a9c355ce57",measurementId:"G-9V2TS9NQT6"},Ar=Q.initializeApp(Cr)},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"8a79":function(e,t,r){"use strict";var n=r("23e7"),o=r("06cf").f,i=r("50c4"),a=r("5a34"),s=r("1d80"),u=r("ab13"),c=r("c430"),l="".endsWith,f=Math.min,h=u("endsWith"),p=!c&&!h&&!!function(){var e=o(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!p&&!h},{endsWith:function(e){var t=String(s(this));a(e);var r=arguments.length>1?arguments[1]:void 0,n=i(t.length),o=void 0===r?n:f(i(r),n),u=String(e);return l?l.call(t,u,o):t.slice(o-u.length,o)===u}})},"9ab4":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return s})),r.d(t,"h",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"g",(function(){return f}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):o(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function s(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function u(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{while((void 0===t||t-- >0)&&!(n=i.next()).done)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=i["return"])&&r.call(i)}finally{if(o)throw o.error}}return a}function l(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}function f(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}},a8e9:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return b})),r.d(t,"f",(function(){return a})),r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return f})),r.d(t,"i",(function(){return l}));var n=r("9ab4"),o=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296===(64512&o)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},i=function(e){var t=[],r=0,n=0;while(r<e.length){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=e[r++];var a=e[r++],s=e[r++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(e){return s(void 0,e)}function s(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&u(n)&&(e[n]=s(e[n],t[n]));return e}function u(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,r){e.resolve=t,e.reject=r}))}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function f(){return"object"===typeof self&&self.self===self}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h="FirebaseError",p=function(e){function t(r,n,o){var i=e.call(this,n)||this;return i.code=r,i.customData=o,i.name=h,Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,d.prototype.create),i}return Object(n["c"])(t,e),t}(Error),d=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r}return e.prototype.create=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=t[0]||{},o=this.service+"/"+e,i=this.errors[e],a=i?v(i,n):"Error",s=this.serviceName+": "+a+" ("+o+").",u=new p(o,s,n);return u},e}();function v(e,t){return e.replace(_,(function(e,r){var n=t[r];return null!=n?String(n):"<"+r+"?>"}))}var _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var r=this.W_;if("string"===typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,s=this.chain_[0],u=this.chain_[1],c=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=l^u&(c^l),a=1518500249):(i=u^c^l,a=1859775393):n<60?(i=u&c|l&(u|c),a=2400959708):(i=u^c^l,a=3395469782);o=(s<<5|s>>>27)+i+f+a+r[n]&4294967295;f=l,l=c,c=4294967295&(u<<30|u>>>2),u=s,s=o}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var r=t-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;while(n<t){if(0===i)while(n<=r)this.compress_(e,n),n+=this.blockSize;if("string"===typeof e){while(n<t)if(o[i]=e.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}else while(n<t)if(o[i]=e[n],++i,++n,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[r]>>o&255,++n;return e}})();function b(e,t){var r=new m(e,t);return r.subscribe.bind(r)}var m=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(r)})).catch((function(e){r.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=y(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=w),void 0===n.error&&(n.error=w),void 0===n.complete&&(n.complete=w);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function y(e,t){if("object"!==typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"===typeof e[o])return!0}return!1}function w(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}).call(this,r("c8ba"))},ab13:function(e,t,r){var n=r("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}}}]);
//# sourceMappingURL=chunk-142b07e2.1c90d6a1.js.map