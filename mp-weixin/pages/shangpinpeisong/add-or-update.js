(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinpeisong/add-or-update"],{2855:function(n,e,i){"use strict";i.r(e);var t=i("672a"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},"3e10":function(n,e,i){},"672a":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var o=n[r](u),s=o.value}catch(h){return void i(h)}o.done?e(s):Promise.resolve(s).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function o(n){r(u,t,a,o,s,"next",n)}function s(n){r(u,t,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("c519"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",shangpinfenlei:"",tupian:"",shuliang:"",zongjine:"",peisongzhuangtai:"",gengxinshijian:"",maijiazhanghao:"",shouji:"",yonghuming:"",lianxidianhua:"",userid:""},peisongzhuangtaiOptions:[],peisongzhuangtaiIndex:0,user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,tupian:!1,shuliang:!1,zongjine:!1,peisongzhuangtai:!1,gengxinshijian:!1,maijiazhanghao:!1,shouji:!1,yonghuming:!1,lianxidianhua:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(t.default.mark((function e(i){var a,r,u,o;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.peisongzhuangtaiOptions="配送中,已完成".split(","),this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=14;break}return this.ruleForm.id=i.id,e.next=12,this.$api.info("shangpinpeisong",this.ruleForm.id);case 12:r=e.sent,this.ruleForm=r.data;case 14:if(!i.cross){e.next=73;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=73;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=23;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",17);case 23:if("shangpinmingcheng"!=o){e.next=27;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",17);case 27:if("shangpinfenlei"!=o){e.next=31;break}return this.ruleForm.shangpinfenlei=u[o],this.ro.shangpinfenlei=!0,e.abrupt("continue",17);case 31:if("tupian"!=o){e.next=35;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,e.abrupt("continue",17);case 35:if("shuliang"!=o){e.next=39;break}return this.ruleForm.shuliang=u[o],this.ro.shuliang=!0,e.abrupt("continue",17);case 39:if("zongjine"!=o){e.next=43;break}return this.ruleForm.zongjine=u[o],this.ro.zongjine=!0,e.abrupt("continue",17);case 43:if("peisongzhuangtai"!=o){e.next=47;break}return this.ruleForm.peisongzhuangtai=u[o],this.ro.peisongzhuangtai=!0,e.abrupt("continue",17);case 47:if("gengxinshijian"!=o){e.next=51;break}return this.ruleForm.gengxinshijian=u[o],this.ro.gengxinshijian=!0,e.abrupt("continue",17);case 51:if("maijiazhanghao"!=o){e.next=55;break}return this.ruleForm.maijiazhanghao=u[o],this.ro.maijiazhanghao=!0,e.abrupt("continue",17);case 55:if("shouji"!=o){e.next=59;break}return this.ruleForm.shouji=u[o],this.ro.shouji=!0,e.abrupt("continue",17);case 59:if("yonghuming"!=o){e.next=63;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,e.abrupt("continue",17);case 63:if("lianxidianhua"!=o){e.next=67;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,e.abrupt("continue",17);case 67:if("userid"!=o){e.next=71;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",17);case 71:e.next=17;break;case 73:this.styleChange();case 74:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},gengxinshijianConfirm:function(n){console.log(n),this.ruleForm.gengxinshijian=n.result,this.$forceUpdate()},peisongzhuangtaiChange:function(n){this.peisongzhuangtaiIndex=n.target.value,this.ruleForm.peisongzhuangtai=this.peisongzhuangtaiOptions[this.peisongzhuangtaiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("shangpinpeisong",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("shangpinpeisong",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},"78db":function(n,e,i){"use strict";var t={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"c519"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}))},"82fd":function(n,e,i){"use strict";var t=i("3e10"),a=i.n(t);a.a},"8ffb":function(n,e,i){"use strict";(function(n){i("c6d3"),i("921b");t(i("66fd"));var e=t(i("b059"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},b059:function(n,e,i){"use strict";i.r(e);var t=i("78db"),a=i("2855");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("82fd");var u,o=i("f0c5"),s=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"3249007a",null,!1,t["a"],u);e["default"]=s.exports}},[["8ffb","common/runtime","common/vendor"]]]);