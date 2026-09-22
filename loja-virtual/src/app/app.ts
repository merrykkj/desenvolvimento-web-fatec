import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService, UsuarioMock } from './services/auth';
import { CarrinhoService } from './services/carrinho';

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
  exibirHeaderFooter = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    public carrinhoService: CarrinhoService 
  ) {
    this.usuario$ = this.authService.usuario$;
  }

  get qtdCarrinho(): number {
    return this.carrinhoService.obterQuantidadeTotal();
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