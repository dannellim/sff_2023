import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../../constants';
@Injectable({
  providedIn: 'root'
})
export class ScanService {
  constructor(private http: HttpClient) { }
  postScanData(scan: string): Observable<string> {
    return this.http.get<string>(Constants.POST_SCAN_DATA_API + "?text=" + encodeURIComponent(scan));
  }
}