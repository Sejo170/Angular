import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoApiDB } from '../common/dragonballinterface';

@Injectable({
  providedIn: 'root',
})
export class Dragonball {
  private URI: string = "https://dragonball-api.com/api/characters/";

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1, limit: number = 5): Observable<InfoApiDB> {
    return this.http.get<InfoApiDB>(`${this.URI}?page=${page}&limit=${limit}`);
  }
}
