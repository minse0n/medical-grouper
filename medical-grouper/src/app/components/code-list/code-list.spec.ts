import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeList } from './code-list';

describe('CodeList', () => {
  let component: CodeList;
  let fixture: ComponentFixture<CodeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
