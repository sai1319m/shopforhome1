package com.wipro.shopforhome.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.wipro.shopforhome.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

	Admin findByEmail(String email);
	
}
