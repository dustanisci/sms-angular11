(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MCbB:function(n,t,e){"use strict";e.r(t),e.d(t,"SmsListCancelModule",function(){return w});var i=e("ofXK"),c=e("IzEk"),o=e("vY5A"),a=e("A1oB"),s=e("MPj9"),r=e("fXoL"),l=e("tyNb"),d=e("AytR"),b=e("djKD");let p=(()=>{class n{constructor(n){this.api=n}getAll(){return this.api.get(d.a.apiShedule)}}return n.\u0275fac=function(t){return new(t||n)(r.Vb(b.a))},n.\u0275prov=r.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=e("tfCg"),h=e("A5z7"),g=e("ajRT"),u=e("hrt4");function f(n,t){if(1&n&&(r.Rb(0,"mat-chip",7),r.rc(1),r.Qb()),2&n){const n=t.$implicit;r.Bb(1),r.tc(" ",n," ")}}function C(n,t){if(1&n){const n=r.Sb();r.Rb(0,"app-accordion",5),r.Yb("btnEdit",function(){r.lc(n);const e=t.$implicit;return r.bc().edit(e)})("btnDelete",function(){r.lc(n);const e=t.$implicit;return r.bc().actionCancel(e)}),r.Rb(1,"content"),r.Rb(2,"label"),r.rc(3,"Mensagem"),r.Qb(),r.Rb(4,"span"),r.rc(5),r.Qb(),r.Qb(),r.Rb(6,"content"),r.Rb(7,"label"),r.rc(8,"Grupo de contatos"),r.Qb(),r.Rb(9,"span"),r.rc(10),r.Qb(),r.Qb(),r.Rb(11,"mat-chip-list"),r.pc(12,f,2,1,"mat-chip",6),r.Qb(),r.Qb()}if(2&n){const n=t.$implicit;r.ec("status",n.status)("title",n.hour),r.Bb(5),r.sc(n.msg),r.Bb(5),r.sc(n.listPhone.listName),r.Bb(2),r.ec("ngForOf",n.listPhone.phones)}}function y(n,t){1&n&&(r.Rb(0,"div",8),r.Rb(1,"h1"),r.rc(2,"N\xe3o h\xe1 SMS agendados"),r.Qb(),r.Qb())}function O(n,t){if(1&n){const n=r.Sb();r.Rb(0,"app-modal",9),r.Yb("btnPrimaryClick",function(){return r.lc(n),r.bc().modal.isOpen=!1})("btnSecondaryClick",function(){return r.lc(n),r.bc().cancel()}),r.Qb()}if(2&n){const n=r.bc();r.ec("description",n.modal.description)("type",n.modal.type)("btnSecondary",n.modal.btnSecondary?n.modal.btnSecondary:"")("btnPrimary",n.modal.btnPrimary)}}function P(n,t){1&n&&r.Nb(0,"app-full-screen-loading")}let M=(()=>{class n extends s.a{constructor(n,t,e){super(),this.router=n,this.serviceListCancelSms=t,this.serviceEditSms=e,this.modal={},this.loader=!1,this.sms=[],this.smsCancel={},this.idCancel=0}ngOnInit(){this.getData()}getData(){this.loader=!0,this.serviceListCancelSms.getAll().pipe(Object(c.a)(1)).subscribe(n=>{this.sms=n,this.loader=!1},()=>{this.loader=!1,this.modal=this.errorApi()})}edit(n){this.router.navigate([o.b.smsEdit,JSON.stringify(n)])}actionCancel(n){this.modal.btnPrimary="Cancelar",this.modal.btnSecondary="Confirmar",this.modal.description="Deseja realmente cancelar o agendamento do SMS?",this.modal.type=0,this.modal.isOpen=!0,this.smsCancel=n}cancel(){this.smsCancel.status=a.b.CANCELED,this.loader=!0,this.serviceEditSms.updateSms(this.smsCancel).pipe(Object(c.a)(1)).subscribe(()=>{this.sms.find(n=>{n.id===this.smsCancel.id&&(n.status=a.b.CANCELED),this.modal.isOpen=!1,this.loader=!1})},()=>{this.loader=!1,this.modal=this.errorApi()})}}return n.\u0275fac=function(t){return new(t||n)(r.Mb(l.b),r.Mb(p),r.Mb(m.a))},n.\u0275cmp=r.Gb({type:n,selectors:[["app-sms-list-cancel"]],features:[r.yb],decls:5,vars:4,consts:[[1,"container-sms"],[3,"status","title","btnEdit","btnDelete",4,"ngFor","ngForOf"],["class","no-record",4,"ngIf"],[3,"description","type","btnSecondary","btnPrimary","btnPrimaryClick","btnSecondaryClick",4,"ngIf"],[4,"ngIf"],[3,"status","title","btnEdit","btnDelete"],["color","primary","selected","",4,"ngFor","ngForOf"],["color","primary","selected",""],[1,"no-record"],[3,"description","type","btnSecondary","btnPrimary","btnPrimaryClick","btnSecondaryClick"]],template:function(n,t){1&n&&(r.Rb(0,"div",0),r.pc(1,C,13,5,"app-accordion",1),r.pc(2,y,3,0,"div",2),r.Qb(),r.pc(3,O,1,4,"app-modal",3),r.pc(4,P,1,0,"app-full-screen-loading",4)),2&n&&(r.Bb(1),r.ec("ngForOf",t.sms),r.Bb(1),r.ec("ngIf",!t.sms.length&&!t.loader),r.Bb(1),r.ec("ngIf",t.modal.isOpen),r.Bb(1),r.ec("ngIf",t.loader))},directives:[i.i,i.j,a.a,h.b,h.a,g.a,u.a],styles:[".container-sms[_ngcontent-%COMP%]{position:relative;width:50%;display:block;margin:20px auto}@media only screen and (max-width:800px){.container-sms[_ngcontent-%COMP%]{margin:100px auto 20px;width:95%}}.container-sms[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%]{margin-bottom:25px;display:block}.container-sms[_ngcontent-%COMP%]   .no-record[_ngcontent-%COMP%]{background:#fff;padding:10px;border-radius:20px;min-height:100px;display:flex;justify-content:center;align-items:center;width:300px;margin:0 auto}.container-sms[_ngcontent-%COMP%]   .no-record[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px;margin:0}@media only screen and (max-width:500px){.container-sms[_ngcontent-%COMP%]   .no-record[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px}}.container-sms[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%]   content[_ngcontent-%COMP%]{margin-bottom:30px;display:block}.container-sms[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%]   content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:bolder;display:block}.container-sms[_ngcontent-%COMP%]   app-accordion[_ngcontent-%COMP%]   content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}"]}),n})();var S=e("tk/3"),_=e("h0RP"),v=e("7Fby"),k=e("iphE"),x=e("NFeN");const R=[{path:"",component:M}];let w=(()=>{class n{}return n.\u0275mod=r.Kb({type:n}),n.\u0275inj=r.Jb({factory:function(t){return new(t||n)},providers:[p,m.a,b.a],imports:[[i.b,l.e.forChild(R),_.a,S.b,h.d,k.a,v.a,x.b]]}),n})()}}]);