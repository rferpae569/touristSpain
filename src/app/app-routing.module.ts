import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
import { AndaluciaSevillaPlazaEspanaComponent } from './Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { AndaluciaSevillaMaestranzaComponent } from './Monumentos-Sevilla/andalucia-sevilla-maestranza/andalucia-sevilla-maestranza.component';
import { AndaluciaSevillaTorreOroComponent } from './Monumentos-Sevilla/andalucia-sevilla-torre-oro/andalucia-sevilla-torre-oro.component';
import { SevillaMenuComponent } from './sevilla-menu/sevilla-menu.component';

const routes: Routes = [
  {path: '', component:SevillaMenuComponent},
  { path: 'CatedralGiraldaSevilla', component: AndaluciaSevillaCatedralGiraldaComponent },
  { path: 'RealAlcazarSevilla', component: AndaluciaSevillaRealAlcazarComponent } ,
  { path: 'PlazaEspanaSevilla', component: AndaluciaSevillaPlazaEspanaComponent },
  { path: 'MaestranzaSevilla', component: AndaluciaSevillaMaestranzaComponent },
  { path: 'TorreOroSevilla', component:AndaluciaSevillaTorreOroComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
