import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutTableComponent } from './prodcut-table.component';

describe('ProdcutTableComponent', () => {
  let component: ProdcutTableComponent;
  let fixture: ComponentFixture<ProdcutTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdcutTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
