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
  constructor(private activateRoute:ActivatedRoute, private storiesService:StoriesService, private commentsService:CommentsService) {
  
  }

  ngOnInit() {
    
    this.id = this.activateRoute.snapshot.params['id'];
    this.storiesService.getStory(this.id).subscribe((data:any)=>{console.log(data['questions'])
      this.story=data;});    
    this.commentsService.getComments(this.id).subscribe((data:any)=>{this.comments=data;console.log(data)  });   ;
  }

}
