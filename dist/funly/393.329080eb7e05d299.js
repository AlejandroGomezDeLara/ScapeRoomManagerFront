"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[393],{54828:(f,c,o)=>{o.d(c,{q:()=>t});var i=o(41571);class t{constructor(){}ngOnInit(){}static#n=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=i.Xpm({type:t,selectors:[["app-loading"]],inputs:{text:"text"},decls:5,vars:1,consts:[[1,"loader-container","row"],[1,"col-12","my-auto"],["src","assets/imgs/box-transparent.png","alt","",1,"loader"],[1,"text"]],template:function(a,p){1&a&&(i.TgZ(0,"div",0)(1,"div",1),i._UZ(2,"img",2),i.TgZ(3,"p",3),i._uU(4),i.qZA()()()),2&a&&(i.xp6(4),i.Oqu(p.text))},styles:[".loader-container[_ngcontent-%COMP%]{text-align:center;z-index:99999;position:fixed;height:100%;overflow:hidden;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;background-position:center;top:0;left:0;right:0}.loader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;font-size:24px;margin-top:10px}.loader-container[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--color-primary);margin-bottom:30px;opacity:1}.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:150px;height:150px;animation:_ngcontent-%COMP%_spin 1.5s linear infinite;opacity:1}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})}},12393:(f,c,o)=>{o.r(c),o.d(c,{LoginModule:()=>d});var i=o(36895),t=o(24006),l=o(67182),n=o(41571),a=o(5830),p=o(7053),h=o(4471),C=o(54828);function O(u,r){if(1&u){const e=n.EpF();n.TgZ(0,"form",8),n.NdJ("ngSubmit",function(){n.CHM(e);const m=n.oxw();return n.KtG(m.submitForm())}),n.TgZ(1,"div",9)(2,"div",10)(3,"div",11),n._UZ(4,"i",12),n.qZA(),n._UZ(5,"input",13),n.qZA()(),n.TgZ(6,"div",9)(7,"div",10)(8,"div",11),n._UZ(9,"i",14),n.qZA(),n._UZ(10,"input",15),n.qZA()(),n.TgZ(11,"div",9)(12,"div",10)(13,"button",16),n._uU(14,"Entrar"),n.qZA()()(),n.TgZ(15,"div",17)(16,"span"),n._uU(17," O entra con "),n.qZA()(),n.TgZ(18,"div",18)(19,"a",19),n._UZ(20,"i",20),n.qZA(),n.TgZ(21,"a",21),n._UZ(22,"i",22),n.qZA(),n.TgZ(23,"a",23),n._UZ(24,"i",24),n.qZA()(),n.TgZ(25,"div",25)(26,"p"),n._uU(27,"\xbfNo tienes cuenta a\xfan? "),n.TgZ(28,"u",26),n._uU(29," Reg\xedstrate"),n.qZA()()()()}if(2&u){const e=n.oxw();n.Q6J("formGroup",e.form),n.xp6(13),n.Q6J("disabled",!e.form.valid)}}class s{constructor(r,e,g,m,x){this.formBuilder=r,this.apiService=e,this.router=g,this.auth=m,this.loading=x,this.form=new t.cw({}),this.isSubmit=!1}ngOnInit(){this.form=this.initForm()}initForm(){return this.formBuilder.group({email:["",[t.kI.required,t.kI.email]],password:["",t.kI.required]})}submitForm(){this.isSubmit=!0,this.loading.startLoading(),this.form.valid?this.apiService.login(this.form.value).subscribe(r=>{console.log(r),r.api_token&&(this.apiService.setTokenToHeaders(r.api_token),this.auth.login(r),this.router.navigateByUrl("/search")),this.loading.stopLoading()},r=>{this.loading.stopLoading(),alert("Error de autentificaci\xf3n")}):(this.loading.stopLoading(),console.log(this.form.errors))}resetForm(){this.form.reset(),this.isSubmit=!1,this.form.setErrors(null)}static#n=this.\u0275fac=function(e){return new(e||s)(n.Y36(t.qu),n.Y36(a.s),n.Y36(l.F0),n.Y36(p.$),n.Y36(h.b))};static#t=this.\u0275cmp=n.Xpm({type:s,selectors:[["app-login"]],decls:11,vars:8,consts:[[1,"login-page",3,"hidden"],["oncanplay","this.play()","onloadedmetadata","this.muted = true","loop",""],["src","assets/videos/neon.mp4","type","video/mp4"],[1,"container","col-lg-6","col-12","text-center"],["src","assets/imgs/logo-vertical-transparent.png","alt","",1,"logo"],[1,"title"],["class","form row g-4",3,"formGroup","ngSubmit",4,"ngIf"],[3,"hidden","text"],[1,"form","row","g-4",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"input-group"],[1,"input-group-text"],[1,"form-icon","fa","fa-user"],["type","text","placeholder","Introducir email","formControlName","email",1,"form-control"],[1,"form-icon","fa","fa-lock"],["type","password","placeholder","Introducir contrase\xf1a","formControlName","password",1,"form-control"],["type","submit",1,"btn-submit",3,"disabled"],[1,"txt1","text-center","p-t-54","p-b-20"],[1,"flex-c-m"],["href","#",1,"login100-social-item","bg3"],[1,"fa-brands","fa-google"],["href","#",1,"login100-social-item","bg1"],[1,"fa-brands","fa-facebook"],["href","#",1,"login100-social-item","bg2"],[1,"fa-brands","fa-twitter"],[1,"col-12","text-center"],["routerLink","/register"]],template:function(e,g){1&e&&(n.TgZ(0,"div",0),n.ALo(1,"async"),n.TgZ(2,"video",1),n._UZ(3,"source",2),n.qZA(),n.TgZ(4,"div",3),n._UZ(5,"img",4),n.TgZ(6,"p",5),n._uU(7,"\xa1Abandona la rutina!"),n.qZA(),n.YNc(8,O,30,2,"form",6),n.qZA()(),n._UZ(9,"app-loading",7),n.ALo(10,"async")),2&e&&(n.Q6J("hidden",n.lcZ(1,4,g.loading.isLoading)),n.xp6(8),n.Q6J("ngIf",g.form),n.xp6(1),n.Q6J("hidden",!n.lcZ(10,6,g.loading.isLoading))("text","Entrando ..."))},dependencies:[i.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,C.q,l.rH,i.Ov],styles:["a[_ngcontent-%COMP%]{text-decoration:none}.login-page[_ngcontent-%COMP%]{width:100%;height:100vh;display:inline-block;display:flex;align-items:center;overflow:hidden;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center}.login-page[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100vw;object-fit:cover;height:100%;z-index:1;filter:brightness(40%);position:absolute}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background-color:#fff;box-shadow:var(--item-box-shadow);padding:0;border-radius:15px;z-index:99}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{margin-top:20px;padding:10px;width:100px}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-icon[_ngcontent-%COMP%]{color:var(--color-primary)}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{padding:25px}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{width:70%;margin:0 auto}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{background:white}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .login100-social-item[_ngcontent-%COMP%]{font-size:25px;color:#fff;display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50%;margin:5px}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .login100-social-item[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover{color:#fff;cursor:pointer;background-color:#333}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-radius:25px 0 0 25px}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-radius:25px;font-size:14px;font-weight:lighter}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]{width:100%;border-radius:25px;padding:10px}.login-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;margin-top:14px;font-size:24px}.form-right[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{color:#fff;background:var(--color-primary);border:none}.form-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:100px}.bg1[_ngcontent-%COMP%]{background-color:#3b5998}.bg2[_ngcontent-%COMP%]{background-color:#1da1f2}.bg3[_ngcontent-%COMP%]{background-color:#ea4335}.flex-c-m[_ngcontent-%COMP%]{display:flex;justify-content:center;-ms-align-items:center;align-items:center}u[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 320px){.container[_ngcontent-%COMP%]{height:100%;border-radius:0!important}.login-page[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 480px){.container[_ngcontent-%COMP%]{padding-top:50px!important;height:100%;border-radius:0!important}.login-page[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:none!important}}"]})}var _=o(18232);const M=[{path:"",component:s}];class d{static#n=this.\u0275fac=function(e){return new(e||d)};static#t=this.\u0275mod=n.oAB({type:d});static#o=this.\u0275inj=n.cJS({imports:[i.ez,t.u5,t.UX,_.K,l.Bz.forChild(M)]})}}}]);