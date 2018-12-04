import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit{
  public isLogin:boolean;
  username:string;
  constructor(private auth:AuthService) {
    //auth.handleAuthentication();
  }
  ngOnInit() {
    this.auth.getAuthUser()
    .then(
    result =>{
      this.username=result['username'];
    })
    this.auth.getAuth().subscribe( auth => {
      if(auth) {
        this.isLogin=true;
      }
      else{
        this.isLogin=false;
      }
    })
   }

 
  login(){
    //this.auth.login();
  }
  salir(){
    this.auth.logout();
  }
  
}
