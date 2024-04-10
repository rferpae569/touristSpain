import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-andalucia-sevilla',
  templateUrl: './andalucia-sevilla.component.html',
  styleUrls: ['./andalucia-sevilla.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => *', animate('1000ms ease-out'))
    ])
  ]
})
export class AndaluciaSevillaComponent implements OnInit {
  
  images!: NodeListOf<HTMLImageElement>;
  currentIndex: number = 0;
  interval: number = 5000; // 5 segundos
  mostrarParrafo: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.images = document.querySelectorAll('.imagenes-catedral img');
    this.showImage(this.currentIndex);
    setInterval(() => this.nextImage(), this.interval);

    //NO FUNCIONA
     // Simular un retraso más largo antes de mostrar el párrafo
  setTimeout(() => {
    this.mostrarParrafo = true;
  }, 5000); // Cambié el tiempo a 5000ms (5 segundos)
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
