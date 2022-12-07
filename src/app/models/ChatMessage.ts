import { Chat } from "./Chat";
import { User } from "./User";

export interface ChatMessage {
    id?: number;
    text: string;
    user?:User;
    chat?:Chat;
    image?:string;
    created_at?:Date;
}