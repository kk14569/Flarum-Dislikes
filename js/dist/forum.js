(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o),t.d(o,{extend:()=>W});const e=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/app"];var r=t.n(n);const s=flarum.core.compat["forum/components/NotificationGrid"];var i=t.n(s);const a=flarum.core.compat["common/components/Button"];var c=t.n(a);const u=flarum.core.compat["forum/components/CommentPost"];var l=t.n(u);const f=flarum.core.compat["common/components/Link"];var d=t.n(f);const p=flarum.core.compat["common/helpers/punctuateSeries"];var v=t.n(p);const y=flarum.core.compat["common/helpers/username"];var h=t.n(y);const k=flarum.core.compat["common/helpers/icon"];var b=t.n(k);function g(t,o){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},g(t,o)}function _(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,g(t,o)}const P=flarum.core.compat["common/components/Modal"];var j=t.n(P);const x=flarum.core.compat["common/helpers/avatar"];var O=t.n(x);function S(){return S=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},S.apply(this,arguments)}function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function w(t){var o=function(t,o){if("object"!=N(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=N(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==N(o)?o:String(o)}function B(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,w(n.key),n)}}const M=flarum.core.compat["common/states/PaginatedListState"];var D=function(t){function o(o,e){return void 0===e&&(e=1),o.page=S({},o.page||{},{limit:10}),t.call(this,o,e,10)||this}var e,n;return _(o,t),e=o,(n=[{key:"type",get:function(){return"users"}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),o}(t.n(M)());const L=flarum.core.compat["common/components/LoadingIndicator"];var C=t.n(L),I=function(t){function o(){return t.apply(this,arguments)||this}_(o,t);var e=o.prototype;return e.oninit=function(o){t.prototype.oninit.call(this,o),this.state=new D({filter:{disliked:this.attrs.post.id()}}),this.state.refresh()},e.className=function(){return"PostDislikesModal Modal--small"},e.title=function(){return r().translator.trans("nodeloc-dislikes.forum.post_dislikes.title")},e.content=function(){var t=this;return m("[",null,m("div",{className:"Modal-body"},this.state.isInitialLoading()?m(C(),null):m("ul",{className:"PostDislikesModal-list"},this.state.getPages().map((function(t){return t.items.map((function(t){return m("li",null,m(d(),{href:r().route.user(t)},O()(t)," ",h()(t)))}))})))),this.state.hasNext()?m("div",{className:"Modal-footer"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m(c(),{className:"Button Button--block",onclick:function(){return t.state.loadNext()},loading:this.state.isLoadingNext()},r().translator.trans("nodeloc-dislikes.forum.post_dislikes.load_more_button"))))):null)},o}(j());const T=flarum.core.compat["forum/components/Notification"];var U=t.n(T);const F=flarum.core.compat["common/utils/string"];var R=function(t){function o(){return t.apply(this,arguments)||this}_(o,t);var e=o.prototype;return e.icon=function(){return"far fa-thumbs-down"},e.href=function(){return r().route.post(this.attrs.notification.subject())},e.content=function(){var t=this.attrs.notification.fromUser();return r().translator.trans("nodeloc-dislikes.forum.notifications.post_disliked_text",{user:t,count:1})},e.excerpt=function(){return(0,F.truncate)(this.attrs.notification.subject().contentPlain(),200)},o}(U());const z=flarum.core.compat["forum/components/UserPage"];var A=t.n(z);const E=flarum.core.compat["common/components/LinkButton"];var G=t.n(E);const H=flarum.core.compat["common/extenders"];var q=t.n(H);const J=flarum.core.compat["common/models/Post"];var K=t.n(J);const Q=flarum.core.compat["forum/components/PostsUserPage"];var V=function(t){function o(){return t.apply(this,arguments)||this}return _(o,t),o.prototype.loadResults=function(t){return r().store.find("posts",{filter:{type:"comment",dislikedBy:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},o}(t.n(Q)());const W=[(new(q().Routes)).add("user.dislikes","/u/:username/dislikes",V),new(q().Model)(K()).hasMany("dislikes").attribute("dislikesCount").attribute("canDislike")];r().initializers.add("nodeloc-dislikes",(function(){r().notificationComponents.postDisliked=R,(0,e.extend)(l().prototype,"actionItems",(function(t){var o=this.attrs.post;if(!o.isHidden()&&o.canDislike()){var e=o.dislikes(),n=r().session.user&&e&&e.some((function(t){return t===r().session.user}));t.add("dislike",m(c(),{className:"Button Button--link",onclick:function(){n=!n,o.save({isDisliked:n});var t=o.data.relationships.dislikes.data;t.some((function(o,e){if(o.id===r().session.user.id())return t.splice(e,1),!0})),n&&t.unshift({type:"users",id:r().session.user.id()})}},r().translator.trans(n?"nodeloc-dislikes.forum.post.undislike_link":"nodeloc-dislikes.forum.post.dislike_link")))}})),(0,e.extend)(l().prototype,"footerItems",(function(t){var o=this.attrs.post,e=o.dislikes();if(e&&e.length){var n=o.dislikesCount()>4,s=e.sort((function(t){return t===r().session.user?-1:1})).slice(0,n?3:4).map((function(t){return m(d(),{href:r().route.user(t)},t===r().session.user?r().translator.trans("nodeloc-dislikes.forum.post.you_text"):h()(t))}));if(n){var i=o.dislikesCount()-s.length,a=r().translator.trans("nodeloc-dislikes.forum.post.others_link",{count:i});r().forum.attribute("canSearchUsers")?s.push(m(c(),{className:"Button Button--ua-reset Button--text",onclick:function(t){t.preventDefault(),r().modal.show(I,{post:o})}},a)):s.push(m("span",null,a))}t.add("disliked",m("div",{className:"Post-dislikedBy"},b()("far fa-thumbs-down"),r().translator.trans("nodeloc-dislikes.forum.post.disliked_by"+(e[0]===r().session.user?"_self":"")+"_text",{count:s.length,users:v()(s)})))}})),(0,e.extend)(A().prototype,"navItems",(function(t){var o=this.user;t.add("dislikes",m(G(),{href:r().route("user.dislikes",{username:null==o?void 0:o.slug()}),icon:"far fa-thumbs-down"},r().translator.trans("nodeloc-dislikes.forum.user.dislikes_link")),88)})),(0,e.extend)(i().prototype,"notificationTypes",(function(t){t.add("postDisliked",{name:"postDisliked",icon:"far fa-thumbs-down",label:r().translator.trans("nodeloc-dislikes.forum.settings.notify_post_disliked_label")})}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map