import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/models/Chat';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-interior-chat',
  templateUrl: './interior-chat.component.html',
  styleUrls: ['./interior-chat.component.scss']
})
export class InteriorChatComponent {

  public messages: ChatMessage[] = [];
  public chat_id?:number;
  public selectedChat?: Chat;
  public actualMessage?: ChatMessage = {
    text: "",
  };
  public user!: User;

  public messagesInterval: any;
  public refreshMessagesTime: number = 2000;

  constructor(private apiService: ApiService,
    public loading: LoadingService,
    private auth: AuthenticationService,
    private activatedRoute:ActivatedRoute) {

      this.chat_id=+activatedRoute.snapshot.paramMap.get('id')!;

  }

  ngOnInit(): void {
    this.getChat();
    this.user = this.auth.getStorageUser();
    this.loading.startLoading();
    //obtenemos por primera vez
    this.getChatMessages();

    this.messagesInterval = setInterval(() => {
      this.getChatMessages();
    }, this.refreshMessagesTime);
  }

  public getChat():void{
    this.apiService.getEntity('chats',this.chat_id).subscribe((chat:Chat)=>{
      this.selectedChat=chat;
      console.log(chat);
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
  }
  
  
  public getChatMessages(): void {
    this.apiService.getSubEntity('chats', this.chat_id!, 'messages').subscribe((messages: ChatMessage[]) => {
      this.loading.stopLoading();
      if(this.messages.length==0){
        this.messages=messages;
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      }
      if (this.messages.length + 1 == messages.length) {
        this.messages = messages;
        setTimeout(() => {
          this.scrollToBottom();
        }, 100);
      }
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public sendMessage(): void {
    if (this.actualMessage?.text != "") {
      let message: ChatMessage = {
        text: this.actualMessage?.text!,
        user: this.user,
        created_at: new Date
      };

      this.actualMessage!.text = "";
      this.messages.push(message);
      this.selectedChat!.unread_messages_count=0;
      console.log(this.selectedChat?.unread_messages_count);
      
      setTimeout(() => {
        this.scrollToBottom();
      }, 100);
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
  
    clearInterval(this.messagesInterval);
    this.messagesInterval = null;
  }

  public back():void{
    window.history.back();
  }
 
}


