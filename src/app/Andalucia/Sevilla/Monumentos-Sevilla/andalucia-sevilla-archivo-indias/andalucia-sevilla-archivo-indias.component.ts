import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-archivo-indias',
  templateUrl: './andalucia-sevilla-archivo-indias.component.html',
  styleUrls: ['./andalucia-sevilla-archivo-indias.component.scss'],
})
export class AndaluciaSevillaArchivoIndiasComponent {
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
}
