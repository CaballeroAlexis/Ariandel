import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor( private http:HttpClient, private http2:Http, public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
   }

  getStories(){
    // return this.http.get('http://localhost:3000/stories/').pipe(map(data=>{return data}));
    return new Promise((resolve, reject) => {
      firebase.database().ref('/stories/' ).once('value')
      .then(function(dataSnapshot) {
        
        return dataSnapshot.val();
      })
    .then(result =>{console.log(result);resolve (result)},
    err =>reject(err))
  })
  }

  getStoriesProfile(nickname){
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          firebase.database().ref('/stories/' ).orderByChild('user').equalTo(nickname).once('value')
          .then( function(dataSnapshot) {
            return dataSnapshot.val()
        }).then(result => {
          resolve ( result);
        },
        err=>reject(err)
        )}   
      })
    })
  }
  getStory(id){
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          firebase.database().ref('/stories/'+id ).once('value')
          .then( function(dataSnapshot) {
            return dataSnapshot.val()
        }).then(result => {
          resolve ( result);
        },
        err=>reject(err)
        )}   
      })
    })
  }
  
  saveStory(story:object){
  
    return new Promise((resolve, reject) =>{
      let s= firebase.database().ref('stories/').push().set(story) 
      .then(newStory =>resolve (newStory)
      )
      err=> reject(err)
    });
    
  }

}
