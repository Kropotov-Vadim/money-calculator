import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCalculatorComponent } from './product-calculator.component';

describe('ProductCalculatorComponent', () => {
  let component: ProductCalculatorComponent;
  let fixture: ComponentFixture<ProductCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
