import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero.module";
import {HEROES} from "../mock-heros";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
    constructor(private heroService: HeroService) { }
onSelectHero(hero: Hero) {
    this.selectedHero = hero;
}
getHeroes() {
      this.heroes = this.heroService.getHeros();
}
  ngOnInit() {
      this.getHeroes();
  }

}
