import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Constants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class ScanService {
  constructor(private http: HttpClient) { }
  postScanData(scan: string): Observable<string> {
    const params = new HttpParams()
      .set('text', scan)
    return this.http.post<string>(Constants.POST_SCAN_DATA_API, params);
  }
}