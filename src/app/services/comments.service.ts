import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient, private http2:Http) { 

  }

  addComment(comment:object) {
    return this.http.post('http://localhost:3000/comments',comment);     
  }

  getComments(id:number){
    return this.http.get('http://localhost:3000/comments?idStory='+id).pipe(map(data=>{return data}));
  }
}
