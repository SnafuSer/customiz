import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

// ***** Dialogs *****
import { BlankDialog } from './blankModal/blank';

import { SharedModule } from "../../app/shared.module";

@NgModule({
  declarations: [
    BlankDialog,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [],
  entryComponents: [
    BlankDialog,
  ],
  exports: [
    BlankDialog,
  ]
})
export class ModalModule { }
