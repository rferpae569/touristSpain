import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-ayuntamiento-sevilla',
  templateUrl: './andalucia-ayuntamiento-sevilla.component.html',
  styleUrls: ['./andalucia-ayuntamiento-sevilla.component.scss'],
})
export class AndaluciaAyuntamientoSevillaComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.ayuntamientoSevilla;
}
