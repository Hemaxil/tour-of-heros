import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heros";
import {Hero} from "./hero.module";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Hero[] {
    return HEROES;
  }
}
