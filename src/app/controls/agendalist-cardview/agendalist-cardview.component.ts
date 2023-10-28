import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Helper } from 'src/app/helper';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-agendalist-cardview',
  templateUrl: './agendalist-cardview.component.html',
  styleUrls: ['./agendalist-cardview.component.css']
})
export class AgendalistCardviewComponent {
  constructor(private router: Router){}
  @Input() dateInput!: Date;
  @Input() eventInput!: Event;
  shortDayOfWeekAsString(arg0: number) {
    return Helper.shortDayOfWeekAsString(arg0);
  }
  register(id: number) {
    this.router.navigate(['/register', id]);
  }
}
