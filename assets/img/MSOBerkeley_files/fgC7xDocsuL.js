/*!CK:4121171967!*//*1450286665,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dgad2"]); }

__d('TypeaheadRequireSelection',['Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._typeahead=j;}i.prototype.enable=function(){'use strict';var j=this._typeahead.getCore(),k=j.getElement().form;function l(){!j.getHiddenValue()&&j.reset();}l();this._subscription=j.subscribe('blur',l);if(k)this._eventListener=h.listen(k,'submit',l);};i.prototype.disable=function(){'use strict';this._typeahead.getCore().unsubscribe(this._subscription);this._subscription=null;if(this._eventListener){this._eventListener.remove();this._eventListener=null;}};Object.assign(i.prototype,{_subscription:null,_eventListener:null});f.exports=i;},null);