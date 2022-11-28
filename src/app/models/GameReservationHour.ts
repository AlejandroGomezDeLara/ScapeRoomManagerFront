import { OpenReservation } from "./OpenReservation";
import { Reservation } from "./Reservation";

export interface GameReservationHour{
    id?:number;
    hour?:string,
    day?:number,
    closed?:boolean,
    open_reservation?:OpenReservation[];
    reservation?:Reservation[];
    game_id?:number
}