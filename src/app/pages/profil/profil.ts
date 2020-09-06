import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'profil',
  templateUrl: 'profil.html',
  styleUrls: ['./profil.scss']
})
export class ProfilPage {
  constructor(
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }
 
}
