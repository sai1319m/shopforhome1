import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { DiscountComponent } from '../discount/discount.component';
import { Discounts } from '../discounts';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;
  public shipping:number|any
  static orderTotal:number
  constructor(private cartService: CartService) { }
  static coupon:Discounts=new Discounts("1","",0,"")


  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        // this.grandTotal = this.cartService.getTotalPrice();

      })

      this.grandTotal=CartComponent.total;

      if(this.grandTotal>=500)
      this.shipping=0
      else
      this.shipping=40

      
      CheckoutComponent.orderTotal=this.grandTotal+this.shipping-CheckoutComponent.coupon.discountAmount

  }

  getOrderTotal(){
    return CheckoutComponent.orderTotal;
  }


  getDiscount(){
  return CheckoutComponent.coupon.discountAmount;
  }


}
