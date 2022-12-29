import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }

  public isEqual(x: any, y: any): any {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx == 'object' && tx == ty ? (
      ok(x).length == ok(y).length &&
      ok(x).every(key => this.isEqual(x[key], y[key]))
    ) : (x === y);
  }
}
