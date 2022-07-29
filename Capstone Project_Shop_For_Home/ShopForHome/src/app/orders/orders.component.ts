import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orders:Order[]|any
  constructor(
    private oservice:OrderService
  ) { }

  ngOnInit(): void {


    if(sessionStorage.getItem('email'))
    
    this.orders=this.oservice.getOrders()
    .subscribe(data=>{
      console.log(data)
      this.orders=data
    })
    else
    this.orders=this.oservice.getAllOrders()
    .subscribe(data=>{
      console.log(data)
      this.orders=data
    })

  }

  cancel(order:Order){
    this.oservice.cancel(order.orderId)
    .subscribe(res=>{},
      ()=>{},
      ()=>{window.location.reload()}
      )
    
  }
}
