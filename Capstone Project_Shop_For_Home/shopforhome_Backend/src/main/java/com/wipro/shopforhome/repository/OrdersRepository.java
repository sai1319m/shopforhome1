package com.wipro.shopforhome.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wipro.shopforhome.entity.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
	
	
	@Query(value="select sum(total) from orders where created_date between ?1 and ?2",
			nativeQuery=true)
	long getProfits(LocalDate d1, LocalDate d2);
	
	List<Orders> findByEmailOrderByCreatedAtDesc(String email);

	void deleteByOrderId(int id);
	
	List<Orders> findAllByOrderByCreatedAtDesc();
}
