import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent {

  @Input() messages!:ChatMessage[];
  @Input() user?:User;
  @Input() unread_messages:number[]=[];
  public currentTime: number = 0;

  constructor(){
  }



  public togglePlay(message: ChatMessage): void {
    message.is_playing_audio ? message.audio!.pause() : message.audio!.play();
    console.log("DURACION", message.audio?.duration);

    message.audio!.ontimeupdate = (event) => {
      this.currentTime = message.audio!.currentTime;
    }
    message.audio!.onplaying = () => {
      message.is_playing_audio = true;
    };
    message.audio!.onpause = () => {
      message.is_playing_audio = false;
    };

    message.audio!.addEventListener("ended", function () {
      message.audio!.currentTime = 0;
      this.currentTime = 0;
      console.log("ended");
    });

    message.audio!.addEventListener("loadeddata", function () {
      console.log("Audio duration: " + this.duration);

    });
  }

}
