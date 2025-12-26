import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouperContainer } from './grouper-container';

describe('GrouperContainer', () => {
  let component: GrouperContainer;
  let fixture: ComponentFixture<GrouperContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrouperContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrouperContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
