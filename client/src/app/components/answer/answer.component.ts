import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() public answer;


  constructor() { }

  ngOnInit(): void {
  }

  like(answerId) {
    console.log(answerId)
  }

  dislike(answerId){
    console.log(answerId)
  }

}
