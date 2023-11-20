import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailClientComponent } from './product-detail-client.component';

describe('ProductDetailClientComponent', () => {
  let component: ProductDetailClientComponent;
  let fixture: ComponentFixture<ProductDetailClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailClientComponent]
    });
    fixture = TestBed.createComponent(ProductDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
