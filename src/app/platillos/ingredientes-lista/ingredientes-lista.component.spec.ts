import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesListaComponent } from './ingredientes-lista.component';

describe('IngredientesListaComponent', () => {
  let component: IngredientesListaComponent;
  let fixture: ComponentFixture<IngredientesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
