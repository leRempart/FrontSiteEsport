import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-match-found',
  templateUrl: './match-found.component.html',
  styleUrls: ['./match-found.component.scss'],
  animations: [
    trigger('circlePulse', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'scale(0.5)', opacity: 0 }))
      ])
    ]),
    trigger('glowPulse', [
      transition('* => *', [
        animate('1.5s infinite alternate', style({ boxShadow: '0 0 15px 5px rgba(0, 191, 255, 0.8)' })),
      ])
    ])
  ]
})
export class MatchFoundComponent implements OnInit, OnDestroy {
  isVisible = false;
  timer = 10; // Compte à rebours de 10 secondes
  timerInterval: any;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
      this.startTimer();
    }, 1000);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.declineMatch();
      }
    }, 1000);
  }

  acceptMatch() {
    console.log('Match accepté !');
    this.isVisible = false;
    clearInterval(this.timerInterval);
  }

  declineMatch() {
    console.log('Match refusé !');
    this.isVisible = false;
    clearInterval(this.timerInterval);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}