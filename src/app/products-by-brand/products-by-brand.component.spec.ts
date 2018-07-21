import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByBrandComponent } from './products-by-brand.component';

describe('ProductsByBrandComponent', () => {
  let component: ProductsByBrandComponent;
  let fixture: ComponentFixture<ProductsByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
