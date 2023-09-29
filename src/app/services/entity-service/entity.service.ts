import { Injectable } from '@angular/core';
import { Entity } from '../../models/entity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor(private http: HttpClient) { }
  getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(Constants.ENTITIES_API);
  }
}
