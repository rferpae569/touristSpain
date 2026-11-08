import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-andalucia-sevilla-museo-bellas-artes',
  templateUrl: './andalucia-sevilla-museo-bellas-artes.component.html',
  styleUrls: ['./andalucia-sevilla-museo-bellas-artes.component.scss'],
})
export class AndaluciaSevillaMuseoBellasArtesComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.bellasartesSevilla;
}
