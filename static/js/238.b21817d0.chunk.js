"use strict";(self.webpackChunkWebApp_Challenge_ReactJs=self.webpackChunkWebApp_Challenge_ReactJs||[]).push([[238],{9815:function(e,n,r){var t=r(2791),a="undefined"!==typeof r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product,o="undefined"!==typeof document;n.Z=o||a?t.useLayoutEffect:t.useEffect},8633:function(e,n,r){r.d(n,{h:function(){return a}});var t=r(2791).createContext(null),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):n||null};n.Z=t},2176:function(e){e.exports=function(e,n,r,t,a,o,i,l){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,t,a,o,i,l],u=0;(c=new Error(n.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},3573:function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];function t(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];var a=null;return n.forEach((function(e){if(null==a){var n=e.apply(void 0,r);null!=n&&(a=n)}})),a}return(0,o.default)(t)};var t,a=r(6054),o=(t=a)&&t.__esModule?t:{default:t};e.exports=n.default},6054:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){function n(n,r,t,a,o,i){var l=a||"<<anonymous>>",c=i||t;if(null==r[t])return n?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),f=6;f<s;f++)u[f-6]=arguments[f];return e.apply(void 0,[r,t,l,o,c].concat(u))}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r},e.exports=n.default},7913:function(e,n,r){r.d(n,{Z:function(){return W}});var t=r(4942),a=r(1413),o=r(5987),i=r(1694),l=r.n(i),c=(r(3573),r(2791)),s=r(239),u=r(3808);var f=r(3201),d=c.createContext(null);d.displayName="NavContext";var v=d,p=r(8633),x=c.createContext(null),m=r(1306),g=r(885),b=r(9007),y=r(5341),h=r(184),Z=["as","active","eventKey"];function w(e){var n=e.key,r=e.onClick,t=e.active,a=e.id,o=e.role,i=e.disabled,l=(0,c.useContext)(p.Z),s=(0,c.useContext)(v),u=(0,c.useContext)(x),f=t,d={role:o};if(s){o||"tablist"!==s.role||(d.role="tab");var g=s.getControllerId(null!=n?n:null),y=s.getControlledId(null!=n?n:null);d[(0,m.PB)("event-key")]=n,d.id=g||a,!(f=null==t&&null!=n?s.activeKey===n:t)&&(null!=u&&u.unmountOnExit||null!=u&&u.mountOnEnter)||(d["aria-controls"]=y)}return"tab"===d.role&&(d["aria-selected"]=f,f||(d.tabIndex=-1),i&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=(0,b.Z)((function(e){i||(null==r||r(e),null!=n&&l&&!e.isPropagationStopped()&&l(n,e))})),[d,{isActive:f}]}var N=c.forwardRef((function(e,n){var r=e.as,t=void 0===r?y.ZP:r,a=e.active,o=e.eventKey,i=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,Z),l=w(Object.assign({key:(0,p.h)(o,i.href),active:a},i)),c=(0,g.Z)(l,2),s=c[0],u=c[1];return s[(0,m.PB)("active")]=u.isActive,(0,h.jsx)(t,Object.assign({},i,s,{ref:n}))}));N.displayName="NavItem";var E=N,C=["as","onSelect","activeKey","role","onKeyDown"];var j=function(){},k=(0,m.PB)("event-key"),P=c.forwardRef((function(e,n){var r,t,a=e.as,o=void 0===a?"div":a,i=e.onSelect,l=e.activeKey,s=e.role,d=e.onKeyDown,g=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,C),b=(0,c.useReducer)((function(e){return!e}),!1)[1],y=(0,c.useRef)(!1),Z=(0,c.useContext)(p.Z),w=(0,c.useContext)(x);w&&(s=s||"tablist",l=w.activeKey,r=w.getControlledId,t=w.getControllerId);var N=(0,c.useRef)(null),E=function(e){var n=N.current;if(!n)return null;var r=(0,u.Z)(n,"[".concat(k,"]:not([aria-disabled=true])")),t=n.querySelector("[aria-selected=true]");if(!t||t!==document.activeElement)return null;var a=r.indexOf(t);if(-1===a)return null;var o=a+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},P=function(e,n){null!=e&&(null==i||i(e,n),null==Z||Z(e,n))};(0,c.useEffect)((function(){if(N.current&&y.current){var e=N.current.querySelector("[".concat(k,"][aria-selected=true]"));null==e||e.focus()}y.current=!1}));var O=(0,f.Z)(n,N);return(0,h.jsx)(p.Z.Provider,{value:P,children:(0,h.jsx)(v.Provider,{value:{role:s,activeKey:(0,p.h)(l),getControlledId:r||j,getControllerId:t||j},children:(0,h.jsx)(o,Object.assign({},g,{onKeyDown:function(e){if(null==d||d(e),w){var n;switch(e.key){case"ArrowLeft":case"ArrowUp":n=E(-1);break;case"ArrowRight":case"ArrowDown":n=E(1);break;default:return}n&&(e.preventDefault(),P(n.dataset[(0,m.$F)("EventKey")]||null,e),y.current=!0,b())}},ref:O,role:s}))})})}));P.displayName="Nav";var O=Object.assign(P,{Item:E}),S=r(162),R=r(5715),K=c.createContext(null);K.displayName="CardHeaderContext";var D=K,F=(0,r(6543).Z)("nav-item");r(7731),r(7904);r(5746),r(2803);r(9815),new WeakMap;var A=["onKeyDown"];var _=c.forwardRef((function(e,n){var r,t=e.onKeyDown,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,A),o=(0,y.FT)(Object.assign({tagName:"a"},a)),i=(0,g.Z)(o,1)[0],l=(0,b.Z)((function(e){i.onKeyDown(e),null==t||t(e)}));return(r=a.href)&&"#"!==r.trim()&&"button"!==a.role?(0,h.jsx)("a",Object.assign({ref:n},a,{onKeyDown:t})):(0,h.jsx)("a",Object.assign({ref:n},a,i,{onKeyDown:l}))}));_.displayName="Anchor";var I=_,T=["bsPrefix","className","as","active","eventKey"],M=c.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,i=e.as,c=void 0===i?I:i,s=e.active,u=e.eventKey,f=(0,o.Z)(e,T);r=(0,S.vE)(r,"nav-link");var d=w((0,a.Z)({key:(0,p.h)(u,f.href),active:s},f)),v=(0,g.Z)(d,2),x=v[0],m=v[1];return(0,h.jsx)(c,(0,a.Z)((0,a.Z)((0,a.Z)({},f),x),{},{ref:n,className:l()(t,r,f.disabled&&"disabled",m.isActive&&"active")}))}));M.displayName="NavLink",M.defaultProps={disabled:!1};var B=M,L=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],H=c.forwardRef((function(e,n){var r,i,u,f=(0,s.Ch)(e,{activeKey:"onSelect"}),d=f.as,v=void 0===d?"div":d,p=f.bsPrefix,x=f.variant,m=f.fill,g=f.justify,b=f.navbar,y=f.navbarScroll,Z=f.className,w=f.activeKey,N=(0,o.Z)(f,L),E=(0,S.vE)(p,"nav"),C=!1,j=(0,c.useContext)(R.Z),k=(0,c.useContext)(D);return j?(i=j.bsPrefix,C=null==b||b):k&&(u=k.cardHeaderBsPrefix),(0,h.jsx)(O,(0,a.Z)({as:v,ref:n,activeKey:w,className:l()(Z,(r={},(0,t.Z)(r,E,!C),(0,t.Z)(r,"".concat(i,"-nav"),C),(0,t.Z)(r,"".concat(i,"-nav-scroll"),C&&y),(0,t.Z)(r,"".concat(u,"-").concat(x),!!u),(0,t.Z)(r,"".concat(E,"-").concat(x),!!x),(0,t.Z)(r,"".concat(E,"-fill"),m),(0,t.Z)(r,"".concat(E,"-justified"),g),r))},N))}));H.displayName="Nav",H.defaultProps={justify:!1,fill:!1};var W=Object.assign(H,{Item:F,Link:B})},2932:function(e,n,r){r.d(n,{Z:function(){return ge}});var t=r(1413),a=r(5987),o=r(1694),i=r.n(o),l=r(2791),c=r(8633),s=r(239),u=r(6543),f=r(162),d=r(184),v=["bsPrefix","className","as"],p=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,l=e.as,c=(0,a.Z)(e,v);r=(0,f.vE)(r,"navbar-brand");var s=l||(c.href?"a":"span");return(0,d.jsx)(s,(0,t.Z)((0,t.Z)({},c),{},{ref:n,className:i()(o,r)}))}));p.displayName="NavbarBrand";var x=p,m=r(4942),g=r(5427),b=r(7324),y=r(1380);var h,Z=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];e.apply(this,t),n.apply(this,t)}}),null)},w=r(7202),N=r(4083),E=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function j(e,n){var r=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],t=C[e];return r+parseInt((0,g.Z)(n,t[0]),10)+parseInt((0,g.Z)(n,t[1]),10)}var k=(h={},(0,m.Z)(h,b.Wj,"collapse"),(0,m.Z)(h,b.Ix,"collapsing"),(0,m.Z)(h,b.d0,"collapsing"),(0,m.Z)(h,b.cn,"collapse show"),h),P={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:j},O=l.forwardRef((function(e,n){var r=e.onEnter,o=e.onEntering,c=e.onEntered,s=e.onExit,u=e.onExiting,f=e.className,v=e.children,p=e.dimension,x=void 0===p?"height":p,m=e.getDimensionValue,g=void 0===m?j:m,b=(0,a.Z)(e,E),h="function"===typeof x?x():x,C=(0,l.useMemo)((function(){return Z((function(e){e.style[h]="0"}),r)}),[h,r]),P=(0,l.useMemo)((function(){return Z((function(e){var n="scroll".concat(h[0].toUpperCase()).concat(h.slice(1));e.style[h]="".concat(e[n],"px")}),o)}),[h,o]),O=(0,l.useMemo)((function(){return Z((function(e){e.style[h]=null}),c)}),[h,c]),S=(0,l.useMemo)((function(){return Z((function(e){e.style[h]="".concat(g(h,e),"px"),(0,w.Z)(e)}),s)}),[s,g,h]),R=(0,l.useMemo)((function(){return Z((function(e){e.style[h]=null}),u)}),[h,u]);return(0,d.jsx)(N.Z,(0,t.Z)((0,t.Z)({ref:n,addEndListener:y.Z},b),{},{"aria-expanded":b.role?b.in:null,onEnter:C,onEntering:P,onEntered:O,onExit:S,onExiting:R,childRef:v.ref,children:function(e,n){return l.cloneElement(v,(0,t.Z)((0,t.Z)({},n),{},{className:i()(f,v.props.className,k[e],"width"===h&&"collapse-horizontal")}))}}))}));O.defaultProps=P;var S=O,R=r(5715),K=["children","bsPrefix"],D=l.forwardRef((function(e,n){var r=e.children,o=e.bsPrefix,i=(0,a.Z)(e,K);o=(0,f.vE)(o,"navbar-collapse");var c=(0,l.useContext)(R.Z);return(0,d.jsx)(S,(0,t.Z)((0,t.Z)({in:!(!c||!c.expanded)},i),{},{children:(0,d.jsx)("div",{ref:n,className:o,children:r})}))}));D.displayName="NavbarCollapse";var F=D,A=r(9007),_=["bsPrefix","className","children","label","as","onClick"],I=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=e.label,u=e.as,v=void 0===u?"button":u,p=e.onClick,x=(0,a.Z)(e,_);r=(0,f.vE)(r,"navbar-toggler");var m=(0,l.useContext)(R.Z)||{},g=m.onToggle,b=m.expanded,y=(0,A.Z)((function(e){p&&p(e),g&&g()}));return"button"===v&&(x.type="button"),(0,d.jsx)(v,(0,t.Z)((0,t.Z)({},x),{},{ref:n,onClick:y,"aria-label":s,className:i()(o,r,!b&&"collapsed"),children:c||(0,d.jsx)("span",{className:"".concat(r,"-icon")})}))}));I.displayName="NavbarToggle",I.defaultProps={label:"Toggle navigation"};var T=I,M=r(885),B=r(9815),L=new WeakMap,H=function(e,n){if(e&&n){var r=L.get(n)||new Map;L.set(n,r);var t=r.get(e);return t||((t=n.matchMedia(e)).refCount=0,r.set(t.media,t)),t}};function W(e,n){void 0===n&&(n="undefined"===typeof window?void 0:window);var r=H(e,n),t=(0,l.useState)((function(){return!!r&&r.matches})),a=t[0],o=t[1];return(0,B.Z)((function(){var r=H(e,n);if(!r)return o(!1);var t=L.get(n),a=function(){o(r.matches)};return r.refCount++,r.addListener(a),a(),function(){r.removeListener(a),r.refCount--,r.refCount<=0&&(null==t||t.delete(r.media)),r=void 0}}),[e]),a}var U,q=function(e){var n=Object.keys(e);function r(e,n){return e===n?n:e?e+" and "+n:n}function t(r){var t=function(e){return n[Math.min(n.indexOf(e)+1,n.length-1)]}(r),a=e[t];return"(max-width: "+(a="number"===typeof a?a-.2+"px":"calc("+a+" - 0.2px)")+")"}return function(n,a,o){var i,c;return"object"===typeof n?(i=n,o=a,a=!0):((c={})[n]=a=a||!0,i=c),W((0,l.useMemo)((function(){return Object.entries(i).reduce((function(n,a){var o=a[0],i=a[1];return"up"!==i&&!0!==i||(n=r(n,function(n){var r=e[n];return"number"===typeof r&&(r+="px"),"(min-width: "+r+")"}(o))),"down"!==i&&!0!==i||(n=r(n,t(o))),n}),"")}),[JSON.stringify(i)]),o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),V=r(6137),J=r(2709),z=(0,u.Z)("offcanvas-body"),$=["bsPrefix","className","children"],G=(U={},(0,m.Z)(U,b.d0,"show"),(0,m.Z)(U,b.cn,"show"),U),Q=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=(0,a.Z)(e,$);return r=(0,f.vE)(r,"offcanvas"),(0,d.jsx)(N.Z,(0,t.Z)((0,t.Z)({ref:n,addEndListener:y.Z},s),{},{childRef:c.ref,children:function(e,n){return l.cloneElement(c,(0,t.Z)((0,t.Z)({},n),{},{className:i()(o,c.props.className,(e===b.d0||e===b.Ix)&&"".concat(r,"-toggling"),G[e])}))}}))}));Q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Q.displayName="OffcanvasToggling";var X=Q,Y=r(9820),ee=r(8024),ne=["bsPrefix","className"],re=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,l=(0,a.Z)(e,ne);return r=(0,f.vE)(r,"offcanvas-header"),(0,d.jsx)(ee.Z,(0,t.Z)((0,t.Z)({ref:n},l),{},{className:i()(o,r)}))}));re.displayName="OffcanvasHeader",re.defaultProps={closeLabel:"Close",closeButton:!1};var te=re,ae=(0,r(7472).Z)("h5"),oe=(0,u.Z)("offcanvas-title",{Component:ae}),ie=r(4382),le=["bsPrefix","className","children","aria-labelledby","placement","responsive","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager","renderStaticNode"];function ce(e){return(0,d.jsx)(X,(0,t.Z)({},e))}function se(e){return(0,d.jsx)(J.Z,(0,t.Z)({},e))}var ue=l.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.children,s=e["aria-labelledby"],u=e.placement,v=e.responsive,p=e.show,x=e.backdrop,m=e.keyboard,g=e.scroll,b=e.onEscapeKeyDown,y=e.onShow,h=e.onHide,Z=e.container,w=e.autoFocus,N=e.enforceFocus,E=e.restoreFocus,C=e.restoreFocusOptions,j=e.onEntered,k=e.onExit,P=e.onExiting,O=e.onEnter,S=e.onEntering,K=e.onExited,D=e.backdropClassName,F=e.manager,_=e.renderStaticNode,I=(0,a.Z)(e,le),T=(0,l.useRef)();r=(0,f.vE)(r,"offcanvas");var B=((0,l.useContext)(R.Z)||{}).onToggle,L=(0,l.useState)(!1),H=(0,M.Z)(L,2),W=H[0],U=H[1],J=q(v||"xs","up");(0,l.useEffect)((function(){U(v?p&&!J:p)}),[p,v,J]);var z=(0,A.Z)((function(){null==B||B(),null==h||h()})),$=(0,l.useMemo)((function(){return{onHide:z}}),[z]);var G=(0,l.useCallback)((function(e){return(0,d.jsx)("div",(0,t.Z)((0,t.Z)({},e),{},{className:i()("".concat(r,"-backdrop"),D)}))}),[D,r]),Q=function(e){return(0,d.jsx)("div",(0,t.Z)((0,t.Z)((0,t.Z)({},e),I),{},{className:i()(o,v?"".concat(r,"-").concat(v):r,"".concat(r,"-").concat(u)),"aria-labelledby":s,children:c}))};return(0,d.jsxs)(d.Fragment,{children:[!W&&(v||_)&&Q({}),(0,d.jsx)(Y.Z.Provider,{value:$,children:(0,d.jsx)(V.Z,{show:W,ref:n,backdrop:x,container:Z,keyboard:m,autoFocus:w,enforceFocus:N&&!g,restoreFocus:E,restoreFocusOptions:C,onEscapeKeyDown:b,onShow:y,onHide:z,onEnter:function(e){e&&(e.style.visibility="visible");for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];null==O||O.apply(void 0,[e].concat(r))},onEntering:S,onEntered:j,onExit:k,onExiting:P,onExited:function(e){e&&(e.style.visibility="");for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];null==K||K.apply(void 0,r)},manager:F||(g?(T.current||(T.current=new ie.Z({handleContainerOverflow:!1})),T.current):(0,ie.t)()),transition:ce,backdropTransition:se,renderBackdrop:G,renderDialog:Q})})]})}));ue.displayName="Offcanvas",ue.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var fe=Object.assign(ue,{Body:z,Header:te,Title:oe}),de=l.forwardRef((function(e,n){var r=(0,l.useContext)(R.Z);return(0,d.jsx)(fe,(0,t.Z)((0,t.Z)({ref:n,show:!(null==r||!r.expanded)},e),{},{renderStaticNode:!0}))}));de.displayName="NavbarOffcanvas";var ve=de,pe=["bsPrefix","expand","variant","bg","fixed","sticky","className","as","expanded","onToggle","onSelect","collapseOnSelect"],xe=(0,u.Z)("navbar-text",{Component:"span"}),me=l.forwardRef((function(e,n){var r=(0,s.Ch)(e,{expanded:"onToggle"}),o=r.bsPrefix,u=r.expand,v=r.variant,p=r.bg,x=r.fixed,m=r.sticky,g=r.className,b=r.as,y=void 0===b?"nav":b,h=r.expanded,Z=r.onToggle,w=r.onSelect,N=r.collapseOnSelect,E=(0,a.Z)(r,pe),C=(0,f.vE)(o,"navbar"),j=(0,l.useCallback)((function(){null==w||w.apply(void 0,arguments),N&&h&&(null==Z||Z(!1))}),[w,N,h,Z]);void 0===E.role&&"nav"!==y&&(E.role="navigation");var k="".concat(C,"-expand");"string"===typeof u&&(k="".concat(k,"-").concat(u));var P=(0,l.useMemo)((function(){return{onToggle:function(){return null==Z?void 0:Z(!h)},bsPrefix:C,expanded:!!h,expand:u}}),[C,h,u,Z]);return(0,d.jsx)(R.Z.Provider,{value:P,children:(0,d.jsx)(c.Z.Provider,{value:j,children:(0,d.jsx)(y,(0,t.Z)((0,t.Z)({ref:n},E),{},{className:i()(g,C,u&&k,v&&"".concat(C,"-").concat(v),p&&"bg-".concat(p),m&&"sticky-".concat(m),x&&"fixed-".concat(x))}))})})}));me.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},me.displayName="Navbar";var ge=Object.assign(me,{Brand:x,Collapse:F,Offcanvas:ve,Text:xe,Toggle:T})},5715:function(e,n,r){var t=r(2791).createContext(null);t.displayName="NavbarContext",n.Z=t},239:function(e,n,r){r.d(n,{Ch:function(){return c}});var t=r(7462),a=r(3366),o=r(2791);r(2176);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!==typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n){return Object.keys(n).reduce((function(r,c){var s,u=r,f=u[i(c)],d=u[c],v=(0,a.Z)(u,[i(c),c].map(l)),p=n[c],x=function(e,n,r){var t=(0,o.useRef)(void 0!==e),a=(0,o.useState)(n),i=a[0],l=a[1],c=void 0!==e,s=t.current;return t.current=c,!c&&s&&i!==n&&l(n),[c?e:i,(0,o.useCallback)((function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];r&&r.apply(void 0,[e].concat(t)),l(e)}),[r])]}(d,f,e[p]),m=x[0],g=x[1];return(0,t.Z)({},v,((s={})[c]=m,s[p]=g,s))}),e)}function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(n){var r=this.constructor.getDerivedStateFromProps(e,n);return null!==r&&void 0!==r?r:null}.bind(this))}function f(e,n){try{var r=this.props,t=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,t)}finally{this.props=r,this.state=t}}s.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=238.b21817d0.chunk.js.map