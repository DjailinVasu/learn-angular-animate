import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, keyframes } from '@angular/animations';
import { boxAnimations } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimations]
})
export class AppComponent {
  title = 'angular-animations';
  boxState = 'start';
  visible = true

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStart(event: AnimationEvent) {
    console.log('animationStart', event);

  }

  animationDone(event: AnimationEvent) {
    console.log('animationDone', event);
  }
}
