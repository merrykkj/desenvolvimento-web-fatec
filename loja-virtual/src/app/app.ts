import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
})
export class App {
  title = 'loja-virtual';
  
  isScrolled = false;
  isMenuOpen = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}