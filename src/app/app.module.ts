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
import { AndaluciaSevillaPalacioDuenasComponent } from './Monumentos-Sevilla/andalucia-sevilla-palacio-duenas/andalucia-sevilla-palacio-duenas.component';
import { AndaluciaSevillaCasaSalinasComponent } from './Monumentos-Sevilla/andalucia-sevilla-casa-salinas/andalucia-sevilla-casa-salinas.component';
import { AndaluciaSevillaPalacioMarquesesAlgabaComponent } from './Monumentos-Sevilla/andalucia-sevilla-palacio-marqueses-algaba/andalucia-sevilla-palacio-marqueses-algaba.component';
import { AndaluciaSevillaMuseoBellasArtesComponent } from './Monumentos-Sevilla/andalucia-sevilla-museo-bellas-artes/andalucia-sevilla-museo-bellas-artes.component';
import { AndaluciaSevillaMuseoBaileFlamencoComponent } from './Monumentos-Sevilla/andalucia-sevilla-museo-baile-flamenco/andalucia-sevilla-museo-baile-flamenco.component';
import { AndaluciaSevillaPabellonNavegacionComponent } from './Monumentos-Sevilla/andalucia-sevilla-pabellon-navegacion/andalucia-sevilla-pabellon-navegacion.component';
import { AndaluciaSevillaAcuarioComponent } from './Monumentos-Sevilla/andalucia-sevilla-acuario/andalucia-sevilla-acuario.component';
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
    AndaluciaSevillaHospitalVenerablesComponent,
    AndaluciaSevillaHospitalCaridadComponent,
    AndaluciaMuseoArqueologicoComponent,
    AndaluciaMuseoArtesCostumbresComponent,
    AndaluciaAyuntamientoSevillaComponent,
    AndaluciaSevillaPalacioDuenasComponent,
    AndaluciaSevillaCasaSalinasComponent,
    AndaluciaSevillaPalacioMarquesesAlgabaComponent,
    AndaluciaSevillaMuseoBellasArtesComponent,
    AndaluciaSevillaMuseoBaileFlamencoComponent,
    AndaluciaSevillaPabellonNavegacionComponent,
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
