import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-new-story',
  templateUrl: './dialog-new-story.component.html',
  styleUrls: ['./dialog-new-story.component.css']
})
export class DialogNewStoryComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogNewStoryComponent>) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close(true);
}
  close() {
    this.dialogRef.close();
}
}
