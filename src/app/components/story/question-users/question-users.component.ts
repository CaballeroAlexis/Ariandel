import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from '../../../services/comments.service';

@Component({
  selector: 'app-question-users',
  templateUrl: './question-users.component.html',
  styleUrls: ['./question-users.component.css']
})
export class QuestionUsersComponent implements OnInit {
  @Input('questionsUsers')  public questionsUsers;
  @Input('idStory')  public idStory;
  @Input('comments')  public comments;
  public answersForm: FormGroup;

  constructor(private fb: FormBuilder,private commentsService:CommentsService) { }

  ngOnInit() {
    console.log(this.idStory);
    this.answersForm = this.fb.group({
      user: ['Alexis'],
      created: ['Hoy'],
      idStory:[this.idStory],
      answers: this.fb.array([])
    });
    

    this.questionsUsers.forEach(element => {
      this.addQuestion(element);
    });
    
    console.log(this.answersForm.controls.answers['controls']);
  }

  initQuestion(element) {
    return this.fb.group({
      type: [element['type']],
      description: [element['description']],
      answer: ['']
    });
  }

  addQuestion(element) {
    const control = <FormArray>this.answersForm.controls['answers'];
    
    const questionCtrl = this.initQuestion(element);
    control.push(questionCtrl);
  }
  sendAnswer(){
    console.log(this.answersForm.value);
    this.commentsService.addComment(this.answersForm.value);
  }
}
