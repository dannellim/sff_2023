import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from 'src/app/helper';
import { Speaker } from 'src/app/models/speaker';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { Event } from 'src/app/models/event';
import { Register } from 'src/app/models/register';
import { ScanService } from 'src/app/services/scan/scan.service';
import { EventServiceService } from 'src/app/services/event/event-service.service';
import { SpeakerServiceService } from 'src/app/services/speaker/speaker-service.service';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent {
  events: Event[] = [];
  speakers: Speaker[] = [];
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  dayOfWeekAsString(arg0: number) {
    return Helper.dayOfWeekAsString(arg0);
  }
  constructor(private route: ActivatedRoute, private loader: LoaderService, private eventService: EventServiceService,
    private router: Router, private scanService: ScanService, private speakerService: SpeakerServiceService) { }
  ngOnInit(): void {
    this.getEvent();
  }
  selectedEvent?: Event;
  eventDate?: Date;
  speaker?: Speaker
  getEvent(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.selectedEvent = this.events.find(i => i.id === id);
      this.contact.eventId = id;
      this.contact.eventTitle = this.selectedEvent?.name ?? '';
      var [DD, MM, YYYY] = this.selectedEvent!.date.split('/');
      this.eventDate = new Date(YYYY + "-" + MM + "-" + DD);
      this.getSpeaker();
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
  contact: Register = {
    email: '', name: '', eventTitle: '', eventId: 0
  };
  submit() {
    console.log(this.contact);
    this.registerEvent(this.contact.name, this.contact.email, this.contact.eventId, this.contact.eventTitle);
  }
  registerEvent(name: string, emai: string, id: number, title: string) {
    this.loader.setLoading(true);
    this.scanService.registerEvent(name, emai, id, title).subscribe({
      next: data => {
        console.log(data);
        this.loader.setLoading(false);
        this.router.navigate(['/success', id]);
      },
      error: error => {
        console.log(error);
        alert(error.name + " " + error.status + " " + error.statusText);
        this.loader.setLoading(false);
      }
    });
  }
  scan() {
    this.router.navigate(['/scanner', this.contact.eventId, this.selectedEvent?.name]);
  }
}
