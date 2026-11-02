import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-provincias',
  templateUrl: './menu-provincias.component.html',
  styleUrls: ['./menu-provincias.component.scss'],
})
export class MenuProvinciasComponent {
  @Input() imagenIzquierda: string = '';
  @Input() imagenDerecha: string = '';

  @Input() provincias: { nombre: string; enlace: string }[] = [];
}
