import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsCodeList } from './ops-code-list';

describe('OpsCodeList', () => {
  let component: OpsCodeList;
  let fixture: ComponentFixture<OpsCodeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpsCodeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpsCodeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
