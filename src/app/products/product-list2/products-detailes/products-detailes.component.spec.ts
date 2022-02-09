import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailesComponent } from './products-detailes.component';

describe('ProductsDetailesComponent', () => {
  let component: ProductsDetailesComponent;
  let fixture: ComponentFixture<ProductsDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
