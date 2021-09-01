import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceAddFormComponent } from './invoice-add-form/invoice-add-form.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [InvoiceListComponent, InvoiceAddFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    AngularFileUploaderModule
  ],
  exports: [
    InvoiceListComponent,
    InvoiceAddFormComponent
  ]
})
export class InvoiceModule { }
