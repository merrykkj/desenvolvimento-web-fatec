import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPedido } from './dados-pedido';

describe('DadosPedido', () => {
  let component: DadosPedido;
  let fixture: ComponentFixture<DadosPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosPedido],
    }).compileComponents();

    fixture = TestBed.createComponent(DadosPedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
