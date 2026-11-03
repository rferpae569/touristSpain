import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-catedral-giralda',
  templateUrl: './andalucia-sevilla-catedral-giralda.component.html',
  styleUrls: ['./andalucia-sevilla-catedral-giralda.component.scss'],
})
export class AndaluciaSevillaCatedralGiraldaComponent {
  constructor() {}

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
      alt: 'CatedralSevilla',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla4.jpg',
      alt: 'CatedralSevilla',
    },
    {
      src: 'assets/img/Monumentos/Sevilla/CatedralGiralda/CatedralSevilla1.jpg',
      alt: 'CatedralSevilla',
    },
  ];
}
