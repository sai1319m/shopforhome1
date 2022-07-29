import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  grandTotal = 0;

  baseUrl="http://localhost:8080"

  constructor(
    private http:HttpClient

  ) { }
  //Getting all the products
  getProducts() {
    return this.productList.asObservable();
  }

  removeFromCart(product:any){
    this.http.post(`${this.baseUrl}/cart/remove/${sessionStorage.getItem('email')}`,product)
    .subscribe(
      res=>{
        console.log(res)
      }
    )
  }

  emptycart(){
    this.http.delete(`${this.baseUrl}/cart/empty/${sessionStorage.getItem('email')}`)
    .subscribe(
      res=>
      console.log(res)
    )
  }


  // setProducts(product: any) {
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }

  // Removing the item from the cart
  

  //Generating the bill
  // getTotalPrice() {
  //   this.grandTotal = 0;
  //   this.cartItemList.forEach((product: any) => {
  //     this.grandTotal += (product.quantity * product.price);
  //   })
  //   return this.grandTotal;
  // }
  // //if cart is empty we are adding products into cart
  // addtoCart(product: any) {
  //   let productExists = false
  //   for (let i in this.cartItemList) {
  //     if (this.cartItemList[i].productPid === product.pid) {
  //       this.cartItemList[i].quantity++
  //       productExists = true;
  //       break;
  //     }
    // }
    // if (!productExists) {
    //   this.cartItemList.push({
    //     productPid: product.pid,
    //     pname: product.pname,
    //     url: product.url,
    //     quantity: 1,
    //     price: product.price,
    //     category: product.category
    //   })
    //   this.productList.next(this.cartItemList);
    //   this.getTotalPrice();
    // }}
  

  addToWishlist(product:any){
      this.http.post(`${this.baseUrl}/wishlist/add/${sessionStorage.getItem('email')}`,product)
      .subscribe(
        res=>{
          console.log(res)
        }
      )
  }

  getWishlisted(){
    return this.http.get(`${this.baseUrl}/wishlist/get/${sessionStorage.getItem('email')}`)
  }

  addToCart(product:any){
    this.http.post(`${this.baseUrl}/cart/add/${sessionStorage.getItem('email')}`,product)
    .subscribe(
      res=>{
        console.log(res)
      }
    )
}

getCart(){
  return this.http.get(`${this.baseUrl}/cart/get/${sessionStorage.getItem('email')}`)
}
  
removeFromWishlist(product:any){
  this.http.post(`${this.baseUrl}/wishlist/remove/${sessionStorage.getItem('email')}`,product)
  .subscribe(
    res=>
    console.log(res)
  )
}

order(items:any){
  for(let item of items)
  this.http.post(`http://locahost:8080/`,item)
  .subscribe(
    res=>console.log(res)
  )
}

}






