(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8438],{2431:function(){},5981:function(t,e,a){Promise.resolve().then(a.bind(a,7756))},7756:function(t,e,a){"use strict";a.r(e),a.d(e,{StatisticsComponent:function(){return P},default:function(){return I}});var s=a(7437),i=a(7907);a(9767);var n=a(2151),c=a.n(n),_=a(2265),r=a(8639),l=a(1348),d=a(2960),o=a(130),m=a(948),u=a.n(m);let v=[{icon:(0,s.jsx)(o.jI,{}),color:"#e79999",key:"angry"},{icon:(0,s.jsx)(o.x$,{}),color:"#c0ebf1",key:"sad"},{icon:(0,s.jsx)(o.vA,{}),color:"#C0D6A6",key:"normal"},{icon:(0,s.jsx)(o.IT,{}),color:"#F9E692",key:"happy"}];var h=t=>{let{emotions:e}=t,a=t=>{switch(t){case"sad":return e.sad;case"happy":return e.happy;case"normal":return e.normal;case"angry":return e.angry;default:return 1}};return(0,s.jsx)(s.Fragment,{children:Object.entries(e).length?(0,s.jsx)("section",{className:u().emotions_chart,style:{height:2*Object.values(e).sort((t,e)=>e-t)[0]+80},children:v.map(t=>{var e;return(0,s.jsxs)("div",{className:u().emotions_chart__item,children:[t.icon,(0,s.jsx)(l.M,{mode:"wait",children:(0,s.jsx)(d.E.div,{initial:{height:2},animate:{height:2*a(t.key)},exit:{height:0},transition:{duration:1},children:(0,s.jsx)("div",{className:u().emotions_chart__column,style:{backgroundColor:t.color}})},t.key)}),(0,s.jsxs)("span",{className:u().emotions_chart__percant,children:[null!==(e=a(t.key))&&void 0!==e?e:0,"%"]})]},t.key)})}):(0,s.jsxs)("div",{className:u().emotions_chart__no_data,children:[(0,s.jsx)("p",{children:"Здається, ти не відзначав свій настрій протягом цього періоду."}),(0,s.jsx)("span",{children:"Аби отримати статистику тобі потрібно відзначити свій настрій принаймні раз на день."})]})})},p=a(6583),x=a(6042);let k=()=>{let t=(0,i.usePathname)(),e=(0,i.useSearchParams)(),{push:a}=(0,x.tv)(),s=(0,_.useCallback)((t,a)=>{let s=new URLSearchParams(e);return a&&s.set(t,a),s.toString()},[e]),n=(t,e)=>{var a;let s=new URLSearchParams(null!==(a=null==e?void 0:e.toString())&&void 0!==a?a:"");for(let[e,a]of Object.entries(t))a?s.set(e,String(a)):s.delete(e);return s.toString()},c=String(new URLSearchParams(e));return{push:a,searchParams:e,allQueriesParams:c,changeQuery:(e,i)=>{a(t+"?"+s(e,i))},resetParams:()=>{a(t)},removeFromParams:s=>{let i=new URLSearchParams(e);i.delete(s),a(t+"?"+i.toString())},setQuery:(e,s)=>{a(t+"?"+n(e,s))}}};var g=a(9619),f=a(705),j=a.n(f),y=t=>{let{onChange:e,value:a}=t,{setQuery:i}=k(),n=(0,g.Ee)(t=>t.handleChangeCommonStore),[r,l]=(0,_.useState)(c()()),d=r.clone().startOf("month"),m=Array.from({length:d.daysInMonth()},(t,e)=>{let a=d.clone().add(e,"days"),s=a.weekday();return{day:a,weekNumber:s}}),u=c().weekdaysShort().slice(1).concat(c().weekdaysShort().slice(0,1)),v=(t,e)=>{l(r.clone().add(t,e))},h=t=>{let s=c()(t.target.value);(null==a?void 0:a.second)?e({first:null==s?void 0:s.toISOString(),second:void 0}):(null==a?void 0:a.first)?c()(s).isBefore(c()(null==a?void 0:a.first))?e({first:null==s?void 0:s.toISOString(),second:null==a?void 0:a.first}):e({first:null==a?void 0:a.first,second:null==s?void 0:s.toISOString()}):e({first:null==s?void 0:s.toISOString(),second:null==a?void 0:a.second})};return(0,s.jsxs)("div",{className:j().date_picker,children:[(0,s.jsxs)("div",{className:j().date_picker__top,children:[(0,s.jsx)("button",{className:j().date_picker__nav_btn,onClick:()=>v(-1,"month"),children:(0,s.jsx)(o.Ej,{})}),r.format("MMMM"),(0,s.jsx)("button",{className:"".concat(j().date_picker__nav_btn," ").concat(j().next),onClick:()=>v(1,"month"),children:(0,s.jsx)(o.Ej,{})})]}),a.first&&(0,s.jsxs)("div",{className:j().date_picker__selected_dates,children:[a.second&&(0,s.jsx)("span",{children:"від"}),(0,s.jsx)("div",{className:j().date_picker__selected_date,children:c()(a.first).format("DD.MM")}),a.second&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"до"}),(0,s.jsx)("div",{className:j().date_picker__selected_date,children:c()(a.second).format("DD.MM")})]})]}),(0,s.jsxs)("div",{className:j().date_picker__calendar,children:[u.map(t=>(0,s.jsx)("div",{className:j().date_picker__day_of_week,children:t.slice(0,1)},t)),null==m?void 0:m.map(t=>{var e,i;let{day:n,weekNumber:_}=t;return(0,s.jsx)("button",{onClick:t=>{t.stopPropagation(),t.preventDefault(),h({target:{value:n.toISOString()}})},className:"".concat(j().date_picker__day,"\n                   ").concat((null==a?void 0:a.first)&&(null===(e=c()(null==a?void 0:a.first))||void 0===e?void 0:e.isSame(n,"day"))&&j().active,"\n                   ").concat(c()().isSame(n,"day")&&j().today,"\n                   ").concat((null==a?void 0:a.second)&&(null===(i=c()(null==a?void 0:a.second))||void 0===i?void 0:i.isSame(n,"day"))&&j().active,"\n                   ").concat((null==a?void 0:a.first)&&(null==a?void 0:a.second)&&(null==n?void 0:n.isBetween(c()(null==a?void 0:a.first),c()(null==a?void 0:a.second)))&&j().active,"\n                   ").concat((null==a?void 0:a.second)&&(null==a?void 0:a.first)&&(null==n?void 0:n.isBetween(c()(null==a?void 0:a.second),c()(null==a?void 0:a.first)))&&j().active,"\n                   "),style:{gridColumn:"".concat(_+1,"/").concat(_+2)},children:n.format("DD")},n.format("YYYY-MM-DD"))})]}),(0,s.jsx)("div",{className:j().date_picker__bottom,children:(0,s.jsx)(p.r0,{size:"small",onClick:()=>{var t;i({start_date:null==a?void 0:a.first,end_date:null!==(t=null==a?void 0:a.second)&&void 0!==t?t:null==a?void 0:a.first}),n({isModalActive:!1})},variant:"outlined",children:"Зберегти"})})]})},S=a(7386),N=a(4815),w=a.n(N),M=t=>{let{value:e,onChange:a}=t,i=(0,g.Ee)(t=>t.handleChangeCommonStore);return(0,s.jsxs)("div",{className:w().calendar_modal,children:[(0,s.jsx)(S.r,{onClick:()=>{i({isModalActive:!1})},name:"close",children:(0,s.jsx)(o.bM,{})}),(0,s.jsx)(y,{value:e,onChange:a})]})},Y=a(8963),b=a.n(Y);let C={initial:{opacity:0,y:"-15rem"},animate:{opacity:1,y:0},exit:{opacity:0,y:"-15rem"}};var D=t=>{var e,a;let{selectedValue:i,setSelectedValue:n,duration:c}=t,[r,m]=(0,_.useState)(!1),u=[{value:"day",title:"Сьогодні"},{value:"week",title:"Тиждень"},{value:"month",title:"Місяць"}],v=c?[...u,{value:"custom",title:null!==(a="Дні: ".concat(c.toString()))&&void 0!==a?a:"Період"}]:u;return(0,s.jsxs)("div",{className:"".concat(b().select," ").concat(r&&b().expanded),children:[(0,s.jsxs)("div",{className:"".concat(b().active_value," ").concat(r&&b().expanded," ").concat(b().select__item),onClick:()=>{m(!r)},children:[null===(e=v.find(t=>t.value===i))||void 0===e?void 0:e.title," ",(0,s.jsx)(o.Ej,{})]}),(0,s.jsx)(l.M,{mode:"wait",children:r&&(0,s.jsx)("div",{className:"".concat(b().select__dropdown),children:(0,s.jsx)(d.E.div,{variants:C,initial:"initial",animate:"animate",exit:"exit",children:(0,s.jsx)("ul",{className:b().select__list,children:v.filter(t=>t.value!==i).map(t=>(0,s.jsx)("li",{onClick:()=>{n(t.value),m(!1)},className:b().select__item,children:t.title},t.value))})},"language_dropdown")})})]})},O=a(4796),E=a(751),A=a.n(E);let P=()=>{var t,e;let a=(0,i.useSearchParams)(),{setQuery:n}=k(),l=(0,g.Ee)(t=>t.handleChangeCommonStore),d=(0,g.Ee)(t=>t.isModalActive),m=(0,g.LM)(t=>{var e;return null===(e=t.user)||void 0===e?void 0:e.access_token}),[u,v]=(0,_.useState)({first:"",second:""}),[x,f]=(0,_.useState)("day"),[j,y]=(0,_.useState)(null),S=t=>c()(t).format("YYYY-MM-DDTHH:mm:ss")+"Z",{data:N,refetch:w}=(0,r._R)(null!=m?m:"",{start_date:S(a.get("start_date")?null===(t=a.get("start_date"))||void 0===t?void 0:t.toString():c()().startOf("day").toString()),end_date:S(a.get("end_date")?null===(e=a.get("end_date"))||void 0===e?void 0:e.toString():c()().endOf("day").toString())});return(0,_.useEffect)(()=>{j&&f("custom")},[j]),(0,_.useEffect)(()=>{w()},[a.get("start_date"),a.get("end_date"),x]),(0,s.jsxs)("section",{className:"".concat(A().statistics," container"),children:[(0,s.jsx)(p.qA,{title:"Статистика"}),(0,s.jsxs)("div",{className:A().statistics__settings,children:[(0,s.jsx)("div",{className:A().statistics__select_wrapper,onClick:()=>r._R,children:(0,s.jsx)(D,{selectedValue:x,setSelectedValue:t=>{"custom"!==t&&(n({start_date:c()().startOf(t).toISOString(),end_date:c()().endOf(t).toISOString()}),y(0)),f(t)},duration:j})}),(0,s.jsx)("button",{className:A().statistics__calendar_btn,onClick:()=>l({isModalActive:!0}),children:(0,s.jsx)(o.jt,{})})]}),!!N&&(0,s.jsxs)("div",{className:A().statistics__chart,children:[(0,s.jsx)("span",{children:a.get("start_date")&&a.get("end_date")?c()(a.get("start_date")).isSame(c()(a.get("end_date")),"day")?"".concat(c()(a.get("start_date")).format("DD.MM.YYYY")):"".concat(c()(a.get("start_date")).format("DD.MM.YYYY")," - ").concat(c()(a.get("end_date")).format("DD.MM.YYYY")):c()().format("DD.MM.YYYY")}),(0,s.jsx)(h,{emotions:N})]}),(0,s.jsxs)("div",{className:A().statistics__advice,children:[(0,s.jsx)("h2",{className:A().statistics__advice_title,children:"Порада"}),(0,s.jsx)("p",{children:"Записуй у щоденнику що викликало у тебе ті чи інші почуття, щоб аналізувати причини та наслідки і почувати себе краще."})]}),d&&(0,s.jsx)(p.u8,{children:(0,s.jsx)(M,{value:u,onChange:t=>{v(t);let e=c().duration(c()(t.second).diff(c()(t.first)));t.second?y(e.asDays()):y(1)}})}),(0,s.jsx)(p.Hu,{title:"Тут ти можеш відслідковувати свій стан та досягнення, а відмічаючи впродовж дня свої емоції зможеш заробити",coin:!0,image:O.Nf,buttonText:"Круто!",check:"mood-stats"})]})};var I=P},948:function(t){t.exports={emotions_chart:"emotions-chart_emotions_chart__KqHS9",emotions_chart__item:"emotions-chart_emotions_chart__item__hVnmD",emotions_chart__column:"emotions-chart_emotions_chart__column__RsMzZ",emotions_chart__no_data:"emotions-chart_emotions_chart__no_data__nOVrr"}},751:function(t){t.exports={statistics:"statistics_statistics__FnkA5",statistics__calendar_btn:"statistics_statistics__calendar_btn__t2JKx",statistics__settings:"statistics_statistics__settings__c9HDm",statistics__select_wrapper:"statistics_statistics__select_wrapper__SrcLW",statistics__chart:"statistics_statistics__chart__EEaFp",statistics__advice:"statistics_statistics__advice___8ZOq",statistics__advice_title:"statistics_statistics__advice_title__9AAqA",statistics__cards:"statistics_statistics__cards__bhyOt",statistics__card:"statistics_statistics__card__TqeCb",yellow:"statistics_yellow__pykbm",statistics__card_title:"statistics_statistics__card_title__VUk1j"}},4815:function(t){t.exports={calendar_modal:"calendar-modal_calendar_modal__W0vzz"}},705:function(t){t.exports={date_picker:"date-range-picker_date_picker__cByki",date_picker__top:"date-range-picker_date_picker__top__YjDqB",date_picker__nav_btn:"date-range-picker_date_picker__nav_btn__GRp8F",next:"date-range-picker_next__0K5Bl",date_picker__calendar:"date-range-picker_date_picker__calendar__wDQgY",date_picker__day_of_week:"date-range-picker_date_picker__day_of_week__RWjpd",date_picker__day:"date-range-picker_date_picker__day__mwe92",today:"date-range-picker_today__HwYoY",active:"date-range-picker_active___fKtj",date_picker__bottom:"date-range-picker_date_picker__bottom__DuexP",date_picker__selected_dates:"date-range-picker_date_picker__selected_dates__J5eV0",date_picker__selected_date:"date-range-picker_date_picker__selected_date__3SZmH"}},8963:function(t){t.exports={select:"select_select__h2YWU",expanded:"select_expanded__SY0iV",select__item:"select_select__item__Z02ew",active_value:"select_active_value__QxG0S",select__dropdown:"select_select__dropdown__Za_mC",select__list:"select_select__list__E_V_v"}}},function(t){t.O(0,[6990,4382,2537,5535,130,7883,2971,8069,1744],function(){return t(t.s=5981)}),_N_E=t.O()}]);