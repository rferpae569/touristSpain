import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-sevilla-menu',
  templateUrl: './sevilla-menu.component.html',
  styleUrls: ['./sevilla-menu.component.scss'],
})
export class SevillaMenuComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.sevilla;
}
