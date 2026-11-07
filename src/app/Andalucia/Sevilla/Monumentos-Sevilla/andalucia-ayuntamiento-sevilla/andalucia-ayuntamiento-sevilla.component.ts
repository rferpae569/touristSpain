import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-ayuntamiento-sevilla',
  templateUrl: './andalucia-ayuntamiento-sevilla.component.html',
  styleUrls: ['./andalucia-ayuntamiento-sevilla.component.scss'],
})
export class AndaluciaAyuntamientoSevillaComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
  {
    src: 'assets/img/Monumentos/Sevilla/AyuntamientoSevilla/AyuntamientoSevilla.jpg',
    alt: 'Ayuntamiento de Sevilla'
  }
];
}
