import { Component, Input } from '@angular/core';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrls: ['./calendar-control.component.css']
})
export class CalendarControlComponent {
  @Input() dateInput!: Date;
  monthAsString(arg0: number) {
    return Helper.monthAsString(arg0);
  }
  shortDayOfWeekAsString(arg0: number) {
    return Helper.shortDayOfWeekAsString(arg0);
  }
  dayOfWeekAsString(arg0: number) {
    return Helper.dayOfWeekAsString(arg0);
  }
}
