import { Component } from '@angular/core';
import { Entity } from '../models/entity';
import { ENTITIES } from '../mock/mock-entities';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {
  entities = ENTITIES.slice(1);
  groupEntity = ENTITIES[0];
  selectedEntity?: Entity;
  onSelect(entity: Entity): void {
    this.selectedEntity = entity;
  }
  onSelectGroup(): void {
    this.selectedEntity = this.groupEntity;
  }
}