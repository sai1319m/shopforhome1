package com.wipro.shopforhome;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;



@SpringBootApplication(scanBasePackages = "com.wipro.shopforhome")
@EnableAutoConfiguration 
@EnableSwagger2
@EntityScan(basePackages = { "com.wipro.shopforhome.entity"})							// Enable entity class 
@EnableJpaRepositories(basePackages = "com.wipro.shopforhome.repository")

public class ShopforhomeApplication 
{
	public static void main(String[] args) 
	{
		SpringApplication.run(ShopforhomeApplication.class, args);
	}

}
