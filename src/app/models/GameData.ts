import { Game } from "./Game";


export interface GameData{
    current_page?:number;
    data?:Game[];
    first_page_url?:string;
    from?:number;
    last_page?:number;
    last_page_url?:string;
    per_page?:number;
    to?:number;
    total?:number;
    
}