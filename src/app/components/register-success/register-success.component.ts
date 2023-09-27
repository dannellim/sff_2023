import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helper';
import { EVENTS } from 'src/app/mock/mock-events';
import { Event } from 'src/app/models/event';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent {
  events = EVENTS;
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
  constructor(private route: ActivatedRoute, private loader: LoaderService) { }
  ngOnInit(): void {
    this.loader.setLoading(true);
    this.getEvent();
    this.getDateArray();
    this.loader.setLoading(false);
  }
  event?: Event;
  eventDate?: Date;
  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.events.find(i => i.id === id);
    var [DD, MM, YYYY] = this.event!.date.split('/');
    this.eventDate = new Date(YYYY + "-" + MM + "-" + DD);
  }
  getDateArray() {
    for (let i = 0; i < this.events.length; i++) {
      var [DD, MM, YYYY] = this.events[i].date.split('/');
      var date = new Date(YYYY + "-" + MM + "-" + DD);
      this.dates.push(date);
    }
  }
}
