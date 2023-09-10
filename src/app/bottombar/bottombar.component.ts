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
}
