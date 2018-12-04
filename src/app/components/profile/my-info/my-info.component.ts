import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
  @Input('infoProfile') public profile;
  constructor(private auth:AuthService) { }
  

  ngOnInit() {
    /*if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }*/
  }

}
