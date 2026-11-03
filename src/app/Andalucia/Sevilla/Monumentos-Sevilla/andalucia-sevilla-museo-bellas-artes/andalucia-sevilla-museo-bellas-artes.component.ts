import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-museo-bellas-artes',
  templateUrl: './andalucia-sevilla-museo-bellas-artes.component.html',
  styleUrls: ['./andalucia-sevilla-museo-bellas-artes.component.scss'],
})
export class AndaluciaSevillaMuseoBellasArtesComponent {
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
      src: 'assets/img/Monumentos/Sevilla/MuseoBellasArtes/MuseoBellasArtes2.jpg',
      alt: 'BellasArtes',
    }
  ];
}
