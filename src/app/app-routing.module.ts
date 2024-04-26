import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AndaluciaSevillaCatedralGiraldaComponent } from './andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
// import { AndaluciaSevillaRealAlcazarComponent } from './andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
// import { AndaluciaSevillaPlazaEspanaComponent } from './andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { AndaluciaSevillaCatedralGiraldaComponent } from './Monumentos-Sevilla/andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './Monumentos-Sevilla/andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';
import { AndaluciaSevillaPlazaEspanaComponent } from './Monumentos-Sevilla/andalucia-sevilla-plaza-espana/andalucia-sevilla-plaza-espana.component';
import { SevillaMenuComponent } from './sevilla-menu/sevilla-menu.component';

const routes: Routes = [
  {path: '', component:SevillaMenuComponent},
  { path: 'CatedralGiraldaSevilla', component: AndaluciaSevillaCatedralGiraldaComponent },
  { path: 'RealAlcazarSevilla', component: AndaluciaSevillaRealAlcazarComponent } ,
  { path: 'PlazaEspanaSevilla', component: AndaluciaSevillaPlazaEspanaComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
