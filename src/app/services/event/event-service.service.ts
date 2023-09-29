import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  constructor(private http: HttpClient) { }
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(Constants.EVENTS_API);
  }
}
