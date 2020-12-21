/*! This file is auto-generated */
!function(p,m){if(p&&p.customize){var f,v=p.customize;v.Widgets=v.Widgets||{},v.Widgets.savedWidgetIds={},v.Widgets.data=_wpCustomizeWidgetsSettings||{},f=v.Widgets.data.l10n,v.Widgets.WidgetModel=Backbone.Model.extend({id:null,temp_id:null,classname:null,control_tpl:null,description:null,is_disabled:null,is_multi:null,multi_number:null,name:null,id_base:null,transport:null,params:[],width:null,height:null,search_matched:!0}),v.Widgets.WidgetCollection=Backbone.Collection.extend({model:v.Widgets.WidgetModel,doSearch:function(e){this.terms!==e&&(this.terms=e,0<this.terms.length&&this.search(this.terms),""===this.terms&&this.each(function(e){e.set("search_matched",!0)}))},search:function(e){var t,i;e=(e=e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")).replace(/ /g,")(?=.*"),t=new RegExp("^(?=.*"+e+").+","i"),this.each(function(e){i=[e.get("name"),e.get("id"),e.get("description")].join(" "),e.set("search_matched",t.test(i))})}}),v.Widgets.availableWidgets=new v.Widgets.WidgetCollection(v.Widgets.data.availableWidgets),v.Widgets.SidebarModel=Backbone.Model.extend({after_title:null,after_widget:null,before_title:null,before_widget:null,class:null,description:null,id:null,name:null,is_rendered:!1}),v.Widgets.SidebarCollection=Backbone.Collection.extend({model:v.Widgets.SidebarModel}),v.Widgets.registeredSidebars=new v.Widgets.SidebarCollection(v.Widgets.data.registeredSidebars),v.Widgets.AvailableWidgetsPanelView=p.Backbone.View.extend({el:"#available-widgets",events:{"input #widgets-search":"search","focus .widget-tpl":"focus","click .widget-tpl":"_submit","keypress .widget-tpl":"_submit",keydown:"keyboardAccessible"},selected:null,currentSidebarControl:null,$search:null,$clearResults:null,searchMatchesCount:null,initialize:function(){var i=this;this.$search=m("#widgets-search"),this.$clearResults=this.$el.find(".clear-results"),_.bindAll(this,"close"),this.listenTo(this.collection,"change",this.updateList),this.updateList(),this.searchMatchesCount=this.collection.length,m("#customize-controls, #available-widgets .customize-section-title").on("click keydown",function(e){var t=m(e.target).is(".add-new-widget, .add-new-widget *");m("body").hasClass("adding-widget")&&!t&&i.close()}),this.$clearResults.on("click",function(){i.$search.val("").focus().trigger("input")}),v.previewer.bind("url",this.close)},search:_.debounce(function(e){var t;this.collection.doSearch(e.target.value),this.updateSearchMatchesCount(),this.announceSearchMatches(),this.selected&&!this.selected.is(":visible")&&(this.selected.removeClass("selected"),this.selected=null),this.selected&&!e.target.value&&(this.selected.removeClass("selected"),this.selected=null),!this.selected&&e.target.value&&(t=this.$el.find("> .widget-tpl:visible:first")).length&&this.select(t),""!==e.target.value?this.$clearResults.addClass("is-visible"):""===e.target.value&&this.$clearResults.removeClass("is-visible"),this.searchMatchesCount?this.$el.removeClass("no-widgets-found"):this.$el.addClass("no-widgets-found")},500),updateSearchMatchesCount:function(){this.searchMatchesCount=this.collection.where({search_matched:!0}).length},announceSearchMatches:function(){var e=f.widgetsFound.replace("%d",this.searchMatchesCount);this.searchMatchesCount||(e=f.noWidgetsFound),p.a11y.speak(e)},updateList:function(){this.collection.each(function(e){var t=m("#widget-tpl-"+e.id);t.toggle(e.get("search_matched")&&!e.get("is_disabled")),e.get("is_disabled")&&t.is(this.selected)&&(this.selected=null)})},select:function(e){this.selected=m(e),this.selected.siblings(".widget-tpl").removeClass("selected"),this.selected.addClass("selected")},focus:function(e){this.select(m(e.currentTarget))},_submit:function(e){"keypress"===e.type&&13!==e.which&&32!==e.which||this.submit(m(e.currentTarget))},submit:function(e){var t,i,n;(e=e||this.selected)&&this.currentSidebarControl&&(this.select(e),t=m(this.selected).data("widget-id"),(i=this.collection.findWhere({id:t}))&&((n=this.currentSidebarControl.addWidget(i.get("id_base")))&&n.focus(),this.close()))},open:function(e){this.currentSidebarControl=e,_(this.currentSidebarControl.getWidgetFormControls()).each(function(e){e.params.is_wide&&e.collapseForm()}),v.section.has("publish_settings")&&v.section("publish_settings").collapse(),m("body").addClass("adding-widget"),this.$el.find(".selected").removeClass("selected"),this.collection.doSearch(""),v.settings.browser.mobile||this.$search.focus()},close:function(e){(e=e||{}).returnFocus&&this.currentSidebarControl&&this.currentSidebarControl.container.find(".add-new-widget").focus(),this.currentSidebarControl=null,this.selected=null,m("body").removeClass("adding-widget"),this.$search.val("").trigger("input")},keyboardAccessible:function(e){var t=13===e.which,i=27===e.which,n=40===e.which,s=38===e.which,d=9===e.which,a=e.shiftKey,o=null,r=this.$el.find("> .widget-tpl:visible:first"),c=this.$el.find("> .widget-tpl:visible:last"),l=m(e.target).is(this.$search),g=m(e.target).is(".widget-tpl:visible:last");if(n||s)return n?l?o=r:this.selected&&0!==this.selected.nextAll(".widget-tpl:visible").length&&(o=this.selected.nextAll(".widget-tpl:visible:first")):s&&(l?o=c:this.selected&&0!==this.selected.prevAll(".widget-tpl:visible").length&&(o=this.selected.prevAll(".widget-tpl:visible:first"))),this.select(o),void(o?o.focus():this.$search.focus());t&&!this.$search.val()||(t?this.submit():i&&this.close({returnFocus:!0}),this.currentSidebarControl&&d&&(a&&l||!a&&g)&&(this.currentSidebarControl.container.find(".add-new-widget").focus(),e.preventDefault()))}}),v.Widgets.formSyncHandlers={rss:function(e,t,i){var n=t.find(".widget-error:first"),s=m("<div>"+i+"</div>").find(".widget-error:first");n.length&&s.length?n.replaceWith(s):n.length?n.remove():s.length&&t.find(".widget-content:first").prepend(s)}},v.Widgets.WidgetControl=v.Control.extend({defaultExpandedArguments:{duration:"fast",completeCallback:m.noop},initialize:function(e,t){var i=this;i.widgetControlEmbedded=!1,i.widgetContentEmbedded=!1,i.expanded=new v.Value(!1),i.expandedArgumentsQueue=[],i.expanded.bind(function(e){var t=i.expandedArgumentsQueue.shift();t=m.extend({},i.defaultExpandedArguments,t),i.onChangeExpanded(e,t)}),i.altNotice=!0,v.Control.prototype.initialize.call(i,e,t)},ready:function(){var n=this;n.section()?v.section(n.section(),function(t){var i=function(e){e&&(n.embedWidgetControl(),t.expanded.unbind(i))};t.expanded()?i(!0):t.expanded.bind(i)}):n.embedWidgetControl()},embedWidgetControl:function(){var e,t=this;t.widgetControlEmbedded||(t.widgetControlEmbedded=!0,e=m(t.params.widget_control),t.container.append(e),t._setupModel(),t._setupWideWidget(),t._setupControlToggle(),t._setupWidgetTitle(),t._setupReorderUI(),t._setupHighlightEffects(),t._setupUpdateUI(),t._setupRemoveUI())},embedWidgetContent:function(){var e,t=this;t.embedWidgetControl(),t.widgetContentEmbedded||(t.widgetContentEmbedded=!0,t.notifications.container=t.getNotificationsContainerElement(),t.notifications.render(),e=m(t.params.widget_content),t.container.find(".widget-content:first").append(e),m(document).trigger("widget-added",[t.container.find(".widget:first")]))},_setupModel:function(){var e,i=this;e=function(){v.Widgets.savedWidgetIds[i.params.widget_id]=!0},v.bind("ready",e),v.bind("saved",e),this._updateCount=0,this.isWidgetUpdating=!1,this.liveUpdateMode=!0,this.setting.bind(function(e,t){_(t).isEqual(e)||i.isWidgetUpdating||i.updateWidget({instance:e})})},_setupWideWidget:function(){var s,d,e,t,i,a=this;!this.params.is_wide||m(window).width()<=640||(s=this.container.find(".widget-inside"),d=s.find("> .form"),e=m(".wp-full-overlay-sidebar-content:first"),this.container.addClass("wide-widget-control"),this.container.find(".form:first").css({"max-width":this.params.width,"min-height":this.params.height}),i=function(){var e,t=a.container.offset().top,i=m(window).height(),n=d.outerHeight();s.css("max-height",i),e=Math.max(0,Math.min(Math.max(t,0),i-n)),s.css("top",e)},t=m("#customize-theme-controls"),this.container.on("expand",function(){i(),e.on("scroll",i),m(window).on("resize",i),t.on("expanded collapsed",i)}),this.container.on("collapsed",function(){e.off("scroll",i),m(window).off("resize",i),t.off("expanded collapsed",i)}),v.each(function(e){0===e.id.indexOf("sidebars_widgets[")&&e.bind(function(){a.container.hasClass("expanded")&&i()})}))},_setupControlToggle:function(){var t=this;this.container.find(".widget-top").on("click",function(e){e.preventDefault(),t.getSidebarWidgetsControl().isReordering||t.expanded(!t.expanded())}),this.container.find(".widget-control-close").on("click",function(){t.collapse(),t.container.find(".widget-top .widget-action:first").focus()})},_setupWidgetTitle:function(){var e,i=this;e=function(){var e=i.setting().title,t=i.container.find(".in-widget-title");e?t.text(": "+e):t.text("")},this.setting.bind(e),e()},_setupReorderUI:function(){var d,t,e,i,o=this;d=function(e){e.siblings(".selected").removeClass("selected"),e.addClass("selected");var t=e.data("id")===o.params.sidebar_id;o.container.find(".move-widget-btn").prop("disabled",t)},this.container.find(".widget-title-action").after(m(v.Widgets.data.tpl.widgetReorderNav)),i=_.template(v.Widgets.data.tpl.moveWidgetArea),t=m(i({sidebars:_(v.Widgets.registeredSidebars.toArray()).pluck("attributes")})),this.container.find(".widget-top").after(t),(e=function(){var n,e=t.find("li"),s=0;n=e.filter(function(){return m(this).data("id")===o.params.sidebar_id}),e.each(function(){var e,t,i=m(this);e=i.data("id"),t=v.Widgets.registeredSidebars.get(e).get("is_rendered"),i.toggle(t),t&&(s+=1),i.hasClass("selected")&&!t&&d(n)}),1<s?o.container.find(".move-widget").show():o.container.find(".move-widget").hide()})(),v.Widgets.registeredSidebars.on("change:is_rendered",e),this.container.find(".widget-reorder-nav").find(".move-widget, .move-widget-down, .move-widget-up").each(function(){m(this).prepend(o.container.find(".widget-title").text()+": ")}).on("click keypress",function(e){if("keypress"!==e.type||13===e.which||32===e.which)if(m(this).focus(),m(this).is(".move-widget"))o.toggleWidgetMoveArea();else{var t=m(this).is(".move-widget-down"),i=m(this).is(".move-widget-up"),n=o.getWidgetSidebarPosition();if(i&&0===n||t&&n===o.getSidebarWidgetsControl().setting().length-1)return;i?(o.moveUp(),p.a11y.speak(f.widgetMovedUp)):(o.moveDown(),p.a11y.speak(f.widgetMovedDown)),m(this).focus()}}),this.container.find(".widget-area-select").on("click keypress","li",function(e){"keypress"===e.type&&13!==e.which&&32!==e.which||(e.preventDefault(),d(m(this)))}),this.container.find(".move-widget-btn").click(function(){o.getSidebarWidgetsControl().toggleReordering(!1);var e,t,i,n,s,d=o.params.sidebar_id,a=o.container.find(".widget-area-select li.selected").data("id");e=v("sidebars_widgets["+d+"]"),t=v("sidebars_widgets["+a+"]"),i=Array.prototype.slice.call(e()),n=Array.prototype.slice.call(t()),s=o.getWidgetSidebarPosition(),i.splice(s,1),n.push(o.params.widget_id),e(i),t(n),o.focus()})},_setupHighlightEffects:function(){var e=this;this.container.on("mouseenter click",function(){e.setting.previewer.send("highlight-widget",e.params.widget_id)}),this.setting.bind(function(){e.setting.previewer.send("highlight-widget",e.params.widget_id)})},_setupUpdateUI:function(){var i,e,t,n,s,d=this;e=(i=this.container.find(".widget:first")).find(".widget-content:first"),(t=this.container.find(".widget-control-save")).val(f.saveBtnLabel),t.attr("title",f.saveBtnTooltip),t.removeClass("button-primary"),t.on("click",function(e){e.preventDefault(),d.updateWidget({disable_form:!0})}),n=_.debounce(function(){d.updateWidget()},250),e.on("keydown","input",function(e){13===e.which&&(e.preventDefault(),d.updateWidget({ignoreActiveElement:!0}))}),e.on("change input propertychange",":input",function(e){d.liveUpdateMode&&("change"===e.type||this.checkValidity&&this.checkValidity())&&n()}),this.setting.previewer.channel.bind("synced",function(){d.container.removeClass("previewer-loading")}),v.previewer.bind("widget-updated",function(e){e===d.params.widget_id&&d.container.removeClass("previewer-loading")}),(s=v.Widgets.formSyncHandlers[this.params.widget_id_base])&&m(document).on("widget-synced",function(e,t){i.is(t)&&s.apply(document,arguments)})},onChangeActive:function(e,t){this.container.toggleClass("widget-rendered",e),t.completeCallback&&t.completeCallback()},_setupRemoveUI:function(){var e,t,s=this;(e=this.container.find(".widget-control-remove")).on("click",function(){var n;n=s.container.next().is(".customize-control-widget_form")?s.container.next().find(".widget-action:first"):s.container.prev().is(".customize-control-widget_form")?s.container.prev().find(".widget-action:first"):s.container.next(".customize-control-sidebar_widgets").find(".add-new-widget:first"),s.container.slideUp(function(){var e,t,i=v.Widgets.getSidebarWidgetControlContainingWidget(s.params.widget_id);i&&(e=i.setting().slice(),-1!==(t=_.indexOf(e,s.params.widget_id))&&(e.splice(t,1),i.setting(e),n.focus()))})}),t=function(){e.text(f.removeBtnLabel),e.attr("title",f.removeBtnTooltip)},this.params.is_new?v.bind("saved",t):t()},_getInputs:function(e){return m(e).find(":input[name]")},_getInputsSignature:function(e){return _(e).map(function(e){var t=m(e);return(t.is(":checkbox, :radio")?[t.attr("id"),t.attr("name"),t.prop("value")]:[t.attr("id"),t.attr("name")]).join(",")}).join(";")},_getInputState:function(e){return(e=m(e)).is(":radio, :checkbox")?e.prop("checked"):e.is("select[multiple]")?e.find("option:selected").map(function(){return m(this).val()}).get():e.val()},_setInputState:function(e,t){(e=m(e)).is(":radio, :checkbox")?e.prop("checked",t):e.is("select[multiple]")?(t=m.isArray(t)?_.map(t,function(e){return String(e)}):[],e.find("option").each(function(){m(this).prop("selected",-1!==_.indexOf(t,String(this.value)))})):e.val(t)},getSidebarWidgetsControl:function(){var e,t;if(e="sidebars_widgets["+this.params.sidebar_id+"]",t=v.control(e))return t},updateWidget:function(a){var e,o,r,c,l,t,i,g,n,s,u,h=this;h.embedWidgetContent(),e=(a=m.extend({instance:null,complete:null,ignoreActiveElement:!1},a)).instance,o=a.complete,this._updateCount+=1,l=this._updateCount,r=this.container.find(".widget:first"),(c=r.find(".widget-content:first")).find(".widget-error").remove(),this.container.addClass("widget-form-loading"),this.container.addClass("previewer-loading"),(n=v.state("processing"))(n()+1),this.liveUpdateMode||this.container.addClass("widget-form-disabled"),(t={action:"update-widget",wp_customize:"on"}).nonce=v.settings.nonce["update-widget"],t.customize_theme=v.settings.theme.stylesheet,t.customized=p.customize.previewer.query().customized,i=m.param(t),(g=this._getInputs(c)).each(function(){m(this).data("state"+l,h._getInputState(this))}),i+=e?"&"+m.param({sanitized_widget_setting:JSON.stringify(e)}):"&"+g.serialize(),i+="&"+c.find("~ :input").serialize(),this._previousUpdateRequest&&this._previousUpdateRequest.abort(),s=m.post(p.ajax.settings.url,i),(this._previousUpdateRequest=s).done(function(e){var t,i,d,n,s=!1;if("0"===e)return v.previewer.preview.iframe.hide(),void v.previewer.login().done(function(){h.updateWidget(a),v.previewer.preview.iframe.show()});"-1"!==e?e.success?(i=m("<div>"+e.data.form+"</div>"),d=h._getInputs(i),(n=h._getInputsSignature(g)===h._getInputsSignature(d))&&!h.liveUpdateMode&&(h.liveUpdateMode=!0,h.container.removeClass("widget-form-disabled"),h.container.find('input[name="savewidget"]').hide()),n&&h.liveUpdateMode?(g.each(function(e){var t,i,n=m(this),s=m(d[e]);t=n.data("state"+l),i=h._getInputState(s),n.data("sanitized",i),_.isEqual(t,i)||!a.ignoreActiveElement&&n.is(document.activeElement)||h._setInputState(n,i)}),m(document).trigger("widget-synced",[r,e.data.form])):h.liveUpdateMode?(h.liveUpdateMode=!1,h.container.find('input[name="savewidget"]').show(),s=!0):(c.html(e.data.form),h.container.removeClass("widget-form-disabled"),m(document).trigger("widget-updated",[r])),(u=!s&&!_(h.setting()).isEqual(e.data.instance))?(h.isWidgetUpdating=!0,h.setting(e.data.instance),h.isWidgetUpdating=!1):h.container.removeClass("previewer-loading"),o&&o.call(h,null,{noChange:!u,ajaxFinished:!0})):(t=f.error,e.data&&e.data.message&&(t=e.data.message),o?o.call(h,t):c.prepend('<p class="widget-error"><strong>'+t+"</strong></p>")):v.previewer.cheatin()}),s.fail(function(e,t){o&&o.call(h,t)}),s.always(function(){h.container.removeClass("widget-form-loading"),g.each(function(){m(this).removeData("state"+l)}),n(n()-1)})},expandControlSection:function(){v.Control.prototype.expand.call(this)},_toggleExpanded:v.Section.prototype._toggleExpanded,expand:v.Section.prototype.expand,expandForm:function(){this.expand()},collapse:v.Section.prototype.collapse,collapseForm:function(){this.collapse()},toggleForm:function(e){void 0===e&&(e=!this.expanded()),this.expanded(e)},onChangeExpanded:function(e,t){var i,n,s,d,a,o,r=this;r.embedWidgetControl(),e&&r.embedWidgetContent(),t.unchanged?e&&v.Control.prototype.expand.call(r,{completeCallback:t.completeCallback}):(i=this.container.find("div.widget:first"),n=i.find(".widget-inside:first"),o=this.container.find(".widget-top button.widget-action"),a=function(){v.control.each(function(e){r.params.type===e.params.type&&r!==e&&e.collapse()}),s=function(){r.container.removeClass("expanding"),r.container.addClass("expanded"),i.addClass("open"),o.attr("aria-expanded","true"),r.container.trigger("expanded")},t.completeCallback&&(d=s,s=function(){d(),t.completeCallback()}),r.params.is_wide?n.fadeIn(t.duration,s):n.slideDown(t.duration,s),r.container.trigger("expand"),r.container.addClass("expanding")},e?v.section.has(r.section())?v.section(r.section()).expand({completeCallback:a}):a():(s=function(){r.container.removeClass("collapsing"),r.container.removeClass("expanded"),i.removeClass("open"),o.attr("aria-expanded","false"),r.container.trigger("collapsed")},t.completeCallback&&(d=s,s=function(){d(),t.completeCallback()}),r.container.trigger("collapse"),r.container.addClass("collapsing"),r.params.is_wide?n.fadeOut(t.duration,s):n.slideUp(t.duration,function(){i.css({width:"",margin:""}),s()})))},getWidgetSidebarPosition:function(){var e,t;if(e=this.getSidebarWidgetsControl().setting(),-1!==(t=_.indexOf(e,this.params.widget_id)))return t},moveUp:function(){this._moveWidgetByOne(-1)},moveDown:function(){this._moveWidgetByOne(1)},_moveWidgetByOne:function(e){var t,i,n,s;t=this.getWidgetSidebarPosition(),i=this.getSidebarWidgetsControl().setting,s=(n=Array.prototype.slice.call(i()))[t+e],n[t+e]=this.params.widget_id,n[t]=s,i(n)},toggleWidgetMoveArea:function(e){var t,i=this;t=this.container.find(".move-widget-area"),void 0===e&&(e=!t.hasClass("active")),e&&(t.find(".selected").removeClass("selected"),t.find("li").filter(function(){return m(this).data("id")===i.params.sidebar_id}).addClass("selected"),this.container.find(".move-widget-btn").prop("disabled",!0)),t.toggleClass("active",e)},highlightSectionAndControl:function(){var e;e=this.container.is(":hidden")?this.container.closest(".control-section"):this.container,m(".highlighted").removeClass("highlighted"),e.addClass("highlighted"),setTimeout(function(){e.removeClass("highlighted")},500)}}),v.Widgets.WidgetsPanel=v.Panel.extend({ready:function(){var n=this;v.Panel.prototype.ready.call(n),n.deferred.embedded.done(function(){var e,s,t,d,i;e=n.container.find(".panel-meta"),s=m("<div></div>",{class:"no-widget-areas-rendered-notice"}),e.append(s),d=function(){return _.filter(n.sections(),function(e){return"sidebar"===e.params.type&&e.active()}).length},i=function(){var e=d();return 0===e||e!==v.Widgets.data.registeredSidebars.length},(t=function(){var e,t,i,n=d();s.empty(),n!==(i=v.Widgets.data.registeredSidebars.length)&&((e=0!==n?(t=i-n,f.someAreasShown[t]):f.noAreasShown)&&s.append(m("<p></p>",{text:e})),s.append(m("<p></p>",{text:f.navigatePreview})))})(),s.toggle(i()),v.previewer.deferred.active.done(function(){s.toggle(i())}),v.bind("pane-contents-reflowed",function(){var e="resolved"===v.previewer.deferred.active.state()?"fast":0;t(),i()?s.slideDown(e):s.slideUp(e)})})},isContextuallyActive:function(){return this.active()}}),v.Widgets.SidebarSection=v.Section.extend({ready:function(){var t;v.Section.prototype.ready.call(this),t=v.Widgets.registeredSidebars.get(this.params.sidebarId),this.active.bind(function(e){t.set("is_rendered",e)}),t.set("is_rendered",this.active())}}),v.Widgets.SidebarControl=v.Control.extend({ready:function(){this.$controlSection=this.container.closest(".control-section"),this.$sectionContent=this.container.closest(".accordion-section-content"),this._setupModel(),this._setupSortable(),this._setupAddition(),this._applyCardinalOrderClassNames()},_setupModel:function(){var o=this;this.setting.bind(function(i,e){var t,n,s;n=_(e).difference(i),i=_(i).filter(function(e){var t=w(e);return!!v.Widgets.availableWidgets.findWhere({id_base:t.id_base})}),(t=_(i).map(function(e){var t=v.Widgets.getWidgetFormControlForWidget(e);return t=t||o.addWidget(e)})).sort(function(e,t){return _.indexOf(i,e.params.widget_id)-_.indexOf(i,t.params.widget_id)}),s=0,_(t).each(function(e){e.priority(s),e.section(o.section()),s+=1}),o.priority(s),o._applyCardinalOrderClassNames(),_(t).each(function(e){e.params.sidebar_id=o.params.sidebar_id}),_(n).each(function(a){setTimeout(function(){var e,t,i,n,s,d=!1;v.each(function(e){if(e.id!==o.setting.id&&0===e.id.indexOf("sidebars_widgets[")&&"sidebars_widgets[wp_inactive_widgets]"!==e.id){var t=e();-1!==_.indexOf(t,a)&&(d=!0)}}),d||(t=(e=v.Widgets.getWidgetFormControlForWidget(a))&&m.contains(document,e.container[0])&&!m.contains(o.$sectionContent[0],e.container[0]),e&&!t&&(v.control.remove(e.id),e.container.remove()),v.Widgets.savedWidgetIds[a]&&((i=v.value("sidebars_widgets[wp_inactive_widgets]")().slice()).push(a),v.value("sidebars_widgets[wp_inactive_widgets]")(_(i).unique())),n=w(a).id_base,(s=v.Widgets.availableWidgets.findWhere({id_base:n}))&&!s.get("is_multi")&&s.set("is_disabled",!1))})})})},_setupSortable:function(){var i=this;this.isReordering=!1,this.$sectionContent.sortable({items:"> .customize-control-widget_form",handle:".widget-top",axis:"y",tolerance:"pointer",connectWith:".accordion-section-content:has(.customize-control-sidebar_widgets)",update:function(){var e,t=i.$sectionContent.sortable("toArray");e=m.map(t,function(e){return m("#"+e).find(":input[name=widget-id]").val()}),i.setting(e)}}),this.$controlSection.find(".accordion-section-title").droppable({accept:".customize-control-widget_form",over:function(){v.section(i.section.get()).expand({allowMultiple:!0,completeCallback:function(){v.section.each(function(e){e.container.find(".customize-control-sidebar_widgets").length&&e.container.find(".accordion-section-content:first").sortable("refreshPositions")})}})}}),this.container.find(".reorder-toggle").on("click",function(){i.toggleReordering(!i.isReordering)})},_setupAddition:function(){var t=this;this.container.find(".add-new-widget").on("click",function(){var e=m(this);t.$sectionContent.hasClass("reordering")||(m("body").hasClass("adding-widget")?(e.attr("aria-expanded","false"),v.Widgets.availableWidgetsPanel.close()):(e.attr("aria-expanded","true"),v.Widgets.availableWidgetsPanel.open(t)))})},_applyCardinalOrderClassNames:function(){var i=[];_.each(this.setting(),function(e){var t=v.Widgets.getWidgetFormControlForWidget(e);t&&i.push(t)}),0===i.length||1===v.Widgets.registeredSidebars.length&&i.length<=1?this.container.find(".reorder-toggle").hide():(this.container.find(".reorder-toggle").show(),m(i).each(function(){m(this.container).removeClass("first-widget").removeClass("last-widget").find(".move-widget-down, .move-widget-up").prop("tabIndex",0)}),_.first(i).container.addClass("first-widget").find(".move-widget-up").prop("tabIndex",-1),_.last(i).container.addClass("last-widget").find(".move-widget-down").prop("tabIndex",-1))},toggleReordering:function(e){var t=this.$sectionContent.find(".add-new-widget"),i=this.container.find(".reorder-toggle"),n=this.$sectionContent.find(".widget-title");(e=Boolean(e))!==this.$sectionContent.hasClass("reordering")&&(this.isReordering=e,this.$sectionContent.toggleClass("reordering",e),e?(_(this.getWidgetFormControls()).each(function(e){e.collapse()}),t.attr({tabindex:"-1","aria-hidden":"true"}),i.attr("aria-label",f.reorderLabelOff),p.a11y.speak(f.reorderModeOn),n.attr("aria-hidden","true")):(t.removeAttr("tabindex aria-hidden"),i.attr("aria-label",f.reorderLabelOn),p.a11y.speak(f.reorderModeOff),n.attr("aria-hidden","false")))},getWidgetFormControls:function(){var n=[];return _(this.setting()).each(function(e){var t=function(e){var t,i=w(e);t="widget_"+i.id_base,i.number&&(t+="["+i.number+"]");return t}(e),i=v.control(t);i&&n.push(i)}),n},addWidget:function(n){var e,t,i,s,d,a,o,r,c,l=this,g="widget_form",u=w(n),h=u.number,p=u.id_base,f=v.Widgets.availableWidgets.findWhere({id_base:p});return!!f&&(!(h&&!f.get("is_multi"))&&(f.get("is_multi")&&!h&&(f.set("multi_number",f.get("multi_number")+1),h=f.get("multi_number")),e=m.trim(m("#widget-tpl-"+f.get("id")).html()),f.get("is_multi")?e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,h)}):f.set("is_disabled",!0),t=m(e),(i=m("<li/>").addClass("customize-control").addClass("customize-control-"+g).append(t)).find("> .widget-icon").remove(),f.get("is_multi")&&(i.find('input[name="widget_number"]').val(h),i.find('input[name="multi_number"]').val(h)),n=i.find('[name="widget-id"]').val(),i.hide(),d="widget_"+f.get("id_base"),f.get("is_multi")&&(d+="["+h+"]"),i.attr("id","customize-control-"+d.replace(/\]/g,"").replace(/\[/g,"-")),(a=v.has(d))||(c={transport:v.Widgets.data.selectiveRefreshableWidgets[f.get("id_base")]?"postMessage":"refresh",previewer:this.setting.previewer},v.create(d,d,"",c).set({})),s=v.controlConstructor[g],o=new s(d,{settings:{default:d},content:i,sidebar_id:l.params.sidebar_id,widget_id:n,widget_id_base:f.get("id_base"),type:g,is_new:!a,width:f.get("width"),height:f.get("height"),is_wide:f.get("is_wide")}),v.control.add(o),v.each(function(e){if(e.id!==l.setting.id&&0===e.id.indexOf("sidebars_widgets[")){var t=e().slice(),i=_.indexOf(t,n);-1!==i&&(t.splice(i),e(t))}}),r=this.setting().slice(),-1===_.indexOf(r,n)&&(r.push(n),this.setting(r)),i.slideDown(function(){a&&o.updateWidget({instance:o.setting()})}),o))}}),m.extend(v.panelConstructor,{widgets:v.Widgets.WidgetsPanel}),m.extend(v.sectionConstructor,{sidebar:v.Widgets.SidebarSection}),m.extend(v.controlConstructor,{widget_form:v.Widgets.WidgetControl,sidebar_widgets:v.Widgets.SidebarControl}),v.bind("ready",function(){v.Widgets.availableWidgetsPanel=new v.Widgets.AvailableWidgetsPanelView({collection:v.Widgets.availableWidgets}),v.previewer.bind("highlight-widget-control",v.Widgets.highlightWidgetFormControl),v.previewer.bind("focus-widget-control",v.Widgets.focusWidgetFormControl)}),v.Widgets.highlightWidgetFormControl=function(e){var t=v.Widgets.getWidgetFormControlForWidget(e);t&&t.highlightSectionAndControl()},v.Widgets.focusWidgetFormControl=function(e){var t=v.Widgets.getWidgetFormControlForWidget(e);t&&t.focus()},v.Widgets.getSidebarWidgetControlContainingWidget=function(t){var i=null;return v.control.each(function(e){"sidebar_widgets"===e.params.type&&-1!==_.indexOf(e.setting(),t)&&(i=e)}),i},v.Widgets.getWidgetFormControlForWidget=function(t){var i=null;return v.control.each(function(e){"widget_form"===e.params.type&&e.params.widget_id===t&&(i=e)}),i},m(document).on("widget-added",function(e,t){var i,n,s,d;"nav_menu"===(i=w(t.find("> .widget-inside > .form > .widget-id").val())).id_base&&(n=v.control("widget_nav_menu["+String(i.number)+"]"))&&(s=t.find('select[name*="nav_menu"]'),d=t.find(".edit-selected-nav-menu > button"),0!==s.length&&0!==d.length&&(s.on("change",function(){v.section.has("nav_menu["+s.val()+"]")?d.parent().show():d.parent().hide()}),d.on("click",function(){var e=v.section("nav_menu["+s.val()+"]");e&&function(i,n){i.focus(),i.expanded.bind(function e(t){t||(i.expanded.unbind(e),n.focus())})}(e,n)})))})}function w(e){var t,i={number:null,id_base:null};return(t=e.match(/^(.+)-(\d+)$/))?(i.id_base=t[1],i.number=parseInt(t[2],10)):i.id_base=e,i}}(window.wp,jQuery);
