import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap,
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  @Input()
  heroes!: Hero[];

  @Output()
  searchString: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  search(term: string): void {
    this.searchString.emit(term);
  }

  ngOnInit(): void {

  }
}
