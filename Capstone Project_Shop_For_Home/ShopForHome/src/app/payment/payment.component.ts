import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

   msg:string|any
   phNo:string|any
   name:string|any
   pincode:string|any
   city:string|any
   state:string|any
   address:string=''
   orders:Order[]=[]

    constructor(
      private cartservice:CartService,
      private orderservice:OrderService,
      private router:Router
    ) {} 

  ngOnInit(): void {
  
    
  }

  payNow(){

    
    this.address=this.pincode+","+this.city+","+this.state
    //console.log("Order Placed Successfully!!!");
   let discount=CheckoutComponent.coupon.discountAmount
   let discPerProd=discount/CartComponent.p.length
      for(let p of CartComponent.p){
        
        var order = new Order(p.pid,p.pname,p.price,p.url,p.category,p.count,(p.price*p.count)-discPerProd,this.address,this.phNo,this.name)
        this.orders.push(order)
      }

        this.orderservice.newOrder(this.orders,CheckoutComponent.coupon.discountCode)
        this.cartservice.emptycart();
        alert("Thank You!! Your Order Placed Successfully")
        this.router.navigateByUrl("products")
      }
  }

