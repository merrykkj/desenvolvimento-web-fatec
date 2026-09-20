import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: ItemCarrinho[] = [];

  adicionar(produto: Produto, quantidade: number = 1) {
    const itemExistente = this.itens.find(i => i.produto.codigo === produto.codigo);
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itens.push({ produto, quantidade });
    }
  }

  obterItens(): ItemCarrinho[] {
    return this.itens;
  }

  removerItem(codigoProduto: number) {
    this.itens = this.itens.filter(i => i.produto.codigo !== codigoProduto);
  }

  limparCarrinho() {
    this.itens = [];
  }

  obterTotal(): number {
    return this.itens.reduce((total, item) => {
      const preco = item.produto.valorPromo > 0 ? item.produto.valorPromo : item.produto.valor;
      return total + (preco * item.quantidade);
    }, 0);
  }

  obterQuantidadeTotal(): number {
    return this.itens.reduce((sum, item) => sum + item.quantidade, 0);
  }
}