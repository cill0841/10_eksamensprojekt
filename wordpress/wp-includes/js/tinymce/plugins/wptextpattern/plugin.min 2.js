!function(m,p){function h(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}m.Env.ie&&m.Env.ie<9||m.PluginManager.add("wptextpattern",function(o){var g,t=m.util.VK,e=o.settings.wptextpattern||{},d=e.space||[{regExp:/^[*-]\s/,cmd:"InsertUnorderedList"},{regExp:/^1[.)]\s/,cmd:"InsertOrderedList"}],c=e.enter||[{start:"##",format:"h2"},{start:"###",format:"h3"},{start:"####",format:"h4"},{start:"#####",format:"h5"},{start:"######",format:"h6"},{start:">",format:"blockquote"},{regExp:/^(-){3,}$/,element:"hr"}],r=e.inline||[{delimiter:"`",format:"code"}];function n(){var d,c,l,e,t,n=o.selection.getRng(),a=n.startContainer,f=n.startOffset;if(a&&3===a.nodeType&&a.data.length&&f){var s=a.data.slice(0,f),u=a.data.charAt(f-1);m.each(r,function(e){if(u===e.delimiter.slice(-1)){var t=h(e.delimiter),n=e.delimiter.charAt(0),a=new RegExp("(.*)"+t+".+"+t+"$"),r=s.match(a);if(r){d=r[1].length,c=f-e.delimiter.length;var i=s.charAt(d-1),o=s.charAt(d+e.delimiter.length);if(!(d&&/\S/.test(i)&&(/\s/.test(o)||i===n)||new RegExp("^[\\s"+h(n)+"]+$").test(s.slice(d,c))))return l=e,!1}}}),l&&(e=o.formatter.get(l.format))&&e[0].inline&&(o.undoManager.add(),o.undoManager.transact(function(){a.insertData(f,"\ufeff"),a=a.splitText(d),t=a.splitText(f-d),a.deleteData(0,l.delimiter.length),a.deleteData(a.data.length-l.delimiter.length,l.delimiter.length),o.formatter.apply(l.format,{},a),o.selection.setCursorLocation(t,1)}),p(function(){g="space",o.once("selectionchange",function(){var e;t&&-1!==(e=t.data.indexOf("\ufeff"))&&t.deleteData(e,e+1)})}))}}function l(e){var t,n=o.dom.getParent(e,"p");if(n){for(;(t=n.firstChild)&&3!==t.nodeType;)n=t;if(t)return t.data||(t=t.nextSibling&&3===t.nextSibling.nodeType?t.nextSibling:null),t}}function a(){var n,a,r=o.selection.getRng(),i=r.startContainer;i&&l(i)===i&&(n=i.parentNode,a=i.data,m.each(d,function(e){var t=a.match(e.regExp);if(t&&r.startOffset===t[0].length)return o.undoManager.add(),o.undoManager.transact(function(){i.deleteData(0,t[0].length),n.innerHTML||n.appendChild(document.createElement("br")),o.selection.setCursorLocation(n),o.execCommand(e.cmd)}),p(function(){g="space"}),!1}))}o.on("selectionchange",function(){g=null}),o.on("keydown",function(e){(g&&27===e.keyCode||"space"===g&&e.keyCode===t.BACKSPACE)&&(o.undoManager.undo(),e.preventDefault(),e.stopImmediatePropagation()),t.metaKeyPressed(e)||(e.keyCode===t.ENTER?function(){var e,t,n,a=o.selection.getRng().startContainer,r=l(a),i=c.length;if(!r)return;e=r.data;for(;i--;)if(c[i].start){if(0===e.indexOf(c[i].start)){t=c[i];break}}else if(c[i].regExp&&c[i].regExp.test(e)){t=c[i];break}if(!t)return;if(r===a&&m.trim(e)===t.start)return;o.once("keyup",function(){o.undoManager.add(),o.undoManager.transact(function(){t.format?(o.formatter.apply(t.format,{},r),r.replaceData(0,r.data.length,function(e){return e?e.replace(/^\s+/,""):""}(r.data.slice(t.start.length)))):t.element&&(n=r.parentNode&&r.parentNode.parentNode)&&n.replaceChild(document.createElement(t.element),r.parentNode)}),p(function(){g="enter"})})}():e.keyCode===t.SPACEBAR?p(a):47<e.keyCode&&!(91<=e.keyCode&&e.keyCode<=93)&&p(n))},!0)})}(window.tinymce,window.setTimeout);
