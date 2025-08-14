package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.CustomerRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.CustomerResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Customer;
import org.springframework.stereotype.Component;

@Component
public class CustomerMapper {
    public Customer toEntity(CustomerRequestDTO dto) {
        return Customer.builder()
                .name(dto.getName())
                .nic(dto.getNic())
                .phone(dto.getPhone())
                .address(dto.getAddress())
                .build();
    }

    public CustomerResponseDTO toDTO(Customer entity) {
        CustomerResponseDTO dto = new CustomerResponseDTO();
        dto.setCustomerId(entity.getCustomerId());
        dto.setName(entity.getName());
        dto.setNic(entity.getNic());
        dto.setPhone(entity.getPhone());
        dto.setAddress(entity.getAddress());
        return dto;
    }
}
