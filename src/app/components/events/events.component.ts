import { Component } from '@angular/core';
import { EVENTS } from '../../mock/mock-events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = EVENTS;
}
