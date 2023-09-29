import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/constants';
declare function shareLink(url: string): void;
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  myAngularxQrCode!: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getUrl();
  }
  getUrl(): void {
    this.myAngularxQrCode = String(Constants.PROD_URL);
    console.log(this.myAngularxQrCode);
  }
  share(): void {
    shareLink(this.myAngularxQrCode);
  }
}
