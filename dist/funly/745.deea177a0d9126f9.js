"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[745],{34745:(R,g,o)=>{o.r(g),o.d(g,{MapSearchModule:()=>c});var p=o(36895),e=o(41571),_=o(5830),v=o(4471),u=o(9373),x=o(12187),O=o(84084),C=o(75703),m=o(67182);function M(a,n){if(1&a&&e._UZ(0,"app-open-reservation",19),2&a){const s=n.$implicit;e.MGl("routerLink","/search/",null==s.game?null:s.game.id,"/interior"),e.Q6J("reservation",s)}}function f(a,n){1&a&&(e.TgZ(0,"h1",13),e._uU(1,"No hay reservas Funly "),e._UZ(2,"img",14),e._uU(3," disponibles con esos filtros"),e.qZA())}function P(a,n){if(1&a&&(e.TgZ(0,"div",12)(1,"h1",13),e._uU(2),e._UZ(3,"img",14),e._uU(4," disponibles con esos filtros! "),e.qZA(),e.TgZ(5,"p",15),e._uU(6,"La reserva ser\xe1 cancelada si no hay suficientes personas cuando se termine la cuenta atr\xe1s"),e.qZA(),e.TgZ(7,"div",16)(8,"h2"),e._uU(9,"xd"),e.qZA(),e.YNc(10,M,1,2,"app-open-reservation",17),e.qZA(),e.YNc(11,f,4,0,"h1",18),e.qZA()),2&a){const s=e.oxw();e.xp6(2),e.hij("\xa1Hay ",s.openReservations.length," reservas FUNLY "),e.xp6(8),e.Q6J("ngForOf",s.openReservations),e.xp6(1),e.Q6J("ngIf",s.openReservations.length<=0)}}class r{constructor(n,s,t){this.apiService=n,this.zone=s,this.loading=t,this.selected_address="",this.selected_name="",this.games=[],this.openReservations=[],this.min_price=0,this.max_price=200,this.min_people=1,this.max_people=100,this.min_duration=15,this.max_duration=300,this.selected_categories_ids=[],this.selected_subcategories_ids=[],this.selected_categories=[],this.selected_subcategories=[],this.actual_page=1}ngOnInit(){}filterByNameAndAddress(n){this.zone.run(()=>{this.selected_address=n[0],this.selected_name=n[1],this.actual_page=1,this.getAddressesAndOpenReservations()})}applyFilters(n){console.log("FILTROS",n),this.zone.run(()=>{this.min_price=n.min_price,this.max_price=n.max_price,this.min_people=n.min_people,this.max_people=n.max_people,this.min_duration=n.min_duration,this.max_duration=n.max_duration,this.selected_categories_ids=n.selected_categories_ids,this.selected_categories=n.selected_categories,this.selected_subcategories_ids=n.selected_subcategories_ids,this.selected_subcategories=n.selected_subcategories,this.selected_address=n.selected_address,this.selected_name=n.selected_name,this.total_game_pages=0,this.actual_page=1,console.log("FILTROS RECIBIDOS",this.selected_categories),this.getAddressesAndOpenReservations()})}getAddressesAndOpenReservations(){this.loading.startLoading();let t="";t+="?min_price="+this.min_price,t+="&max_price="+this.max_price,t+="&min_people="+this.min_people,t+="&max_people="+this.max_people,t+="&min_duration="+this.min_duration,t+="&max_duration="+this.max_duration,t+="&selected_categories="+this.selected_categories_ids,t+="&selected_subcategories="+this.selected_subcategories_ids,this.selected_address&&(t+="&selected_address="+this.selected_address),this.selected_name&&(t+="&selected_name="+this.selected_name),t+="&page="+this.actual_page;let h=this.apiService.getEntity("addresses"+t),l=this.apiService.getEntity("open-reservations"+t);h.subscribe({next:i=>{this.games=i,this.loading.stopLoading()},error:i=>{console.log(i),this.loading.stopLoading()}}),l.subscribe({next:i=>{const d=i;console.log(d),this.openReservations=d,this.loading.stopLoading()},error:i=>{console.log(i),this.loading.stopLoading()}})}static#e=this.\u0275fac=function(s){return new(s||r)(e.Y36(_.s),e.Y36(e.R0b),e.Y36(v.b))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-map-search"]],decls:16,vars:9,consts:[[1,"map-search-container","content"],[1,"description-header"],[1,"title"],["src","assets/imgs/box-transparent.svg",2,"width","30px"],[1,"results"],[1,"row",2,"padding","10px"],[1,"col-lg-8","col-12"],[1,"map-container"],[3,"markerIconSize","zoom","games","selected_address"],["class","reservations",4,"ngIf"],[1,"col-lg-4","col-12","filters-container"],[3,"locate","filter"],[1,"reservations"],[1,"open-reservations-title"],["src","assets/imgs/box-transparent.svg","alt","",2,"width","25px"],[1,"open-reservations-description"],[1,"open-reservations","my-auto"],[3,"routerLink","reservation",4,"ngFor","ngForOf"],["class","open-reservations-title",4,"ngIf"],[3,"routerLink","reservation"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"\xa1Encuentra eventos FUNLY "),e._UZ(4,"img",3),e._uU(5," por todo el mapa!"),e.qZA(),e.TgZ(6,"p",4),e._uU(7),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e._UZ(11,"app-map",8),e.qZA(),e.YNc(12,P,12,3,"div",9),e.qZA(),e.TgZ(13,"div",10)(14,"app-game-list-filters",11),e.NdJ("filter",function(l){return t.applyFilters(l)}),e.qZA()()()(),e._UZ(15,"home-footer")),2&s&&(e.xp6(7),e.lnq("Mostrando ",t.games.length," resultados ",t.selected_name?'de "'+t.selected_name+'"':""," disponibles en ",t.selected_address?t.selected_address:"Espa\xf1a",""),e.xp6(4),e.Q6J("markerIconSize",40)("zoom",t.selected_address&&t.games.length>0?13:5)("games",t.games)("selected_address",t.selected_address),e.xp6(1),e.Q6J("ngIf",(null==t.openReservations?null:t.openReservations.length)>0),e.xp6(2),e.Q6J("locate",!0))},dependencies:[p.sg,p.O5,u.G,x.m,O.Y,C.d,m.rH],styles:[".map-search-container[_ngcontent-%COMP%]{padding:20px;overflow-x:hidden}.map-search-container[_ngcontent-%COMP%]   .description-header[_ngcontent-%COMP%]{padding-top:30px}.map-search-container[_ngcontent-%COMP%]   .description-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:32px;color:#000;text-align:center;font-weight:700}.map-search-container[_ngcontent-%COMP%]   .description-header[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]{font-weight:700;font-size:28px;text-align:center;color:var(--color-primary)}.map-search-container[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%]{height:700px}.map-search-container[_ngcontent-%COMP%]   .reservations[_ngcontent-%COMP%]   .open-reservations[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-align:center;overflow-x:auto;white-space:nowrap;position:relative;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center}.map-search-container[_ngcontent-%COMP%]   .reservations[_ngcontent-%COMP%]   .open-reservations-title[_ngcontent-%COMP%]{color:var(--color-primary);font-size:32px;text-align:center;font-weight:700;padding-bottom:15px;padding-top:5vh}.map-search-container[_ngcontent-%COMP%]   .reservations[_ngcontent-%COMP%]   .open-reservations-description[_ngcontent-%COMP%]{color:#000;font-size:16px;text-align:center;font-weight:700;padding-bottom:15px}.map-search-container[_ngcontent-%COMP%]   .reservations[_ngcontent-%COMP%]   .open-reservations-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-primary);font-size:22px}.map-search-container[_ngcontent-%COMP%]   .filters-container[_ngcontent-%COMP%]{right:0}.map-search-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}@media (max-width: 902px){.description-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .results[_ngcontent-%COMP%]{font-size:24px!important}.map-search-container[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.map-search-container[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%]{height:300px!important}.filters-container[_ngcontent-%COMP%]{margin-top:20px!important}.reservations[_ngcontent-%COMP%]{display:none!important}}"]})}var Z=o(93375),A=o(38451),y=o(11209),U=o(56452),b=o(17634);const z=[{path:"",component:r}];class c{static#e=this.\u0275fac=function(s){return new(s||c)};static#t=this.\u0275mod=e.oAB({type:c});static#n=this.\u0275inj=e.cJS({imports:[p.ez,Z.R,y._,A.T,U.P,b.W,m.Bz.forChild(z)]})}}}]);