import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) { 
  }

  saveGroup(group:object){
    return new Promise((resolve, reject) =>{
      console.log(group)
          firebase.database().ref('groups/').push().set(group)
          .then(result =>resolve(true),
        err=>reject(err))
        })
      }

  getGroupsUser(nickname){
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          firebase.database().ref('/groups/' ).orderByChild('master').equalTo(nickname).once('value')
          .then( function(dataSnapshot) {
            return dataSnapshot.val()
        }).then(result => {
          console.log(result)
          resolve ( result);
        },
        err=>reject(err)
        )}   
      })
    })
  }

  getGroup(id){
    return new Promise((resolve,reject) =>{
      firebase.database().ref('/groups/'+id ).once('value')
      .then(function(dataSnapshot) {
        return dataSnapshot.val();
      }).then(result =>{
        resolve(result);
      },
        err=> reject(err))
    })
  }
}
