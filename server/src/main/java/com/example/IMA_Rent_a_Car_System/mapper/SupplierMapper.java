package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.SupplierRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Supplier;
import org.springframework.stereotype.Component;

@Component
public class SupplierMapper {
    public Supplier toEntity(SupplierRequestDTO dto) {
        return Supplier.builder()
                .name(dto.getName())
                .nic(dto.getNic())
                .address(dto.getAddress())
                .phone(dto.getPhone())
                .build();
    }

    public SupplierResponseDTO toDTO(Supplier entity) {
        SupplierResponseDTO dto = new SupplierResponseDTO();
        dto.setSupplierId(entity.getSupplierId());
        dto.setName(entity.getName());
        dto.setNic(entity.getNic());
        dto.setAddress(entity.getAddress());
        dto.setPhone(entity.getPhone());
        return dto;
    }
}
