import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input('comments')  public comments;
  statistics:any=[];
  optionsChoosen=[];
  public cantItems:number=0;
  constructor() { }

  ngOnInit() {
    this.reorderComments();
  }

  reorderComments(){
    for(let i in this.comments[0]['answers']) {
      if(this.comments[0]['answers'][i]['type'] == 'normal') {
        this.statistics[i]={'description':this.comments[0]['answers'][i]['description'], 'type':'normal'};
      }
      if(this.comments[0]['answers'][i]['type'] == 'options') {
        this.statistics[i]={'description':this.comments[0]['answers'][i]['description'], 'type':'options'};
        this.statistics[i]['options']=[];      
        for(let j in this.comments[0]['answers'][i]['options']) {
          this.statistics[i]['options'].push({"value":this.comments[0]['answers'][i]['options'][j],'votes':0})
        }
      } 
   }
   
   for(let i in this.statistics) {
    this.statistics[i]['answers']=[]
    if(this.statistics[i]['type']=='options') {
    
    for(let j in this.comments) {
      this.cantItems++;
      this.optionsChoosen.push(this.comments[j]['answers'][i]['answer']);
      for(let k in this.statistics[i]['options']){
        if(this.statistics[i]['options'][k]['value'] == this.comments[j]['answers'][i]['answer']){
          this.statistics[i]['options'][k]['votes']++
        }

      }

      
      
      }
      
  
    }
    else if(this.statistics[i]['type']=='normal') {
      
      for(let j in this.comments) {
        this.statistics[i]['answers'].push(this.comments[j]['answers'][i]['answer'])
      }
   }
   console.log(this.statistics)
   console.log(this.optionsChoosen)
  }
  }
}
