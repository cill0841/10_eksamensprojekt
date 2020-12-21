/*! This file is auto-generated */
!function(f,w){w.wp=w.wp||{},w.wp.heartbeat=new function(){var e,t,n,a,r=f(document),i={suspend:!1,suspendEnabled:!0,screenId:"",url:"",lastTick:0,queue:{},mainInterval:60,tempInterval:0,originalInterval:0,minimalInterval:0,countdown:0,connecting:!1,connectionError:!1,errorcount:0,hasConnected:!1,hasFocus:!0,userActivity:0,userActivityEvents:!1,checkFocusTimer:0,beatTimer:0};function o(){return(new Date).getTime()}function c(e){var t,n=e.src;if(n&&/^https?:\/\//.test(n)&&(t=w.location.origin?w.location.origin:w.location.protocol+"//"+w.location.host,0!==n.indexOf(t)))return!1;try{if(e.contentWindow.document)return!0}catch(e){}return!1}function s(){i.hasFocus&&!document.hasFocus()?m():!i.hasFocus&&document.hasFocus()&&v()}function u(e,t){var n;if(e){switch(e){case"abort":break;case"timeout":n=!0;break;case"error":if(503===t&&i.hasConnected){n=!0;break}case"parsererror":case"empty":case"unknown":i.errorcount++,2<i.errorcount&&i.hasConnected&&(n=!0)}n&&!b()&&(i.connectionError=!0,r.trigger("heartbeat-connection-lost",[e,t]),wp.hooks.doAction("heartbeat.connection-lost",e,t))}}function l(){var e,t;i.connecting||i.suspend||(i.lastTick=o(),t=f.extend({},i.queue),i.queue={},r.trigger("heartbeat-send",[t]),wp.hooks.doAction("heartbeat.send",t),e={data:t,interval:i.tempInterval?i.tempInterval/1e3:i.mainInterval/1e3,_nonce:"object"==typeof w.heartbeatSettings?w.heartbeatSettings.nonce:"",action:"heartbeat",screen_id:i.screenId,has_focus:i.hasFocus},"customize"===i.screenId&&(e.wp_customize="on"),i.connecting=!0,i.xhr=f.ajax({url:i.url,type:"post",timeout:3e4,data:e,dataType:"json"}).always(function(){i.connecting=!1,d()}).done(function(e,t,n){var a;e?(i.hasConnected=!0,b()&&(i.errorcount=0,i.connectionError=!1,r.trigger("heartbeat-connection-restored"),wp.hooks.doAction("heartbeat.connection-restored")),e.nonces_expired&&(r.trigger("heartbeat-nonces-expired"),wp.hooks.doAction("heartbeat.nonces-expired")),e.heartbeat_interval&&(a=e.heartbeat_interval,delete e.heartbeat_interval),e.heartbeat_nonce&&"object"==typeof w.heartbeatSettings&&(w.heartbeatSettings.nonce=e.heartbeat_nonce,delete e.heartbeat_nonce),e.rest_nonce&&"object"==typeof w.wpApiSettings&&(w.wpApiSettings.nonce=e.rest_nonce),r.trigger("heartbeat-tick",[e,t,n]),wp.hooks.doAction("heartbeat.tick",e,t,n),a&&I(a)):u("empty")}).fail(function(e,t,n){u(t||"unknown",e.status),r.trigger("heartbeat-error",[e,t,n]),wp.hooks.doAction("heartbeat.error",e,t,n)}))}function d(){var e=o()-i.lastTick,t=i.mainInterval;i.suspend||(i.hasFocus?0<i.countdown&&i.tempInterval&&(t=i.tempInterval,i.countdown--,i.countdown<1&&(i.tempInterval=0)):t=12e4,i.minimalInterval&&t<i.minimalInterval&&(t=i.minimalInterval),w.clearTimeout(i.beatTimer),e<t?i.beatTimer=w.setTimeout(function(){l()},t-e):l())}function m(){i.hasFocus=!1}function v(){i.userActivity=o(),i.suspend=!1,i.hasFocus||(i.hasFocus=!0,d())}function h(){i.userActivityEvents=!1,r.off(".wp-heartbeat-active"),f("iframe").each(function(e,t){c(t)&&f(t.contentWindow).off(".wp-heartbeat-active")}),v()}function p(){var e=i.userActivity?o()-i.userActivity:0;3e5<e&&i.hasFocus&&m(),(i.suspendEnabled&&6e5<e||36e5<e)&&(i.suspend=!0),i.userActivityEvents||(r.on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){h()}),f("iframe").each(function(e,t){c(t)&&f(t.contentWindow).on("mouseover.wp-heartbeat-active keyup.wp-heartbeat-active touchend.wp-heartbeat-active",function(){h()})}),i.userActivityEvents=!0)}function b(){return i.connectionError}function I(e,t){var n,a=i.tempInterval?i.tempInterval:i.mainInterval;if(e){switch(e){case"fast":case 5:n=5e3;break;case 15:n=15e3;break;case 30:n=3e4;break;case 60:n=6e4;break;case 120:n=12e4;break;case"long-polling":return i.mainInterval=0;default:n=i.originalInterval}i.minimalInterval&&n<i.minimalInterval&&(n=i.minimalInterval),5e3===n?(t=(t=parseInt(t,10)||30)<1||30<t?30:t,i.countdown=t,i.tempInterval=n):(i.countdown=0,i.tempInterval=0,i.mainInterval=n),n!==a&&d()}return i.tempInterval?i.tempInterval/1e3:i.mainInterval/1e3}return"string"==typeof w.pagenow&&(i.screenId=w.pagenow),"string"==typeof w.ajaxurl&&(i.url=w.ajaxurl),"object"==typeof w.heartbeatSettings&&(e=w.heartbeatSettings,!i.url&&e.ajaxurl&&(i.url=e.ajaxurl),e.interval&&(i.mainInterval=e.interval,i.mainInterval<15?i.mainInterval=15:120<i.mainInterval&&(i.mainInterval=120)),e.minimalInterval&&(e.minimalInterval=parseInt(e.minimalInterval,10),i.minimalInterval=0<e.minimalInterval&&e.minimalInterval<=600?1e3*e.minimalInterval:0),i.minimalInterval&&i.mainInterval<i.minimalInterval&&(i.mainInterval=i.minimalInterval),i.screenId||(i.screenId=e.screenId||"front"),"disable"===e.suspension&&(i.suspendEnabled=!1)),i.mainInterval=1e3*i.mainInterval,i.originalInterval=i.mainInterval,void 0!==document.hidden?(t="hidden",a="visibilitychange",n="visibilityState"):void 0!==document.msHidden?(t="msHidden",a="msvisibilitychange",n="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",a="webkitvisibilitychange",n="webkitVisibilityState"),t&&(document[t]&&(i.hasFocus=!1),r.on(a+".wp-heartbeat",function(){"hidden"===document[n]?(m(),w.clearInterval(i.checkFocusTimer)):(v(),document.hasFocus&&(i.checkFocusTimer=w.setInterval(s,1e4)))})),document.hasFocus&&(i.checkFocusTimer=w.setInterval(s,1e4)),f(w).on("unload.wp-heartbeat",function(){i.suspend=!0,i.xhr&&4!==i.xhr.readyState&&i.xhr.abort()}),w.setInterval(p,3e4),r.ready(function(){i.lastTick=o(),d()}),{hasFocus:function(){return i.hasFocus},connectNow:function(){i.lastTick=0,d()},disableSuspend:function(){i.suspendEnabled=!1},interval:I,hasConnectionError:b,enqueue:function(e,t,n){return!!e&&((!n||!this.isQueued(e))&&(i.queue[e]=t,!0))},dequeue:function(e){e&&delete i.queue[e]},isQueued:function(e){if(e)return i.queue.hasOwnProperty(e)},getQueuedItem:function(e){if(e)return this.isQueued(e)?i.queue[e]:void 0}}}}(jQuery,window);