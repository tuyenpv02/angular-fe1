import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClientComponent } from './product-client.component';

describe('ProductClientComponent', () => {
  let component: ProductClientComponent;
  let fixture: ComponentFixture<ProductClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductClientComponent]
    });
    fixture = TestBed.createComponent(ProductClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
