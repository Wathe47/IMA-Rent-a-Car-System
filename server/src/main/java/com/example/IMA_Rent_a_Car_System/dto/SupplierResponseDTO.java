package com.example.IMA_Rent_a_Car_System.dto;

import lombok.Data;

@Data
public class SupplierResponseDTO {
    private Long supplierId;
    private String name;
    private String nic;
    private String address;
    private String phone;
}
