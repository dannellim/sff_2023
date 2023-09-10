import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PreviousRouteService {

  private previousUrl: string;
  private currentUrl: string;
  private baseUrl: string;

  constructor(private router: Router) {
    this.previousUrl = this.router.url;
    this.currentUrl = this.router.url;
    this.baseUrl = document.location.origin;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = this.baseUrl + event.url;
      };
    });
  }

  public getPreviousUrl() {
    return this.previousUrl;
  }
}