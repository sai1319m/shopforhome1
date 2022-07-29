import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  products:Product[]|any

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getWishlisted()
    .subscribe(
  res=>
  {
    this.products=res
    console.log(res)
  })
  }

  removeItem(product:any){
    this.cartService.removeFromWishlist(product);
    window.location.reload();
  }


  addtocart(product:any){
    product.count=1
    this.cartService.addToCart(product)
  }
}
