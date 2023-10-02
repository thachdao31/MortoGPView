import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biker } from '../models/biker';
import { Const } from '../Const/Const';


@Injectable({
  providedIn: 'root'
})
export class BikersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBikers(): Observable<Biker[]> {
    return this.http.get<Biker[]>(Const.API_FOR_ALL_URL);
  }

  getBikerById(id: any): Observable<Biker> {
    return this.http.get<Biker>(Const.API_FOR_ALL_URL + "/" + id);
  }

  createBiker(biker: Biker): Observable<Biker> {
    return this.http.post<Biker>(Const.API_FOR_ALL_URL, biker);
  }

  updateBiker(id: any, biker: Biker): Observable<Biker> {
    return this.http.put<Biker>(Const.API_FOR_ALL_URL + id, biker);
  }

  deleteBiker(id: any): Observable<Biker> {
    return this.http.delete<Biker>(Const.API_FOR_ALL_URL + id);
  }
}
