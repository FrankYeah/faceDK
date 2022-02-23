(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{727:function(t,e,l){},728:function(t,e,l){"use strict";l(727)},729:function(t,e,l){"use strict";l.r(e);var d={components:{},props:{departmentData:{type:Array,default:function(){return{}}}},data:function(){return{filterLabel:null,selectedData:{label:[],id:[]},defaultProps:{children:"children",label:"label"}}},mounted:function(){},computed:{},methods:{filterNode:function(t,data){return!t||-1!==data.label.indexOf(t)},selectData:function(){var t=this;this.selectedData.label=[],this.$refs.tree.getCheckedNodes().forEach((function(e){t.selectedData.label.push(e.label)})),this.selectedData.id=this.$refs.tree.getCheckedKeys()},deleteData:function(t,e){this.$refs.tree.setChecked(t,!1),this.selectedData.label.splice(e,1),this.selectedData.id.splice(e,1)},cleanData:function(){var t=this;this.selectedData.id.forEach((function(e){t.$refs.tree.setChecked(e,!1)})),this.selectedData.label=[],this.selectedData.id=[]},closeDialog:function(){this.$emit("switchDialog",!1)},sendData:function(){this.$emit("getData",this.selectedData),this.closeDialog()}},watch:{filterLabel:function(t){this.$refs.tree.filter(t)}}},n=(l(728),l(30)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dialog"},[l("div",{staticClass:"dialog-row"},[l("div",{staticClass:"dialog-box"},[l("div",{staticClass:"dialog-hint"},[t._v("請選擇部門")]),t._v(" "),l("div",{staticClass:"dialog-card"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.filterLabel,expression:"filterLabel"}],staticClass:"dialog-input",attrs:{type:"text"},domProps:{value:t.filterLabel},on:{input:function(e){e.target.composing||(t.filterLabel=e.target.value)}}}),t._v(" "),l("el-tree",{ref:"tree",attrs:{data:t.departmentData,"show-checkbox":"","node-key":"id",props:t.defaultProps,"default-expanded-keys":[4],"filter-node-method":t.filterNode},on:{check:t.selectData}})],1)]),t._v(" "),l("div",{staticClass:"dialog-box"},[l("div",{staticClass:"dialog-rowtext"},[l("div",[t._v("已選擇部門（"+t._s(t.selectedData.label.length)+"）")]),t._v(" "),l("div",{on:{click:t.cleanData}},[t._v("全部清除")])]),t._v(" "),l("div",{staticClass:"dialog-card"},t._l(t.selectedData.label,(function(label,e){return l("div",{key:e,staticClass:"dialog-rowselected"},[l("div",[t._v(t._s(label))]),t._v(" "),l("div",{on:{click:function(l){return t.deleteData(t.selectedData.id[e],e)}}},[t._v("X")])])})),0)])]),t._v(" "),l("div",{staticClass:"dialog-btn"},[l("el-button",{attrs:{type:"info"},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sendData()}}},[t._v("確定")])],1)])}),[],!1,null,null,null);e.default=component.exports},730:function(t,e,l){},732:function(t,e,l){"use strict";l(730)},734:function(t,e,l){"use strict";l.r(e);var d=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-rowsame"},[e("img",{staticClass:"card-star",attrs:{src:l(328),alt:"star"}}),this._v(" "),e("div",[e("div",{staticClass:"card-head"},[this._v("A廠")]),this._v(" "),e("div",{staticClass:"card-sub"},[this._v("白白廠長")])]),this._v(" "),e("div",{staticClass:"card-device"},[this._v("設備明細")])])}],n={components:{},props:{cardData:{type:Object,default:function(){return{}}},cardDataKey:{type:Number}},data:function(){return{isShow:{attend:!1,schedule:!1,leave:!1}}},mounted:function(){},computed:{},methods:{seeMore:function(){this.$emit("seeMore",this.cardDataKey)}},watch:{}},c=(l(732),l(30)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card"},[t._m(0),t._v(" "),l("div",{staticClass:"card-row"},[l("div",[t._v("所有人數：")]),t._v(" "),l("div",[t._v(t._s(t.cardData.all))])]),t._v(" "),l("div",{staticClass:"card-dotline"}),t._v(" "),l("div",{staticClass:"card-row"},[l("div",[t._v("實到人數：")]),t._v(" "),l("div",[t._v(t._s(t.cardData.real))])]),t._v(" "),l("div",{staticClass:"card-dotline"}),t._v(" "),l("div",{staticClass:"card-row"},[l("div",[t._v("未到人數：")]),t._v(" "),l("div",[t._v(t._s(t.cardData.noShow))])]),t._v(" "),l("div",{staticClass:"card-dotline"}),t._v(" "),l("div",{staticClass:"card-row"},[l("div",[t._v("請假人數：")]),t._v(" "),l("div",[t._v(t._s(t.cardData.leave))])]),t._v(" "),l("div",{staticClass:"card-dotline"}),t._v(" "),l("div",{staticClass:"card-word"},[t._v("當前出勤總時數：")]),t._v(" "),l("div",{staticClass:"card-total"},[l("div",[t._v(t._s(t.cardData.hour))]),t._v(" "),l("div",[t._v(t._s(t.cardData.min))])]),t._v(" "),l("div",{staticClass:"card-more",on:{click:function(e){return t.seeMore()}}},[t._v("查看更多")])])}),d,!1,null,null,null);e.default=component.exports},755:function(t,e,l){},775:function(t,e,l){"use strict";l(755)},795:function(t,e,l){"use strict";l.r(e);var d={head:{title:"Dashboard"},layout:"default",components:{boardCard:l(734).default,dialogDepartment:l(729).default},props:{},data:function(){return{select:{isShowDepartment:!1,department:"全部",date:null},cardData:[{factory:"A廠",name:"林嶺成 廠長",total:333,hour:2534,min:2434},{factory:"B廠",name:"林嶺成 廠長",total:333,hour:4562,min:265},{factory:"C廠",name:"林嶺成 廠長",total:333,hour:12123,min:22},{factory:"D廠",name:"林嶺成 廠長",total:333,hour:2123,min:2322}],departmentData:[{id:1,label:"三處"},{id:2,label:"四處"},{id:3,label:"營業部"},{id:4,label:"一所",children:[{id:5,label:"三所"},{id:6,label:"四所"}]},{id:7,label:"設計部"}]}},mounted:function(){},destroyed:function(){},computed:{},methods:{switchDialog:function(t){this.select.isShowDepartment=t},getData:function(data){this.select.department=data.label.join(", ")}}},n=(l(775),l(30)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"index"},[l("div",{staticClass:"index-info"},[l("div",{staticClass:"index-info-rowbetween"},[l("div",{staticClass:"index-info-title"},[t._v("出勤資訊")]),t._v(" "),l("div",{staticClass:"index-info-btn"},[l("el-button",{attrs:{type:"primary"}},[t._v("查詢")])],1)]),t._v(" "),l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"index-info-row"},[l("div",{staticClass:"index-info-vertical"},[l("div",[t._v("選擇部門：")]),t._v(" "),l("div",{staticClass:"index-info-input",on:{click:function(e){t.select.isShowDepartment=!0}}},[t._v(t._s(t.select.department))])]),t._v(" "),l("div",{staticClass:"index-info-vertical"},[l("div",[t._v("日期篩選：")]),t._v(" "),l("el-date-picker",{staticClass:"index-info-date",attrs:{type:"date",placeholder:"日期"},model:{value:t.select.date,callback:function(e){t.$set(t.select,"date",e)},expression:"select.date"}})],1)])]),t._v(" "),l("div",{staticClass:"index-status"},[l("div",{staticClass:"index-status-title"},[t._v("出勤狀況")]),t._v(" "),l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"index-status-box"},t._l(t.cardData,(function(e,d){return l("div",{key:d,staticClass:"index-status-card"},[l("div",{staticClass:"index-status-orange"},[l("div",[t._v(t._s(e.factory))]),t._v(" "),l("div",[t._v(t._s(e.name))])]),t._v(" "),l("div",{staticClass:"index-status-inner"},[l("div",[t._v("當前出勤總人數：")]),t._v(" "),l("div",{staticClass:"index-status-total"},[l("div",[t._v(t._s(e.total))])]),t._v(" "),l("div",[t._v("當前出勤總時數：")]),t._v(" "),l("div",{staticClass:"index-status-time"},[l("div",[t._v("\n              "+t._s(e.hour)+" \n              "),l("span",{staticClass:"index-status-hint"},[t._v("hr")])]),t._v(" "),l("div",[t._v("\n              "+t._s(e.min)+"\n              "),l("span",{staticClass:"index-status-hint"},[t._v("hr")])])])])])})),0)]),t._v(" "),l("el-dialog",{attrs:{title:"選擇部門",visible:t.select.isShowDepartment},on:{"update:visible":function(e){return t.$set(t.select,"isShowDepartment",e)}}},[l("dialogDepartment",{attrs:{departmentData:t.departmentData},on:{switchDialog:t.switchDialog,getData:t.getData}})],1)],1)}),[],!1,null,"0d8ba588",null);e.default=component.exports}}]);