"use strict";(self.webpackChunksidenav=self.webpackChunksidenav||[]).push([[406],{54828:(P,u,r)=>{r.d(u,{q:()=>g});var s=r(41571);class g{constructor(){}ngOnInit(){}static#n=this.\u0275fac=function(_){return new(_||g)};static#t=this.\u0275cmp=s.Xpm({type:g,selectors:[["app-loading"]],inputs:{text:"text"},decls:5,vars:1,consts:[[1,"loader-container","row"],[1,"col-12","my-auto"],["src","assets/imgs/box-transparent.png","alt","",1,"loader"],[1,"text"]],template:function(_,l){1&_&&(s.TgZ(0,"div",0)(1,"div",1),s._UZ(2,"img",2),s.TgZ(3,"p",3),s._uU(4),s.qZA()()()),2&_&&(s.xp6(4),s.Oqu(l.text))},styles:[".loader-container[_ngcontent-%COMP%]{text-align:center;z-index:99999;position:fixed;height:100%;overflow:hidden;background-color:var(--dark-background);background-image:url(box-transparent-dark.f4e6dd0066fadcee.svg);background-repeat:space;background-size:200px;background-position:center;top:0;left:0;right:0}.loader-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:var(--color-primary);font-weight:700;font-size:24px;margin-top:10px}.loader-container[_ngcontent-%COMP%]   .loader-text[_ngcontent-%COMP%]{font-size:22px;font-weight:700;color:var(--color-primary);margin-bottom:30px;opacity:1}.loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:150px;height:150px;animation:_ngcontent-%COMP%_spin 1.5s linear infinite;opacity:1}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}"]})}},18232:(P,u,r)=>{r.d(u,{K:()=>n});var s=r(36895),g=r(41571);class n{static#n=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=g.oAB({type:n});static#e=this.\u0275inj=g.cJS({imports:[s.ez]})}},11209:(P,u,r)=>{r.d(u,{_:()=>n});var s=r(36895),g=r(41571);class n{static#n=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=g.oAB({type:n});static#e=this.\u0275inj=g.cJS({imports:[s.ez]})}},54406:(P,u,r)=>{r.r(u),r.d(u,{InteriorChatModule:()=>f});var s=r(36895),g=r(67182),n=r(41571);const v=[];class _{static#n=this.\u0275fac=function(t){return new(t||_)};static#t=this.\u0275mod=n.oAB({type:_});static#e=this.\u0275inj=n.cJS({imports:[g.Bz.forChild(v),g.Bz]})}function l(e,o,t,a,i,c,p){try{var h=e[c](p),d=h.value}catch(O){return void t(O)}h.done?o(d):Promise.resolve(d).then(a,i)}function M(e){return function(){var o=this,t=arguments;return new Promise(function(a,i){var c=e.apply(o,t);function p(d){l(c,a,i,p,h,"next",d)}function h(d){l(c,a,i,p,h,"throw",d)}p(void 0)})}}var T=r(5830),I=r(4471),Z=r(7053),b=r(11481);class m{constructor(o){this.sanitizer=o}ngOnInit(){return M(function*(){})()}startRecording(){return new Promise(function(){var o=M(function*(t){navigator.mediaDevices.getUserMedia({audio:!0}).then(a=>{const i=new MediaRecorder(a),c=[];i.addEventListener("dataavailable",d=>{c.push(d.data)}),t({start:()=>i.start(),stop:()=>new Promise(d=>{i.addEventListener("stop",()=>{const O=new Blob(c),w=URL.createObjectURL(O),fn=new Audio(w);d({audioBlob:O,audioUrl:w,play:()=>fn.play()})}),i.stop()})})})});return function(t){return o.apply(this,arguments)}}())}static#n=this.\u0275fac=function(t){return new(t||m)(n.LFG(b.H7))};static#t=this.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}var C=r(24006),y=r(54828);function k(e,o){if(1&e&&n._UZ(0,"img",17),2&e){const t=n.oxw().$implicit;n.Q6J("src",t.avatar,n.LSH)}}function A(e,o){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=n.oxw(2);n.xp6(1),n.hij("y ",(null==t.selectedChat||null==t.selectedChat.users?null:t.selectedChat.users.length)-6," m\xe1s")}}function J(e,o){if(1&e&&(n.ynx(0),n.YNc(1,k,1,1,"img",15),n.YNc(2,A,2,1,"span",16),n.BQk()),2&e){const t=o.index;n.xp6(1),n.Q6J("ngIf",t<6),n.xp6(1),n.Q6J("ngIf",6==t)}}function Q(e,o){if(1&e&&(n.TgZ(0,"div",22),n._UZ(1,"img",23),n.qZA()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.Q6J("src",(null==t?null:t.user).avatar,n.LSH)}}function U(e,o){1&e&&n._UZ(0,"i",33)}function N(e,o){1&e&&n._UZ(0,"i",34)}function Y(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.duration,"m:ss"))}}function L(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.duration,"m:ss"))}}function q(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",20)(1,"div",24),n._UZ(2,"img",25),n.qZA(),n.TgZ(3,"div",26),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2).$implicit,c=n.oxw();return n.KtG(c.togglePlay(i))}),n.YNc(4,U,1,0,"i",27),n.YNc(5,N,1,0,"i",28),n.qZA(),n.TgZ(6,"div",29),n._UZ(7,"input",30),n.qZA(),n.YNc(8,Y,3,4,"span",31),n.YNc(9,L,3,4,"span",31),n.TgZ(10,"span",32),n._uU(11),n.ALo(12,"date"),n.qZA()()}if(2&e){const t=n.oxw(2).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"chat-audio message-right":"chat-audio message-left"),n.xp6(2),n.Q6J("src",a.user.avatar,n.LSH),n.xp6(2),n.Q6J("ngIf",!t.is_playing_audio),n.xp6(1),n.Q6J("ngIf",t.is_playing_audio),n.xp6(2),n.Q6J("max",t.audio.duration)("min",0)("value",t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",0==t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",t.audio.currentTime>0),n.xp6(2),n.hij(" ",n.xi3(12,10,null==t?null:t.created_at,"HH:mm"),"")}}function z(e,o){if(1&e&&(n.TgZ(0,"p",40),n._uU(1),n.qZA()),2&e){const t=n.oxw(3).$implicit;n.xp6(1),n.hij(" ",null==t||null==t.user?null:t.user.name," ")}}function E(e,o){if(1&e&&n._UZ(0,"img",25),2&e){const t=n.oxw(3).$implicit;n.Q6J("src",t.image,n.LSH)}}function H(e,o){if(1&e&&(n.TgZ(0,"div",20),n.YNc(1,z,2,1,"p",36),n.YNc(2,E,1,1,"img",37),n.TgZ(3,"span",38),n._uU(4),n.qZA(),n.TgZ(5,"span",39),n._uU(6),n.ALo(7,"date"),n.qZA()()),2&e){const t=n.oxw(2).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"message message-right":"message message-left"),n.xp6(1),n.Q6J("ngIf",a.user.id!=(null==t?null:t.user).id),n.xp6(1),n.Q6J("ngIf",t.image),n.xp6(2),n.hij("",null==t?null:t.text," "),n.xp6(2),n.hij(" ",n.xi3(7,5,null==t?null:t.created_at,"HH:mm"),"")}}function $(e,o){if(1&e&&(n.ynx(0),n.YNc(1,Q,2,1,"div",19),n.TgZ(2,"div",20),n.YNc(3,q,13,13,"div",21),n.YNc(4,H,8,8,"div",21),n.qZA(),n.BQk()),2&e){const t=n.oxw().$implicit,a=n.oxw();n.xp6(1),n.Q6J("ngIf",a.user.id!=(null==t?null:t.user).id),n.xp6(1),n.Q6J("ngClass",a.user.id!=(null==t?null:t.user).id?"col-lg-11 col-10":"col-lg-11 col-11"),n.xp6(1),n.Q6J("ngIf",t.audio),n.xp6(1),n.Q6J("ngIf",!t.audio)}}function j(e,o){if(1&e&&n._UZ(0,"img",23),2&e){const t=n.oxw(3).$implicit;n.Q6J("src",(null==t?null:t.user).avatar,n.LSH)}}function B(e,o){if(1&e&&(n.TgZ(0,"div",22),n.YNc(1,j,1,1,"img",41),n.qZA()),2&e){const t=n.oxw(2),a=t.index,i=t.$implicit,c=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==c.messages[a-1].user?null:c.messages[a-1].user.id)!=(null==i.user?null:i.user.id))}}function F(e,o){if(1&e&&(n.TgZ(0,"p",40),n._uU(1),n.qZA()),2&e){const t=n.oxw(4).$implicit;n.xp6(1),n.hij(" ",null==t||null==t.user?null:t.user.name," ")}}function S(e,o){if(1&e&&n._UZ(0,"img",25),2&e){const t=n.oxw(4).$implicit;n.Q6J("src",t.image,n.LSH)}}function R(e,o){if(1&e&&(n.TgZ(0,"div",20),n.YNc(1,F,2,1,"p",36),n.YNc(2,S,1,1,"img",37),n.TgZ(3,"span",38),n._uU(4),n.qZA(),n.TgZ(5,"span",39),n._uU(6),n.ALo(7,"date"),n.qZA()()),2&e){const t=n.oxw(3).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"message message-right":"message message-left"),n.xp6(1),n.Q6J("ngIf",a.user.id!=(null==t?null:t.user).id),n.xp6(1),n.Q6J("ngIf",t.image),n.xp6(2),n.hij("",null==t?null:t.text," "),n.xp6(2),n.hij(" ",n.xi3(7,5,null==t?null:t.created_at,"HH:mm"),"")}}function K(e,o){1&e&&n._UZ(0,"i",33)}function D(e,o){1&e&&n._UZ(0,"i",34)}function G(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(4).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.duration,"m:ss"))}}function W(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(4).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.duration,"m:ss"))}}function X(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",20)(1,"div",24),n._UZ(2,"img",25),n.qZA(),n.TgZ(3,"div",26),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(3).$implicit,c=n.oxw();return n.KtG(c.togglePlay(i))}),n.YNc(4,K,1,0,"i",27),n.YNc(5,D,1,0,"i",28),n.qZA(),n.TgZ(6,"div",29),n._UZ(7,"input",30),n.qZA(),n.YNc(8,G,3,4,"span",31),n.YNc(9,W,3,4,"span",31),n.TgZ(10,"span",32),n._uU(11),n.ALo(12,"date"),n.qZA()()}if(2&e){const t=n.oxw(3).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"chat-audio message-right":"chat-audio message-left"),n.xp6(2),n.Q6J("src",a.user.avatar,n.LSH),n.xp6(2),n.Q6J("ngIf",!t.is_playing_audio),n.xp6(1),n.Q6J("ngIf",t.is_playing_audio),n.xp6(2),n.Q6J("max",t.audio.duration)("min",0)("value",t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",0==t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",t.audio.currentTime>0),n.xp6(2),n.hij(" ",n.xi3(12,10,null==t?null:t.created_at,"HH:mm"),"")}}function V(e,o){if(1&e&&(n.ynx(0),n.YNc(1,R,8,8,"div",21),n.YNc(2,X,13,13,"div",21),n.BQk()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.Q6J("ngIf",!t.audio),n.xp6(1),n.Q6J("ngIf",t.audio)}}function nn(e,o){if(1&e&&n._UZ(0,"img",25),2&e){const t=n.oxw(4).$implicit;n.Q6J("src",t.image,n.LSH)}}function tn(e,o){if(1&e&&(n.TgZ(0,"div",20),n.YNc(1,nn,1,1,"img",37),n.TgZ(2,"span",38),n._uU(3),n.qZA(),n.TgZ(4,"span",39),n._uU(5),n.ALo(6,"date"),n.qZA()()),2&e){const t=n.oxw(3).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"message-right-simple message":"message-simple message"),n.xp6(1),n.Q6J("ngIf",t.image),n.xp6(2),n.hij("",null==t?null:t.text," "),n.xp6(2),n.hij(" ",n.xi3(6,4,null==t?null:t.created_at,"HH:mm"),"")}}function en(e,o){1&e&&n._UZ(0,"i",33)}function on(e,o){1&e&&n._UZ(0,"i",34)}function an(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(4).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.duration,"m:ss"))}}function cn(e,o){if(1&e&&(n.TgZ(0,"span",35),n._uU(1),n.ALo(2,"date"),n.qZA()),2&e){const t=n.oxw(4).$implicit;n.xp6(1),n.Oqu(n.xi3(2,1,1e3*t.audio.currentTime,"m:ss"))}}function rn(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",20)(1,"div",24),n._UZ(2,"img",25),n.qZA(),n.TgZ(3,"div",26),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(3).$implicit,c=n.oxw();return n.KtG(c.togglePlay(i))}),n.YNc(4,en,1,0,"i",27),n.YNc(5,on,1,0,"i",28),n.qZA(),n.TgZ(6,"div",29)(7,"input",42),n.NdJ("ngModelChange",function(i){n.CHM(t);const c=n.oxw(3).$implicit;return n.KtG(c.audio.currentTime=i)}),n.qZA()(),n.YNc(8,an,3,4,"span",31),n.YNc(9,cn,3,4,"span",31),n.TgZ(10,"span",32),n._uU(11),n.ALo(12,"date"),n.qZA()()}if(2&e){const t=n.oxw(3).$implicit,a=n.oxw();n.Q6J("ngClass",a.user.id==(null==t?null:t.user).id?"chat-audio message-right-simple":"chat-audio message-simple"),n.xp6(2),n.Q6J("src",a.user.avatar,n.LSH),n.xp6(2),n.Q6J("ngIf",!t.is_playing_audio),n.xp6(1),n.Q6J("ngIf",t.is_playing_audio),n.xp6(2),n.Q6J("max",t.audio.duration)("min",0)("ngModel",t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",0==t.audio.currentTime),n.xp6(1),n.Q6J("ngIf",t.audio.currentTime>0),n.xp6(2),n.hij(" ",n.xi3(12,10,null==t?null:t.created_at,"HH:mm"),"")}}function sn(e,o){if(1&e&&(n.ynx(0),n.YNc(1,tn,7,7,"div",21),n.YNc(2,rn,13,13,"div",21),n.BQk()),2&e){const t=n.oxw(2).$implicit;n.xp6(1),n.Q6J("ngIf",!t.audio),n.xp6(1),n.Q6J("ngIf",t.audio)}}function gn(e,o){if(1&e&&(n.ynx(0),n.YNc(1,B,2,1,"div",19),n.TgZ(2,"div",20),n.YNc(3,V,3,2,"ng-container",16),n.YNc(4,sn,3,2,"ng-container",16),n.qZA(),n.BQk()),2&e){const t=n.oxw(),a=t.$implicit,i=t.index,c=n.oxw();n.xp6(1),n.Q6J("ngIf",c.user.id!=(null==a?null:a.user).id),n.xp6(1),n.Q6J("ngClass",c.user.id!=(null==a?null:a.user).id?"col-lg-11 col-10":"col-lg-11 col-11"),n.xp6(1),n.Q6J("ngIf",(null==c.messages[i-1].user?null:c.messages[i-1].user.id)!=(null==a||null==a.user?null:a.user.id)),n.xp6(1),n.Q6J("ngIf",(null==c.messages[i-1].user?null:c.messages[i-1].user.id)==(null==a||null==a.user?null:a.user.id))}}function _n(e,o){if(1&e&&(n.TgZ(0,"div",18),n.YNc(1,$,5,4,"ng-container",16),n.YNc(2,gn,5,4,"ng-container",16),n.qZA()),2&e){const t=o.index;n.xp6(1),n.Q6J("ngIf",0==t),n.xp6(1),n.Q6J("ngIf",t>=1)}}function dn(e,o){if(1&e&&(n.TgZ(0,"p",43),n._uU(1),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.hij(" ",null==t.selectedChat?null:t.selectedChat.unread_messages_count," mensajes sin leer")}}function un(e,o){1&e&&(n.TgZ(0,"div",44)(1,"p",45),n._uU(2,"No hay mensajes a\xfan"),n.qZA()())}function ln(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",56)(1,"i",57),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.deleteImage())}),n.qZA(),n._UZ(2,"img",25),n.qZA()}if(2&e){const t=n.oxw(2);n.xp6(2),n.Q6J("src",null==t.actualMessage?null:t.actualMessage.image,n.LSH)}}function pn(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"button",58),n.NdJ("mousedown",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.recordAudio())})("mouseup",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.stopRecordingAudio())}),n._UZ(1,"i",59),n.qZA()}}function hn(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"button",60),n.NdJ("click",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.sendMessage())}),n._UZ(1,"i",61),n.qZA()}}function mn(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",46)(1,"div",47),n.YNc(2,ln,3,1,"div",48),n.TgZ(3,"input",49),n.NdJ("keydown.enter",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.sendMessage())})("ngModelChange",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.actualMessage.text=i)}),n.qZA(),n.TgZ(4,"div",50)(5,"label",51),n._UZ(6,"i",52),n.qZA(),n.TgZ(7,"input",53),n.NdJ("change",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.uploadImage(i))}),n.qZA()(),n.YNc(8,pn,2,0,"button",54),n.YNc(9,hn,2,0,"button",55),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",null==t.actualMessage?null:t.actualMessage.image),n.xp6(1),n.Q6J("ngModel",t.actualMessage.text),n.xp6(5),n.Q6J("ngIf",""==(null==t.actualMessage?null:t.actualMessage.text)&&!(null!=t.actualMessage&&t.actualMessage.image)),n.xp6(1),n.Q6J("ngIf",""!=(null==t.actualMessage?null:t.actualMessage.text)||(null==t.actualMessage?null:t.actualMessage.image))}}class x{constructor(o,t,a,i,c,p){this.apiService=o,this.loading=t,this.auth=a,this.activatedRoute=i,this.chatAudio=c,this.sanitizer=p,this.messages=[],this.actualMessage={text:""},this.refreshMessagesTime=2e3,this.currentTime=0,this.chat_id=+i.snapshot.paramMap.get("id")}ngOnInit(){this.getChat(),this.user=this.auth.getStorageUser(),this.loading.startLoading(),this.getChatMessages(),this.messagesInterval=setInterval(()=>{this.getChatMessages()},this.refreshMessagesTime)}getChat(){this.apiService.getEntity("chats",this.chat_id).subscribe(o=>{this.selectedChat=o,console.log(o)},o=>{console.log(o)})}getChatMessages(){this.apiService.getSubEntity("chats",this.chat_id,"messages").subscribe(o=>{this.loading.stopLoading(),0==this.messages.length&&(this.messages=o,setTimeout(()=>{this.scrollToBottom()},100)),this.messages.length+1==o.length&&(this.messages=o,setTimeout(()=>{this.scrollToBottom()},100))},o=>{console.log(o),this.loading.stopLoading()})}sendMessage(){if(""!=this.actualMessage?.text||this.actualMessage.image){let o={text:this.actualMessage?.text,user:this.user,image:this.actualMessage?.image,created_at:new Date};this.deleteImage(),this.actualMessage.text="",this.messages.push(o),this.selectedChat.unread_messages_count=0,console.log(this.selectedChat?.unread_messages_count),setTimeout(()=>{this.scrollToBottom()},100),this.apiService.addSubEntity("chats",this.selectedChat?.id,"messages",o).subscribe(t=>{console.log(t),this.actualMessage.text=""},t=>{console.log(t)})}}scrollToBottom(){let o=document.getElementById("messages-container-scroll");o.scrollTop=o.scrollHeight,console.log(o)}ngOnDestroy(){clearInterval(this.messagesInterval),this.messagesInterval=null}back(){window.history.back()}recordAudio(){var o=this;return M(function*(){console.log("Recording audio xd"),o.recordedAudio=void 0,o.recorder=yield o.chatAudio.startRecording(),o.recorder.start()})()}stopRecordingAudio(){var o=this;return M(function*(){console.log("stoping audio xd"),o.recordedAudio=yield o.recorder.stop();let a={text:"",audio:new Audio(o.recordedAudio.audioUrl),audio_url:o.recordedAudio.audioUrl,user:o.user,created_at:new Date};o.actualMessage.text="",o.selectedChat.unread_messages_count=0,setTimeout(()=>{o.scrollToBottom()},100),o.messages.push(a)})()}togglePlay(o){o.is_playing_audio?o.audio.pause():o.audio.play(),console.log("DURACION",o.audio?.duration),o.audio.ontimeupdate=t=>{this.currentTime=o.audio.currentTime},o.audio.onplaying=()=>{o.is_playing_audio=!0},o.audio.onpause=()=>{o.is_playing_audio=!1},o.audio.addEventListener("ended",function(){o.audio.currentTime=0,this.currentTime=0,console.log("ended")}),o.audio.addEventListener("loadeddata",function(){console.log("Audio duration: "+this.duration)})}floor(o){return Math.floor(o)}uploadImage(o){var t=o.dataTransfer?o.dataTransfer.files[0]:o.target.files[0],i=new FileReader;t.type.match(/image-*/)?(i.onload=this._handleReaderLoaded.bind(this),i.readAsDataURL(t)):alert("invalid format")}_handleReaderLoaded(o){this.actualMessage.image=o.target.result,console.log(this.actualMessage)}deleteImage(){this.actualMessage.image=void 0}static#n=this.\u0275fac=function(t){return new(t||x)(n.Y36(T.s),n.Y36(I.b),n.Y36(Z.$),n.Y36(g.gz),n.Y36(m),n.Y36(b.H7))};static#t=this.\u0275cmp=n.Xpm({type:x,selectors:[["app-interior-chat"]],decls:22,vars:21,consts:[[1,"chat-container","content",3,"hidden"],[1,"chats-content","row"],[1,"interior-chat","col-lg-12","col-12"],[1,"chat-title-container","row"],[1,"chats-sidebar-menu",3,"click"],[1,"fa","fa-arrow-left"],[1,"chat-title"],[1,"chat-users"],[4,"ngFor","ngForOf"],["id","messages-container-scroll",1,"messages-container"],["class","message-container justify-content-center row",4,"ngFor","ngForOf"],["class","unread-messages",4,"ngIf"],["class","row",4,"ngIf"],["class","chat-footer",4,"ngIf"],[3,"hidden"],["class","user-avatar","alt","","onError","this.src='assets/imgs/avatar.png'",3,"src",4,"ngIf"],[4,"ngIf"],["alt","","onError","this.src='assets/imgs/avatar.png'",1,"user-avatar",3,"src"],[1,"message-container","justify-content-center","row"],["class","col-lg-1 col-2 user-image",4,"ngIf"],[3,"ngClass"],[3,"ngClass",4,"ngIf"],[1,"col-lg-1","col-2","user-image"],["alt","","onError","this.src='assets/imgs/avatar.png'",3,"src"],[1,"col-3","user-audio-avatar","my-auto"],["alt","",3,"src"],[1,"col-3","play-button","my-auto",3,"click"],["class","fa fa-play",4,"ngIf"],["class","fa fa-pause",4,"ngIf"],[1,"col","time-range","my-auto"],["type","range","step","0.1",3,"max","min","value"],["class","audio-duration",4,"ngIf"],[1,"audio-hour"],[1,"fa","fa-play"],[1,"fa","fa-pause"],[1,"audio-duration"],["class","message-username",4,"ngIf"],["alt","",3,"src",4,"ngIf"],[1,"message-text"],[1,"message-hour"],[1,"message-username"],["alt","","onError","this.src='assets/imgs/avatar.png'",3,"src",4,"ngIf"],["type","range","step","0.1",3,"max","min","ngModel","ngModelChange"],[1,"unread-messages"],[1,"row"],[1,"no-messages-text"],[1,"chat-footer"],[1,"input-container"],["class","upload-image",4,"ngIf"],["type","text","placeholder","Escribe un mensaje",1,"message-input",3,"ngModel","keydown.enter","ngModelChange"],[1,"upload-image-button"],["for","file-upload",1,"custom-file-upload"],[1,"fa","fa-camera"],["id","file-upload","type","file",3,"change"],["class","send-button","type","button",3,"mousedown","mouseup",4,"ngIf"],["class","send-button","type","submit",3,"click",4,"ngIf"],[1,"upload-image"],[1,"delete-image-button","fa","fa-close",3,"click"],["type","button",1,"send-button",3,"mousedown","mouseup"],[1,"fa","fa-microphone"],["type","submit",1,"send-button",3,"click"],[1,"fa","fa-paper-plane"]],template:function(t,a){1&t&&(n.TgZ(0,"div",0),n.ALo(1,"async"),n.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"button",4),n.NdJ("click",function(){return a.back()}),n._UZ(6,"i",5),n.qZA(),n.TgZ(7,"p",6),n._uU(8),n.ALo(9,"date"),n.ALo(10,"slice"),n.qZA(),n.TgZ(11,"div",7)(12,"span"),n._uU(13,"Participantes "),n.qZA(),n.YNc(14,J,3,2,"ng-container",8),n.qZA()(),n.TgZ(15,"div",9),n.YNc(16,_n,3,2,"div",10),n.YNc(17,dn,2,1,"p",11),n.YNc(18,un,3,0,"div",12),n.qZA()()(),n.YNc(19,mn,10,4,"div",13),n.qZA(),n._UZ(20,"app-loading",14),n.ALo(21,"async")),2&t&&(n.Q6J("hidden",n.lcZ(1,10,a.loading.isLoading)),n.xp6(8),n.lnq("",null==a.selectedChat?null:a.selectedChat.name," - ",n.xi3(9,12,null==a.selectedChat||null==a.selectedChat.open_reservation?null:a.selectedChat.open_reservation.date,"dd/MMM")," - ",n.Dn7(10,15,null==a.selectedChat||null==a.selectedChat.open_reservation||null==a.selectedChat.open_reservation.game_reservation_hour?null:a.selectedChat.open_reservation.game_reservation_hour.hour,0,5)," "),n.xp6(6),n.Q6J("ngForOf",null==a.selectedChat?null:a.selectedChat.users),n.xp6(2),n.Q6J("ngForOf",a.messages),n.xp6(1),n.Q6J("ngIf",(null==a.selectedChat?null:a.selectedChat.unread_messages_count)>0),n.xp6(1),n.Q6J("ngIf",a.messages.length<=0),n.xp6(1),n.Q6J("ngIf",a.selectedChat),n.xp6(1),n.Q6J("hidden",!n.lcZ(21,19,a.loading.isLoading)))},dependencies:[s.mk,s.sg,s.O5,C.Fj,C.eT,C.JJ,C.On,y.q,s.Ov,s.OU,s.uU],styles:['.chat-container[_ngcontent-%COMP%]{width:100%;overflow-y:hidden;overflow-x:hidden}.chat-container[_ngcontent-%COMP%]   .unread-messages[_ngcontent-%COMP%]{text-align:center;padding:10px;background:rgba(0,0,0,.2);margin-top:10px;font-weight:700}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]{text-align:center}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:30vh;padding:10px;font-weight:700;font-size:20px}.chat-container[_ngcontent-%COMP%]   .no-chats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:25px;width:auto;border:none;color:#fff;padding:10px 20px;background:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .void-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:26px;margin-top:42vh;text-align:center;font-weight:700;transform:translateY(-50%)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]{padding:10px;border-radius:10px;box-shadow:var(--item-box-shadow);background:var(--chat-message-right-background);color:#fff;position:relative;margin-top:15px;width:300px;display:flex}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .audio-duration[_ngcontent-%COMP%], .chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .audio-hour[_ngcontent-%COMP%]{color:#fff;position:absolute;bottom:10px;font-size:12px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .audio-duration[_ngcontent-%COMP%]{left:50%}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .audio-hour[_ngcontent-%COMP%]{right:10px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .user-audio-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;object-fit:cover;height:60px;width:60px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]{-webkit-appearance:none;width:100%;height:7px;background:rgba(255,255,255,.6);border-radius:5px;background-size:70% 100%;background-repeat:no-repeat}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;height:10px;width:3px;border-radius:50%;background:white;cursor:ew-resize;box-shadow:0 0 2px #555;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#ff4500;cursor:ew-resize;box-shadow:0 0 2px #555;-moz-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-ms-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:#ff4500;cursor:ew-resize;box-shadow:0 0 2px #555;-ms-transition:background .3s ease-in-out;transition:background .3s ease-in-out}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb:hover{background:#ff0200}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-thumb:hover{background:#ff0200}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-ms-thumb:hover{background:#ff0200}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-moz-range-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%]::-ms-track{-webkit-appearance:none;box-shadow:none;border:none;background:transparent}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .time-range[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .chat-audio[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%]{text-align:center;font-size:25px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]{padding:0;position:relative}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chats-sidebar-menu[_ngcontent-%COMP%]{border:none;background:none;width:auto;position:absolute;top:25px;left:25px;font-size:20px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]{background:white;margin:0;border-bottom:.5px solid #ccc;padding:20px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]   .chat-users[_ngcontent-%COMP%]{margin-top:10px;text-align:center}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]   .chat-users[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:25px;height:25px;border-radius:50%;box-shadow:var(--item-box-shadow);object-fit:cover}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]   .chat-image[_ngcontent-%COMP%]{border-radius:50%;height:50px;width:50px;object-fit:cover}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]{font-weight:700;font-size:22px;padding:0 50px;text-align:center;margin:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .chat-title-container[_ngcontent-%COMP%]   .chat-hour[_ngcontent-%COMP%]{font-weight:400;font-size:12px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]{padding:50px 70px 20px 40px;overflow-y:scroll;overflow-x:hidden;height:60vh}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .no-messages-text[_ngcontent-%COMP%]{text-align:center;font-size:22px;margin-top:50px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{position:relative;margin-bottom:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]{padding:0;text-align:center}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{box-shadow:var(--item-box-shadow);border-radius:50%;height:50px;width:50px;object-fit:cover}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:10px 10px 5px;border-radius:20px;box-shadow:var(--item-box-shadow);background:var(--color-primary-light);color:#fff;position:relative;margin-top:15px;max-width:75%;display:inline-block}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;margin-bottom:3px;width:100%}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-username[_ngcontent-%COMP%]{margin:0;font-size:14px;font-weight:700;color:var(--chat-message-right-background)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-user[_ngcontent-%COMP%]{font-weight:700;margin:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{font-size:16px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .message-hour[_ngcontent-%COMP%]{float:right;margin:5px 0 0 10px;font-size:12px}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-simple[_ngcontent-%COMP%]{margin-top:2px;float:left;background:var(--chat-message-left-background)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-right-simple[_ngcontent-%COMP%]{margin:2px;float:right;background:var(--chat-message-right-background)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-right[_ngcontent-%COMP%]:before{content:"";width:0px;height:0px;position:absolute;border-left:10px solid var(--chat-message-right-background);border-right:10px solid transparent;border-top:10px solid var(--chat-message-right-background);border-bottom:10px solid transparent;right:-10px;top:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-left[_ngcontent-%COMP%]:before{content:"";width:0px;height:0px;position:absolute;border-left:10px solid transparent;border-right:10px solid var(--chat-message-left-background);border-top:10px solid var(--chat-message-left-background);border-bottom:10px solid transparent;left:-10px;top:0}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-left[_ngcontent-%COMP%]{float:left;border-radius:5px 20px 20px;background:var(--chat-message-left-background)}.chat-container[_ngcontent-%COMP%]   .chats-content[_ngcontent-%COMP%]   .interior-chat[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]   .message-right[_ngcontent-%COMP%]{float:right;border-radius:20px 5px 20px 20px;background:var(--chat-message-right-background)}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]{margin:0 auto;position:absolute;text-align:center;left:0;right:0;bottom:0;padding-bottom:10px;padding-top:10px;width:100%;background:white;border-top:.5px solid #fafafa}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{position:relative}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]{padding:20px}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;border-radius:10px;max-height:50vh;box-shadow:var(--item-box-shadow)}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image[_ngcontent-%COMP%]   .delete-image-button[_ngcontent-%COMP%]{background:var(--color-primary);color:#fff;border-radius:10px;padding:7px 10px;font-size:13px;position:absolute;right:10px;top:5px}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image-button[_ngcontent-%COMP%]{display:inline}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image-button[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]{display:none}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .upload-image-button[_ngcontent-%COMP%]   .custom-file-upload[_ngcontent-%COMP%]{cursor:pointer;box-shadow:var(--item-box-shadow);background:white;color:var(--color-primary);border:none;border-radius:50%;height:50px;width:50px;padding:15px;margin-left:10px;transition:ease .2s}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%], .chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .audio-button[_ngcontent-%COMP%]{cursor:pointer;box-shadow:var(--item-box-shadow);background:white;border:none;border-radius:50%;height:50px;width:50px;padding:15px;margin-left:10px;transition:ease .2s}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .audio-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;color:var(--color-primary)}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:hover, .chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .audio-button[_ngcontent-%COMP%]:hover{background:#f8e5d3}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:active{background:var(--color-primary);transform:scale(1.2)}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%]{color:#fff}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]{width:60%;box-shadow:var(--item-box-shadow);background:white;border:none;border-radius:25px;padding:15px;font-size:16px}.chat-container[_ngcontent-%COMP%]   .chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus{outline:none}@media (max-width: 902px){.messages-container[_ngcontent-%COMP%]{height:70vh!important;padding:20px 20px 50px!important}.void-text[_ngcontent-%COMP%]{display:none!important}}']})}var Cn=r(18232),Mn=r(11209);const xn=[{path:"",component:x}];class f{static#n=this.\u0275fac=function(t){return new(t||f)};static#t=this.\u0275mod=n.oAB({type:f});static#e=this.\u0275inj=n.cJS({imports:[s.ez,_,Mn._,C.u5,Cn.K,g.Bz.forChild(xn)]})}}}]);