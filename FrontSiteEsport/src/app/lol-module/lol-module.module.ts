import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LolModuleRoutingModule } from './lol-module-routing.module';
import { TeamsListComponent } from './team-list/team-list.component';


@NgModule({
  declarations: [
    TeamsListComponent
  ],
  imports: [
    CommonModule,
    LolModuleRoutingModule
  ]
})
export class LolModuleModule { }
