import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoApiDisney } from '../common/disney2interface';

@Injectable({
  providedIn: 'root',
})
export class Disney2 {
  private URI: string = "https://api.disneyapi.dev/character/";

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<InfoApiDisney> {
    return this.http.get<InfoApiDisney>(`${this.URI}?page=${page}`);
  }
}
