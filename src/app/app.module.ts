import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ***** Redux *****
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, INITIAL_STATE } from '../redux'

// ***** App *****
import { SharedModule } from './shared.module';
import { ServiceModule } from '../services/services.module';

// ***** Components *****
import { ModalModule } from "../components/modals/modal.module";

// ***** Pages *****
import { PagesComponent } from './pages/pages';
import { NotFoundPage } from './notFound/notFound.page';
import { LoginPage } from './login/login.page';
import { HomePage } from './pages/home/home';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotFoundPage,
    LoginPage,
    HomePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule,
    SharedModule,
    ServiceModule,
    StoreModule.forRoot(reducers, { initialState: INITIAL_STATE }),
    StoreDevtoolsModule.instrument({ maxAge: 10, name: '[DRINKSCAN]' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
