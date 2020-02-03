import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  apiUrl = 'http://localhost:8080/download/pdf';

  constructor(private httpClient: HttpClient) { }

  downloadPdf() {
    return this.httpClient.get(this.apiUrl, {responseType: 'blob'});
  }

}
