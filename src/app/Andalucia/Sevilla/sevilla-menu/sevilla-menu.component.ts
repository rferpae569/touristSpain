import { Component } from '@angular/core';

@Component({
  selector: 'app-sevilla-menu',
  templateUrl: './sevilla-menu.component.html',
  styleUrls: ['./sevilla-menu.component.scss'],
})
export class SevillaMenuComponent {
  imagenIzquierda: string = 'assets/img/banderas/BanderaAndalucia.jpg';

  imagenDerecha: string = 'assets/img/banderas/BanderaSevilla.jpg';

  provincias = [
    { nombre: 'Almería', enlace: '#' },
    { nombre: 'Cádiz', enlace: '#' },
    { nombre: 'Córdoba', enlace: '#' },
    { nombre: 'Granada', enlace: '#' },
    { nombre: 'Huelva', enlace: '#' },
    { nombre: 'Jaén', enlace: '#' },
    { nombre: 'Málaga', enlace: '#' },
    { nombre: 'Sevilla', enlace: '#' },
  ];

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
