import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../common/valointerface';

@Injectable({
  providedIn: 'root',
})
export class Valo {
  private URI:string = "https://valorant-api.com/v1/agents/";

  constructor(private http: HttpClient) { }

  getAgents(): Observable<Root> {
    return this.http.get<Root>(this.URI);
  }
}
