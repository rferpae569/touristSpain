import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-real-alcazar',
  templateUrl: './andalucia-sevilla-real-alcazar.component.html',
  styleUrls: ['./andalucia-sevilla-real-alcazar.component.scss'],
})
export class AndaluciaSevillaRealAlcazarComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/RealAlcazar/realalcazardesevilla1.jpg',
      alt: 'RealAlcazar',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/RealAlcazar/realalcazardesevilla2.webp',
      alt: 'RealAlcazar',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/RealAlcazar/realalcazardesevilla3.jpg',
      alt: 'RealAlcazar',
    }
  ];
}
