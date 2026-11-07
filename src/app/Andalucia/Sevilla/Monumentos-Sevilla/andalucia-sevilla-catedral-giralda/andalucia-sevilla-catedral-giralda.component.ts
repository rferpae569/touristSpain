import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-catedral-giralda',
  templateUrl: './andalucia-sevilla-catedral-giralda.component.html',
  styleUrls: ['./andalucia-sevilla-catedral-giralda.component.scss'],
})
export class AndaluciaSevillaCatedralGiraldaComponent {
  constructor() {}

 imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla2.jpg',
      alt: 'CatedralSevilla',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla4.jpg',
      alt: 'CatedralSevilla',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla1.jpg',
      alt: 'CatedralSevilla',
    },
  ];
}
