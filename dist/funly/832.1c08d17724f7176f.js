"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[832],{66832:(ue,v,s)=>{s.r(v),s.d(v,{GameListModule:()=>h});var m=s(36895),M=s(67182),y=s(4128),e=s(41571),x=s(5830),P=s(4471),I=s(12187),O=s(75703),T=s(9373),w=s(84084),A=s(59696);function k(i,a){if(1&i&&e._UZ(0,"img",24),2&i){const t=e.oxw();e.Q6J("src",t.game.image,e.LSH)}}function D(i,a){1&i&&e._UZ(0,"img",25)}function R(i,a){if(1&i&&(e.TgZ(0,"p",26),e._UZ(1,"img",24),e._uU(2),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("src",null==t.game.firstReview.user?null:t.game.firstReview.user.avatar,e.LSH),e.xp6(1),e.hij(' "',t.game.firstReview.text,'"')}}class u{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(t){return new(t||u)};static#t=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-game-item"]],inputs:{game:"game"},decls:42,vars:40,consts:[[1,"game","row"],[1,"game-logo","col-md-3"],["alt","",3,"src",4,"ngIf"],["style","background: rgb(233, 233, 233)","src","assets/imgs/placeholder.png","alt","",4,"ngIf"],[1,"game-content","col-md-9"],[1,"title"],[1,"enterprise"],[1,"fa-solid","fa-building"],[1,"rating"],[3,"color","rating","reviews"],[1,"address"],[1,"fa","fa-location-dot"],[1,"game-price"],[1,"price"],[1,"game-duration"],[1,"fa-regular","fa-clock"],[1,"duration"],[1,"reservation-button"],[1,"fa","fa-arrow-right"],[1,"people"],[1,"fa","fa-user-group"],[1,"categories","row"],[1,"data","row"],["class","comment",4,"ngIf"],["alt","",3,"src"],["src","assets/imgs/placeholder.png","alt","",2,"background","rgb(233, 233, 233)"],[1,"comment"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,k,1,1,"img",2),e.YNc(3,D,1,0,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"p",6),e._UZ(9,"i",7),e._uU(10),e.qZA()(),e.TgZ(11,"div",8),e._UZ(12,"app-rating",9),e.qZA(),e.TgZ(13,"div",10)(14,"p"),e._UZ(15,"i",11),e._uU(16),e.qZA()(),e.TgZ(17,"span",12),e._uU(18,"Desde "),e.TgZ(19,"span",13),e._uU(20),e.qZA(),e._uU(21,"/persona"),e.qZA(),e.TgZ(22,"span",14),e._UZ(23,"i",15),e.TgZ(24,"span",16),e._uU(25),e.qZA(),e._uU(26," min"),e.qZA(),e.TgZ(27,"button",17),e._uU(28,"Ver m\xe1s "),e._UZ(29,"i",18),e.qZA(),e.TgZ(30,"p",19),e._UZ(31,"i",20),e._uU(32),e.qZA(),e.TgZ(33,"div",21)(34,"span"),e._uU(35),e.qZA(),e.TgZ(36,"span"),e._uU(37),e.qZA()(),e.TgZ(38,"div",22)(39,"p"),e._uU(40),e.qZA(),e.YNc(41,R,3,2,"p",23),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.game.image),e.xp6(1),e.Q6J("ngIf",!n.game.image),e.xp6(3),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.hij("",n.game.name," "),e.xp6(2),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.hij(" ",null==n.game.user?null:n.game.user.name,""),e.xp6(2),e.Q6J("color",null==n.game.category?null:n.game.category.color)("rating",n.game.rating)("reviews",n.game.reviewsCount),e.xp6(4),e.hij(" ",n.game.address,""),e.xp6(3),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.hij("",n.game.min_price,"\u20ac"),e.xp6(3),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.hij(" ",n.game.max_duration,""),e.xp6(2),e.Udp("background-color",null==n.game.category?null:n.game.category.background_color)("color",null==n.game.category?null:n.game.category.color),e.xp6(3),e.Udp("color",null==n.game.category?null:n.game.category.color),e.xp6(2),e.AsE(" ",n.game.min_people," - ",n.game.max_people," personas "),e.xp6(2),e.Udp("background-color",null==n.game.category?null:n.game.category.background_color)("color",null==n.game.category?null:n.game.category.color),e.xp6(1),e.hij(" ",null==n.game.category?null:n.game.category.name," "),e.xp6(1),e.Udp("background-color",null==n.game.subcategory?null:n.game.subcategory.background_color)("color",null==n.game.subcategory?null:n.game.subcategory.color),e.xp6(1),e.hij(" ",null==n.game.subcategory?null:n.game.subcategory.name," "),e.xp6(3),e.Oqu(n.game.description),e.xp6(1),e.Q6J("ngIf",n.game.firstReview))},dependencies:[m.O5,A.A],styles:[".game[_ngcontent-%COMP%]{padding:15px;box-shadow:var(--item-box-shadow);position:relative;border-radius:15px;background:white;margin-bottom:15px}.game[_ngcontent-%COMP%]   .game-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{float:left;min-width:100%;max-width:100%;min-height:225px;max-height:200px;overflow:hidden;border:10px solid white;border-radius:15px;box-shadow:var(--item-box-shadow);object-fit:cover;background:var(--dark-background)}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]{position:relative;height:100%}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .reservation-button[_ngcontent-%COMP%]{position:absolute;top:85px;right:5px;border-radius:25px;font-weight:700;background-color:var(--color-primary-light);padding:10px 20px;border:none}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-price[_ngcontent-%COMP%]{position:absolute;top:0;right:10px;font-size:14px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:22px;font-weight:700}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-duration[_ngcontent-%COMP%]{position:absolute;top:30px;right:10px;font-size:14px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-duration[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .people[_ngcontent-%COMP%]{position:absolute;right:10px;top:55px;font-size:14px;font-weight:700}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:26px;color:var(--color-primary)}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700;margin-bottom:5px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .enterprise[_ngcontent-%COMP%]{font-weight:lighter;color:#000;font-size:14px;margin:0 0 5px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]{padding:5px;margin-bottom:20px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:5px;width:auto;display:inline;float:left;padding:5px 15px;border-radius:25px}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:100;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]{font-style:italic;color:gray}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;object-fit:cover;border-radius:50%;box-sizing:var(--item-box-shadow)}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{font-size:12px;color:gray}.game[_ngcontent-%COMP%]   .game-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.game[_ngcontent-%COMP%]{transition:all .1s ease-in-out}.game[_ngcontent-%COMP%]:hover{scale:1.005;cursor:pointer}@media (max-width: 902px){.game[_ngcontent-%COMP%]{border-radius:0!important}.game-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:15px!important}.game-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:50%!important}.game-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{max-width:60%!important}.game-content[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{max-width:50%!important}}"]})}function S(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.changeActualPage(o.actualPage-1))}),e.TgZ(1,"a",5)(2,"span",6),e._uU(3,"Anterior"),e.qZA(),e.TgZ(4,"span",7),e._uU(5,"Previous"),e.qZA()()()}}function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",8)(1,"a",9),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.changeActualPage(r))}),e._uU(2),e.qZA()()}if(2&i){const t=a.$implicit,n=e.oxw();e.xp6(1),e.Gre("page-link ",n.actualPage==t?"active":"",""),e.xp6(1),e.Oqu(t)}}function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"li",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.changeActualPage(o.actualPage+1))}),e.TgZ(1,"a",10)(2,"span",6),e._uU(3,"Siguiente"),e.qZA(),e.TgZ(4,"span",7),e._uU(5,"Next"),e.qZA()()()}}class p{constructor(){this.pages=[],this.actualPage=0,this.totalPages=0,this.changePage=new e.vpe}ngOnInit(){for(let a=0;a<this.totalPages;a++)this.pages.push(a+1)}changeActualPage(a){this.actualPage=a,window.scrollTo(0,0),this.changePage.emit(this.actualPage)}static#e=this.\u0275fac=function(t){return new(t||p)};static#t=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-game-list-pagination"]],inputs:{actualPage:"actualPage",totalPages:"totalPages"},outputs:{changePage:"changePage"},decls:5,vars:3,consts:[["aria-label","Page navigation example"],[1,"pagination","justify-content-center"],["class","page-item",3,"click",4,"ngIf"],["class","page-item",4,"ngFor","ngForOf"],[1,"page-item",3,"click"],["aria-label","Previous",1,"page-link"],["aria-hidden","true"],[1,"sr-only"],[1,"page-item"],[3,"click"],["aria-label","Next",1,"page-link"]],template:function(t,n){1&t&&(e.TgZ(0,"nav",0)(1,"ul",1),e.YNc(2,S,6,0,"li",2),e.YNc(3,E,3,4,"li",3),e.YNc(4,F,6,0,"li",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.actualPage>1),e.xp6(1),e.Q6J("ngForOf",n.pages),e.xp6(1),e.Q6J("ngIf",n.actualPage!=n.totalPages))},dependencies:[m.sg,m.O5],styles:[".pagination[_ngcontent-%COMP%]{cursor:pointer;margin:0 auto}.pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:none!important;color:#000}.pagination[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:var(--color-primary);color:#fff!important}"]})}function L(i,a){if(1&i&&e._UZ(0,"app-open-reservation",16),2&i){const t=a.$implicit;e.MGl("routerLink","",null==t.game?null:t.game.id,"/interior"),e.Q6J("reservation",t)}}function B(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"h1",11),e._uU(2),e._UZ(3,"img",12),e._uU(4," disponibles! \xa1Reserva antes de que empiecen!"),e.qZA(),e.TgZ(5,"p",13),e._uU(6,"La reserva ser\xe1 cancelada si no hay suficientes personas cuando se termine la cuenta atr\xe1s"),e.qZA(),e.TgZ(7,"div",14),e.YNc(8,L,1,2,"app-open-reservation",15),e.qZA(),e.BQk()),2&i){const t=e.oxw();e.xp6(2),e.hij("\xa1Hay ",t.openReservations.length," reservas FUNLY "),e.xp6(6),e.Q6J("ngForOf",t.openReservations)}}function Z(i,a){1&i&&(e.ynx(0),e.TgZ(1,"h1",11),e._uU(2,"No hay reservas FUNLY "),e._UZ(3,"img",17),e._uU(4," disponibles para hoy. \xa1Reserva ya y espera que se unan!"),e.qZA(),e.BQk()),2&i&&(e.xp6(3),e.Udp("width","30px"))}function U(i,a){if(1&i&&(e.TgZ(0,"h1"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.AsE("Mostrando ",t.total_games," resultados ",t.selected_address?"en "+t.selected_address:"","")}}function N(i,a){if(1&i&&e._UZ(0,"app-game-item",19),2&i){const t=a.$implicit;e.MGl("routerLink","",t.id,"/interior"),e.Q6J("game",t)}}function j(i,a){if(1&i&&(e.ynx(0),e.YNc(1,N,1,2,"app-game-item",18),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.filteredGames)}}function Y(i,a){1&i&&e._UZ(0,"app-game-item",23),2&i&&e.Q6J("game",a.$implicit)}function G(i,a){if(1&i&&(e.ynx(0,20),e.TgZ(1,"h1",21),e._uU(2,"Lo sentimos no hay eventos con esos filtros"),e.qZA(),e.YNc(3,Y,1,1,"app-game-item",22),e.BQk()),2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.games)}}function H(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",24)(2,"app-game-list-pagination",25),e.NdJ("changePage",function(o){e.CHM(t);const r=e.oxw();return e.KtG(r.changeGamesPage(o))}),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("actualPage",t.actual_page)("totalPages",t.total_game_pages)}}const X=function(i){return{lat:40.289479,lng:i}};function Q(i,a){if(1&i&&(e.TgZ(0,"div",26),e._UZ(1,"app-map",27),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("games",t.addresses)("zoom",4.5)("center",e.VKq(3,X,-3.963506))}}class _{constructor(a,t,n,o){this.apiService=a,this.ngZone=t,this.router=n,this.loading=o,this.selected_address="",this.selected_name="",this.filteredGames=[],this.regionFilteredGames=[],this.games=[],this.addresses=[],this.openReservations=[],this.min_price=0,this.max_price=200,this.min_people=1,this.max_people=100,this.min_duration=15,this.max_duration=300,this.selected_categories_ids=[],this.selected_subcategories_ids=[],this.selected_categories=[],this.selected_subcategories=[],this.actual_page=1,this.loading.startLoading();let r=n.snapshot.queryParamMap.get("c"),l=n.snapshot.queryParamMap.get("a"),d=n.snapshot.queryParamMap.get("q");l&&(this.selected_address=l),r&&this.selected_categories_ids?.push(+r),d&&(this.selected_name=d)}ngOnInit(){this.setGamesAndOpenReservations()}removeAddress(){this.filteredGames=[...this.games]}filterByNameAndAddress(a){this.ngZone.run(()=>{this.selected_address=a[0],this.selected_name=a[1],this.actual_page=1,this.setGamesAndOpenReservations()})}applyFilters(a){console.log("FILTROS",a),this.ngZone.run(()=>{this.min_price=a.min_price,this.max_price=a.max_price,this.min_people=a.min_people,this.max_people=a.max_people,this.min_duration=a.min_duration,this.max_duration=a.max_duration,this.selected_categories_ids=a.selected_categories_ids,this.selected_categories=a.selected_categories,this.selected_subcategories_ids=a.selected_subcategories_ids,this.selected_subcategories=a.selected_subcategories,this.selected_address=a.selected_address,this.selected_name=a.selected_name,this.total_game_pages=0,this.actual_page=1,console.log("FILTROS RECIBIDOS",this.selected_categories),this.setGamesAndOpenReservations()})}changeGamesPage(a){this.actual_page=a,this.setGamesAndOpenReservations()}setGamesAndOpenReservations(){this.getGamesAndOpenReservations().subscribe({next:a=>{const t=a[0],n=a[1],o=a[2];this.games=t.data,this.addresses=o,this.total_games=t.total,this.total_game_pages=t.last_page,this.filteredGames=[...t.data],this.loading.stopLoading(),this.openReservations=n,console.log("GAMES AND RESERVATIONS",a)},error:a=>{console.log(a),this.loading.stopLoading()}})}getGamesAndOpenReservations(){let o="";o+="?min_price="+this.min_price,o+="&max_price="+this.max_price,o+="&min_people="+this.min_people,o+="&max_people="+this.max_people,o+="&min_duration="+this.min_duration,o+="&max_duration="+this.max_duration,o+="&selected_categories="+this.selected_categories_ids,o+="&selected_subcategories="+this.selected_subcategories_ids,this.selected_address&&(o+="&selected_address="+this.selected_address),this.selected_name&&(o+="&selected_name="+this.selected_name),o+="&page="+this.actual_page;let r=this.apiService.getEntity("games"+o),l=this.apiService.getEntity("addresses"+o),d=this.apiService.getEntity("open-reservations"+o);return(0,y.D)([r,d,l])}static#e=this.\u0275fac=function(t){return new(t||_)(e.Y36(x.s),e.Y36(e.R0b),e.Y36(M.gz),e.Y36(P.b))};static#t=this.\u0275cmp=e.Xpm({type:_,selectors:[["app-game-list"]],decls:18,vars:15,consts:[[1,"content"],[4,"ngIf"],[1,"game-list-container","justify-content-center","row"],[1,"row"],[1,"game-list","col-lg-9","col-12"],["&&","","games","",4,"ngIf"],["class","row",4,"ngIf"],[1,"filters","col-lg-3","col-12"],["class","map",4,"ngIf"],[3,"filter"],[1,"pagination-footer"],[1,"open-reservations-title"],["src","assets/imgs/box-transparent.svg","alt","",2,"width","25px"],[1,"open-reservations-description"],[1,"open-reservations","my-auto"],[3,"routerLink","reservation",4,"ngFor","ngForOf"],[3,"routerLink","reservation"],["src","assets/imgs/box-transparent.svg"],[3,"game","routerLink",4,"ngFor","ngForOf"],[3,"game","routerLink"],["&&","","games",""],[2,"margin-bottom","150px"],[3,"game",4,"ngFor","ngForOf"],[3,"game"],[1,"col-12","game-list-pagination"],[3,"actualPage","totalPages","changePage"],[1,"map"],[3,"games","zoom","center"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,B,9,2,"ng-container",1),e.YNc(2,Z,5,2,"ng-container",1),e.TgZ(3,"div",2),e.YNc(4,U,2,2,"h1",1),e.ALo(5,"async"),e.TgZ(6,"div",3)(7,"div",4),e.YNc(8,j,2,1,"ng-container",1),e.ALo(9,"async"),e.YNc(10,G,4,1,"ng-container",5),e.ALo(11,"async"),e.YNc(12,H,3,2,"div",6),e.ALo(13,"async"),e.qZA(),e.TgZ(14,"div",7),e.YNc(15,Q,2,5,"div",8),e.TgZ(16,"app-game-list-filters",9),e.NdJ("filter",function(r){return n.applyFilters(r)}),e.qZA()()()(),e._UZ(17,"home-footer",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",(null==n.openReservations?null:n.openReservations.length)>0),e.xp6(1),e.Q6J("ngIf",(null==n.openReservations?null:n.openReservations.length)<=0&&n.games.length>0),e.xp6(2),e.Q6J("ngIf",!e.lcZ(5,7,n.loading.isLoading)),e.xp6(4),e.Q6J("ngIf",!e.lcZ(9,9,n.loading.isLoading)&&n.filteredGames.length>0&&n.games),e.xp6(2),e.Q6J("ngIf",!e.lcZ(11,11,n.loading.isLoading)&&n.filteredGames.length<=0),e.xp6(2),e.Q6J("ngIf",n.filteredGames.length>0&&!e.lcZ(13,13,n.loading.isLoading)&&n.total_game_pages>1),e.xp6(3),e.Q6J("ngIf",n.addresses.length>0))},dependencies:[m.sg,m.O5,I.m,O.d,T.G,w.Y,M.rH,u,p,m.Ov],styles:[".content[_ngcontent-%COMP%]{background:#f2f2f2;background-image:url(box-transparent-light.d7b5fe43d957f6bb.svg);background-repeat:space;background-size:200px;z-index:1;background-position:center;width:100vw;overflow-x:hidden}.content[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{box-shadow:var(--item-box-shadow);border-radius:10px;background:white;height:auto;margin-bottom:25px;height:300px;position:relative}.content[_ngcontent-%COMP%]   .open-reservations-title[_ngcontent-%COMP%]{color:#fff;font-size:24px;background-color:var(--dark-background);background-image:url(box-transparent-dark.db412c6563d92b68.svg);animation:_ngcontent-%COMP%_spin 300s linear infinite;background-size:200px;z-index:1;background-position:center;text-align:center;font-weight:700;padding-bottom:5vh;padding-top:5vh}@keyframes _ngcontent-%COMP%_spin{to{background-position-x:0;background-position-y:0}0%{background-position-x:10000px;background-position-y:10000px}}.content[_ngcontent-%COMP%]   .open-reservations-description[_ngcontent-%COMP%]{color:#000;font-size:16px;text-align:center;font-weight:700;padding-bottom:15px}.content[_ngcontent-%COMP%]   .open-reservations-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-primary);font-size:22px}.content[_ngcontent-%COMP%]   .open-reservations[_ngcontent-%COMP%]{width:100%;overflow:hidden;text-align:center;overflow-x:auto;white-space:nowrap;position:relative;padding:50px 0;background-color:var(--dark-background);background-image:url(box-transparent-dark.db412c6563d92b68.svg);background-size:200px;z-index:1;animation:_ngcontent-%COMP%_spin 300s linear infinite}.content[_ngcontent-%COMP%]   .game-list-container[_ngcontent-%COMP%]{padding:40px;padding-top:10px!important}.content[_ngcontent-%COMP%]   .game-list-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{padding-left:35px}.content[_ngcontent-%COMP%]   .game-list-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:25px;color:var(--color-primary);font-weight:700}.content[_ngcontent-%COMP%]   .game-list-container[_ngcontent-%COMP%]   .game-list[_ngcontent-%COMP%]{margin-bottom:25px}.content[_ngcontent-%COMP%]   .game-list-pagination[_ngcontent-%COMP%]{padding:15px;box-shadow:var(--item-box-shadow);position:relative;border-radius:10px;background:white;margin-bottom:15px}@media (max-width: 902px){.game-list-container[_ngcontent-%COMP%]{padding:10px 0!important}.game-list-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.game-list-container[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{padding:0!important}.game-list-pagination[_ngcontent-%COMP%]{border-radius:0!important}}"]})}var g=s(3238);let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.BQ,g.BQ]}),i})();var J=s(24006),C=(s(37340),s(98184)),q=(s(83353),s(1218));const ee={provide:new e.OlP("mat-menu-scroll-strategy"),deps:[C.aV],useFactory:function K(i){return()=>i.scrollStrategies.reposition()}};let te=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[ee],imports:[m.ez,g.BQ,g.si,C.U8,q.ZD,g.BQ]}),i})();var ne=s(11209),ae=s(77198),ie=s(17634),oe=s(29151),re=s(93375),se=s(18815),ce=s(38451);const le=[{path:"",component:_}];class h{static#e=this.\u0275fac=function(t){return new(t||h)};static#t=this.\u0275mod=e.oAB({type:h});static#n=this.\u0275inj=e.cJS({imports:[m.ez,z,J.u5,te,ne._,ae.I,ie.W,se.bt,oe.X,re.R,ce.T,M.Bz.forChild(le)]})}}}]);