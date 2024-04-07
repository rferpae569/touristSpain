import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndaluciaSevillaComponent } from './andalucia-sevilla/andalucia-sevilla.component';

@NgModule({
  declarations: [
    AppComponent,
    AndaluciaSevillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
