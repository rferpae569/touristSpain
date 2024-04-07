import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndaluciaSevillaComponent } from './andalucia-sevilla/andalucia-sevilla.component';

const routes: Routes = [
  { path: '', component: AndaluciaSevillaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
