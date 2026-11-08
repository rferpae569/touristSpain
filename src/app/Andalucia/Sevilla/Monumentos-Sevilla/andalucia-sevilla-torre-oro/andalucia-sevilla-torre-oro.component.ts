import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-andalucia-sevilla-torre-oro',
  templateUrl: './andalucia-sevilla-torre-oro.component.html',
  styleUrls: ['./andalucia-sevilla-torre-oro.component.scss'],
})
export class AndaluciaSevillaTorreOroComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

   imagenesGaleria = GALERIAS_IMAGENES.torreoroSevilla;
}
