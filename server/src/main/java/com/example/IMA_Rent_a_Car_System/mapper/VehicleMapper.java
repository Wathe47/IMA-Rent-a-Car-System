package com.example.IMA_Rent_a_Car_System.mapper;

import com.example.IMA_Rent_a_Car_System.dto.VehicleRequestDTO;
import com.example.IMA_Rent_a_Car_System.dto.VehicleResponseDTO;
import com.example.IMA_Rent_a_Car_System.entity.Vehicle;
import org.springframework.stereotype.Component;

@Component
public class VehicleMapper {
    public Vehicle toEntity(VehicleRequestDTO dto) {
        return Vehicle.builder()
                .type(dto.getType())
                // supplier entity reference should be set in the service layer
                .registrationNo(dto.getRegistrationNo())
                .manufacture(dto.getManufacture())
                .model(dto.getModel())
                .fuelType(dto.getFuelType())
                .seats(dto.getSeats())
                .dailyRate(dto.getDailyRate())
                .extraKmRate(dto.getExtraKmRate())
                .transmissionType(dto.getTransmissionType())
                .build();
    }

    public VehicleResponseDTO toDTO(Vehicle entity) {
        VehicleResponseDTO dto = new VehicleResponseDTO();
        dto.setVehicleId(entity.getVehicleId());
        dto.setType(entity.getType());
        // Set supplierId from supplier if present
        if (entity.getSupplier() != null) {
            dto.setSupplierId(entity.getSupplier().getSupplierId());
        } else {
            dto.setSupplierId(null);
        }
        dto.setRegistrationNo(entity.getRegistrationNo());
        dto.setManufacture(entity.getManufacture());
        dto.setModel(entity.getModel());
        dto.setFuelType(entity.getFuelType());
        dto.setSeats(entity.getSeats());
        dto.setDailyRate(entity.getDailyRate());
        dto.setExtraKmRate(entity.getExtraKmRate());
        dto.setTransmissionType(entity.getTransmissionType());
        return dto;
    }
}
