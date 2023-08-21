import{i as fo,p as _o,a as N,b as xo,d as ho,e as Q,f as Do,h as u,T as Ro,g as x,j as go,k as V,l,u as po,t as vo,r as K,n as Go,m as Z,q as mo,s as Wo,v as F,w as lo,x as yo,y as Oo,z as Mo,A as No,B as jo,C as co,N as Lo,D as Vo,E as Ko,F as n,G as J,H as uo,_ as Qo,I as qo,o as Ao,c as Yo,J as Xo,K as Jo,L as Uo}from"./index-dc775693.js";const bo=ho("n-form-item");function Zo(o,{defaultSize:s="medium",mergedSize:i,mergedDisabled:d}={}){const t=fo(bo,null);_o(bo,null);const h=N(i?()=>i(t):()=>{const{size:S}=o;if(S)return S;if(t){const{mergedSize:j}=t;if(j.value!==void 0)return j.value}return s}),E=N(d?()=>d(t):()=>{const{disabled:S}=o;return S!==void 0?S:t?t.disabled.value:!1}),W=N(()=>{const{status:S}=o;return S||(t==null?void 0:t.mergedValidationStatus.value)});return xo(()=>{t&&t.restoreValidation()}),{mergedSizeRef:h,mergedDisabledRef:E,mergedStatusRef:W,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}const Co=Q({name:"BaseIconSwitchTransition",setup(o,{slots:s}){const i=Do();return()=>u(Ro,{name:"icon-switch-transition",appear:i.value},s)}}),{cubicBezierEaseInOut:oe}=go;function so({originalTransform:o="",left:s=0,top:i=0,transition:d=`all .3s ${oe} !important`}={}){return[x("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:o+" scale(0.75)",left:s,top:i,opacity:0}),x("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${o}`,left:s,top:i,opacity:1}),x("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:s,top:i,transition:d})]}const ee=x([x("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),x("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),x("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),x("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),V("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[l("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[so()]),l("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[l("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),l("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[l("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),l("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),l("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[l("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),l("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),re={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},te=Q({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},re),setup(o){po("-base-loading",ee,vo(o,"clsPrefix"))},render(){const{clsPrefix:o,radius:s,strokeWidth:i,stroke:d,scale:t}=this,h=s/t;return u("div",{class:`${o}-base-loading`,role:"img","aria-label":"loading"},u(Co,null,{default:()=>this.show?u("div",{key:"icon",class:`${o}-base-loading__transition-wrapper`},u("div",{class:`${o}-base-loading__container`},u("div",{class:`${o}-base-loading__container-layer`},u("div",{class:`${o}-base-loading__container-layer-left`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:h,cy:h,r:s-i/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s}))),u("div",{class:`${o}-base-loading__container-layer-patch`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:h,cy:h,r:s-i/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s}))),u("div",{class:`${o}-base-loading__container-layer-right`},u("svg",{class:`${o}-base-loading__svg`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:d}},u("circle",{fill:"none",stroke:"currentColor","stroke-width":i,"stroke-linecap":"round",cx:h,cy:h,r:s-i/2,"stroke-dasharray":4.91*s,"stroke-dashoffset":2.46*s})))))):u("div",{key:"placeholder",class:`${o}-base-loading__placeholder`},this.$slots)}))}}),ne=V("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),se=Q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){po("-base-wave",ne,vo(o,"clsPrefix"));const s=K(null),i=K(!1);let d=null;return xo(()=>{d!==null&&window.clearTimeout(d)}),{active:i,selfRef:s,play(){d!==null&&(window.clearTimeout(d),i.value=!1,d=null),Go(()=>{var t;(t=s.value)===null||t===void 0||t.offsetHeight,i.value=!0,d=window.setTimeout(()=>{i.value=!1,d=null},1e3)})}}},render(){const{clsPrefix:o}=this;return u("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),{cubicBezierEaseInOut:G}=go;function ie({duration:o=".2s",delay:s=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),x("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G},
 max-width ${o} ${G} ${s},
 margin-left ${o} ${G} ${s},
 margin-right ${o} ${G} ${s};
 `),x("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${G} ${s},
 max-width ${o} ${G},
 margin-left ${o} ${G},
 margin-right ${o} ${G};
 `)]}const ae=Z&&"chrome"in window;Z&&navigator.userAgent.includes("Firefox");const le=Z&&navigator.userAgent.includes("Safari")&&!ae;function M(o){return mo(o,[255,255,255,.16])}function U(o){return mo(o,[0,0,0,.12])}const de=ho("n-button-group"),ce={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"},ue=o=>{const{heightTiny:s,heightSmall:i,heightMedium:d,heightLarge:t,borderRadius:h,fontSizeTiny:E,fontSizeSmall:W,fontSizeMedium:S,fontSizeLarge:j,opacityDisabled:oo,textColor2:P,textColor3:eo,primaryColorHover:v,primaryColorPressed:T,borderColor:q,primaryColor:B,baseColor:c,infoColor:I,infoColorHover:w,infoColorPressed:r,successColor:b,successColorHover:y,successColorPressed:e,warningColor:k,warningColorHover:$,warningColorPressed:D,errorColor:z,errorColorHover:m,errorColorPressed:R,fontWeight:_,buttonColor2:L,buttonColor2Hover:H,buttonColor2Pressed:f,fontWeightStrong:A}=o;return Object.assign(Object.assign({},ce),{heightTiny:s,heightSmall:i,heightMedium:d,heightLarge:t,borderRadiusTiny:h,borderRadiusSmall:h,borderRadiusMedium:h,borderRadiusLarge:h,fontSizeTiny:E,fontSizeSmall:W,fontSizeMedium:S,fontSizeLarge:j,opacityDisabled:oo,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:L,colorSecondaryHover:H,colorSecondaryPressed:f,colorTertiary:L,colorTertiaryHover:H,colorTertiaryPressed:f,colorQuaternary:"#0000",colorQuaternaryHover:H,colorQuaternaryPressed:f,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:P,textColorTertiary:eo,textColorHover:v,textColorPressed:T,textColorFocus:v,textColorDisabled:P,textColorText:P,textColorTextHover:v,textColorTextPressed:T,textColorTextFocus:v,textColorTextDisabled:P,textColorGhost:P,textColorGhostHover:v,textColorGhostPressed:T,textColorGhostFocus:v,textColorGhostDisabled:P,border:`1px solid ${q}`,borderHover:`1px solid ${v}`,borderPressed:`1px solid ${T}`,borderFocus:`1px solid ${v}`,borderDisabled:`1px solid ${q}`,rippleColor:B,colorPrimary:B,colorHoverPrimary:v,colorPressedPrimary:T,colorFocusPrimary:v,colorDisabledPrimary:B,textColorPrimary:c,textColorHoverPrimary:c,textColorPressedPrimary:c,textColorFocusPrimary:c,textColorDisabledPrimary:c,textColorTextPrimary:B,textColorTextHoverPrimary:v,textColorTextPressedPrimary:T,textColorTextFocusPrimary:v,textColorTextDisabledPrimary:P,textColorGhostPrimary:B,textColorGhostHoverPrimary:v,textColorGhostPressedPrimary:T,textColorGhostFocusPrimary:v,textColorGhostDisabledPrimary:B,borderPrimary:`1px solid ${B}`,borderHoverPrimary:`1px solid ${v}`,borderPressedPrimary:`1px solid ${T}`,borderFocusPrimary:`1px solid ${v}`,borderDisabledPrimary:`1px solid ${B}`,rippleColorPrimary:B,colorInfo:I,colorHoverInfo:w,colorPressedInfo:r,colorFocusInfo:w,colorDisabledInfo:I,textColorInfo:c,textColorHoverInfo:c,textColorPressedInfo:c,textColorFocusInfo:c,textColorDisabledInfo:c,textColorTextInfo:I,textColorTextHoverInfo:w,textColorTextPressedInfo:r,textColorTextFocusInfo:w,textColorTextDisabledInfo:P,textColorGhostInfo:I,textColorGhostHoverInfo:w,textColorGhostPressedInfo:r,textColorGhostFocusInfo:w,textColorGhostDisabledInfo:I,borderInfo:`1px solid ${I}`,borderHoverInfo:`1px solid ${w}`,borderPressedInfo:`1px solid ${r}`,borderFocusInfo:`1px solid ${w}`,borderDisabledInfo:`1px solid ${I}`,rippleColorInfo:I,colorSuccess:b,colorHoverSuccess:y,colorPressedSuccess:e,colorFocusSuccess:y,colorDisabledSuccess:b,textColorSuccess:c,textColorHoverSuccess:c,textColorPressedSuccess:c,textColorFocusSuccess:c,textColorDisabledSuccess:c,textColorTextSuccess:b,textColorTextHoverSuccess:y,textColorTextPressedSuccess:e,textColorTextFocusSuccess:y,textColorTextDisabledSuccess:P,textColorGhostSuccess:b,textColorGhostHoverSuccess:y,textColorGhostPressedSuccess:e,textColorGhostFocusSuccess:y,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${y}`,borderPressedSuccess:`1px solid ${e}`,borderFocusSuccess:`1px solid ${y}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:k,colorHoverWarning:$,colorPressedWarning:D,colorFocusWarning:$,colorDisabledWarning:k,textColorWarning:c,textColorHoverWarning:c,textColorPressedWarning:c,textColorFocusWarning:c,textColorDisabledWarning:c,textColorTextWarning:k,textColorTextHoverWarning:$,textColorTextPressedWarning:D,textColorTextFocusWarning:$,textColorTextDisabledWarning:P,textColorGhostWarning:k,textColorGhostHoverWarning:$,textColorGhostPressedWarning:D,textColorGhostFocusWarning:$,textColorGhostDisabledWarning:k,borderWarning:`1px solid ${k}`,borderHoverWarning:`1px solid ${$}`,borderPressedWarning:`1px solid ${D}`,borderFocusWarning:`1px solid ${$}`,borderDisabledWarning:`1px solid ${k}`,rippleColorWarning:k,colorError:z,colorHoverError:m,colorPressedError:R,colorFocusError:m,colorDisabledError:z,textColorError:c,textColorHoverError:c,textColorPressedError:c,textColorFocusError:c,textColorDisabledError:c,textColorTextError:z,textColorTextHoverError:m,textColorTextPressedError:R,textColorTextFocusError:m,textColorTextDisabledError:P,textColorGhostError:z,textColorGhostHoverError:m,textColorGhostPressedError:R,textColorGhostFocusError:m,textColorGhostDisabledError:z,borderError:`1px solid ${z}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${R}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${z}`,rippleColorError:z,waveOpacity:"0.6",fontWeight:_,fontWeightStrong:A})},be={name:"Button",common:Wo,self:ue},fe=be,xe=x([V("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[F("color",[l("border",{borderColor:"var(--n-border-color)"}),F("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),lo("disabled",[x("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),F("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),F("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),lo("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),F("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),F("loading","cursor: wait;"),V("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[F("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Z&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[V("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[so({top:"50%",originalTransform:"translateY(-50%)"})]),ie()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[x("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),F("block",`
 display: flex;
 width: 100%;
 `),F("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),F("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),he=Object.assign(Object.assign({},yo.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!le}}),ge=Q({name:"Button",props:he,setup(o){const s=K(null),i=K(null),d=K(!1),t=Oo(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),h=fo(de,{}),{mergedSizeRef:E}=Zo({},{defaultSize:"medium",mergedSize:r=>{const{size:b}=o;if(b)return b;const{size:y}=h;if(y)return y;const{mergedSize:e}=r||{};return e?e.value:"medium"}}),W=N(()=>o.focusable&&!o.disabled),S=r=>{var b;W.value||r.preventDefault(),!o.nativeFocusBehavior&&(r.preventDefault(),!o.disabled&&W.value&&((b=s.value)===null||b===void 0||b.focus({preventScroll:!0})))},j=r=>{var b;if(!o.disabled&&!o.loading){const{onClick:y}=o;y&&Vo(y,r),o.text||(b=i.value)===null||b===void 0||b.play()}},oo=r=>{switch(r.key){case"Enter":if(!o.keyboard)return;d.value=!1}},P=r=>{switch(r.key){case"Enter":if(!o.keyboard||o.loading){r.preventDefault();return}d.value=!0}},eo=()=>{d.value=!1},{inlineThemeDisabled:v,mergedClsPrefixRef:T,mergedRtlRef:q}=Mo(o),B=yo("Button","-button",xe,fe,o,T),c=No("Button",q,T),I=N(()=>{const r=B.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:y},self:e}=r,{rippleDuration:k,opacityDisabled:$,fontWeight:D,fontWeightStrong:z}=e,m=E.value,{dashed:R,type:_,ghost:L,text:H,color:f,round:A,circle:ro,textColor:O,secondary:wo,tertiary:io,quaternary:Po,strong:$o}=o,So={"font-weight":$o?z:D};let g={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const Y=_==="tertiary",ao=_==="default",a=Y?"default":_;if(H){const p=O||f;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p||e[n("textColorText",a)],"--n-text-color-hover":p?M(p):e[n("textColorTextHover",a)],"--n-text-color-pressed":p?U(p):e[n("textColorTextPressed",a)],"--n-text-color-focus":p?M(p):e[n("textColorTextHover",a)],"--n-text-color-disabled":p||e[n("textColorTextDisabled",a)]}}else if(L||R){const p=O||f;g={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":f||e[n("rippleColor",a)],"--n-text-color":p||e[n("textColorGhost",a)],"--n-text-color-hover":p?M(p):e[n("textColorGhostHover",a)],"--n-text-color-pressed":p?U(p):e[n("textColorGhostPressed",a)],"--n-text-color-focus":p?M(p):e[n("textColorGhostHover",a)],"--n-text-color-disabled":p||e[n("textColorGhostDisabled",a)]}}else if(wo){const p=ao?e.textColor:Y?e.textColorTertiary:e[n("color",a)],C=f||p,X=_!=="default"&&_!=="tertiary";g={"--n-color":X?J(C,{alpha:Number(e.colorOpacitySecondary)}):e.colorSecondary,"--n-color-hover":X?J(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-pressed":X?J(C,{alpha:Number(e.colorOpacitySecondaryPressed)}):e.colorSecondaryPressed,"--n-color-focus":X?J(C,{alpha:Number(e.colorOpacitySecondaryHover)}):e.colorSecondaryHover,"--n-color-disabled":e.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":C,"--n-text-color-hover":C,"--n-text-color-pressed":C,"--n-text-color-focus":C,"--n-text-color-disabled":C}}else if(io||Po){const p=ao?e.textColor:Y?e.textColorTertiary:e[n("color",a)],C=f||p;io?(g["--n-color"]=e.colorTertiary,g["--n-color-hover"]=e.colorTertiaryHover,g["--n-color-pressed"]=e.colorTertiaryPressed,g["--n-color-focus"]=e.colorSecondaryHover,g["--n-color-disabled"]=e.colorTertiary):(g["--n-color"]=e.colorQuaternary,g["--n-color-hover"]=e.colorQuaternaryHover,g["--n-color-pressed"]=e.colorQuaternaryPressed,g["--n-color-focus"]=e.colorQuaternaryHover,g["--n-color-disabled"]=e.colorQuaternary),g["--n-ripple-color"]="#0000",g["--n-text-color"]=C,g["--n-text-color-hover"]=C,g["--n-text-color-pressed"]=C,g["--n-text-color-focus"]=C,g["--n-text-color-disabled"]=C}else g={"--n-color":f||e[n("color",a)],"--n-color-hover":f?M(f):e[n("colorHover",a)],"--n-color-pressed":f?U(f):e[n("colorPressed",a)],"--n-color-focus":f?M(f):e[n("colorFocus",a)],"--n-color-disabled":f||e[n("colorDisabled",a)],"--n-ripple-color":f||e[n("rippleColor",a)],"--n-text-color":O||(f?e.textColorPrimary:Y?e.textColorTertiary:e[n("textColor",a)]),"--n-text-color-hover":O||(f?e.textColorHoverPrimary:e[n("textColorHover",a)]),"--n-text-color-pressed":O||(f?e.textColorPressedPrimary:e[n("textColorPressed",a)]),"--n-text-color-focus":O||(f?e.textColorFocusPrimary:e[n("textColorFocus",a)]),"--n-text-color-disabled":O||(f?e.textColorDisabledPrimary:e[n("textColorDisabled",a)])};let to={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};H?to={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:to={"--n-border":e[n("border",a)],"--n-border-hover":e[n("borderHover",a)],"--n-border-pressed":e[n("borderPressed",a)],"--n-border-focus":e[n("borderFocus",a)],"--n-border-disabled":e[n("borderDisabled",a)]};const{[n("height",m)]:no,[n("fontSize",m)]:To,[n("padding",m)]:ko,[n("paddingRound",m)]:zo,[n("iconSize",m)]:Ho,[n("borderRadius",m)]:Bo,[n("iconMargin",m)]:Io,waveOpacity:Fo}=e,Eo={"--n-width":ro&&!H?no:"initial","--n-height":H?"initial":no,"--n-font-size":To,"--n-padding":ro||H?"initial":A?zo:ko,"--n-icon-size":Ho,"--n-icon-margin":Io,"--n-border-radius":H?"initial":ro||A?no:Bo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":y,"--n-ripple-duration":k,"--n-opacity-disabled":$,"--n-wave-opacity":Fo},So),g),to),Eo)}),w=v?jo("button",N(()=>{let r="";const{dashed:b,type:y,ghost:e,text:k,color:$,round:D,circle:z,textColor:m,secondary:R,tertiary:_,quaternary:L,strong:H}=o;b&&(r+="a"),e&&(r+="b"),k&&(r+="c"),D&&(r+="d"),z&&(r+="e"),R&&(r+="f"),_&&(r+="g"),L&&(r+="h"),H&&(r+="i"),$&&(r+="j"+uo($)),m&&(r+="k"+uo(m));const{value:f}=E;return r+="l"+f[0],r+="m"+y[0],r}),I,o):void 0;return{selfElRef:s,waveElRef:i,mergedClsPrefix:T,mergedFocusable:W,mergedSize:E,showBorder:t,enterPressed:d,rtlEnabled:c,handleMousedown:S,handleKeydown:P,handleBlur:eo,handleKeyup:oo,handleClick:j,customColorCssVars:N(()=>{const{color:r}=o;if(!r)return null;const b=M(r);return{"--n-border-color":r,"--n-border-color-hover":b,"--n-border-color-pressed":U(r),"--n-border-color-focus":b,"--n-border-color-disabled":r}}),cssVars:v?void 0:I,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:o,tag:s,onRender:i}=this;i==null||i();const d=co(this.$slots.default,t=>t&&u("span",{class:`${o}-button__content`},t));return u(s,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&d,u(Lo,{width:!0},{default:()=>co(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&u("span",{class:`${o}-button__icon`,style:{margin:Ko(this.$slots.default)?"0":""}},u(Co,null,{default:()=>this.loading?u(te,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):u("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement==="left"&&d,this.text?null:u(se,{ref:"waveElRef",clsPrefix:o}),this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?u("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}}),pe=ge,ve=Q({components:{NButton:pe}}),me={class:"about"};function ye(o,s,i,d,t,h){const E=qo("n-button");return Ao(),Yo("div",me,[Xo(E,{type:"primary"},{default:Jo(()=>[Uo(" Primary ")]),_:1})])}const we=Qo(ve,[["render",ye]]);export{we as default};
