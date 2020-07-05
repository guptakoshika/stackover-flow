import { Component, OnInit } from '@angular/core';
import { DespAndAnsProviderService } from 'src/app/service/despAndAnsProvider/desp-and-ans-provider.service';
import { CommentProviderService } from 'src/app/service/commentProvider/comment-provider.service';

@Component({
  selector: 'app-description-and-answer',
  templateUrl: './description-and-answer.component.html',
  styleUrls: ['./description-and-answer.component.css']
})
export class DescriptionAndAnswerComponent implements OnInit {

  constructor(private descriptionProvider: DespAndAnsProviderService,
              private commentProvider: CommentProviderService) { }
  private answers = [];
  private comments = [];
  ngOnInit() {
    this.descriptionProvider.getDescription().subscribe(data => this.answers = data);
    this.commentProvider.getComments().subscribe(data => this.comments = data);
    console.log(this.comments);
  }
}
