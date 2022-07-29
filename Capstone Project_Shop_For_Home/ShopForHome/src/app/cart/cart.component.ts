import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal : number=0;
  static total:any;
  //public finalTotal !: number;
  static p:any
  constructor(private cartService: CartService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartService.getCart()
    .subscribe(
      res=>
      {
        this.products=res;
        console.log(res);
      }
      ,
      error=>console.log(error),
      ()=>{
        for(let product of this.products){
        
          this.grandTotal+=(product.count*product.price)
        }
      }
    )

      }
  
      removeItem(product:any){
        this.cartService.removeFromCart(product)
        window.location.reload();
      }


      checkout(){
        CartComponent.total=this.grandTotal;
        CartComponent.p=this.products
        this.router.navigate(["/discount"]);
      }
  // Removing the item from the cart
  // removeItem(product: any) {
  //   this.cartService.removeCartItem(product);
  // }
  // //After Removing cart is empty
  // emptycart() {
  //   this.cartService.removeAllCart();
  // }

  // // Updating the cart with required products
  // updatecart() {
  //   this.grandTotal = this.cartService.getTotalPrice();
  //   this.grandTotal = this.grandTotal;
  // }


  // Increasing the Quantity of the products
  inc(product: any) {
    product.count += 1;
    this.grandTotal+=product.price
    // this.updatecart();
  }

  // Decreasing the Quantity of the products

  des(product: any) {
    if (product.count != 1) {
      product.count -= 1;
      this.grandTotal-=product.price
      // this.updatecart();
    }
  }

}

