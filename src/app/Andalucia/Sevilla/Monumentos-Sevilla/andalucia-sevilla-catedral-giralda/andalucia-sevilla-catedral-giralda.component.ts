import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

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

  imagenesGaleria = GALERIAS_IMAGENES.catedralgiraldaSevilla;
}
