import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '@interfaces/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  public getData(): Observable<Player[]> {
    return this.http.get<Player[]>(this.dataUrl);
  }
}
