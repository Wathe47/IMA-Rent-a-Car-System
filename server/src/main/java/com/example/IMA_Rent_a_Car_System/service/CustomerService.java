package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.CustomerRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.CustomerResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CustomerService {
    CustomerResponseDTO createCustomer(CustomerRequestDTO dto);
    CustomerResponseDTO getCustomerById(Long id);
    Page<CustomerResponseDTO> getAllCustomers(Pageable pageable);
    CustomerResponseDTO updateCustomer(Long id, CustomerRequestDTO dto);
    void deleteCustomer(Long id);
}
