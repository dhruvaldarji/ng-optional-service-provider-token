import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNameComponent } from './my-name/my-name.component';
import { NewNamePipe } from './new-name.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyNameComponent, NewNamePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
