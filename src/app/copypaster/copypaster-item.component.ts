import { Component, Input } from '@angular/core';
import { Item } from "./item";
@Component({
  selector: 'app-copypaster-item',
  template: `
    <div class="row justify-content-center">
      <div class="col-10">
        <h3>Copy from text -- target</h3>
        Click this button, it will copy the text from the input by referring to the
        <strong>input element</strong>
        <div class="input-group">
          <input type="text" class="form-control" [(ngModel)]="text2" placeholder="content will be copy after click the copy button"
            #inputTarget>
          <span class="input-group-btn">
            <button class="btn btn-default" type="button" [ngxClipboard]="inputTarget" (cbOnSuccess)="isCopied2 = true" [class.btn-success]="isCopied2">copy</button>
          </span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CopyPasterItemComponent{

  @Input() item: Item;

}
