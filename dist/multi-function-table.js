!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("multi-function-table",[],t):"object"==typeof exports?exports["multi-function-table"]=t():e["multi-function-table"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=6)}([function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,o=document.querySelector("style["+y+'~="'+e.id+'"]');if(o){if(h)return g;o.parentNode.removeChild(o)}if(b){var i=f++;o=d||(d=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),v.ssrId&&e.setAttribute(y,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(10),c={},p=l&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,h=!1,g=function(){},v=null,y="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){h=n,v=r||{};var i=u(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=c[a.id];s.refs--,n.push(s)}t?(i=u(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(a=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=o),c){var p=u.functional,d=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(e,t){return c.call(t),d(e,t)}):u.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:s,options:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"multi-function-table",props:{dataTakeOverMode:{type:Boolean,default:!1},tableHeaders:{type:Array,default:function(){return[]}},tableHeight:{type:String,default:"false"},tableMaxHeight:{type:String,default:"false"},tableMinWidth:{type:String,default:"false"},tableWidth:{type:String,default:"false"},tableData:{type:Array,default:function(){return[]}},tableRowRightClickOptions:{type:Array,default:function(){return[]}},tableHeaderHeight:{type:String|Number,default:50},isStripe:{type:Boolean,default:!0},stripeBackground:{type:String,default:"#f7f8fa"},bodyColor:{type:String,default:"#001741"},isCheckbox:{type:Boolean,default:!1},isPage:{type:Boolean,default:!1},page:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizes:{type:Array,default:function(){return[5,10,25,50,100]}},pagePosition:{type:String,default:"center"},pageLayout:{type:String,default:function(){return"prev, pager, next, sizes, jumper"}},pageBackground:{type:Boolean,default:!0},hideOnSinglePage:{type:Boolean,default:!1},headerBackground:{type:String,default:"#f2f5fa"},headerFontColor:{type:String,default:"#909399"}},data:function(){return{tableBodyClick:{},tableHeadersSortActive:"",tableHeadersSortStatus:"",privatePage:1}},watch:{page:function(){this.privatePage=this.page}},mounted:function(){console.log(this.tableMaxHeight),this.privatePage=this.page,window.rightClickOptionsList||(window.rightClickOptionsList=function(){for(var e=document.getElementsByClassName("options-list"),t=0,n=e.length;t<n;t++)e[t].style="display: none;"}),document.body.removeEventListener("click",window.rightClickOptionsList),document.body.addEventListener("click",window.rightClickOptionsList)},methods:{currentPage:function(e){this.dataTakeOverMode||this.$emit("currentPage",e)},rowClick:function(e,t,n){this.$emit("rowClick",e,t,n)},clickRight:function(e,t,n){if(0===this.tableRowRightClickOptions.length)return!1;n.preventDefault(),this.tableBodyClick={left:n.clientX+"px",top:n.clientY+"px",current:{row:e,column:t,e:n}}},setHeader:function(e,t){var n=this,o=t.column,r=(t.$index,void 0);return this.tableHeaders.forEach(function(t){t.prop===o.property&&(r=t.options?n._renderHeaderLabelIcon(e,t.options,o.label,o.property):e("span",[t.label]))}),r},_renderHeaderLabelIcon:function(e,t,n,o){var r=[];return 1===t.length?("sort"===t[0].type&&r.push(e("span",{class:"render-header"},[n])),"popover"===t[0].type&&r.push(e("span",{},[e("span",{},""),e("el-popover",{props:{placement:"top",width:"200",trigger:"hover",content:t[0].props.content}},[e("span",{slot:"reference",class:"font-normal",style:{cursor:"pointer"}},[e("span",n),e("i",{class:t[0].props.icon,style:{margin:"0 5px"}})])])]))):t.forEach(function(o){"sort"===o.type&&t.length<1&&r.push(e("span",{class:"render-header"},[n])),"popover"===o.type&&r.push(e("span",{},[e("span",{},""),e("el-popover",{props:{placement:"top",width:"200",trigger:"hover",content:o.props.content}},[e("span",{slot:"reference",class:"font-normal",style:{cursor:"pointer"}},[e("span",n),e("i",{class:o.props.icon,style:{margin:"0 5px"}})])])]))}),r},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.$emit("selectionChange",e)},setPagePositionStyle:function(){var e="";return"left"===this.pagePosition?e="flex-start":"center"===this.pagePosition?e="center":"right"===this.pagePosition&&(e="flex-end"),{justifyContent:e}},cellStyle:function(e){var t=(e.row,e.column,e.rowIndex),n=(e.columnIndex,{});return t%2!=0&&(n.background=this.stripeBackground),n},_handleSizeChange:function(e){this.$emit("sizeChange",e)}},components:{RightClickList:r.default}}},function(e,t,n){"use strict";function o(e){n(11)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var s=n(13),l=n(2),u=o,c=l(i.a,s.a,!1,u,"data-v-6560687c",null);t.default=c.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"right-click-list",props:{listOptions:{type:Array,default:function(){return[]}},value:{type:Object,default:{}}},data:function(){return{secondMenuShowStatus:!1,isMaskShow:!1,renderOptionsListStyle:{},tempRenderOptionsListStyle:{},toDocumentHeight:""}},methods:{handleClick:function(e){if(e.fn){var t=this.$parent.$parent;e.fn.call(t,this.value.current.row)}}},mounted:function(){var e=this;window.onscroll||(window.onscroll=function(){console.log(e.tempRenderOptionsListStyle);var t=document.documentElement.scrollTop||document.body.scrollTop;0!==Object.keys(e.tempRenderOptionsListStyle).length&&(e.renderOptionsListStyle={top:e.toDocumentHeight-t+"px",left:e.tempRenderOptionsListStyle.left,display:"block"})})},watch:{value:{handler:function(e){e.left&&e.top?(this.isMaskShow=!0,this.$refs.optionsList.style="display: block; left: "+e.left+"; top: "+e.top,this.secondMenuShowStatus=!1,this.tempRenderOptionsListStyle=e,this.toDocumentHeight=parseInt(e.top.split("px")[0])+(document.documentElement.scrollTop||document.body.scrollTop)):this.isMaskShow=!1},immediate:!0}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RightClickList=t.MultiFunctionTable=void 0;var r=n(7),i=o(r),a=n(4),s=o(a);i.default.install=function(e){e.component(i.default.name,i.default),e.component(s.default.name,s.default)},t.default=i.default,t.MultiFunctionTable=i.default,t.RightClickList=s.default},function(e,t,n){"use strict";function o(e){n(8)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var s=n(14),l=n(2),u=o,c=l(i.a,s.a,!1,u,"data-v-42b4b234",null);t.default=c.exports},function(e,t,n){var o=n(9);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("1ae4ea5f",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".container[data-v-42b4b234] .el-table th>.cell{padding-left:14px;width:calc(100% - 4px)}.container[data-v-42b4b234] .el-table__header-wrapper,.container[data-v-42b4b234] .el-table__header-wrapper thead th,.container[data-v-42b4b234] .el-table__header-wrapper thead th .cell{overflow:visible!important}.container[data-v-42b4b234]{position:relative}.container .pagination-container[data-v-42b4b234]{margin-top:20px}.render-header[data-v-42b4b234]:hover{cursor:pointer}",""])},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+r,css:s,media:l,sourceMap:u};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}},function(e,t,n){var o=n(12);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1)("cdbd2ef6",o,!0,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,".options-list[data-v-6560687c]{display:none}.list[data-v-6560687c]{position:fixed;z-index:99}",""])},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{ref:"optionsList",staticClass:"options-list",class:e.isMaskShow?"list":"",style:e.isMaskShow?e.renderOptionsListStyle:""},e._l(e.listOptions,function(t,o){return n("dd",{key:"f"+o,staticClass:"f-list",on:{mouseover:function(n){t.secondMenu&&t.secondMenu.length>0?e.secondMenuShowStatus=!0:e.secondMenuShowStatus=!1}}},[n("span",{domProps:{innerHTML:e._s(t.icon)}}),e._v(" "),n("span",{on:{click:function(n){return n.stopPropagation(),e.handleClick(t)}}},[e._v(e._s(t.name))]),e._v(" "),t.secondMenu&&e.secondMenuShowStatus?n("dl",e._l(t.secondMenu,function(t,o){return n("dd",{key:"s"+o},[n("span",{domProps:{innerHTML:e._s(t.icon)}}),e._v(" "),n("span",{on:{click:function(n){return n.stopPropagation(),e.handleClick(t)}}},[e._v(e._s(t.name))])])}),0):e._e()])}),0)},r=[],i={render:o,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var o=function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{stripe:t.isStripe,data:t.tableData,"header-row-style":{height:t.tableHeaderHeight+"px"},"header-cell-style":{backgroundColor:t.headerBackground,color:t.headerFontColor},height:t.tableHeight,"max-height":t.tableMaxHeight,"min-width":t.tableMinWidth,width:t.tableWidth,"cell-style":t.cellStyle,"row-style":function(){return{color:e.bodyColor}}},on:{"row-click":t.rowClick,"row-contextmenu":t.clickRight,"selection-change":t.handleSelectionChange}},[t.isCheckbox?o("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t._v(" "),t._l(t.tableHeaders,function(e,n){return o("el-table-column",{key:n,attrs:{prop:e.prop,label:e.label,sortable:!!e.options&&!!e.options.map(function(e){return e.type}).includes("sort"),"render-header":t.setHeader,width:e.width},scopedSlots:t._u([{key:"default",fn:function(n){return[t._t(e.prop,[o("span",[t._v(t._s(n.row?n.row[e.prop]:""))])],{row:n.row,$index:n.$index})]}}],null,!0)})})],2),t._v(" "),t.isPage?o("div",{staticClass:"pagination-container",staticStyle:{display:"flex"},style:t.setPagePositionStyle()},[o("el-pagination",{attrs:{background:t.pageBackground,layout:t.pageLayout,total:t.total,"page-sizes":t.pageSizes,"page-size":t.pageSize,"hide-on-single-page":t.hideOnSinglePage,"current-page":t.privatePage},on:{"update:currentPage":function(e){t.privatePage=e},"update:current-page":function(e){t.privatePage=e},"current-change":t.currentPage,"size-change":t._handleSizeChange}})],1):t._e(),t._v(" "),o("right-click-list",{attrs:{menu:t.$scopedSlots.clickMenu,value:t.tableBodyClick,"list-options":t.tableRowRightClickOptions}})],1)},r=[],i={render:o,staticRenderFns:r};t.a=i}])});