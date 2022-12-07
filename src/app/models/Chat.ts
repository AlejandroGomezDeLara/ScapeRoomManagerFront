import { ChatMessage } from "./ChatMessage";
import { User } from "./User";

export interface Chat {
    id?: number;
    name: string;
    last_message?:ChatMessage;
    users?:User[];
    image?:string;
}