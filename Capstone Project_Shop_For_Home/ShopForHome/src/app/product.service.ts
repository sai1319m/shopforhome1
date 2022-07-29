import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Router } from '@angular/router';
import { Discounts } from './discounts';
@Injectable({
  providedIn: 'root'//giving the information  in providers attribute in app.module.ts
})
export class ProductService {

  constructor(public http: HttpClient, private router: Router) { } //DI for HttpClient API

  //Loading product detains from the backend
  loadProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product/getAllProduct")
  }

  storeProductDetails(product: Product): Observable<string> {
    return this.http.post("http://localhost:8080/product/storeProduct", product, { responseType: 'text' })
  }

  deleteProductDetails(pid: number): Observable<string> {
    return this.http.delete("http://localhost:8080/product/deleteProduct/" + pid, { responseType: 'text' });
  }

  updateProductInfo(product: any): Observable<string> {
    return this.http.patch("http://localhost:8080/product/updateProduct", product, { responseType: 'text' })
  }

  loggedIn() {
    console.log(sessionStorage.getItem('email'));
    return !!sessionStorage.getItem('token')
  }

  logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('admin')
    this.router.navigate([''])
  }

  isAdminloggedin(){

    console.log(sessionStorage.getItem('admin'))
    if(sessionStorage.getItem('admin')==null){
      return false
    }
    return true

  }

  search(text:string){
    return this.http.get(`http://localhost:8080/product/search/${text}`)
  }

  saveDiscount(discount:any):Observable<string>{
    return this.http.patch("http://localhost:8080/discount/storeDiscount", discount, { responseType: 'text' })
  }
  loadDiscounts(): Observable<Discounts[]>{
    return this.http.get<Discounts[]>("http://localhost:8080/discount/getAllDiscounts")
  }
  
  storeDiscountDetails(discounts:Discounts):Observable<string>{
    return this.http.post("http://localhost:8080/discount/storeDiscount", discounts, { responseType: 'text' })
  }
  deleteDiscountDetails(discountCode: String): Observable<string> {
    return this.http.delete("http://localhost:8080/discount/deleteDiscount/" + discountCode, { responseType: 'text' });
  }
  
  getAmount(discountCode: String):Observable<number>{
    return this.http.get<number>("http://localhost:8080/discount/getAmount/" + discountCode);
  }
  getDiscount():Observable<any>{
    console.log(sessionStorage.getItem('email'))
    return this.http.get<any>("http://localhost:8080/discount/getUserDiscount/"+sessionStorage.getItem('email'));
      
  }
  
}
