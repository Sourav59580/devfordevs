import { Component, OnInit } from '@angular/core';

// Services
import { QueAnsService } from "../../services/que-ans.service";

@Component({
  selector: 'app-que-ans',
  templateUrl: './que-ans.component.html',
  styleUrls: ['./que-ans.component.css']
})
export class QueAnsComponent implements OnInit {
  questions: any[] = [];

  constructor(private _QueAnsService: QueAnsService) { }

  ngOnInit() {

    // Get all questions and answers
    this._QueAnsService.getQuestionsAnswers().subscribe(res =>{
      console.log(res)
      this.questions= res
    },err =>{
      console.log(err);
      return false;
    })

  }

  // claculate date diffrence
  calculateDiff(data){

    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }

}
