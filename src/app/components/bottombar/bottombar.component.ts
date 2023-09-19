import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css']
})
export class BottombarComponent {
  constructor(
    private location: Location,
    private router: Router,
    private loader: LoaderService
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
}
