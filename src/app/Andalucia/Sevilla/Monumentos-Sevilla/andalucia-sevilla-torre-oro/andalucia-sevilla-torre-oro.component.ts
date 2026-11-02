import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-torre-oro',
  templateUrl: './andalucia-sevilla-torre-oro.component.html',
  styleUrls: ['./andalucia-sevilla-torre-oro.component.scss'],
})
export class AndaluciaSevillaTorreOroComponent {
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
