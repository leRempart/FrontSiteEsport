import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsListComponent} from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
const routes: Routes = [
  { path :"", component : TeamsListComponent},
  {path :  ":id" , component : TeamDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LolModuleRoutingModule { }
