import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAndAnswerComponent } from './description-and-answer.component';

describe('DescriptionAndAnswerComponent', () => {
  let component: DescriptionAndAnswerComponent;
  let fixture: ComponentFixture<DescriptionAndAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionAndAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAndAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
