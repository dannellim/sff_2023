import { Component, Input } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';

@Component({
  selector: 'app-speaker-control',
  templateUrl: './speaker-control.component.html',
  styleUrls: ['./speaker-control.component.css']
})
export class SpeakerControlComponent {
  @Input() speakers: Speaker[] = [];
}
