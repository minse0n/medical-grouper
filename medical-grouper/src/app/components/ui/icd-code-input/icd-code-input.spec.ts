import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdCodeInput } from './icd-code-input';

describe('IcdCodeInput', () => {
  let component: IcdCodeInput;
  let fixture: ComponentFixture<IcdCodeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcdCodeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcdCodeInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
