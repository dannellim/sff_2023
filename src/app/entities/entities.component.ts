import { Component } from '@angular/core';
import { Entity } from '../models/entity';
import { EntityService } from '../services/entity-service/entity.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {
  constructor(private entityService: EntityService) { }
  entities: Entity[] = [];
  groupEntity!: Entity;
  ngOnInit(): void {
    this.getEntities();
  }
  getEntities(): void {
    this.entityService.getEntities()
      .subscribe(entities => { this.entities = entities; this.groupEntity = entities[0]; });
  }
}