(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[222],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(!o(e[u],i[u]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],i.get(u.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(u=c;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],i[l[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},5414:function(e,t,r){"use strict";r.d(t,{q:function(){return he}});var n,a,o,i,c=r(5697),u=r.n(c),l=r(4839),s=r.n(l),p=r(2993),f=r.n(p),d=r(7294),m=r(6494),h=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",T="href",A="http-equiv",O="innerHTML",C="itemprop",S="name",_="property",N="rel",j="src",P="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",x="defer",L="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",R=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,g.TITLE),r=Q(e,U);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},V=function(e){return Q(e,M)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===N&&"canonical"===e[r].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==O&&c!==E&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=h()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,p=e.title,f=e.titleAttributes;ue(g.BODY,n),ue(g.HTML,a),ce(p,f);var d={baseTag:le(g.BASE,r),linkTags:le(g.LINK,o),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(g.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(q),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(q):r.getAttribute(q)!==i.join(",")&&r.setAttribute(q,i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(q,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[q]=!0,a=pe(r,n),[d.createElement(g.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return pe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[q]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===O||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,p=void 0===s?"":s,f=e.titleAttributes;return{base:fe(g.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(g.LINK,o,n),meta:fe(g.META,i,n),noscript:fe(g.NOSCRIPT,c,n),script:fe(g.SCRIPT,u,n),style:fe(g.STYLE,l,n),title:fe(g.TITLE,{title:p,titleAttributes:f},n)}},me=s()((function(e){return{baseTag:$([T,P],e),bodyAttributes:Z(y,e),defer:Q(e,x),encode:Q(e,L),htmlAttributes:Z(b,e),linkTags:J(g.LINK,[N,T],e),metaTags:J(g.META,[S,w,A,_,C],e),noscriptTags:J(g.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:J(g.SCRIPT,[j,O],e),styleTags:J(g.STYLE,[E],e),title:G(e),titleAttributes:Z(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case g.BODY:return Y({},a,{bodyAttributes:Y({},o)});case g.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(z(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=z(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),p.canUseDOM?t(u):r&&(u=r(u))}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(p,"canUseDOM",c),p}}},9410:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294),a=r(5414),o=r(5617),i=function(){return n.createElement("section",{className:"container"},n.createElement("footer",null,"The content on this website is based off of Oogoshi Tomoe's ",n.createElement("i",null,"いちばんやさしいガンプラエアブラシ塗装超入門"),' (roughly: "Super Simple Gunpla Airbrushing Ultra Guide").',n.createElement("br",null),n.createElement("a",{href:"https://www.amazon.co.jp/dp/4278053851"},"Please consider buying the original book.")))},c=function(e){var t=e.children;return n.createElement("body",null,n.createElement(a.q,null,n.createElement("meta",{charSet:"utf-8"})),n.createElement(o.Z,null),n.createElement("main",null,n.createElement("section",{className:"section"},t)),n.createElement("hr",null),n.createElement(i,null))}},5617:function(e,t,r){"use strict";var n=r(7294),a=r(5444);t.Z=function(){return n.createElement("nav",{className:"navbar has-shadow"},n.createElement("div",{className:"navbar-brand"},n.createElement(a.rU,{className:"navbar-item",to:"/"},"Gunpla Airbrushing Guide")),n.createElement("div",{className:"navbar-menu"},n.createElement("div",{className:"navbar-start"},n.createElement("div",{className:"dropdown is-hoverable"},n.createElement("p",{className:"dropdown-trigger navbar-item"},"Introduction"),n.createElement("div",{className:"dropdown-menu"},n.createElement("div",{className:"dropdown-content"},n.createElement(a.rU,{className:"dropdown-item",to:"/part_a/part_a_a"},n.createElement("h2",null,"What's an airbrush?")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_a/part_a_b"},n.createElement("h2",null,"What do I need to start airbrushing?")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_a/part_a_c"},n.createElement("h2",null,"Preparing to airbrush.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_a/part_a_d"},n.createElement("h2",null,"Using an airbrush.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_a/part_a_e"},n.createElement("h2",null,"Maintaining an airbrush."))))),n.createElement("div",{className:"dropdown is-hoverable"},n.createElement("p",{className:"dropdown-trigger navbar-item"},"Shading"),n.createElement("div",{className:"dropdown-menu"},n.createElement("div",{className:"dropdown-content"},n.createElement(a.rU,{className:"dropdown-item",to:"/part_b/part_b_a"},n.createElement("h2",null,"Why start with shading?")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_b/part_b_b"},n.createElement("h2",null,"Preparing your kit.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_b/part_b_c"},n.createElement("h2",null,"Spraying post-shading.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_b/part_b_d"},n.createElement("h2",null,"Inspecting the results.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_b/part_b_e"},n.createElement("h2",null,"Bonus: Topcoating."))))),n.createElement("div",{className:"dropdown is-hoverable"},n.createElement("p",{className:"dropdown-trigger navbar-item"},"Painting"),n.createElement("div",{className:"dropdown-menu"},n.createElement("div",{className:"dropdown-content"},n.createElement(a.rU,{className:"dropdown-item",to:"/part_c/part_c_a"},n.createElement("h2",null,"Mixing paints.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_c/part_c_b"},n.createElement("h2",null,"Painting a part.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_c/part_c_c"},n.createElement("h2",null,"Using pearl or metallic paints.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_c/part_c_d"},n.createElement("h2",null,"Fixing mistakes.")),n.createElement(a.rU,{className:"dropdown-item",to:"/part_c/part_c_e"},n.createElement("h2",null,"Bonus: Masking."))))))))}}}]);
//# sourceMappingURL=c65d0270a00768398b6bede9fbfb6801371b2aa9-4d4b8cfb306acded4870.js.map