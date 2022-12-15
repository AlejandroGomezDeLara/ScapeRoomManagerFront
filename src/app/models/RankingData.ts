import { User } from "./User";


export interface RankingData{
    current_page?:number;
    data?:User[];
    first_page_url?:string;
    from?:number;
    last_page?:number;
    last_page_url?:string;
    per_page?:number;
    to?:number;
    total?:number;
    
}