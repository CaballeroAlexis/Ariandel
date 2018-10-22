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
  stories:any[]=[];
  constructor(private  _storiesService:StoriesService, private router:Router, private httpClient:HttpClient) {

   }

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
