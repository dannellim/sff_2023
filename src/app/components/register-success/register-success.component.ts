import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Helper } from 'src/app/helper';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
declare function initImgModal(): void;
@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent {
  events: Event[] = [];
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
  constructor(private route: ActivatedRoute, private loader: LoaderService, private eventService: EventServiceService) { }
  ngOnInit(): void {
    this.initImgModal();
    this.getEvent();
  }
  event?: Event;
  eventDate?: Date;
  getEvent(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.event = events.find(i => i.id === id);
      this.getDateArray();
      var [DD, MM, YYYY] = this.event!.date.split('/');
      this.eventDate = new Date(YYYY + "-" + MM + "-" + DD);
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
  initImgModal(): void {
    initImgModal();
  }
}
