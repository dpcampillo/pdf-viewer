import { Component, OnInit } from '@angular/core';
import { DownloadService } from './services/download.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  innerHtmlObj: SafeHtml;

  constructor(private downloadService: DownloadService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.downloadFile();
  }

  downloadFile() {
    this.downloadService.downloadPdf().subscribe(res => {
      const fileURL = URL.createObjectURL(res);
      this.innerHtmlObj = this.sanitizer.bypassSecurityTrustHtml(
      "<object data='" + fileURL + "' type='" + 'application/pdf' + "' style='width:100%; height: 500px'>" +
      "No se pudo previsualizar el documento... Puede intentar descargarlo para ver su contenido" +
      "</object>");
    });
  }

}
