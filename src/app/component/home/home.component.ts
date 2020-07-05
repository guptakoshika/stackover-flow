import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  question = 'What type of projects can I do in MEAN (Angular JS) for developing a good understanding in the language?';
  constructor() { }

  ngOnInit() {
  }

}
