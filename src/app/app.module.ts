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
import { AndaluciaSevillaTorreOroComponent } from './Monumentos-Sevilla/andalucia-sevilla-torre-oro/andalucia-sevilla-torre-oro.component';
import { AndaluciaSevillaPuenteTrianaComponent } from './Monumentos-Sevilla/andalucia-sevilla-puente-triana/andalucia-sevilla-puente-triana.component';
import { AndaluciaSevillaLaSetaComponent } from './Monumentos-Sevilla/andalucia-sevilla-la-seta/andalucia-sevilla-la-seta.component';
import { AndaluciaSevillaArchivoIndiasComponent } from './Monumentos-Sevilla/andalucia-sevilla-archivo-indias/andalucia-sevilla-archivo-indias.component';
import { AndaluciaSevillaHospitalVenerablesComponent } from './Monumentos-Sevilla/andalucia-sevilla-hospital-venerables/andalucia-sevilla-hospital-venerables.component';
import { AndaluciaSevillaHospitalCaridadComponent } from './Monumentos-Sevilla/andalucia-sevilla-hospital-caridad/andalucia-sevilla-hospital-caridad.component';
import { AndaluciaMuseoArqueologicoComponent } from './Monumentos-Sevilla/andalucia-museo-arqueologico/andalucia-museo-arqueologico.component';
import { AndaluciaMuseoArtesCostumbresComponent } from './Monumentos-Sevilla/andalucia-museo-artes-costumbres/andalucia-museo-artes-costumbres.component';
import { AndaluciaAyuntamientoSevillaComponent } from './Monumentos-Sevilla/andalucia-ayuntamiento-sevilla/andalucia-ayuntamiento-sevilla.component';

@NgModule({
  declarations: [
    AppComponent,
    AndaluciaSevillaCatedralGiraldaComponent,
    AndaluciaSevillaRealAlcazarComponent,
    AndaluciaSevillaPlazaEspanaComponent,
    SevillaMenuComponent,
    AndaluciaSevillaMaestranzaComponent,
    AndaluciaSevillaTorreOroComponent,
    AndaluciaSevillaPuenteTrianaComponent,
    AndaluciaSevillaLaSetaComponent,
    AndaluciaSevillaArchivoIndiasComponent,
    AndaluciaSevillaHospitalVenerablesComponent,
    AndaluciaSevillaHospitalCaridadComponent,
    AndaluciaMuseoArqueologicoComponent,
    AndaluciaMuseoArtesCostumbresComponent,
    AndaluciaAyuntamientoSevillaComponent
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
