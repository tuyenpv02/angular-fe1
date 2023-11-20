import { Component } from '@angular/core';
import { ICustomer } from 'src/app/interface/ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent {

  customers: ICustomer[] =[];

  constructor(private customserServices: CustomerService) {
    this.customserServices.getCustomers().subscribe({
      next:(data) =>{
        this.customers = data;
      },
      complete:()=>console.log(this.customers)
      
    });
  }
}
