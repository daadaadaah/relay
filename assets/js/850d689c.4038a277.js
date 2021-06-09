(self.webpackChunk=self.webpackChunk||[]).push([[98275],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},44996:(e,t,r)=>{"use strict";r.d(t,{C:()=>a,Z:()=>i});var n=r(52263),o=r(13919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,p=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+s:s}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8696:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>s,default:()=>d});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=r(44996),c=["components"],l={},p={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v11.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",version:"v11.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1623267583,formattedLastUpdatedAt:"6/9/2021",frontMatter:{}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.kt)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A function with signature ",(0,a.kt)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.kt)("li",{parentName:"ul"},"This interface allows you to ",(0,a.kt)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.kt)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.kt)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,a.kt)("a",{href:(0,i.Z)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}d.isMDXComponent=!0}}]);