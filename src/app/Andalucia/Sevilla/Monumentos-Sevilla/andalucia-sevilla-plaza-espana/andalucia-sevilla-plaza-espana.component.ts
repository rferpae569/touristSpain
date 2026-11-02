import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-plaza-espana',
  templateUrl: './andalucia-sevilla-plaza-espana.component.html',
  styleUrls: ['./andalucia-sevilla-plaza-espana.component.scss'],
})
export class AndaluciaSevillaPlazaEspanaComponent {
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
