"use strict";(self.webpackChunkWebApp_Challenge_ReactJs=self.webpackChunkWebApp_Challenge_ReactJs||[]).push([[196],{682:function(e,n,s){s.d(n,{Jv:function(){return x},H5:function(){return p}});var r=s(1413),i=s(1933),t=s(4165),a=s(5861);function c(e){if(e.ok)return e;var n=e.headers.get("content-type");if(n&&n.indexOf("application/json")>-1)return e.json().then((function(e){return window.Promise.reject(e)}));throw new Error(e.statusText)}var l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var s,i,a,l,o,d=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=d.length>1&&void 0!==d[1]?d[1]:{},i=s.headers,a=void 0===i?{}:i,l=s.body,"application/json"!==a["Content-Type"]||"string"===typeof l||l instanceof String||(l=JSON.stringify(l)),e.next=6,fetch(n,(0,r.Z)((0,r.Z)({},s),{},{body:l,headers:a})).then(c).then((function(e){return e.json()}));case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=l,d="b9bd48a6",u="https://www.omdbapi.com",m="apis/MovieApi/QUERY_MOVIES",h="apis/MovieApi/QUERY_MOVIE",p=function(e){var n=e.s,s=void 0===n?"":n,t=e.type,a=void 0===t?"movie":t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=["apikey=".concat(d),"type=".concat(a)];return s&&l.push("s=".concat(s)),(0,i.useInfiniteQuery)([m,{s:s,type:a}],(function(e){var n=e.pageParam,s=void 0===n?1:n;return o("".concat(u,"/?").concat(l.join("&"),"&page=").concat(s))}),(0,r.Z)((0,r.Z)({},c),{},{enabled:!!s,getNextPageParam:function(e,n){return"True"===e.Response&&n.length+1}}))},x=function(e){var n=e.id,s=void 0===n?"":n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=["apikey=".concat(d)];return s&&t.push("i=".concat(s)),r.enabled=!!s,(0,i.useQuery)([h,{id:s}],(function(){return o("".concat(u,"/?").concat(t.join("&")))}),r)}},3657:function(e,n,s){var r=s(885),i=s(2791),t=s(5316),a=s(3360),c=s(184);n.Z=function(e){var n=e.show,s=void 0!==n&&n,l=e.errorMessage,o=void 0===l?"Error":l,d=(0,i.useState)(s),u=(0,r.Z)(d,2),m=u[0],h=u[1];return(0,c.jsxs)(t.Z,{variant:"danger",show:m,backdrop:"static",centered:!0,dialogClassName:"modal-error",keyboard:!1,children:[(0,c.jsx)(t.Z.Body,{className:"text-center text-danger",children:o}),(0,c.jsx)(t.Z.Footer,{children:(0,c.jsx)(a.Z,{variant:"secondary",onClick:function(){return h(!1)},children:"Close"})})]})}},6283:function(e,n,s){s.d(n,{Z:function(){return t}});s(2791);var r=s.p+"static/media/movie-placeholder.a3da014746c0e0796a78.png",i=s(184),t=function(e){var n=e.src,s=void 0===n?"":n,t=e.className,a=void 0===t?"":t,c=e.placeholder,l=void 0===c?"":c,o=s;return s&&"N/A"!==s.toUpperCase()||(o=l||r),(0,i.jsx)("div",{style:{backgroundImage:"url(".concat(o,")")},className:"".concat(a," cover-img bg-light"),children:(0,i.jsx)("img",{src:o,className:"w-100 invisible"})})}},3964:function(e,n,s){s(2791);var r=s(4849),i=s(184);n.Z=function(e){var n=e.loadingMessage,s=void 0===n?"Loading ...":n;return(0,i.jsx)(r.Z,{animation:"border",role:"status",children:(0,i.jsx)("span",{className:"visually-hidden",children:s})})}},6109:function(e,n,s){s.r(n),s.d(n,{default:function(){return p}});s(2791);var r=s(7689),i=s(682),t=s(3657),a=s(3964),c=s(9806),l=s(1632),o=s(184),d=function(e){var n=e.movie,s=(0,r.s0)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("h2",{className:"d-flex align-items-center",children:[(0,o.jsxs)("button",{onClick:function(){return s(-1)},className:"btn btn-dark btn-sm me-2",children:[(0,o.jsx)(c.G,{icon:l.A35})," Back"]}),n.Title]}),(0,o.jsxs)("ul",{className:"list-inline",children:[(0,o.jsx)("li",{className:"list-inline-item",children:n.Year}),(0,o.jsx)("li",{className:"list-inline-item",children:"."}),(0,o.jsx)("li",{className:"list-inline-item",children:n.Runtime})]})]})},u=function(e){var n=e.movie;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[(0,o.jsx)(c.G,{className:"text-warning",icon:l.Tab,size:"2x"}),(0,o.jsxs)("div",{className:"mx-4 text-center",children:[(0,o.jsx)("div",{className:"fw-bolder",children:"IMDB RATING"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"fw-bold",children:n.imdbRating})," / 10"]})]}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"fw-bolder",children:"VOTES"}),n.imdbVotes]})]}),n.Ratings&&(0,o.jsx)("ul",{className:"list-group list-group-flush",children:n.Ratings.map((function(e){return(0,o.jsxs)("li",{className:"list-group-item list-group-item-dark d-flex justify-content-between align-items-center",children:[e.Source,(0,o.jsx)("span",{className:"badge bg-primary rounded-pill",children:e.Value})]},e.Source)}))})]})},m=function(e){var n=e.movie;return(0,o.jsxs)(o.Fragment,{children:[n.Genre&&(0,o.jsx)("p",{children:n.Genre.split(",").map((function(e){return(0,o.jsx)("span",{className:"badge rounded-pill text-bg-light me-2",children:e},e)}))}),(0,o.jsx)("p",{children:n.Plot}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"fw-bold me-2",children:"Director"})," ",n.Director]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"fw-bold me-2",children:"Writer"})," ",n.Writer]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"fw-bold me-2",children:"Actors"})," ",n.Actors]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"fw-bold me-2",children:"Awards"})," ",n.Awards]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:"fw-bold me-2",children:"Country"})," ",n.Country]}),(0,o.jsx)(u,{movie:n})]})},h=s(6283),p=function(){var e=(0,r.UO)().id,n=(0,i.Jv)({id:e}),s=n.data,c=n.isLoading,l=n.isError,u=n.error;return l?(0,o.jsx)(t.Z,{show:!0,errorMessage:u.message}):c||!s?(0,o.jsx)("div",{className:"text-center py-5",children:(0,o.jsx)(a.Z,{})}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("section",{className:"py-4 pb-1",children:(0,o.jsx)(d,{movie:s})}),(0,o.jsxs)("div",{className:"row g-0",children:[(0,o.jsx)("div",{className:"col-md-7 col-12",children:(0,o.jsx)(h.Z,{src:s.Poster})}),(0,o.jsx)("div",{className:"col-md-5 col-12 p-4 p-lg-5 text-bg-dark",children:(0,o.jsx)(m,{movie:s})})]})]})}}}]);
//# sourceMappingURL=196.bcfeb8db.chunk.js.map