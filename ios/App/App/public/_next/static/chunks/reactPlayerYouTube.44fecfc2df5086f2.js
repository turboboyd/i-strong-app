(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4439],{3317:function(e,t,a){var l,s,r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))y.call(e,s)||s===a||i(e,s,{get:()=>t[s],enumerable:!(l=o(t,s))||l.enumerable});return e},h=(e,t,a)=>(u(e,"symbol"!=typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>k}),e.exports=c(i({},"__esModule",{value:!0}),d);var P=(s=null!=(l=a(2265))?r(p(l)):{},c(l&&l.__esModule?s:i(s,"default",{value:l,enumerable:!0}),l)),m=a(6104),g=a(6877);let f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,b=/user\/([a-zA-Z0-9_-]+)\/?/,w=/youtube-nocookie\.com/;class k extends P.Component{constructor(){super(...arguments),h(this,"callPlayer",m.callPlayer),h(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(f.test(e)){let[,t]=e.match(f);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(b.test(e)){let[,t]=e.match(b);return{listType:"user_uploads",list:t}}return{}}),h(this,"onStateChange",e=>{let{data:t}=e,{onPlay:a,onPause:l,onBuffer:s,onBufferEnd:r,onEnded:i,onReady:o,loop:n,config:{playerVars:p,onUnstarted:y}}=this.props,{UNSTARTED:u,PLAYING:c,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window.YT.PlayerState;if(t===u&&y(),t===c&&(a(),r()),t===h&&l(),t===d&&s(),t===P){let e=!!this.callPlayer("getPlaylist");n&&!e&&(p.start?this.seekTo(p.start):this.play()),i()}t===m&&o()}),h(this,"mute",()=>{this.callPlayer("mute")}),h(this,"unmute",()=>{this.callPlayer("unMute")}),h(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||f.test(e)?null:e.match(g.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:a,muted:l,playsinline:s,controls:r,loop:i,config:o,onError:n}=this.props,{playerVars:p,embedOptions:y}=o,u=this.getID(e);if(t){if(f.test(e)||b.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:u,startSeconds:(0,m.parseStartTime)(e)||p.start,endSeconds:(0,m.parseEndTime)(e)||p.end});return}(0,m.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:l?1:0,controls:r?1:0,start:(0,m.parseStartTime)(e),end:(0,m.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(e),...p},events:{onReady:()=>{i&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>n(e.data)},host:w.test(e)?"https://www.youtube-nocookie.com":void 0,...y}))},n),y.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return P.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},P.default.createElement("div",{ref:this.ref}))}}h(k,"displayName","YouTube"),h(k,"canPlay",g.canPlay.youtube)}}]);