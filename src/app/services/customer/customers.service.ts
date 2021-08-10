/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer.model';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private _customers = new BehaviorSubject<Customer[]>([
    new Customer(123, 'Danfoss', ['drive1']),
    new Customer(456, 'ABB', ['drive2']),
    new Customer(789, 'Wartsila', ['drive3']),
    new Customer(111, 'Vaasan Sahko', []),
  ]);

  get customers() {
    return this._customers.asObservable();
  }

  constructor() {}

  searchCustomer(customerNumber: number, customerName: string) {
    return this.customers.pipe(
      take(1),
      map((customers) => ({
        ...customers.find(
          (customer) =>
            customer.customerNumber === customerNumber &&
            customer.customerName === customerName
        ),
      }))
    );
  }
}
