import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/Chat';
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
  public showMenu: boolean = true;
  public chatsInterval: any;
  public refreshMessagesTime: number = 2000;

  constructor(private apiService: ApiService,
    public loading: LoadingService,
    private auth: AuthenticationService) {

  }

  ngOnInit(): void {
    this.loading.startLoading();
    this.getChats();
    this.chatsInterval = setInterval(() => {
      this.getChats();
    }, this.refreshMessagesTime);
  }


  public getChats(): void {
    this.apiService.getEntity('chats').subscribe((chats: Chat[]) => {
      console.log(chats);

      chats.sort(function (a, b) {
        return new Date(b.last_message?.created_at!).getTime() - new Date(a.last_message?.created_at!).getTime();
      });
      this.chats = chats;

      let new_messages = chats.some(x => x.unread_messages_count! > 0);
      if (new_messages) {
        //Sonido notificación
      }
      this.loading.stopLoading();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

 

  

  

  public scrollToBottom(): void {
    let messagesContainer = document.getElementById('messages-container-scroll');
    messagesContainer!.scrollTop = messagesContainer!.scrollHeight;
    console.log(messagesContainer);

  }

  public ngOnDestroy(): void {
    clearInterval(this.chatsInterval);
    this.chatsInterval = null;
   
  }



}
