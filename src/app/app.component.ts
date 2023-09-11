import { Component, Inject } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { DOCUMENT, Location, LocationStrategy, PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts,
    @Inject(DOCUMENT) private document: Document,
    private location: Location,
    private locationStrategy: LocationStrategy,
    private plaformLocation: PlatformLocation) { }
  ngOnInit(): void {
    // These are just different ways to get the same thing, so if this
    // is what want, you might as well use plain location directly.
    console.log('DOM location', location)
    console.log('DOM window.location', window.location)
    console.log('DOM document.location', document.location)
    console.log('Injected document.location', this.document.location)

    // These are layered on top of each other. A Location contains a
    // LocationStrategy and a LocationStrategy contains a PlatformLocation.
    // Note that this.location, used here, is a different thing to plain location above.
    console.log('location', this.location)
    console.log('locationStrategy', this.locationStrategy)
    console.log('platformLocation', this.plaformLocation) // PlatformLocation "should not be used directly by an application developer."
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
