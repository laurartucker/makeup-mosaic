import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListTextComponent } from './product-list-text.component';

describe('ProductListTextComponent', () => {
  let component: ProductListTextComponent;
  let fixture: ComponentFixture<ProductListTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
