/*! This file is auto-generated */
window.edButtons=[],window.edAddTag=function(){},window.edCheckOpenTags=function(){},window.edCloseAllTags=function(){},window.edInsertImage=function(){},window.edInsertLink=function(){},window.edInsertTag=function(){},window.edLink=function(){},window.edQuickLink=function(){},window.edRemoveTag=function(){},window.edShowButton=function(){},window.edShowLinks=function(){},window.edSpell=function(){},window.edToolbar=function(){},function(){var t,e,r=function(t){var e,n,o,a;"undefined"!=typeof jQuery?jQuery(document).ready(t):((e=r).funcs=[],e.ready=function(){if(!e.isReady)for(e.isReady=!0,n=0;n<e.funcs.length;n++)e.funcs[n]()},e.isReady?t():e.funcs.push(t),e.eventAttached||(document.addEventListener?(o=function(){document.removeEventListener("DOMContentLoaded",o,!1),e.ready()},document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",e.ready,!1)):document.attachEvent&&(o=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",o),e.ready())},document.attachEvent("onreadystatechange",o),window.attachEvent("onload",e.ready),(a=function(){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(a,50)}e.ready()})()),e.eventAttached=!0))},n=(e=new Date,t=function(t){var e=t.toString();return e.length<2&&(e="0"+e),e},e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"+00:00"),d=window.QTags=function(t){if("string"==typeof t)t={id:t};else if("object"!=typeof t)return!1;var e,n,o,a,i,s=this,l=t.id,u=document.getElementById(l),c="qt_"+l;if(!l||!u)return!1;s.name=c,s.id=l,s.canvas=u,s.settings=t,o="content"!==l||"string"!=typeof adminpage||"post-new-php"!==adminpage&&"post-php"!==adminpage?c+"_toolbar":(window.edCanvas=u,"ed_toolbar"),(e=document.getElementById(o))||((e=document.createElement("div")).id=o,e.className="quicktags-toolbar"),u.parentNode.insertBefore(e,u),s.toolbar=e,n=function(t){var e,n=(t=t||window.event).target||t.srcElement;(n.clientWidth||n.offsetWidth)&&/ ed_button /.test(" "+n.className+" ")&&(s.canvas=u=document.getElementById(l),e=n.id.replace(c+"_",""),s.theButtons[e]&&s.theButtons[e].callback.call(s.theButtons[e],n,u,s))},i=function(){window.wpActiveEditor=l},a=document.getElementById("wp-"+l+"-wrap"),e.addEventListener?(e.addEventListener("click",n,!1),a&&a.addEventListener("click",i,!1)):e.attachEvent&&(e.attachEvent("onclick",n),a&&a.attachEvent("onclick",i)),s.getButton=function(t){return s.theButtons[t]},s.getButtonElement=function(t){return document.getElementById(c+"_"+t)},s.init=function(){r(function(){d._buttonsInit(l)})},s.remove=function(){delete d.instances[l],e&&e.parentNode&&e.parentNode.removeChild(e)},(d.instances[l]=s).init()};function u(t){return(t=(t=t||"").replace(/&([^#])(?![a-z1-4]{1,8};)/gi,"&#038;$1")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}d.instances={},d.getInstance=function(t){return d.instances[t]},d._buttonsInit=function(t){var c=this;function e(t){var e,n,o,a,i,s,l,u;for(l in(i=c.instances[t]).canvas,e=i.name,o={},u=a="",(n=i.settings).buttons&&(u=","+n.buttons+","),edButtons)edButtons[l]&&(s=edButtons[l].id,u&&-1!==",strong,em,link,block,del,ins,img,ul,ol,li,code,more,close,".indexOf(","+s+",")&&-1===u.indexOf(","+s+",")||edButtons[l].instance&&edButtons[l].instance!==t||(o[s]=edButtons[l],edButtons[l].html&&(a+=edButtons[l].html(e+"_"))));u&&-1!==u.indexOf(",dfw,")&&(o.dfw=new d.DFWButton,a+=o.dfw.html(e+"_")),"rtl"===document.getElementsByTagName("html")[0].dir&&(o.textdirection=new d.TextDirectionButton,a+=o.textdirection.html(e+"_")),i.toolbar.innerHTML=a,i.theButtons=o,"undefined"!=typeof jQuery&&jQuery(document).triggerHandler("quicktags-init",[i])}if(t)e(t);else for(t in c.instances)e(t);c.buttonsInitDone=!0},d.addButton=function(t,e,n,o,a,i,s,l,u){var c;if(t&&e){if(s=s||0,o=o||"",u=u||{},"function"==typeof n)(c=new d.Button(t,e,a,i,l,u)).callback=n;else{if("string"!=typeof n)return;c=new d.TagButton(t,e,n,o,a,i,l,u)}if(-1===s)return c;if(0<s){for(;void 0!==edButtons[s];)s++;edButtons[s]=c}else edButtons[edButtons.length]=c;this.buttonsInitDone&&this._buttonsInit()}},d.insertContent=function(t){var e,n,o,a,i,s=document.getElementById(wpActiveEditor);return!!s&&(document.selection?(s.focus(),document.selection.createRange().text=t):s.selectionStart||0===s.selectionStart?(a=s.value,e=s.selectionStart,n=s.selectionEnd,o=s.scrollTop,s.value=a.substring(0,e)+t+a.substring(n,a.length),s.selectionStart=e+t.length,s.selectionEnd=e+t.length,s.scrollTop=o):s.value+=t,s.focus(),document.createEvent?((i=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),s.dispatchEvent(i)):s.fireEvent&&s.fireEvent("onchange"),!0)},d.Button=function(t,e,n,o,a,i){this.id=t,this.display=e,this.access="",this.title=o||"",this.instance=a||"",this.attr=i||{}},d.Button.prototype.html=function(t){var e,n,o=this.title?' title="'+u(this.title)+'"':"",a=this.attr&&this.attr.ariaLabel?' aria-label="'+u(this.attr.ariaLabel)+'"':"",i=this.display?' value="'+u(this.display)+'"':"",s=this.id?' id="'+u(t+this.id)+'"':"",l=(n=window.wp)&&n.editor&&n.editor.dfw;return"fullscreen"===this.id?'<button type="button"'+s+' class="ed_button qt-dfw qt-fullscreen"'+o+a+"></button>":"dfw"===this.id?(e=l&&l.isActive()?"":' disabled="disabled"','<button type="button"'+s+' class="ed_button qt-dfw'+(l&&l.isOn()?" active":"")+'"'+o+a+e+"></button>"):'<input type="button"'+s+' class="ed_button button button-small"'+o+a+i+" />"},d.Button.prototype.callback=function(){},d.TagButton=function(t,e,n,o,a,i,s,l){d.Button.call(this,t,e,a,i,s,l),this.tagStart=n,this.tagEnd=o},d.TagButton.prototype=new d.Button,d.TagButton.prototype.openTag=function(t,e){e.openTags||(e.openTags=[]),this.tagEnd&&(e.openTags.push(this.id),t.value="/"+t.value,this.attr.ariaLabelClose&&t.setAttribute("aria-label",this.attr.ariaLabelClose))},d.TagButton.prototype.closeTag=function(t,e){var n=this.isOpen(e);!1!==n&&e.openTags.splice(n,1),t.value=this.display,this.attr.ariaLabel&&t.setAttribute("aria-label",this.attr.ariaLabel)},d.TagButton.prototype.isOpen=function(t){var e=0,n=!1;if(t.openTags)for(;!1===n&&e<t.openTags.length;)n=t.openTags[e]===this.id&&e,e++;else n=!1;return n},d.TagButton.prototype.callback=function(t,e,n){var o,a,i,s,l,u,c,r,d,g=this,p=e.value,f=p?g.tagEnd:"";document.selection?(e.focus(),0<(r=document.selection.createRange()).text.length?g.tagEnd?r.text=g.tagStart+r.text+f:r.text=r.text+g.tagStart:g.tagEnd?!1===g.isOpen(n)?(r.text=g.tagStart,g.openTag(t,n)):(r.text=f,g.closeTag(t,n)):r.text=g.tagStart):e.selectionStart||0===e.selectionStart?((o=e.selectionStart)<(a=e.selectionEnd)&&"\n"===p.charAt(a-1)&&(a-=1),i=a,s=e.scrollTop,l=p.substring(0,o),u=p.substring(a,p.length),c=p.substring(o,a),o!==a?g.tagEnd?(e.value=l+g.tagStart+c+f+u,i+=g.tagStart.length+f.length):(e.value=l+c+g.tagStart+u,i+=g.tagStart.length):g.tagEnd?!1===g.isOpen(n)?(e.value=l+g.tagStart+u,g.openTag(t,n),i=o+g.tagStart.length):(e.value=l+f+u,i=o+f.length,g.closeTag(t,n)):(e.value=l+g.tagStart+u,i=o+g.tagStart.length),e.selectionStart=i,e.selectionEnd=i,e.scrollTop=s):f?!1!==g.isOpen(n)?(e.value+=g.tagStart,g.openTag(t,n)):(e.value+=f,g.closeTag(t,n)):e.value+=g.tagStart,e.focus(),document.createEvent?((d=document.createEvent("HTMLEvents")).initEvent("change",!1,!0),e.dispatchEvent(d)):e.fireEvent&&e.fireEvent("onchange")},d.SpellButton=function(){},d.CloseButton=function(){d.Button.call(this,"close",quicktagsL10n.closeTags,"",quicktagsL10n.closeAllOpenTags)},d.CloseButton.prototype=new d.Button,d._close=function(t,e,n){var o,a,i=n.openTags;if(i)for(;0<i.length;)o=n.getButton(i[i.length-1]),a=document.getElementById(n.name+"_"+o.id),t?o.callback.call(o,a,e,n):o.closeTag(a,n)},d.CloseButton.prototype.callback=d._close,d.closeAllTags=function(t){var e=this.getInstance(t);e&&d._close("",e.canvas,e)},d.LinkButton=function(){var t={ariaLabel:quicktagsL10n.link};d.TagButton.call(this,"link","link","","</a>","","","",t)},d.LinkButton.prototype=new d.TagButton,d.LinkButton.prototype.callback=function(t,e,n,o){var a;"undefined"==typeof wpLink?(o=o||"http://",!1===this.isOpen(n)?(a=prompt(quicktagsL10n.enterURL,o))&&(this.tagStart='<a href="'+a+'">',d.TagButton.prototype.callback.call(this,t,e,n)):d.TagButton.prototype.callback.call(this,t,e,n)):wpLink.open(n.id)},d.ImgButton=function(){var t={ariaLabel:quicktagsL10n.image};d.TagButton.call(this,"img","img","","","","","",t)},d.ImgButton.prototype=new d.TagButton,d.ImgButton.prototype.callback=function(t,e,n,o){o=o||"http://";var a,i=prompt(quicktagsL10n.enterImageURL,o);i&&(a=prompt(quicktagsL10n.enterImageDescription,""),this.tagStart='<img src="'+i+'" alt="'+a+'" />',d.TagButton.prototype.callback.call(this,t,e,n))},d.DFWButton=function(){d.Button.call(this,"dfw","","f",quicktagsL10n.dfw)},d.DFWButton.prototype=new d.Button,d.DFWButton.prototype.callback=function(){var t;(t=window.wp)&&t.editor&&t.editor.dfw&&window.wp.editor.dfw.toggle()},d.TextDirectionButton=function(){d.Button.call(this,"textdirection",quicktagsL10n.textdirection,"",quicktagsL10n.toggleTextdirection)},d.TextDirectionButton.prototype=new d.Button,d.TextDirectionButton.prototype.callback=function(t,e){var n="rtl"===document.getElementsByTagName("html")[0].dir,o=e.style.direction;o=o||(n?"rtl":"ltr"),e.style.direction="rtl"===o?"ltr":"rtl",e.focus()},edButtons[10]=new d.TagButton("strong","b","<strong>","</strong>","","","",{ariaLabel:quicktagsL10n.strong,ariaLabelClose:quicktagsL10n.strongClose}),edButtons[20]=new d.TagButton("em","i","<em>","</em>","","","",{ariaLabel:quicktagsL10n.em,ariaLabelClose:quicktagsL10n.emClose}),edButtons[30]=new d.LinkButton,edButtons[40]=new d.TagButton("block","b-quote","\n\n<blockquote>","</blockquote>\n\n","","","",{ariaLabel:quicktagsL10n.blockquote,ariaLabelClose:quicktagsL10n.blockquoteClose}),edButtons[50]=new d.TagButton("del","del",'<del datetime="'+n+'">',"</del>","","","",{ariaLabel:quicktagsL10n.del,ariaLabelClose:quicktagsL10n.delClose}),edButtons[60]=new d.TagButton("ins","ins",'<ins datetime="'+n+'">',"</ins>","","","",{ariaLabel:quicktagsL10n.ins,ariaLabelClose:quicktagsL10n.insClose}),edButtons[70]=new d.ImgButton,edButtons[80]=new d.TagButton("ul","ul","<ul>\n","</ul>\n\n","","","",{ariaLabel:quicktagsL10n.ul,ariaLabelClose:quicktagsL10n.ulClose}),edButtons[90]=new d.TagButton("ol","ol","<ol>\n","</ol>\n\n","","","",{ariaLabel:quicktagsL10n.ol,ariaLabelClose:quicktagsL10n.olClose}),edButtons[100]=new d.TagButton("li","li","\t<li>","</li>\n","","","",{ariaLabel:quicktagsL10n.li,ariaLabelClose:quicktagsL10n.liClose}),edButtons[110]=new d.TagButton("code","code","<code>","</code>","","","",{ariaLabel:quicktagsL10n.code,ariaLabelClose:quicktagsL10n.codeClose}),edButtons[120]=new d.TagButton("more","more","\x3c!--more--\x3e\n\n","","","","",{ariaLabel:quicktagsL10n.more}),edButtons[140]=new d.CloseButton}(),window.quicktags=function(t){return new window.QTags(t)},window.edInsertContent=function(t,e){return window.QTags.insertContent(e)},window.edButton=function(t,e,n,o,a){return window.QTags.addButton(t,e,n,o,a,"",-1)};
