import { Game } from "./Game";
import { GamePrice } from "./GamePrice";
import { GameReservationHour } from "./GameReservationHour";


export interface Reservation{
    id?:number;
    game_id?:number;
    date?:Date | string;
    people?:number;
    game_reservation_hour_id?:number;
    game_reservation_hour?:GameReservationHour;

    game_price_id?:number;
    user_id?:number;
    game?:Game;
}