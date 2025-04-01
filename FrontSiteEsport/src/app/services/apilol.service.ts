import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class APILolService {
  APIURL : string ="";
  constructor(private globalService : GlobalService ,private http : HttpClient) {
    this.APIURL = this.globalService.APIURL;
   }

   getAllTeams() : Observable<Team[]>{
    return this.http.get<Team[]>(`${this.APIURL}teams`);
   }
   getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.APIURL}teams/${id}`);
  }
}
