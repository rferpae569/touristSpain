import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-palacio-duenas',
  templateUrl: './andalucia-sevilla-palacio-duenas.component.html',
  styleUrls: ['./andalucia-sevilla-palacio-duenas.component.scss'],
})
export class AndaluciaSevillaPalacioDuenasComponent {
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
      src: 'assets/img/Monumentos/Sevilla/PalacioDuenas/PalacioDuenas1.jpg',
      alt: 'PalacioDuenas',
    }
  ];
}
