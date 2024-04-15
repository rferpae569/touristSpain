import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andalucia-sevilla-catedral-giralda',
  templateUrl: './andalucia-sevilla-catedral-giralda.component.html',
  styleUrls: ['./andalucia-sevilla-catedral-giralda.component.scss'],
})
export class AndaluciaSevillaCatedralGiraldaComponent implements OnInit {
  images!: NodeListOf<HTMLImageElement>;
  currentIndex: number = 0;
  interval: number = 5000; // 5 segundos
  mostrarParrafo: boolean = false;

  constructor() {}

  //Funciones necesarias para que la imagenes se cambien cada x tiempo

  ngOnInit(): void {
    this.images = document.querySelectorAll('.imagenes-catedral img');
    this.showImage(this.currentIndex);
    setInterval(() => this.nextImage(), this.interval);
  }

  showImage(index: number): void {
    this.images.forEach((img, i) => {
      if (i === index) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(this.currentIndex);
  }
}
