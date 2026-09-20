import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UsuarioMock {
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioSubject = new BehaviorSubject<UsuarioMock | null>(null);
  public usuario$: Observable<UsuarioMock | null> = this.usuarioSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const usuarioSalvo = localStorage.getItem('usuario_mock');
      if (usuarioSalvo) {
        this.usuarioSubject.next(JSON.parse(usuarioSalvo));
      }
    }
  }

  loginFake(nome: string = 'Maria Silva', email: string = 'maria@email.com'): void {
    const usuario: UsuarioMock = { nome, email };
    
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('usuario_mock', JSON.stringify(usuario));
    }
    
    this.usuarioSubject.next(usuario);
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('usuario_mock');
    }
    
    this.usuarioSubject.next(null);
  }
}