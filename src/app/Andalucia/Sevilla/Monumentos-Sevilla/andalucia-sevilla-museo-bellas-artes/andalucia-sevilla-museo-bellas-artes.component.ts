import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';

@Component({
  selector: 'app-andalucia-sevilla-museo-bellas-artes',
  templateUrl: './andalucia-sevilla-museo-bellas-artes.component.html',
  styleUrls: ['./andalucia-sevilla-museo-bellas-artes.component.scss'],
})
export class AndaluciaSevillaMuseoBellasArtesComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/MuseoBellasArtes/MuseoBellasArtes2.jpg',
      alt: 'BellasArtes',
    }
  ];
}
