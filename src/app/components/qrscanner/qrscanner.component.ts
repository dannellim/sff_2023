import { Component } from '@angular/core';
import BarcodeFormat from '@zxing/library/esm/core/BarcodeFormat';
import { ScanService } from '../../services/scan/scan.service';
import { Helper } from '../../helper';
import { LoaderService } from '../../services/loader/loader.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.css']
})
export class QrscannerComponent {
  constructor(private scanService: ScanService, private loader: LoaderService,
    private route: ActivatedRoute,
    private router: Router) { }
  allowedFormats = [BarcodeFormat.QR_CODE];
  qrResultString: string = "";
  hasDevices: boolean = false;
  hasPermission: boolean = false;
  availableDevices: MediaDeviceInfo[] = [];
  deviceCurrent?: MediaDeviceInfo;
  deviceSelected: string = "";
  pauseCamera: boolean = false;
  onDeviceSelectChange(e: { target: { value: any; }; }) {
    console.log(e.target.value);
    const selected = e.target.value;
    const selectedStr = selected || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.deviceCurrent = device || undefined;
  }
  onDeviceChange(device: MediaDeviceInfo) {
    const selectedStr = device?.deviceId || '';
    if (this.deviceSelected === selectedStr) { return; }
    this.deviceSelected = selectedStr;
    this.deviceCurrent = device || undefined;
  }
  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }
  onCodeResult(resultString: string) {
    if (resultString && !this.pauseCamera) {
      this.pauseCamera = true;
      this.qrResultString = resultString;
      console.log(resultString);
      if (Helper.isValidSffScan(resultString)) {
        if (this.route.snapshot.paramMap.get('id') && this.route.snapshot.paramMap.get('title')) {
          const id = Number(this.route.snapshot.paramMap.get('id'));
          const title = this.route.snapshot.paramMap.get('title') ?? "";
          this.scanRegister(resultString, id, title);
        } else this.scanContact(resultString);
      } else {
        alert("Invalid qr code format! Please try again.");
        this.pauseCamera = false;
      }
    }
  }
  scanRegister(resultString: string, id: number, title: string) {
    this.loader.setLoading(true);
    this.scanService.postScanRegister(resultString, id, title).subscribe({
      next: data => {
        console.log(data);
        this.loader.setLoading(false);
        this.pauseCamera = false;
        this.router.navigate(['/success', id]);
      },
      error: error => {
        console.log(error);
        alert(error.name + " " + error.status + " " + error.statusText);
        this.loader.setLoading(false);
        this.pauseCamera = false;
      }
    });
  }
  scanContact(resultString: string) {
    this.loader.setLoading(true);
    this.scanService.postScanData(resultString).subscribe({
      next: data => {
        console.log(data);
        alert("Thank you! We will be in touch with you soon.");
        this.loader.setLoading(false);
        this.pauseCamera = false;
      },
      error: error => {
        console.log(error);
        alert(error.name + " " + error.status + " " + error.statusText);
        this.loader.setLoading(false);
        this.pauseCamera = false;
      }
    });
  }
}
