import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../../services/stories.service';
import {Router} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  stories:object;
  user:string;
  constructor(private  _storiesService:StoriesService, private router:Router,private auth:AuthService) {
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
  },
)
  this.auth.getAuthUser()
  .then(result=>{
    this.user=result['username']
  })
  }

  goStory(idx:number){
    this.router.navigate(["/story",idx]);
  }

}
