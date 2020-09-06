import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {
  constructor(
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }
 
}
