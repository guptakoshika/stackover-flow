import { Component, OnInit } from '@angular/core';
import { DespAndAnsProviderService } from 'src/app/service/despAndAnsProvider/desp-and-ans-provider.service';

@Component({
  selector: 'app-description-and-answer',
  templateUrl: './description-and-answer.component.html',
  styleUrls: ['./description-and-answer.component.css']
})
export class DescriptionAndAnswerComponent implements OnInit {

  constructor(private descriptionProvider: DespAndAnsProviderService) { }
  private answers = [];
  ngOnInit() {
    this.descriptionProvider.getDescription().subscribe(data => this.answers = data);
  }

  /**
   * This method is used for upvote and downvote
   * @param answer: the answer for which vote has to update.
   * @param vote: intial vote
   */
  vote( answer , vote: number) {
    answer.vote_point += vote;
  }

  /**
   * this met
   * @param answer: new answer for adding
   */
  addAnswer(answer) {
  this.answers.push(answer);
  }
}
