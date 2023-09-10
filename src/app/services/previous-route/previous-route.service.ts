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
    this.baseUrl = window.location.href;
    this.previousUrl = this.baseUrl + this.router.url;
    this.currentUrl = this.baseUrl + this.router.url;
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