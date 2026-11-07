import { Component } from '@angular/core';
import { MENU_PROVINCIAS } from '../../../config/menu-provincias.config';

@Component({
  selector: 'app-sevilla-menu',
  templateUrl: './sevilla-menu.component.html',
  styleUrls: ['./sevilla-menu.component.scss'],
})
export class SevillaMenuComponent {
  imagenIzquierda = MENU_PROVINCIAS.sevilla.imagenIzquierda;

  imagenDerecha = MENU_PROVINCIAS.sevilla.imagenDerecha;

  provincias = MENU_PROVINCIAS.sevilla.provincias;

  imagenesGaleria = [
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla2.jpg',
      alt: 'CatedralSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/RealAlcazar/realalcazardesevilla1.jpg',
      alt: 'RealAlcazarSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/PlazaEspaña/PlazaEspañaSevilla1.jpg',
      alt: 'PlazaEspanaSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/La Maestranza/LaMaestranza.jpg',
      alt: 'MaestranzaSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/TorreOro/TorreOro.jpg',
      alt: 'TorreOroSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/PuenteTriana/PuenteTriana.jpg',
      alt: 'PuenteTrianaSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas1.jpg',
      alt: 'LaSetaSevilla'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/ArchivoIndias/ArchivoIndias1.jpg',
      alt: 'ArchivoIndias'
    },
    {
      src: 'assets/img/Monumentos/Sevilla/AyuntamientoSevilla/AyuntamientoSevilla.jpg',
      alt: 'AyuntamientoSevilla'
    },
  ];
}
