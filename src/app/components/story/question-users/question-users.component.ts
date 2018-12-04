import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from '../../../services/comments.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-question-users',
  templateUrl: './question-users.component.html',
  styleUrls: ['./question-users.component.css']
})
export class QuestionUsersComponent implements OnInit {
  @Input('questionsUsers')  public questionsUsers;
  @Input('idStory')  public idStory;
  @Input('comments')  public comments;
  @Input('answer')  public answer;
  public answersForm: FormGroup;
  username:string;
  constructor(private fb: FormBuilder,private commentsService:CommentsService,private auth:AuthService) { }

  ngOnInit() {
    
    this.auth.getAuthUser()
    .then(
    result =>{
      this.username=result['username'];
      this.answersForm = this.fb.group({
        user: [this.username],
        created: ['Hoy'],
        idStory:[this.idStory],
        answers: this.fb.array([])
      });      
    })    

  }

  sendAnswer(){
    this.commentsService.saveComment(this.answersForm.value);
    console.log("Envia")
  }

  addAnswer(answer){
    const control = <FormArray>this.answersForm.controls['answers'];
    control.push(answer);    
  }
}
