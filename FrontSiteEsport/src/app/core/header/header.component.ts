import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile: boolean = window.innerWidth < 768; // Détection initiale
  menuOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768; // 768px comme point de rupture
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}