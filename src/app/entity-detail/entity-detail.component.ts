import { Component, Input } from '@angular/core';
import { Entity } from '../models/entity';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent {
  @Input() entity?: Entity;
}
