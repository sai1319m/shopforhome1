package com.wipro.shopforhome.repository;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.shopforhome.entity.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {
	
	
	List<Wishlist> findByEmail(String email);
	
	
	@Transactional
	void deleteByPidAndEmail(int id,String email);
}
