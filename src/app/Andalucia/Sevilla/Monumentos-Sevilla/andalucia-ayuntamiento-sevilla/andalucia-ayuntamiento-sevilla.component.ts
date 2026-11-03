import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuntamiento-sevilla',
  templateUrl: './andalucia-ayuntamiento-sevilla.component.html',
  styleUrls: ['./andalucia-ayuntamiento-sevilla.component.scss'],
})
export class AndaluciaAyuntamientoSevillaComponent {
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
    src: 'assets/img/Monumentos/Sevilla/AyuntamientoSevilla/AyuntamientoSevilla.jpg',
    alt: 'Ayuntamiento de Sevilla'
  }
];
}
