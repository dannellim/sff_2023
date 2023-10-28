import { Component } from '@angular/core';
import { Helper } from 'src/app/helper';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity-service/entity.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private router: Router, private route: ActivatedRoute, private entityService: EntityService,
    private eventService: EventServiceService, private loader: LoaderService) { }
  originalEvents: Event[] = [];
  events: Event[] = [];
  selectedEvent: string = "";
  dates: Date[] = [];
  datesDropdown: Date[] = [];
  selectedDate: string = "";
  entities: Entity[] = [];
  selectedEntity: Entity | undefined;
  times: string[] = [];
  selectedTime: string = "";
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  ngOnInit(): void {
    this.loader.setLoading(true);
    this.entityService.getEntities()
      .subscribe(entities => {
        this.entities = entities;
      });
    this.eventService.getEvents().subscribe(events => {
      this.originalEvents = events;
      this.events = events;
      this.initDateDropdown(events);
      this.initTimeDropdown(events);
      this.getDateArray();
      this.loader.setLoading(false);
    });
  }
  getDateArray() {
    this.dates = [];
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
  initTimeDropdown(events: Event[]) {
    var times: string[] = [];
    for (let i = 0; i < events.length; i++) {
      times.push(events[i].time)
    }
    this.times = times.filter((date, i, self) => self.findIndex(d => d === date) === i);
  }
  onEntityChange(value: any) {
    this.selectedEntity = value.target.value;
    this.onSelectionChange();
  }
  onDateChange(value: any) {
    this.selectedDate = value.target.value;
    this.onSelectionChange();
  }
  onTimeChange(value: any) {
    this.selectedTime = value.target.value;
    this.onSelectionChange();
  }
  onSelectionChange() {
    this.events = this.originalEvents;
    if (this.selectedEntity)
      this.events = this.originalEvents.filter(x => x.entityId == Number(this.selectedEntity));
    if (this.selectedDate)
      this.events = this.events.filter(x => x.date == this.selectedDate);
    if (this.selectedTime)
      this.events = this.events.filter(x => x.time == this.selectedTime);
    this.getDateArray();
  }
}
