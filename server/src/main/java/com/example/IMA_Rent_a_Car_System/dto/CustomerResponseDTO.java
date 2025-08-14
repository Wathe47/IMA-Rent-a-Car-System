package com.example.IMA_Rent_a_Car_System.dto;

import lombok.Data;

@Data
public class CustomerResponseDTO {
    private Long customerId;
    private String name;
    private String nic;
    private String phone;
    private String address;
}
