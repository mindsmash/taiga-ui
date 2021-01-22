(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{RU05:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateRangeModule",(function(){return me}));var a,o=n("2kYt"),r=n("nIj0"),i=n("sEIs"),l=n("SVIu"),u=n("hLNI"),d=n("Qq0t"),m=n("dvRg"),c=n("Piem"),p=n("EM62"),s=n("l4xa"),f=n("K/iL"),y=n("WupT"),h=n("OZlg"),g=n("e0eB"),T=n("iyc4"),V=n("Yj6K"),x=n("KG37");a=$localize`:␟ea0633f6d0c9ee8d7a1c6d08fe4d447c34494256␟54715030600255886: If a field is optional, but unfinished field should be marked as invalid, use ${"\ufffd#3\ufffd"}:START_TAG_CODE:tuiUnfinishedValidator${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: directive `;let C=(()=>{class e{constructor(){this.testForm=new r.FormGroup({testValue:new r.FormControl(new s.TuiDayRange(new s.TuiDay(2018,2,10),new s.TuiDay(2018,3,20)))}),this.min=new s.TuiDay(2e3,2,20),this.max=new s.TuiDay(2040,2,20)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-1"]],decls:6,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiUnfinishedValidator","Finish filling the field","formControlName","testValue",3,"min","max"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275i18nStart"](2,a),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-input-date-range",1),p["\u0275\u0275text"](5," Choose dates "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("formGroup",t.testForm),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("min",t.min)("max",t.max))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,V.a,x.a,r.NgControlStatus,r.FormControlName],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{constructor(){this.control=new r.FormControl(new s.TuiDayRange(new s.TuiDay(2018,2,10),new s.TuiDay(2018,3,20)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-date-range-example-2"]],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-date-range",0),p["\u0275\u0275text"](1," Choose dates\n"),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("formControl",t.control)},directives:[V.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var D,b=n("EPR0"),w=n("yHor"),M=n("zGJC"),E=n("FSyC"),S=n("eB8V"),v=n("pQcr"),F=n("gEyt"),I=n("2wTY"),L=n("RlDx"),_=n("u8jZ");D=$localize`:␟907ee3562df94254390e9b5c83ef97a108de26a4␟4278197706161850916:A field to input a range of dates`;const R=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],A=["heading",$localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`];function H(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,D),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](3,R),p["\u0275\u0275element"](4,"tui-input-date-range-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](6,A),p["\u0275\u0275element"](7,"tui-input-date-range-example-2"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2)}}function G(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-date-range",14),p["\u0275\u0275text"](1," Choose dates "),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275property"]("focusable",e.focusable)("formControl",e.control)("defaultViewedMonth",e.defaultViewedMonth)("items",e.items)("markerHandler",e.markerHandler)("min",e.min)("max",e.max)("minLength",e.minLength)("maxLength",e.maxLength)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("disabledItemHandler",e.disabledItemHandler)}}var O,$,k,N,z,U,j,B,Y,K,J;function q(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,O),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275i18nEnd"]())}function Q(e,t){1&e&&p["\u0275\u0275i18n"](0,$)}function W(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,k),p["\u0275\u0275element"](1,"div"),p["\u0275\u0275element"](2,"strong"),p["\u0275\u0275i18nEnd"]())}function Z(e,t){1&e&&p["\u0275\u0275i18n"](0,N)}function X(e,t){1&e&&p["\u0275\u0275i18n"](0,z)}function ee(e,t){1&e&&p["\u0275\u0275i18n"](0,U)}function te(e,t){1&e&&p["\u0275\u0275i18n"](0,j)}function ne(e,t){1&e&&p["\u0275\u0275i18n"](0,B)}function ae(e,t){1&e&&p["\u0275\u0275i18n"](0,Y)}function oe(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo",4),p["\u0275\u0275template"](1,G,2,21,"ng-template"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,q,2,0,"ng-template",5),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabled=t})),p["\u0275\u0275template"](4,Q,1,0,"ng-template",6),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().defaultViewedMonth=t})),p["\u0275\u0275template"](5,W,3,0,"ng-template",7),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().disabledItemHandler=t})),p["\u0275\u0275template"](6,Z,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().items=t})),p["\u0275\u0275template"](7,X,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().markerHandler=t})),p["\u0275\u0275template"](8,ee,1,0,"ng-template",10),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().min=t})),p["\u0275\u0275template"](9,te,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().max=t})),p["\u0275\u0275template"](10,ne,1,0,"ng-template",12),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().minLength=t})),p["\u0275\u0275template"](11,ae,1,0,"ng-template",13),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().maxLength=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](12,"inherited-documentation")}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("control",e.control),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("documentationPropertyValue",e.disabled),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function re(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",15),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,K),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",16),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18nStart"](8,J),p["\u0275\u0275element"](9,"code"),p["\u0275\u0275element"](10,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](11,"tui-doc-code",17),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"li"),p["\u0275\u0275text"](13," Use "),p["\u0275\u0275elementStart"](14,"code"),p["\u0275\u0275text"](15,"TuiInputDateRange"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](16," in template: "),p["\u0275\u0275element"](17,"tui-doc-code",18),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleDeclareForm),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}O=$localize`:␟31216ee7e86a9a777c7e1c7cad3dc3bb8dc54c35␟472633322147615044: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:) `,$=$localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `,k=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,N=$localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `,z=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,U=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,j=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,B=$localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `,Y=$localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `,K=$localize`:␟4acf2c8fe5c567997c2422a234930571db925981␟6630492296149432566: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputDateRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,J=$localize`:␟24bd9acf98b087a0155b1bc8707249be28559a1e␟3960939324467592851: Declare a form (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) or a control (${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:) in your component: `,J=p["\u0275\u0275i18nPostprocess"](J);const ie=["primary","secondary"],le=["success"];let ue=(()=>{class e extends y.a{constructor(){super(...arguments),this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputDateRangeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputDateRangeModule\n    ],\n...\n",this.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-date-range formControlName="testValue">\n        Choose dates\n    </tui-input-date-range>\n</form>\n',this.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl()\n    });\n}\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-date-range-example-1',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(\n            new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n        ),\n    });\n\n    readonly min = new TuiDay(2000, 2, 20);\n\n    readonly max = new TuiDay(2040, 2, 20);\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <p i18n>\n        If a field is optional, but unfinished field should be marked as\n        invalid, use\n        <code>tuiUnfinishedValidator</code> directive\n    </p>\n    <tui-input-date-range\n        tuiUnfinishedValidator="Finish filling the field"\n        formControlName="testValue"\n        [min]="min"\n        [max]="max"\n    >\n        Choose dates\n    </tui-input-date-range>\n</form>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-input-date-range-example-2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample2 {\n    readonly control = new FormControl(\n        new TuiDayRange(new TuiDay(2018, 2, 10), new TuiDay(2018, 3, 20)),\n    );\n}\n",HTML:'<tui-input-date-range class="b-form" [formControl]="control">\n    Choose dates\n</tui-input-date-range>\n'},this.minVariants=[s.TUI_FIRST_DAY,new s.TuiDay(2021,2,5),new s.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.minLengthVariants=[{day:3},{day:15}],this.minLength=null,this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.maxLength=null,this.maxVariants=[s.TUI_LAST_DAY,new s.TuiDay(2018,9,30),new s.TuiDay(2020,2,5),new s.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.markerHandlerVariants=[d.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?ie:le],this.markerHandler=this.markerHandlerVariants[0],this.cleaner=!1,this.disabledItemHandlerVariants=[s.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new r.FormControl(null,r.Validators.required),this.itemsVariants=[[],Object(m.tuiCreateDefaultDayRangePeriods)()],this.items=this.itemsVariants[0],this.defaultViewedMonthVariants=[s.TuiMonth.currentLocal(),s.TuiMonth.currentLocal().append({month:1}),new s.TuiMonth(2007,5)],this.defaultViewedMonth=this.defaultViewedMonthVariants[0]}}return e.\u0275fac=function(t){return de(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-date-range"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(p.forwardRef)(()=>e)}]),p["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDateRange","package","KIT"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","large",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-control",3,"focusable","formControl","defaultViewedMonth","items","markerHandler","min","max","minLength","maxLength","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","tuiHintContent","tuiHintDirection","tuiHintMode","disabledItemHandler"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,H,8,2,"ng-template",1),p["\u0275\u0275template"](2,oe,13,18,"ng-template",1),p["\u0275\u0275template"](3,re,18,3,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[h.a,g.a,T.a,C,P,b.a,w.a,M.a,E.a,V.a,r.NgControlStatus,r.FormControlDirective,S.b,v.b,F.b,I.b,L.a,_.a],encapsulation:2,changeDetection:0}),e})();const de=p["\u0275\u0275getInheritedFactory"](ue);let me=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,m.TuiInputDateRangeModule,r.ReactiveFormsModule,c.a,d.TuiButtonModule,d.TuiLinkModule,u.TuiMobileCalendarDialogModule,d.TuiTextfieldControllerModule,d.TuiHintControllerModule,...l.e,i.f.forChild(Object(l.n)(ue)),m.TuiUnfinishedValidatorModule]]}),e})()}}]);