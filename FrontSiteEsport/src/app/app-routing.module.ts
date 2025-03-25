import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/landing/landing.component';

const routes: Routes = [
  {
    path: 'league-of-legends',
    loadChildren: () => import('./lol-module/lol-module.module').then(m => m.LolModuleModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
