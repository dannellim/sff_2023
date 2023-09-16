import { Injectable } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { ENTITIES } from '../../mock/mock-entities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  constructor() { }
  getEntities(): Observable<Entity[]> {
    const entities = of(ENTITIES);
    return entities;
  }
}
