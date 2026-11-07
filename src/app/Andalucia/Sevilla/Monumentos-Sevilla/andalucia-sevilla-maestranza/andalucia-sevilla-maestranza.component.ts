import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-maestranza',
  templateUrl: './andalucia-sevilla-maestranza.component.html',
  styleUrls: ['./andalucia-sevilla-maestranza.component.scss'],
})
export class AndaluciaSevillaMaestranzaComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/La Maestranza/LaMaestranza.jpg',
      alt: 'LaMaestranza',
    }
  ];
}
