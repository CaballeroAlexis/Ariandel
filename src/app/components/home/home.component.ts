import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../../services/stories.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  stories:object;
  constructor(private  _storiesService:StoriesService, private router:Router, private httpClient:HttpClient) {

   }

  ngOnInit() {
    this._storiesService.getStories()
    .then( result =>{
      
      this.stories = Object.keys(result).map(function(storyIndex){

        return {id:storyIndex,
                    title:result[storyIndex]['title'],
                    user:result[storyIndex]['user'],
                    image:result[storyIndex]['image'],
                    questions:result[storyIndex]['questions'],
                    storyText:result[storyIndex]['storyText'],
                    category:result[storyIndex]['category'],
                  }
    })
  })
    
  }

  goStory(idx:number){
    this.router.navigate(["/story",idx]);
  }

}
