/*!CK:508755667!*//*1450513043,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WDC\/Y"]); }

__d('DisplayTimeEmbeddedVideoPlayButton',['CSS','DataStore','Event','cx','VideoPlayerExperiments'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={},n={register:function(o){var p=o.id;m[p]=j.listen(o,'click',function(){if(n.isClicked(o)){if(l.redesign||l.redesignplaybutton){h.removeClass(o,"_3alj");}else h.removeClass(o,"_5dz2");h.addClass(o,"_5dz0");i.set(o,'clicked',false);}else{h.removeClass(o,"_5dz0");if(l.redesign||l.redesignplaybutton){h.addClass(o,"_3alj");}else h.addClass(o,"_5dz2");i.set(o,'clicked',true);}});},unregister:function(o){var p=o.id;if(m.hasOwnProperty(p))m[p].remove();},isClicked:function(o){return i.get(o,'clicked',false);}};f.exports=n;},null);
__d('EmbeddedVideoPlayButton',['CSS','DisplayTimeEmbeddedVideoPlayButton','EventListener','VideoPlayerExperiments','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n,o,p){'use strict';this.$EmbeddedVideoPlayButton1=n;this.$EmbeddedVideoPlayButton2=o;if(p){this.$EmbeddedVideoPlayButton3=p.hiddenAfterFinish;this.$EmbeddedVideoPlayButton4=p.hiddenWhilePaused;this.$EmbeddedVideoPlayButton5=p.hiddenInFallback;}this.$EmbeddedVideoPlayButton6=false;this.$EmbeddedVideoPlayButton7=false;this.$EmbeddedVideoPlayButton8=false;var q=i.isClicked(this.$EmbeddedVideoPlayButton2);i.unregister(this.$EmbeddedVideoPlayButton2);n.addListener('beginPlayback',this.$EmbeddedVideoPlayButton9.bind(this));n.addListener('pausePlayback',this.$EmbeddedVideoPlayButton10.bind(this));n.addListener('buffering',this.$EmbeddedVideoPlayButton11.bind(this));n.addListener('buffered',this.$EmbeddedVideoPlayButton12.bind(this));n.addListener('finishPlayback',this.$EmbeddedVideoPlayButton13.bind(this));n.addListener('VideoChannelController/exitChannel',this.$EmbeddedVideoPlayButton14.bind(this));n.addListener('clickVideo',this.$EmbeddedVideoPlayButton15.bind(this));j.listen(this.$EmbeddedVideoPlayButton2,'click',this.$EmbeddedVideoPlayButton16.bind(this));n.addListener('stateChange',this.$EmbeddedVideoPlayButton17.bind(this));n.addListener('playRequested',this.$EmbeddedVideoPlayButton18.bind(this));if(p&&p.hiddenWhileLoading)this.$EmbeddedVideoPlayButton19();if(q)this.$EmbeddedVideoPlayButton16();}m.prototype.$EmbeddedVideoPlayButton17=function(){'use strict';if(this.$EmbeddedVideoPlayButton1.isState('fallback')){clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;if(this.$EmbeddedVideoPlayButton5||this.$EmbeddedVideoPlayButton1.getIsInChannel()){this.$EmbeddedVideoPlayButton21();}else{this.$EmbeddedVideoPlayButton22();this.$EmbeddedVideoPlayButton19();}}};m.prototype.$EmbeddedVideoPlayButton18=function(){'use strict';clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;if(this.$EmbeddedVideoPlayButton1.isState('fallback'))return;this.$EmbeddedVideoPlayButton21();};m.prototype.$EmbeddedVideoPlayButton13=function(){'use strict';clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;if(this.$EmbeddedVideoPlayButton3||this.$EmbeddedVideoPlayButton1.getIsInChannel()){this.$EmbeddedVideoPlayButton21();}else{this.$EmbeddedVideoPlayButton22();this.$EmbeddedVideoPlayButton19();}};m.prototype.$EmbeddedVideoPlayButton10=function(){'use strict';clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;this.$EmbeddedVideoPlayButton22();if(this.$EmbeddedVideoPlayButton4){this.$EmbeddedVideoPlayButton21();}else this.$EmbeddedVideoPlayButton19();};m.prototype.$EmbeddedVideoPlayButton14=function(){'use strict';if(!this.$EmbeddedVideoPlayButton1.isState('playing')){this.$EmbeddedVideoPlayButton22();this.$EmbeddedVideoPlayButton19();}};m.prototype.$EmbeddedVideoPlayButton15=function(){'use strict';if(this.$EmbeddedVideoPlayButton1.isState('fallback'))return;if(this.$EmbeddedVideoPlayButton7||this.$EmbeddedVideoPlayButton1.isState('ready')||this.$EmbeddedVideoPlayButton1.isState('loading'))this.$EmbeddedVideoPlayButton23();};m.prototype.$EmbeddedVideoPlayButton16=function(){'use strict';this.$EmbeddedVideoPlayButton1.clickVideo();};m.prototype.$EmbeddedVideoPlayButton9=function(){'use strict';clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;this.$EmbeddedVideoPlayButton24();if(this.$EmbeddedVideoPlayButton7){this.$EmbeddedVideoPlayButton11();}else this.$EmbeddedVideoPlayButton21();};m.prototype.$EmbeddedVideoPlayButton24=function(){'use strict';h.removeClass(this.$EmbeddedVideoPlayButton2,"_5dz0");if(k.redesign||k.redesignplaybutton){this.$EmbeddedVideoPlayButton8=true;h.addClass(this.$EmbeddedVideoPlayButton2,"_4ubd");h.addClass(this.$EmbeddedVideoPlayButton2,"_3alj");}else h.addClass(this.$EmbeddedVideoPlayButton2,"_5dz2");};m.prototype.$EmbeddedVideoPlayButton22=function(){'use strict';if(k.redesign||k.redesignplaybutton){this.$EmbeddedVideoPlayButton8=false;h.removeClass(this.$EmbeddedVideoPlayButton2,"_4ubd");h.removeClass(this.$EmbeddedVideoPlayButton2,"_3alj");}else h.removeClass(this.$EmbeddedVideoPlayButton2,"_5dz2");h.addClass(this.$EmbeddedVideoPlayButton2,"_5dz0");};m.prototype.$EmbeddedVideoPlayButton23=function(){'use strict';this.$EmbeddedVideoPlayButton24();this.$EmbeddedVideoPlayButton19();};m.prototype.$EmbeddedVideoPlayButton25=function(){'use strict';if(!this.$EmbeddedVideoPlayButton20)this.$EmbeddedVideoPlayButton20=setTimeout((function(){this.$EmbeddedVideoPlayButton20=0;if(this.$EmbeddedVideoPlayButton7||this.$EmbeddedVideoPlayButton1.isState('ready')||this.$EmbeddedVideoPlayButton1.isState('loading'))this.$EmbeddedVideoPlayButton23();}).bind(this),2000);};m.prototype.$EmbeddedVideoPlayButton11=function(){'use strict';this.$EmbeddedVideoPlayButton7=true;if(k.redesigndelayedspinner){this.$EmbeddedVideoPlayButton25();}else this.$EmbeddedVideoPlayButton23();};m.prototype.$EmbeddedVideoPlayButton12=function(){'use strict';clearTimeout(this.$EmbeddedVideoPlayButton20);this.$EmbeddedVideoPlayButton20=0;this.$EmbeddedVideoPlayButton7=false;this.$EmbeddedVideoPlayButton21();};m.prototype.$EmbeddedVideoPlayButton19=function(){'use strict';h.show(this.$EmbeddedVideoPlayButton2);};m.prototype.$EmbeddedVideoPlayButton21=function(){'use strict';h.hide(this.$EmbeddedVideoPlayButton2);};f.exports=m;},null);