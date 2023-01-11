import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class NewMessagesService {

  public newMessagesCount = new BehaviorSubject<number>(0);
  public newMessagesInterval: any;

  constructor(private apiService: ApiService, private auth: AuthenticationService,
    private utilities: UtilitiesService,
    private router: Router) {

  }



  public getNewMessagesCount(): void {
    this.apiService.getEntity('new-messages').subscribe((messages: any) => {
      if (messages.count > this.newMessagesCount.value) {
/*         parent.postMessage(messages.last_message?.chat_message, '*');
 */        console.log("Mensajes nuevos xd", messages);
        if (!this.router.url.includes('chats')) {
          let audio = new Audio('assets/audio/new_message.mp3');
          audio.play();
        }

      }
      this.newMessagesCount.next(messages.count);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
  }

  public setNewMessagesListener(): void {
    this.newMessagesInterval = setInterval(() => {
      this.getNewMessagesCount();
    }, 2000);
  }

  public clearNewMessagesListener(): void {
    if(this.newMessagesInterval){
      clearInterval(this.newMessagesInterval);
      this.newMessagesInterval =null;
    }
   
  }
}
