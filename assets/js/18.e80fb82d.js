(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{71:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"loading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading","aria-hidden":"true"}},[t._v("#")]),t._v(" Loading")]),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用")]),s("p",[t._v("在任意组件内部可通过"),s("code",[t._v("this.$loading")]),t._v("方法调用, 全局只会生成一个loading, 所以可以通过"),s("code",[t._v("$loading.close()")]),t._v("关闭")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("showLoading")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$loading")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'是否\b加入购物车?'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        "),s("span",{attrs:{class:"token function"}},[t._v("closeLoading")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$loading"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("close")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{attrs:{id:"高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级用法")]),s("p",[t._v("通过第二个参数, 可以进一步定制loading.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("clickHandle")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$loading")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                background"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'rgba(0,0,0,0.5)'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                zIndex"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'999'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("默认值")]),s("th",[t._v("可选值")]),s("th",[t._v("是否必选")])])]),s("tbody",[s("tr",[s("td",[t._v("options")]),s("td",[t._v("选项")]),s("td",[s("code",[t._v("Object")])]),s("td",[t._v("{}")]),s("td",[t._v("-")]),s("td",[t._v("否")])])])]),s("h5",{attrs:{id:"展开options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展开options","aria-hidden":"true"}},[t._v("#")]),t._v(" 展开options")]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("默认值")]),s("th",[t._v("可选值")]),s("th",[t._v("是否必选")])])]),s("tbody",[s("tr",[s("td",[t._v("background")]),s("td",[t._v("背景色")]),s("td",[s("code",[t._v("String")])]),s("td",[t._v("transparent")]),s("td",[t._v("-")]),s("td",[t._v("否")])]),s("tr",[s("td",[t._v("zIndex")]),s("td",[t._v("层级")]),s("td",[s("code",[t._v("Number")])]),s("td",[t._v("1986")]),s("td",[t._v("-")]),s("td",[t._v("否")])])])]),s("h5",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),s("th",[t._v("说明")])])]),s("tbody",[s("tr",[s("td",[t._v("close")]),s("td",[t._v("关闭loading")])])])])])}],!1,null,null,null);a.default=o.exports}}]);