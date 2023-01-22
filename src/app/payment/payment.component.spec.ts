import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPaymentDialog } from './payment.component';

describe('PaymentComponent', () => {
  let component: ConfirmPaymentDialog;
  let fixture: ComponentFixture<ConfirmPaymentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPaymentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPaymentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
