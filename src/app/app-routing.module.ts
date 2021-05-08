import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/****** SERVICES ******/
import { AuthGuardService as AuthGuard } from "../services/auth-guard.service";

/****** PAGES ******/

const routes: Routes = [
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
