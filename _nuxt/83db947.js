(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,5,6,7,11,12,18],{238:function(t,e,r){"use strict";r.r(e);r(12),r(6),r(11),r(19),r(20);var n=r(4),o=r(22);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:{toc:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["settings"]))},f=l,d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.toc.length?e("div",{staticClass:"w-full lg:w-1/4 block relative"},[e("div",{staticClass:"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"},[e("nav",{staticClass:"py-4 lg:py-8",class:{"lg:pl-8 lg:pr-2":"single"!==t.settings.layout,"lg:px-8":"single"===t.settings.layout}},[e("p",{staticClass:"mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"},[t._v(t._s(t.$t("toc.title")))]),t._v(" "),e("scrollactive",{attrs:{"highlight-first-item":"","active-class":"text-primary-500",offset:0,tag:"ul"}},t._l(t.toc,(function(link){return e("li",{key:link.id,staticClass:"text-gray-700 dark:text-gray-300",class:{"border-t border-dashed dark:border-gray-800 first:border-t-0":2===link.depth}},[e("a",{staticClass:"block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth,"ml-3 pb-2":4===link.depth,"ml-4 pb-2":5===link.depth,"ml-5 pb-2":6===link.depth},attrs:{href:"#".concat(link.id)}},[t._v(t._s(link.text))])])})),0)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},242:function(t,e,r){"use strict";r(243)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},243:function(t,e,r){var n=r(7),o=r(17),c=r(44),l=/"/g,f=function(t,e,r,n){var o=String(c(t)),f="<"+e;return""!==r&&(f+=" "+r+'="'+String(n).replace(l,"&quot;")+'"'),f+">"+o+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(f),n(n.P+n.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},249:function(t,e,r){"use strict";r.r(e);r(242),r(12),r(6),r(19),r(20);var n=r(4),o=(r(11),r(22));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{document:{type:Object,required:!0}},computed:l(l({},Object(o.b)(["settings","githubUrls"])),{},{link:function(){if(this.settings.github)return[this.githubUrls.repo,"edit",this.settings.defaultBranch,this.settings.defaultDir,"content".concat(this.document.path).concat(this.document.extension)].filter((function(path){return!!path})).join("/")}})},d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.link?e("div",{staticClass:"pt-4 pb-4 lg:px-8 flex flex-col sm:flex-row justify-between"},[e("a",{staticClass:"text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("article.github"))+"\n    "),e("IconExternalLink",{staticClass:"w-4 h-4 ml-1"})],1),t._v(" "),e("span",{staticClass:"text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconExternalLink:r(239).default})},250:function(t,e,r){"use strict";r.r(e);r(12),r(6),r(11),r(19),r(20);var n=r(4),o=r(22);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["settings"]))},f=l,d=r(2),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"grid grid-cols-2 gap-2 lg:px-8 pt-4 border-t dark:border-gray-800",class:{"lg:border-t-0":"single"===t.settings.layout}},[t.prev?e("NuxtLink",{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-start",attrs:{to:t.localePath(t.prev.to)}},[e("IconArrowLeft",{staticClass:"w-4 h-4 mr-1 flex-shrink-0"}),t._v(" "),e("span",{staticClass:"truncate"},[t._v(t._s(t.prev.title))])],1):e("span",[t._v(" ")]),t._v(" "),t.next?e("NuxtLink",{staticClass:"text-primary-500 font-bold hover:underline flex items-center justify-end",attrs:{to:t.localePath(t.next.to)}},[e("span",{staticClass:"truncate"},[t._v(t._s(t.next.title))]),t._v(" "),e("IconArrowRight",{staticClass:"w-4 h-4 ml-1 flex-shrink-0"})],1):e("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:r(240).default,IconArrowRight:r(241).default})},253:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){return(0,this._self._c)("span",{staticClass:"inline-flex items-center px-3 py-1 leading-5 rounded-full text-base tracking-tight bg-primary-100 dark:bg-primary-900 text-primary-500"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,r){"use strict";r.r(e);r(12),r(6),r(11),r(19),r(20),r(27),r(9),r(13),r(29),r(25),r(26);var n=r(4),o=r(5),c=r(3),l=(r(21),r(0)),f=r(22),d=r(276);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={name:"PageSlug",layout:function(t){return t.store.state.settings.layout||"default"},middleware:function(t){var e=t.app,r=t.params,n=t.redirect;"index"===r.pathMatch&&n(e.localePath("/"))},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,path,f,d,h,v,m,y,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.store,n=t.app,c=t.params,l=t.error,path="/".concat(n.i18n.locale,"/").concat(c.pathMatch||"index"),e.next=4,r({deep:!0}).where({path:path}).fetch();case 4:if(f=e.sent,d=Object(o.a)(f,1),h=d[0]){e.next=9;break}return e.abrupt("return",l({statusCode:404,message:"Page not found"}));case 9:return e.next=11,r(n.i18n.locale,{deep:!0}).only(["title","path","to"]).sortBy("position","asc").surround(h.path,{before:1,after:1}).fetch();case 11:return v=e.sent,m=Object(o.a)(v,2),y=m[0],O=m[1],e.abrupt("return",{document:h,prev:y,next:O});case 16:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"description",name:"description",content:this.document.description},{hid:"og:title",property:"og:title",content:this.document.title},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:title",name:"twitter:title",content:this.document.title},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["settings"])),mounted:function(){this.document.version&&localStorage.setItem("document-".concat(this.document.slug,"-version"),this.document.version),setTimeout((function(){var t,e=h(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var r=t.value,component=(new(l.a.extend(d.default))).$mount();r.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)}},O=y,x=r(2),j=Object(x.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-wrap-reverse",class:{"lg:-mx-8":"single"===t.settings.layout}},[e("div",{staticClass:"w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800",class:{"lg:w-3/4":!t.document.fullscreen,"lg:border-l lg:border-r":"single"!==t.settings.layout}},[e("article",{staticClass:"prose dark:prose-dark max-w-none lg:px-8"},[e("h1",{staticClass:"flex items-center justify-between"},[t._v("\n        "+t._s(t.document.title)+"\n        "),t.document.badge?e("Badge",[t._v(t._s(t.document.badge))]):t._e()],1),t._v(" "),t.document.subtitle?e("div",{staticClass:"-mt-4"},[e("p",{staticClass:"text-gray-600 dark:text-gray-400"},[t._v(t._s(t.document.subtitle))])]):t._e(),t._v(" "),e("NuxtContent",{attrs:{document:t.document}})],1),t._v(" "),e("AppPageBottom",{attrs:{document:t.document}}),t._v(" "),e("AppPrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),t.document.fullscreen?t._e():e("AppToc",{attrs:{toc:t.document.toc}})],1)}),[],!1,null,null,null);e.default=j.exports;installComponents(j,{Badge:r(253).default,AppPageBottom:r(249).default,AppPrevNext:r(250).default,AppToc:r(238).default})}}]);