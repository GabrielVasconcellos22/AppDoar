import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos() {
    this.abrirUrl('https://www.google.com/maps/search/Banco+Doa%C3%A7%C3%A3o+Alimento/@-23.1830024,-44.8611955,8z?entry=ttu');
  }

  doarRoupas() {
    this.abrirUrl('https://www.google.com/maps/search/Banco+Doa%C3%A7%C3%A3o+Roupa/@-23.1250512,-44.9208767,8z/data=!3m1!4b1?entry=ttu');
  }

  doarSangue() {
    this.abrirUrl('https://www.google.com/maps/search/Banco+Doa%C3%A7%C3%A3o+Sangue/@-22.7529071,-43.1656181,11z/data=!3m1!4b1?entry=ttu');
  }

  abrirUrl(url: string) {
    window.open(url, '_blank')?.focus();
  }

}
