import { Component, Input } from '@angular/core';
import { Item } from "./item";
@Component({
  selector: 'app-copypaster-item',
  template: `
    <div class="row">
      <div class="col-sm-12">
        Click this button, it will copy the text from the input by referring to the <strong>text content</strong>
        <div class="input-group">
          <label>{{ item.label }}</label>
          <input
            type="text"
            class="form-control"
            name="{{item.targetId}}"
            placeholder="{{item.placeHolder}}"
            ngModel="{{item.targetId}}">
          <button class="btn success"
                  type="button"
                  ngxClipboard [cbContent]="item.targetId"
                  (cbOnSuccess)="item.isCopied = true"
                  [class.btn-success]= "item.isCopied">copy</button>
          <input type="text" class="form-control" [(ngModel)]="text" placeholder="content will be copy after click the copy button">
          <span class="input-group-btn">
        <button class="btn btn-default" [class.btn-success]= "isCopied1" type="button" ngxClipboard [cbContent]="text" (cbOnSuccess)="isCopied1 = true">copy</button>
      </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        Click this button, it will copy the text from the input by referring to the <strong>input element</strong>
        <div class="input-group">
          <input type="text" class="form-control" [(ngModel)]=item.targetId placeholder="content will be copy after click the copy button"
                 #item.targetId>
          <span class="input-group-btn">
        <button class="btn btn-default" [class.btn-success]= "isCopied2" type="button" [ngxClipboard]="inputTarget" (cbOnSuccess)="isCopied2 = true">copy</button>
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
