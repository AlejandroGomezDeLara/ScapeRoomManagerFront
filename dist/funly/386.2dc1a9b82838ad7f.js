"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[386],{54828:(p,g,e)=>{e.d(g,{q:()=>s});var a=e(41571);class s{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(i){return new(i||s)};static#n=this.\u0275cmp=a.Xpm({type:s,selectors:[["app-loading"]],inputs:{text:"text"},decls:5,vars:1,consts:[[1,"loader-container","row"],[1,"col-12","my-auto"],["src","assets/imgs/box-transparent.png","alt","",1,"loader"],[1,"text"]],template:function(i,h){1&i&&(a.TgZ(0,"div",0)(1,"div",1),a._UZ(2,"img",2),a.TgZ(3,"p",3),a._uU(4),a.qZA()()()),2&i&&(a.xp6(4),a.Oqu(h.text))},styles:[".loader-container[_ngcontent-%COMP%]{text-align:center;z-index:99999;position:fixed;height:100%;overflow:hidden;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;background-position:center;top:0;left:0;right:0}.loader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;font-size:24px;margin-top:10px}.loader-container[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--color-primary);margin-bottom:30px;opacity:1}.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:150px;height:150px;animation:_ngcontent-%COMP%_spin 1.5s linear infinite;opacity:1}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})}},18232:(p,g,e)=>{e.d(g,{K:()=>t});var a=e(36895),s=e(41571);class t{static#t=this.\u0275fac=function(h){return new(h||t)};static#n=this.\u0275mod=s.oAB({type:t});static#e=this.\u0275inj=s.cJS({imports:[a.ez]})}},11209:(p,g,e)=>{e.d(g,{_:()=>t});var a=e(36895),s=e(41571);class t{static#t=this.\u0275fac=function(h){return new(h||t)};static#n=this.\u0275mod=s.oAB({type:t});static#e=this.\u0275inj=s.cJS({imports:[a.ez]})}},44386:(p,g,e)=>{e.r(g),e.d(g,{ChatsModule:()=>d});var a=e(36895),s=e(67182),t=e(41571);const _=[];class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(_),s.Bz]})}var h=e(5830),m=e(4471),u=e(7053),C=e(54828);function O(c,o){1&c&&(t.TgZ(0,"div",6)(1,"p"),t._uU(2,"No tienes ning\xfan chat activo, realiza una reserva!"),t.qZA(),t.TgZ(3,"button",7),t._uU(4,"Reservar"),t.qZA()())}function M(c,o){if(1&c&&(t.TgZ(0,"p",22),t._UZ(1,"img",23),t.TgZ(2,"b"),t._uU(3),t.qZA(),t._uU(4),t.qZA()),2&c){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("src",null==n.last_message.user?null:n.last_message.user.avatar,t.LSH),t.xp6(2),t.hij(" ",null==n.last_message.user?null:n.last_message.user.name,""),t.xp6(1),t.hij(": ",n.last_message.text,"")}}function P(c,o){1&c&&(t.TgZ(0,"p",22),t._uU(1,"Sin mensajes a\xfan"),t.qZA())}function f(c,o){if(1&c&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&c){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.unread_messages_count)}}function v(c,o){if(1&c&&(t.TgZ(0,"div",14)(1,"div",15),t._UZ(2,"img",16),t.qZA(),t.TgZ(3,"div",17)(4,"p",18),t._uU(5),t.ALo(6,"date"),t.ALo(7,"slice"),t.TgZ(8,"span",19),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.YNc(11,M,5,3,"p",20),t.YNc(12,P,2,0,"p",20),t.YNc(13,f,2,1,"span",21),t.qZA()()),2&c){const n=o.$implicit;t.MGl("routerLink","",n.id,"/interior-chat"),t.xp6(2),t.Q6J("src",n.image,t.LSH),t.xp6(3),t.lnq("",n.name," ",t.xi3(6,9,null==n.open_reservation?null:n.open_reservation.date,"dd/M")," - ",t.Dn7(7,12,null==n.open_reservation||null==n.open_reservation.game_reservation_hour?null:n.open_reservation.game_reservation_hour.hour,0,5)," "),t.xp6(4),t.Oqu(t.xi3(10,16,null==n.last_message?null:n.last_message.created_at,"HH:mm")),t.xp6(2),t.Q6J("ngIf",n.last_message),t.xp6(1),t.Q6J("ngIf",!n.last_message),t.xp6(1),t.Q6J("ngIf",n.unread_messages_count)}}function x(c,o){if(1&c&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"input",10)(3,"i",11),t.qZA(),t.TgZ(4,"div",12),t.YNc(5,v,14,19,"div",13),t.qZA()()),2&c){const n=t.oxw();t.xp6(5),t.Q6J("ngForOf",n.chats)}}function b(c,o){1&c&&(t.TgZ(0,"div",25)(1,"p"),t._uU(2,"Selecciona un chat para ver sus mensajes"),t.qZA()())}class l{constructor(o,n,r){this.apiService=o,this.loading=n,this.auth=r,this.chats=[],this.showMenu=!0,this.refreshMessagesTime=2e3}ngOnInit(){this.loading.startLoading(),this.getChats(),this.chatsInterval=setInterval(()=>{this.getChats()},this.refreshMessagesTime)}getChats(){this.apiService.getEntity("chats").subscribe(o=>{console.log(o),this.chats=o,o.some(r=>r.unread_messages_count>0),this.loading.stopLoading()},o=>{console.log(o),this.loading.stopLoading()})}scrollToBottom(){let o=document.getElementById("messages-container-scroll");o.scrollTop=o.scrollHeight,console.log(o)}ngOnDestroy(){clearInterval(this.chatsInterval),this.chatsInterval=null}static#t=this.\u0275fac=function(n){return new(n||l)(t.Y36(h.s),t.Y36(m.b),t.Y36(u.$))};static#n=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-chats"]],decls:8,vars:10,consts:[[1,"chat-container","content",3,"hidden"],["class","no-chats",4,"ngIf"],[1,"chats-content","row"],["class","chats-sidebar col-lg-4 col-12 row",4,"ngIf"],["class","col-lg-8 col-12 void-text",4,"ngIf"],[3,"hidden","text"],[1,"no-chats"],["routerLink","/search"],[1,"chats-sidebar","col-lg-4","col-12","row"],[1,"chats-searchbar-container","col-12"],["type","searchbar","placeholder","Buscar chat",1,"chats-searchbar"],[1,"search-icon","fa","fa-search"],[1,"chats-items-container","col-12"],["class","chats-item row",3,"routerLink",4,"ngFor","ngForOf"],[1,"chats-item","row",3,"routerLink"],[1,"col-lg-2","col-3"],["alt","",1,"chat-image",3,"src"],[1,"col-lg-10","col-9","my-auto"],[1,"chat-name"],[1,"chat-hour"],["class","chat-last-message",4,"ngIf"],["class","new-messages-count",4,"ngIf"],[1,"chat-last-message"],["alt","","onError","this.src='assets/imgs/avatar.png'",1,"avatar",3,"src"],[1,"new-messages-count"],[1,"col-lg-8","col-12","void-text"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.ALo(1,"async"),t.YNc(2,O,5,0,"div",1),t.TgZ(3,"div",2),t.YNc(4,x,6,1,"div",3),t.YNc(5,b,3,0,"div",4),t.qZA()(),t._UZ(6,"app-loading",5),t.ALo(7,"async")),2&n&&(t.Q6J("hidden",t.lcZ(1,6,r.loading.isLoading)),t.xp6(2),t.Q6J("ngIf",r.chats.length<=0&&r.showMenu),t.xp6(2),t.Q6J("ngIf",r.showMenu&&r.chats.length>0),t.xp6(1),t.Q6J("ngIf",r.chats.length>0),t.xp6(1),t.Q6J("hidden",!t.lcZ(7,8,r.loading.isLoading))("text","Cargando chats"))},dependencies:[a.sg,a.O5,s.rH,C.q,a.Ov,a.OU,a.uU],styles:[".chat-container[_ngcontent-%COMP%]{width:100%;overflow-y:hidden;overflow-x:hidden}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]{text-align:center}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:30vh;padding:10px;font-weight:700;font-size:20px}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:25px;width:auto;border:none;color:#fff;padding:10px 20px;background:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .void-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:26px;margin-top:42vh;text-align:center;font-weight:700;transform:translateY(-50%)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]{padding:0;border-right:.5px solid #ccc;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:150px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar-container[_ngcontent-%COMP%]{width:100%;background:var(--chat-message-left-background);padding:20px;position:relative}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{left:40px;top:39px;position:absolute;color:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar[_ngcontent-%COMP%]{border:none;background:white;border-radius:25px;width:100%;padding:15px 15px 15px 40px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar[_ngcontent-%COMP%]:focus{outline:none;border:2px solid var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:22px;text-align:center;padding:20px;border-bottom:.5px solid #ccc;margin:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]{padding:0 20px 20px;height:90vh;overflow-y:scroll;color:#fff}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]{position:relative;padding:15px;border-radius:10px;cursor:pointer}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .new-messages-count[_ngcontent-%COMP%]{position:absolute;bottom:30px;padding:0 5px;color:#fff;background:var(--color-primary);right:25px;font-weight:700;font-size:14px;border-radius:5px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-last-message[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-last-message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:20px;width:20px;object-fit:cover;border-radius:50%}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-image[_ngcontent-%COMP%]{border-radius:50%;width:75px;height:75px;object-fit:cover}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-hour[_ngcontent-%COMP%]{font-weight:400;float:right;font-size:14px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-name[_ngcontent-%COMP%]{font-weight:700;font-size:18px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]:hover{background:var(--color-primary);scale:1.005}@media (max-width: 902px){.messages-container[_ngcontent-%COMP%]{height:70vh!important;padding:20px 20px 50px!important}.void-text[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 480px){.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]{bottom:60px!important}}"]})}var w=e(11209),Z=e(24006),y=e(18232);const T=[{path:"",component:l}];class d{static#t=this.\u0275fac=function(n){return new(n||d)};static#n=this.\u0275mod=t.oAB({type:d});static#e=this.\u0275inj=t.cJS({imports:[a.ez,i,w._,Z.u5,y.K,s.Bz.forChild(T)]})}}}]);