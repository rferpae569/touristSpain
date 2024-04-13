import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaSevillaCatedralGiraldaComponent } from './andalucia-sevilla-catedral-giralda/andalucia-sevilla-catedral-giralda.component';

const routes: Routes = [
  { path: '', component: AndaluciaSevillaCatedralGiraldaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
