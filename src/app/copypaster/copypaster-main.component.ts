import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copypaster-main',
  template: `
    <section class="main">
        <ng-content></ng-content>
    </section>
  `,
  styles: []
})
export class CopyPasterMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
