import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({
        background: 'blue'
      })),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(300)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({background: 'green'}),
        animate('1s', style({
          background: 'pink'
        })),
        animate(750)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations';
  boxState = 'start';


  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
