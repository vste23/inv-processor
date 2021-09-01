import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { InvoiceListService } from '../invoice-list/invoice-list.service';

@Component({
  selector: 'app-invoice-add-form',
  templateUrl: './invoice-add-form.component.html',
  styleUrls: ['./invoice-add-form.component.scss']
})
export class InvoiceAddFormComponent implements OnInit {
  @ViewChild('fileUpload1')
  private fileUpload1:  AngularFileUploaderComponent;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".csv",
    fileNameIndex: false,
    hideSelectBtn: false,
    maxSize: "1",
    uploadAPI: {
      url:"http://localhost:8080/api/invoices",
      method:"POST"
    },
    theme: "dragNDrop",
  };
  errors;

  constructor(private service: InvoiceListService) { }

  ngOnInit(): void {
  }

  DocUpload(e) {
    console.log(e);
    this.errors = [];
    switch(e.status) {
      case 200: {
        this.service.fetchInvoices();
      } break;
      case 400: {
        this.errors = e.error.errorsList;
      } break;
    }
  }
}
