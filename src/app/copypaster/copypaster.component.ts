import { Component, OnInit } from '@angular/core';
import { CopyPasterService } from "./copypaster.service";

@Component({
  providers: [CopyPasterService],
  selector: 'app-copypaster',
  template: `
    <section class="copypaster">
        <app-copypaster-header [title]="title"></app-copypaster-header>
        <app-copypaster-main>
          <app-copypaster-list [items]="copypaster.items"></app-copypaster-list>
        </app-copypaster-main>
        <app-copypaster-footer></app-copypaster-footer>
    </section>
    `
})
export class CopyPasterComponent implements OnInit {
  public copypaster: CopyPasterService;
  public title: string;

  constructor( list: CopyPasterService ) {
    this.copypaster = list;
    this.title = 'Paste & Copy';
  }

  ngOnInit() {

  }

}
