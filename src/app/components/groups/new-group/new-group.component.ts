import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GroupsService  } from '../../../services/groups.service';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupComponent implements OnInit {
  public groupForm: FormGroup;
  constructor(private fb: FormBuilder,private groupsservice:GroupsService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.auth.getAuthUser()
    .then(result =>{
    this.groupForm = this.fb.group({
      master:[result['username']],
      title: ['', Validators.required],
      description: [''],
      image:['']
    });
    })
  }
  saveGroup() {
    this.groupsservice.saveGroup(this.groupForm.value)
    .then(result => {
      console.log(result);
      this.router.navigate(["/home"]);

    })
  }

}
