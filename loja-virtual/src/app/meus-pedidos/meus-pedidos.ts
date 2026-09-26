import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-pedidos.html'
})
export class MeusPedidos implements OnInit {
  pedidos: any[] = [];

  ngOnInit() {
    this.carregarPedidos();
  }

  carregarPedidos() {
    const dados = localStorage.getItem('meus_pedidos');
    if (dados) {
      this.pedidos = JSON.parse(dados);
    }
  }

  limparHistorico() {
    localStorage.removeItem('meus_pedidos');
    this.pedidos = [];
  }
}