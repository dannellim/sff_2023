import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent {
  constructor(
    private location: Location,
    private router: Router
  ) {}
  goBack(): void {
    this.location.back();
  }
  goHome(): void {
    this.router.navigate(['/']);
  }
  share(): void {
    this.router.navigate(['/qrcode', location.href]);
  }
  contact(): void {
    this.router.navigate(['/contact']);
  }
  agenda(): void {
    this.router.navigate(['/events']);
  }
  scanner(): void {
    this.router.navigate(['/scanner']);
  }
  map(): void {
    this.router.navigate(['/locate']);
  }
}
