import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-adm',
  templateUrl: './panel-adm.component.html',
  styleUrls: ['./panel-adm.component.css']
})
export class PanelAdmComponent {
  sidebar: HTMLElement | null;
  closeBtn: HTMLElement | null;
  searchBtn: HTMLElement | null;

  constructor() {
    this.sidebar = null;
    this.closeBtn = null;
    this.searchBtn = null;
  }

  ngAfterViewInit(): void {
    this.sidebar = document.querySelector('.sidebar');
    this.closeBtn = document.querySelector('#btn');

    this.closeBtn?.addEventListener('click', () => {
      this.sidebar?.classList.toggle('open');
      this.menuBtnChange(); // Llamando a la función (opcional)
    });
  }

  menuBtnChange(): void {
    if (this.sidebar?.classList.contains('open')) {
      this.closeBtn?.classList.replace('bx-menu', 'bx-menu-alt-right'); // Reemplazando las clases de iconos
    } else {
      this.closeBtn?.classList.replace('bx-menu-alt-right', 'bx-menu'); // Reemplazando las clases de iconos
    }
  }
}
