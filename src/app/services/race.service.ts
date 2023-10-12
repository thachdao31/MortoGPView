import { Race } from './../models/race';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Const } from '../Const/Const';


@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private http: HttpClient
  ) { }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(Const.API_FOR_RACE);
  }

  getRaceById(id: any): Observable<Race> {
    return this.http.get<Race>(Const.API_FOR_RACE + "/" + id);
  }

  createRace(race: Race): Observable<Race> {
    return this.http.post<Race>(Const.API_FOR_RACE, race);
  }

//   updateNational(id: any, national: National): Observable<National> {
//     return this.http.put<National>(Const.API_FOR_NATIONAL + id, national);
//   }

  deleteRace(id: any): Observable<Race> {
    return this.http.delete<Race>(Const.API_FOR_RACE + "/" + id);
  }
}
