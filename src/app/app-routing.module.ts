import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaSevillaCatedralGiraldaComponent } from './andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';
import { AndaluciaSevillaRealAlcazarComponent } from './andalucia-sevilla-real-alcazar/andalucia-sevilla-real-alcazar.component';

const routes: Routes = [
  { path: '', component: AndaluciaSevillaCatedralGiraldaComponent },
  { path: 'RealAlcazarSevilla', component: AndaluciaSevillaRealAlcazarComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
