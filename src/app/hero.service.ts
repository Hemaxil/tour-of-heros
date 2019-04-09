import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heros";
import {Hero} from "./hero.module";
import { Observable, of } from 'rxjs';
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
      private http: HttpClient,
      private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeros',[]))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`Hero ${id} fetched`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message) {
    this.messageService.addMessage(`Message:${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T ) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);
      return of (result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> {

    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`Hero updated`)),
        catchError(this.handleError<any>('updateHero'))
    );
  }

}
