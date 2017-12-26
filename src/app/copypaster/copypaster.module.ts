import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { CopyPasterComponent } from  './copypaster.component';
import { CopyPasterHeaderComponent } from './copypaster-header.component';
import { CopyPasterMainComponent } from './copypaster-main.component';
import { CopyPasterFooterComponent } from './copypaster-footer.component';
import { CopyPasterListComponent } from './copypaster-list.component';
import { CopyPasterItemComponent } from './copypaster-item.component';
import { CopyPasterService } from "./copypaster.service";

@NgModule({
  providers: [ CopyPasterService ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ClipboardModule,
  ],
  declarations: [ CopyPasterComponent, CopyPasterHeaderComponent, CopyPasterMainComponent, CopyPasterFooterComponent, CopyPasterListComponent, CopyPasterItemComponent ],
  exports: [ CopyPasterComponent ]
})
export class CopyPasterModule { }
