import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaEspanaComponent } from './mapa-espana/mapa-espana.component';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
import { AndaluciaSevillaPlazaEspanaComponent } from './Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { AndaluciaSevillaMaestranzaComponent } from './Monumentos-Sevilla/andalucia-sevilla-maestranza/andalucia-sevilla-maestranza.component';
import { AndaluciaSevillaTorreOroComponent } from './Monumentos-Sevilla/andalucia-sevilla-torre-oro/andalucia-sevilla-torre-oro.component';
import { AndaluciaSevillaPuenteTrianaComponent } from './Monumentos-Sevilla/andalucia-sevilla-puente-triana/andalucia-sevilla-puente-triana.component';
import { AndaluciaSevillaLaSetaComponent } from './Monumentos-Sevilla/andalucia-sevilla-la-seta/andalucia-sevilla-la-seta.component';
import { AndaluciaSevillaArchivoIndiasComponent } from './Monumentos-Sevilla/andalucia-sevilla-archivo-indias/andalucia-sevilla-archivo-indias.component';
import { AndaluciaSevillaHospitalCaridadComponent } from './Monumentos-Sevilla/andalucia-sevilla-hospital-caridad/andalucia-sevilla-hospital-caridad.component';
import { AndaluciaSevillaHospitalVenerablesComponent } from './Monumentos-Sevilla/andalucia-sevilla-hospital-venerables/andalucia-sevilla-hospital-venerables.component';
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
import { SevillaMenuComponent } from './sevilla-menu/sevilla-menu.component';
import { PoliticaprivacidadComponent } from './politicaprivacidad/politicaprivacidad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';
import { PoliticaCookiesComponent } from './politica-cookies/politica-cookies.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component:MapaEspanaComponent},
  { path: 'SevillaMenu', component:SevillaMenuComponent},
  { path: 'PoliticaPrivacidad', component:PoliticaprivacidadComponent},
  { path: 'AvisoLegal', component:AvisoLegalComponent},
  { path: 'PoliticaCookies', component:PoliticaCookiesComponent},
  { path: 'TerminoServicios', component:TerminosServicioComponent},
  { path: 'SobreNosotros', component:SobreNosotrosComponent},
  { path: 'Contactanos', component:ContactanosComponent},
  { path: 'CatedralGiraldaSevilla', component: AndaluciaSevillaCatedralGiraldaComponent },
  { path: 'RealAlcazarSevilla', component: AndaluciaSevillaRealAlcazarComponent } ,
  { path: 'PlazaEspanaSevilla', component: AndaluciaSevillaPlazaEspanaComponent },
  { path: 'MaestranzaSevilla', component: AndaluciaSevillaMaestranzaComponent },
  { path: 'TorreOroSevilla', component:AndaluciaSevillaTorreOroComponent},
  { path: 'PuenteTrianaSevilla', component:AndaluciaSevillaPuenteTrianaComponent},
  { path: 'LaSetaSevilla', component:AndaluciaSevillaLaSetaComponent},
  { path: 'ArchivoIndiasSevilla', component:AndaluciaSevillaArchivoIndiasComponent},
  { path: 'HospitalCaridadSevilla', component:AndaluciaSevillaHospitalCaridadComponent},
  { path: 'HospitalVerenablesSevilla', component:AndaluciaSevillaHospitalVenerablesComponent},
  { path: 'MuseoArqueologicoSevilla', component:AndaluciaMuseoArqueologicoComponent},
  { path: 'MuseoArtesCostumbresSevilla', component:AndaluciaMuseoArtesCostumbresComponent},
  { path: 'AyuntamientoSevilla', component:AndaluciaAyuntamientoSevillaComponent},
  { path: 'PalacioDuenasSevilla', component:AndaluciaSevillaPalacioDuenasComponent},
  { path: 'CasaSalinasSevilla', component:AndaluciaSevillaCasaSalinasComponent},
  { path: 'PalacioMarquesesAlgabaSevilla', component:AndaluciaSevillaPalacioMarquesesAlgabaComponent},
  { path: 'MuseoBellasArtesSevilla', component:AndaluciaSevillaMuseoBellasArtesComponent},
  { path: 'MuseoBaileFlamencoSevilla', component:AndaluciaSevillaMuseoBaileFlamencoComponent},
  { path:'PabellonNavegacionSevilla', component:AndaluciaSevillaPabellonNavegacionComponent},
  { path:'AcuarioSevilla', component:AndaluciaSevillaAcuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
