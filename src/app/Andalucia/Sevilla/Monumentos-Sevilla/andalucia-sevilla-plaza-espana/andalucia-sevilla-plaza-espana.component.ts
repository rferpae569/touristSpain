import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-andalucia-sevilla-plaza-espana',
  templateUrl: './andalucia-sevilla-plaza-espana.component.html',
  styleUrls: ['./andalucia-sevilla-plaza-espana.component.scss'],
})
export class AndaluciaSevillaPlazaEspanaComponent {
 imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.plazaespanaSevilla;
}
