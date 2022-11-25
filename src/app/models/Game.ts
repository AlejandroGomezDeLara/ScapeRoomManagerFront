import { GameCategory } from "./GameCategory";
import { GamePrice } from "./GamePrice";
import { GameReservationHour } from "./GameReservationHour";
import { GameReview } from "./GameReview";
import { GameReviewSummary } from "./GameReviewSummary";
import { GameSubcategory } from "./GameSubcategory";
import { OpenReservation } from "./OpenReservation";
import { User } from "./User";

export interface Game{
    id?:number;
    name?:string;
    rating?:number,
    user?:User,
    city?:string,
    reviews?:GameReview[],
    reviewsCount?:number,
    closed?:boolean,
    gameReviewSummary?:GameReviewSummary;
    firstReview?:GameReview,
    reservation_hours?:GameReservationHour[];
    address?:string,
    description?:string,
    prices:GamePrice[],
    schedule?:any[],
    images?:string,
    category?:GameCategory,
    subcategory?:GameSubcategory,
    open_reservations?:OpenReservation[],
    min_people?:number,
    max_people?:number,
    min_duration?:number,
    max_duration?:number,
    min_price?:number,
    funly_points?:number,
    difficulty?:number
    
}