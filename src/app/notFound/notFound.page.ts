import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'notFound',
    templateUrl: './notFound.page.html',
    styleUrls: ['./notFound.page.scss']
})
export class NotFoundPage {
    id: any;
    constructor( private _location: Location) { }

    ngOnInit() {

    }
    backClicked() {
        this._location.back();
    }
}