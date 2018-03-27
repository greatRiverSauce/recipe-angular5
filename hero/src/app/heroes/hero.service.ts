import { Injectable, OnInit } from '@angular/core';
import { HEROES } from './mock-heores';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from "../messages/message.service";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService{
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
    private messageService: MessageService) {
  }
  private log(message:string) {
    this.messageService.add('HeroService: ' + message);
  }


  getHeroes(): Observable<Hero[]> {
    //return this.http.get<Hero[]>(this.heroesUrl);
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
  getHero(id: number):Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  saveHeroes(heroes: Hero[]): Observable<any> {
    return this.http.put('https://heroes-fb462.firebaseio.com/hero.json',this.getHeroes());
  }


}
