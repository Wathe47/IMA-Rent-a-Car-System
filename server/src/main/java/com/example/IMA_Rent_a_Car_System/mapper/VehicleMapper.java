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
                .ownerType(dto.getOwnerType())
                .ownerId(dto.getOwnerId())
                .registrationNo(dto.getRegistrationNo())
                .manufacture(dto.getManufacture())
                .model(dto.getModel())
                .fuelType(dto.getFuelType())
                .seats(dto.getSeats())
                .dailyRate(dto.getDailyRate())
                .extraKmRate(dto.getExtraKmRate())
                .build();
    }

    public VehicleResponseDTO toDTO(Vehicle entity) {
        VehicleResponseDTO dto = new VehicleResponseDTO();
        dto.setVehicleId(entity.getVehicleId());
        dto.setType(entity.getType());
        dto.setOwnerType(entity.getOwnerType());
        dto.setOwnerId(entity.getOwnerId());
        dto.setRegistrationNo(entity.getRegistrationNo());
        dto.setManufacture(entity.getManufacture());
        dto.setModel(entity.getModel());
        dto.setFuelType(entity.getFuelType());
        dto.setSeats(entity.getSeats());
        dto.setDailyRate(entity.getDailyRate());
        dto.setExtraKmRate(entity.getExtraKmRate());
        return dto;
    }
}
