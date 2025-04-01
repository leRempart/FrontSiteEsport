import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/Team";
import { APILolService } from 'src/app/services/apilol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  teams: Team[] = []; // Propriété pour stocker les équipes

  constructor(private apilol : APILolService, private router: Router) { }

  ngOnInit(): void {
    this.apilol.getAllTeams().subscribe({
      next: (teams: Team[]) => {
        this.teams = teams; // Stocke les données dans la propriété
        console.log('Équipes récupérées :', this.teams);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des équipes :', err);
      }
    });
  }
  navigateToTeamDetail(id : number ){
    this.router.navigateByUrl(`/league-of-legends/${id}`)

  }
}
