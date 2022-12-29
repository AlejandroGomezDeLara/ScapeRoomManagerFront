"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[0],{11209:(_,r,o)=>{o.d(r,{_:()=>i});var s=o(36895),t=o(41571);class i{static#t=this.\u0275fac=function(g){return new(g||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[s.ez]})}},19e3:(_,r,o)=>{o.r(r),o.d(r,{ChatsModule:()=>l});var s=o(36895),t=o(41571),i=o(5830),p=o(4471),d=o(7053),g=o(67182);function m(a,e){if(1&a&&(t.TgZ(0,"p",21)(1,"b"),t._uU(2),t.qZA(),t._uU(3),t.qZA()),2&a){const n=t.oxw().$implicit;t.xp6(2),t.hij(" ",null==n.last_message.user?null:n.last_message.user.name,""),t.xp6(1),t.hij(": ",n.last_message.text," ")}}function C(a,e){1&a&&(t.TgZ(0,"p",21),t._uU(1,"Sin mensajes a\xfan"),t.qZA())}function u(a,e){if(1&a&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&a){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.unread_messages_count)}}function O(a,e){if(1&a&&(t.TgZ(0,"div",13)(1,"div",14),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"div",16)(4,"p",17),t._uU(5),t.TgZ(6,"span",18),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"p"),t._uU(10),t.ALo(11,"date"),t.ALo(12,"slice"),t.qZA(),t.YNc(13,m,4,2,"p",19),t.YNc(14,C,2,0,"p",19),t.YNc(15,u,2,1,"span",20),t.qZA()()),2&a){const n=e.$implicit;t.MGl("routerLink","",n.id,"/interior-chat"),t.xp6(2),t.Q6J("src",n.image,t.LSH),t.xp6(3),t.hij("",n.name," "),t.xp6(2),t.Oqu(t.xi3(8,9,null==n.last_message?null:n.last_message.created_at,"HH:mm")),t.xp6(3),t.AsE("",t.xi3(11,12,null==n.open_reservation?null:n.open_reservation.date,"dd-M-yy")," - ",t.Dn7(12,15,null==n.open_reservation||null==n.open_reservation.game_reservation_hour?null:n.open_reservation.game_reservation_hour.hour,0,5),""),t.xp6(3),t.Q6J("ngIf",n.last_message),t.xp6(1),t.Q6J("ngIf",!n.last_message),t.xp6(1),t.Q6J("ngIf",n.unread_messages_count)}}function M(a,e){if(1&a&&(t.TgZ(0,"div",6)(1,"div",7)(2,"div",8),t._UZ(3,"input",9)(4,"i",10),t.qZA()(),t.TgZ(5,"div",11),t.YNc(6,O,16,19,"div",12),t.qZA()()),2&a){const n=t.oxw();t.xp6(6),t.Q6J("ngForOf",n.chats)}}function P(a,e){1&a&&(t.TgZ(0,"div",23)(1,"p"),t._uU(2,"Selecciona un chat para ver sus mensajes"),t.qZA()())}class h{constructor(e,n,c){this.apiService=e,this.loading=n,this.auth=c,this.refreshMessagesTime=2e3}ngOnInit(){this.loading.startLoading(),this.getChats(),this.chatsInterval=setInterval(()=>{this.getChats()},this.refreshMessagesTime)}getChats(){this.apiService.getEntity("chats").subscribe(e=>{console.log(e),e.sort(function(c,b){return new Date(b.last_message?.created_at).getTime()-new Date(c.last_message?.created_at).getTime()}),this.chats=e,e.some(c=>c.unread_messages_count>0),this.loading.stopLoading()},e=>{console.log(e),this.loading.stopLoading()})}scrollToBottom(){let e=document.getElementById("messages-container-scroll");e.scrollTop=e.scrollHeight,console.log(e)}ngOnDestroy(){clearInterval(this.chatsInterval),this.chatsInterval=null}static#t=this.\u0275fac=function(n){return new(n||h)(t.Y36(i.s),t.Y36(p.b),t.Y36(d.$))};static#n=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-chats"]],decls:10,vars:5,consts:[[1,"chat-container","content"],[1,"no-chats",3,"hidden"],["routerLink","/search"],[1,"chats-content","row"],["class","chats-sidebar justify-content-center col-lg-4 col-12 row",4,"ngIf"],["class","col-lg-8 col-12 void-text",4,"ngIf"],[1,"chats-sidebar","justify-content-center","col-lg-4","col-12","row"],[1,"chats-searchbar-container","row","justify-content-center"],[1,"col-12"],["type","searchbar","placeholder","Buscar chat",1,"chats-searchbar","col-12"],[1,"search-icon","fa","fa-search"],[1,"chats-items-container","col-12"],["class","chats-item row",3,"routerLink",4,"ngFor","ngForOf"],[1,"chats-item","row",3,"routerLink"],[1,"col-lg-2","col-3","my-auto","text-center"],["alt","",1,"chat-image",3,"src"],[1,"col-lg-10","col-9","my-auto"],[1,"chat-name"],[1,"chat-hour"],["class","chat-last-message",4,"ngIf"],["class","new-messages-count",4,"ngIf"],[1,"chat-last-message"],[1,"new-messages-count"],[1,"col-lg-8","col-12","void-text"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.ALo(2,"async"),t.TgZ(3,"p"),t._uU(4,"No tienes ning\xfan chat activo, realiza una reserva!"),t.qZA(),t.TgZ(5,"button",2),t._uU(6,"Reservar"),t.qZA()(),t.TgZ(7,"div",3),t.YNc(8,M,7,1,"div",4),t.YNc(9,P,3,0,"div",5),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("hidden",(null==c.chats?null:c.chats.length)>0||t.lcZ(2,3,c.loading.isLoading)),t.xp6(7),t.Q6J("ngIf",(null==c.chats?null:c.chats.length)>0),t.xp6(1),t.Q6J("ngIf",(null==c.chats?null:c.chats.length)>0))},dependencies:[s.sg,s.O5,g.rH,s.Ov,s.OU,s.uU],styles:[".chat-container[_ngcontent-%COMP%]{width:100%;overflow-y:hidden;overflow-x:hidden}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]{text-align:center}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:30vh;padding:10px;font-weight:700;font-size:20px}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:25px;width:auto;border:none;color:#fff;padding:10px 20px;background:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .void-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:26px;margin-top:42vh;text-align:center;font-weight:700;transform:translateY(-50%)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]{padding:0;border-right:.5px solid #ccc;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:150px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar-container[_ngcontent-%COMP%]{width:100%;background:var(--chat-message-left-background);padding:20px 20px 20px 40px;height:80px;position:relative}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{left:70px;top:34px;position:absolute;color:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar[_ngcontent-%COMP%]{border:none;background:white;border-radius:25px;width:100%;padding:10px 10px 10px 40px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-searchbar[_ngcontent-%COMP%]:focus{outline:none;border:2px solid var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-sidebar-title[_ngcontent-%COMP%]{font-weight:700;font-size:22px;text-align:center;padding:20px;border-bottom:.5px solid #ccc;margin:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]{padding:0 20px 20px;height:calc(100vh - 170px);overflow-y:scroll;color:#fff}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]{position:relative;padding:15px;border-bottom:.5px solid var(--chat-message-left-background);cursor:pointer}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .new-messages-count[_ngcontent-%COMP%]{position:absolute;bottom:30px;padding:0 5px;color:#fff;background:var(--color-primary);right:25px;font-weight:700;font-size:14px;border-radius:5px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-last-message[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-last-message[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{height:20px;width:20px;object-fit:cover;border-radius:50%}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-image[_ngcontent-%COMP%]{border:.5px solid var(--chat-message-left-background);box-shadow:var(--item-box-shadow);border-radius:50%;width:65px;height:65px;object-fit:cover}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-hour[_ngcontent-%COMP%]{font-weight:400;float:right;font-size:14px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]   .chat-name[_ngcontent-%COMP%]{font-weight:700;font-size:16px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chats-sidebar[_ngcontent-%COMP%]   .chats-items-container[_ngcontent-%COMP%]   .chats-item[_ngcontent-%COMP%]:hover{background:var(--color-primary);scale:1.005}@media (max-width: 902px){.messages-container[_ngcontent-%COMP%]{height:70vh!important;padding:20px 20px 50px!important}.void-text[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 480px){.chats-items-container[_ngcontent-%COMP%]{height:calc(100vh - 142px)!important}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]{bottom:60px!important}}"]})}var v=o(11209),f=o(24006);const x=[{path:"",component:h}];class l{static#t=this.\u0275fac=function(n){return new(n||l)};static#n=this.\u0275mod=t.oAB({type:l});static#e=this.\u0275inj=t.cJS({imports:[s.ez,v._,f.u5,g.Bz.forChild(x)]})}}}]);