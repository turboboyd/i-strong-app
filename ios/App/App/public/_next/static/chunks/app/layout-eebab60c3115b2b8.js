(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{1579:function(e,t,a){Promise.resolve().then(a.bind(a,4222))},9600:function(e,t,a){"use strict";a.d(t,{DR:function(){return l},If:function(){return s},Lu:function(){return i},Y7:function(){return o},tm:function(){return u}});var r=a(4642),n=a(5520);let s=async(e,t)=>(0,n.Q)("users/profile/password/  ",{method:"PUT",headers:{Authorization:"Bearer ".concat(e)},body:{new_password:t}}),i=async(e,t)=>(0,n.Q)("users/profile/dairy-password/  ",{method:"PUT",headers:{Authorization:"Bearer ".concat(e)},body:{new_password:t}}),o=async(e,t,a)=>(0,n.Q)("users/profile/contact-info/",{method:"PUT",headers:{Authorization:"Bearer ".concat(e)},body:{username:t,phone_number:a}}),u=async e=>(0,n.Q)("users/profile/",{method:"DELETE",headers:{Authorization:"Bearer ".concat(e)}}),l=e=>(0,r.a)({queryKey:["getUserProfile"],queryFn:()=>h(e),enabled:!1}),h=async e=>(0,n.Q)("users/profile/",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}})},5520:function(e,t,a){"use strict";a.d(t,{Q:function(){return n}});var r=a(8285);let n=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=r.ZP.extend({hooks:{beforeRequest:[e=>{e.headers.set("Content-type","application/json")}]},prefixUrl:"https://istrongapp.com/api",throwHttpErrors:!1}),n={method:t.method,json:t.body,searchParams:t.params,headers:t.headers},s=await a(e,n).catch(()=>{throw Error("Ой, щось пішло не так!")});if(!s.ok)throw Error((await s.json()).error);return await s.json()}},4222:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return K},viewport:function(){return H}});var r=a(7437),n=a(2265);a(4162),a(6978);var s=a(7082),i=a(4221),o=a.n(i),u=a(7907),l=a(9600),h=a(5857),c=a(8792),d=a(130),f=a(3268),y=a.n(f);let m=[{icon:(0,r.jsx)(d.A2,{}),link:"/"},{icon:(0,r.jsx)(d.Ii,{}),link:"/tutorials"},{icon:(0,r.jsx)(d.s8,{}),link:"/diary"},{icon:(0,r.jsx)(d.Uu,{}),link:"/profile"}];var _=()=>{let e=(0,u.usePathname)();return(0,r.jsxs)("nav",{className:y().navigation,children:[(0,r.jsx)("ul",{className:y().navigation__list,children:m.slice(0,2).map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{className:"".concat(y().navigation__link," ").concat("/tutorials"===t.link&&y().size," ").concat(e===t.link&&y().active),href:t.link,children:t.icon})},t.link))}),(0,r.jsx)(c.default,{href:"/help",className:y().navigation__help,children:(0,r.jsx)(d.Im,{})}),(0,r.jsx)("ul",{className:y().navigation__list,children:m.slice(2,4).map(t=>(0,r.jsx)("li",{children:(0,r.jsx)(c.default,{className:"".concat(y().navigation__link," ").concat(e===t.link&&y().active),href:t.link,children:t.icon})},t.link))})]})},p=a(1348),g=a(2960),v=a(9619),x=a(2449),b=a.n(x),q=()=>{let e=(0,v.Ee)(e=>e.errorText),t=(0,v.Ee)(e=>e.successfulText),a=e||t;return(0,r.jsx)(p.M,{children:a&&(0,r.jsxs)(g.E.div,{className:b().toaster,layout:!0,initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.6},children:[e?(0,r.jsx)(d.FC,{}):(0,r.jsx)("div",{className:b().toaster__successful,children:(0,r.jsx)(d.CD,{})}),(0,r.jsx)("span",{children:e||t})]},"toaster")})},C=a(6866),w=a.n(C),j=e=>{let{entry:t,home:a}=e,s=(0,v.LM)(e=>{var t;return null===(t=e.user)||void 0===t?void 0:t.access_token}),{data:i,refetch:o,isFetching:c}=(0,l.DR)(null!=s?s:"");console.log(i);let d=(0,u.usePathname)();return(0,n.useEffect)(()=>{s&&o()},[s]),(0,r.jsxs)("body",{className:w().layout,children:[c?(0,r.jsx)(h.default,{}):(0,r.jsx)(r.Fragment,{children:i&&s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("main",{className:"".concat(w().layout__main," ").concat(("/"===d||"/profile"===d||"/tutorials"===d||"/diary"===d)&&w().with_footer),children:a}),("/"===d||"/profile"===d||"/tutorials"===d||"/diary"===d)&&(0,r.jsx)("div",{className:w().layout__footer,children:(0,r.jsx)(_,{})})]}):(0,r.jsx)("main",{children:t})}),(0,r.jsx)("div",{className:w().layout__toaster,children:(0,r.jsx)(q,{})})]})},P=a(6063),O=a(4668),Q=a(5139),E=a(4614),D=class extends E.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,a){let r=t.queryKey,n=t.queryHash??(0,P.Rm)(r,t),s=this.get(n);return s||(s=new O.A({cache:this,queryKey:r,queryHash:n,options:e.defaultQueryOptions(t),state:a,defaultOptions:e.getQueryDefaults(r)}),this.add(s)),s}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Q.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,P._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,P._x)(e,t)):t}notify(e){Q.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){Q.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Q.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},T=a(1793),k=class extends E.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#a=Date.now()}#t;#a;build(e,t,a){let r=new T.m({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:a});return this.add(r),r}add(e){let t=A(e),a=this.#t.get(t)??[];a.push(e),this.#t.set(t,a),this.notify({type:"added",mutation:e})}remove(e){let t=A(e);if(this.#t.has(t)){let a=this.#t.get(t)?.filter(t=>t!==e);a&&(0===a.length?this.#t.delete(t):this.#t.set(t,a))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(A(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(A(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){Q.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,P.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,P.X7)(e,t))}notify(e){Q.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return Q.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(P.ZT))))}};function A(e){return e.options.scope?.id??String(e.mutationId)}var M=a(9555),N=a(7211);function F(e,{pages:t,pageParams:a}){let r=t.length-1;return e.getNextPageParam(t[r],t,a[r],a)}var S=class{#r;#n;#s;#i;#o;#u;#l;#h;constructor(e={}){this.#r=e.queryCache||new D,this.#n=e.mutationCache||new k,this.#s=e.defaultOptions||{},this.#i=new Map,this.#o=new Map,this.#u=0}mount(){this.#u++,1===this.#u&&(this.#l=M.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#r.onFocus())}),this.#h=N.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#r.onOnline())}))}unmount(){this.#u--,0===this.#u&&(this.#l?.(),this.#l=void 0,this.#h?.(),this.#h=void 0)}isFetching(e){return this.#r.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#n.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#r.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let a=this.defaultQueryOptions(e),r=this.#r.build(this,a);return e.revalidateIfStale&&r.isStaleByTime(a.staleTime)&&this.prefetchQuery(a),Promise.resolve(t)}}getQueriesData(e){return this.#r.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,a){let r=this.defaultQueryOptions({queryKey:e}),n=this.#r.get(r.queryHash),s=n?.state.data,i=(0,P.SE)(t,s);if(void 0!==i)return this.#r.build(this,r).setData(i,{...a,manual:!0})}setQueriesData(e,t,a){return Q.V.batch(()=>this.#r.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,a)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#r.get(t.queryHash)?.state}removeQueries(e){let t=this.#r;Q.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let a=this.#r,r={type:"active",...e};return Q.V.batch(()=>(a.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(r,t)))}cancelQueries(e={},t={}){let a={revert:!0,...t};return Promise.all(Q.V.batch(()=>this.#r.findAll(e).map(e=>e.cancel(a)))).then(P.ZT).catch(P.ZT)}invalidateQueries(e={},t={}){return Q.V.batch(()=>{if(this.#r.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let a={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(a,t)})}refetchQueries(e={},t){let a={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(Q.V.batch(()=>this.#r.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,a);return a.throwOnError||(t=t.catch(P.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(P.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let a=this.#r.build(this,t);return a.isStaleByTime(t.staleTime)?a.fetch(t):Promise.resolve(a.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(P.ZT).catch(P.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,a)=>{let r=async()=>{let a;let r=e.options,n=e.fetchOptions?.meta?.fetchMore?.direction,s=e.state.data?.pages||[],i=e.state.data?.pageParams||[],o=!1,u=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?o=!0:e.signal.addEventListener("abort",()=>{o=!0}),e.signal)})},l=e.options.queryFn&&e.options.queryFn!==P.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),h=async(t,a,r)=>{if(o)return Promise.reject();if(null==a&&t.pages.length)return Promise.resolve(t);let n={queryKey:e.queryKey,pageParam:a,direction:r?"backward":"forward",meta:e.options.meta};u(n);let s=await l(n),{maxPages:i}=e.options,h=r?P.Ht:P.VX;return{pages:h(t.pages,s,i),pageParams:h(t.pageParams,a,i)}};if(n&&s.length){let e="backward"===n,t={pages:s,pageParams:i},o=(e?function(e,{pages:t,pageParams:a}){return e.getPreviousPageParam?.(t[0],t,a[0],a)}:F)(r,t);a=await h(t,o,e)}else{a=await h({pages:[],pageParams:[]},i[0]??r.initialPageParam);let e=t??s.length;for(let t=1;t<e;t++){let e=F(r,a);a=await h(a,e)}}return a};e.options.persister?e.fetchFn=()=>e.options.persister?.(r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},a):e.fetchFn=r}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(P.ZT).catch(P.ZT)}resumePausedMutations(){return N.N.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#r}getMutationCache(){return this.#n}getDefaultOptions(){return this.#s}setDefaultOptions(e){this.#s=e}setQueryDefaults(e,t){this.#i.set((0,P.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#i.values()],a={};return t.forEach(t=>{(0,P.to)(e,t.queryKey)&&(a={...a,...t.defaultOptions})}),a}setMutationDefaults(e,t){this.#o.set((0,P.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#o.values()],a={};return t.forEach(t=>{(0,P.to)(e,t.mutationKey)&&(a={...a,...t.defaultOptions})}),a}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#s.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,P.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===P.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#s.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#r.clear(),this.#n.clear()}};let V=()=>{let e=(0,v.Ee)(e=>e.handleChangeCommonStore);return{queryClient:new S({queryCache:new D({onError:t=>{e({errorText:t.message})}}),mutationCache:new k({onError:t=>{e({errorText:t.message})}})})}},H={width:"device-width",initialScale:1,themeColor:"#fff",colorScheme:"only light"};var K=e=>{let{home:t,entry:a}=e,i=(0,v.Ee)(e=>e.handleChangeCommonStore),u=(0,v.Ee)(e=>e.errorText),l=(0,v.Ee)(e=>e.successfulText),{queryClient:h}=V();return(0,n.useEffect)(()=>{let e=()=>{u?i({errorText:null}):l&&i({successfulText:null})};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[u,l]),(0,r.jsx)("html",{lang:"uk",className:o().className,children:(0,r.jsx)(s.aH,{client:h,children:(0,r.jsx)(j,{entry:a,home:t})})})}},5857:function(e,t,a){"use strict";a.r(t);var r=a(7437),n=a(130),s=a(5306),i=a.n(s);t.default=e=>{let{variant:t="fixed"}=e;return(0,r.jsx)("div",{className:i().loading,style:{position:t},children:(0,r.jsx)("div",{className:i().loading__logo,children:(0,r.jsx)(n.mp,{})})})}},9619:function(e,t,a){"use strict";a.d(t,{Ee:function(){return s},i1:function(){return i},LM:function(){return o}});var r=a(2020),n=a(5249);let s=(0,r.Ue)()((0,n.mW)(e=>({errorText:null,successfulText:null,entryType:"signIn",isModalActive:!1,modalContent:null,activeChallengeTypeButton:"new",handleChangeCommonStore:t=>e(e=>({...e,...t}))}),{enabled:!1})),i=(0,r.Ue)(e=>({userData:null,setUserData:t=>e({userData:t}),clearUserData:()=>e({userData:null})}));(0,r.Ue)()((0,n.mW)((0,n.tJ)(e=>({handleChangeGlobalStore:t=>e(e=>({...e,...t}))}),{name:"global_store",version:1}),{enabled:!1}));let o=(0,r.Ue)()((0,n.mW)((0,n.tJ)(e=>({user:null,handleChangeUserStore:t=>e(e=>({...e,...t}))}),{name:"user_store",version:1}),{enabled:!1}))},6978:function(){},4162:function(){},5306:function(e){e.exports={loading:"loading_loading__HySPd",loading__logo:"loading_loading__logo__0PYtv",anime_preloader:"loading_anime_preloader__GZOVs"}},3268:function(e){e.exports={navigation:"footer_navigation__n0VOz",navigation__list:"footer_navigation__list__yjPTC",navigation__link:"footer_navigation__link__Z_M9Y",size:"footer_size___lTo7",active:"footer_active___aAno",navigation__help:"footer_navigation__help__tszV2"}},2449:function(e){e.exports={toaster:"toaster_toaster__X_KBL"}},6866:function(e){e.exports={layout:"root-layout_layout__5INCw",layout__main:"root-layout_layout__main__eqrDT",with_footer:"root-layout_with_footer__1dUfa",layout__footer:"root-layout_layout__footer__wxO04",layout__toaster:"root-layout_layout__toaster___CGbW"}},4221:function(e){e.exports={style:{fontFamily:"'__Montserrat_45bddf', '__Montserrat_Fallback_45bddf'",fontStyle:"normal"},className:"__className_45bddf"}}},function(e){e.O(0,[4382,130,2971,8069,1744],function(){return e(e.s=1579)}),_N_E=e.O()}]);