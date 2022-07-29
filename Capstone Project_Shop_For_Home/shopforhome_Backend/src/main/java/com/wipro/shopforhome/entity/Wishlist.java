package com.wipro.shopforhome.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Wishlist {
	
	@Id	
	private int pid;
	private String pname;
	private float price;
	private String url;
	public String category;
	public String email;
	
	
	
	public Wishlist() {
		// TODO Auto-generated constructor stub
	}



	public Wishlist(int pid, String pname, float price, String url, String category, String email) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.price = price;
		this.url = url;
		this.category = category;
		this.email = email;
	}



	public int getPid() {
		return pid;
	}



	public void setPid(int pid) {
		this.pid = pid;
	}



	public String getPname() {
		return pname;
	}



	public void setPname(String pname) {
		this.pname = pname;
	}



	public float getPrice() {
		return price;
	}



	public void setPrice(float price) {
		this.price = price;
	}



	public String getUrl() {
		return url;
	}



	public void setUrl(String url) {
		this.url = url;
	}



	public String getCategory() {
		return category;
	}



	public void setCategory(String category) {
		this.category = category;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	
}
