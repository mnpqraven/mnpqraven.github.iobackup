(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{327:function(t,e,r){"use strict";r.r(e);var n=r(9),c=(r(51),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=r(53),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("p",[t._v(" Post created at: "+t._s(t.formatDate(t.article.createdAt))+" ")]),t._v(" "),r("p",[t._v(" Post last updated: "+t._s(t.formatDate(t.article.updatedAt)))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);