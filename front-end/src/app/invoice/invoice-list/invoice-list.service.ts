import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { catchError, first, map, tap } from 'rxjs/operators';

const apiEdge = "http://localhost:8080/api";

export interface Invoice {
  id: string,
  amount: number,
  due: Date
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceListService {
  private invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject([]);
  public invoices$: Observable<Invoice[]> = this.invoices.asObservable();

  constructor(private httpClient: HttpClient) { }

  fetchInvoices() {
    this.httpClient.get(`${apiEdge}/invoices/list`).pipe(
      first(),
      catchError(error => {
        return EMPTY;
      }),
      tap((resp: any) => this.announceInvoices(resp.data))
    ).subscribe();
  }

  announceInvoices(invoices) {
    console.log(invoices);
    this.invoices.next(invoices);
  }
}
