import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoriesService} from '../../services/stories.service';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogNewStoryComponent } from '../../components/new/dialog-new-story/dialog-new-story.component';
import {Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  medias=[];

  public storyForm: FormGroup;

  constructor(private fb: FormBuilder,private storiesService:StoriesService,public dialog: MatDialog,private router:Router,private cdRef:ChangeDetectorRef) { }
  ngOnInit() {
    
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      storyText: [''],
      category: ['Relato'],
      profile:[''],
      questions: this.fb.array([])
    });

    this.addQuestion();
  }
 

  addQuestion() {
    this.medias.push('Media '+(this.medias.length+1));
    /*
    const control = <FormArray>this.storyForm.controls['questions'];
    const questionCtrl = this.initQuestion();
    control.push(questionCtrl);*/
  }
  addQuestionForm(bool){
    
    const control = <FormArray>this.storyForm.controls['questions'];
    control.push(bool);
    this.ngAfterViewChecked();

  }  
  removeQuestion(i: number) {
    console.log(i);
    const control = <FormArray>this.storyForm.controls['questions'];
    control.removeAt(i);
    this.medias.splice(i, 1);
  }
  get questions() {
    return this.storyForm.get('questions') as FormArray;
  }


  newStory() {
    // TODO: Use EventEmitter with form value
    console.log(this.storyForm.value);
    this.storiesService.addStoryWithPromise(this.storyForm.value);
    console.log("listo");
    this.router.navigate(["/home"]);
  }

  openDialog() {
    console.log(this.storyForm.value);
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
ngAfterViewChecked()
{
  
  this.cdRef.detectChanges();
}

}
