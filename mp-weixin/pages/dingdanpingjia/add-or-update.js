(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanpingjia/add-or-update"],{"2c57":function(n,i,e){"use strict";e.r(i);var t=e("eac7"),a=e("e2dc");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("6a209");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"fb2c4eee",null,!1,t["a"],u);i["default"]=o.exports},4819:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var s=n[r](u),o=s.value}catch(c){return void e(c)}s.done?i(o):Promise.resolve(o).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function s(n){r(u,t,a,s,o,"next",n)}function o(n){r(u,t,a,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("c519"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{dingdanbianhao:"",shangpinmingcheng:"",shangpinfenlei:"",pingfen:"",tianjiatupian:"",pingjianeirong:"",pingjiariqi:"",yonghuming:"",lianxidianhua:"",maijiazhanghao:"",sfsh:"",shhf:"",userid:""},shangpinmingchengOptions:[],shangpinmingchengIndex:0,pingfenOptions:[],pingfenIndex:0,user:{},ro:{dingdanbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,pingfen:!1,tianjiatupian:!1,pingjianeirong:!1,pingjiariqi:!1,yonghuming:!1,lianxidianhua:!1,maijiazhanghao:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:return r=i.sent,this.user=r.data,this.ruleForm.yonghuming=this.user.yonghuming,i.next=8,this.$api.option("shangpinxinxi","shangpinmingcheng",{});case 8:if(r=i.sent,this.shangpinmingchengOptions=r.data,this.pingfenOptions="1,2,3,4,5".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=19;break}return this.ruleForm.id=e.id,i.next=17,this.$api.info("dingdanpingjia",this.ruleForm.id);case 17:r=i.sent,this.ruleForm=r.data;case 19:if(!e.cross){i.next=70;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 22:if((i.t1=i.t0()).done){i.next=70;break}if(s=i.t1.value,"dingdanbianhao"!=s){i.next=28;break}return this.ruleForm.dingdanbianhao=u[s],this.ro.dingdanbianhao=!0,i.abrupt("continue",22);case 28:if("shangpinmingcheng"!=s){i.next=32;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,i.abrupt("continue",22);case 32:if("shangpinfenlei"!=s){i.next=36;break}return this.ruleForm.shangpinfenlei=u[s],this.ro.shangpinfenlei=!0,i.abrupt("continue",22);case 36:if("pingfen"!=s){i.next=40;break}return this.ruleForm.pingfen=u[s],this.ro.pingfen=!0,i.abrupt("continue",22);case 40:if("tianjiatupian"!=s){i.next=44;break}return this.ruleForm.tianjiatupian=u[s],this.ro.tianjiatupian=!0,i.abrupt("continue",22);case 44:if("pingjianeirong"!=s){i.next=48;break}return this.ruleForm.pingjianeirong=u[s],this.ro.pingjianeirong=!0,i.abrupt("continue",22);case 48:if("pingjiariqi"!=s){i.next=52;break}return this.ruleForm.pingjiariqi=u[s],this.ro.pingjiariqi=!0,i.abrupt("continue",22);case 52:if("yonghuming"!=s){i.next=56;break}return this.ruleForm.yonghuming=u[s],this.ro.yonghuming=!0,i.abrupt("continue",22);case 56:if("lianxidianhua"!=s){i.next=60;break}return this.ruleForm.lianxidianhua=u[s],this.ro.lianxidianhua=!0,i.abrupt("continue",22);case 60:if("maijiazhanghao"!=s){i.next=64;break}return this.ruleForm.maijiazhanghao=u[s],this.ro.maijiazhanghao=!0,i.abrupt("continue",22);case 64:if("userid"!=s){i.next=68;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,i.abrupt("continue",22);case 68:i.next=22;break;case 70:this.styleChange();case 71:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinmingchengChange:function(){var n=u(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.shangpinmingchengIndex=i.target.value,this.ruleForm.shangpinmingcheng=this.shangpinmingchengOptions[this.shangpinmingchengIndex],n.next=4,this.$api.follow("shangpinxinxi","shangpinmingcheng",{columnValue:this.ruleForm.shangpinmingcheng});case 4:e=n.sent,e.data.shangpinfenlei&&(this.ruleForm.shangpinfenlei=e.data.shangpinfenlei);case 6:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),pingjiariqiChange:function(n){this.ruleForm.pingjiariqi=n.target.value,this.$forceUpdate()},pingfenChange:function(n){this.pingfenIndex=n.target.value,this.ruleForm.pingfen=this.pingfenOptions[this.pingfenIndex]},tianjiatupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tianjiatupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("dingdanpingjia",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("dingdanpingjia",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=o}).call(this,e("543d")["default"])},"6a209":function(n,i,e){"use strict";var t=e("72d0"),a=e.n(t);a.a},"72d0":function(n,i,e){},7547:function(n,i,e){"use strict";(function(n){e("c6d3"),e("921b");t(e("66fd"));var i=t(e("2c57"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},e2dc:function(n,i,e){"use strict";e.r(i);var t=e("4819"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},eac7:function(n,i,e){"use strict";var t,a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))}},[["7547","common/runtime","common/vendor"]]]);