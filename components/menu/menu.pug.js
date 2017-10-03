function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function menuTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"components\u002Fmenu\u002Fmenu.pug":"div.menu.pure-menu.custom-restricted-width\r\nspan.menu__title.pure-menu-heading= title\r\nul.menu__list.pure-menu-list\r\n  - for (let j=0; j\u003Citems.length; j++) { \r\n  - let item = items[j]\r\n    li.pure-menu-item(data-index= j)\r\n            a.pure-menu-link(href= item.href title= item.anchor data-action=\"pick\")\r\n                | !{item.anchor}\r\n                i.close(data-action=\"remove\")\r\n  - }\r\n\r\n"};
;var locals_for_with = (locals || {});(function (items, title) {;pug_debug_line = 1;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Cdiv class=\"menu pure-menu custom-restricted-width\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Cspan class=\"menu__title pure-menu-heading\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 3;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Cul class=\"menu__list pure-menu-list\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
for (let j=0; j<items.length; j++) { 
;pug_debug_line = 5;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
let item = items[j]
{
;pug_debug_line = 6;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"pure-menu-item\""+pug_attr("data-index", j, true, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"pure-menu-link\""+pug_attr("href", item.href, true, false)+pug_attr("title", item.anchor, true, false)+" data-action=\"pick\"") + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + (null == (pug_interp = item.anchor) ? "" : pug_interp);
;pug_debug_line = 9;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
pug_html = pug_html + "\u003Ci class=\"close\" data-action=\"remove\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
}
;pug_debug_line = 10;pug_debug_filename = "components\u002Fmenu\u002Fmenu.pug";
}
pug_html = pug_html + "\u003C\u002Ful\u003E";}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}