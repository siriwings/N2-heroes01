import {Component} from '@angular/core';
import {Hero} from './hero';

const HEROES: Hero[]=[
  { id: 0, name: 'Mr. Nice' },
  { id: 1, name: 'Narco' },
  { id: 2, name: 'Bombasto' },
  { id: 3, name: 'Celeritas' },
  { id: 4, name: 'Magneta' },
  { id: 5, name: 'RubberMan' },
  { id: 6, name: 'Dynama' },
  { id: 7, name: 'Dr IQ' },
  { id: 8, name: 'Magma' },
  { id: 9, name: 'Tornado' }
];
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <ul class="test">
      <li><a href="#">How</a></li>
      <li><a href="#">Are</a></li>
      <li><a href="#">You</a></li>
</ul>
</nav>
  <h2>My favorite hero is: {{myHero.name}}</h2>
  <p>Heroes:</p>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero===selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>{{ hero.name }}
      </li> 
  </ul>
  <p *ngIf="heroes.length > 9">There are many heroes!</p>
  <div *ngIf="selectedHero">
    <h2>Hello, {{selectedHero.name}}!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name">
    </div> 
  </div>
`, styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  myHero=HEROES[0];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
