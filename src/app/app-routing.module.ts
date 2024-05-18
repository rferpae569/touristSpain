import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SevillaMenuComponent } from './sevilla-menu/sevilla-menu.component';

const routes: Routes = [
  {path: '', component:SevillaMenuComponent},
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
  { path: 'AyuntamientoSevilla', component:AndaluciaAyuntamientoSevillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
