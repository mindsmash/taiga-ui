function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f1979da7460819153e11d2078244645d94291b69c\u241f4323470180912194028:Copy"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f99edc985d8e0d7bf5caa99cfa881e7dd514ca74f\u241f5347009623708919294:",":INTERPOLATION:"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f6af010fd6ea3a514326c4f853cf0281596c7177d\u241f4968650495925694320: Input icon name to highlight "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fd3482a2fe17d28c2051e895925c9f35d47dbcc29\u241f1035150703896968730:Search by name"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fc51604c3bfceeac96ceabb51c1a0caee70f85aa6\u241f990341683702498937:Icons"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return z}));var r,i,a,o=n("2kYt"),c=n("nIj0"),l=n("sEIs"),u=n("SVIu"),s=n("Qq0t"),f=n("dvRg"),p=n("HHFY"),d=n("EM62"),m=n("l4xa"),b=n("4C5Q"),g=n("OZlg"),h=n("e0eB"),y=n("GdrL"),_=n("RlDx"),v=n("2wTY"),O=n("gEyt"),x=n("zV1d"),C=["header","Icons"];r="Search by name",i=" Input icon name to highlight ",a="" + "\ufffd0\ufffd" + "";var T=["title","Copy"];function j(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",7),d["\u0275\u0275i18nAttributes"](1,T),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"](3).copyPath(e)})),d["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,i=d["\u0275\u0275nextContext"](3);d["\u0275\u0275classProp"]("icon_highlighted",i.getHighlight(r)),d["\u0275\u0275property"]("icon",r),d["\u0275\u0275attribute"]("aria-label",r)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"h2",2),d["\u0275\u0275i18n"](2,a),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",5),d["\u0275\u0275template"](4,j,2,4,"button",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit,r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](2),d["\u0275\u0275i18nExp"](n),d["\u0275\u0275i18nApply"](2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",r.icons[n])}}function I(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"h2",2),d["\u0275\u0275i18n"](1,r),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-input",3),d["\u0275\u0275listener"]("ngModelChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().search=e})),d["\u0275\u0275i18n"](3,i),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,w,5,2,"ng-container",4)}if(2&e){var a=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",a.search),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",a.keys)}}var k,M,A=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],S=Object.keys(b).filter((function(e){return-1===A.indexOf(e)&&"tuiCoreIcons"!==e&&"tuiKitIcons"!==e})),L={"Normal interface icons (16px)":S.filter((function(e){return!e.includes("Large")})),"Large interface icons (24px)":S.filter((function(e){return e.includes("Large")})),"Payment systems":A},E=new d.InjectionToken("Icons",{factory:function(){return L}}),P=((M=function(){function e(t,n,r){_classCallCheck(this,e),this.icons=t,this.clipboard=n,this.notifications=r,this.search="",this.keys=Object.keys(this.icons)}return _createClass(e,[{key:"copyPath",value:function(e){this.clipboard.copy(e),this.notifications.show("The name ".concat(e," copied"),{status:"success"}).subscribe()}},{key:"getHighlight",value:function(e){return this.search.length>1&&Object(m.TUI_DEFAULT_MATCHER)(e,this.search)}}]),e}()).\u0275fac=function(e){return new(e||M)(d["\u0275\u0275directiveInject"](E),d["\u0275\u0275directiveInject"](p.b),d["\u0275\u0275directiveInject"](s.TuiNotificationsService))},M.\u0275cmp=d["\u0275\u0275defineComponent"]({type:M,selectors:[["icons"]],decls:3,vars:0,consts:[[6,"header"],["pageTab",""],[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"ngFor","ngForOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,C),d["\u0275\u0275template"](2,I,5,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[g.a,h.a,y.a,_.a,v.b,O.b,c.NgControlStatus,c.NgModel,o.s,x.a],styles:[".title[_ngcontent-%COMP%]{font-weight:700;line-height:24px;font-size:20px;font-family:var(--tui-font-heading);margin:30px 0 12px}.icons[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -12px}.icon[_ngcontent-%COMP%]{margin:12px;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{-webkit-transform:scale(1.6);transform:scale(1.6);-webkit-filter:drop-shadow(2px 1px 0 var(--tui-primary));filter:drop-shadow(2px 1px 0 var(--tui-primary))}"],changeDetection:0}),M),z=((k=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[c.ReactiveFormsModule,c.FormsModule,o.c,s.TuiLinkModule,s.TuiSvgModule,f.TuiMarkerIconModule,f.TuiInputModule,s.TuiButtonModule,s.TuiTextfieldControllerModule,s.TuiHintControllerModule].concat(_toConsumableArray(u.d),[l.f.forChild(Object(u.m)(P))])]}),k)}}]);