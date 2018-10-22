import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoriesService} from '../../services/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})



export class StoryComponent implements OnInit {
  story:any={};
  constructor(private activateRoute:ActivatedRoute, private storyService:StoriesService) {
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.story=this.storyService.getStory(params['id']);
    });    
   }

  ngOnInit() {
  }

}
