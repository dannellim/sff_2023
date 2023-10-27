import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Speaker } from 'src/app/models/speaker';
import { Helper } from 'src/app/helper';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { SpeakerServiceService } from 'src/app/services/speaker/speaker-service.service';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/entity-service/entity.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  dayOfWeekAsString(arg0: number) {
    return Helper.dayOfWeekAsString(arg0);
  }
  events: Event[] = [];
  speakers: Speaker[] = [];
  entities: Entity[] = [];
  constructor(private route: ActivatedRoute, private loader: LoaderService, private eventService: EventServiceService,
    private router: Router, private speakerService: SpeakerServiceService, private entityService: EntityService) { }
  ngOnInit(): void {
    this.getEvent();
  }
  selectedEvent?: Event;
  eventDate?: Date;
  speaker?: Speaker
  entity?: Entity;
  getEvent(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
        this.selectedEvent = this.events.find(i => i.id === id);
        var [DD, MM, YYYY] = this.selectedEvent!.date.split('/');
        this.eventDate = new Date(YYYY + "-" + MM + "-" + DD);
        this.getSpeaker();
        this.getEntity();
        this.loader.setLoading(false);
      });
  }
  getSpeaker(): void {
    this.loader.setLoading(true);
    const id = this.selectedEvent?.speakerId;
    this.speakerService.getSpeakers().subscribe(speakers => {
      this.speakers = speakers;
      this.speaker = this.speakers.find(i => i.id === id);
      this.loader.setLoading(false);
    });
  }
  getEntity(): void {
    this.loader.setLoading(true);
    const id = this.selectedEvent?.entityId;
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
      this.entity = this.entities.find(i => i.id === id);
      this.loader.setLoading(false);
    });
  }
  register() {
    this.router.navigate(['/register', this.selectedEvent?.id]);
  }
}
