import { Component } from '@angular/core';
import { Entity } from '../../models/entity';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from '../../services/entity-service/entity.service';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})

export class EntityDetailComponent {
  constructor(private route: ActivatedRoute, private entityService: EntityService) { }
  entities: Entity[] = [];
  ngOnInit(): void {
    this.getEntity();
  }
  selectedEntity?: Entity;
  getEntity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entityService.getEntities()
      .subscribe(entities => { this.selectedEntity = entities.find(i => i.id === id); });
  }
}
