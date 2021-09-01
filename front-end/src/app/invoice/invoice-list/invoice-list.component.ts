import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice, InvoiceListService } from './invoice-list.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices$: Observable<Invoice[]> = this.service.invoices$;
  displayedColumns: string[] = ['id', 'amount', 'due'];

  constructor(private service: InvoiceListService) { }

  ngOnInit(): void {
    this.service.fetchInvoices();
  }
}
