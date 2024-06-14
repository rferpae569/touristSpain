import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-mapa-espana',
  templateUrl: './mapa-espana.component.html',
  styleUrls: ['./mapa-espana.component.scss'],
})
export class MapaEspanaComponent implements OnInit {
  showCookieConsent: boolean = true;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.checkCookieConsent();
  }

  checkCookieConsent(): void {
    const consent = this.cookieService.get('cookies');
    if (consent === 'Aceptadas') {
      this.showCookieConsent = false;
    }
  }

  acceptCookies(): void {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);
    this.cookieService.set('cookies', 'Aceptadas', { expires: expirationDate });
    this.showCookieConsent = false;
  }

  rejectCookies(): void {
    alert('Debes aceptar las cookies para continuar en la página.');
  }
}
