package com.example.IMA_Rent_a_Car_System.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@ConfigurationProperties("")
@Data
public class UserProperties {
    private List<User> users;

    @Data
    public static class User {
        private String username;
        private String password;
        private String role;
    }
}
