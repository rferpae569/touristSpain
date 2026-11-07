import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-puente-triana',
  templateUrl: './andalucia-sevilla-puente-triana.component.html',
  styleUrls: ['./andalucia-sevilla-puente-triana.component.scss'],
})
export class AndaluciaSevillaPuenteTrianaComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/PuenteTriana/PuenteTriana.jpg',
      alt: 'PuenteTriana',
    }
  ];
}
