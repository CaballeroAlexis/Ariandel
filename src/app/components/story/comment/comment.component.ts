import { Component, OnInit,Input } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentsService} from '../../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comments')  public comments;
  public answersForm: FormGroup;
  commentsArray=[];
  constructor(private fb: FormBuilder,private commentsService:CommentsService) { }

  ngOnInit() {
  
    for (var key in this.comments) {
      this.commentsArray.push(this.comments[key]);
    }
    console.log(this.comments);
    
  }



}