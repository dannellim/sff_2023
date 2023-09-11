import { Component } from '@angular/core';
import { PreviousRouteService } from '../services/previous-route/previous-route.service';
declare function shareLink(url: string): void;
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  myAngularxQrCode: string;
  constructor(
    private previousRouteService: PreviousRouteService
  ) {
    this.myAngularxQrCode = this.getPrevUrl(this.previousRouteService.getPreviousUrl());
  }
  ngOnInit() {
    console.log(this.myAngularxQrCode);
  }
  getPrevUrl(input: string): string {
    input = input.replace('qrcode','');
    return input;
  }
  share(): void {
    shareLink(this.myAngularxQrCode);
  }
}
