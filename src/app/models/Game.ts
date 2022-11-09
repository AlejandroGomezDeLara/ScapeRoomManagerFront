import { GameCategory } from "./GameCategory";
import { GameSubcategory } from "./GameSubcategory";
import { User } from "./User";

export interface Game{
    id?:number;
    name?:string;
    rating?:number,
    user?:User,
    city?:string,
    reviews?:number,
    address?:string,
    description?:string,
    images?:string,
    category?:GameCategory,
    subcategory?:GameSubcategory,
    min_people?:number,
    max_people?:number,
    min_duration?:number,
    max_duration?:number,
    min_price?:number
    
}