// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(n,l,b){var f=jQuery;var i=f("ul",b);b=b.parent();var e=n.duration;var d=n.perspective||0.4;var g=n.shadow||0.35;var a=n.noCanvas||false;var k=n.no3d||false;var m={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(p){var o=this.domPrefixes.length;while(o--){if(typeof document.body.style[this.domPrefixes[o]+p]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var p=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(p&&/AppleWebKit/.test(navigator.userAgent)){var r=document.createElement("div"),o=document.createElement("style"),q="Test3d"+Math.round(Math.random()*99999);o.textContent="@media (-webkit-transform-3d){#"+q+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(o);r.id=q;document.body.appendChild(r);p=r.offsetHeight===3;o.parentNode.removeChild(o);r.parentNode.removeChild(r)}return p},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!k){k=m.cssTransitions()&&m.cssTransforms3d()}if(!a){a=m.canvas()}var j;this.go=function(p,o){if(j){return -1}var C=(o==0&&p!=o+1)||(p==o-1),t=l.get(p),E=l.get(o);var q=f("<div>").appendTo(b);if(k){var w={backgroundColor:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};q.css(w);perspect=b.width()*(3-d*2);var x=83.5;var B=f("<div>").css(w).css({background:"url("+(C?t:E).src+")",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(q);var A=f("<div>").css(w).css({left:"50%",background:"url("+(C?E:t).src+") right",backgroundSize:"auto 100%",width:"50%",perspective:perspect}).appendTo(q);var G=f("<div>").css(w).css({background:"url("+(C?E:t).src+")",backgroundSize:"auto 100%",transform:"rotateY("+(C?0.1:x)+"deg)",transition:(C?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",marginRight:"-100%",display:C?"block":"none"}).appendTo(B);var D=f("<div>").css(w).css({background:"url("+(C?t:E).src+") right",backgroundSize:"auto 100%",transform:"rotateY(-"+(C?x:0.1)+"deg)",transition:(C?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",marginRight:"-100%",display:C?"none":"block"}).appendTo(A);var s=f("<div>").css(w).css({zIndex:1,opacity:1}).appendTo((C?B:A)).clone().appendTo((C?D:G)).css("opacity",g).clone().appendTo((C?A:B)).css("opacity",1).hide().clone().appendTo((C?G:D)).css("opacity",g).hide()}else{if(a){var v=f("<div>").css({position:"absolute",top:0,left:C?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(l.get(p)).clone().css({position:"absolute",height:"100%",right:C?"auto":0,left:C?0:"auto"})).appendTo(q).hide();var z=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(q).hide();var F=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-z.height()*d/2}).attr({width:z.width(),height:z.height()*(d+1)}).appendTo(z);var y=F.clone().css({top:0,zIndex:1}).attr({width:z.width(),height:z.height()}).appendTo(z);var u=F.get(0).getContext("2d");var r=y.get(0).getContext("2d")}else{i.stop(true).animate({left:(p?-p+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!k&&a){var B=u;var A=r;var G=E;var D=t}j=new h(C,x,B,A,G,D,z,F,y,v,function(){i.css({left:-p+"00%"}).show();q.remove();j=0});return p};function c(E,q,v,t,s,C,B,A,z,r,p){numSlices=s/2,widthScale=s/z,heightScale=(1-C)/numSlices;E.clearRect(0,0,p.width(),p.height());for(var o=0;o<numSlices+widthScale;o++){var u=(B?o*n.width/s+n.width/2:(numSlices-o)*n.width/s);var F=v+(B?2:-2)*o,D=t+r*heightScale*o/2;if(u<0){u=0}if(F<0){F=0}if(D<0){D=0}E.drawImage(q,u,0,2.5,n.height,F,D,2,r*(1-(heightScale*o)))}E.save();E.beginPath();E.moveTo(v,t);E.lineTo(v+(B?2:-2)*(numSlices+widthScale),t+r*heightScale*(numSlices+widthScale)/2);E.lineTo(v+(B?2:-2)*(numSlices+widthScale),r*(1-heightScale*(numSlices+widthScale))+t+r*heightScale*(numSlices+widthScale)/2);E.lineTo(v,t+r);E.closePath();E.clip();E.fillStyle="rgba(0,0,0,"+Math.round(A*100)/100+")";E.fillRect(0,0,p.width(),p.height());E.restore()}function h(y,q,A,z,w,v,t,u,s,x,C){if(k){if(!y){q*=-1;var B=z;z=A;A=B;B=v;v=w;w=B}w.css("transform","rotateY("+q+"deg)").children().fadeIn(e/2);A.children().fadeOut(e/2,function(){v.show().css("transform","rotateY(0deg)").children().fadeOut(e/2);z.children().fadeIn(e/2)})}else{if(a){t.show();var p=new Date;var r=true;var o=setInterval(function(){var D=(new Date-p)/e;if(D>1){D=1}var G=jQuery.easing.easeInOutQuint(1,D,0,1,1),F=jQuery.easing.easeInOutCubic(1,D,0,1,1),J=!y;if(D<0.5){G*=2;F*=2;var E=w}else{J=y;G=(1-G)*2;F=(1-F)*2;var E=v}var H=t.height()*d/2,L=(1-G)*t.width()/2,K=1+F*d,I=t.width()/2;c(A,E,I,H,L,K,J,F*g,I,t.height(),u);if(r){x.show();r=false}z.clearRect(0,0,s.width(),s.height());z.fillStyle="rgba(0,0,0,"+(g-F*g)+")";z.fillRect(J?I:0,0,s.width()/2,s.height());if(D==1){clearInterval(o)}},15)}}setTimeout(C,e)}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.4
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"book",prev:"",next:"",duration:20*100,delay:20*100,width:970,height:400,autoPlay:true,playPause:true,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"move",controls:true,onBeforeStep:0,images:[{src:"./1.jpg",title:"Habitacion simple del Hotel",descr:"Esta es una bonita habitacion simple en nuestro hotel en el cusco",href:"www.google.com",target:"_blank"},{src:"./2.jpg",title:"Puerta principal del hotel",descr:"Bienvenidos a nuestro hotel, gracias por su visita",href:"www.google.com",target:"_blank"},{src:"./3.jpg",title:"asdfasdasd",descr:"descrialpndsmandas d as dm as d asdas d",href:"www.google.com",target:"_blank"},{src:"./4.jpg",title:"tottutuan mnsdbjnas",descr:"askdmnasmndsa as mdn masdmas d as d asd as d asdasdasdas asdas.",href:"www.google.com",target:"_blank"}]});