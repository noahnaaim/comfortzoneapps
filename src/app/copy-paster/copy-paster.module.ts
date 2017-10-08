import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { CopyPasterComponent } from  './copy-paster.component';
import { PasteDockComponent } from './paste-dock/paste-dock.component';
import { AddBtnComponent } from './add-btn/add-btn.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
  ],
  declarations: [ CopyPasterComponent, PasteDockComponent, AddBtnComponent ],
  exports: [ CopyPasterComponent ]
})
export class CopyPasterModule { }
