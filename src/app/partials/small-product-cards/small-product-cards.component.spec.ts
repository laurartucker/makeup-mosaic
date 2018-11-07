import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProductCardsComponent } from './small-product-cards.component';

describe('SmallProductCardsComponent', () => {
  let component: SmallProductCardsComponent;
  let fixture: ComponentFixture<SmallProductCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProductCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
