import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;

  constructor(public dialog:MatDialog, public snackBar:MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width:'250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }

  openUndoSnackBar() {
    const sbRef = this.snackBar.open('Customer Save', 'undo', {
      horizontalPosition:'end'
    });

    sbRef.onAction().subscribe(()=>{
      alert('Undo that save!');
    });
  }
}

// https://www.w3schools.com/tags/tag_input.asp

