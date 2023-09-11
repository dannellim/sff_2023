import { Component } from '@angular/core';
import { Entity } from '../models/entity';
import { ENTITIES } from '../mock/mock-entities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})

export class EntityDetailComponent {
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getEntity();
  }
  selectedEntity?: Entity;
  getEntity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEntity = ENTITIES.find(i => i.id === id);;
  }
}
