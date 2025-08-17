package com.example.IMA_Rent_a_Car_System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import com.example.IMA_Rent_a_Car_System.config.UserProperties;

@SpringBootApplication
@EnableConfigurationProperties(UserProperties.class)
public class ImaRentACarSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImaRentACarSystemApplication.class, args);
	}

}
