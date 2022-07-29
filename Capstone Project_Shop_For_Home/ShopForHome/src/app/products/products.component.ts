import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any
  searchKey: string = "";

  category:string|any='';  
  products:any;
  constructor(private api: ApiService, private cartService: CartService,public service: ProductService,
    private productservice:ProductService) { }

  ngOnInit(): void {
    this.load();

  }
  

  load(){
    this.productservice.loadProductDetails()
    .subscribe(
      res=>{
        this.products=res;
        console.log(res);
      }
    )
  }


  //Adding products into cart
  addtocart(product: any) {
    product.count=1
    this.cartService.addToCart(product);
    alert('Product Added SuccessFully...!')
  }

  addToWishlist(product:any){
    product.count=1
    this.cartService.addToWishlist(product)
    alert('Product Added SuccessFully...!')
  }
  //filtering the products
  filter(category: string) {
    this.category=category
  }

}
