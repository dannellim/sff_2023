import { Component } from '@angular/core';
import BarcodeFormat from '@zxing/library/esm/core/BarcodeFormat';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent {
  allowedFormats = [ BarcodeFormat.QR_CODE ];
  qrResultString: string = "";
  hasDevices: boolean = false;
  hasPermission: boolean = false;
  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.hasDevices = Boolean(devices && devices.length);
  }
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(resultString);
  }
}
