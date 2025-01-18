import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaEspanaComponent } from './mapa-espana/mapa-espana.component';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component'; 
import { AndaluciaSevillaPlazaEspanaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component'; 
import { AndaluciaSevillaMaestranzaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-maestranza/andalucia-sevilla-maestranza.component'; 
import { AndaluciaSevillaTorreOroComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-torre-oro/andalucia-sevilla-torre-oro.component'; 
import { AndaluciaSevillaPuenteTrianaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-puente-triana/andalucia-sevilla-puente-triana.component';
import { AndaluciaSevillaLaSetaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-la-seta/andalucia-sevilla-la-seta.component';
import { AndaluciaSevillaArchivoIndiasComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-archivo-indias/andalucia-sevilla-archivo-indias.component'; 
import { AndaluciaAyuntamientoSevillaComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-ayuntamiento-sevilla/andalucia-ayuntamiento-sevilla.component';
import { AndaluciaSevillaPalacioDuenasComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-palacio-duenas/andalucia-sevilla-palacio-duenas.component'; 
import { AndaluciaSevillaMuseoBellasArtesComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-museo-bellas-artes/andalucia-sevilla-museo-bellas-artes.component'; 
import { AndaluciaSevillaAcuarioComponent } from './Andalucia/Sevilla/Monumentos-Sevilla/andalucia-sevilla-acuario/andalucia-sevilla-acuario.component';
import { SevillaMenuComponent } from './Andalucia/Sevilla/sevilla-menu/sevilla-menu.component';
import { PoliticaprivacidadComponent } from './politicaprivacidad/politicaprivacidad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './politica-cookies/politica-cookies.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component:MapaEspanaComponent},
  { path: 'Andalucia/Sevilla/sevilla-menu', component:SevillaMenuComponent},
  { path: 'PoliticaPrivacidad', component:PoliticaprivacidadComponent},
  { path: 'AvisoLegal', component:AvisoLegalComponent},
  { path: 'PoliticaCookies', component:PoliticaCookiesComponent},
  { path: 'TerminoServicios', component:TerminosServicioComponent},
  { path: 'SobreNosotros', component:SobreNosotrosComponent},
  { path: 'Contactanos', component:ContactanosComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/CatedralGiraldaSevilla', component: AndaluciaSevillaCatedralGiraldaComponent },
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/RealAlcazarSevilla', component: AndaluciaSevillaRealAlcazarComponent } ,
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/PlazaEspanaSevilla', component: AndaluciaSevillaPlazaEspanaComponent },
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/MaestranzaSevilla', component: AndaluciaSevillaMaestranzaComponent },
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/TorreOroSevilla', component:AndaluciaSevillaTorreOroComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/PuenteTrianaSevilla', component:AndaluciaSevillaPuenteTrianaComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/LaSetaSevilla', component:AndaluciaSevillaLaSetaComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/ArchivoIndiasSevilla', component:AndaluciaSevillaArchivoIndiasComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/AyuntamientoSevilla', component:AndaluciaAyuntamientoSevillaComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/PalacioDuenasSevilla', component:AndaluciaSevillaPalacioDuenasComponent},
  { path: 'Andalucia/Sevilla/Monumentos-Sevilla/MuseoBellasArtesSevilla', component:AndaluciaSevillaMuseoBellasArtesComponent},
  { path:'Andalucia/Sevilla/Monumentos-Sevilla/AcuarioSevilla', component:AndaluciaSevillaAcuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
