import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient, private http2:Http) { 

  }

  
  addCommentWithPromise(client:object): Promise<object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http2.post('http://localhost:3000/comments/', client, options).toPromise()
               .then(this.extractData)
                     .catch(this.handleErrorPromise);
      }

  private extractData(res: Response) {
    let body = res.json();
          return body || {};
      }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  getComments(id){
    //return this.http.get('http://localhost:3000/comments?idStory='+id).pipe(map(data=>{return data}));
    return new Promise((resolve, reject) => {
      firebase.database().ref('/comments/' ).orderByChild('idStory').equalTo(id).once('value')
      .then(function(dataSnapshot) {
        return dataSnapshot.val();
      })
    .then(result =>resolve (result),
    err =>reject(err))
  })    
  }


  saveComment(comment:object){
      return new Promise((resolve, reject) =>{
        let s= firebase.database().ref('comments/').push().set(comment) 
        .then(newComment =>resolve (newComment)
        )
        err=> reject(err)
      });
      
    
  }
}
