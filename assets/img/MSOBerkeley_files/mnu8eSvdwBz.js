/*!CK:1664944670!*//*1449710894,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pa7wA"]); }

__d('MercuryThreadlistRowContainer.react',['immutable','ImmutableObject','MercuryParticipants','React','StoreAndPropBasedStateMixin','shallowEqual'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=k.PropTypes,o=k.createClass({displayName:'MercuryThreadlistRowContainer',mixins:[l(j)],propTypes:{ChildClass:n.func.isRequired,thread:n.instanceOf(i).isRequired,viewer:n.string.isRequired},statics:{calculateState:function(p){return {participants:h.Map(h.Seq(p.thread.participants).map(function(q){return [q,j.getOrFetch(q)];}))};}},shouldComponentUpdate:function(p,q){return (!m(p,this.props)||!h.is(q.participants,this.state.participants));},render:function(){var p=this.props,q=p.ChildClass,r=babelHelpers.objectWithoutProperties(p,['ChildClass']);return (k.createElement(q,babelHelpers._extends({},r,{participants:this.state.participants})));}});f.exports=o;},null);