import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-andalucia-sevilla-real-alcazar',
  templateUrl: './andalucia-sevilla-real-alcazar.component.html',
  styleUrls: ['./andalucia-sevilla-real-alcazar.component.scss'],
})
export class AndaluciaSevillaRealAlcazarComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.realalcazarSevilla;
}
