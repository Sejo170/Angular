import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../common/finalspaceinterface';

@Injectable({
  providedIn: 'root',
})
export class Finalspace {
  private URI: string = "https://finalspaceapi.com/api/v0/character/";

  constructor(private http: HttpClient) {  }

  getCharacters(): Observable<Root> {
    return this.http.get<Root>(`${this.URI}`);
  }
}
