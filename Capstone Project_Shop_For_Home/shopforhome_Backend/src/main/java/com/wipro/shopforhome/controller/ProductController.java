package com.wipro.shopforhome.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.shopforhome.entity.Product;
import com.wipro.shopforhome.service.ProductService;



	
	@RestController
	@RequestMapping("/product")
	@CrossOrigin(origins = "http://localhost:4200")
	public class ProductController {

		@Autowired
		ProductService productService;
		
	
		
		@GetMapping(value = "getAllProduct",
		produces = MediaType.APPLICATION_JSON_VALUE)
		public List<Product> getAllProductInfo() {
			return productService.getAllProducts();
		}
		@PostMapping(value = "storeProduct",
				consumes = MediaType.APPLICATION_JSON_VALUE)
		public String storeProduct(@RequestBody Product product) {
					return productService.storeProduct(product);
		}
		
		@DeleteMapping(value = "deleteProduct/{pid}")
		public String storeProductInfo(@PathVariable("pid") int pid) {
						return productService.deleteProduct(pid);
		}
		
		@PatchMapping(value = "updateProduct")
		public String updateProductPrice(@RequestBody Product product) {
						return productService.updateProductPrice(product);
		}
		
		@GetMapping(value = "findProdutByPrice/{price}")
		public List<Product> findProductByPrice(@PathVariable("price") float price) {
			return productService.findProductUsingPrice(price);
		}

		
		@GetMapping(value="search/{text}")
		public List<Product> Search(@PathVariable String text){
			
			List<Product> products=this.getAllProductInfo();
			List<Product> result=new ArrayList();
			for(Product p:products) {
				if(p.getPname().toLowerCase().contains(text.toLowerCase()))
					result.add(p);
			}
			return result;
			
		}

	}
