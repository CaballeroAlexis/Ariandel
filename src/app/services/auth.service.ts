// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app'
import { map, switchMap } from "rxjs/operators";
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../global';

(window as any).global = window;

export class User {
  uid: string;
  username: string = "";

  constructor(auth) {
    this.uid = auth.uid
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  em: string;
  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.pipe(switchMap(auth => {
      if(auth){
        this.currentUser = new User(auth)
        return this.db.list(`/users/${auth.uid}`).valueChanges()
      }else{
        return [];
      }
    })).subscribe(user => {
      this.currentUser['username'] = user.username;
  })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
      return this.afAuth.auth.signInWithPopup(provider)
  }

  get hasUsername() {
    return this.currentUser.username ? true : false
  }
 
  checkUsername(username: string) {
    return this.db.object(`users/${username}`).valueChanges()
  }
 
  updateUsername(username: string) {
    let data = {}
    data[username] = this.currentUser.uid
    this.db.object(`/users/${this.currentUser.uid}`).update({"username": username})
    this.db.object(`/usernames`).update(data)
  }

  registerUser(registerForm:object) {
    return new Promise((resolve, reject) =>{
        this.afAuth.auth.createUserWithEmailAndPassword(registerForm['email'],registerForm['password'])
        .then (userData =>{ 
          console.log(userData)
          resolve (userData);
          firebase.database().ref('users/' + registerForm['username']).set({
            id:userData.user.uid,
            username:  registerForm['username'],
            email: registerForm['email'],
            name: registerForm['name'],
            lastname:registerForm['lastname'],
            points:10,
            avatar:""
          }); 
        },
      err=> reject(err))
    });
  }

  loginUsername(username:string,pass:string) {
    return new Promise((resolve,reject) =>{
      firebase.database().ref('/users/'+username ).once('value')
        .then(function(dataSnapshot) {
          return dataSnapshot.child('email').val()
          })
          .then(result => {
            
            resolve ( this.afAuth.auth.signInWithEmailAndPassword(result,pass));
          },
          err=>{
          reject(err)
          } 
          )
      })
  }

  getProfileUser(id){
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged(function(user) {
        if(user){
          firebase.database().ref('/users/' ).orderByChild('username').equalTo(id).once('value')
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

  getAuthUser(){
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase.database().ref('/users/' ).orderByChild('id').equalTo(user.uid).once('value')
          .then( function(dataSnapshot) {
            let key=Object.keys(dataSnapshot.val())
            
            return dataSnapshot.child(key[0]).val()
          }).then(result => {
            resolve ( result);
          },
          err=>reject(err)
          )}   
        })
      })
    }
  
  logout() {
    return this.afAuth.auth.signOut();
  }

  getAuth() {
    return this.afAuth.authState.pipe(map (auth => auth));
  }

}