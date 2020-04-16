import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, keyframes } from '@angular/animations';

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
        group([
          query('span', animate(450, style({
            fontSize: '28px',
            color: 'red'
          }))),
          style({background: 'green'}),
          animate('1s', style({
            background: 'pink'
          })),
          animate(750)
        ])

      ]),
      //void => *
      transition(':enter', [
        // style({opacity: 0}),
        // animate('800ms ease-out')
        animate('4s', keyframes([
          style({background: 'red', offset: 0}),
          style({background: 'orange', offset: 0.2}),
          style({background: 'yellow', offset: 0.4}),
          style({background: 'green', offset: 0.7}),
          style({background: 'blue', offset: 1}),
        ]))
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        group([
          animate(750, style({
            opacity: 0,
            transform: 'scale(1.5)'
          })),
          animate(300, style({
            color: '#000',
            fontWeight: '300'
          })),
        ])
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations';
  boxState = 'start';
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
}
