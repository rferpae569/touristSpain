import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-la-seta',
  templateUrl: './andalucia-sevilla-la-seta.component.html',
  styleUrls: ['./andalucia-sevilla-la-seta.component.scss'],
})
export class AndaluciaSevillaLaSetaComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas1.jpg',
      alt: 'LasSetas',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas2.jpg',
      alt: 'LasSetas',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas3.jpg',
      alt: 'LasSetas',
    },
  ];
}
