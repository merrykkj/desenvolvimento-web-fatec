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
    const novoPedido = {
      id: Math.floor(100000 + Math.random() * 900000), 
      data: new Date().toLocaleDateString('pt-BR'),
      itens: this.carrinhoService.obterItens(),
      totalFinal: this.calcularTotalFinal(),
      pagamento: this.dadosPedido.pagamento,
      status: 'Em andamento'
    };

    const pedidosSalvos = JSON.parse(localStorage.getItem('meus_pedidos') || '[]');
    pedidosSalvos.unshift(novoPedido); 
    localStorage.setItem('meus_pedidos', JSON.stringify(pedidosSalvos));


    this.carrinhoService.limparCarrinho();
    this.pedidoConcluido = true;

  }
  fecharModalEVoltar() {
    this.router.navigate(['/catalogo']);
  }
}