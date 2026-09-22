import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produto } from '../../model/produto'; 
import { CarrinhoService } from '../../services/carrinho'; 
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css'
})
export class DetalheProduto implements OnInit {

  produto?: Produto;
  qtdSelecionada: number = 1;
  adicionadoComSucesso: boolean = false; 

  listaProdutos: Produto[] = [
    { "codigo": 1, "nome": "Buquê de 12 Rosas Vermelhas", "descritivo": "Clássico buquê de rosas vermelhas selecionadas com embalagem especial e laço de cetim.", "valor": 149.90, "valorPromo": 129.90, "quantidade": 15, "destaque": 1 },
    { "codigo": 2, "nome": "Orquídea Phalaenopsis Lilás", "descritivo": "Vaso de orquídea lilás de alta durabilidade, perfeita para decoração de interiores.", "valor": 120.00, "valorPromo": 0, "quantidade": 8, "destaque": 1 },
    { "codigo": 3, "nome": "Arranjo Girassóis da Alegria", "descritivo": "Arranjo vibrante com 5 girassóis frescos em vaso de vidro decorativo.", "valor": 89.90, "valorPromo": 79.90, "quantidade": 20, "destaque": 1 },
    { "codigo": 4, "nome": "Suculenta Echeveria em Vaso de Cerâmica", "descritivo": "Suculenta fácil de cuidar, ideal para mesas de trabalho e pequenos espaços.", "valor": 35.00, "valorPromo": 29.90, "quantidade": 40, "destaque": 0 },
    { "codigo": 5, "nome": "Cesta Encanto de Lírios Brancos", "descritivo": "Cesta de vime artesanal composta por lírios brancos perfumados e folhagens.", "valor": 180.00, "valorPromo": 159.90, "quantidade": 6, "destaque": 1 },
    { "codigo": 6, "nome": "Planta Zamioculca em Vaso", "descritivo": "Planta extremamente resistente com folhas verdes brilhantes, excelente para ambientes internos.", "valor": 95.00, "valorPromo": 0, "quantidade": 12, "destaque": 0 },
    { "codigo": 7, "nome": "Buquê Primavera Silvestre", "descritivo": "Mistura colorida de margaridas, gérberas e astromélias do campo.", "valor": 110.00, "valorPromo": 95.00, "quantidade": 18, "destaque": 0 },
    { "codigo": 8, "nome": "Bonsai Ficus 5 Anos", "descritivo": "Mini árvore cultivada com técnicas de bonsai, ideal para colecionadores.", "valor": 220.00, "valorPromo": 199.00, "quantidade": 4, "destaque": 1 },
    { "codigo": 9, "nome": "Vaso de Tulipas Amarelas", "descritivo": "Tulipas importadas em vaso elegante, perfeitas para presentear com sofisticação.", "valor": 135.00, "valorPromo": 0, "quantidade": 7, "destaque": 0 },
    { "codigo": 10, "nome": "Terrário Fechado no Pote de Vidro", "descritivo": "Mini ecossistema autossustentável com musgos e pequenas plantas tropicais.", "valor": 75.00, "valorPromo": 65.00, "quantidade": 10, "destaque": 0 },
    { "codigo": 11, "nome": "Buquê de Rosas Cor-de-Rosa", "descritivo": "Buquê delicado com 10 rosas cor-de-rosa e acabamento com mosquitinho.", "valor": 125.00, "valorPromo": 109.90, "quantidade": 14, "destaque": 0 },
    { "codigo": 12, "nome": "Planta Jiboia em Cuia Suspensa", "descritivo": "Planta pendente com folhagens densas e variações de verde, excelente para prateleiras.", "valor": 55.00, "valorPromo": 0, "quantidade": 25, "destaque": 0 },
    { "codigo": 13, "nome": "Arranjo de Flores do Campo na Caneca", "descritivo": "Lindo mini arranjo montado em uma caneca de cerâmica colecionável.", "valor": 49.90, "valorPromo": 39.90, "quantidade": 30, "destaque": 0 },
    { "codigo": 14, "nome": "Cacto Mandacaru em Vaso de Barro", "descritivo": "Espécie nativa e icônica de fácil manutenção e crescimento ereto.", "valor": 60.00, "valorPromo": 0, "quantidade": 15, "destaque": 0 },
    { "codigo": 15, "nome": "Orquídea Chuva de Ouro", "descritivo": "Vaso de orquídea Oncidium com pequenas flores amarelas que lembram borboletas.", "valor": 115.00, "valorPromo": 99.90, "quantidade": 9, "destaque": 0 },
    { "codigo": 16, "nome": "Buquê de Gérberas Coloridas", "descritivo": "Buquê vibrante com 8 gérberas de cores variadas para alegrar o dia.", "valor": 85.00, "valorPromo": 75.00, "quantidade": 22, "destaque": 0 },
    { "codigo": 17, "nome": "Lírio da Paz em Vaso", "descritivo": "Planta purificadora de ar com belas flores brancas, ideal para ambientes internos.", "valor": 70.00, "valorPromo": 59.90, "quantidade": 16, "destaque": 0 },
    { "codigo": 18, "nome": "Kit 3 Mini Suculentas Sortidas", "descritivo": "Conjunto com 3 pequenas suculentas em vasinhos de plástico colorido.", "valor": 45.00, "valorPromo": 35.00, "quantidade": 50, "destaque": 0 },
    { "codigo": 19, "nome": "Arranjo de Begônia Vermelha", "descritivo": "Vaso florido de begônia com tonalidade intensa e folhagem arredondada.", "valor": 50.00, "valorPromo": 0, "quantidade": 11, "destaque": 0 },
    { "codigo": 20, "nome": "Cesta Café da Manhã com Flores", "descritivo": "Cesta completa com pães, frutas, suco e um pequeno buquê de flores da estação.", "valor": 250.00, "valorPromo": 219.90, "quantidade": 5, "destaque": 1 }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const codigoParam = this.route.snapshot.paramMap.get('codigo');
    if (codigoParam) {
      const codigoNumero = Number(codigoParam);
      this.produto = this.listaProdutos.find(item => item.codigo === codigoNumero);
    }
  }

  incrementar(): void {
    if (this.produto && this.qtdSelecionada < this.produto.quantidade) {
      this.qtdSelecionada++;
    }
  }

  decrementar(): void {
    if (this.qtdSelecionada > 1) {
      this.qtdSelecionada--;
    }
  }

  adicionarAoCarrinho(): void {
    if (!this.produto) return;

    const usuarioLogado = this.authService.usuario$ ? this.authService.usuario$ : null;
    
    let temUsuario = false;
    this.authService.usuario$.subscribe(user => {
      temUsuario = !!user;
    }).unsubscribe();

    if (!temUsuario) {
      this.router.navigate(['/login']);
      return;
    }

    this.carrinhoService.adicionar(this.produto, this.qtdSelecionada);

    this.adicionadoComSucesso = true;

    setTimeout(() => {
      this.adicionadoComSucesso = false;
    }, 2500);
  }
}