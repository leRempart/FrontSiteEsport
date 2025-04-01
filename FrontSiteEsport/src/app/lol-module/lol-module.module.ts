import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LolModuleRoutingModule } from './lol-module-routing.module';
import { TeamsListComponent } from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';


@NgModule({
  declarations: [
    TeamsListComponent,
    TeamDetailsComponent
  ],
  imports: [
    CommonModule,
    LolModuleRoutingModule
  ]
})
export class LolModuleModule { }
