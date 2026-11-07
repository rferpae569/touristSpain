import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-plaza-espana',
  templateUrl: './andalucia-sevilla-plaza-espana.component.html',
  styleUrls: ['./andalucia-sevilla-plaza-espana.component.scss'],
})
export class AndaluciaSevillaPlazaEspanaComponent {
 imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/PlazaEspaña/PlazaEspañaSevilla1.jpg',
      alt: 'PlazaEspana',
    },
     {
      src: 'assets/img/Monumentos/Sevilla/PlazaEspaña/PlazaEspañaSevilla2.jpg',
      alt: 'PlazaEspana',
    },
     {
      src: 'assets/img/Monumentos/Sevilla/PlazaEspaña/PlazaEspañaSevilla3.jpg',
      alt: 'PlazaEspana',
    }
  ];
}
