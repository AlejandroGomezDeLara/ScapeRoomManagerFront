import { OpenReservation } from "./OpenReservation";

export interface GameReservationHour{
    id?:number;
    hour?:string,
    day?:number,
    open_reservation?:OpenReservation[];
    game_id?:number
}