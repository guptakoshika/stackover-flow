import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DescriptionAndAnswerComponent } from '../description-and-answer/description-and-answer.component';

@Component({
  selector: 'app-your-answer',
  templateUrl: './your-answer.component.html',
  styleUrls: ['./your-answer.component.css']
})
export class YourAnswerComponent implements OnInit {

  constructor(private router: Router, private despAndAnsComp: DescriptionAndAnswerComponent) { }
  answerValue: string;
  ngOnInit() {
  }

  postAnswer() {
    const answer = {
        question_id : 1,
        type : 'answer',
        text : this.answerValue,
        vote_point: 0
    };
    this.despAndAnsComp.addAnswer(answer);
  }
}
