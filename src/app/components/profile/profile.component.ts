import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  profile: any;
  id: string;
  constructor(private activateRoute:ActivatedRoute,private auth:AuthService) { }
  
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.auth.getProfileUser(this.id)
    .then(result =>{
      this.profile=result[this.id]
    })
  }

}
