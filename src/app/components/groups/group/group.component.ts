import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupsService} from '../../../services/groups.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group:any={};
  id:number;
  constructor(private activateRoute:ActivatedRoute,
    private groupsservice:GroupsService, 
    private auth:AuthService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.groupsservice.getGroup(this.id)
    .then(result=>{
      console.log(result);
      this.group=result;
    })
  }

}
