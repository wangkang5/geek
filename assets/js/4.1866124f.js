(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{389:function(t,e,n){},390:function(t,e,n){},392:function(t,e,n){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",o="day",a="week",u="month",c="quarter",f="year",h="date",l="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,o=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:f,w:a,d:o,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",_={};_[$]=m;var y=function(t){return t instanceof b},M=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();_[s]&&(i=s),n&&(_[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;_[a]=e,i=a}return!r&&i&&($=i),i||!r&&$},S=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},D=g;D.l=M,D.i=y,D.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return D},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return S(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<S(t)},v.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!D.u(e)||e,l=D.p(t),p=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(o)},d=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case f:return c?p(1,0):p(31,11);case u:return c?p(1,v):p(0,v+1);case a:var _=this.$locale().weekStart||0,y=(m<_?m+7:m)-_;return p(c?g-y:g+(6-y),v);case o:case h:return d($+"Hours",0);case s:return d($+"Minutes",1);case i:return d($+"Seconds",2);case r:return d($+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=D.p(t),l="set"+(this.$u?"UTC":""),p=(a={},a[o]=l+"Date",a[h]=l+"Date",a[u]=l+"Month",a[f]=l+"FullYear",a[s]=l+"Hours",a[i]=l+"Minutes",a[r]=l+"Seconds",a[n]=l+"Milliseconds",a)[c],d=c===o?this.$D+(e-this.$W):e;if(c===u||c===f){var m=this.clone().set(h,1);m.$d[p](d),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](d);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[D.p(t)]()},v.add=function(n,c){var h,l=this;n=Number(n);var p=D.p(c),d=function(t){var e=S(l);return D.w(e.date(e.date()+Math.round(t*n)),l)};if(p===u)return this.set(u,this.$M+n);if(p===f)return this.set(f,this.$y+n);if(p===o)return d(1);if(p===a)return d(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[p]||1,v=this.$d.getTime()+n*m;return D.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,o=this.$m,a=this.$M,u=n.weekdays,c=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},h=function(t){return D.s(s%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,u,2),ddd:f(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:D.s(s,2,"0"),h:h(1),hh:h(2),a:p(s,o,!0),A:p(s,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(d,(function(t,e){return e||m[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,l){var p,d=D.p(h),m=S(n),v=(m.utcOffset()-this.utcOffset())*t,g=this-m,$=D.m(this,m);return $=(p={},p[f]=$/12,p[u]=$,p[c]=$/3,p[a]=(g-v)/6048e5,p[o]=(g-v)/864e5,p[s]=g/e,p[i]=g/t,p[r]=g/1e3,p)[d]||g,l?$:D.a($)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return _[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return D.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),O=b.prototype;return S.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",o],["$M",u],["$y",f],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,b,S),t.$i=!0),S},S.locale=M,S.isDayjs=y,S.unix=function(t){return S(1e3*t)},S.en=_[$],S.Ls=_,S.p={},S}()},393:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var o=i.prototype;s.utc=function(t){var e={date:t,utc:!0,args:arguments};return new i(e)},o.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=o.utcOffset;o.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===s?o:-o}(r)))return this;var o=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=o,a.$u=0===r,a;if(0!==r){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+u,t)).$offset=o,a.$x.$localOffset=u}else a=this.utc();return a};var f=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var h=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var l=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var r=this.local(),i=s(t).local();return l.call(r,i,e,n)}}}()},394:function(t,e,n){"use strict";n(389)},395:function(t,e,n){"use strict";n(390)},396:function(t,e,n){"use strict";var r=n(10),i=n(1),s=n(2),o=n(100),a=n(19),u=n(14),c=n(141),f=n(33),h=n(99),l=n(222),p=n(4),d=n(52).f,m=n(40).f,v=n(15).f,g=n(397),$=n(232).trim,_=i.Number,y=_.prototype,M=i.TypeError,S=s("".slice),D=s("".charCodeAt),b=function(t){var e=l(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,i,s,o,a,u,c=l(t,"number");if(h(c))throw M("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=$(c),43===(e=D(c,0))||45===e){if(88===(n=D(c,2))||120===n)return NaN}else if(48===e){switch(D(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(o=(s=S(c,2)).length,a=0;a<o;a++)if((u=D(s,a))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,w=function(t){var e=arguments.length<1?0:_(b(t)),n=this;return f(y,n)&&p((function(){g(n)}))?c(Object(e),n,w):e},T=r?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;T.length>C;C++)u(_,x=T[C])&&!u(w,x)&&v(w,x,m(_,x));w.prototype=y,y.constructor=w,a(i,"Number",w)}},397:function(t,e,n){var r=n(2);t.exports=r(1..valueOf)},398:function(t,e,n){var r=n(230),i=n(223),s=n(399),o=n(403);t.exports=function(t,e){if(null==t)return{};var n=r(o(t),(function(t){return[t]}));return e=i(e),s(t,n,(function(t,n){return e(t,n[0])}))}},399:function(t,e,n){var r=n(146),i=n(400),s=n(140);t.exports=function(t,e,n){for(var o=-1,a=e.length,u={};++o<a;){var c=e[o],f=r(t,c);n(f,c)&&i(u,s(c,t),f)}return u}},400:function(t,e,n){var r=n(401),i=n(140),s=n(144),o=n(97),a=n(70);t.exports=function(t,e,n,u){if(!o(t))return t;for(var c=-1,f=(e=i(e,t)).length,h=f-1,l=t;null!=l&&++c<f;){var p=a(e[c]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(c!=h){var m=l[p];void 0===(d=u?u(m,p,l):void 0)&&(d=o(m)?m:s(e[c+1])?[]:{})}r(l,p,d),l=l[p]}return t}},401:function(t,e,n){var r=n(402),i=n(143),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var o=t[e];s.call(t,e)&&i(o,n)&&(void 0!==n||e in t)||r(t,e,n)}},402:function(t,e,n){var r=n(231);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},403:function(t,e,n){var r=n(224),i=n(404),s=n(406);t.exports=function(t){return r(t,s,i)}},404:function(t,e,n){var r=n(142),i=n(405),s=n(225),o=n(226),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,s(t)),t=i(t);return e}:o;t.exports=a},405:function(t,e,n){var r=n(229)(Object.getPrototypeOf,Object);t.exports=r},406:function(t,e,n){var r=n(227),i=n(407),s=n(145);t.exports=function(t){return s(t)?r(t,!0):i(t)}},407:function(t,e,n){var r=n(97),i=n(228),s=n(408),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return s(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&n.push(a);return n}},408:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},409:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(8),n(27),n(32);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,439,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(394),n(18)),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,o=(n(395),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(396),n(103)),u=n.n(a),c=n(398),f=n.n(c),h={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return f()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(i.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},415:function(t,e,n){},427:function(t,e,n){"use strict";n(415)},443:function(t,e,n){"use strict";n.r(e);n(101),n(5);var r=n(392),i=n.n(r),s=n(393),o=n.n(s),a=n(9),u=n(409);i.a.extend(o.a);var c={components:{NavigationIcon:a.n,ClockIcon:a.a,TagIcon:a.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return u.b},resolvePostDate:function(t){return i.a.utc(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},f=(n(427),n(18)),h=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("client-only",[n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}})]):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=h.exports}}]);