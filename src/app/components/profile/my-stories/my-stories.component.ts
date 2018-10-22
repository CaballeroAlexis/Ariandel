import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../../../services/stories.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit {

  stories:any[]=[];
  constructor(private  _storiesService:StoriesService, private router:Router) { }

  ngOnInit() {
    this._storiesService.getStories().subscribe((data:any)=>{console.log(data)
      this.stories=data;});
    console.log(this.stories);
  }
  goStory(idx:number){
    console.log(idx);
    this.router.navigate(["/story",idx]);
  }  

}
