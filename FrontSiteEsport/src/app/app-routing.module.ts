import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';
import { MatchFoundComponent } from './core/match-found/match-found.component';

const routes: Routes = [
  { path: '', component: MatchFoundComponent }, // Route par défaut (page d'accueil)
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
