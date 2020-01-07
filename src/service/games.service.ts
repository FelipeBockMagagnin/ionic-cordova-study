import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(public http: HttpClient) { }

  public getGames(){
    return this.http.get('https://api.rawg.io/api/games');
  }
}
