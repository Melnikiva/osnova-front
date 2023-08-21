import{c as m,a as R,d as _,u as v,r as y,b as I,p as j,e as O,f as S,g as z,h as d,N as B,i as L,j as P,l as E,o as V,k as $,w as N,m as k,n as H,q as D,s as p,_ as K}from"./index-b8127483.js";const M=m("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),q={embedded:Boolean,position:L,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},F=P("n-layout");function g(a){return _({name:a?"LayoutContent":"Layout",props:Object.assign(Object.assign({},v.props),q),setup(e){const l=y(null),c=y(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=I(e),u=v("Layout","-layout",M,E,e,r);function x(o,t){if(e.nativeScrollbar){const{value:s}=l;s&&(t===void 0?s.scrollTo(o):s.scrollTo(o,t))}else{const{value:s}=c;s&&s.scrollTo(o,t)}}j(F,e);let f=0,h=0;const C=o=>{var t;const s=o.target;f=s.scrollLeft,h=s.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,o)};O(()=>{if(e.nativeScrollbar){const o=l.value;o&&(o.scrollTop=h,o.scrollLeft=f)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:x},b=S(()=>{const{common:{cubicBezierEaseInOut:o},self:t}=u.value;return{"--n-bezier":o,"--n-color":e.embedded?t.colorEmbedded:t.color,"--n-text-color":t.textColor}}),n=i?z("layout",S(()=>e.embedded?"e":""),b,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:l,scrollbarInstRef:c,hasSiderStyle:w,mergedTheme:u,handleNativeElScroll:C,cssVars:i?void 0:b,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender},T)},render(){var e;const{mergedClsPrefix:l,hasSider:c}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=c?this.hasSiderStyle:void 0,i=[this.themeClass,a&&`${l}-layout-content`,`${l}-layout`,`${l}-layout--${this.position}-positioned`];return d("div",{class:i,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${l}-layout-scroll-container`,style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):d(B,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,r]}),this.$slots))}})}g(!1);const W=g(!0),X=a=>(H("data-v-f3978eff"),a=a(),D(),a),Y=X(()=>p("div",{class:"banner"},[p("div",{class:"container"}," 123 ")],-1)),A=_({__name:"HomeView",setup(a){return(e,l)=>(V(),$(k(W),{class:"main"},{default:N(()=>[Y]),_:1}))}});const J=K(A,[["__scopeId","data-v-f3978eff"]]);export{J as default};
