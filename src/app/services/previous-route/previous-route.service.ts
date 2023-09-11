import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PreviousRouteService {

  private previousUrl: string;
  private currentUrl: string;

  constructor(private router: Router) {
    this.previousUrl = location.href;
    this.currentUrl = location.href;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = location.href + event.url;
      };
    });
  }
  public getCurrentUrl(): string {
    return this.currentUrl;
  }
  public getPreviousUrl() {
    return this.previousUrl;
  }
}