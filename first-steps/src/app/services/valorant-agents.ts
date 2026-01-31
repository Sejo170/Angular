import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Daum } from '../common/agentsinterface';


@Injectable({
  providedIn: 'root',
})
export class ValorantAgents {
  private URI:string = "https://valorant-api.com/v1/agents";

  constructor(private http: HttpClient) { }

  public getData(): Observable<Daum> {
    return this.http.get<Daum>(this.URI);
  }
}
