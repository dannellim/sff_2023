import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/helper';
import { EVENTS } from 'src/app/mock/mock-events';
import { SPEAKERS } from 'src/app/mock/mock-speakers';
import { Speaker } from 'src/app/models/speaker';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Event } from 'src/app/models/event';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent {
  events: Event[] = EVENTS;
  speakers: Speaker[] = SPEAKERS;
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  dayOfWeekAsString(arg0: number) {
    return Helper.dayOfWeekAsString(arg0);
  }
  constructor(private route: ActivatedRoute, private loader: LoaderService,
    private router: Router) { }
  ngOnInit(): void {
    this.loader.setLoading(true);
    this.getEvent();
    this.loader.setLoading(false);
  }
  selectedEvent?: Event;
  eventDate?: Date;
  speaker?: Speaker
  getEvent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEvent = this.events.find(i => i.id === id);
    this.contact.eventId = id;
    this.contact.eventTitle = this.selectedEvent?.name ?? '';
    var [DD, MM, YYYY] = this.selectedEvent!.date.split('/');
    this.eventDate = new Date(YYYY + "-" + MM + "-" + DD);
    this.getSpeaker();
  }
  getSpeaker(): void {
    const id = this.selectedEvent?.speakerId;
    this.speaker = this.speakers.find(i => i.id === id);
  }
  contact: Register = {
    email: '', name: '', eventTitle: '', eventId: 0
  };
  submit() {
    console.log(this.contact);
    this.router.navigate(['/success', this.contact.eventId]);
  }
}
