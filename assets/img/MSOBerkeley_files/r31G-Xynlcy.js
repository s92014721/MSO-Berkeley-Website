/*!CK:235114604!*//*1450322360,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["baw4B"]); }

__d("UFITracking",["Bootloader"],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){h.loadModules(["DOM","collectDataAttributes"],function(l,m){k.forEach(function(n){var o=l.scry(document.body,n);if(!o||o.link_data)return;var p=m(o,['ft']).ft;if(Object.keys(p).length){var q=l.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(p)});o.appendChild(q);}});});}var j={addAllLinkData:function(){i(['form.commentable_item']);},addAllLinkDataForQuestion:function(){i(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};f.exports=j;},null);