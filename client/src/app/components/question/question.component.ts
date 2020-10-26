import { Component, OnInit } from '@angular/core';

// Services
import { QueAnsService } from "../../services/que-ans.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  

  constructor(private _QueAnsService: QueAnsService) {}

  ngOnInit():void {
  }

}
