import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-palacio-duenas',
  templateUrl: './andalucia-sevilla-palacio-duenas.component.html',
  styleUrls: ['./andalucia-sevilla-palacio-duenas.component.scss'],
})
export class AndaluciaSevillaPalacioDuenasComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/PalacioDuenas/PalacioDuenas1.jpg',
      alt: 'PalacioDuenas',
    }
  ];
}
