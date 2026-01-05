import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdCodeList } from './icd-code-list';

describe('IcdCodeList', () => {
  let component: IcdCodeList;
  let fixture: ComponentFixture<IcdCodeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcdCodeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcdCodeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
