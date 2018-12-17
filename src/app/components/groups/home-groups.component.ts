import { Component, OnInit,Input } from '@angular/core';
import {GroupsService} from '../../services/groups.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './home-groups.component.html',
  styleUrls: ['./home-groups.component.css']
})
export class GroupsComponent implements OnInit {
  @Input('user') public id;
  groups:any[]=[];
  constructor(private groupservice:GroupsService, private router:Router) { }

  ngOnInit() {
   
    this.groupservice.getGroupsUser(this.id).then(result =>{
      console.log(result);
      this.groups = Object.keys(result).map(function(groupIndex){
    
       
        return {    id:groupIndex,
                    title:result[groupIndex]['title'],
                    description:result[groupIndex]['description'],
                    master:result[groupIndex]['master'],
                    image:result[groupIndex]['image']
                  }
                }
      )}
  )}

  goGroup(id){
    this.router.navigate(["/group",id]);
  }

}
