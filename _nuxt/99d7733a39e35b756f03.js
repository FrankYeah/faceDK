(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{230:function(t,e,l){},249:function(t,e,l){"use strict";l(230)},271:function(t,e,l){"use strict";l.r(e);var n={head:{title:"Dashboard"},layout:"default",components:{},props:{},data:function(){return{select:{date:null},filter:{dataAll:[],text:""},tableHead:[{name:"key",label:"編號"},{name:"photo",label:"頭像照片"},{name:"num",label:"機器序號"},{name:"time",label:"出現時間"},{name:"mani",label:"操作"}],tableData:[{key:"123",photo:l(112),num:1111,time:20210202,mani:!0},{key:"456",photo:l(112),num:22222,time:20240404,mani:!0},{key:"789",photo:l(112),num:33333,time:20220303,mani:!0}]}},mounted:function(){this.filter.dataAll=this.tableData},destroyed:function(){},computed:{},methods:{ManiData:function(t){console.log(t)},remove:function(t){console.log(t)}},watch:{"filter.text":{handler:function(t){this.filter.dataAll=this.tableData.filter((function(data){return!t||data.key.toLowerCase().includes(t.toLowerCase())}))}}}},r=(l(249),l(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"stranger"},[l("div",{staticClass:"stranger-list"},[l("div",{staticClass:"stranger-row"},[l("div",{staticClass:"stranger-title"},[t._v("名單列表")]),t._v(" "),l("el-button",{attrs:{type:"primary"}},[t._v("查詢")])],1),t._v(" "),l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"stranger-date-box"},[l("div",[t._v("日期篩選：")]),t._v(" "),l("el-date-picker",{attrs:{type:"date",placeholder:"日期"},model:{value:t.select.date,callback:function(e){t.$set(t.select,"date",e)},expression:"select.date"}})],1)]),t._v(" "),l("div",{staticClass:"stranger-status"},[l("div",{staticClass:"stranger-title"},[t._v("名單列表")]),t._v(" "),l("div",{staticClass:"global-line"}),t._v(" "),l("div",{staticClass:"stranger-table-main"},[l("div",{staticClass:"stranger-table-row"},[l("div"),t._v(" "),l("div",[l("el-input",{attrs:{placeholder:"搜尋","prefix-icon":"el-icon-search"},model:{value:t.filter.text,callback:function(e){t.$set(t.filter,"text",e)},expression:"filter.text"}})],1)]),t._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.filter.dataAll}},[l("el-table-column",{attrs:{prop:"key",label:"編號",sortable:"",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"頭像照片",sortable:"",width:"180"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("img",{staticClass:"stranger-table-img",attrs:{src:t.row.photo,alt:"star"}})]}}])}),t._v(" "),l("el-table-column",{attrs:{prop:"num",label:"機器序號",sortable:"",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{prop:"time",label:"出現時間",sortable:"",width:"180"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return t.remove(e.$index)}}},[t._v("移除")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-edit"},on:{click:function(l){return t.ManiData(e.$index)}}})]}}])})],1),t._v(" "),l("div",{staticClass:"stranger-table-hint"},[l("div",[t._v("目前顯示 1 到 3 全部 3 筆")]),t._v(" "),l("div",[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:200}})],1)])],1)])])}),[],!1,null,"3d18e768",null);e.default=component.exports}}]);