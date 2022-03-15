import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosListaComponent } from './platillos-lista.component';

describe('PlatillosListaComponent', () => {
  let component: PlatillosListaComponent;
  let fixture: ComponentFixture<PlatillosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
