import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="content">
      <h3>Paste & Copy</h3>
      <div class="row">
        <div class="col-md-9 col-md-offset-1">
          <div class="input-group">
            <input type="text" class="form-control" [(ngModel)]="text1" placeholder="paste your stuff here" #inputTarget>
            <span class="input-group-btn">
            <button class="btn success" type="button" [ngxClipboard]="inputTarget"  (cbOnSuccess)="isCopied1 = true"
                    [class.btn-success]= "isCopied1">copy</button>
          </span>
          </div>
        </div>
      </div>
    </div>
    `
})
export class CopyPasterComponent implements OnInit {
  text1: string;
  isCopied1 : any;
  inputTarget : any;

  constructor() { }

  ngOnInit() {

  }

}
