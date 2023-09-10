import { Component, Input } from '@angular/core';
import { Entity } from '../models/entity';
import { ENTITIES } from '../mock/mock-entities';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.getEntity();
  }
  selectedEntity?: Entity;
  getEntity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEntity = ENTITIES.find(i => i.id === id);;
  }
}
