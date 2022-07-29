import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private cartService: CartService, public service: ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  //Searching the products from the product list
  search(){

    this.router.navigateByUrl('search/'+this.searchTerm)
     .then(() => {
      window.location.reload();
  })
}}
