import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/****** SERVICES ******/
import { AuthGuardService as AuthGuard } from "../services/auth-guard.service";

/****** PAGES ******/
import { HomePage } from './pages/home/home'
import { PagesComponent } from './pages/pages'
import { NotFoundPage } from './notFound/notFound.page'
import { LoginPage } from './login/login.page'


const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: '404', component: NotFoundPage },
  // { path: '', component: PagesComponent, canActivate: [AuthGuard],
  { path: '', component: PagesComponent,
    children: [
      { path: 'home', component: HomePage },
    ]
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
