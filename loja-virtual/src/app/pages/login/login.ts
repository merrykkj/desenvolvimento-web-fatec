import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  emailInput: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  efetuarLogin(): void {
    const nomeExtraido = this.emailInput ? this.emailInput.split('@')[0] : 'Maria Silva';
    this.authService.loginFake(nomeExtraido, this.emailInput || 'maria@email.com');
    this.router.navigate(['/catalogo']);
  }
}