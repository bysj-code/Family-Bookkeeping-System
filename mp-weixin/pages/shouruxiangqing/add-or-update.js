(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouruxiangqing/add-or-update"],{"12da":function(n,e,r){"use strict";r.r(e);var t=r("4d7a"),u=r("3095");for(var i in u)"default"!==i&&function(n){r.d(e,n,(function(){return u[n]}))}(i);r("3bb1");var o,a=r("f0c5"),s=Object(a["a"])(u["default"],t["b"],t["c"],!1,null,"1cdd3cdc",null,!1,t["a"],o);e["default"]=s.exports},3095:function(n,e,r){"use strict";r.r(e);var t=r("7211"),u=r.n(t);for(var i in t)"default"!==i&&function(n){r.d(e,n,(function(){return t[n]}))}(i);e["default"]=u.a},"3bb1":function(n,e,r){"use strict";var t=r("6cb5"),u=r.n(t);u.a},"4d7a":function(n,e,r){"use strict";r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"b7aa"))}},u=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"6cb5":function(n,e,r){},7211:function(n,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u(r("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function i(n,e,r,t,u,i,o){try{var a=n[i](o),s=a.value}catch(c){return void r(c)}a.done?e(s):Promise.resolve(s).then(t,u)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(t,u){var o=n.apply(e,r);function a(n){i(o,t,u,a,s,"next",n)}function s(n){i(o,t,u,a,s,"throw",n)}a(void 0)}))}}var a=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("b7aa"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ro:{shouruxiangqingName:!1,shouruxiangqingPhoto:!1,shouruxiangqingMoney:!1,shouruxiangqingTypes:!1,yonghuId:!1,shouruxiangqingContent:!1,insertTime:!1,createTime:!1},ruleForm:{shouruxiangqingName:"",shouruxiangqingPhoto:"",shouruxiangqingMoney:"",shouruxiangqingTypes:"",shouruxiangqingValue:"",yonghuId:"",shouruxiangqingContent:"",insertTime:"",createTime:""},user:{},shouruxiangqingTypesOptions:[],shouruxiangqingTypesIndex:0}},components:{wPicker:a},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var e=this;return o(t.default.mark((function r(){var u,i,o;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u={page:1,limit:100,dicCode:"shouruxiangqing_types"},r.next=3,e.$api.page("dictionary",u);case 3:if(i=r.sent,e.shouruxiangqingTypesOptions=i.data.list,!n.id){r.next=11;break}return e.ruleForm.id=n.id,r.next=9,e.$api.info("shouruxiangqing",e.ruleForm.id);case 9:o=r.sent,e.ruleForm=o.data;case 11:n.shouruxiangqingId&&(e.ruleForm.shouruxiangqingId=n.shouruxiangqingId);case 12:case"end":return r.stop()}}),r)})))()},methods:{shouruxiangqingTypesChange:function(n){this.shouruxiangqingTypesIndex=n.target.value,this.ruleForm.shouruxiangqingValue=this.shouruxiangqingTypesOptions[this.shouruxiangqingTypesIndex].indexName,this.ruleForm.shouruxiangqingTypes=this.shouruxiangqingTypesOptions[this.shouruxiangqingTypesIndex].codeIndex},shouruxiangqingPhotoTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shouruxiangqingPhoto=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){}))}))},insertTimeConfirm:function(n){console.log(n),this.ruleForm.insertTime=n.result,this.$forceUpdate()},createTimeConfirm:function(n){console.log(n),this.ruleForm.createTime=n.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return o(t.default.mark((function r(){return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.ruleForm.shouruxiangqingName){r.next=3;break}return e.$utils.msg("标题不能为空"),r.abrupt("return");case 3:if(e.ruleForm.shouruxiangqingPhoto){r.next=6;break}return e.$utils.msg("封面不能为空"),r.abrupt("return");case 6:if(e.ruleForm.shouruxiangqingMoney||e.$validate.isIntNumer(e.ruleForm.shouruxiangqingMoney)||!(e.ruleForm.shouruxiangqingMoney>0)){r.next=9;break}return e.$utils.msg("收入金额不能为空，不能小于0 格式为数字"),r.abrupt("return");case 9:if(!e.ruleForm.id){r.next=14;break}return r.next=12,e.$api.update("shouruxiangqing",e.ruleForm);case 12:r.next=16;break;case 14:return r.next=16,e.$api.save("shouruxiangqing",e.ruleForm);case 16:n.setStorageSync("pingluenStateState",!0),e.$utils.msgBack("提交成功");case 18:case"end":return r.stop()}}),r)})))()},getDate:function(n){var e=new Date,r=e.getFullYear(),t=e.getMonth()+1,u=e.getDate();return"start"===n?r-=60:"end"===n&&(r+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(r,"-").concat(t,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,r("543d")["default"])},"7a0c":function(n,e,r){"use strict";(function(n){r("48e8");t(r("66fd"));var e=t(r("12da"));function t(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=r,n(e.default)}).call(this,r("543d")["createPage"])}},[["7a0c","common/runtime","common/vendor"]]]);