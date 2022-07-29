package com.wipro.shopforhome.entity;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	@Id
  private String email;
  private String password;
public User() {
	super();
	// TODO Auto-generated constructor stub
}
public User( String email, String password) {
	super();
	this.email = email;
	this.password = password;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}

//public void setPassword(String password) {
//	this.password = password;
//}

public void setPlanePassword(String password) {
this.password=password;}

public void setPassword(String password)
{
	Base64.Encoder encoder = Base64.getEncoder();
	String normalString = password;
	String encodedString = encoder.encodeToString(normalString.getBytes(StandardCharsets.UTF_8));
	this.password=encodedString;
}
@Override
public String toString() {
	return "User [ email=" + email + ", password=" + password + "]";
}

}