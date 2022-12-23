import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/models/Chat';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChatAudioService } from 'src/app/services/chat-audio.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-interior-chat',
  templateUrl: './interior-chat.component.html',
  styleUrls: ['./interior-chat.component.scss']
})
export class InteriorChatComponent {

  public messages?: ChatMessage[];
  public messages_count: number = 50;
  public chat_id?: number;
  public selectedChat?: Chat;
  public recordedAudio?: any;
  public recorder: any;

  public actualMessage?: ChatMessage = {
    text: "",
  };

  public user!: User;
  public messagesInterval: any;
  public refreshMessagesTime: number = 2000;

  public currentTime: number = 0;

  constructor(private apiService: ApiService,
    public loading: LoadingService,
    private auth: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    public chatAudio: ChatAudioService,
    public sanitizer: DomSanitizer) {

    this.chat_id = +activatedRoute.snapshot.paramMap.get('id')!;

  }

  ngOnInit(): void {

    this.getChat();
    this.user = this.auth.getStorageUser();
    //this.loading.startLoading();
    //obtenemos por primera vez
    this.getChatMessages();

    this.messagesInterval = setInterval(() => {
      this.getChatMessages();
    }, this.refreshMessagesTime);
  }

  public getChat(): void {
    this.apiService.getEntity('chats', this.chat_id).subscribe((chat: Chat) => {
      this.selectedChat = chat;
      console.log(chat);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }



  public getChatMessages(): void {
    let messagesContainer = document.getElementById('messages-container-scroll');
    let dif=messagesContainer?.scrollHeight! ;
    this.apiService.getSubEntity('chats', this.chat_id!, 'messages?per_page=' + this.messages_count).subscribe((messages: ChatMessage[]) => {
      this.loading.stopLoading();
      messages.sort(function (a, b) {
        return new Date(a.created_at!).getTime() - new Date(b.created_at!).getTime();
      });
      if (!this.messages) {
        this.scrollToBottom();
        this.messages = messages;
      }
      if (this.messages.length < messages.length) {

        this.messages.unshift(...messages);
        setTimeout(() => {
          messagesContainer!.scrollTop = messagesContainer?.scrollHeight! - dif;
        }, 100);

      }


    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public sendMessage(): void {
    if (this.actualMessage?.text != "" || this.actualMessage.image) {
      let message: ChatMessage = {
        text: this.actualMessage?.text!,
        user: this.user,
        image: this.actualMessage?.image,
        created_at: new Date
      };
      this.deleteImage();
      this.actualMessage!.text = "";
      this.messages?.push(message);
      this.selectedChat!.unread_messages_count = 0;
      console.log(this.selectedChat?.unread_messages_count);

      this.scrollToBottom();
      let audio = new Audio('assets/audio/send_message.mp3');
      audio.play();
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
    setTimeout(() => {
      messagesContainer?.scroll({ top: messagesContainer!.scrollHeight, left: 0, behavior: 'smooth' });
    }, 100);

    /* messagesContainer!.scrollTop = messagesContainer!.scrollHeight; */
    console.log(messagesContainer);

  }

  public ngOnDestroy(): void {

    clearInterval(this.messagesInterval);
    this.messagesInterval = null;
  }

  public back(): void {
    window.history.back();
  }

  public async recordAudio() {
    console.log("Recording audio xd");
    this.recordedAudio = undefined;
    this.recorder = await this.chatAudio.startRecording();
    this.recorder.start();


  }

  public async stopRecordingAudio() {
    console.log("stoping audio xd");
    this.recordedAudio = await this.recorder.stop();
    let audio = new Audio(this.recordedAudio.audioUrl);

    let message: ChatMessage = {
      text: "",
      audio: audio,
      audio_url: this.recordedAudio.audioUrl,
      user: this.user,
      created_at: new Date
    };

    this.actualMessage!.text = "";

    this.selectedChat!.unread_messages_count = 0;

    this.scrollToBottom();
    this.messages?.push(message);
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

  floor(number: number): number {
    return Math.floor(number);
  }

  public uploadImage(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;

    this.actualMessage!.image = reader.result;
    console.log(this.actualMessage);
  }

  public deleteImage(): void {
    this.actualMessage!.image = undefined;
  }

  public loadMoreMessages(): void {
    let messagesContainer = document.getElementById('messages-container-scroll');

    if (messagesContainer?.scrollTop == 0) {
      if (this.messages?.length == this.messages_count) {
        this.loading.startLoading();
        this.messages_count += 50;

      }
    }


  }


}


