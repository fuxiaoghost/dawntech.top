webpackJsonp([3],{22:function(n,t,e){e(241);var i=e(7)(e(41),e(233),null,null);i.options.__file="/Users/kirn/Documents/Workspace/Dawn/dawntech.top/src/views/note.vue",i.esModule&&Object.keys(i.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] note.vue: functional components are not supported with templates, they should use render functions."),n.exports=i.exports},233:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"note"},[e("nav-bar",{attrs:{index:n.index}}),n._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"text"},[e("a",{staticClass:"name",attrs:{href:"https://itunes.apple.com/cn/app/id1247102147"}},[n._v("手记")]),n._v(" "),n.mobile?n._e():e("img",{staticClass:"qrcode",attrs:{src:"/assets/images/qrcode2.png",alt:"https://itunes.apple.com/cn/app/id1247102147"}}),n._v(" "),e("span",{staticClass:"abstract-tips"},[n._v("内容提要")]),n._v(" "),e("div",{staticClass:"abstract-content"},n._l(n.cns,function(t){return e("span",{staticClass:"abstract-item"},[n._v(n._s(t))])})),n._v(" "),e("span",{staticClass:"abstract-tips"},[n._v("应用预览")]),n._v(" "),e("div",{staticClass:"preview"},n._l(n.previews,function(t){return e("div",{staticClass:"item"},[e("a",{staticClass:"boarder",attrs:{href:t,target:n.linkTarget}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])])})),n._v(" "),e("span",{staticClass:"abstract-tips"},[n._v("作品展示")]),n._v(" "),e("div",{staticClass:"works"},n._l(n.works,function(t){return e("a",{staticClass:"image-item",attrs:{href:t,target:n.linkTarget}},[e("span",{staticClass:"image-cover"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}]})])])}))])]),n._v(" "),e("foot")],1)},staticRenderFns:[]},n.exports.render._withStripped=!0},241:function(n,t,e){var i=e(46);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(8)("5defb2c1",i,!1)},26:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isMobile:function(){return!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)},linkTarget:function(){return this.isMobile()?"":"_blank"}}},27:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{}}},28:function(n,t,e){t=n.exports=e(6)(void 0),t.push([n.i,"\n.footer {\n  padding: 40px 0px 40px 0px;\n  text-align: center;\n  background-color: #fff;\n  color: #999999 !important;\n  font-size: 13px;\n}\n.footer .copyright {\n    height: 20px;\n    display: block;\n}\n.footer .icp {\n    height: 20px;\n    display: block;\n    color: #999999 !important;\n}\n.footer .icon {\n    width: 100px;\n    display: block;\n    margin: 0px auto;\n    padding: 6px 0px;\n    font-size: 30px;\n    color: #999;\n}\n",""])},29:function(n,t,e){e(31);var i=e(7)(e(27),e(30),null,null);i.options.__file="/Users/kirn/Documents/Workspace/Dawn/dawntech.top/src/components/foot.vue",i.esModule&&Object.keys(i.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] foot.vue: functional components are not supported with templates, they should use render functions."),n.exports=i.exports},30:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"footer"},[e("span",{staticClass:"copyright"},[n._v("2017 dawntech.top. All rights reserved.")]),n._v(" "),e("a",{staticClass:"icp",attrs:{target:"_blank",href:"http://www.miitbeian.gov.cn"}},[n._v("京ICP备17056676号")]),n._v(" "),e("a",{staticClass:"icon iconfont icon-yinzhang",attrs:{href:"/blog"}})])}]},n.exports.render._withStripped=!0},31:function(n,t,e){var i=e(28);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(8)("7745b4ce",i,!1)},32:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(26),o=function(n){return n&&n.__esModule?n:{default:n}}(i);t.default={props:["index"],data:function(){return{navs:[]}},created:function(){o.default.isMobile()?this.navs=[{title:"随笔",url:"/blog"},{title:"信手涂鸦",url:"/knbrush"},{title:"手记",url:"/note"},{title:"摄影集",url:"/photos"}]:this.navs=[{title:"主页",url:"/"},{title:"随笔",url:"/blog"},{title:"信手涂鸦",url:"/knbrush"},{title:"手记",url:"/note"},{title:"摄影集",url:"/photos"}],window.onscroll=function(){}},methods:{}}},33:function(n,t,e){t=n.exports=e(6)(void 0),t.push([n.i,"\n.nav-bar {\n  height: 60px;\n  line-height: 60px;\n  background-color: #24292e;\n  color: #fff;\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  top: 0;\n  transition: all 1s ease;\n}\n.nav-bar .nav-left {\n    float: left;\n    margin-left: 20px;\n}\n.nav-bar .nav-item {\n    display: block;\n    float: left;\n    padding: 0 20px;\n    text-align: center;\n    position: relative;\n    font-size: 16px;\n    font-weight: bold;\n    color: rgba(255, 255, 255, 0.75) !important;\n}\n.nav-bar .nav-item:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      bottom: 0;\n      left: 0;\n      background-color: #000;\n      transition: all 0.5s ease;\n}\n.nav-bar .nav-item.active, .nav-bar .nav-item:hover {\n      color: white !important;\n}\n.nav-bar .nav-item.active:after, .nav-bar .nav-item:hover:after {\n        background-color: #fff;\n}\n@media screen and (max-width: 500px) {\n.nav-bar .nav-item {\n      padding: 0px;\n      width: 25%;\n}\n}\n",""])},34:function(n,t,e){e(36);var i=e(7)(e(32),e(35),null,null);i.options.__file="/Users/kirn/Documents/Workspace/Dawn/dawntech.top/src/components/nav-bar.vue",i.esModule&&Object.keys(i.esModule).some(function(n){return"default"!==n&&"__esModule"!==n})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] nav-bar.vue: functional components are not supported with templates, they should use render functions."),n.exports=i.exports},35:function(n,t,e){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"nav-bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"nav-right"},n._l(n.navs,function(t,i){return e("a",{staticClass:"nav-item",class:{active:n.index==i},attrs:{href:t.url}},[n._v("\n                "+n._s(t.title)+"\n            ")])}))])])},staticRenderFns:[]},n.exports.render._withStripped=!0},36:function(n,t,e){var i=e(33);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(8)("9d25e86c",i,!1)},41:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(34),a=i(o),r=e(29),s=i(r),l=e(26),p=i(l);t.default={components:{navBar:a.default,foot:s.default},data:function(){return{ens:[],cns:[],previews:[],works:[]}},computed:{mobile:function(){return p.default.isMobile()},linkTarget:function(){return p.default.linkTarget()},index:function(){return p.default.isMobile()?2:3}},created:function(){this.init()},methods:{init:function(){var n=this;this.$http.get("/api/note",{params:{}}).then(function(t){t&&t.body&&t.body.abstract&&(n.cns=t.body.abstract.cns,n.previews=t.body.abstract.previews,n.works=t.body.abstract.works)})}}}},46:function(n,t,e){t=n.exports=e(6)(void 0),t.push([n.i,"\n.text .name {\n  padding: 0px 18px;\n  height: 40px;\n  line-height: 40px;\n  padding-top: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  display: block;\n  color: #298cda;\n}\n.text .name:hover {\n    text-decoration: underline;\n}\n.text .subname {\n  padding: 0px 18px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 14px;\n  color: #298cda;\n}\n.text .subname:hover {\n    text-decoration: underline;\n}\n.text .qrcode {\n  position: absolute;\n  top: 20px;\n  right: 18px;\n  width: 140px;\n  height: 140px;\n}\n.text .abstract-tips {\n  padding: 0px 18px;\n  height: 20px;\n  line-height: 20px;\n  font-size: 16px;\n  font-weight: bold;\n  display: block;\n  margin-top: 60px;\n}\n.text .abstract-content {\n  padding: 0px 18px;\n}\n.text .abstract-content .abstract-item {\n    display: block;\n    font-size: 14px;\n    color: #666;\n    min-height: 24px;\n    line-height: 24px;\n}\n.text .abstract-content-en {\n  padding: 0px 18px;\n  padding-top: 20px;\n}\n.text .abstract-content-en .abstract-item {\n    display: block;\n    font-size: 14px;\n    color: #999;\n    min-height: 24px;\n    line-height: 24px;\n}\n.text .preview {\n  padding: 0px 18px;\n  margin-top: 10px;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  overflow-x: scroll;\n  text-align: justify;\n  -webkit-overflow-scrolling: touch;\n}\n.text .preview .item {\n    width: 240px;\n    padding: 5px 30px 0px 0px;\n    display: inline-block;\n}\n.text .preview .item .boarder {\n      background-color: #fff;\n      width: 100%;\n      display: block;\n}\n.text .preview .item .boarder img {\n        width: 100%;\n}\n.text .image-item {\n  margin: 20px 0px;\n  width: 100%;\n  display: inline-block;\n  background-color: #fff;\n  transition: all 0.5s ease;\n  box-shadow: 0px 0px 10px 2px #ccc;\n}\n.text .image-item .image-cover {\n    padding: 20px 20px 20px 20px;\n    width: auto;\n    display: block;\n    background-color: #fff;\n}\n.text .image-item .image-cover img {\n      width: 100%;\n      height: 100%;\n      display: block;\n}\n@media screen and (max-width: 500px) {\n.text .preview {\n    padding: 0px !important;\n    margin-top: 10px;\n}\n.text .preview .item {\n      padding: 5px 10px;\n      width: 50%;\n}\n.text .preview .item .boarder {\n        padding: 0px;\n}\n.text .works {\n    padding-bottom: 12px;\n}\n.text .works .image-item {\n      width: auto;\n      margin: 0px;\n      display: block;\n      box-shadow: none;\n}\n.text .works .image-item .image-cover {\n        padding: 12px 12px 0px 12px;\n}\n}\n",""])}});