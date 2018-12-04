import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.css']
})
export class SelectQuestionComponent implements OnInit {
  @Input('question')  public question;
  @Output()  answer = new EventEmitter<FormGroup>();
  public questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.question);
    this.questionForm = this.fb.group({
      type: [this.question['type']],
      description: [this.question['description']],
      answer: [this.question['options'][0]],
      options:[this.question['options']]
  });
  this.answer.emit( this.questionForm);
  }

}