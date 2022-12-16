import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/Chat';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  public chats: Chat[] = [];
  public messages: ChatMessage[] = [];
  public selectedChat?: Chat;
  public showMenu:boolean=true;
  public actualMessage?: ChatMessage = {
    text: "",
  };
  public user!: User;

  public chatsInterval: any;
  public messagesInterval: any;
  public refreshMessagesTime:number=2000;

  constructor(private apiService: ApiService,
    public loading: LoadingService,
    private auth: AuthenticationService) {

  }

  ngOnInit(): void {
    this.user = this.auth.getStorageUser();
    this.loading.startLoading();
    this.getChats();
    this.chatsInterval = setInterval(() => {
      this.getChats();
    }, this.refreshMessagesTime);
  }


  public getChats(): void {
    this.apiService.getEntity('chats').subscribe((chats: Chat[]) => {
      console.log(chats);
      this.chats = chats;
      let new_messages=chats.some(x=>x.unread_messages_count!>0);
      if(new_messages){
        //Sonido notificación
      }
      this.loading.stopLoading();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public selectChat(chat: Chat): void {
    this.selectedChat = chat;
    chat.unread_messages_count = 0;
    this.showMenu=false;
    clearInterval(this.messagesInterval);
    this.messagesInterval = null;
    this.loading.startLoading();
    this.getChatMessages();

    this.messagesInterval = setInterval(() => {
      this.getChatMessages();
    }, this.refreshMessagesTime);
  }

  public getChatMessages(): void {
    this.apiService.getSubEntity('chats', this.selectedChat?.id!, 'messages').subscribe((messages: ChatMessage[]) => {
      this.messages = messages;
      this.loading.stopLoading();
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public sendMessage(): void {
    if (this.actualMessage?.text != "") {
      let message:ChatMessage={
        text:this.actualMessage?.text!,
        user:this.user,
        created_at:new Date
      };
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
      this.actualMessage!.text = "";
      this.messages.push(message);
      this.apiService.addSubEntity('chats', this.selectedChat?.id!, 'messages', message).subscribe((message: ChatMessage) => {
        console.log(message);
        this.actualMessage!.text = "";      
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }

  public scrollToBottom(): void {
    let messagesContainer = document.getElementById('messages-container-scroll');
    messagesContainer!.scrollTop = messagesContainer!.scrollHeight;
    console.log(messagesContainer);

  }

  public ngOnDestroy(): void {
    clearInterval(this.chatsInterval);
    this.chatsInterval = null;
    clearInterval(this.messagesInterval);
    this.messagesInterval = null;
  }

  public toggleShowMenu():void{
    this.showMenu=!this.showMenu;
    this.selectedChat=undefined;
  }
}
