(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{389:function(t,e,n){},390:function(t,e,n){},391:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(39),n(98),n(102),n(233);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^(https?:|mailto:|tel:)/;function a(t){return o.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(r),n=e?e[0]:"",o=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return s.test(o)?t:o+".html"+n}function f(t,e,n){if(!t)return n;for(var r,i=e;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||n}},392:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",u="month",c="quarter",l="year",f="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,o=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:a,d:o,D:f,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",_={};_[$]=v;var y=function(t){return t instanceof O},b=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,i=a}return!r&&i&&($=i),i||!r&&$},S=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},M=m;M.l=b,M.i=y,M.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=b(t.locale,null,!0),this.parse(t)}var g=v.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return M},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return S(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<S(t)},g.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,c=!!M.u(e)||e,h=M.p(t),d=function(t,e){var r=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(o)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,m=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case l:return c?d(1,0):d(31,11);case u:return c?d(1,g):d(0,g+1);case a:var _=this.$locale().weekStart||0,y=(v<_?v+7:v)-_;return d(c?m-y:m+(6-y),g);case o:case f:return p($+"Hours",0);case s:return p($+"Minutes",1);case i:return p($+"Seconds",2);case r:return p($+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var a,c=M.p(t),h="set"+(this.$u?"UTC":""),d=(a={},a[o]=h+"Date",a[f]=h+"Date",a[u]=h+"Month",a[l]=h+"FullYear",a[s]=h+"Hours",a[i]=h+"Minutes",a[r]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===l){var v=this.clone().set(f,1);v.$d[d](p),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[M.p(t)]()},g.add=function(n,c){var f,h=this;n=Number(n);var d=M.p(c),p=function(t){var e=S(h);return M.w(e.date(e.date()+Math.round(t*n)),h)};if(d===u)return this.set(u,this.$M+n);if(d===l)return this.set(l,this.$y+n);if(d===o)return p(1);if(d===a)return p(7);var v=(f={},f[i]=t,f[s]=e,f[r]=1e3,f)[d]||1,g=this.$d.getTime()+n*v;return M.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,l=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},f=function(t){return M.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:l(n.monthsShort,a,c,3),MMMM:l(c,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:M.s(s,2,"0"),h:f(1),hh:f(2),a:d(s,o,!0),A:d(s,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||v[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,f,h){var d,p=M.p(f),v=S(n),g=(v.utcOffset()-this.utcOffset())*t,m=this-v,$=M.m(this,v);return $=(d={},d[l]=$/12,d[u]=$,d[c]=$/3,d[a]=(m-g)/6048e5,d[o]=(m-g)/864e5,d[s]=m/e,d[i]=m/t,d[r]=m/1e3,d)[p]||m,h?$:M.a($)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return _[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return M.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},v}(),D=O.prototype;return S.prototype=D,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",u],["$y",l],["$D",f]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,O,S),t.$i=!0),S},S.locale=b,S.isDayjs=y,S.unix=function(t){return S(1e3*t)},S.en=_[$],S.Ls=_,S.p={},S}()},393:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var o=i.prototype;s.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},o.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=o.utcOffset;o.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===s?o:-o}(r)))return this;var o=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=o,a.$u=0===r,a;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+u,t)).$offset=o,a.$x.$localOffset=u}else a=this.utc();return a};var l=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var f=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var r=this.local(),i=s(t).local();return h.call(r,i,e,n)}}}()},394:function(t,e,n){"use strict";n(389)},395:function(t,e,n){"use strict";n(390)},396:function(t,e,n){"use strict";var r=n(10),i=n(1),s=n(2),o=n(100),a=n(19),u=n(14),c=n(141),l=n(33),f=n(99),h=n(222),d=n(4),p=n(52).f,v=n(40).f,g=n(15).f,m=n(397),$=n(232).trim,_=i.Number,y=_.prototype,b=i.TypeError,S=s("".slice),M=s("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:D(e)},D=function(t){var e,n,r,i,s,o,a,u,c=h(t,"number");if(f(c))throw b("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=$(c),43===(e=M(c,0))||45===e){if(88===(n=M(c,2))||120===n)return NaN}else if(48===e){switch(M(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(s=S(c,2)).length,a=0;a<o;a++)if((u=M(s,a))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:_(O(t)),n=this;return l(y,n)&&d((function(){m(n)}))?c(Object(e),n,x):e},T=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;T.length>k;k++)u(_,w=T[k])&&!u(x,w)&&g(x,w,v(_,w));x.prototype=y,y.constructor=x,a(i,"Number",x)}},397:function(t,e,n){var r=n(2);t.exports=r(1..valueOf)},398:function(t,e,n){var r=n(230),i=n(223),s=n(399),o=n(403);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),s(t,n,(function(t,n){return e(t,n[0])}))}},399:function(t,e,n){var r=n(146),i=n(400),s=n(140);t.exports=function(t,e,n){for(var o=-1,a=e.length,u={};++o<a;){var c=e[o],l=r(t,c);n(l,c)&&i(u,s(c,t),l)}return u}},400:function(t,e,n){var r=n(401),i=n(140),s=n(144),o=n(97),a=n(70);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,l=(e=i(e,t)).length,f=l-1,h=t;null!=h&&++c<l;){var d=a(e[c]),p=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(c!=f){var v=h[d];void 0===(p=u?u(v,d,h):void 0)&&(p=o(v)?v:s(e[c+1])?[]:{})}r(h,d,p),h=h[d]}return t}},401:function(t,e,n){var r=n(402),i=n(143),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},402:function(t,e,n){var r=n(231);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},403:function(t,e,n){var r=n(224),i=n(404),s=n(406);t.exports=function(t){return r(t,s,i)}},404:function(t,e,n){var r=n(142),i=n(405),s=n(225),o=n(226),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,s(t)),t=i(t);return e}:o;t.exports=a},405:function(t,e,n){var r=n(229)(Object.getPrototypeOf,Object);t.exports=r},406:function(t,e,n){var r=n(227),i=n(407),s=n(145);t.exports=function(t){return s(t)?r(t,!0):i(t)}},407:function(t,e,n){var r=n(97),i=n(228),s=n(408),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return s(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},408:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},409:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return h}));n(8),n(27),n(32);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,439,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(394),n(18)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(395),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(396),n(103)),u=n.n(a),c=n(398),l=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},410:function(t,e,n){},411:function(t,e,n){},412:function(t,e,n){},413:function(t,e,n){},414:function(t,e,n){},421:function(t,e,n){"use strict";var r=n(3),i=n(53).findIndex,s=n(148),o=!0;"findIndex"in[]&&Array(1).findIndex((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},422:function(t,e,n){"use strict";n(410)},423:function(t,e,n){"use strict";n(411)},424:function(t,e,n){"use strict";n(412)},425:function(t,e,n){"use strict";n(413)},426:function(t,e,n){"use strict";n(414)},440:function(t,e,n){"use strict";n.r(e);n(8),n(27),n(32),n(235),n(421);var r,i=n(391),s={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),r=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-r-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(422),n(18));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var u={components:{Sticker:Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),r=e.top-n.top;r<20?this.$el.scrollTop=this.$el.scrollTop+r-20:r+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var r=e&&document.getElementById(e);r&&window.scrollTo(0,a(r)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===r&&(r=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,s=function(e){t.activeIndex=e};i<n.length;i++){if(!(a(document.getElementById(n[i].slug))-50<e)){i||s(i);break}s(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},c=(n(423),Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,r){return n("div",{key:r,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===r}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(101),n(392)),f=n.n(l),h=n(393),d=n.n(h),p=n(9),v={name:"PostTag",props:{tag:{type:String,required:!0}}},g=(n(424),Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports);f.a.extend(d.a);var m={name:"PostMeta",components:{NavigationIcon:p.n,ClockIcon:p.a,PostTag:g},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return f.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},$=(n(425),{components:{Toc:c,PostMeta:Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(409).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,441))}}}),_=(n(426),Object(o.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=_.exports}}]);