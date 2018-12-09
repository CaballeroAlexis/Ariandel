import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-last-stories',
  templateUrl: './last-stories.component.html',
  styleUrls: ['./last-stories.component.css']
})
export class LastStoriesComponent implements OnInit {
  @Input('stories')  public stories;
  constructor( private router:Router) { }

  ngOnInit() {
  }
  goStory(idx:number){
    this.router.navigate(["/story",idx]);
  }
}
