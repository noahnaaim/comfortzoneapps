import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CopyPasterModule } from './copy-paster/copy-paster.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CopyPasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
