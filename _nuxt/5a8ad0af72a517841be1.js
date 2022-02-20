(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{213:function(t,e,l){},214:function(t,e,l){"use strict";l(213)},215:function(t,e,l){"use strict";l.r(e);var n={components:{},props:{departmentData:{type:Array,default:function(){return{}}}},data:function(){return{filterLabel:null,selectedData:{label:[],id:[]},defaultProps:{children:"children",label:"label"}}},mounted:function(){},computed:{},methods:{filterNode:function(t,data){return!t||-1!==data.label.indexOf(t)},selectData:function(){var t=this;this.selectedData.label=[],this.$refs.tree.getCheckedNodes().forEach((function(e){t.selectedData.label.push(e.label)})),this.selectedData.id=this.$refs.tree.getCheckedKeys()},deleteData:function(t,e){this.$refs.tree.setChecked(t,!1),this.selectedData.label.splice(e,1),this.selectedData.id.splice(e,1)},cleanData:function(){var t=this;this.selectedData.id.forEach((function(e){t.$refs.tree.setChecked(e,!1)})),this.selectedData.label=[],this.selectedData.id=[]},closeDialog:function(){this.$emit("switchDialog",!1)},sendData:function(){this.$emit("getData",this.selectedData),this.closeDialog()}},watch:{filterLabel:function(t){this.$refs.tree.filter(t)}}},o=(l(214),l(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"dialog"},[l("div",{staticClass:"dialog-row"},[l("div",{staticClass:"dialog-box"},[l("div",{staticClass:"dialog-hint"},[t._v("請選擇部門")]),t._v(" "),l("div",{staticClass:"dialog-card"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.filterLabel,expression:"filterLabel"}],staticClass:"dialog-input",attrs:{type:"text"},domProps:{value:t.filterLabel},on:{input:function(e){e.target.composing||(t.filterLabel=e.target.value)}}}),t._v(" "),l("el-tree",{ref:"tree",attrs:{data:t.departmentData,"show-checkbox":"","node-key":"id",props:t.defaultProps,"default-expanded-keys":[4],"filter-node-method":t.filterNode},on:{check:t.selectData}})],1)]),t._v(" "),l("div",{staticClass:"dialog-box"},[l("div",{staticClass:"dialog-rowtext"},[l("div",[t._v("已選擇部門（"+t._s(t.selectedData.label.length)+"）")]),t._v(" "),l("div",{on:{click:t.cleanData}},[t._v("全部清除")])]),t._v(" "),l("div",{staticClass:"dialog-card"},t._l(t.selectedData.label,(function(label,e){return l("div",{key:e,staticClass:"dialog-rowselected"},[l("div",[t._v(t._s(label))]),t._v(" "),l("div",{on:{click:function(l){return t.deleteData(t.selectedData.id[e],e)}}},[t._v("X")])])})),0)])]),t._v(" "),l("div",{staticClass:"dialog-btn"},[l("el-button",{attrs:{type:"info"},on:{click:function(e){return t.closeDialog()}}},[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.sendData()}}},[t._v("確定")])],1)])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,l){},219:function(t,e,l){"use strict";l(217)},221:function(t,e,l){"use strict";l.r(e);var n={layout:"default",components:{},props:{},data:function(){return{input:{name:"",time:"",offwork:"",rest:"",hour:"",status:"0"}}},mounted:function(){},destroyed:function(){},computed:{},methods:{cancel:function(){this.$emit("switchDialogAdd",!1)},confirm:function(){this.$emit("switchDialogAdd",!1)}},watch:{}},o=(l(219),l(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"add"},[l("div",{staticClass:"add-box"},[l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("班表名稱:")]),t._v(" "),l("el-input",{attrs:{placeholder:"班表名稱"},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1),t._v(" "),l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("上班時段:")]),t._v(" "),l("el-input",{attrs:{placeholder:"上班時段"},model:{value:t.input.time,callback:function(e){t.$set(t.input,"time",e)},expression:"input.time"}})],1),t._v(" "),l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("下班時段:")]),t._v(" "),l("el-input",{attrs:{placeholder:"下班時段"},model:{value:t.input.offwork,callback:function(e){t.$set(t.input,"offwork",e)},expression:"input.offwork"}})],1),t._v(" "),l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("休息時段:")]),t._v(" "),l("el-input",{attrs:{placeholder:"休息時段"},model:{value:t.input.rest,callback:function(e){t.$set(t.input,"rest",e)},expression:"input.rest"}})],1),t._v(" "),l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("工作時數")]),t._v(" "),l("el-input",{attrs:{placeholder:"工作時數"},model:{value:t.input.hour,callback:function(e){t.$set(t.input,"hour",e)},expression:"input.hour"}})],1),t._v(" "),l("div",{staticClass:"add-inner"},[l("div",{staticClass:"add-text"},[t._v("使用狀態:")]),t._v(" "),l("div",[l("el-radio",{attrs:{label:"0"},model:{value:t.input.status,callback:function(e){t.$set(t.input,"status",e)},expression:"input.status"}},[t._v("啟用")]),t._v(" "),l("el-radio",{attrs:{label:"1"},model:{value:t.input.status,callback:function(e){t.$set(t.input,"status",e)},expression:"input.status"}},[t._v("停用")])],1)])]),t._v(" "),l("div",{staticClass:"add-btn-box"},[l("el-button",{attrs:{plain:""},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("確定")])],1)])}),[],!1,null,"11567174",null);e.default=component.exports},239:function(t,e,l){},258:function(t,e,l){"use strict";l(239)},278:function(t,e,l){"use strict";l.r(e);var n={head:{title:"Dashboard"},layout:"default",components:{dialogDepartment:l(215).default,dialogAdd:l(221).default},props:{},data:function(){return{isShowAdd:!1,select:{isShowDepartment:!1,department:"全部"},departmentData:[{id:1,label:"三處"},{id:2,label:"四處"},{id:3,label:"營業部"},{id:4,label:"一所",children:[{id:5,label:"三所"},{id:6,label:"四所"}]},{id:7,label:"設計部"}],filter:{dataAll:[],text:""},tableHead:[{name:"name",label:"班表名稱"},{name:"work",label:"上班時段"},{name:"offwork",label:"下班時段"},{name:"break",label:"休息時段"},{name:"time",label:"工作時數"},{name:"status",label:"使用狀態"},{name:"mani",label:"操作"}],tableData:[{name:"王大美",work:"00:00",offwork:"02:00",break:"01:00 ~ 03:00",time:"11小時",status:"啟用",mani:!1},{name:"王曉美",work:"01:00",offwork:"01:00",break:"02:00 ~ 03:00",time:"3小時",status:"停用",mani:!0},{name:"王中美",work:"00:00",offwork:"04:00",break:"02:00 ~ 03:00",time:"2小時",status:"啟用",mani:!0}]}},mounted:function(){this.filter.dataAll=this.tableData},destroyed:function(){},computed:{},methods:{choose:function(){},exportList:function(){},inportList:function(){},addNew:function(){},goToList:function(){this.$router.push({path:"/schedule-list",query:{}})},goToDepartment:function(){this.$router.push({path:"/schedule-department",query:{}})},switchDialog:function(t){this.select.isShowDepartment=t},switchDialogAdd:function(t){this.isShowAdd=t},getData:function(data){this.select.department=data.label.join(", ")},ManiData:function(t){}},watch:{}},o=(l(258),l(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"schedule"},[l("div",{staticClass:"schedule-list"},[l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"schedule-row-box"},[l("div",{staticClass:"schedule-department-box"},[l("div",[t._v("選擇部門：")]),t._v(" "),l("div",{staticClass:"schedule-row"},[l("div",{staticClass:"schedule-department-input",on:{click:function(e){t.select.isShowDepartment=!0}}},[t._v(t._s(t.select.department))]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.choose()}}},[t._v("選擇")])],1)])])]),t._v(" "),l("div",{staticClass:"schedule-status"},[l("div",{staticClass:"schedule-status-row"},[l("div",{staticClass:"schedule-title"},[t._v("名單列表")]),t._v(" "),l("div",{staticClass:"schedule-btn-row"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isShowAdd=!0}}},[t._v("新增員工")]),t._v(" "),l("el-button",{attrs:{type:"success"},on:{click:function(e){return t.goToDepartment()}}},[t._v("班表")]),t._v(" "),l("el-button",{staticStyle:{background:"#f35d82",color:"white"},on:{click:function(e){return t.goToList()}}},[t._v("班次清單")]),t._v(" "),l("el-button",{attrs:{type:"warning"}},[t._v("匯出當月排班")]),t._v(" "),l("el-button",{attrs:{type:"danger"}},[t._v("匯入當月排班")])],1)]),t._v(" "),l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"schedule-table-main"},[l("div",{staticClass:"schedule-table-row"},[l("div"),t._v(" "),l("div",[l("el-input",{attrs:{placeholder:"搜尋","prefix-icon":"el-icon-search"},model:{value:t.filter.text,callback:function(e){t.$set(t.filter,"text",e)},expression:"filter.text"}})],1)]),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.filter.dataAll}},[l("el-table-column",{attrs:{prop:"name",label:"班表名稱",sortable:"","min-width":"13"}}),t._v(" "),l("el-table-column",{attrs:{prop:"work",label:"上班時段",sortable:"","min-width":"13"}}),t._v(" "),l("el-table-column",{attrs:{prop:"offwork",label:"下班時段",sortable:"","min-width":"13"}}),t._v(" "),l("el-table-column",{attrs:{prop:"break",label:"休息時段",sortable:"","min-width":"13"}}),t._v(" "),l("el-table-column",{attrs:{prop:"time",label:"工作時數",sortable:"","min-width":"13"}}),t._v(" "),l("el-table-column",{attrs:{label:"使用狀態","min-width":"13"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{style:"\n              "+("停用"==e.row.status?"color: red;":"")+"\n            "},[t._v(t._s(e.row.status))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作","min-width":"13"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.mani?l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.row.mani=!1}}},[t._v("啟用")]):l("el-button",{attrs:{size:"mini",type:"info",plain:""},on:{click:function(t){e.row.mani=!0}}},[t._v("停用")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-edit"},on:{click:function(l){return t.ManiData(e.$index)}}})]}}])})],1),t._v(" "),l("div",{staticClass:"schedule-table-hint"},[l("div",[t._v("目前顯示 1 到 3 全部 3 筆")]),t._v(" "),l("div",[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:200}})],1)])],1)]),t._v(" "),l("el-dialog",{attrs:{title:"選擇部門",visible:t.select.isShowDepartment},on:{"update:visible":function(e){return t.$set(t.select,"isShowDepartment",e)}}},[l("dialogDepartment",{attrs:{departmentData:t.departmentData},on:{switchDialog:t.switchDialog,getData:t.getData}})],1),t._v(" "),l("el-dialog",{attrs:{title:"新增班次",width:"80%",visible:t.isShowAdd},on:{"update:visible":function(e){t.isShowAdd=e}}},[l("dialogAdd",{on:{switchDialogAdd:t.switchDialogAdd}})],1)],1)}),[],!1,null,"9511bd72",null);e.default=component.exports}}]);