import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReenvioSenha } from './reenvio-senha';

describe('ReenvioSenha', () => {
  let component: ReenvioSenha;
  let fixture: ComponentFixture<ReenvioSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReenvioSenha],
    }).compileComponents();

    fixture = TestBed.createComponent(ReenvioSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
