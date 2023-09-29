import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/constants';
import { Speaker } from 'src/app/models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerServiceService {
  constructor(private http: HttpClient) { }
  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(Constants.SPEAKERS_API);
  }
}
