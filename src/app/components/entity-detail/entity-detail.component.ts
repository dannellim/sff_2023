import { Component } from '@angular/core';
import { Entity } from '../../models/entity';
import { ActivatedRoute } from '@angular/router';
import { EntityService } from '../../services/entity-service/entity.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { EVENTS } from '../../mock/mock-events';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})

export class EntityDetailComponent {
  constructor(private route: ActivatedRoute, private entityService: EntityService, private loader: LoaderService) { }
  events: Event[] = [];
  ngOnInit(): void {
    this.getEntity();
  }
  selectedEntity?: Entity;
  getEntity(): void {
    this.loader.setLoading(true);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.entityService.getEntities()
      .subscribe(entities => { 
        this.selectedEntity = entities.find(i => i.id === id);
        this.getEvent();
        this.loader.setLoading(false); 
      });
  }
  getEvent(): void {
    this.events = EVENTS.filter(i => i.entityId === this.selectedEntity?.id);
  }
}
