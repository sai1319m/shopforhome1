package com.wipro.shopforhome.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.shopforhome.entity.Cart;



public interface CartRepository extends JpaRepository<Cart, String> {


	List<Cart> findByEmail(String email);
	
	
	@Transactional
	void deleteByPidAndEmail(int id,String email);
	
	@Transactional
	void deleteAllByEmail(String email);
	
}