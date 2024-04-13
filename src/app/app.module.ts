import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndaluciaSevillaCatedralGiraldaComponent } from './andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';


@NgModule({
  declarations: [
    AppComponent,
    AndaluciaSevillaCatedralGiraldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
