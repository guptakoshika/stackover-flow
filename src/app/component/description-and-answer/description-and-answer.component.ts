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

}
