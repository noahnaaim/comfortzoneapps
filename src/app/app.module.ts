import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CopyPasterModule } from './copypaster/copypaster.module';

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
