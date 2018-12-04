import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-normal-question',
  templateUrl: './normal-question.component.html',
  styleUrls: ['./normal-question.component.css']
})
export class NormalQuestionComponent implements OnInit {
  @Input('question')  public question;
  @Output()  answer = new EventEmitter<FormGroup>();
  public questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.question);
    this.questionForm = this.fb.group({
      type: [this.question['type']],
      description: [this.question['description']],
      answer: ['']
  });
  this.answer.emit( this.questionForm);
  }
}
