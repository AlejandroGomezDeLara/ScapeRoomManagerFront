import { ChatMessage } from "./ChatMessage";
import { OpenReservation } from "./OpenReservation";
import { User } from "./User";

export interface Chat {
    id?: number;
    name: string;
    last_message?:ChatMessage;
    users?:User[];
    open_reservation?:OpenReservation;
    image?:string;
    unread_messages_count?:number;
    unread_messages?:number[];

}