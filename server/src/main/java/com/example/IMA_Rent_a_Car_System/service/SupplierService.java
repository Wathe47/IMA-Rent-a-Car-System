package com.example.IMA_Rent_a_Car_System.service;

import com.example.IMA_Rent_a_Car_System.dto.SupplierRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface SupplierService {
    SupplierResponseDTO createSupplier(SupplierRequestDTO dto);
    SupplierResponseDTO getSupplierById(Long id);
    Page<SupplierResponseDTO> getAllSuppliers(Pageable pageable);
    SupplierResponseDTO updateSupplier(Long id, SupplierRequestDTO dto);
    void deleteSupplier(Long id);
}
