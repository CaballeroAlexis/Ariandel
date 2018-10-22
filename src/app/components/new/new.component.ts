import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NewStoryService} from '../../services/new-story.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  public storyForm: FormGroup;

  constructor(private fb: FormBuilder,private newStoryService:NewStoryService) { }
  ngOnInit() {
    
    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      storyText: [''],
      category: [''],
      profile:[''],
      questions: this.fb.array([])
    });

    this.addQuestion();
  }
  initQuestion() {
    return this.fb.group({
      type: [''],
      description: ['']
    });
  }

  addQuestion() {
    const control = <FormArray>this.storyForm.controls['questions'];
    const questionCtrl = this.initQuestion();
    control.push(questionCtrl);
  }
  removeQuestion(i: number) {
    const control = <FormArray>this.storyForm.controls['questions'];
    control.removeAt(i);
  }
  get questions() {
    return this.storyForm.get('questions') as FormArray;
  }


  newStory() {
    // TODO: Use EventEmitter with form value
    console.log(this.storyForm.value);
    this.newStoryService.addStory(this.storyForm.value);
    console.log("listo");
  }

}
