import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private router : Router) {
  }
  ngOnInit() {
  }

  isMobile: boolean = window.innerWidth < 768; // Détection initiale
  menuOpen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth < 768; // 768px comme point de rupture
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  GoToLol(){
    this.router.navigateByUrl("/league-of-legends")
  }
}
