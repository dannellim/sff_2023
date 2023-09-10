import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent {
  constructor(
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
}
