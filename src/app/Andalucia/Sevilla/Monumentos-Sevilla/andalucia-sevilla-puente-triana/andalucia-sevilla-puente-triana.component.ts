import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-puente-triana',
  templateUrl: './andalucia-sevilla-puente-triana.component.html',
  styleUrls: ['./andalucia-sevilla-puente-triana.component.scss'],
})
export class AndaluciaSevillaPuenteTrianaComponent {
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
      src: 'assets/img/Monumentos/Sevilla/PuenteTriana/PuenteTriana.jpg',
      alt: 'PuenteTriana',
    }
  ];
}
