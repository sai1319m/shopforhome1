import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CheckoutComponent } from '../checkout/checkout.component';
import { Discounts } from '../discounts';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  userdiscount: Array<Discounts> = [];
  public discount:any
  constructor(private api: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    
    console.log(sessionStorage.getItem('email'));
    this.api.getDiscount()
    .subscribe(res => {
      this.userdiscount = res;

    });}

    avail(discount:Discounts){
      CheckoutComponent.coupon=discount;
      this.router.navigateByUrl("checkout")
    }

}
