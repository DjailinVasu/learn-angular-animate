import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          dalay: 3
        }
      }))
    ])
  ],
})
export class AnimateComponent implements OnInit {
  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
