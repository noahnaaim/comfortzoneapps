import { Component, Input } from '@angular/core';
import { Item } from "./item";
import { CopyPasterService } from "./copypaster.service";

@Component({
  selector: 'app-copypaster-item',
  template: `
     <li>
         <label>{{ item.label }}</label>
            <input 
                type="text" 
                class="form-control" 
                placeholder="{{item.placeHolder}}"
                [(ngModel)] = "item.targetId"
                >
            <button class="btn success"
                    type="button"
                    ngxClipboard [cbContent]="item.targetId"
                    (cbOnSuccess)="item.isCopied = true"
                    [class.btn-success]= "item.isCopied">copy</button>
      </li>
  `,
  styles: []
})
export class CopyPasterItemComponent{

  @Input() item: Item;
  public list: CopyPasterService;

  constructor(list: CopyPasterService) {
    this.list = list;

  }

}
