import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthenticationService } from './authentication.service';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class NewMessagesService {

  public newMessagesCount = new BehaviorSubject<number>(0);

  constructor(private apiService: ApiService, private auth: AuthenticationService,
    private utilities: UtilitiesService) {
   
  }



  public getNewMessagesCount(): void {
    this.apiService.getEntity('new-messages').subscribe((count: number) => {
      this.newMessagesCount.next(count);
      console.log("Mensajes nuevos", count);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    })
  }
}
