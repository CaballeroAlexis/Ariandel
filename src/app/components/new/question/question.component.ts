import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit  {
  
  destroy:boolean;
  type:any;
  optionsArray:any=[];
  fruits:any = [];
  val=[2,3,4,5];

  @Input('group')
  public questionForm: FormGroup;
  @Output()  sendMedia = new EventEmitter<FormGroup>();
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.questionForm =this.fb.group({
      type: ['normal'],
      description: [''],
      options: [this.fruits]
      
    });
    this.sendMedia.emit( this.questionForm);
  }

  changeType(deviceValue){
    this.type=deviceValue;
  }
  addOption(){
    let option=$("#optionsInput").val();
    $("#optionsInput").val('')
    this.optionsArray.push(option);
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push( value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }  
  

}
