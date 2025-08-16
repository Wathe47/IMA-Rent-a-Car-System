package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.SupplierVehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.SupplierVehicle;
import org.springframework.stereotype.Component;

@Component
public class SupplierVehicleMapper {
    public SupplierVehicle toEntity(SupplierVehicleRequestDTO dto) {
        return SupplierVehicle.builder()
                // .supplier(supplier) // set in service
                // .vehicle(vehicle)   // set in service
                .startMileage(dto.getStartMileage())
                .endMileage(dto.getEndMileage())
                .mileageLimit(dto.getMileageLimit())
                .monthlyRate(dto.getMonthlyRate())
                .dailyRate(dto.getDailyRate())
                .build();
    }

    public SupplierVehicleResponseDTO toDTO(SupplierVehicle entity) {
        SupplierVehicleResponseDTO dto = new SupplierVehicleResponseDTO();
        dto.setId(entity.getId());
        dto.setSupplierId(entity.getSupplier() != null ? entity.getSupplier().getSupplierId() : null);
        dto.setVehicleId(entity.getVehicle() != null ? entity.getVehicle().getVehicleId() : null);
        dto.setStartMileage(entity.getStartMileage());
        dto.setEndMileage(entity.getEndMileage());
        dto.setMileageLimit(entity.getMileageLimit());
        dto.setMonthlyRate(entity.getMonthlyRate());
        dto.setDailyRate(entity.getDailyRate());
        return dto;
    }
}
