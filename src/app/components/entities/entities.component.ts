import { Component } from '@angular/core';
import { Entity } from '../../models/entity';
import { EntityService } from '../../services/entity-service/entity.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css']
})
export class EntitiesComponent {
  constructor(private entityService: EntityService, private loader: LoaderService) { }
  entities: Entity[] = [];
  groupEntity?: Entity;
  ngOnInit(): void {
    this.getEntities();
  }
  getEntities(): void {
    this.loader.setLoading(true);
    this.entityService.getEntities()
      .subscribe(entities => {
        this.entities = entities.splice(1);
        this.groupEntity = entities[0];
        this.loader.setLoading(false);
      });
  }
}