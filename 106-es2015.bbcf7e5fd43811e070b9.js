(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{hmia:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownModule",(function(){return fe}));var o=n("2kYt"),i=n("nIj0"),a=n("sEIs"),r=n("SVIu"),u=n("l4xa"),p=n("Qq0t"),d=n("dvRg"),l=n("kiPw"),s=n("EM62"),c=n("OZlg"),m=n("e0eB"),h=n("yZWP"),f=n("iyc4"),g=n("4hRd"),w=n("zV1d"),v=n("W2aA"),x=n("1SmB");function y(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",4),s["\u0275\u0275text"](1,"But there is nothing to choose..."),s["\u0275\u0275elementEnd"]())}let b=(()=>{class e{constructor(){this.open=!1}onClick(){this.open=!this.open}onObscured(e){e&&(this.open=!1)}onActiveZone(e){e||(this.open=!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-example-1"]],decls:5,vars:2,consts:[[3,"tuiActiveZoneChange"],["tuiButton","","type","button","iconRight","tuiIconChevronDown",3,"tuiDropdownContent","tuiDropdown","tuiObscured","click"],["polymorpheus",""],["dropdownContent","polymorpheus"],[1,"dropdown"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span",0),s["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onActiveZone(e)})),s["\u0275\u0275elementStart"](1,"button",1),s["\u0275\u0275listener"]("tuiObscured",(function(e){return t.onObscured(e)}))("click",(function(){return t.onClick()})),s["\u0275\u0275text"](2," Choose "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,y,2,0,"ng-template",2,3,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdown",t.open)}},directives:[g.a,w.a,v.a,x.a,l.e],styles:[".dropdown[_ngcontent-%COMP%]{font-weight:400;font-size:14px;font-family:var(--tui-text-font);line-height:16px;letter-spacing:.05em;text-transform:uppercase;padding:4px 12px}"],changeDetection:0}),e})();var D=n("+SFL"),C=n("cweO");function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",3),s["\u0275\u0275element"](1,"tui-avatar",4),s["\u0275\u0275elementStart"](2,"div",5),s["\u0275\u0275elementStart"](3,"div",6),s["\u0275\u0275text"](4,"Taiga UI developer"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"div",7),s["\u0275\u0275text"](6,"Alex Inkin"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",8),s["\u0275\u0275text"](8,"a.inkin"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatarUrl)}}let T=(()=>{class e{constructor(){this.open=!1,this.avatarUrl=D.a}onMouseEnter(){this.open=!0}onMouseLeave(){this.open=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-example-2"]],decls:9,vars:2,consts:[["tuiLink","","mode","pseudo","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownContent","tuiDropdown","mouseenter","mouseleave"],["polymorpheus",""],["dropdownContent","polymorpheus"],[1,"dropdown"],["size","l",3,"rounded","avatarUrl"],[1,"text"],[1,"label"],[1,"name"],[1,"account"]],template:function(e,t){if(1&e&&(s["\u0275\u0275text"](0,"You can ask any questions about "),s["\u0275\u0275elementStart"](1,"code"),s["\u0275\u0275text"](2,"tuiDropdown"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](3," and\n"),s["\u0275\u0275elementStart"](4,"button",0),s["\u0275\u0275listener"]("mouseenter",(function(){return t.onMouseEnter()}))("mouseleave",(function(){return t.onMouseLeave()})),s["\u0275\u0275text"](5," Alex\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](6,"\nwill answer you with joy! "),s["\u0275\u0275template"](7,S,9,2,"ng-template",1,2,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](8);s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdown",t.open)}},directives:[h.a,v.a,l.e,C.a],styles:[".dropdown[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px 12px}.text[_ngcontent-%COMP%]{padding:0 12px}.label[_ngcontent-%COMP%]{font-weight:400;font-size:15px;font-family:var(--tui-text-font);line-height:20px;color:var(--tui-text-03)}.name[_ngcontent-%COMP%]{font-weight:700;font-family:var(--tui-heading-font)}.account[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{line-height:16px;font-size:14px}.account[_ngcontent-%COMP%]{font-weight:400;font-family:var(--tui-text-font);margin-top:4px;color:var(--tui-text-02)}"],changeDetection:0}),e})();var E=n("3p4X"),q=n("kuMc");function A(e,t){1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"p",7),s["\u0275\u0275text"](2," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p"),s["\u0275\u0275text"](4," Dolores est hic impedit odio. Culpa debitis deleniti eaque explicabo id maxime officiis quasi quos, rerum. Adipisci aut consequatur earum esse facere fugit, inventore ipsa modi officia, perspiciatis tempore voluptates! "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275text"](6," Blanditiis debitis earum eius error itaque nemo repellat rerum totam vel voluptates. Cupiditate ducimus et ex, facilis magni maiores nemo nulla sed sunt, tempore vel vero. Dicta ea nihil sapiente! "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275text"](8," Ad aliquid aperiam assumenda consequuntur dolore eius esse et exercitationem facere illo, maiores maxime nam, natus nemo nihil officia optio placeat quia recusandae rem reprehenderit sapiente sed similique ut, veritatis! "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"p"),s["\u0275\u0275text"](10," Ab animi beatae commodi consequuntur culpa eaque earum eligendi eveniet fugit, id illo impedit in ipsa ipsam nostrum optio pariatur, perspiciatis quas quidem quis sed temporibus velit vitae? Consequuntur, quia! "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"p"),s["\u0275\u0275text"](12," Dolorem eligendi est illo impedit iste laudantium, odit pariatur quam quasi tenetur. Dolor, dolorem esse illo maiores nihil pariatur quisquam saepe! Ea eaque inventore iure nulla porro possimus sunt vero! "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"p"),s["\u0275\u0275text"](14," Inventore itaque iure pariatur! Adipisci animi aut corporis dolorum, eaque est exercitationem id illum laboriosam laborum libero molestias numquam obcaecati perferendis provident reprehenderit sapiente sequi similique tempora veniam. Reprehenderit, sequi? "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"p"),s["\u0275\u0275text"](16," Adipisci alias blanditiis consectetur cumque dolore dolorum et facere hic illo laboriosam, laudantium modi natus neque nisi optio possimus, quaerat quis ratione rerum, suscipit tempora tempore ullam voluptatum! Autem, rem. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"p"),s["\u0275\u0275text"](18," Consequuntur cum doloribus eaque excepturi nisi. Aperiam autem beatae debitis deleniti dicta dignissimos, doloribus error et eum, eveniet illo itaque iure magni molestias placeat quas ratione tenetur vitae voluptates voluptatum. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"p"),s["\u0275\u0275text"](20," Consequuntur fugit in odit qui sapiente! Consequuntur, distinctio illo inventore iste nemo non odio quia, sint tempora tenetur ut voluptatum. Ab aut doloremque laborum maiores modi reprehenderit sit tempora! Molestias? "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]())}function P(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"input",5),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().value=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](1,A,21,0,"ng-container",6)}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("ngModel",e.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.showBigText)}}let M=(()=>{class e{constructor(e,t){this.open=!1,this.value="some data",this.showBigText=!1,Object(E.a)(3e3).pipe(Object(u.watch)(t),Object(q.a)(e)).subscribe(()=>{this.showBigText=!this.showBigText,t.markForCheck()})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](u.TuiDestroyService),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-example-3"]],features:[s["\u0275\u0275ProvidersFeature"]([u.TuiDestroyService])],decls:6,vars:4,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"tuiDropdownContent","tuiDropdown"],["type","checkbox",3,"ngModel","ngModelChange"],["polymorpheus",""],["dropdownContent","polymorpheus"],["type","text",1,"dropdown",3,"ngModel","ngModelChange"],[4,"ngIf"],["id","aaa"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"input",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"label",1),s["\u0275\u0275elementStart"](2,"input",2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.open=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](3," open\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,P,2,2,"ng-template",3,4,s["\u0275\u0275templateRefExtractor"])),2&e){const e=s["\u0275\u0275reference"](5);s["\u0275\u0275property"]("ngModel",t.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdown",t.open),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngModel",t.open)}},directives:[i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,v.a,i.CheckboxControlValueAccessor,l.e,o.t],styles:[".dropdown[_ngcontent-%COMP%]{margin:16px}"],changeDetection:0}),e})();var V=n("EPR0"),O=n("yHor"),L=n("zGJC"),_=n("u8jZ");const k=["header",$localize`:␟02877ac86ce0bf8a4be0038f3408197fb7185834␟6575185929467550326:Dropdown`];var $,R;$=$localize`:␟5e577ab7b36ec4003d5c69e7c6f09d4fe76126e1␟465024112669348259:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiDropdown${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: shows a dropdown with custom template. Use ${"\ufffd#3\ufffd"}:START_LINK:ActiveZone${"\ufffd/#3\ufffd"}:CLOSE_LINK: directive to hide dropdown. `,R=$localize`:␟c6208ef45e23d92500a4f168bff26b73c40c2018␟1856680963819419946: See also ${"\ufffd#6\ufffd"}:START_LINK:HostedDropdown${"\ufffd/#6\ufffd"}:CLOSE_LINK:`;const I=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],H=["heading",$localize`:␟e968cb18d9e7ef9feb2fd4181df0e6f282b92250␟3267720546211848124:Intresting one`],z=["heading",$localize`:␟a070bd37ddb9b45ffc97f6f50824096ae922e0f2␟5074208700730793721:Change detection`],U=function(){return["/tui-active-zone"]},B=function(){return["/tui-hosted-dropdown"]};function N(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",2),s["\u0275\u0275i18nStart"](1,$),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275element"](3,"a",3),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"p"),s["\u0275\u0275i18nStart"](5,R),s["\u0275\u0275element"](6,"a",3),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](8,I),s["\u0275\u0275element"](9,"tui-dropdown-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](11,H),s["\u0275\u0275element"](12,"tui-dropdown-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](14,z),s["\u0275\u0275element"](15,"tui-dropdown-example-3"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("routerLink",s["\u0275\u0275pureFunction0"](5,U)),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("routerLink",s["\u0275\u0275pureFunction0"](6,B)),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3)}}var j,G,Z,W,F,K,Y,J,X,Q,ee,te;function ne(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",20),s["\u0275\u0275i18nStart"](1,j),s["\u0275\u0275element"](2,"p"),s["\u0275\u0275element"](3,"button",21),s["\u0275\u0275element"](4,"p"),s["\u0275\u0275element"](5,"sub"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"]())}function oe(e,t){1&e&&s["\u0275\u0275i18n"](0,G)}function ie(e,t){1&e&&s["\u0275\u0275i18n"](0,Z)}function ae(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,W),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&s["\u0275\u0275i18n"](0,F)}function ue(e,t){1&e&&s["\u0275\u0275i18n"](0,K)}function pe(e,t){1&e&&s["\u0275\u0275i18n"](0,Y)}function de(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,J),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&s["\u0275\u0275i18n"](0,X)}function se(e,t){1&e&&s["\u0275\u0275i18n"](0,Q)}function ce(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"span",7),s["\u0275\u0275listener"]("tuiActiveZoneChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onActiveZone(t)})),s["\u0275\u0275elementStart"](2,"button",8),s["\u0275\u0275listener"]("tuiObscured",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onObscured(t)}))("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onClick()})),s["\u0275\u0275text"](3," PRESS! "),s["\u0275\u0275elementStart"](4,"i"),s["\u0275\u0275text"](5," * There is also a pretty long text to check its width limitations "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](6,ne,6,0,"ng-template",9,10,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-documentation"),s["\u0275\u0275template"](9,oe,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().open=t})),s["\u0275\u0275template"](10,ie,1,0,"ng-template",12),s["\u0275\u0275template"](11,ae,2,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownAlign=t})),s["\u0275\u0275template"](12,re,1,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownDirection=t})),s["\u0275\u0275template"](13,ue,1,0,"ng-template",15),s["\u0275\u0275template"](14,pe,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=t})),s["\u0275\u0275template"](15,de,2,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownMinHeight=t})),s["\u0275\u0275template"](16,le,1,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=t})),s["\u0275\u0275template"](17,se,1,0,"ng-template",19),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().tuiDropdownSided=t})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275reference"](7),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdownMinHeight",t.tuiDropdownMinHeight)("tuiDropdownMaxHeight",t.tuiDropdownMaxHeight)("tuiDropdownAlign",t.tuiDropdownAlign)("tuiDropdownDirection",t.tuiDropdownDirection)("tuiDropdownLimitWidth",t.tuiDropdownLimitWidth)("tuiDropdownSided",t.tuiDropdownSided)("tuiDropdown",t.open),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("documentationPropertyValue",t.open),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",t.alignVariants)("documentationPropertyValue",t.tuiDropdownAlign),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",t.dropdownDirectionVariants)("documentationPropertyValue",t.tuiDropdownDirection),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",t.tuiDropdownLimitWidthVariants)("documentationPropertyValue",t.tuiDropdownLimitWidth),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMinHeight),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMaxHeight),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownSided)}}function me(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",22),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,ee),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,te),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}j=$localize`:␟11710a06c5c1df4d1e26c97dd8a5877261a5465e␟7283687588542014885: Here can be any content ${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH:You can even insert other components:${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_BUTTON:Do not touch!${"\ufffd/#3\ufffd"}:CLOSE_TAG_BUTTON:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_PARAGRAPH:Everything you want... *${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_SUBSTRIPT: * except cases of Worldwide rights violation ${"\ufffd/#5\ufffd"}:CLOSE_SUBSTRIPT:`,j=s["\u0275\u0275i18nPostprocess"](j),G=$localize`:␟e20d43d0d67f601b29cd6fe233b5923e59bdef3d␟2368949966049627739: Show dropdown `,Z=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,W=$localize`:␟d3788d356806a87a67a91d3d61b0314661b57e94␟151402919324976133: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,F=$localize`:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `,K=$localize`:␟61d2797cfb021d05ea2691f565dd41ec47478a3c␟5413767166426586835: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `,Y=$localize`:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `,J=$localize`:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,X=$localize`:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `,Q=$localize`:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `,ee=$localize`:␟cdae982a118f6190f7e40acf7571be1f239ce229␟3428050681531029520: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,te=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let he=(()=>{class e{constructor(){this.exampleImportModule="import {TuiDropdownModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownModule\n    ],\n...\n",this.exampleInsertTemplate='<div [tuiDropdownContent]="dropdownContent"\n     [tuiDropdown]="open">\n    Host element\n</div>\n\n<ng-template #dropdownContent>\n    Dropdown content\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample1 {\n    open = false;\n\n    onClick() {\n        this.open = !this.open;\n    }\n\n    onObscured(obscured: boolean) {\n        if (obscured) {\n            this.open = false;\n        }\n    }\n\n    onActiveZone(active: boolean) {\n        if (!active) {\n            this.open = false;\n        }\n    }\n}\n",HTML:'<span (tuiActiveZoneChange)="onActiveZone($event)">\n    <button\n        tuiButton\n        type="button"\n        iconRight="tuiIconChevronDown"\n        [tuiDropdownContent]="dropdownContent"\n        [tuiDropdown]="open"\n        (tuiObscured)="onObscured($event)"\n        (click)="onClick()"\n    >\n        Choose\n    </button>\n    <ng-template #dropdownContent="polymorpheus" polymorpheus>\n        <div class="dropdown">But there is nothing to choose...</div>\n    </ng-template>\n</span>\n'},this.example2={TypeScript:"import {default as avatarUrl} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample2 {\n    open = false;\n\n    avatarUrl = avatarUrl;\n\n    onMouseEnter() {\n        this.open = true;\n    }\n\n    onMouseLeave() {\n        this.open = false;\n    }\n}\n",HTML:'You can ask any questions about <code>tuiDropdown</code> and\n<button\n    tuiLink\n    mode="pseudo"\n    tuiDropdownAlign="right"\n    tuiDropdownDirection="top"\n    [tuiDropdownContent]="dropdownContent"\n    [tuiDropdown]="open"\n    (mouseenter)="onMouseEnter()"\n    (mouseleave)="onMouseLeave()"\n>\n    Alex\n</button>\nwill answer you with joy!\n\n<ng-template #dropdownContent="polymorpheus" polymorpheus>\n    <div class="dropdown">\n        <tui-avatar\n            size="l"\n            [rounded]="true"\n            [avatarUrl]="avatarUrl"\n        ></tui-avatar>\n        <div class="text">\n            <div class="label">Taiga UI developer</div>\n            <div class="name">Alex Inkin</div>\n            <div class="account">a.inkin</div>\n        </div>\n    </div>\n</ng-template>\n'},this.example3={TypeScript:"import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample3 {\n    open = false;\n\n    value = 'some data';\n\n    showBigText = false;\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(3000)\n            .pipe(watch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.showBigText = !this.showBigText;\n                changeDetectorRef.markForCheck();\n            });\n    }\n}\n",HTML:'<input type="text" [(ngModel)]="value" />\n\n<label [tuiDropdownContent]="dropdownContent" [tuiDropdown]="open">\n    <input type="checkbox" [(ngModel)]="open" />\n    open\n</label>\n\n<ng-template #dropdownContent="polymorpheus" polymorpheus>\n    <input class="dropdown" type="text" [(ngModel)]="value" />\n    <ng-container *ngIf="showBigText">\n        <p id="aaa">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab\n            assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo\n            neque officiis pariatur quidem quos rerum sunt, temporibus tenetur\n            ullam vitae?\n        </p>\n        <p>\n            Dolores est hic impedit odio. Culpa debitis deleniti eaque explicabo\n            id maxime officiis quasi quos, rerum. Adipisci aut consequatur earum\n            esse facere fugit, inventore ipsa modi officia, perspiciatis tempore\n            voluptates!\n        </p>\n        <p>\n            Blanditiis debitis earum eius error itaque nemo repellat rerum totam\n            vel voluptates. Cupiditate ducimus et ex, facilis magni maiores nemo\n            nulla sed sunt, tempore vel vero. Dicta ea nihil sapiente!\n        </p>\n        <p>\n            Ad aliquid aperiam assumenda consequuntur dolore eius esse et\n            exercitationem facere illo, maiores maxime nam, natus nemo nihil\n            officia optio placeat quia recusandae rem reprehenderit sapiente sed\n            similique ut, veritatis!\n        </p>\n        <p>\n            Ab animi beatae commodi consequuntur culpa eaque earum eligendi\n            eveniet fugit, id illo impedit in ipsa ipsam nostrum optio pariatur,\n            perspiciatis quas quidem quis sed temporibus velit vitae?\n            Consequuntur, quia!\n        </p>\n        <p>\n            Dolorem eligendi est illo impedit iste laudantium, odit pariatur\n            quam quasi tenetur. Dolor, dolorem esse illo maiores nihil pariatur\n            quisquam saepe! Ea eaque inventore iure nulla porro possimus sunt\n            vero!\n        </p>\n        <p>\n            Inventore itaque iure pariatur! Adipisci animi aut corporis dolorum,\n            eaque est exercitationem id illum laboriosam laborum libero\n            molestias numquam obcaecati perferendis provident reprehenderit\n            sapiente sequi similique tempora veniam. Reprehenderit, sequi?\n        </p>\n        <p>\n            Adipisci alias blanditiis consectetur cumque dolore dolorum et\n            facere hic illo laboriosam, laudantium modi natus neque nisi optio\n            possimus, quaerat quis ratione rerum, suscipit tempora tempore ullam\n            voluptatum! Autem, rem.\n        </p>\n        <p>\n            Consequuntur cum doloribus eaque excepturi nisi. Aperiam autem\n            beatae debitis deleniti dicta dignissimos, doloribus error et eum,\n            eveniet illo itaque iure magni molestias placeat quas ratione\n            tenetur vitae voluptates voluptatum.\n        </p>\n        <p>\n            Consequuntur fugit in odit qui sapiente! Consequuntur, distinctio\n            illo inventore iste nemo non odio quia, sint tempora tenetur ut\n            voluptatum. Ab aut doloremque laborum maiores modi reprehenderit sit\n            tempora! Molestias?\n        </p>\n    </ng-container>\n</ng-template>\n'},this.tuiDropdownMinHeight=p.DEFAULT_MIN_HEIGHT,this.tuiDropdownMaxHeight=p.DEFAULT_MAX_HEIGHT,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0],this.open=!1}onClick(){this.open=!this.open}onObscured(e){e&&(this.open=!1)}onActiveZone(e){e||(this.open=!1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-dropdown"]],decls:5,vars:0,consts:[["package","CORE",6,"header"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],["id","base",3,"content",6,"heading"],["id","full-featured",3,"content",6,"heading"],["id","change-detection",3,"content",6,"heading"],[3,"tuiActiveZoneChange"],["tuiButton","","type","button",3,"tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided","tuiDropdown","tuiObscured","click"],["polymorpheus",""],["dropdownContent","polymorpheus"],["documentationPropertyName","tuiDropdown","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,k),s["\u0275\u0275template"](2,N,16,7,"ng-template",1),s["\u0275\u0275template"](3,ce,18,18,"ng-template",1),s["\u0275\u0275template"](4,me,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[c.a,m.a,h.a,a.e,f.a,b,T,M,V.a,g.a,w.a,v.a,x.a,l.e,O.a,L.a,_.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:320px;padding:8px 20px}"],changeDetection:0}),e})(),fe=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,p.TuiLinkModule,d.TuiAvatarModule,p.TuiButtonModule,p.TuiDropdownModule,d.TuiSelectModule,u.TuiObscuredModule,u.TuiActiveZoneModule,...r.e,a.f.forChild(Object(r.n)(he)),l.c,d.TuiToggleModule]]}),e})()}}]);