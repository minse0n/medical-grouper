import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsCodeInput } from './ops-code-input';

describe('OpsCodeInput', () => {
  let component: OpsCodeInput;
  let fixture: ComponentFixture<OpsCodeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpsCodeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpsCodeInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
