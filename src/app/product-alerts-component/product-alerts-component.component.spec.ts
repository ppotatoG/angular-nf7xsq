import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponentComponent } from './product-alerts-component.component';

describe('ProductAlertsComponentComponent', () => {
  let component: ProductAlertsComponentComponent;
  let fixture: ComponentFixture<ProductAlertsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlertsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
