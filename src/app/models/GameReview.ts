import { User } from "./User";

export interface GameReview{
    id?:number;
    text:string;
    stars:number,
    image:string,
    user?:User,
    user_id?:number,
    created_at?:Date;
}