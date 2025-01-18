import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
import { AndaluciaSevillaPlazaEspanaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { SevillaMenuComponent } from './Andalucia/Sevilla/sevilla-menu/sevilla-menu.component'; 
import { AndaluciaSevillaMaestranzaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-maestranza/andalucia-sevilla-maestranza.component';
import { AndaluciaSevillaTorreOroComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-torre-oro/andalucia-sevilla-torre-oro.component';
import { AndaluciaSevillaPuenteTrianaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-puente-triana/andalucia-sevilla-puente-triana.component';
import { AndaluciaSevillaLaSetaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-la-seta/andalucia-sevilla-la-seta.component';
import { AndaluciaSevillaArchivoIndiasComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-archivo-indias/andalucia-sevilla-archivo-indias.component';
import { AndaluciaAyuntamientoSevillaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-ayuntamiento-sevilla/andalucia-ayuntamiento-sevilla.component';
import { AndaluciaSevillaPalacioDuenasComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-palacio-duenas/andalucia-sevilla-palacio-duenas.component';
import { AndaluciaSevillaMuseoBellasArtesComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-museo-bellas-artes/andalucia-sevilla-museo-bellas-artes.component';
import { AndaluciaSevillaAcuarioComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-acuario/andalucia-sevilla-acuario.component';
import { MapaEspanaComponent } from './mapa-espana/mapa-espana.component';
import { PoliticaprivacidadComponent } from './politicaprivacidad/politicaprivacidad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './politica-cookies/politica-cookies.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

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
    AndaluciaAyuntamientoSevillaComponent,
    AndaluciaSevillaPalacioDuenasComponent,
    AndaluciaSevillaMuseoBellasArtesComponent,
    AndaluciaSevillaAcuarioComponent,
    MapaEspanaComponent,
    PoliticaprivacidadComponent,
    AvisoLegalComponent,
    PoliticaCookiesComponent,
    TerminosServicioComponent,
    SobreNosotrosComponent,
    ContactanosComponent
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
