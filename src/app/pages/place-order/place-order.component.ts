import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component , Input, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Order ,OrderStatus,PaymentMethod} from '../../model/order';
import { OrderService } from '../../service/OrderService';

@Component({
  selector: 'app-place-order',
  imports: [FormsModule,CommonModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})

export class PlaceOrderComponent implements OnInit{
  //Cannto use 'Let' for global
   orders:Order[]=[];
@Input()
  Order:Order={
   
     //id:0,
     orderDate:"2025-01-02",
     totalAmount:10.00,
     status:OrderStatus.PAID,
    paymentMethod:PaymentMethod.CASH,
     customer:{
      id:1
     },
     orderItems:[
      {
        menuItem: {
            id: 2
        },
        quantity: 2,
        subtotal: 100.00
    }
     ]
  }
constructor(private http:HttpClient, private service:OrderService ){
} 
  ngOnInit(): void {
    this.loadOrdersToTable();
    
  }
loadOrdersToTable(){
  this.service.fetchOrders().subscribe((orders:Order[])=>{
   
    this.orders=orders;
    
  });
}

placeOrder(){
  this.service.createOrder(this.Order).subscribe(res=>{
    console.log(res);
   });
}


 




}

