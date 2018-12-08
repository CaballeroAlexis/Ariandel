import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoriesService} from '../../services/stories.service';
import {CommentsService} from '../../services/comments.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class StoryComponent implements OnInit {
  story:any={};
  comments:any={};
  id:number;
  commentsDefault=true;
  showComments=false;
  commentsArray=[];
  usernameAuth:string;
  commentActivate=true;
  constructor(private activateRoute:ActivatedRoute,
     private storiesService:StoriesService, 
     private commentsService:CommentsService,
     private auth:AuthService) {
  
  }

  ngOnInit() {

    this.id = this.activateRoute.snapshot.params['id'];
    this.storiesService.getStory(this.id).then((data:any)=>{
      this.story=data;
    this.commentsService.getComments(this.id).then(result=>{
  
      if(result != null){
    
      
      this.comments = Object.keys(result).map(function(commentIndex){
        return {id:commentIndex,
                    answer:result[commentIndex]['answers'],
                    user:result[commentIndex]['user'],
                    idStory:result[commentIndex]['idStory']
                  
                  }
        
  
      
                
    })}
    this.auth.getAuthUser()
    .then(result =>{this.usernameAuth=result['username'];
    console.log(this.story['user']);
    console.log(this.usernameAuth)
    if(this.story['user']==this.usernameAuth){
      this.commentActivate=false;
      console.log("false")
    }

    for (var key in this.comments) {
      console.log(this.story)
      if(this.comments[key]['user']==this.usernameAuth || this.story['user']==this.usernameAuth) {
        this.commentActivate=false;
      }
    }     }
    
    )

    this.showComments=true;
   
      
      
      
      
      
      
      
      
      
      
      this.comments=result;  });  }); ;
  }

}
