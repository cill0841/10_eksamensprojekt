!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var p=/\r?\n/g,w={};w.fileapi=void 0!==q('<input type="file">').get(0).files,w.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function i(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function o(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n=t.form;if("image"===(n.clk=t).type)if(void 0!==e.offsetX)n.clk_x=e.offsetX,n.clk_y=e.offsetY;else if("function"==typeof q.fn.offset){var i=r.offset();n.clk_x=e.pageX-i.left,n.clk_y=e.pageY-i.top}else n.clk_x=e.pageX-t.offsetLeft,n.clk_y=e.pageY-t.offsetTop;setTimeout(function(){n.clk=n.clk_x=n.clk_y=null},100)}function N(){if(q.fn.ajaxSubmit.debug){var e="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e)}}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var o=M.traditional;void 0===o&&(o=q.ajaxSettings.traditional);var s,C=[],u=this.formToArray(M.semantic,C,M.filtering);if(M.data){var c=q.isFunction(M.data)?M.data(u):M.data;M.extraData=c,s=q.param(c,o)}if(M.beforeSubmit&&!1===M.beforeSubmit(u,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[u,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var l=q.param(u,o);s&&(l=l?l+"&"+s:s),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+l,M.data=null):M.data=l;var f=[];if(M.resetForm&&f.push(function(){X.resetForm()}),M.clearForm&&f.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target){var d=M.success||function(){};f.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})}else M.success&&(q.isArray(M.success)?q.merge(f,M.success):f.push(M.success));if(M.success=function(e,t,r){for(var a=M.context||this,n=0,i=f.length;n<i;n++)f[n].apply(a,[e,t,r||X,X])},M.error){var p=M.error;M.error=function(e,t,r){var a=M.context||this;p.apply(a,[e,t,r,X])}}if(M.complete){var m=M.complete;M.complete=function(e,t){var r=M.context||this;m.apply(r,[e,t,X])}}var h=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,v="multipart/form-data",g=X.attr("enctype")===v||X.attr("encoding")===v,x=w.fileapi&&w.formdata;N("fileAPI :"+x);var y,b=(h||g)&&!x;!1!==M.iframe&&(M.iframe||b)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){y=j(u)}):y=j(u):y=(h||g)&&x?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,i=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),i.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return i}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var i=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,i&&i.call(this,e,t)},q.ajax(n)}(u):q.ajax(M),X.removeData("jqxhr").data("jqxhr",y);for(var T=0;T<C.length;T++)C[T]=null;return this.trigger("form-submit-notify",[this,M]),this;function j(e){var t,r,l,f,i,d,p,m,a,n,h,v,o=X[0],g=q.Deferred();if(g.abort=function(e){m.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,i="jqFormIO"+(new Date).getTime();var s=o.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?i=n:d.attr2("name",i):(d=q('<iframe name="'+i+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),p=d[0],m={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),m.error=t,l.error&&l.error.call(l.context,m,t,e),f&&q.event.trigger("ajaxError",[m,l,t]),l.complete&&l.complete.call(l.context,m,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[m,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,m,l))return l.global&&q.active--,g.reject(),g;if(m.aborted)return g.reject(),g;(a=o.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=o.clk_x,l.extraData[n+".y"]=o.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";o.setAttribute("target",i),O&&!/post/i.test(O)||o.setAttribute("method","POST"),t!==l.url&&o.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(o)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(o)[0]));l.iframeTarget||d.appendTo(u),p.attachEvent?p.attachEvent("onload",A):p.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(p).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{o.submit()}catch(e){document.createElement("form").submit.apply(o)}}finally{o.setAttribute("action",t),o.setAttribute("enctype",r),e?o.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!m.aborted&&!k){if((S=b(p))||(N("cannot access response document"),e=y),e===x&&m)return m.abort("timeout"),void g.reject(m,"timeout");if(e===y&&m)return m.abort("server abort"),void g.reject(m,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){p.detachEvent?p.detachEvent("onload",A):p.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;m.responseText=n?n.innerHTML:null,m.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),m.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(m.status=Number(n.getAttribute("status"))||m.status,m.statusText=n.getAttribute("statusText")||m.statusText);var i=(l.dataType||"").toLowerCase(),o=/(json|script|text)/.test(i);if(o||l.textarea){var s=S.getElementsByTagName("textarea")[0];if(s)m.responseText=s.value,m.status=Number(s.getAttribute("status"))||m.status,m.statusText=s.getAttribute("statusText")||m.statusText;else if(o){var u=S.getElementsByTagName("pre")[0],c=S.getElementsByTagName("body")[0];u?m.responseText=u.textContent?u.textContent:u.innerText:c&&(m.responseText=c.textContent?c.textContent:c.innerText)}}else"xml"===i&&!m.responseXML&&m.responseText&&(m.responseXML=L(m.responseText));try{w=E(m,i,l)}catch(e){r="parsererror",m.error=t=e||r}}catch(e){N("error caught: ",e),r="error",m.error=t=e||r}m.aborted&&(N("upload aborted"),r=null),m.status&&(r=200<=m.status&&m.status<300||304===m.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",m),g.resolve(m.responseText,"success",m),f&&q.event.trigger("ajaxSuccess",[m,l])):r&&(void 0===t&&(t=m.statusText),l.error&&l.error.call(l.context,m,r,t),g.reject(m,"error",t),f&&q.event.trigger("ajaxError",[m,l,t])),f&&q.event.trigger("ajaxComplete",[m,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,m,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),m.responseXML=null},100)}}}var L=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},F=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),i=n?e.responseXML:e.responseText;return n&&"parsererror"===i.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(i=r.dataFilter(i,t)),"string"==typeof i&&(("json"===t||!t)&&0<=a.indexOf("json")?i=F(i):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(i)),i};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,i).off("click.form-plugin",this.selector,o).on("submit.form-plugin",this.selector,e,i).on("click.form-plugin",this.selector,e,o),this):this.ajaxFormUnbind().on("submit.form-plugin",e,i).on("click.form-plugin",e,o);var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,i,o,s,u,c,l,f,d=this[0],p=this.attr("id"),m=e||void 0===d.elements?d.getElementsByTagName("*"):d.elements;if(m=m&&q.makeArray(m),p&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+p+'"]').get()).length&&(m=(m||[]).concat(n)),!m||!m.length)return a;for(q.isFunction(r)&&(m=q.map(m,r)),i=0,l=m.length;i<l;i++)if((s=(c=m[i]).name)&&!c.disabled)if(e&&d.clk&&"image"===c.type)d.clk===c&&(a.push({name:s,value:q(c).val(),type:c.type}),a.push({name:s+".x",value:d.clk_x},{name:s+".y",value:d.clk_y}));else if((u=q.fieldValue(c,!0))&&u.constructor===Array)for(t&&t.push(c),o=0,f=u.length;o<f;o++)a.push({name:s,value:u[o]});else if(w.fileapi&&"file"===c.type){t&&t.push(c);var h=c.files;if(h.length)for(o=0;o<h.length;o++)a.push({name:s,value:h[o],type:c.type});else a.push({name:s,value:"",type:c.type})}else null!=u&&(t&&t.push(c),a.push({name:s,value:u,type:c.type,required:c.required}));if(!e&&d.clk){var v=q(d.clk),g=v[0];(s=g.name)&&!g.disabled&&"image"===g.type&&(a.push({name:s,value:v.val()}),a.push({name:s+".x",value:d.clk_x},{name:s+".y",value:d.clk_y}))}return a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var i=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)i.push({name:e,value:t[r]});else null!=t&&i.push({name:this.name,value:t})}}),q.param(i)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],i=q.fieldValue(n,e);null==i||i.constructor===Array&&!i.length||(i.constructor===Array?q.merge(t,i):t.push(i))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(p,"\r\n");var i=e.selectedIndex;if(i<0)return null;for(var o=[],s=e.options,u="select-one"===a,c=u?i+1:s.length,l=u?i:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=f.value;if(d=d||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value),u)return d;o.push(d)}}return o},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e=this.type;if("checkbox"===e||"radio"===e)this.checked=r;else if("option"===this.tagName.toLowerCase()){var t=q(this).parent("select");r&&t[0]&&"select-one"===t[0].type&&t.find("option").selected(!1),this.selected=r}})},q.fn.ajaxSubmit.debug=!1});
