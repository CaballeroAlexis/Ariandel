import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-number-question',
  templateUrl: './number-question.component.html',
  styleUrls: ['./number-question.component.css']
})
export class NumberQuestionComponent implements OnInit {

  @Input('question')  public question;
  @Output()  answer = new EventEmitter<FormGroup>();
  public questionForm: FormGroup;
  public value=0;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.question);
    this.questionForm = this.fb.group({
      type: [this.question['type']],
      description: [this.question['description']],
      answer: [this.value]
  });
  this.answer.emit( this.questionForm);
  }
  
  changeValue(value){
    this.questionForm.controls["answer"].patchValue(value);
  }
}
