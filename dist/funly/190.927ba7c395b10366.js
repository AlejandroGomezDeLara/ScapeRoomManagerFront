"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[190],{54828:(h,d,c)=>{c.d(d,{q:()=>i});var n=c(41571);class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-loading"]],inputs:{text:"text"},decls:5,vars:1,consts:[[1,"loader-container","row"],[1,"col-12","my-auto"],["src","assets/imgs/box-transparent.png","alt","",1,"loader"],[1,"text"]],template:function(r,l){1&r&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.TgZ(3,"p",3),n._uU(4),n.qZA()()()),2&r&&(n.xp6(4),n.Oqu(l.text))},styles:[".loader-container[_ngcontent-%COMP%]{text-align:center;z-index:99999;position:fixed;height:100%;overflow:hidden;background:rgba(0,0,0,.4);top:0;left:0;right:0}.loader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;font-size:24px;margin-top:10px}.loader-container[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--color-primary);margin-bottom:30px;opacity:1}.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:150px;height:150px;animation:_ngcontent-%COMP%_spin 1s linear infinite;opacity:1}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})}},18232:(h,d,c)=>{c.d(d,{K:()=>t});var n=c(36895),i=c(41571);class t{static#t=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275mod=i.oAB({type:t});static#e=this.\u0275inj=i.cJS({imports:[n.ez]})}},12187:(h,d,c)=>{c.d(d,{m:()=>i});var n=c(41571);class i{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(r){return new(r||i)};static#n=this.\u0275cmp=n.Xpm({type:i,selectors:[["home-footer"]],decls:23,vars:0,consts:[[1,"footer","justify-content-center","row"],[1,"logo","col-lg-2","col-12","my-auto"],["src","assets/imgs/logo-transparent.png","alt",""],[1,"text","col-lg-2","col-12","my-auto"],[1,"copyright"]],template:function(r,l){1&r&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3)(4,"p"),n._uU(5,"Reserva con nosotros"),n.qZA(),n.TgZ(6,"p"),n._uU(7,"Scape Rooms"),n.qZA(),n.TgZ(8,"p"),n._uU(9,"Laser tag"),n.qZA(),n.TgZ(10,"p"),n._uU(11,"Carts"),n.qZA()(),n.TgZ(12,"div",3)(13,"p"),n._uU(14,"Empresas"),n.qZA(),n.TgZ(15,"p"),n._uU(16,"Contacto"),n.qZA(),n.TgZ(17,"p"),n._uU(18,"Preguntas frecuentes"),n.qZA(),n.TgZ(19,"p"),n._uU(20,"A\xf1adir evento"),n.qZA()(),n.TgZ(21,"p",4),n._uU(22,"2022 Funly SL, Todos los derechos reservados"),n.qZA()())},styles:[".footer[_ngcontent-%COMP%]{box-shadow:var(--item-box-shadow);background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center;color:#fff;padding:20px;position:relative;margin:0;width:100%}.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{position:absolute;font-size:10px;color:#ccc;width:auto;bottom:15px;right:15px}"]})}},11209:(h,d,c)=>{c.d(d,{_:()=>t});var n=c(36895),i=c(41571);class t{static#t=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275mod=i.oAB({type:t});static#e=this.\u0275inj=i.cJS({imports:[n.ez]})}},39190:(h,d,c)=>{c.r(d),c.d(d,{HomeModule:()=>P});var n=c(36895),i=c(67182),t=c(41571);const m=[];class r{static#t=this.\u0275fac=function(e){return new(e||r)};static#n=this.\u0275mod=t.oAB({type:r});static#e=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(m),i.Bz]})}var l=c(4471),b=c(12187),v=c(54828),x=c(65412),p=c(24006);function w(_,o){if(1&_){const e=t.EpF();t.TgZ(0,"i",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteSearch())}),t.qZA()}}function y(_,o){if(1&_){const e=t.EpF();t.TgZ(0,"span",12),t.NdJ("click",function(){const g=t.CHM(e).$implicit,F=t.oxw();return t.KtG(F.searchByGameCategory(g))}),t._uU(1),t.qZA()}if(2&_){const e=o.$implicit;t.xp6(1),t.hij(" ",null==e?null:e.name," ")}}class u{constructor(o,e,a){this.data=o,this.dialogRef=e,this.router=a,this.categories=[],this.selected_address="",this.search=""}ngOnInit(){this.categories=this.data.categories,this.selected_address=this.data.selected_address}deleteSearch(){this.search=""}makeSearch(){this.dialogRef.close(this.search)}searchByGameCategory(o){console.log("CATEGORIA",o),this.router.navigate(["/search"],{queryParams:{c:o.id,a:this.selected_address}}),this.dialogRef.close(this.search)}static#t=this.\u0275fac=function(e){return new(e||u)(t.Y36(x.WI),t.Y36(x.so),t.Y36(i.F0))};static#n=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-search-dialog"]],decls:14,vars:3,consts:[[1,"modal-header"],[1,"search-icon","fa","fa-search"],["type","text","placeholder","\xbfQu\xe9 buscas?",3,"ngModel","ngModelChange"],["class","close-icon fa-solid fa-circle-xmark",3,"click",4,"ngIf"],[1,"modal-content"],[1,"events"],[1,"categories","row"],[3,"click",4,"ngFor","ngForOf"],[1,"modal-footer"],[1,"change-city-btn",3,"click"],[1,"fa","fa-search"],[1,"close-icon","fa-solid","fa-circle-xmark",3,"click"],[3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"i",1),t.TgZ(2,"input",2),t.NdJ("ngModelChange",function(g){return a.search=g}),t.qZA(),t.YNc(3,w,1,0,"i",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"h2"),t._uU(7,"Eventos de ocio m\xe1s populares"),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,y,2,1,"span",7),t.qZA()()(),t.TgZ(10,"div",8)(11,"button",9),t.NdJ("click",function(){return a.makeSearch()}),t._UZ(12,"i",10),t._uU(13," Buscar "),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",a.search),t.xp6(1),t.Q6J("ngIf",a.search),t.xp6(6),t.Q6J("ngForOf",a.categories))},dependencies:[n.sg,n.O5,p.Fj,p.JJ,p.On],styles:[".modal-header[_ngcontent-%COMP%]{margin-bottom:20px;position:relative;border-bottom:1px solid #ccc}.modal-header[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{color:var(--color-primary);font-size:16px}.modal-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px;font-size:16px;border:none;width:100%;float:left}.modal-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none!important}.modal-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;top:33%;right:2%;opacity:.5;font-size:18px;color:var(--color-primary);cursor:pointer}.recomendations[_ngcontent-%COMP%]{margin-bottom:20px}.recomendations[_ngcontent-%COMP%]   .recomendation[_ngcontent-%COMP%]:hover{color:var(--color-primary);cursor:pointer}h2[_ngcontent-%COMP%]{font-weight:400}.categories[_ngcontent-%COMP%]{padding:5px;margin-bottom:10px}.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin-right:5px;width:auto;display:inline;float:left;padding:5px 15px;border-radius:25px;background:#ccc;color:#000;margin-bottom:10px}.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background:var(--color-primary);color:#fff;box-shadow:var(--item-box-shadow)}.modal-footer[_ngcontent-%COMP%]   .change-city-btn[_ngcontent-%COMP%]{background:var(--color-primary);color:#fff;padding:15px 55px;font-size:14px;border-radius:25px;margin:25px auto 0;border:none;box-shadow:var(--item-box-shadow);display:block}.modal-footer[_ngcontent-%COMP%]   .change-city-btn[_ngcontent-%COMP%]:hover{box-shadow:1px 8px 24px #0000004f}"]})}var Z=c(5830);const A=["addresstext"];function T(_,o){if(1&_){const e=t.EpF();t.TgZ(0,"i",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteAddress())}),t.qZA()}}class f{constructor(o,e,a){this.dialog=o,this.apiService=e,this.router=a,this.searchFilter=new t.vpe,this.selected_name="",this.categories=[]}ngOnInit(){this.getCategories()}ngAfterViewInit(){this.getPlaceAutocomplete()}getPlaceAutocomplete(){const o=new google.maps.places.Autocomplete(this.addresstext.nativeElement,{componentRestrictions:{country:"ES"},types:["(regions)"]});google.maps.event.addListener(o,"place_changed",()=>{const e=o.getPlace();console.log(e),this.selected_address=e.address_components[0].long_name})}checkAddressEmpty(){""==this.selected_address&&this.search()}search(){this.router.navigate(["/search"],{queryParams:{a:this.selected_address,q:this.selected_name}})}checkNameEmpty(){""==this.selected_name&&this.search()}getCategories(){this.apiService.getEntity("categories").subscribe(o=>{this.categories=o})}openDialog(){this.dialog.open(u,{width:"700px",data:{categories:this.categories,selected_address:this.selected_address},backdropClass:"backdropBackground"}).afterClosed().subscribe(e=>{console.log("The dialog was closed"),console.log(e),this.selected_name=e})}deleteAddress(){this.selected_address=""}static#t=this.\u0275fac=function(e){return new(e||f)(t.Y36(x.uw),t.Y36(Z.s),t.Y36(i.F0))};static#n=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-autocomplete-searchbar"]],viewQuery:function(e,a){if(1&e&&t.Gf(A,5),2&e){let s;t.iGM(s=t.CRH())&&(a.addresstext=s.first)}},inputs:{selected_address:"selected_address",categories:"categories"},outputs:{searchFilter:"searchFilter"},decls:12,vars:4,consts:[[1,"searchbar","row"],[1,"input-container","col-12","col-lg-6"],["type","text","placeholder","Ciudad o regi\xf3n",1,"input",3,"ngModel","ngModelChange"],["addresstext",""],[1,"search-icon","fa","fa-location-dot"],["class","close-icon fa-solid fa-circle-xmark",3,"click",4,"ngIf"],[1,"name-container","col-12","col-lg-6",3,"click"],["src","assets/imgs/box-transparent.svg",1,"name-icon"],["type","text","placeholder","\xbfQu\xe9 buscas?","disabled","",1,"input","name",3,"ngModel","ngModelChange"],[1,"change-city-btn",3,"click"],[1,"fa","fa-search"],[1,"close-icon","fa-solid","fa-circle-xmark",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),t.NdJ("ngModelChange",function(g){return a.autocompleteInput=g})("ngModelChange",function(g){return a.selected_address=g}),t.qZA(),t._UZ(4,"i",4),t.YNc(5,T,1,0,"i",5),t.qZA(),t.TgZ(6,"div",6),t.NdJ("click",function(){return a.openDialog()}),t._UZ(7,"img",7),t.TgZ(8,"input",8),t.NdJ("ngModelChange",function(g){return a.selected_name=g}),t.qZA()()(),t.TgZ(9,"button",9),t.NdJ("click",function(){return a.search()}),t._UZ(10,"i",10),t._uU(11," Buscar "),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngModel",a.autocompleteInput)("ngModel",a.selected_address),t.xp6(3),t.Q6J("ngIf",a.selected_address),t.xp6(3),t.Q6J("ngModel",a.selected_name))},dependencies:[p.Fj,p.JJ,p.On,n.O5],styles:[".searchbar[_ngcontent-%COMP%]{margin:0 auto;position:relative;box-shadow:var(--item-box-shadow);background:white;border-radius:25px;overflow:auto}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:20px 20px 20px 50px;font-size:14px;margin-right:10px;border:none;width:100%;cursor:pointer}.searchbar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{background:white;width:100%}.searchbar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;left:2%;top:33%;font-size:18px;color:var(--color-primary)}.searchbar[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{position:absolute;top:33%;left:47%;opacity:.5;font-size:18px;color:var(--color-primary)}.searchbar[_ngcontent-%COMP%]   .name-icon[_ngcontent-%COMP%]{position:absolute;left:2%;top:33%;width:20px;font-size:18px;color:var(--color-primary)}.searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.searchbar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;left:2%;top:30%;font-size:18px;color:var(--color-primary)}.searchbar[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]{position:relative;overflow:hidden;cursor:pointer}.searchbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{width:100vw}.change-city-btn[_ngcontent-%COMP%]{background:var(--color-primary);color:#fff;padding:15px 25px;font-size:14px;border-radius:25px;margin:25px auto 0;border:none;display:block}@media (max-width: 902px){.close-icon[_ngcontent-%COMP%]{top:20px!important;left:90%!important}.search-icon[_ngcontent-%COMP%], .name-icon[_ngcontent-%COMP%]{top:20px!important;left:20px!important}}"]})}class C{constructor(o){this.ngZone=o,this.title="Se acab\xf3 la rutina.",this.subtitle="Encuentra tu diversi\xf3n con la plataforma N\xba1 de ocio en Espa\xf1a!",this.searchFilter=new t.vpe}ngOnInit(){}getFilter(o){this.ngZone.run(()=>{this.searchFilter.emit(o)})}search(){}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(t.R0b))};static#n=this.\u0275cmp=t.Xpm({type:C,selectors:[["home-header"]],inputs:{selected_address:"selected_address"},outputs:{searchFilter:"searchFilter"},decls:10,vars:3,consts:[[1,"header","row"],["oncanplay","this.play()","onloadedmetadata","this.muted = true","loop",""],["src","assets/videos/neon.mp4","type","video/mp4"],[1,"logo","text-center"],[1,"title"],[1,"subtitle"],[1,"searchbar-container"],[3,"selected_address","searchFilter"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"video",1),t._UZ(2,"source",2),t.qZA(),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"app-autocomplete-searchbar",7),t.NdJ("searchFilter",function(g){return a.getFilter(g)}),t.qZA()()()),2&e&&(t.xp6(5),t.Oqu(a.title),t.xp6(2),t.Oqu(a.subtitle),t.xp6(2),t.Q6J("selected_address",a.selected_address))},dependencies:[f],styles:[".header[_ngcontent-%COMP%]{border-bottom:.5px solid #ccc;position:relative;height:60vh;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center}.header[_ngcontent-%COMP%]   .city-selected[_ngcontent-%COMP%]{z-index:999;cursor:pointer;padding:20px}.header[_ngcontent-%COMP%]   .city-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--color-primary)}.header[_ngcontent-%COMP%]   .city-selected[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:#fff;font-size:34px;font-weight:700}.header[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{filter:brightness(60%);width:100%;object-fit:cover;height:100%;z-index:1;position:absolute}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-direction:column;margin-bottom:30px;z-index:99}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .subtitle2[_ngcontent-%COMP%]{color:#fff;margin-bottom:10px;font-size:20px}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700;font-size:42px;text-align:center;color:#fff}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;margin:0 auto 20px;animation:_ngcontent-%COMP%_typing 1s steps(80,end),blink-caret .75s step-end infinite}@keyframes _ngcontent-%COMP%_typing{0%{width:0}to{width:100%}}@keyframes _ngcontent-%COMP%_blink-caret{0%,to{border-color:transparent}50%{border-color:#fff}}.header[_ngcontent-%COMP%]   .searchbar-container[_ngcontent-%COMP%]{position:relative;z-index:999;padding:0 25vw}.header[_ngcontent-%COMP%]   .searchbar-container[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]{margin:0 auto;width:20vw;position:relative;float:left;box-shadow:var(--item-box-shadow)}.header[_ngcontent-%COMP%]   .searchbar-container[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:25px;padding:20px 20px 20px 30px;font-size:14px;margin-right:10px;border:none;width:100%}.header[_ngcontent-%COMP%]   .searchbar-container[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.header[_ngcontent-%COMP%]   .searchbar-container[_ngcontent-%COMP%]   .searchbar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;left:2%;top:35%;font-size:18px;color:var(--color-primary)}.filters[_ngcontent-%COMP%]{z-index:999;box-shadow:var(--item-box-shadow);position:relative;border-radius:10px;background:white;margin-left:25px;width:50%;height:auto}.filters[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.filters[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%]{font-weight:700}.filters[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{transform:scale(1.2)}.filters[_ngcontent-%COMP%]   .filters-title[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;text-align:center;margin-bottom:30px;font-size:16px;border-bottom:1px solid #ccc}.filters[_ngcontent-%COMP%]   .filters-title[_ngcontent-%COMP%]   .filter-by[_ngcontent-%COMP%]{margin-bottom:10px}.filters[_ngcontent-%COMP%]   .filters-title[_ngcontent-%COMP%]   .order-by[_ngcontent-%COMP%]{margin:10px}.filters[_ngcontent-%COMP%]   .filters-title[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{text-align:left;font-weight:lighter;color:#000;font-size:14px}.filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{font-size:14px}.filters[_ngcontent-%COMP%]   .filter-range-option[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:var(--color-primary)}.map[_ngcontent-%COMP%]{box-shadow:var(--item-box-shadow);border-radius:10px;background:white;height:auto;margin-bottom:20px;margin-left:25px;position:relative}.map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;width:100%;height:100px;object-fit:cover}.map[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;padding:5px;border-top:1px solid #ccc;font-weight:700;text-align:center;margin:0;color:var(--color-primary)}.map[_ngcontent-%COMP%]:hover{background-color:#2121210d;cursor:pointer}@media (max-width: 902px){.searchbar-container[_ngcontent-%COMP%]{padding:0 10vw!important}}"]})}class M{constructor(o){this.loading=o}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||M)(t.Y36(l.b))};static#n=this.\u0275cmp=t.Xpm({type:M,selectors:[["app-home"]],decls:35,vars:7,consts:[[1,"content",3,"hidden"],[3,"selected_address"],[1,"info","row"],[1,"image","offset-lg-1","col-lg-6","col-12"],["src","assets/imgs/mac.jpeg","alt","",1,"info-image"],[1,"text","col-lg-4","col-12","my-auto"],[1,"info-title"],[1,"info-app-name"],[1,"info-subtitle"],[1,"app-download","row"],["oncanplay","this.play()","onloadedmetadata","this.muted = true","loop",""],["src","assets/videos/reserva.mp4","type","video/mp4"],[1,"text","col-lg-6","col-12","my-auto"],[1,"app-download-title"],[1,"app-download-subtitle"],[1,"download-buttons"],["src","assets/imgs/download.png","alt","",1,"download-button","download-apple"],[1,"image","offset-lg-1","col-lg-4","col-12"],["src","assets/imgs/iphone.png","alt","",1,"app-download-image"],[3,"hidden"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t._UZ(2,"home-header",1),t.TgZ(3,"div",2)(4,"div",3),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"div",5)(7,"p",6),t._uU(8,"Reserva como nunca "),t.qZA(),t.TgZ(9,"p",7),t._uU(10,"con "),t.TgZ(11,"span"),t._uU(12," FUNLY! "),t.qZA()(),t.TgZ(13,"p",8),t._uU(14,"\xbfNo tienes nadie con quien divertirte?"),t.qZA(),t.TgZ(15,"p",8),t._uU(16,"No te preocupes, con FUNLY podr\xe1s realizar miles de actividades en tu zona y conocer gente!"),t.qZA()()(),t.TgZ(17,"div",9)(18,"video",10),t._UZ(19,"source",11),t.qZA(),t.TgZ(20,"div",12)(21,"p",13),t._uU(22,"\xbfNo tienes nada que hacer hoy?"),t.qZA(),t.TgZ(23,"p",14),t._uU(24,"\xa1Descarga la app de "),t.TgZ(25,"span"),t._uU(26,"FUNLY"),t.qZA(),t._uU(27,", descubre miles de eventos y haz amigos!"),t.qZA(),t.TgZ(28,"div",15),t._UZ(29,"img",16),t.qZA()(),t.TgZ(30,"div",17),t._UZ(31,"img",18),t.qZA()(),t._UZ(32,"home-footer"),t.qZA(),t._UZ(33,"app-loading",19),t.ALo(34,"async")),2&e&&(t.Q6J("hidden",t.lcZ(1,3,a.loading.isLoading)),t.xp6(2),t.Q6J("selected_address",a.selected_address),t.xp6(31),t.Q6J("hidden",!t.lcZ(34,5,a.loading.isLoading)))},dependencies:[b.m,v.q,C,n.Ov],styles:[".content[_ngcontent-%COMP%]{background:white;width:100vw;overflow-x:hidden}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{background:white;color:#000;position:relative}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{text-align:center;padding:50px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]{font-size:48px;line-height:1;font-weight:700}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info-app-name[_ngcontent-%COMP%]{font-weight:700;margin-bottom:35px;font-size:46px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info-app-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-primary)}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .info-subtitle[_ngcontent-%COMP%]{font-size:20px;line-height:1}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:100%}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .info-image[_ngcontent-%COMP%]{padding:20px;height:100%;width:100%;object-fit:cover}.content[_ngcontent-%COMP%]   .info-video[_ngcontent-%COMP%]{height:60vh;position:relative}.content[_ngcontent-%COMP%]   .info-video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{filter:brightness(40%);width:100%;object-fit:cover;height:100%;z-index:1;position:absolute}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]{background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center;position:relative;color:#fff}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{filter:brightness(40%);width:100%;object-fit:cover;height:100%;z-index:1;position:absolute}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{z-index:99;text-align:center;padding:50px 50px 0}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .app-download-title[_ngcontent-%COMP%]{font-size:48px;line-height:1;font-weight:700}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .app-download-subtitle[_ngcontent-%COMP%]{font-size:20px;line-height:1}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .app-download-subtitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .download-button[_ngcontent-%COMP%]{width:100%;object-fit:cover}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:100%;z-index:99}.content[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .app-download-image[_ngcontent-%COMP%]{width:100%;object-fit:cover;height:100%}"]})}var k=c(11209);class O{static#t=this.\u0275fac=function(e){return new(e||O)};static#n=this.\u0275mod=t.oAB({type:O});static#e=this.\u0275inj=t.cJS({imports:[p.u5,n.ez]})}var z=c(18232);const U=[{path:"",component:M}];class P{static#t=this.\u0275fac=function(e){return new(e||P)};static#n=this.\u0275mod=t.oAB({type:P});static#e=this.\u0275inj=t.cJS({imports:[n.ez,p.u5,r,k._,z.K,O,i.Bz.forChild(U)]})}},4471:(h,d,c)=>{c.d(d,{b:()=>t});var n=c(61135),i=c(41571);class t{constructor(){this.isLoading=new n.X(!1)}startLoading(){this.isLoading.next(!0)}stopLoading(){this.isLoading.next(!1)}static#t=this.\u0275fac=function(l){return new(l||t)};static#n=this.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}}}]);