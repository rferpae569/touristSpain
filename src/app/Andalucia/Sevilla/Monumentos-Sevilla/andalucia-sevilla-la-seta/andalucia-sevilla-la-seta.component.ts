import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-la-seta',
  templateUrl: './andalucia-sevilla-la-seta.component.html',
  styleUrls: ['./andalucia-sevilla-la-seta.component.scss'],
})
export class AndaluciaSevillaLaSetaComponent {
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
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas1.jpg',
      alt: 'LasSetas',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas2.jpg',
      alt: 'LasSetas',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/LasSetas/Setas3.jpg',
      alt: 'LasSetas',
    },
  ];
}
