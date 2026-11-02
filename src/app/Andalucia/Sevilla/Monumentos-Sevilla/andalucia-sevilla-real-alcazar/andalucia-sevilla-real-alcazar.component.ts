import { Component } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-real-alcazar',
  templateUrl: './andalucia-sevilla-real-alcazar.component.html',
  styleUrls: ['./andalucia-sevilla-real-alcazar.component.scss'],
})
export class AndaluciaSevillaRealAlcazarComponent {
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
