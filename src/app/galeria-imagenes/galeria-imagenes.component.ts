import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.scss'],
})
export class GaleriaImagenesComponent {
  @Input() imagenes: { src: string; alt: string }[] = [];

  @Input() intervalo: number = 5000;

  indiceActual: number = 0;
  direccion: number = 1;

  private temporizador: any;

  ngOnInit(): void {
    if (this.imagenes.length > 1) {
      this.iniciarAnimacion();
    }
  }

  iniciarAnimacion(): void {
    this.temporizador = setInterval(() => {
      if (this.indiceActual === this.imagenes.length - 1) {
        this.direccion = -1;
      } else if (this.indiceActual === 0) {
        this.direccion = 1;
      }

      this.indiceActual += this.direccion;
    }, this.intervalo);
  }

  ngOnDestroy(): void {
    if (this.temporizador) {
      clearInterval(this.temporizador);
    }
  }
}
