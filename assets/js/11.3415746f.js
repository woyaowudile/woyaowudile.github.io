(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{423:function(t,e,i){},429:function(t,e,i){"use strict";i(423)},464:function(t,e,i){"use strict";i.r(e);var l={name:"gp-example",components:{imagePreview:i(434).default},props:{name:String},data:function(){return{dialog:{visible:!1,title:"提示"}}},computed:{getImgUrl:function(){return"gupiao/亢龙有悔/example1.png"}},methods:{click:function(){this.dialog.visible=!0}}},a=(i(429),i(36)),s=Object(a.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gp-example"},[i("el-button",{attrs:{type:"text"},on:{click:t.click}},[t._v(t._s(t.name))]),t._v(" "),i("el-dialog",{staticClass:"gp-example--dialog",attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"100%"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)}}},[i("div",[i("el-collapse",[i("el-collapse-item",{attrs:{name:"2"}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        失败\n                    ")]),t._v(" "),i("image-preview",{attrs:{imgUrl:t.getImgUrl,width:"200"}})],1),t._v(" "),i("el-collapse-item",{attrs:{name:"3"}},[i("div",{attrs:{slot:"title"},slot:"title"},[t._v("\n                        成功\n                    ")]),t._v(" "),i("image-preview",{attrs:{imgUrl:t.getImgUrl,width:"200"}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")])],1)])],1)}),[],!1,null,"69e3e8e2",null);e.default=s.exports}}]);