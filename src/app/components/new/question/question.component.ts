import { Component,Input } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent   {
  destroy:boolean;

  @Input('group')
  public questionForm: FormGroup;
  delete_question(i){
    console.log(i);
    
  }
  

}
