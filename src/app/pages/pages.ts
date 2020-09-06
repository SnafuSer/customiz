import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: 'pages.html',
  styleUrls: ['pages.scss'],
  selector: 'page'
})
export class PagesComponent {

  constructor(
    private snackBar: MatSnackBar){}

  ngOnInit(){
  }

}
