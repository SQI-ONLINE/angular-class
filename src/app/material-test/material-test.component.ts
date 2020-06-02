import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestComponent } from '../dialog-test/dialog-test.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.css']
})
export class MaterialTestComponent implements OnInit {

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openForm(){
    let dialogRef = this.dialog.open(DialogTestComponent, {
      minWidth: '70%',
      data: {title: "Email Notification", message: "A message has been sent to the email address you provided in the form you filled earlier"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined){
        
      }else{
        let snackBarRef = this.snackBar.open("You closed the dialog using the button", "Dismiss", {
          duration: 2000,
          // panelClass: 'snack'
        })
      }
    })
  }
}
