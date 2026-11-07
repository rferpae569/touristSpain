import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-acuario',
  templateUrl: './andalucia-sevilla-acuario.component.html',
  styleUrls: ['./andalucia-sevilla-acuario.component.scss'],
})
export class AndaluciaSevillaAcuarioComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

   imagenesGaleria = [
  {
    src: 'assets/img/Monumentos/Sevilla/AcuarioSevilla/Acuario1.jpg',
    alt: 'AcuarioSevilla'
  }
];
}
