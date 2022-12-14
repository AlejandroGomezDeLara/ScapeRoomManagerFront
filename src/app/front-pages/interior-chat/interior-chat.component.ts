import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Chat } from 'src/app/models/Chat';
import { ChatMessage } from 'src/app/models/ChatMessage';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChatAudioService } from 'src/app/services/chat-audio.service';
import { LoadingService } from 'src/app/services/loading.service';
import { NewMessagesService } from 'src/app/services/new-messages.service';


@Component({
  selector: 'app-interior-chat',
  templateUrl: './interior-chat.component.html',
  styleUrls: ['./interior-chat.component.scss']
})
export class InteriorChatComponent implements OnChanges {


  public messages: ChatMessage[] = [];
  public pendingMessages: ChatMessage[] = [];
  public messages_count: number = 50;
  @Input() chat_id?: number;
  public selectedChat?: Chat;
  public recordedAudio?: any;
  public recorder: any;
  public isLoading: boolean = false;
  public actualMessage?: ChatMessage = {
    text: "",
  };
  public messagesContainer: any;
  public user!: User;
  public messagesInterval: any;
  public chatInterval: any;
  public pendingMessagesInterval: any;

  public refreshMessagesTime: number = 2000;
  public refreshChatTime: number = 2000;

  public currentTime: number = 0;

  public online?: Observable<Event>;

  constructor(private apiService: ApiService,
    public loading: LoadingService,
    private auth: AuthenticationService,
    public chatAudio: ChatAudioService,
    public sanitizer: DomSanitizer,
    private router: Router,
    private newMessages: NewMessagesService) {


  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnDestroy();
    this.isLoading = true;
    this.getChat();

    this.chatInterval = setInterval(() => {
      this.getChat();
    }, this.refreshChatTime);

    this.getChatMessages();

    this.messagesInterval = setInterval(() => {
      this.getChatMessages();
    }, this.refreshMessagesTime);

    this.online?.subscribe(e => {
      console.log("online", e);
      this.sendPendingMessages();
    });
  }

  ngOnInit(): void {
    this.online = fromEvent(window, 'online');
    this.newMessages.clearNewMessagesListener();
    this.user = this.auth.getStorageUser();

  }


  public sendPendingMessages(): void {
    for (let message of this.pendingMessages) {
      this.apiService.addSubEntity('chats', this.selectedChat?.id!, 'messages', message).subscribe((message: ChatMessage) => {
        console.log(message);
        this.pendingMessages.pop();
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
    }
  }


  public getChat(): void {
    this.apiService.getEntity('chats', this.chat_id).subscribe((chat: Chat) => {
      this.selectedChat = chat;
/* 
      if (!this.selectedChat) {
        this.selectedChat = chat;
      }
      else {
        this.selectedChat.unread_messages_count = chat.unread_messages_count;
        this.selectedChat.unread_messages = chat.unread_messages;
        for (let user of chat.users!) {
          this.selectedChat.users!.map(x => {
            if (x.id == user.id) x.online = user.online;
            return x;
          });
        }
      }
     */ this.isLoading = false;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }


  public getChatMessages(): void {
    this.messagesContainer = document.getElementById('messages-container-scroll');
    let dif = this.messagesContainer?.scrollHeight!;
    this.apiService.getSubEntity('chats', this.chat_id!, 'messages?per_page=' + this.messages_count).subscribe((messages: ChatMessage[]) => {
      messages.sort(function (a, b) {
        return new Date(a.created_at!).getTime() - new Date(b.created_at!).getTime();
      });
      if (this.messages.length <= 0) {
        this.scrollToBottom();
        this.messages = messages;
        this.setUnreadMessages();

      }
      //NUEVO MENSAJE
      if (!this.messages.some(x => x.id == messages[messages.length - 1].id)) {

        this.messages = messages;
        if (this.messagesContainer.scrollHeight - this.messagesContainer.scrollTop - this.messagesContainer?.clientHeight < 250) {
          this.scrollToBottom();
        }

      }
      //SCROLL 50 mensajes mas
      if (this.messages.length < messages.length) {
        setTimeout(() => {
          this.messagesContainer?.scroll({ top: this.messagesContainer?.scrollHeight! - dif, left: 0 });
        });
        this.messages = messages;
        this.isLoading = false;
      }

      this.loading.stopLoading();

    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public sendMessage(): void {
    let message: ChatMessage = {
      text: this.actualMessage?.text!,
      user: this.user,
      image: this.actualMessage?.image,
      created_at: new Date,
      pending: true
    };
    this.deleteImage();
    this.actualMessage!.text = "";
    this.messages?.push(message);
    this.selectedChat!.unread_messages_count = 0;
    console.log(this.selectedChat?.unread_messages_count);
    this.scrollToBottom();

    this.apiService.addSubEntity('chats', this.selectedChat?.id!, 'messages', message).subscribe((message: ChatMessage) => {
      console.log(message);
      this.messages[this.messages.length - 1].pending = false;
      let audio = new Audio('assets/audio/send_message.mp3');
      audio.play();
      this.actualMessage!.text = "";
      this.pendingMessages.pop();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      //Si falla a??adimos el mensaje a pendinetes
      this.pendingMessages.push(message);
    });

  }



  public scrollToBottom(): void {
    setTimeout(() => {
      this.messagesContainer?.scroll({ top: this.messagesContainer!.scrollHeight, left: 0, behavior: 'smooth' });
    });
  }

  public readMessages(): void {
    setTimeout(() => {
      this.messagesContainer?.scroll({ top: this.messagesContainer?.scrollHeight, left: 0, behavior: 'smooth' });
    }, 250);
    if (this.messagesContainer?.scrollHeight - this.messagesContainer?.scrollTop - this.messagesContainer?.clientHeight < 250) {
      this.apiService.deleteEntity('new-messages', this.selectedChat!.id).subscribe(() => {
        console.log("Mensajes vistos");
      }, (error: HttpErrorResponse) => {
        console.log("No se pudieron ver los mensajes");
      });
    }
  }

  public ngOnDestroy(): void {

    clearInterval(this.messagesInterval);
    this.messagesInterval = null;

    clearInterval(this.chatInterval);
    this.chatInterval = null;

    clearInterval(this.pendingMessagesInterval);
    this.pendingMessagesInterval = null;

    this.readMessages();

  }


  public back(): void {
    this.router.navigateByUrl('/chats');
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
      console.log(this.messages?.length);
      console.log(this.messages_count);

      if (this.messages?.length == this.messages_count) {
        //this.loading.startLoading();
        this.messages_count += 50;
        this.isLoading = true;
      }
    }
  }
  public setUnreadMessages(): void {
    this.messages = this.messages.map(x => { x.unread = false; return x; });
    for (let i = 0; i < this.selectedChat?.unread_messages?.length!; i++) {
      let message = this.messages.find(x => x.id == this.selectedChat?.unread_messages![i]);
      if (message) {
        message.unread = true;
      }
    }
    console.log(this.messages);
  }

}


