!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("orson-ui",["react"],t):"object"==typeof exports?exports["orson-ui"]=t(require("react")):e["orson-ui"]=t(e.React)}(self,(e=>(()=>{var t={774:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!i(u))return!1;var l=e[u],f=t[u];if(!1===(o=r?r.call(n,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},359:t=>{"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";n.r(o),n.d(o,{Button:()=>Bt});var e=n(359),t=n.n(e),r=function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var a=n(774),i=n.n(a),c="-ms-",u="-moz-",l="-webkit-",f="comm",p="rule",d="decl",h="@import",v="@keyframes",g="@layer",m=Math.abs,y=String.fromCharCode,b=Object.assign;function S(e){return e.trim()}function w(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function x(e,t){return e.indexOf(t)}function I(e,t){return 0|e.charCodeAt(t)}function P(e,t,r){return e.slice(t,r)}function A(e){return e.length}function E(e){return e.length}function O(e,t){return t.push(e),e}function k(e,t){return e.filter((function(e){return!w(e,t)}))}var $=1,j=1,R=0,_=0,N=0,T="";function D(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:$,column:j,length:a,return:"",siblings:i}}function F(e,t){return b(D("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function z(e){for(;e.root;)e=F(e.root,{children:[e]});O(e,e.siblings)}function M(){return N=_>0?I(T,--_):0,j--,10===N&&(j=1,$--),N}function G(){return N=_<R?I(T,_++):0,j++,10===N&&(j=1,$++),N}function B(){return I(T,_)}function L(){return _}function W(e,t){return P(T,e,t)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return S(W(_-1,V(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(N=B())&&N<33;)G();return Y(e)>2||Y(N)>3?"":" "}function U(e,t){for(;--t&&G()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return W(e,L()+(t<6&&32==B()&&32==G()))}function V(e){for(;G();)switch(N){case e:return _;case 34:case 39:34!==e&&39!==e&&V(N);break;case 40:41===e&&V(e);break;case 92:G()}return _}function Z(e,t){for(;G()&&e+N!==57&&(e+N!==84||47!==B()););return"/*"+W(t,_-1)+"*"+y(47===e?e:G())}function J(e){for(;!Y(B());)G();return W(e,_)}function K(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Q(e,t,r,n){switch(e.type){case g:if(e.children.length)break;case h:case d:return e.return=e.return||e.value;case f:return"";case v:return e.return=e.value+"{"+K(e.children,n)+"}";case p:if(!A(e.value=e.props.join(",")))return""}return A(r=K(e.children,n))?e.return=e.value+"{"+r+"}":""}function X(e,t,r){switch(function(e,t){return 45^I(e,0)?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}(e,t)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return u+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+u+e+c+e+e;case 5936:switch(I(e,t+11)){case 114:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+c+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+c+e+e;case 6165:return l+e+c+"flex-"+e+e;case 5187:return l+e+C(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+c+"flex-$1$2")+e;case 5443:return l+e+c+"flex-item-"+C(e,/flex-|-self/g,"")+(w(e,/flex-|baseline/)?"":c+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return l+e+c+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+c+C(e,"shrink","negative")+e;case 5292:return l+e+c+C(e,"basis","preferred-size")+e;case 6060:return l+"box-"+C(e,"-grow","")+l+e+c+C(e,"grow","positive")+e;case 4554:return l+C(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+c+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!w(e,/flex-|baseline/))return c+"grid-column-align"+P(e,t)+e;break;case 2592:case 3360:return c+C(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,w(e.props,/grid-\w+-end/)}))?~x(e+(r=r[t].value),"span")?e:c+C(e,"-start","")+e+c+"grid-row-span:"+(~x(r,"span")?w(r,/\d+/):+w(r,/\d+/)-+w(e,/\d+/))+";":c+C(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return w(e.props,/grid-\w+-start/)}))?e:c+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(I(e,t+1)){case 109:if(45!==I(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+u+(108==I(e,t+3)?"$3":"$2-$3"))+e;case 115:return~x(e,"stretch")?X(C(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,a,i){return c+r+":"+n+i+(o?c+r+"-span:"+(s?a:+a-+n)+i:"")+e}));case 4949:if(121===I(e,t+6))return C(e,":",":"+l)+e;break;case 6444:switch(I(e,45===I(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===I(e,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+c+"$2box$3")+e;case 100:return C(e,":",":"+c)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:return void(e.return=X(e.value,e.length,r));case v:return K([F(e,{value:C(e.value,"@","@"+l)})],n);case p:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(w(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":z(F(e,{props:[C(t,/:(read-\w+)/,":"+u+"$1")]})),z(F(e,{props:[t]})),b(e,{props:k(r,n)});break;case"::placeholder":z(F(e,{props:[C(t,/:(plac\w+)/,":"+l+"input-$1")]})),z(F(e,{props:[C(t,/:(plac\w+)/,":"+u+"$1")]})),z(F(e,{props:[C(t,/:(plac\w+)/,c+"input-$1")]})),z(F(e,{props:[t]})),b(e,{props:k(r,n)})}return""}))}}function te(e){return function(e){return T="",e}(re("",null,null,null,[""],e=function(e){return $=j=1,R=A(T=e),_=0,[]}(e),0,[0],e))}function re(e,t,r,n,o,s,a,i,c){for(var u=0,l=0,f=a,p=0,d=0,h=0,v=1,g=1,m=1,b=0,S="",w=o,P=s,E=n,k=S;g;)switch(h=b,b=G()){case 40:if(108!=h&&58==I(k,f-1)){-1!=x(k+=C(q(b),"&","&\f"),"&\f")&&(m=-1);break}case 34:case 39:case 91:k+=q(b);break;case 9:case 10:case 13:case 32:k+=H(h);break;case 92:k+=U(L()-1,7);continue;case 47:switch(B()){case 42:case 47:O(oe(Z(G(),L()),t,r,c),c);break;default:k+="/"}break;case 123*v:i[u++]=A(k)*m;case 125*v:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+l:-1==m&&(k=C(k,/\f/g,"")),d>0&&A(k)-f&&O(d>32?se(k+";",n,r,f-1,c):se(C(k," ","")+";",n,r,f-2,c),c);break;case 59:k+=";";default:if(O(E=ne(k,t,r,u,l,o,i,S,w=[],P=[],f,s),s),123===b)if(0===l)re(k,t,E,E,w,s,f,i,P);else switch(99===p&&110===I(k,3)?100:p){case 100:case 108:case 109:case 115:re(e,E,E,n&&O(ne(e,E,E,0,0,o,i,S,o,w=[],f,P),P),o,P,f,i,n?w:P);break;default:re(k,E,E,E,[""],P,0,i,P)}}u=l=d=0,v=m=1,S=k="",f=a;break;case 58:f=1+A(k),d=h;default:if(v<1)if(123==b)--v;else if(125==b&&0==v++&&125==M())continue;switch(k+=y(b),b*v){case 38:m=l>0?1:(k+="\f",-1);break;case 44:i[u++]=(A(k)-1)*m,m=1;break;case 64:45===B()&&(k+=q(G())),p=B(),l=f=A(S=k+=J(L())),b++;break;case 45:45===h&&2==A(k)&&(v=0)}}return s}function ne(e,t,r,n,o,s,a,i,c,u,l,f){for(var d=o-1,h=0===o?s:[""],v=E(h),g=0,y=0,b=0;g<n;++g)for(var w=0,x=P(e,d+1,d=m(y=a[g])),I=e;w<v;++w)(I=S(y>0?h[w]+" "+x:C(x,/&\f/g,h[w])))&&(c[b++]=I);return D(e,t,r,0===o?p:i,c,u,l,f)}function oe(e,t,r,n){return D(e,t,r,f,y(N),P(e,2,-2),0,n)}function se(e,t,r,n,o){return D(e,t,r,d,P(e,0,n),P(e,n+1,-1),n,o)}var ae={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ie="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ce="undefined"!=typeof window&&"HTMLElement"in window,ue=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),le=(new Set,Object.freeze([])),fe=Object.freeze({});var pe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),de=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,he=/(^-|-$)/g;function ve(e){return e.replace(de,"-").replace(he,"")}var ge=/(a)(d)/gi,me=function(e){return String.fromCharCode(e+(e>25?39:97))};function ye(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=me(t%52)+r;return(me(t%52)+r).replace(ge,"$1-$2")}var be,Se=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},we=function(e){return Se(5381,e)};function Ce(e){return"string"==typeof e&&!0}var xe="function"==typeof Symbol&&Symbol.for,Ie=xe?Symbol.for("react.memo"):60115,Pe=xe?Symbol.for("react.forward_ref"):60112,Ae={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ee={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Oe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ke=((be={})[Pe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},be[Ie]=Oe,be);function $e(e){return("type"in(t=e)&&t.type.$$typeof)===Ie?Oe:"$$typeof"in e?ke[e.$$typeof]:Ae;var t}var je=Object.defineProperty,Re=Object.getOwnPropertyNames,_e=Object.getOwnPropertySymbols,Ne=Object.getOwnPropertyDescriptor,Te=Object.getPrototypeOf,De=Object.prototype;function Fe(e,t,r){if("string"!=typeof t){if(De){var n=Te(t);n&&n!==De&&Fe(e,n,r)}var o=Re(t);_e&&(o=o.concat(_e(t)));for(var s=$e(e),a=$e(t),i=0;i<o.length;++i){var c=o[i];if(!(c in Ee||r&&r[c]||a&&c in a||s&&c in s)){var u=Ne(t,c);try{je(e,c,u)}catch(e){}}}}return e}function ze(e){return"function"==typeof e}function Me(e){return"object"==typeof e&&"styledComponentId"in e}function Ge(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Be(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Le(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function We(e,t,r){if(void 0===r&&(r=!1),!r&&!Le(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=We(e[n],t[n]);else if(Le(t))for(var n in t)e[n]=We(e[n],t[n]);return e}function Ye(e,t){Object.defineProperty(e,"toString",{value:t})}function qe(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var He=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw qe(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),Ue=new Map,Ve=new Map,Ze=1,Je=function(e){if(Ue.has(e))return Ue.get(e);for(;Ve.has(Ze);)Ze++;var t=Ze++;return Ue.set(e,t),Ve.set(t,e),t},Ke=function(e,t){Ze=t+1,Ue.set(e,t),Ve.set(t,e)},Qe="style[".concat(ie,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Xe=new RegExp("^".concat(ie,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),et=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},tt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(Xe);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(Ke(l,u),et(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function rt(){return n.nc}var nt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ie,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(ie,"active"),n.setAttribute("data-styled-version","6.1.1");var a=rt();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},ot=function(){function e(e){this.element=nt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw qe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),st=function(){function e(e){this.element=nt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),at=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),it=ce,ct={isServer:!ce,useCSSOMInjection:!ue},ut=function(){function e(e,t,n){void 0===e&&(e=fe),void 0===t&&(t={});var o=this;this.options=r(r({},ct),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ce&&it&&(it=!1,function(e){for(var t=document.querySelectorAll(Qe),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(ie)&&(tt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Ye(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return Ve.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),a=t.getGroup(r);if(void 0===s||0===a.length)return"continue";var i="".concat(ie,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},s=0;s<r;s++)o(s);return n}(o)}))}return e.registerId=function(e){return Je(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(r(r({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new at(r):t?new ot(r):new st(r)}(this.options),new He(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Je(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Je(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Je(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lt=/&/g,ft=/^\s*\/\/.*$/gm;function pt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=pt(e.children,t)),e}))}function dt(e){var t,r,n,o=void 0===e?fe:e,s=o.options,a=void 0===s?fe:s,i=o.plugins,c=void 0===i?le:i,u=function(e,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(lt,r).replace(n,u))})),a.prefix&&l.push(ee),l.push(Q);var f=function(e,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(ft,""),u=te(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=pt(u,a.namespace));var f,p,d,h=[];return K(u,(f=l.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})),p=E(f),function(e,t,r,n){for(var o="",s=0;s<p;s++)o+=f[s](e,t,r,n)||"";return o})),h};return f.hash=c.length?c.reduce((function(e,t){return t.name||qe(15),Se(e,t.name)}),5381).toString():"",f}var ht=new ut,vt=dt(),gt=t().createContext({shouldForwardProp:void 0,styleSheet:ht,stylis:vt}),mt=(gt.Consumer,t().createContext(void 0));function yt(){return(0,e.useContext)(gt)}function bt(r){var n=(0,e.useState)(r.stylisPlugins),o=n[0],s=n[1],a=yt().styleSheet,c=(0,e.useMemo)((function(){var e=a;return r.sheet?e=r.sheet:r.target&&(e=e.reconstructWithOptions({target:r.target},!1)),r.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[r.disableCSSOMInjection,r.sheet,r.target,a]),u=(0,e.useMemo)((function(){return dt({options:{namespace:r.namespace,prefix:r.enableVendorPrefixes},plugins:o})}),[r.enableVendorPrefixes,r.namespace,o]);(0,e.useEffect)((function(){i()(o,r.stylisPlugins)||s(r.stylisPlugins)}),[r.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:r.shouldForwardProp,styleSheet:c,stylis:u}}),[r.shouldForwardProp,c,u]);return t().createElement(gt.Provider,{value:l},t().createElement(mt.Provider,{value:u},r.children))}var St=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=vt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ye(this,(function(){throw qe(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=vt),this.name+e.hash},e}(),wt=function(e){return e>="A"&&e<="Z"};function Ct(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;wt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var xt=function(e){return null==e||!1===e||""===e},It=function(e){var t,r,n=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!xt(a)&&(Array.isArray(a)&&a.isCss||ze(a)?n.push("".concat(Ct(o),":"),a,";"):Le(a)?n.push.apply(n,s(s(["".concat(o," {")],It(a),!1),["}"],!1)):n.push("".concat(Ct(o),": ").concat((t=o,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ae||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Pt(e,t,r,n){return xt(e)?[]:Me(e)?[".".concat(e.styledComponentId)]:ze(e)?!ze(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Pt(e(t),t,r,n):e instanceof St?r?(e.inject(r,n),[e.getName(n)]):[e]:Le(e)?It(e):Array.isArray(e)?Array.prototype.concat.apply(le,e.map((function(e){return Pt(e,t,r,n)}))):[e.toString()];var o}function At(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(ze(r)&&!Me(r))return!1}return!0}var Et=we("6.1.1"),Ot=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&At(e),this.componentId=t,this.baseHash=Se(Et,t),this.baseStyle=r,ut.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ge(n,this.staticRulesId);else{var o=Be(Pt(this.rules,e,t,r)),s=ye(Se(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=Ge(n,s),this.staticRulesId=s}else{for(var i=Se(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=Be(Pt(l,e,t,r));i=Se(i,f+u),c+=f}}if(c){var p=ye(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=Ge(n,p)}}return n},e}(),kt=t().createContext(void 0);kt.Consumer;var $t={};function jt(n,o,s){var a=Me(n),i=n,c=!Ce(n),u=o.attrs,l=void 0===u?le:u,f=o.componentId,p=void 0===f?function(e,t){var r="string"!=typeof e?"sc":ve(e);$t[r]=($t[r]||0)+1;var n="".concat(r,"-").concat(function(e){return ye(we(e)>>>0)}("6.1.1"+r+$t[r]));return t?"".concat(t,"-").concat(n):n}(o.displayName,o.parentComponentId):f,d=o.displayName,h=void 0===d?function(e){return Ce(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(n):d,v=o.displayName&&o.componentId?"".concat(ve(o.displayName),"-").concat(o.componentId):o.componentId||p,g=a&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=o.shouldForwardProp;if(a&&i.shouldForwardProp){var y=i.shouldForwardProp;if(o.shouldForwardProp){var b=o.shouldForwardProp;m=function(e,t){return y(e,t)&&b(e,t)}}else m=y}var S=new Ot(s,v,a?i.componentStyle:void 0);function w(n,o){return function(n,o,s){var a=n.attrs,i=n.componentStyle,c=n.defaultProps,u=n.foldedComponentIds,l=n.styledComponentId,f=n.target,p=t().useContext(kt),d=yt(),h=n.shouldForwardProp||d.shouldForwardProp,v=function(e,t,n){for(var o,s=r(r({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var i=ze(o=e[a])?o(s):o;for(var c in i)s[c]="className"===c?Ge(s[c],i[c]):"style"===c?r(r({},s[c]),i[c]):i[c]}return t.className&&(s.className=Ge(s.className,t.className)),s}(a,o,function(e,t,r){return void 0===r&&(r=fe),e.theme!==r.theme&&e.theme||t||r.theme}(o,p,c)||fe),g=v.as||f,m={};for(var y in v)void 0===v[y]||"$"===y[0]||"as"===y||"theme"===y||("forwardedAs"===y?m.as=v.forwardedAs:h&&!h(y,g)||(m[y]=v[y]));var b=function(e,t){var r=yt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,v),S=Ge(u,l);return b&&(S+=" "+b),v.className&&(S+=" "+v.className),m[Ce(g)&&!pe.has(g)?"class":"className"]=S,m.ref=s,(0,e.createElement)(g,m)}(C,n,o)}w.displayName=h;var C=t().forwardRef(w);return C.attrs=g,C.componentStyle=S,C.displayName=h,C.shouldForwardProp=m,C.foldedComponentIds=a?Ge(i.foldedComponentIds,i.styledComponentId):"",C.styledComponentId=v,C.target=a?i.target:n,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)We(e,o[n],!0);return e}({},i.defaultProps,e):e}}),Ye(C,(function(){return".".concat(C.styledComponentId)})),c&&Fe(C,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Rt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}new Set;var _t=function(e){return Object.assign(e,{isCss:!0})};function Nt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ze(e)||Le(e))return _t(Pt(Rt(le,s([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Pt(n):_t(Pt(Rt(n,t)))}function Tt(e,t,n){if(void 0===n&&(n=fe),!t)throw qe(1,t);var o=function(r){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];return e(t,n,Nt.apply(void 0,s([r],o,!1)))};return o.attrs=function(o){return Tt(e,t,r(r({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return Tt(e,t,r(r({},n),o))},o}var Dt=function(e){return Tt(jt,e)},Ft=Dt;pe.forEach((function(e){Ft[e]=Dt(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=At(e),ut.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Be(Pt(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&ut.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=rt(),n=Be([r&&'nonce="'.concat(r,'"'),"".concat(ie,'="true"'),"".concat("data-styled-version",'="').concat("6.1.1",'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw qe(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw qe(2);var o=((n={})[ie]="",n["data-styled-version"]="6.1.1",n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),s=rt();return s&&(o.nonce=s),[t().createElement("style",r({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ut({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw qe(2);return t().createElement(bt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw qe(3)}}(),"__sc-".concat(ie,"__");var zt,Mt,Gt,Bt=function(e){var r=e.onClick,n=e.children;return t().createElement(Lt,{onClick:r},n)},Lt=Ft.button(Gt||(zt=["\n    position: relative;\n    user-select: none;\n    background: blue;\n"],Mt=["\n    position: relative;\n    user-select: none;\n    background: blue;\n"],Object.defineProperty?Object.defineProperty(zt,"raw",{value:Mt}):zt.raw=Mt,Gt=zt))})(),o})()));