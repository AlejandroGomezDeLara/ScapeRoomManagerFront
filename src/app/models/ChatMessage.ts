import { Chat } from "./Chat";
import { User } from "./User";

export interface ChatMessage {
    id?: number;
    text: string;
    user?:User;
    chat?:Chat;
    audio?:HTMLAudioElement;
    is_playing_audio?:boolean;
    audio_url?:string;
    audio_text?:string;
    image?:string;
    pending?:boolean;
    unread?:boolean;
    created_at?:Date;
}