import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../../config/menu-provincias.config';
import { GALERIAS_IMAGENES } from '../../../../config/galeria-imagenes.config';

@Component({
  selector: 'app-andalucia-sevilla-palacio-duenas',
  templateUrl: './andalucia-sevilla-palacio-duenas.component.html',
  styleUrls: ['./andalucia-sevilla-palacio-duenas.component.scss'],
})
export class AndaluciaSevillaPalacioDuenasComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = GALERIAS_IMAGENES.palacioduenasSevilla;
}
