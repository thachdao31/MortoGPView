import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { National } from '../models/national';
import { Const } from '../Const/Const';


@Injectable({
  providedIn: 'root'
})
export class NationalsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllNationals(): Observable<National[]> {
    return this.http.get<National[]>(Const.API_FOR_NATIONAL);
  }

  getNationalById(id: any): Observable<National> {
    return this.http.get<National>(Const.API_FOR_NATIONAL + "/" + id);
  }

  createNational(national: National): Observable<National> {
    return this.http.post<National>(Const.API_FOR_NATIONAL, national);
  }

//   updateNational(id: any, national: National): Observable<National> {
//     return this.http.put<National>(Const.API_FOR_NATIONAL + id, national);
//   }

  deleteNational(id: any): Observable<National> {
    return this.http.delete<National>(Const.API_FOR_NATIONAL + "/" + id);
  }
}
