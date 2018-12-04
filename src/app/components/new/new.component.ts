import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoriesService} from '../../services/stories.service';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogNewStoryComponent } from '../../components/new/dialog-new-story/dialog-new-story.component';
import {Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  medias=[];
  author:any;
  public storyForm: FormGroup;

  constructor(private fb: FormBuilder,private storiesService:StoriesService,public dialog: MatDialog,private router:Router,private cdRef:ChangeDetectorRef,private auth:AuthService,private ngFlashMessageService: NgFlashMessageService) { }
  ngOnInit() {
    this.auth.getAuthUser()
    .then(
    result =>{
      this.author=result;
      this.storyForm = this.fb.group({
        user:[this.author['username']],
        title: ['', Validators.required],
        storyText: [''],
        category: ['Relato'],
        image:[''],
        questions: this.fb.array([])
      });
  
      this.addQuestion();
      if(this.author['points']<5){
        this.ngFlashMessageService.showFlashMessage({
          messages: ["No tiene suficientes puntos para publicar. ¡Ve, y comenta a los demás!"], 
          dismissible: false, 
          timeout: false,
          type: 'danger'
        });     
      }    
    })
  }
 

  addQuestion() {
    this.medias.push('Media '+(this.medias.length+1));
  }

  addQuestionForm(bool){
    const control = <FormArray>this.storyForm.controls['questions'];
    control.push(bool);
    this.ngAfterViewChecked();
  }  
  removeQuestion(i: number) {
    const control = <FormArray>this.storyForm.controls['questions'];
    control.removeAt(i);
    this.medias.splice(i, 1);
  }
  get questions() {
    return this.storyForm.get('questions') as FormArray;
  }

  newStory() {
    this.storiesService.saveStory(this.storyForm.value)
    this.router.navigate(["/home"]);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    const dialogRef = this.dialog.open(DialogNewStoryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data => (data ==true) ? this.newStory() : 'invalid'
    );
    
}
ngAfterViewChecked() {
  this.cdRef.detectChanges();
}

}
