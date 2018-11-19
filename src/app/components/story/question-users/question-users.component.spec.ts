import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUsersComponent } from './question-users.component';

describe('QuestionUsersComponent', () => {
  let component: QuestionUsersComponent;
  let fixture: ComponentFixture<QuestionUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
