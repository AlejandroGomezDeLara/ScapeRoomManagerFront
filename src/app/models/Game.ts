import { GameCategory } from "./GameCategory";
import { GameSubcategory } from "./GameSubcategory";

export interface Game{
    id?:number;
    name?:string;
    rating?:number,
    reviews?:number,
    address?:string,
    description?:string,
    image?:string,
    category?:GameCategory,
    subcategory?:GameSubcategory
}