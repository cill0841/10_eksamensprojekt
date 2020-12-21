/*! This file is auto-generated */
wp.customize.widgetsPreview=wp.customize.WidgetCustomizerPreview=function(s,c,e,l){var d;return(d={renderedSidebars:{},renderedWidgets:{},registeredSidebars:[],registeredWidgets:{},widgetSelectors:[],preview:null,l10n:{widgetTooltip:""},selectiveRefreshableWidgets:{},init:function(){var i=this;i.preview=l.preview,c.isEmpty(i.selectiveRefreshableWidgets)||i.addPartials(),i.buildWidgetSelectors(),i.highlightControls(),i.preview.bind("highlight-widget",i.highlightWidget),l.preview.bind("active",function(){i.highlightControls()}),l.preview.bind("refresh-widget-partial",function(e){var t="widget["+e+"]";l.selectiveRefresh.partial.has(t)?l.selectiveRefresh.partial(t).refresh():i.renderedWidgets[e]&&l.preview.send("refresh")})}}).WidgetPartial=l.selectiveRefresh.Partial.extend({initialize:function(e,t){var i,r=this;if(!(i=e.match(/^widget\[(.+)]$/)))throw new Error("Illegal id for widget partial.");r.widgetId=i[1],r.widgetIdParts=d.parseWidgetId(r.widgetId),(t=t||{}).params=c.extend({settings:[d.getWidgetSettingId(r.widgetId)],containerInclusive:!0},t.params||{}),l.selectiveRefresh.Partial.prototype.initialize.call(r,e,t)},refresh:function(){var e,t=this;return d.selectiveRefreshableWidgets[t.widgetIdParts.idBase]?l.selectiveRefresh.Partial.prototype.refresh.call(t):((e=s.Deferred()).reject(),t.fallback(),e.promise())},renderContent:function(e){var t=this;l.selectiveRefresh.Partial.prototype.renderContent.call(t,e)&&(l.preview.send("widget-updated",t.widgetId),l.selectiveRefresh.trigger("widget-updated",t))}}),d.SidebarPartial=l.selectiveRefresh.Partial.extend({initialize:function(e,t){var i,r=this;if(!(i=e.match(/^sidebar\[(.+)]$/)))throw new Error("Illegal id for sidebar partial.");if(r.sidebarId=i[1],(t=t||{}).params=c.extend({settings:["sidebars_widgets["+r.sidebarId+"]"]},t.params||{}),l.selectiveRefresh.Partial.prototype.initialize.call(r,e,t),!r.params.sidebarArgs)throw new Error("The sidebarArgs param was not provided.");if(1<r.params.settings.length)throw new Error("Expected SidebarPartial to only have one associated setting")},ready:function(){var r=this;c.each(r.settings(),function(e){l(e).bind(c.bind(r.handleSettingChange,r))}),l.selectiveRefresh.bind("partial-content-rendered",function(e){e.partial.extended(d.WidgetPartial)&&-1!==c.indexOf(r.getWidgetIds(),e.partial.widgetId)&&l.selectiveRefresh.trigger("sidebar-updated",r)}),l.bind("change",function(e){var t,i;(i=d.parseWidgetSettingId(e.id))&&(t=i.idBase,i.number&&(t+="-"+String(i.number)),-1!==c.indexOf(r.getWidgetIds(),t)&&r.ensureWidgetPlacementContainers(t))})},findDynamicSidebarBoundaryNodes:function(){var i,r,n=this,a={};return i=/^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\d+)$/,(r=function(e){c.each(e,function(e){var t;if(8===e.nodeType){if(!(t=e.nodeValue.match(i))||t[2]!==n.sidebarId)return;c.isUndefined(a[t[3]])&&(a[t[3]]={before:null,after:null,instanceNumber:parseInt(t[3],10)}),"dynamic_sidebar_before"===t[1]?a[t[3]].before=e:a[t[3]].after=e}else 1===e.nodeType&&r(e.childNodes)})})(document.body.childNodes),c.values(a)},placements:function(){var t=this;return c.map(t.findDynamicSidebarBoundaryNodes(),function(e){return new l.selectiveRefresh.Placement({partial:t,container:null,startNode:e.before,endNode:e.after,context:{instanceNumber:e.instanceNumber}})})},getWidgetIds:function(){var e,t;if(!(e=this.settings()[0]))throw new Error("Missing associated setting.");if(!l.has(e))throw new Error("Setting does not exist.");if(t=l(e).get(),!c.isArray(t))throw new Error("Expected setting to be array of widget IDs");return t.slice(0)},reflowWidgets:function(){var e,t,s,i=this,o=[];return t=i.getWidgetIds(),e=i.placements(),s={},c.each(t,function(e){var t=l.selectiveRefresh.partial("widget["+e+"]");t&&(s[e]=t)}),c.each(e,function(i){var r,n=[],a=!1,d=-1;c.each(s,function(t){c.each(t.placements(),function(e){i.context.instanceNumber===e.context.sidebar_instance_number&&(r=e.container.index(),n.push({partial:t,placement:e,position:r}),r<d&&(a=!0),d=r)})}),a&&(c.each(n,function(e){i.endNode.parentNode.insertBefore(e.placement.container[0],i.endNode),l.selectiveRefresh.trigger("partial-content-moved",e.placement)}),o.push(i))}),0<o.length&&l.selectiveRefresh.trigger("sidebar-updated",i),o},ensureWidgetPlacementContainers:function(i){var r,n=this,a=!1,e="widget["+i+"]";return r=(r=l.selectiveRefresh.partial(e))||new d.WidgetPartial(e,{params:{}}),c.each(n.placements(),function(t){var e;c.find(r.placements(),function(e){return e.context.sidebar_instance_number===t.context.instanceNumber})||(e=s(n.params.sidebarArgs.before_widget.replace(/%1\$s/g,i).replace(/%2\$s/g,"widget")+n.params.sidebarArgs.after_widget))[0]&&(e.attr("data-customize-partial-id",r.id),e.attr("data-customize-partial-type","widget"),e.attr("data-customize-widget-id",i),e.data("customize-partial-placement-context",{sidebar_id:n.sidebarId,sidebar_instance_number:t.context.instanceNumber}),t.endNode.parentNode.insertBefore(e[0],t.endNode),a=!0)}),l.selectiveRefresh.partial.add(r),a&&n.reflowWidgets(),r},handleSettingChange:function(e,t){var i,r,n=this,a=[];0<t.length&&0===e.length||0<e.length&&0===t.length?n.fallback():(i=c.difference(t,e),c.each(i,function(e){var t=l.selectiveRefresh.partial("widget["+e+"]");t&&c.each(t.placements(),function(e){(e.context.sidebar_id===n.sidebarId||e.context.sidebar_args&&e.context.sidebar_args.id===n.sidebarId)&&e.container.remove()}),delete d.renderedWidgets[e]}),r=c.difference(e,t),c.each(r,function(e){var t=n.ensureWidgetPlacementContainers(e);a.push(t),d.renderedWidgets[e]=!0}),c.each(a,function(e){e.refresh()}),l.selectiveRefresh.trigger("sidebar-updated",n))},refresh:function(){var e=this,t=s.Deferred();return t.fail(function(){e.fallback()}),0===e.placements().length?t.reject():(c.each(e.reflowWidgets(),function(e){l.selectiveRefresh.trigger("partial-content-rendered",e)}),t.resolve()),t.promise()}}),l.selectiveRefresh.partialConstructor.sidebar=d.SidebarPartial,l.selectiveRefresh.partialConstructor.widget=d.WidgetPartial,d.addPartials=function(){c.each(d.registeredSidebars,function(e){var t,i="sidebar["+e.id+"]";(t=l.selectiveRefresh.partial(i))||(t=new d.SidebarPartial(i,{params:{sidebarArgs:e}}),l.selectiveRefresh.partial.add(t))})},d.buildWidgetSelectors=function(){var d=this;s.each(d.registeredSidebars,function(e,t){var i,r,n,a=[t.before_widget,t.before_title,t.after_title,t.after_widget].join("");r=(i=s(a)).prop("tagName")||"",(n=i.prop("className")||"")&&((n=(n=n.replace(/\S*%[12]\$s\S*/g,"")).replace(/^\s+|\s+$/g,""))&&(r+="."+n.split(/\s+/).join(".")),d.widgetSelectors.push(r))})},d.highlightWidget=function(e){var t=s(document.body),i=s("#"+e);t.find(".widget-customizer-highlighted-widget").removeClass("widget-customizer-highlighted-widget"),i.addClass("widget-customizer-highlighted-widget"),setTimeout(function(){i.removeClass("widget-customizer-highlighted-widget")},500)},d.highlightControls=function(){var t=this,e=this.widgetSelectors.join(",");l.settings.channel&&(s(e).attr("title",this.l10n.widgetTooltip),s(document).on("mouseenter",e,function(){t.preview.send("highlight-widget-control",s(this).prop("id"))}),s(document).on("click",e,function(e){e.shiftKey&&(e.preventDefault(),t.preview.send("focus-widget-control",s(this).prop("id")))}))},d.parseWidgetId=function(e){var t,i={idBase:"",number:null};return(t=e.match(/^(.+)-(\d+)$/))?(i.idBase=t[1],i.number=parseInt(t[2],10)):i.idBase=e,i},d.parseWidgetSettingId=function(e){var t,i={idBase:"",number:null};return(t=e.match(/^widget_([^\[]+?)(?:\[(\d+)])?$/))?(i.idBase=t[1],t[2]&&(i.number=parseInt(t[2],10)),i):null},d.getWidgetSettingId=function(e){var t,i=this.parseWidgetId(e);return t="widget_"+i.idBase,i.number&&(t+="["+String(i.number)+"]"),t},l.bind("preview-ready",function(){s.extend(d,_wpWidgetCustomizerPreviewSettings),d.init()}),d}(jQuery,_,wp,wp.customize);
