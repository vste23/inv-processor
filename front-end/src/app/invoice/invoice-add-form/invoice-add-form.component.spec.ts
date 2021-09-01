import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAddFormComponent } from './invoice-add-form.component';

describe('InvoiceAddFormComponent', () => {
  let component: InvoiceAddFormComponent;
  let fixture: ComponentFixture<InvoiceAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
