package com.wipro.shopforhome.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.shopforhome.entity.Cart;
import com.wipro.shopforhome.repository.CartRepository;

@RestController
@RequestMapping(value="cart")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController
{
	
	
	@Autowired
	private CartRepository crepo;
	
	@GetMapping(value="/get/{email}")
	List<Cart> get(@PathVariable String email)
	{
		return crepo.findByEmail(email);	
	}
	
	@PostMapping(value="/add/{email}")
	Cart add(@PathVariable String email, @RequestBody Cart c) 
	{
		c.setEmail(email);
		crepo.save(c);
		return c;
	}
	
	
	@PostMapping(value="remove/{email}")
	boolean remove(@PathVariable String email, @RequestBody Cart c)
	{
		crepo.deleteByPidAndEmail(c.getPid(), email);
		return true;
	}
	
	@DeleteMapping(value="empty/{email}")
	boolean empty(@PathVariable String email)
	{
		crepo.deleteAllByEmail(email);
		return true;
	}
}
