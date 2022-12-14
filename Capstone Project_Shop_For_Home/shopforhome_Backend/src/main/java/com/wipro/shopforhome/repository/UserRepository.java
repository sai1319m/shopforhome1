package com.wipro.shopforhome.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.wipro.shopforhome.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	
	
	User findByEmail(String email);
	
}
