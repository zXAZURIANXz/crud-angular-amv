import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _http: HttpClient ) { 



  }


  constUrl:string = '';

  agregarProducto(product:any){


    return this._http.post(`${this.constUrl}`,product ).pipe(

      map((res:any) => {

        return res;

      })


    )


  }



}
