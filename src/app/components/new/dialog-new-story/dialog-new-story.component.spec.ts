import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewStoryComponent } from './dialog-new-story.component';

describe('DialogNewStoryComponent', () => {
  let component: DialogNewStoryComponent;
  let fixture: ComponentFixture<DialogNewStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
