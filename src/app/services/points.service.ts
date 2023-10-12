import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Points } from '../models/points';
import { Const } from '../Const/Const';


@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPoints(): Observable<Points[]> {
    return this.http.get<Points[]>(Const.API_FOR_POINTS);
  }

  getPointById(id: any): Observable<Points> {
    return this.http.get<Points>(Const.API_FOR_POINTS + "/" + id);
  }

  createPoint(points: Points): Observable<Points> {
    return this.http.post<Points>(Const.API_FOR_POINTS, points);
  }

//   updateNational(id: any, national: National): Observable<National> {
//     return this.http.put<National>(Const.API_FOR_NATIONAL + id, national);
//   }

  deletePoint(id: any): Observable<Points> {
    return this.http.delete<Points>(Const.API_FOR_POINTS + "/" + id);
  }
}
