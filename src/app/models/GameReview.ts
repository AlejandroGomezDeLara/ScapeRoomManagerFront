import { User } from "./User";

export interface GameReview{
    id?:number;
    text:string;
    stars:number,
    image?:string,
    game_id?:number,
    user?:User,
    user_id?:number,
    created_at?:Date;
}