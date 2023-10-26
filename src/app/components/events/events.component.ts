import { Component } from '@angular/core';
import { Helper } from 'src/app/helper';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventServiceService, private loader: LoaderService) { }
  events: Event[] = [];
  dates: Date[] = [];
  datesDropdown: Date[] = [];
  dateDropdownText: string = "";
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
    this.route.params.subscribe(routeParams => {
      this.loader.setLoading(true);
      this.eventService.getEvents().subscribe(events => {
        this.initDateDropdown(events);
        const dateJson = routeParams['dateJson'];
        if (dateJson) {
          this.events = [];
          this.dates = [];
          for (let i = 0; i < events.length; i++) {
            var [DD, MM, YYYY] = events[i].date.split('/');
            var date = new Date(YYYY + "-" + MM + "-" + DD);
            if (date.toJSON() == dateJson) {
              this.events.push(events[i]);
            }
          }
          var date = new Date(dateJson);
          this.dateDropdownText = date.getDate()
            + " " + this.monthAsString(date.getMonth()).substring(0, 3) + " " + date.getFullYear().toString().slice(-2);
        } else { this.events = events; this.dateDropdownText = "All dates" }
        this.getDateArray();
        this.loader.setLoading(false);
      });
    });
  }
  getDateArray() {
    for (let i = 0; i < this.events.length; i++) {
      var [DD, MM, YYYY] = this.events[i].date.split('/');
      var date = new Date(YYYY + "-" + MM + "-" + DD);
      this.dates.push(date);
    }
  }
  initDateDropdown(events: Event[]) {
    var dates: Date[] = [];
    for (let i = 0; i < events.length; i++) {
      var [DD, MM, YYYY] = events[i].date.split('/');
      var date = new Date(YYYY + "-" + MM + "-" + DD);
      dates.push(date);
    }
    this.datesDropdown = dates.filter((date, i, self) => self.findIndex(d => d.getDate() === date.getDate()) === i);
  }
  register(id: number) {
    this.router.navigate(['/register', id]);
  }
}
