import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts, private titleService: Title) {
    this.titleService.setTitle("DISCOVER THE CRÉDIT AGRICOLE GROUP");
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
