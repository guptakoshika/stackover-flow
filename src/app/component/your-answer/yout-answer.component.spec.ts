import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAnswerComponent } from './your-answer.component';

describe('YouranswerComponent', () => {
  let component: YourAnswerComponent;
  let fixture: ComponentFixture<YourAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
