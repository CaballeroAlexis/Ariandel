import { Component, OnInit, Input } from '@angular/core';
import {StoriesService} from '../../../services/stories.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit {
  @Input('user') public id;
  
  stories:any[]=[];
  constructor(private  _storiesService:StoriesService, private router:Router) { }

  ngOnInit() {
    this._storiesService.getStoriesProfile(this.id).then(result =>
      this.stories = Object.keys(result).map(function(storyIndex){
    
       
        return {    id:storyIndex,
                    title:result[storyIndex]['title'],
                    user:result[storyIndex]['user'],
                    image:result[storyIndex]['image'],
                    questions:result[storyIndex]['questions'],
                    storyText:result[storyIndex]['storyText'],
                    category:result[storyIndex]['category'],
                  }
        
  
      
     
    })
  )
      
      
      
      
      

  }
  goStory(idx:number){
    this.router.navigate(["/story",idx]);
  }  

}
