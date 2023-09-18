import { Component } from '@angular/core';
import { EVENTS } from '../../mock/mock-events';
import { Event } from 'src/app/models/event'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = EVENTS;
}
