import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copypaster-header',
  template: `
    <header class="header">
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: []
})
export class CopyPasterHeaderComponent {

  @Input() title: string;


}
