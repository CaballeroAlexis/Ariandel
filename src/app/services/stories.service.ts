import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private stories:any[]=[];
  constructor( private http:HttpClient, private http2:Http) {
    console.log("stories");
   }

  getStories(){
    return this.http.get('http://localhost:3000/stories/').pipe(map(data=>{return data}));
    //return this.stories;
  }
  getStory(i:number){
    return this.http.get('http://localhost:3000/stories/'+i).pipe(map(data=>{return data}));
  }
  
  addStoryWithPromise(client:object): Promise<object> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http2.post('http://localhost:3000/stories/', client, options).toPromise()
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
}
