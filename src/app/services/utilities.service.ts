import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }
}
