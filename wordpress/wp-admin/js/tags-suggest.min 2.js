/*! This file is auto-generated */
!function(u){if(void 0!==window.uiAutocompleteL10n){var s=0,a=wp.i18n._x(",","tag delimiter")||",";u.fn.wpTagsSuggest=function(e){var i,o,n=u(this),r=(e=e||{}).taxonomy||n.attr("data-wp-taxonomy")||"post_tag";return delete e.taxonomy,e=u.extend({source:function(e,a){var t;o!==e.term?(t=function(e){return l(e).pop()}(e.term),u.get(window.ajaxurl,{action:"ajax-tag-search",tax:r,q:t}).always(function(){n.removeClass("ui-autocomplete-loading")}).done(function(e){var t,o=[];if(e){for(t in e=e.split("\n")){var n=++s;o.push({id:n,name:e[t]})}a(i=o)}else a(o)}),o=e.term):a(i)},focus:function(e,t){n.attr("aria-activedescendant","wp-tags-autocomplete-"+t.item.id),e.preventDefault()},select:function(e,t){var o=l(n.val());return o.pop(),o.push(t.item.name,""),n.val(o.join(a+" ")),u.ui.keyCode.TAB===e.keyCode?(window.wp.a11y.speak(wp.i18n.__("Term selected."),"assertive"),e.preventDefault()):u.ui.keyCode.ENTER===e.keyCode&&(window.tagBox&&(window.tagBox.userAction="add",window.tagBox.flushTags(u(this).closest(".tagsdiv"))),e.preventDefault(),e.stopPropagation()),!1},open:function(){n.attr("aria-expanded","true")},close:function(){n.attr("aria-expanded","false")},minLength:2,position:{my:"left top+2",at:"left bottom",collision:"none"},messages:{noResults:window.uiAutocompleteL10n.noResults,results:function(e){return 1<e?window.uiAutocompleteL10n.manyResults.replace("%d",e):window.uiAutocompleteL10n.oneResult}}},e),n.on("keydown",function(){n.removeAttr("aria-activedescendant")}).autocomplete(e).autocomplete("instance")._renderItem=function(e,t){return u('<li role="option" id="wp-tags-autocomplete-'+t.id+'">').text(t.name).appendTo(e)},n.attr({role:"combobox","aria-autocomplete":"list","aria-expanded":"false","aria-owns":n.autocomplete("widget").attr("id")}).on("focus",function(){l(n.val()).pop()&&n.autocomplete("search")}).autocomplete("widget").addClass("wp-tags-autocomplete").attr("role","listbox").removeAttr("tabindex").on("menufocus",function(e,t){t.item.attr("aria-selected","true")}).on("menublur",function(){u(this).find('[aria-selected="true"]').removeAttr("aria-selected")}),this}}function l(e){return e.split(new RegExp(a+"\\s*"))}}(jQuery);