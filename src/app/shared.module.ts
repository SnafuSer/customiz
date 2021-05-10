
// ####################################################################
// ######################## Externals #################################
// ####################################################################

// ***** @angular *****
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

// ***** Material *****
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSelectModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
// ***** other *****

// ####################################################################
// ######################## Internal #################################
// ####################################################################

// ***** App *****

// ***** Pipe *****
export const cloudinary = {
  Cloudinary: Cloudinary
};
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatSidenavModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    CloudinaryModule.forRoot(cloudinary, { cloud_name: 'deck4daxl'}),

  ],
  providers: [
    CloudinaryModule,

  ],
  bootstrap: [],
  entryComponents: [],
  exports: [
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatSidenavModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
