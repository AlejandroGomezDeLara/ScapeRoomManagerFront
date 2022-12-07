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

  public chats:Chat[]=[];
  public messages:ChatMessage[]=[];
  public selectedChat?:Chat;
  public actualMessage?:ChatMessage={
    text:"",
  };
  public user!:User;

  constructor(private apiService:ApiService,
    public loading:LoadingService,
    private auth:AuthenticationService){
      
  }

  ngOnInit(): void {
    this.user=this.auth.getStorageUser();
    this.getChats();
  }

  
  public getChats():void{
    this.apiService.getEntity('chats').subscribe((chats:Chat[])=>{
      console.log(chats);
      this.chats=chats;
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })
  }

  public selectChat(chat:Chat):void{
    this.selectedChat=chat;
    this.getChatMessages();
  }

  public getChatMessages():void{
    this.apiService.getSubEntity('chats',this.selectedChat?.id!,'messages').subscribe((messages:ChatMessage[])=>{
      this.messages=messages;
      setTimeout(()=>{
        this.scrollToBottom();
      },100)
    },(error:HttpErrorResponse)=>{
      console.log(error);
    });
    
  }

  public sendMessage():void{
    if(this.actualMessage?.text != ""){
      this.apiService.addSubEntity('chats',this.selectedChat?.id!,'messages',this.actualMessage).subscribe((message:ChatMessage)=>{
        console.log(message);
        this.actualMessage!.text="";
        this.getChatMessages();
      },(error:HttpErrorResponse)=>{
        console.log(error);
      });
    }
  }

  public scrollToBottom():void{
    let messagesContainer=document.getElementById('messages-container-scroll');
    messagesContainer!.scrollTop = messagesContainer!.scrollHeight;
    console.log(messagesContainer);
    
  }
}
