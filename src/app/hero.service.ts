import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heros";
import {Hero} from "./hero.module";
import { Observable, of } from 'rxjs';
import {MessageService} from "./message.service";
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.addMessage("Heros fetched");
    return of(HEROES);
  }
}
