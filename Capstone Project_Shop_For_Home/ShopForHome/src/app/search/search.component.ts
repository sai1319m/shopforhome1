import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchText:string=''
  public products:any

  constructor(private pservice:ProductService,
    private cartService:CartService,
    private router:ActivatedRoute,
    public service: ProductService,
  ) { }

  ngOnInit(): void {

    this.searchText=this.router.snapshot.params['term']
    this.pservice.search(this.searchText)
    .subscribe(
      res=>{
        console.log(res);
        this.products=res
      }
    )
  }

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
}
