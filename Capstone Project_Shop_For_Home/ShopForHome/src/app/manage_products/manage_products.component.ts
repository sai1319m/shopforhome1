import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manage_products',
  templateUrl: './manage_products.component.html',
  styleUrls: ['./manage_products.component.css']
})
export class ManageProducts implements OnInit {
  products: Array<Product> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  flag: boolean = false;
  pid: number = 0;
  price: number = 0;
  pname: String = "";
  category: String = "";
  url: String = "";
  stock:number=0;

  dd: Date = new Date();
  constructor(public pser: ProductService) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time

  ngOnInit(): void {
    this.loadProducts();
  }
  // Loading the Product details
  loadProducts(): void {
    this.pser.loadProductDetails().subscribe(res => this.products = res
    );
    console.log('pro', this.products)
  }
  //Storing the product details in the database
  storeProduct(productRef: NgForm) {
    console.log(productRef.value);
    this.pser.storeProductDetails(productRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadProducts());
    alert("Product Added Successfully");
  }

  //Deleting the product details
  deleteProduct(pid: number) {
    this.pser.deleteProductDetails(pid).
      subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadProducts())
  }

  // Updating the product details
  updateProduct(product: Product) {
    console.log(product);
    this.flag = true;
    this.pid = product.pid;
    this.price = product.price;
    this.category = product.category;
    this.pname = product.pname;
    this.url = product.url;
    this.stock=product.stock;

  }
  
  updateProductPrice() {
    let product = { "pid": this.pid, "price": this.price, "pname": this.pname, "category": this.category, "url": this.url,"stock":this.stock }
    console.log(product);
    this.pser.updateProductInfo(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Product Updated Successfully");
        this.flag = false;
      })
  }
}
