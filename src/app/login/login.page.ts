import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage {
    constructor( private snackBar: MatSnackBar) { }

}
