package com.wipro.shopforhome.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wipro.shopforhome.entity.Admin;
import com.wipro.shopforhome.repository.AdminRepository;
import com.wipro.shopforhome.repository.OrdersRepository;
import com.wipro.shopforhome.service.AdminService;

@RestController
@RequestMapping(value="Admin")
@CrossOrigin(origins = "http://localhost:4200")
 public class AdminController {
	@Autowired
	AdminService adminService;
	
	@Autowired
	AdminRepository arepo;
	
	@Autowired
	OrdersRepository  orepo;
	
	@PostMapping(value="register",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String adminRegister(@RequestBody Admin adm) {
	return adminService.adminRegistration(adm);
	}
	
	
	@PostMapping(value="login")
	public Boolean loginCustomer( @RequestBody Admin admin) 
    {
        Boolean a=false;
        String email=admin.getEmail();
        String password=admin.getPassword();
        System.out.println(email+" "+password);
        Admin ad = arepo.findByEmail(email);//.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: "));
    //    System.out.println(d.getEmail() +d.getPassword() );
       if(ad!=null)
        if(email.equals(ad.getEmail()) && password.equals(ad.getPassword()))
                {
        //    System.out.println(d.getEmail() +d.getPassword() );
            a=true;
           
                }
        return a;
    }
	
	@GetMapping(value="displayAdmin")
	public List<Admin> getAllAdminAvaliable() {
		return adminService.getAllAdminAvaliable();
	}
	
	
	 @GetMapping(value = "logout/{email}")
	 public String adminLogoutInfo(@PathVariable("email") String email) {
	 return adminService.adminLogout(email);
        }
	 
	 
	 @GetMapping(value="profits/{d1}/{d2}")
	 long GetProfits(@PathVariable String d1,@PathVariable String d2) {
	
		LocalDate date1=LocalDate.parse(d1);
		LocalDate date2=LocalDate.parse(d2);
		
	 return orepo.getProfits(date1, date2);
	 }

	 
	 
}
