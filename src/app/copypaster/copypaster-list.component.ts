import { Component, Input } from '@angular/core';
import { Item } from "./item";

@Component({
  selector: 'app-copypaster-list',
  template: `
    <ul class="copypaster-list">
      <app-copypaster-item
          *ngFor="let i of items"
          [item]="i"></app-copypaster-item>
    </ul>
  `,
  styles: []
})
export class CopyPasterListComponent{
  @Input() items: Item[];
}
