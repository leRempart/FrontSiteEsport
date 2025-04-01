import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { APILolService } from 'src/app/services/apilol.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  constructor(private apilol : APILolService,private route : ActivatedRoute){}
  team !: Team
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID depuis l'URL
    if (id) {
      this.apilol.getTeamById(id).subscribe({
        next: (team: Team) => {
          this.team = team;
          console.log('Équipe récupérée :', this.team);
          this.team.players.forEach(player => {
            player.showSummary = false;
          });
        },
        error: (err) => {
          console.error('Erreur lors de la récupération de l\'équipe :', err);
        }
      });
    }
  }
      
  }


