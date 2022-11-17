import { Time } from "@angular/common";
import { Game } from "./Game";
import { GameCategory } from "./GameCategory";
import { GameSubcategory } from "./GameSubcategory";
import { User } from "./User";

export interface OpenReservation{
    id?:number;
    game_id?:number;
    game?:Game;
    users?:User[];
    game_category_id?:number;
    game_category?:GameCategory;
    game_subcategory?:GameSubcategory;
    game_subcategory_id?:number;
    max_people?:number;
    min_people?:number;
    actual_people?:number;
    date?:Date;
    hour?:any;
    price_per_user?:number;
}