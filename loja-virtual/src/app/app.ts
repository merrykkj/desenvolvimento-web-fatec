import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService, UsuarioMock } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  
  usuario$: Observable<UsuarioMock | null>;
  qtdCarrinho: number = 2;
  exibirHeaderFooter = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuario$ = this.authService.usuario$;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const rotasSemHeader = ['/login', '/cadastro'];
      this.exibirHeaderFooter = !rotasSemHeader.includes(event.urlAfterRedirects);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    this.closeMenu();
    this.router.navigate(['/']);
  }
}