package com.wipro.shopforhome.controller;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.shopforhome.entity.Orders;
import com.wipro.shopforhome.entity.Product;
import com.wipro.shopforhome.repository.DiscountRepository;
import com.wipro.shopforhome.repository.OrdersRepository;
import com.wipro.shopforhome.repository.ProductRepository;

@RestController
@RequestMapping(value="/order")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

	@Autowired
	OrdersRepository orepo;
	
	@Autowired
	ProductRepository prepo;
	
	@Autowired
	DiscountRepository drepo;
	
	@PostMapping("new/{email}/{code}")
	Orders newOrder(@RequestBody Orders order, @PathVariable String email,@PathVariable String code ) {
		
		
		order.setEmail(email);
		System.out.println(order.getEmail());
		System.out.println(order.getCreatedAt());
		
		orepo.save(order);
		
		
		if(!code.equals("1"))
		drepo.deleteById(code);
		
		Product p = prepo.getById(order.getPid());
		
		p.setStock(p.getStock()-order.getCount());
		prepo.save(p);
		
		return order;
	}
	
	@GetMapping(value="/get/{email}")
	public List<Orders> getOrders(@PathVariable String email) 
	{
		return orepo.findByEmailOrderByCreatedAtDesc(email);
	}
	
	
	@Transactional
	@DeleteMapping(value="cancel/{id}")
	public void cancel(@PathVariable int id) {
		orepo.deleteByOrderId(id);
	}
	
	@GetMapping("getall")
	public List<Orders> getAllOrders(){
		
		return orepo.findAllByOrderByCreatedAtDesc();
	}
	
	
}
