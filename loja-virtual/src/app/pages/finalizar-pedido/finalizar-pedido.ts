import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-finalizar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './finalizar-pedido.html',
  styleUrl: './finalizar-pedido.css'
})
export class FinalizarPedido {

  dadosPedido = {
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    pagamento: 'cartao'
  };

  taxaEntrega = 15.00;
  pedidoConcluido = false;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  calcularTotalFinal(): number {
    const subtotal = this.carrinhoService.obterTotal();
    let total = subtotal + this.taxaEntrega;

    if (this.dadosPedido.pagamento === 'pix') {
      total -= subtotal * 0.05;
    }

    return total > 0 ? total : 0;
  }

  finalizarCompra() {
    if (!this.dadosPedido.nome || !this.dadosPedido.endereco || !this.dadosPedido.telefone) {
      alert('Por favor, preencha os campos obrigatórios de identificação e entrega.');
      return;
    }

    if (this.carrinhoService.obterItens().length === 0) {
      alert('O seu carrinho está vazio!');
      this.router.navigate(['/catalogo']);
      return;
    }
    if (typeof this.carrinhoService.limparCarrinho === 'function') {
      this.carrinhoService.limparCarrinho();
    }

    this.pedidoConcluido = true;
  }

  fecharModalEVoltar() {
    this.router.navigate(['/catalogo']);
  }
}