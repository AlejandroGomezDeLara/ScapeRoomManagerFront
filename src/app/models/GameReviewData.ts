import { GameReview } from "./GameReview";


export interface GameReviewData{
    current_page?:number;
    data?:GameReview[];
    first_page_url?:string;
    from?:number;
    last_page?:number;
    last_page_url?:string;
    per_page?:number;
    to?:number;
    total?:number;
    
}