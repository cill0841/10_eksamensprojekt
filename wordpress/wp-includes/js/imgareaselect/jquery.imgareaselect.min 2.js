!function(Se){var ze=Math.abs,ke=Math.max,Ce=Math.min,Ae=Math.round;function We(){return Se("<div/>")}Se.imgAreaSelect=function(o,n){var t,i,r,c,d,a,s,u,l,h,f,m,e,p,y,g,v,b,x,w,S,z,k,C,A,W,I,K,P,N=Se(o),H=We(),M=We(),E=We().add(We()).add(We()).add(We()),O=We().add(We()).add(We()).add(We()),T=Se([]),L={left:0,top:0},j={left:0,top:0},D=0,R="absolute",X={x1:0,y1:0,x2:0,y2:0,width:0,height:0},Y=document.documentElement,$=navigator.userAgent;function q(e){return e+L.left-j.left}function B(e){return e+L.top-j.top}function Q(e){return e-L.left+j.left}function F(e){return e-L.top+j.top}function G(e){return ke(e.pageX||0,U(e).x)-j.left}function J(e){return ke(e.pageY||0,U(e).y)-j.top}function U(e){var t=e.originalEvent||{};return t.touches&&t.touches.length?{x:t.touches[0].pageX,y:t.touches[0].pageY}:{x:0,y:0}}function V(e){var t=e||h,o=e||f;return{x1:Ae(X.x1*t),y1:Ae(X.y1*o),x2:Ae(X.x2*t),y2:Ae(X.y2*o),width:Ae(X.x2*t)-Ae(X.x1*t),height:Ae(X.y2*o)-Ae(X.y1*o)}}function Z(e,t,o,i,s){var n=s||h,r=s||f;(X={x1:Ae(e/n||0),y1:Ae(t/r||0),x2:Ae(o/n||0),y2:Ae(i/r||0)}).width=X.x2-X.x1,X.height=X.y2-X.y1}function _(){t&&N.width()&&(L={left:Ae(N.offset().left),top:Ae(N.offset().top)},d=N.innerWidth(),a=N.innerHeight(),L.top+=N.outerHeight()-a>>1,L.left+=N.outerWidth()-d>>1,e=Ae(n.minWidth/h)||0,p=Ae(n.minHeight/f)||0,y=Ae(Ce(n.maxWidth/h||1<<24,d)),g=Ae(Ce(n.maxHeight/f||1<<24,a)),"1.3.2"!=Se().jquery||"fixed"!=R||Y.getBoundingClientRect||(L.top+=ke(document.body.scrollTop,Y.scrollTop),L.left+=ke(document.body.scrollLeft,Y.scrollLeft)),j=/absolute|relative/.test(s.css("position"))?{left:Ae(s.offset().left)-s.scrollLeft(),top:Ae(s.offset().top)-s.scrollTop()}:"fixed"==R?{left:Se(document).scrollLeft(),top:Se(document).scrollTop()}:{left:0,top:0},r=q(0),c=B(0),(X.x2>d||X.y2>a)&&ce())}function ee(e){if(b){switch(H.css({left:q(X.x1),top:B(X.y1)}).add(M).width(I=X.width).height(K=X.height),M.add(E).add(T).css({left:0,top:0}),E.width(ke(I-E.outerWidth()+E.innerWidth(),0)).height(ke(K-E.outerHeight()+E.innerHeight(),0)),Se(O[0]).css({left:r,top:c,width:X.x1,height:a}),Se(O[1]).css({left:r+X.x1,top:c,width:I,height:X.y1}),Se(O[2]).css({left:r+X.x2,top:c,width:d-X.x2,height:a}),Se(O[3]).css({left:r+X.x1,top:c+X.y2,width:I,height:a-X.y2}),I-=T.outerWidth(),K-=T.outerHeight(),T.length){case 8:Se(T[4]).css({left:I>>1}),Se(T[5]).css({left:I,top:K>>1}),Se(T[6]).css({left:I>>1,top:K}),Se(T[7]).css({top:K>>1});case 4:T.slice(1,3).css({left:I}),T.slice(2,4).css({top:K})}!1!==e&&(Se.imgAreaSelect.onKeyPress!=ye&&Se(document).unbind(Se.imgAreaSelect.keyPress,Se.imgAreaSelect.onKeyPress),n.keys&&Se(document)[Se.imgAreaSelect.keyPress](Se.imgAreaSelect.onKeyPress=ye)),be&&E.outerWidth()-E.innerWidth()==2&&(E.css("margin",0),setTimeout(function(){E.css("margin","auto")},0))}}function te(e){_(),ee(e),x=q(X.x1),w=B(X.y1),S=q(X.x2),z=B(X.y2)}function oe(e,t){n.fadeSpeed?e.fadeOut(n.fadeSpeed,t):e.hide()}function ie(e){var t=Q(G(e))-X.x1,o=F(J(e))-X.y1;P||(_(),P=!0,H.one("mouseout",function(){P=!1})),m="",n.resizable&&(o<=n.resizeMargin?m="n":o>=X.height-n.resizeMargin&&(m="s"),t<=n.resizeMargin?m+="w":t>=X.width-n.resizeMargin&&(m+="e")),H.css("cursor",m?m+"-resize":n.movable?"move":""),i&&i.toggle()}function se(e){Se("body").css("cursor",""),!n.autoHide&&X.width*X.height!=0||oe(H.add(O),function(){Se(this).hide()}),Se(document).off("mousemove touchmove",de),H.on("mousemove touchmove",ie),n.onSelectEnd(o,V())}function ne(e){return"mousedown"==e.type&&1!=e.which||(ie(e),_(),m?(Se("body").css("cursor",m+"-resize"),x=q(X[/w/.test(m)?"x2":"x1"]),w=B(X[/n/.test(m)?"y2":"y1"]),Se(document).on("mousemove touchmove",de).one("mouseup touchend",se),H.off("mousemove touchmove",ie)):n.movable?(u=r+X.x1-G(e),l=c+X.y1-J(e),H.off("mousemove touchmove",ie),Se(document).on("mousemove touchmove",ue).one("mouseup touchend",function(){n.onSelectEnd(o,V()),Se(document).off("mousemove touchmove",ue),H.on("mousemove touchmove",ie)})):N.mousedown(e)),!1}function re(e){v&&(e?(S=ke(r,Ce(r+d,x+ze(z-w)*v*(x<S||-1))),z=Ae(ke(c,Ce(c+a,w+ze(S-x)/v*(w<z||-1)))),S=Ae(S)):(z=ke(c,Ce(c+a,w+ze(S-x)/v*(w<z||-1))),S=Ae(ke(r,Ce(r+d,x+ze(z-w)*v*(x<S||-1)))),z=Ae(z)))}function ce(){x=Ce(x,r+d),w=Ce(w,c+a),ze(S-x)<e&&((S=x-e*(S<x||-1))<r?x=r+e:r+d<S&&(x=r+d-e)),ze(z-w)<p&&((z=w-p*(z<w||-1))<c?w=c+p:c+a<z&&(w=c+a-p)),S=ke(r,Ce(S,r+d)),z=ke(c,Ce(z,c+a)),re(ze(S-x)<ze(z-w)*v),ze(S-x)>y&&(S=x-y*(S<x||-1),re()),ze(z-w)>g&&(z=w-g*(z<w||-1),re(!0)),X={x1:Q(Ce(x,S)),x2:Q(ke(x,S)),y1:F(Ce(w,z)),y2:F(ke(w,z)),width:ze(S-x),height:ze(z-w)},ee(),n.onSelectChange(o,V())}function de(e){return S=/w|e|^$/.test(m)||v?G(e):q(X.x2),z=/n|s|^$/.test(m)||v?J(e):B(X.y2),ce(),!1}function ae(e,t){S=(x=e)+X.width,z=(w=t)+X.height,Se.extend(X,{x1:Q(x),y1:F(w),x2:Q(S),y2:F(z)}),ee(),n.onSelectChange(o,V())}function ue(e){return x=ke(r,Ce(u+G(e),r+d-X.width)),w=ke(c,Ce(l+J(e),c+a-X.height)),ae(x,w),e.preventDefault(),!1}function le(){Se(document).off("mousemove touchmove",le),_(),S=x,z=w,ce(),m="",O.is(":visible")||H.add(O).hide().fadeIn(n.fadeSpeed||0),b=!0,Se(document).off("mouseup touchend",he).on("mousemove touchmove",de).one("mouseup touchend",se),H.off("mousemove touchmove",ie),n.onSelectStart(o,V())}function he(){Se(document).off("mousemove touchmove",le).off("mouseup touchend",he),oe(H.add(O)),Z(Q(x),F(w),Q(x),F(w)),this instanceof Se.imgAreaSelect||(n.onSelectChange(o,V()),n.onSelectEnd(o,V()))}function fe(e){return 1<e.which||O.is(":animated")||(_(),u=x=G(e),l=w=J(e),Se(document).on({"mousemove touchmove":le,"mouseup touchend":he})),!1}function me(){te(!1)}function pe(){t=!0,ve(n=Se.extend({classPrefix:"imgareaselect",movable:!0,parent:"body",resizable:!0,resizeMargin:10,onInit:function(){},onSelectStart:function(){},onSelectChange:function(){},onSelectEnd:function(){}},n)),H.add(O).css({visibility:""}),n.show&&(b=!0,_(),ee(),H.add(O).hide().fadeIn(n.fadeSpeed||0)),setTimeout(function(){n.onInit(o,V())},0)}var ye=function(e){var t,o,i=n.keys,s=e.keyCode;if(t=isNaN(i.alt)||!e.altKey&&!e.originalEvent.altKey?!isNaN(i.ctrl)&&e.ctrlKey?i.ctrl:!isNaN(i.shift)&&e.shiftKey?i.shift:isNaN(i.arrows)?10:i.arrows:i.alt,"resize"==i.arrows||"resize"==i.shift&&e.shiftKey||"resize"==i.ctrl&&e.ctrlKey||"resize"==i.alt&&(e.altKey||e.originalEvent.altKey)){switch(s){case 37:t=-t;case 39:o=ke(x,S),x=Ce(x,S),S=ke(o+t,x),re();break;case 38:t=-t;case 40:o=ke(w,z),w=Ce(w,z),z=ke(o+t,w),re(!0);break;default:return}ce()}else switch(x=Ce(x,S),w=Ce(w,z),s){case 37:ae(ke(x-t,r),w);break;case 38:ae(x,ke(w-t,c));break;case 39:ae(x+Ce(t,d-Q(S)),w);break;case 40:ae(x,w+Ce(t,a-F(z)));break;default:return}return!1};function ge(e,t){for(var o in t)void 0!==n[o]&&e.css(t[o],n[o])}function ve(e){if(e.parent&&(s=Se(e.parent)).append(H.add(O)),Se.extend(n,e),_(),null!=e.handles){for(T.remove(),T=Se([]),A=e.handles?"corners"==e.handles?4:8:0;A--;)T=T.add(We());T.addClass(n.classPrefix+"-handle").css({position:"absolute",fontSize:0,zIndex:D+1||1}),0<=!parseInt(T.css("width"))&&T.width(5).height(5),(W=n.borderWidth)&&T.css({borderWidth:W,borderStyle:"solid"}),ge(T,{borderColor1:"border-color",borderColor2:"background-color",borderOpacity:"opacity"})}for(h=n.imageWidth/d||1,f=n.imageHeight/a||1,null!=e.x1&&(Z(e.x1,e.y1,e.x2,e.y2),e.show=!e.hide),e.keys&&(n.keys=Se.extend({shift:1,ctrl:"resize"},e.keys)),O.addClass(n.classPrefix+"-outer"),M.addClass(n.classPrefix+"-selection"),A=0;A++<4;)Se(E[A-1]).addClass(n.classPrefix+"-border"+A);ge(M,{selectionColor:"background-color",selectionOpacity:"opacity"}),ge(E,{borderOpacity:"opacity",borderWidth:"border-width"}),ge(O,{outerColor:"background-color",outerOpacity:"opacity"}),(W=n.borderColor1)&&Se(E[0]).css({borderStyle:"solid",borderColor:W}),(W=n.borderColor2)&&Se(E[1]).css({borderStyle:"dashed",borderColor:W}),H.append(M.add(E).add(i)).append(T),be&&((W=(O.css("filter")||"").match(/opacity=(\d+)/))&&O.css("opacity",W[1]/100),(W=(E.css("filter")||"").match(/opacity=(\d+)/))&&E.css("opacity",W[1]/100)),e.hide?oe(H.add(O)):e.show&&t&&(b=!0,H.add(O).fadeIn(n.fadeSpeed||0),te()),v=(C=(n.aspectRatio||"").split(/:/))[0]/C[1],N.add(O).unbind("mousedown",fe),n.disable||!1===n.enable?(H.off({"mousemove touchmove":ie,"mousedown touchstart":ne}),Se(window).off("resize",me)):(!n.enable&&!1!==n.disable||((n.resizable||n.movable)&&H.on({"mousemove touchmove":ie,"mousedown touchstart":ne}),Se(window).resize(me)),n.persistent||N.add(O).on("mousedown touchstart",fe)),n.enable=n.disable=void 0}this.remove=function(){ve({disable:!0}),H.add(O).remove()},this.getOptions=function(){return n},this.setOptions=ve,this.getSelection=V,this.setSelection=Z,this.cancelSelection=he,this.update=te;var be=(/msie ([\w.]+)/i.exec($)||[])[1],xe=/opera/i.test($),we=/webkit/i.test($)&&!/chrome/i.test($);for(k=N;k.length;)D=ke(D,isNaN(k.css("z-index"))?D:k.css("z-index")),"fixed"==k.css("position")&&(R="fixed"),k=k.parent(":not(body)");D=n.zIndex||D,be&&N.attr("unselectable","on"),Se.imgAreaSelect.keyPress=be||we?"keydown":"keypress",xe&&(i=We().css({width:"100%",height:"100%",position:"absolute",zIndex:D+2||2})),H.add(O).css({visibility:"hidden",position:R,overflow:"hidden",zIndex:D||"0"}),H.css({zIndex:D+2||2}),M.add(E).css({position:"absolute",fontSize:0}),o.complete||"complete"==o.readyState||!N.is("img")?pe():N.one("load",pe),!t&&be&&7<=be&&(o.src=o.src)},Se.fn.imgAreaSelect=function(e){return e=e||{},this.each(function(){Se(this).data("imgAreaSelect")?e.remove?(Se(this).data("imgAreaSelect").remove(),Se(this).removeData("imgAreaSelect")):Se(this).data("imgAreaSelect").setOptions(e):e.remove||(void 0===e.enable&&void 0===e.disable&&(e.enable=!0),Se(this).data("imgAreaSelect",new Se.imgAreaSelect(this,e)))}),e.instance?Se(this).data("imgAreaSelect"):this}}(jQuery);
