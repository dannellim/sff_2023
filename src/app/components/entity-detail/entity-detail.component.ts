import { Component } from '@angular/core';
import { Entity } from '../../models/entity';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityService } from '../../services/entity-service/entity.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Event } from 'src/app/models/event';
import { Helper } from 'src/app/helper';
import { EventServiceService } from 'src/app/services/event/event-service.service';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})

export class EntityDetailComponent {
  constructor(private route: ActivatedRoute, private entityService: EntityService, private eventService: EventServiceService,
    private loader: LoaderService, private router: Router) { }
  events: Event[] = [];
  ngOnInit(): void {
    this.getEntity();
  }
  selectedEntity?: Entity;
  getEntity(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entityService.getEntities()
      .subscribe(entities => {
        this.selectedEntity = entities.find(i => i.id === id);
        this.getEvent();
      });
  }
  getEvent(): void {
    this.loader.setLoading(true);
    this.eventService.getEvents().subscribe(events => {
      this.events = events.filter(i => i.entityId === this.selectedEntity?.id);
      this.getDateArray();
      this.loader.setLoading(false);
    });
  }
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
