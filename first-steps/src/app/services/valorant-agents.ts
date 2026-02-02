import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ability, Root } from '../common/agentsinterface';



@Injectable({
  providedIn: 'root',
})
export class ValorantAgents {
  private URI:string = "https://valorant-api.com/v1/agents";

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Root> {
    return this.http.get<Root>(this.URI);
  }
  // getAbilities(): Observable<Ability> {
  //   return this.http.get<Ability>(this.URI);
  // }
}
