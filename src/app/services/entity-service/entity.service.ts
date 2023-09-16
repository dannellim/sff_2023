import { Injectable } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(private http: HttpClient) { }
  getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(Constants.ENTITIES_APL)
  }
}
