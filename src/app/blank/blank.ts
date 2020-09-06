import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'blank',
  templateUrl: 'blank.html',
  styleUrls: ['./blank.scss']
})
export class BlankPage {
  constructor(
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }
 
}
