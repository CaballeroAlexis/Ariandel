import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoriesService} from '../../services/stories.service';
import {CommentsService} from '../../services/comments.service'
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
  constructor(private activateRoute:ActivatedRoute, private storiesService:StoriesService, private commentsService:CommentsService) {
  
  }

  ngOnInit() {
    
    this.id = this.activateRoute.snapshot.params['id'];
    this.storiesService.getStory(this.id).then((data:any)=>{
      this.story=data;});
    this.commentsService.getComments(this.id).then(result=>{
      
      
      this.comments = Object.keys(result).map(function(commentIndex){
        return {id:commentIndex,
                    answer:result[commentIndex]['answers'],
                    user:result[commentIndex]['user'],
                    idStory:result[commentIndex]['idStory']
                  
                  }
        
  
      
     
    })
    this.showComments=true;
   
    console.log(this.comments)
      
      
      
      
      
      
      
      
      
      
      this.comments=result;  });   ;
  }

}
