import { Component } from '@angular/core';
declare function initImgModal(): void;
@Component({
  selector: 'app-locate-us',
  templateUrl: './locate-us.component.html',
  styleUrls: ['./locate-us.component.css']
})
export class LocateUsComponent {
  initImgModal(): void {
    initImgModal();
  }
  ngOnInit(): void {
    this.initImgModal();
  }
}
