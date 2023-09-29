import { Component } from '@angular/core';
import { Helper } from 'src/app/helper';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private router: Router, private eventService: EventServiceService, private loader: LoaderService) { }
  events : Event[] = [];
  dates: Date[] = []
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  shortDayOfWeekAsString(arg0: number) {
    return Helper.shortDayOfWeekAsString(arg0);
  }
  dayOfWeekAsString(arg0: number) {
    return Helper.dayOfWeekAsString(arg0);
  }
  ngOnInit(): void {
    this.loader.setLoading(true);
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.getDateArray();
      this.loader.setLoading(false);
    });
  }
  getDateArray() {
    for (let i = 0; i < this.events.length; i++) {
      var [DD, MM, YYYY] = this.events[i].date.split('/');
      var date = new Date(YYYY + "-" + MM + "-" + DD);
      this.dates.push(date);
    }
  }
  register(id: number) {
    this.router.navigate(['/register', id]);
  }
}
