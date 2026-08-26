import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaCompras } from './cesta-compras';

describe('CestaCompras', () => {
  let component: CestaCompras;
  let fixture: ComponentFixture<CestaCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaCompras],
    }).compileComponents();

    fixture = TestBed.createComponent(CestaCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
