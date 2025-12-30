import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingContext } from './billing-context';

describe('BillingContext', () => {
  let component: BillingContext;
  let fixture: ComponentFixture<BillingContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
