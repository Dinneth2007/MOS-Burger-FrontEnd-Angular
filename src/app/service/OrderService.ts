import { HttpClient } from "@angular/common/http";
import { Order } from "../model/order";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
//Says that this Objects can be injected
@Injectable({
    //Can access from any ts file  in the project
    providedIn:"any"
})
export class OrderService{
    
    constructor(private http:HttpClient){}
    //Since is
    fetchOrders():Observable<Order[]>{
      
      return this.http.get<Order[]>('http://localhost:8080/order/get-all');
     }
     createOrder(order:Order):Observable<Order>{
        return this.http.post<Order>("http://localhost:8080/order/place",order);
     }


    
}