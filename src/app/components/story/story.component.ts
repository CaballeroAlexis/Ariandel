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
  id:number;
  constructor(private activateRoute:ActivatedRoute, private storiesService:StoriesService) {
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.id=params['id'];
    });    
   }

  ngOnInit() {
    this.storiesService.getStory(this.id).subscribe((data:any)=>{console.log(data)
      this.story=data;});
  }

}
