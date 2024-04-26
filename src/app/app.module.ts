import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
import { AndaluciaSevillaPlazaEspanaComponent } from './Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { SevillaMenuComponent } from './sevilla-menu/sevilla-menu.component';
import { AndaluciaSevillaMaestranzaComponent } from './Monumentos-Sevilla/andalucia-sevilla-maestranza/andalucia-sevilla-maestranza.component';


@NgModule({
  declarations: [
    AppComponent,
    AndaluciaSevillaCatedralGiraldaComponent,
    AndaluciaSevillaRealAlcazarComponent,
    AndaluciaSevillaPlazaEspanaComponent,
    SevillaMenuComponent,
    AndaluciaSevillaMaestranzaComponent
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
