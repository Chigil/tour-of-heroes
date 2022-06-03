import { Component } from '@angular/core';
import { HeroTwo } from './hero-form';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  constructor(private heroService: HeroService) {
  }
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  heroes: Hero[] = [];

  model = new HeroTwo(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  newHero() {
    this.model = new HeroTwo(42, '', '');
  }
  onSubmit() {
    this.heroService.addHero({ name: this.model.name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    this.submitted = true;

  }

}
