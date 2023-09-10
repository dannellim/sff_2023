import { Component } from '@angular/core';
import { Entity } from '../models/entity';
import { ENTITIES } from '../mock/mock-entities';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {
  entities = ENTITIES;
}
