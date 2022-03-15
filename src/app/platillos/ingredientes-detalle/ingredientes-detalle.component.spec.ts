import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesDetalleComponent } from './ingredientes-detalle.component';

describe('IngredientesDetalleComponent', () => {
  let component: IngredientesDetalleComponent;
  let fixture: ComponentFixture<IngredientesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
